import { Vector3, MathUtils } from "three";
import loaderManager from "../managers/loaderManager";
import { MeshMatcapMaterial } from "three";

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
    }
  });

  const y = groundMirror ? groundMirror.position.y : 0;
  boatModel.position.set(0, y + 2, 0);
  boatModel.scale.set(10, 10, 10);
  scene.add(boatModel);

  boatModel.userData = {
    currentVelocity: new Vector3(),
    impulses: [],
    angularVelocity: 0,
    angularEnd: 0,
  };

  return boatModel;
}

export function addBoatImpulse(boat, dir, moveDistance = 15, durationMs = 5000) {
  const now = Date.now();
  const velocity = dir.clone().multiplyScalar(moveDistance / (durationMs / 1000));

  boat.userData.impulses.push({
    v: velocity,
    start: now,
    end: now + durationMs,
  });
}

export function updateBoatPhysics(boat, dt) {
  const ud = boat.userData;
  const cur = ud.currentVelocity;
  const desired = new Vector3();

  // integrate impulses
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

  // acceleration
  const accel = 8;
  const toTarget = desired.clone().sub(cur);
  const dist = toTarget.length();
  if (dist > 1e-4) {
    const maxDelta = accel * dt;
    if (dist < maxDelta) cur.copy(desired);
    else cur.add(toTarget.normalize().multiplyScalar(maxDelta));
  }

  // apply movement (XZ only)
  boat.position.x += cur.x * dt;
  boat.position.z += cur.z * dt;

  // apply rotation (Y only)
  if (Math.abs(ud.angularVelocity) > 1e-4) {
    boat.rotation.y += ud.angularVelocity * dt;
    ud.angularVelocity *= 1 - 1.8 * dt;
    if (now > ud.angularEnd) ud.angularVelocity *= 0.6;
    if (Math.abs(ud.angularVelocity) < 1e-4) ud.angularVelocity = 0;
  }
}
