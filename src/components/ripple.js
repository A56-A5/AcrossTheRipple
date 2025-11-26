import {
  BufferGeometry,
  Float32BufferAttribute,
  LineBasicMaterial,
  Line,
  Vector3,
  MathUtils,
} from "three";
import { addBoatImpulse } from "./boat.js";

export function createRippleGeometry() {
  const pts = [];
  const segments = 64;

  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    pts.push(Math.cos(a), 0, Math.sin(a));
  }

  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pts, 3));
  return g;
}

export function spawnRipple(scene, ripples, unitGeom, pos, groundMirror, triggersMovement) {
  const mat = new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
  const ring = new Line(unitGeom.clone(), mat);

  const y = (groundMirror ? groundMirror.position.y : 0) + 0.0009;
  ring.position.set(pos.x, y, pos.z);
  ring.scale.set(0.001, 1, 0.001);
  scene.add(ring);

  ripples.push({
    start: performance.now(),
    center: new Vector3(pos.x, y, pos.z),
    speed: 3,
    life: 3.8,
    maxRadius: 12,
    ring,
    triggered: false,
    triggersMovement,
  });
}

export function updateRipples(scene, ripples, boat) {
  const now = performance.now();

  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    const elapsed = (now - r.start) * 0.001;
    const radius = elapsed * r.speed;

    r.ring.scale.set(radius, 1, radius);
    r.ring.material.opacity = Math.max(0, 1 - elapsed / r.life);

    if (boat && r.triggersMovement && !r.triggered) {

      // XZ only distance
      const bp = new Vector3();
      boat.getWorldPosition(bp);

      const dx = bp.x - r.center.x;
      const dz = bp.z - r.center.z;
      const dist = Math.hypot(dx, dz);

      if (dist <= radius) {
        r.triggered = true;

        const dir = new Vector3(dx, 0, dz);
        if (dir.lengthSq() < 1e-6) dir.set(1, 0, 0);
        dir.normalize();

        // linear impulse
        addBoatImpulse(boat, dir, 15, 5000);

        // angular (yaw) impulse
        const fwd = new Vector3();
        boat.getWorldDirection(fwd);
        fwd.y = 0;
        fwd.normalize();

        const dot = fwd.dot(dir);
        const cross = fwd.x * dir.z - fwd.z * dir.x;
        const signed = Math.atan2(cross, dot);

        boat.userData.angularTarget += MathUtils.clamp(signed * 0.6, -1, 1);
        boat.userData.angularEnd = Date.now() + 1500;
      }
    }

    if (radius > r.maxRadius || elapsed > r.life) {
      scene.remove(r.ring);
      r.ring.geometry.dispose();
      r.ring.material.dispose();
      ripples.splice(i, 1);
    }
  }
}
