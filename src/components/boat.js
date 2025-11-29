import { Vector3, MathUtils, Sphere, Mesh, MeshMatcapMaterial, MeshBasicMaterial, Quaternion } from "three";
import loaderManager from "../managers/loadermanager";
import { MeshBVH, acceleratedRaycast } from "three-mesh-bvh";
import * as THREE from "three";

Mesh.prototype.raycast = acceleratedRaycast;

//en pirate boat
export function createBoat(scene, groundMirror) {
  const gltf = loaderManager.assets["boatModel"].model;
  const boatModel = gltf.scene.clone();

  const matcapTex = loaderManager.assets["matcap"].texture;
  boatModel.traverse((c) => {
    if (c.isMesh) {
      c.material = new MeshMatcapMaterial({
        matcap: matcapTex,
        color: 0xffffff,
      });

      c.geometry = c.geometry.clone();
      if (!c.geometry.index) c.geometry = c.geometry.toNonIndexed();
      c.geometry.computeBoundingSphere();

      c.geometry.boundsTree = new MeshBVH(c.geometry, { lazyGeneration: false });

      //  wireframe hitbox visualization for myself
      const wireMat = new MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
        opacity: 0.3,
        transparent: true,
      });
      const wireMesh = new Mesh(c.geometry, wireMat);
      wireMesh.position.copy(c.position);
      wireMesh.quaternion.copy(c.quaternion);
      wireMesh.scale.copy(c.scale);
      scene.add(wireMesh);
      c.userData.hitboxMesh = wireMesh;
    }
  });

  boatModel.scale.set(10, 10, 10);
  boatModel.position.set(0, 1.69 , 0);

  scene.add(boatModel);

  const boatMeshes = [];
  boatModel.traverse((c) => {
    if (c.isMesh) boatMeshes.push(c);
  });

  boatModel.userData = {
    currentVelocity: new Vector3(),
    impulses: [],
    angularVelocity: 0,
    angularEnd: 0,
    angularTarget: 0,
    meshes: boatMeshes,
  };

  return boatModel;
}

//make boat go vroom
export function addBoatImpulse(boat, dir, moveDistance = 2500, durationMs = 4000) {
  const now = Date.now();
  const velocity = dir.clone().multiplyScalar(moveDistance / (durationMs / 1000));

  boat.userData.impulses.push({
    v: velocity,
    start: now,
    end: now + durationMs,
  });
}

//boat go brrr when splash
export function updateBoatPhysics(boat, dt, bergs = []) {
  const ud = boat.userData;
  const cur = ud.currentVelocity;
  const desired = new Vector3();

  const now = Date.now();
  const still = [];

  for (const imp of ud.impulses) {
    const span = imp.end - imp.start;
    const w = Math.max(0, (imp.end - now) / span);
    if (w > 0) {
      desired.add(imp.v.clone().multiplyScalar(w));
      still.push(imp);
    }
  }
  ud.impulses = still;

  const accel = 6;
  const toTarget = desired.clone().sub(cur);
  const dist = toTarget.length();
  if (dist > 1e-4) {
    const maxDelta = accel * dt;
    if (dist < maxDelta) cur.copy(desired);
    else cur.add(toTarget.normalize().multiplyScalar(maxDelta));
  }

  boat.position.add(cur.clone().multiplyScalar(dt));

  const tmpPos = new Vector3();
  const tmpScale = new Vector3();
  const tmpQuat = new Quaternion();

  for (const mesh of ud.meshes) {
    if (mesh.userData.hitboxMesh) {
      mesh.userData.hitboxMesh.position.copy(mesh.getWorldPosition(tmpPos));
      mesh.userData.hitboxMesh.quaternion.copy(mesh.getWorldQuaternion(tmpQuat));
      mesh.userData.hitboxMesh.scale.copy(mesh.getWorldScale(tmpScale));
    }
  }

  handleBoatCollision(boat, bergs, dt);

  const lerpFactor = 0.05;  
  const damping = 0.95;     
  
  ud.angularVelocity += (ud.angularTarget - ud.angularVelocity) * lerpFactor;
  ud.angularVelocity *= damping;
  
  if (Math.abs(ud.angularVelocity) < 0.0005) {
    ud.angularVelocity = 0;
  }

  boat.rotation.y += ud.angularVelocity * dt;
  ud.angularTarget *= damping;
}

//hello im under the water 
export function updateBoatSinking(boat, sinkStartY, context) {
  if (!context.sinkingStarted) return;

  const progress = MathUtils.mapLinear(
    context.timeLeft,
    8, 0,
    0, 1
  );

  const sinkDepth = 5;
  boat.position.y = sinkStartY - progress * sinkDepth;

  const tmpPos = new Vector3();
  const tmpScale = new Vector3();
  const tmpQuat = new Quaternion();

  for (const mesh of boat.userData.meshes) {
    if (mesh.userData.hitboxMesh) {
      mesh.userData.hitboxMesh.position.copy(mesh.getWorldPosition(tmpPos));
      mesh.userData.hitboxMesh.quaternion.copy(mesh.getWorldQuaternion(tmpQuat));
      mesh.userData.hitboxMesh.scale.copy(mesh.getWorldScale(tmpScale));
    }
  }
}

//boat bump into bergs go boom
export function handleBoatCollision(boat, bergs, dt) {
  const tmpVec = new Vector3();
  const tmpPos = new Vector3();
  const tmpQuat = new Quaternion();
  const movement = boat.userData.currentVelocity.clone().multiplyScalar(dt);

  for (const mesh of boat.userData.meshes) {
    if (!mesh.geometry.boundsTree) continue;

    const meshRadius = mesh.geometry.boundingSphere.radius * mesh.scale.x;
    const meshWorldPos = mesh.getWorldPosition(tmpPos);

    const steps = Math.ceil(movement.length() / (meshRadius * 0.05)); 
    const stepVec = movement.clone().divideScalar(steps);

    for (const berg of bergs) {
      if (!berg.geometry.boundsTree) continue;

      let collided = false;

      for (let i = 0; i <= steps; i++) {
        const sphereCenter = meshWorldPos.clone().add(stepVec.clone().multiplyScalar(i));
        const localSphereCenter = sphereCenter.clone();
        berg.worldToLocal(localSphereCenter); 

        const sphere = new Sphere(localSphereCenter, meshRadius);

        berg.geometry.boundsTree.shapecast({
          intersectsBounds: box => box.intersectsSphere(sphere),
          intersectsTriangle: tri => {
            const closest = tri.closestPointToPoint(localSphereCenter, tmpVec);
            const dist = closest.distanceTo(localSphereCenter);
            if (dist < meshRadius) {

              const penetrationVec = localSphereCenter.clone().sub(closest);
              penetrationVec.y = 0; 
              const penetration = penetrationVec.length();
              const pushDir = penetrationVec.clone().normalize();

              boat.position.add(pushDir.clone().multiplyScalar(penetration + 0.01));

              const vel = boat.userData.currentVelocity;
              const velXZ = vel.clone();
              velXZ.y = 0; 
              const dot = velXZ.dot(pushDir);
              if (dot < 0) vel.addScaledVector(pushDir, -1.5 * dot); 
              vel.multiplyScalar(0.7); 

              boat.userData.angularVelocity += (Math.random() - 0.5) * 0.1;

              collided = true;
              return true;
            }
            return false;
          },
        });

        if (collided) break;
      }
    }
  }
}
