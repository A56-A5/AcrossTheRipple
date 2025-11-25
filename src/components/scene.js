import {
  WebGLRenderer,
  Scene,
  Color,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
  Raycaster,
  IcosahedronGeometry,
  MeshMatcapMaterial,
  Mesh,
  Clock,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";

import loaderManager from "../managers/loaderManager.js";

import { createWater } from "./water.js";
import { createBoat, updateBoatPhysics } from "./boat.js";
import { createRippleGeometry, spawnRipple, updateRipples } from "./ripple.js";

export default class MainScene {
  constructor() {
    this.canvas = document.querySelector(".scene");
    this.clock = new Clock();

    this.ripples = [];
    window.ripples = this.ripples;
    this.unitCircleGeom = createRippleGeometry();

    this.init();
  }

  async init() {
    await loaderManager.load([
      { name: "waterdudv", texture: "/textures/waterdudv.jpg" },
      { name: "matcap", texture: "/textures/matcap.png" },
      { name: "paper", texture: "/textures/paper2.png" },
      { name: "berg", texture: "/textures/berg.png" },
      { name: "boatModel", model: "/models/boat.glb" },
    ]);

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    this.scene = new Scene();
    this.scene.background = new Color(0x000000);

    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });

    this.camera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.set(20, 50, 160);
    this.scene.add(this.camera);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.addLights();

    this.groundMirror = createWater(this.scene);
    this.boat = createBoat(this.scene, this.groundMirror);

    this.createSky();

    this.handleResize();
    window.addEventListener("resize", () => this.handleResize());

    this.renderer.domElement.addEventListener("pointerdown", (e) =>
      this.onPointerDown(e)
    );

    this.draw();
  }

  addLights() {
    const d = new DirectionalLight(0xffffff, 0);
    d.visible = false;
    this.scene.add(d);

    const a = new AmbientLight(0x666666);
    this.scene.add(a);
  }

  createSky() {
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

    const m = new PointsMaterial({
      color: 0xffffff,
      size: 1,
      sizeAttenuation: true,
      depthWrite: false,
    });

    this.sky = new Points(g, m);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);
  }

  onPointerDown(e) {
    if (e.button !== 0) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
    };

    const ray = new Raycaster();
    ray.setFromCamera(ndc, this.camera);

    const o = ray.ray.origin;
    const d = ray.ray.direction;
    if (Math.abs(d.y) < 1e-6) return;

    const t = (0 - o.y) / d.y;
    if (t <= 0) return;

    const hit = o.clone().add(d.clone().multiplyScalar(t));

    spawnRipple(
      this.scene,
      this.ripples,
      this.unitCircleGeom,
      hit,
      this.groundMirror,
      true
    );
  }

  handleResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
  }

  draw = () => {
    this.stats.begin();

    const dt = this.clock.getDelta();

    this.groundMirror.material.uniforms.time.value += 0.7;

    if (!this.sphere) {
      const geo = new IcosahedronGeometry(5, 0);
      const mat = new MeshMatcapMaterial({ matcap: loaderManager.assets["matcap"].texture });
      this.sphere = new Mesh(geo, mat);
      this.scene.add(this.sphere);
    }

    const t = this.clock.getElapsedTime();
    this.sphere.position.set(
      Math.cos(t) * 30,
      Math.abs(Math.cos(t * 2)) * 20 + 5,
      Math.sin(t) * 30
    );
    this.sphere.rotation.y = Math.PI / 2 - t;
    this.sphere.rotation.z = t * 8;

    updateRipples(this.scene, this.ripples, this.boat);
    updateBoatPhysics(this.boat, dt);

    this.controls.target.copy(this.boat.position);
    this.controls.update();

    this.sky.position.copy(this.camera.position);

    this.groundMirror.position.copy(this.camera.position);
    this.groundMirror.position.y = 0;


    this.renderer.render(this.scene, this.camera);

    this.stats.end();
    requestAnimationFrame(this.draw);
  };
}
