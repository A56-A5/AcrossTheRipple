// bergs.js
import * as THREE from "three";
import loaderManager from "../managers/loaderManager.js";

export function spawnIcebergs(scene, boat, options = {}) {
  const {
    amount = 10,
    minDistance = 30,
    maxDistance = 100,
    verticalRange = 5,
    minBergDistance = 40,
  } = options;

  const bergs = [];
  const bergModels = [];

  // Load iceberg models efficiently
  for (let i = 1; i <= 9; i++) {
    const entry = loaderManager.assets[`berg${i}`];
    if (entry?.model?.scene) {
      bergModels.push(entry.model.scene);
    }
  }

  if (bergModels.length === 0) {
    console.warn("No iceberg models loaded!");
    return bergs;
  }

  // Spawn icebergs
  for (let i = 0; i < amount; i++) {
    const original = bergModels[Math.floor(Math.random() * bergModels.length)];
    const berg = original.clone(true);

    berg.traverse((c) => {
      if (c.isMesh && c.material) {
        c.material = c.material.clone();
        c.material.color.multiplyScalar(1.35);   // brighten without losing texture
        c.frustumCulled = true;
      }
    });

    // scale
    berg.scale.setScalar(THREE.MathUtils.randFloat(5.3, 8.4));

    const pos = findValidBergPosition(
      boat.position,
      bergs,
      minDistance,
      maxDistance,
      minBergDistance,
      verticalRange
    );

    berg.position.copy(pos);

    berg.updateMatrix();
    berg.matrixAutoUpdate = false;

    scene.add(berg);
    bergs.push(berg);
  }

  return bergs;
}
function findValidBergPosition(
  boatPos,
  existingBergs,
  minDist,
  maxDist,
  minBergDist,
  verticalRange
) {
  const pos = new THREE.Vector3();

  for (let i = 0; i < 60; i++) {
    randomBergPosition(pos, boatPos, minDist, maxDist, verticalRange);

    let ok = true;
    for (let b of existingBergs) {
      if (pos.distanceTo(b.position) < minBergDist) {
        ok = false;
        break;
      }
    }
    if (ok) break;
  }

  return pos;
}

function randomBergPosition(target, boatPos, minDist, maxDist, verticalRange) {
  const angle = Math.random() * Math.PI * 2;
  const radius = THREE.MathUtils.randFloat(minDist, maxDist);

  target.set(
    boatPos.x + Math.cos(angle) * radius,
    THREE.MathUtils.randFloatSpread(verticalRange * 2),
    boatPos.z + Math.sin(angle) * radius
  );
}
