import * as THREE from "three";
import loaderManager from "../managers/loaderManager.js";
import { MeshBVH, acceleratedRaycast } from "three-mesh-bvh";

THREE.Mesh.prototype.raycast = acceleratedRaycast;

//big thingys 
export function loadAllIcebergs(scene) {
  const entry = loaderManager.assets["allbergs"];

  if (!entry || !entry.model || !entry.model.scene) {
    console.warn("allbergs.glb not loaded!");
    return [];
  }

  const root = entry.model.scene.clone(true);
  const bergs = [];

  root.traverse((c) => {
    if (c.isMesh) {
      c.geometry = c.geometry.clone();
      c.material = c.material.clone();
      c.material.color.multiplyScalar(1.35);
      c.frustumCulled = true;

      if (!c.geometry.index) c.geometry = c.geometry.toNonIndexed();

      c.geometry.computeBoundingSphere();

      c.geometry.boundsTree = new MeshBVH(c.geometry, { lazyGeneration: false });

      c.userData.collisionRadius = c.geometry.boundingSphere.radius * c.scale.x;

      bergs.push(c);
    }
  });

  root.updateMatrixWorld(true);
  root.traverse((c) => {
    if (c.matrixAutoUpdate) {
      c.updateMatrix();
      c.matrixAutoUpdate = false;
    }
  });

  scene.add(root);

  return bergs;
}

//splash dboom boat go brrr
export function checkPointCollision(point, mesh) {
  const ray = new THREE.Ray(point.clone(), new THREE.Vector3(0, 1, 0));
  const hits = [];

  mesh.raycast(
    { ray, recursive: false, face: null, distance: Infinity, intersects: hits },
    mesh
  );

  return hits.length > 0;
}
