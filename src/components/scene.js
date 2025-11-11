import {
  WebGLRenderer,
  Scene,
  Color,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  BufferGeometry,
  Vector3,
  Points,
  PointsMaterial,
  BufferAttribute,
  CircleGeometry,
  IcosahedronGeometry,
  Clock,
  ShaderChunk,
  RepeatWrapping,
  MathUtils,
  MeshMatcapMaterial,
  Mesh,
  Raycaster,
  LineBasicMaterial,
  Line,
  Float32BufferAttribute,
} from "three";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import loaderManager from "../managers/loaderManager.js";
import fragmentShader from "../glsl/main.frag?raw";
import vertexShader from "../glsl/main.vert?raw";

export default class MainScene {
  #canvas;
  #renderer;
  #scene;
  #camera;
  #controls;
  #stats;
  #width;
  #height;

  constructor() {
    this.#canvas = document.querySelector(".scene");
    this.clock = new Clock();

    // ripple state
    this.ripples = [];
    this._unitCircleGeom = this.createRippleGeometry();

    this.init();
  }

  init = async () => {
    const assets = [
      { name: "waterdudv", texture: "/textures/waterdudv.jpg" },
      { name: "matcap", texture: "/textures/matcap.png" },
      { name: "paper", texture: "/textures/paper.png" },
      { name: "berg", texture: "/textures/berg.png" },
      { name: "icebergModel", model: "/models/iceberg.glb" },
      { name: "boatModel", model: "/models/boat.glb" },
    ];

    await loaderManager.load(assets);

    this.setStats();
    this.setScene();
    this.setRender();
    this.setCamera();
    this.setControls();
    this.setLights();
    this.setReflector();
    this.setSky();
    this.setBoat();

    this.handleResize();
    this.events();
  };

  createRippleGeometry() {
    const segments = 64;
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(Math.cos(a), 0, Math.sin(a));
    }
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(pts, 3));
    return g;
  }

  // worldPos: THREE.Vector3 (world coordinates on plane y=0)
  // triggersMovement: boolean - whether this ripple should push the boat
  spawnRipple(worldPos, triggersMovement = false) {
    const mat = new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
    const ring = new Line(this._unitCircleGeom.clone(), mat);

    // position the ring just above the water / reflector so it's visible
    const mirrorY = this.groundMirror ? this.groundMirror.position.y : 0;
    const ringY = mirrorY + 0.0009;
    ring.position.set(worldPos.x, ringY, worldPos.z);
    // start very small
    ring.scale.set(0.001, 1, 0.001);

    this.#scene.add(ring);

    // speed is world units per second for the ripple expansion
    const speed = 3.0; // units/sec (tuneable)
    const life = 3.8; // seconds
    const maxRadius = Math.max(3.0, speed * life); // safety

    this.ripples.push({
      start: performance.now(),
      center: new Vector3(worldPos.x, ringY, worldPos.z),
      speed,
      maxRadius,
      life,
      ring,
      triggered: false,
      triggersMovement,
    });
  }

  updateRipples(dt) {
    const now = performance.now();

    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      const elapsed = (now - r.start) * 0.001; // seconds
      const radius = elapsed * r.speed;

      // update ring scale & fade
      const s = Math.max(0.001, radius);
      r.ring.scale.set(s, 1, s);
      if (r.ring.material) r.ring.material.opacity = Math.max(0, 1 - elapsed / r.life);

      // trigger boat when ripple reaches boat (in XZ plane), once per ripple
      if (this.boat && !r.triggered && r.triggersMovement) {
        const bp = new Vector3();
        this.boat.getWorldPosition(bp);

        // distance in XZ plane
        const dx = bp.x - r.center.x;
        const dz = bp.z - r.center.z;
        const distXZ = Math.hypot(dx, dz);

        if (distXZ <= radius) {
          r.triggered = true;

          // direction away from ripple center (XZ)
          const dir = new Vector3(dx, 0, dz);
          if (dir.lengthSq() < 1e-6) {
            // if exactly at center, pick a random small direction
            dir.set(Math.random() - 0.5, 0, Math.random() - 0.5);
          }
          dir.normalize();

          // use threejs-app style impulses: total move and duration
          const moveDistance = 15.0; // world units total to move (tweakable) — increased for stronger push
          const moveDurationMs = 5000; // duration in ms (shorter = faster)
          this.addBoatImpulse(dir, moveDistance, moveDurationMs);

          // also apply a small angular impulse (rotate a bit)
          try {
            const forward = new Vector3();
            this.boat.getWorldDirection(forward);
            forward.y = 0;
            if (forward.lengthSq() > 1e-6) forward.normalize();
            const dir2 = dir.clone().normalize();
            const dot = forward.dot(dir2);
            const cross = forward.x * dir2.z - forward.z * dir2.x;
            const signed = Math.atan2(cross, dot);
            // use Date.now() for angular timing (consistent with impulse timing)
            const angStrength = 0.2; // stronger so rotation is visible
            const angVel = MathUtils.clamp(signed * angStrength, -6.0, 6.0);
            this.boat.userData.angularVelocity = (this.boat.userData.angularVelocity || 0) + angVel;
            this.boat.userData.angularStart = Date.now();
            this.boat.userData.angularEnd = Date.now() + 1500;
            console.log('angular impulse applied', { angVel });
          } catch (e) {}
          console.log("ripple -> boat triggered", { dir: dir.toArray(), radius, distXZ });
        }
      }

      // cleanup
      if (radius > r.maxRadius || elapsed > r.life) {
        try {
          this.#scene.remove(r.ring);
        } catch (e) {}
        try {
          r.ring.geometry.dispose();
        } catch (e) {}
        try {
          r.ring.material.dispose();
        } catch (e) {}
        this.ripples.splice(i, 1);
      }
    }

  }

  setLights() {
    const d = new DirectionalLight(0xffffff, 0);
    d.position.set(1, 1, 1);
    d.visible = false;
    this.#scene.add(d);

    const a = new AmbientLight(0x666666);
    this.#scene.add(a);
  }

  resolveIncludes(shader) {
    return shader.replace(/#include <(.*?)>/g, (match, name) => ShaderChunk[name] || "");
  }

  //refllector/water 
  setReflector() {
    const geometry = new CircleGeometry(4000, 80, 64);
    const customShader = Reflector.ReflectorShader;

    customShader.vertexShader = this.resolveIncludes(vertexShader);
    customShader.fragmentShader = this.resolveIncludes(fragmentShader);

    const dudvMap = loaderManager.assets["waterdudv"].texture;
    dudvMap.wrapS = dudvMap.wrapT = RepeatWrapping;
    customShader.uniforms.tDudv = { value: dudvMap };
    customShader.uniforms.time = { value: 0 };

    this.groundMirror = new Reflector(geometry, {
      shader: customShader,
      clipBias: 0.003,
      textureWidth: window.innerWidth,
      textureHeight: window.innerHeight,
      color: 0x0000000,
    });

    this.groundMirror.position.y = 0;
    this.groundMirror.rotateX(-Math.PI / 2);
    this.#scene.add(this.groundMirror);
  }

  //spawn stars
  setSky() {
    const g = new BufferGeometry();
    const positions = [];
    const starCount = 2000;
    const radius = 4000;

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      positions.push(x * radius, y * radius, z * radius);
    }

    g.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));

    const m = new PointsMaterial({ color: 0xffffff, size: 1, sizeAttenuation: true, depthWrite: false });

    const mesh = new Points(g, m);
    mesh.frustumCulled = false;
    this.skyStars = mesh;
    this.#scene.add(mesh);
  }

  setControls() {
    this.#controls = new OrbitControls(this.#camera, this.#renderer.domElement);
    this.#controls.enableDamping = true;
  }

  setStats() {
    this.#stats = new Stats();
    document.body.appendChild(this.#stats.dom);
  }

  setRender() {
    this.#renderer = new WebGLRenderer({ canvas: this.#canvas, antialias: true });
  }

  setCamera() {
    const aspect = this.#width / this.#height;
    this.#camera = new PerspectiveCamera(60, aspect, 0.1, 10000);
    this.#camera.position.set(20, 50, 160);
    this.#camera.lookAt(0, 0, 0);
    this.#scene.add(this.#camera);
  }

  setScene() {
    this.#scene = new Scene();
    this.#scene.background = new Color(0x000000);
  }

  setBoat() {
    const gltf = loaderManager.assets["boatModel"].model;
    const boatModel = gltf.scene.clone();
    const matcapTex = loaderManager.assets["matcap"].texture;

    boatModel.traverse((child) => {
      if (child.isMesh) child.material = new MeshMatcapMaterial({ matcap: matcapTex, color: 0xffffff });
    });

    boatModel.scale.set(10, 10, 10);
    const mirrorY = this.groundMirror ? this.groundMirror.position.y : 0;
    boatModel.position.set(0, mirrorY + 2, 0);

    this.#scene.add(boatModel);
    this.boat = boatModel;

    // initialize userData used by ripple impulse code
    // initialize userData used by ripple impulse code (follow threejs-app pattern)
    this.boat.userData = {
      currentVelocity: new Vector3(0, 0, 0), // integrated velocity (units/sec)
      impulses: [], // array of { v: Vector3(units/sec), start: ms, end: ms }
      angularVelocity: 0,
      angularStart: 0,
      angularEnd: 0,
      moveStart: 0,
      moveEnd: 0,
      // samplePoints can be added later if per-vertex collision is desired
      samplePoints: [],
    };
  }

  // Add an impulse to the boat: dir (Vector3, XZ), totalMove (world units), durationMs
  addBoatImpulse(dir, totalMove = 1.5, durationMs = 3000) {
    if (!this.boat) return;
    const now = Date.now();
    const velocity = dir.clone().multiplyScalar(totalMove / (durationMs / 1000)); // units/sec
    if (!Array.isArray(this.boat.userData.impulses)) this.boat.userData.impulses = [];
    this.boat.userData.impulses.push({ v: velocity, start: now, end: now + durationMs });
    this.boat.userData.moveStart = now;
    this.boat.userData.moveEnd = now + durationMs;
  }

  // Update boat physics: integrate impulses into currentVelocity and move the boat
  updateBoatPhysics(dt) {
    if (!this.boat || !this.boat.userData) return;
    const ud = this.boat.userData;
    const cur = ud.currentVelocity || new Vector3();
    const desired = new Vector3();

    // Combine active impulses (linear fade based on remaining fraction)
    if (Array.isArray(ud.impulses)) {
      const nowMs = Date.now();
      const remaining = [];
      for (const imp of ud.impulses) {
        const span = Math.max(1, imp.end - imp.start);
        const w = Math.max(0, Math.min(1, (imp.end - nowMs) / span));
        if (w > 0) {
          desired.add(imp.v.clone().multiplyScalar(w));
          remaining.push(imp);
        }
      }
      ud.impulses = remaining;
    }

    // simple accel/decel integration (match threejs-app behavior)
  const maxAccel = 8.0; // allow faster acceleration toward impulse target
  const decelRate = 6.0; // slightly stronger deceleration
    const toTarget = desired.clone().sub(cur);
    const distToTarget = toTarget.length();
    if (distToTarget > 1e-4) {
      const maxDelta = maxAccel * dt;
      if (distToTarget <= maxDelta) cur.copy(desired);
      else cur.add(toTarget.normalize().multiplyScalar(maxDelta));
    } else {
      const speed = cur.length();
      if (speed > 1e-4) {
        const newSpeed = Math.max(0, speed - decelRate * dt);
        if (newSpeed <= 1e-4) cur.set(0, 0, 0);
        else cur.setLength(newSpeed);
      }
    }

    // Apply movement in XZ
    const proposed = this.boat.position.clone();
    proposed.x += cur.x * dt;
    proposed.z += cur.z * dt;

    // (Optional) simple collision handling with props could go here

    this.boat.position.x = proposed.x;
    this.boat.position.z = proposed.z;
    ud.currentVelocity = cur;

    // Angular velocity application
    if (ud.angularVelocity && Math.abs(ud.angularVelocity) > 1e-5) {
      this.boat.rotation.y += ud.angularVelocity * dt;
      const damp = 1.8;
      ud.angularVelocity *= Math.max(0, 1 - damp * dt);
      if (ud.angularEnd && Date.now() > ud.angularEnd) ud.angularVelocity *= 0.6;
      if (Math.abs(ud.angularVelocity) < 1e-4) ud.angularVelocity = 0;
    }
  }

  draw = () => {
    this.#stats.begin();

    // get delta first so movement uses a valid per-frame time step
    const dt = this.clock.getDelta(); // seconds

    const t = this.clock.getElapsedTime();
    if (this.groundMirror) this.groundMirror.material.uniforms.time.value += 0.7;

    if (!this.sphere) {
      const geo = new IcosahedronGeometry(5, 0);
      const mat = new MeshMatcapMaterial({ matcap: loaderManager.assets["matcap"].texture });
      this.sphere = new Mesh(geo, mat);
      this.#scene.add(this.sphere);
    }

    // Animate sphere
    this.sphere.position.set(Math.cos(t) * 30, Math.abs(Math.cos(t * 2)) * 20 + 5, Math.sin(t) * 30);
    this.sphere.rotation.y = Math.PI / 2 - t;
    this.sphere.rotation.z = t * 8;

  this.updateRipples(dt);
  this.updateBoatPhysics(dt);

    if (this.#controls) this.#controls.update();

    if (this.skyStars && this.#camera) this.skyStars.position.copy(this.#camera.position);
    if (this.groundMirror && this.#camera) {
      this.groundMirror.position.copy(this.#camera.position);
      this.groundMirror.position.y = 0;
    }

    this.#renderer.render(this.#scene, this.#camera);
    this.#stats.end();
    requestAnimationFrame(this.draw);
  };

  handleResize = () => {
    this.#width = window.innerWidth;
    this.#height = window.innerHeight;
    this.#camera.aspect = this.#width / this.#height;
    this.#camera.updateProjectionMatrix();

    const dpr = window.devicePixelRatio || 1;
    this.#renderer.setPixelRatio(dpr);
    this.#renderer.setSize(this.#width, this.#height);
  };

  events() {

    //ripple logic
    this.#renderer.domElement.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;

      const rect = this.#renderer.domElement.getBoundingClientRect();
      const ndc = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      };
      const ray = new Raycaster();
      ray.setFromCamera(ndc, this.#camera);

      const o = ray.ray.origin;
      const d = ray.ray.direction;
      if (Math.abs(d.y) < 1e-6) return;
      const t = (0 - o.y) / d.y;
      if (t <= 0) return;
      const hit = o.clone().add(d.clone().multiplyScalar(t));

      this.spawnRipple(hit, true);
    });

    window.addEventListener("resize", this.handleResize, { passive: true });
    this.draw();
  }
}
