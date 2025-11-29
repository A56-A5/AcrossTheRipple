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
  Vector3,
  Raycaster,
  Mesh,
  Clock,
  Sphere,
  MeshMatcapMaterial,
  Matrix4
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";
import LoaderManager from "../managers/loadermanager.js";

import { createWater } from "./water.js";
import { loadAllIcebergs } from "./bergs.js";
import { createBoat, updateBoatPhysics, updateBoatSinking } from "./boat.js";
import { createRippleGeometry, spawnRipple, updateRipples } from "./ripple.js";

export default class MainScene {
  constructor() {
    this.canvas = document.querySelector(".scene");
    this.clock = new Clock();
    this.ripples = [];
    this.unitCircleGeom = createRippleGeometry();
    this.stars = [];
    this.starMatcap = null;
    this.starBoundingSphere = new Sphere(new Vector3(), 4);

    this.currentScore = 0;
    this.highscore = 0;

    this._boatInitial = { position: new Vector3(0, 1.69, 0), scale: 10 };

    this.init();
  }

  async init() {
    await LoaderManager.load([
      { name: "waterdudv", texture: "/textures/waterdudv.jpg" },
      { name: "matcap", texture: "/textures/matcap.png" },
      { name: "paper", texture: "/textures/paper.png" },
      { name: "paper2", texture: "/textures/paper2.png" },
      { name: "berg", texture: "/textures/berg.png" },
      { name: "boatModel", model: "/models/boat.glb" },
      { name: "star", model: "/models/star.glb" },
      { name: "allbergs", model: "/models/allbergs.glb" }
    ]);

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    try {
      const hs = localStorage.getItem("atr_highscore");
      if (hs !== null) this.highscore = parseInt(hs, 10) || 0;
    } catch (e) {
      console.warn("localStorage unavailable", e);
    }

    this.initTimer();
    this.scene = new Scene();
    this.scene.background = new Color(0x000000);

    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });

    this.camera = new PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.set(20, 50, 50);
    this.scene.add(this.camera);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.maxPolarAngle = Math.PI / 2;

    this.addLights();
    await this.loadStarModel();

    this.groundMirror = createWater(this.scene);
    this.boat = createBoat(this.scene, this.groundMirror);

    this.icebergs = loadAllIcebergs(this.scene);
    this.createSky();

    this.handleResize();
    window.addEventListener("resize", () => this.handleResize());

    this.renderer.domElement.addEventListener("pointerdown", (e) =>
      this.onPointerDown(e)
    );

    this.createScoreUI();

    this.createStar();
    this.draw();
  }

  //twinkle twinkle weird star
  async loadStarModel() {
    const starAsset = LoaderManager.get("star");
    this.starPrefab = starAsset?.model?.scene || starAsset?.model?.scenes?.[0] || null;
    const matcapAsset = LoaderManager.get("matcap");
    this.starMatcap = matcapAsset?.texture || matcapAsset || null;
  }

  createStar() {
    if (!this.starPrefab) return null;

    const star = this.starPrefab.clone(true);

    const baseScale = 10;
    star.userData.baseScale = baseScale;
    star.scale.set(baseScale, baseScale, baseScale);

    star.userData.spinSpeed = 0.8;
    star.userData.pulse = true;
    star.userData.pulseT = Math.random() * Math.PI * 2;

    star.traverse((node) => {
      if (node.isMesh) {
        node.material = new MeshMatcapMaterial({
          matcap: this.starMatcap || undefined,
          color: 0xffffcc
        });
      }
    });

    this.placeStarRandom(star);
    this.scene.add(star);
    this.stars.push(star);

    return star;
  }

  //is star in iceberg go brrrr
  isInsideIceberg(pos) {
    if (!this.icebergs) return false;

    const temp = new Vector3();

    for (const berg of this.icebergs) {
      if (!berg.boundingSphere) {
        berg.geometry.computeBoundingSphere();
        berg.boundingSphere = berg.geometry.boundingSphere.clone();
      }

      temp.copy(berg.boundingSphere.center)
          .applyMatrix4(berg.matrixWorld);

      const worldRadius = berg.boundingSphere.radius * berg.scale.x;

      if (temp.distanceTo(pos) < worldRadius + 5) {
        return true;
      }
    }

    return false;
  }

  //put star in not iceberg place
  placeStarRandom(star, maxDist = 300, minDist = 150) {
    if (!this.boat) {
      star.position.set(Math.random() * 100 - 50, 1, Math.random() * 100 - 50);
      return;
    }

    const y = 5;

    let tries = 0;

    while (tries < 50) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (maxDist - minDist) + minDist;

      const x = this.boat.position.x + Math.cos(angle) * dist;
      const z = this.boat.position.z + Math.sin(angle) * dist;

      const pos = new Vector3(x, y, z);

      if (!this.isInsideIceberg(pos)) {
        star.position.copy(pos);
        return;
      }

      tries++;
    }

    star.position.set(
      this.boat.position.x + 200,
      y,
      this.boat.position.z
    );
  }

//boat go nom nom star
  checkStarCollision(dt) {
    if (!this.boat) return;

    for (let i = this.stars.length - 1; i >= 0; i--) {
      const s = this.stars[i];
      this.starBoundingSphere.center.copy(s.position);

      if (this.starBoundingSphere.distanceToPoint(this.boat.position) < 5) {
        this.currentScore += 1;

        if (this.currentScore > this.highscore) {
          this.highscore = this.currentScore;
          try {
            localStorage.setItem("atr_highscore", String(this.highscore));
          } catch (e) {}
        }

        this.updateScoreUI();

        this.timeLeft = this.timerDuration;
        this.boat.position.y = this._boatInitial.position.y;
        this.sinkingStarted = false;
        this.sinkStartY = null;
        this.placeStarRandom(s);
      }
    }
  }

  //spinny spinny star
  updateStars(dt) {
    for (const s of this.stars) {
      s.rotation.y += s.userData.spinSpeed * dt;

      if (s.userData.pulse) {
        s.userData.pulseT += dt * 2.5;
        const pulseScale = s.userData.baseScale * (1 + Math.sin(s.userData.pulseT) * 0.2);
        s.scale.set(pulseScale, pulseScale, pulseScale);
      }
    }
  }

  //timer go tick tock
  initTimer() {
    this.timerDuration = 60;
    this.timeLeft = 60;
    this.sinkingStarted = false;
    this.sinkStartY = null;
    this.createTimerUI();
  }

  updateTimer(dt) {
    if (this.timeLeft <= 0) return;
    this.timeLeft -= dt;
    if (this.timeLeft < 0) this.timeLeft = 0;

    const percentage = (this.timeLeft / this.timerDuration) * 100;
    this.timerBar.style.width = percentage + "%";

    if (this.timeLeft <= 10) this.timerBar.style.background = "#ff3b3b";
    else if (this.timeLeft <= 20) this.timerBar.style.background = "#ff9800";
    else this.timerBar.style.background = "#4caf50";

    if (this.timeLeft <= 10 && !this.sinkingStarted) {
      this.sinkingStarted = true;
      this.sinkStartY = this.boat.position.y;

      try {
        const prevHigh = parseInt(localStorage.getItem("atr_highscore") || "0", 10);
        if (this.highscore > prevHigh) {
          localStorage.setItem("atr_highscore", String(this.highscore));
        }
      } catch (e) {}
      this.updateScoreUI();
    }
  }

  createTimerUI() {
    this.timerContainer = document.createElement("div");
    this.timerContainer.id = "timerBarContainer";
    document.body.appendChild(this.timerContainer);

    this.timerBar = document.createElement("div");
    this.timerBar.id = "timerBar";
    this.timerContainer.appendChild(this.timerBar);

    const style = document.createElement("style");
    style.innerHTML = `
      #timerBarContainer {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 12px;
        background: rgba(255,255,255,0.2);
        border-radius: 6px;
        overflow: hidden;
        z-index: 99999;
      }
      #timerBar {
        height: 100%;
        width: 100%;
        background: #4caf50;
        transition: width 0.2s linear;
      }

      /* Score UI - simplified: numbers only */
      #atr_score_ui {
        position: fixed;
        top: 46px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        background: rgba(0,0,0,0.45);
        color: #fff;
        border-radius: 8px;
        padding: 10px;
        font-family: system-ui, Arial, sans-serif;
        z-index: 100000;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
      }
      #atr_score_ui .col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      #atr_score_ui .label {
        font-size: 12px;
        opacity: 0.8;
      }
      #atr_score_ui .value {
        font-weight: 700;
        font-size: 18px;
      }
      #atr_controls {
        position: fixed;
        top: 46px;
        right: 20px;
        z-index: 100000;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .atr_button {
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.06);
        color: #fff;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      }
      .atr_button:hover { background: rgba(255,255,255,0.12); }
    `;
    document.head.appendChild(style);
  }

  //shiny stars 
  createScoreUI() {
    const existing = document.getElementById("atr_score_ui");
    if (existing) existing.remove();

    const container = document.createElement("div");
    container.id = "atr_score_ui";

    const col1 = document.createElement("div");
    col1.className = "col";
    const lbl1 = document.createElement("div");
    lbl1.className = "label";
    lbl1.innerText = "Current Stars";
    const val1 = document.createElement("div");
    val1.className = "value";
    val1.id = "atr_current_value";
    val1.innerText = String(this.currentScore);
    col1.appendChild(lbl1);
    col1.appendChild(val1);

    const col2 = document.createElement("div");
    col2.className = "col";
    const lbl2 = document.createElement("div");
    lbl2.className = "label";
    lbl2.innerText = "Highscore";
    const val2 = document.createElement("div");
    val2.className = "value";
    val2.id = "atr_high_value";
    val2.innerText = String(this.highscore);
    col2.appendChild(lbl2);
    col2.appendChild(val2);

    container.appendChild(col1);
    container.appendChild(col2);

    document.body.appendChild(container);

    const controls = document.createElement("div");
    controls.id = "atr_controls";
    const redoBtn = document.createElement("button");
    redoBtn.className = "atr_button";
    redoBtn.innerText = "Redo";
    redoBtn.addEventListener("click", () => this.redoGame());
    controls.appendChild(redoBtn);

    const resetHSBtn = document.createElement("button");
    resetHSBtn.className = "atr_button";
    resetHSBtn.innerText = "Reset Highscore";
    resetHSBtn.addEventListener("click", () => {
      this.highscore = 0;
      try { localStorage.setItem("atr_highscore", "0"); } catch (e) {}
      this.updateScoreUI();
    });
    controls.appendChild(resetHSBtn);

    document.body.appendChild(controls);

    this.updateScoreUI();
  }

  updateScoreUI() {
    const currVal = document.getElementById("atr_current_value");
    const highVal = document.getElementById("atr_high_value");

    if (currVal) currVal.innerText = String(this.currentScore);
    if (highVal) highVal.innerText = String(this.highscore);
  }

  //make boat and star and timer go brrr
  redoGame() {
    this.currentScore = 0;

    this.timeLeft = this.timerDuration;
    this.sinkingStarted = false;
    this.sinkStartY = null;

    if (this.timerBar) {
      this.timerBar.style.background = "#4caf50";
      this.timerBar.style.width = "100%";
    }

    if (this.controls) {
      this.boat.position.x = this._boatInitial.position.x;
      this.boat.position.y = this._boatInitial.position.y;
      this.boat.position.z = this._boatInitial.position.z;

      this.controls.update();
    }

    if (this.stars && this.stars.length > 0) {
      try {
        this.placeStarRandom(this.stars[0]);
      } catch (e) {}
    }

    this.updateScoreUI();
  }

  //lights go flashy
  addLights() {
    const d = new DirectionalLight(0xffffff, 0);
    this.scene.add(d);

    const a = new AmbientLight(0x666666);
    this.scene.add(a);
  }

  //shiny stars
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
      depthWrite: false
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
      y: -(((e.clientY - rect.top) / rect.height) * 2 - 1)
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

    this.updateTimer(dt);
    updateBoatSinking(this.boat, this.sinkStartY, this);

    this.groundMirror.material.uniforms.time.value += 0.7;

    updateRipples(this.scene, this.ripples, this.boat);
    updateBoatPhysics(this.boat, dt, this.icebergs);

    this.controls.target.copy(this.boat.position);
    this.controls.target.y += 5;
    this.controls.update();

    this.sky.position.copy(this.camera.position);

    this.groundMirror.position.copy(this.camera.position);
    this.groundMirror.position.y = 0;

    this.updateStars(dt);
    this.checkStarCollision(dt);

    this.renderer.render(this.scene, this.camera);
    this.stats.end();
    requestAnimationFrame(this.draw);
  };
}
