import {
  WebGLRenderer,
  Scene,
  Color,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  BufferGeometry,
  Vector3,
  Matrix4,
  Points,
  PointsMaterial,
  BufferAttribute,
  PlaneGeometry,
  CircleGeometry,
  TextureLoader,
  IcosahedronGeometry,
  Clock,
  RepeatWrapping,
  MeshPhongMaterial,
  PointLight,
  MeshMatcapMaterial,
  LoadingManager,
  WebGLRenderTarget,
  ShaderMaterial,
} from "three";
import * as THREE from 'three';
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Refractor } from "three/addons/objects/Refractor.js";
import { WaterRefractionShader } from "three/addons/shaders/WaterRefractionShader.js";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { Mesh } from "three";
import { ShaderChunk } from "three";
import loaderManager from "../managers/LoaderManager.js";
import fragmentShader from "../glsl/main.frag?raw";
import vertexShader from "../glsl/main.vert?raw";
import LoaderManager from "../managers/LoaderManager.js";


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
    this.init();
  }

  init = async () => {

    const assets = [
      {
        name: "waterdudv",
        texture: "/textures/waterdudv.jpg"
      },
      {
        name: "matcap",
        texture: "/textures/matcap.png"
      },
      {
        name: "paper",
        texture: "/textures/paper.png"
      },
      {
        name: "boatModel",
        model: "/models/boat.glb"
      }
    ]

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

  setLights() {
    const d = new DirectionalLight(0xffffff, 0.0);
    d.position.set(1, 1, 1);
    d.visible = false;
    this.#scene.add(d);

    const a = new AmbientLight(0x666666);
    this.#scene.add(a);

  }
  resolveIncludes(shader) {
    return shader.replace(/#include <(.*?)>/g, (match, name) => ShaderChunk[name] || '');
  }
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

    const m = new PointsMaterial({
      color: 0xffffff,
      size: 1,
      sizeAttenuation: true,
      depthWrite: false,
    });

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
    this.#renderer = new WebGLRenderer({
      canvas: this.#canvas,
      antialias: true,
    });
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
      if (child.isMesh) {
        child.material = new MeshMatcapMaterial({
          matcap: matcapTex,
          color: 0xffffff,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // Scale & position it
    boatModel.scale.set(10, 10, 10);

    // make sure groundMirror exists before positioning
    const mirrorY = this.groundMirror ? this.groundMirror.position.y : 0;
    boatModel.position.set(0, mirrorY + 2, 0); 

    this.#scene.add(boatModel);
    this.boat = boatModel;
  }


  draw = () => {
    this.#stats.begin();

    const t = this.clock?.getElapsedTime() ?? 0;
    this.groundMirror.material.uniforms.time.value += 0.5; //animate distortion on the water surface

    //delete this sphere afterwards
    if (!this.sphere) {
      const geo = new IcosahedronGeometry(5, 0);
      const mat = new MeshMatcapMaterial({
        matcap: LoaderManager.assets["matcap"].texture, 
      });
      this.sphere = new Mesh(geo, mat);
      this.#scene.add(this.sphere);
    }
    //animate icosahedron
    this.sphere.position.set(
      Math.cos(t) * 30,
      Math.abs(Math.cos(t * 2)) * 20 + 5,
      Math.sin(t) * 30
    );
    this.sphere.rotation.y = Math.PI / 2 - t;
    this.sphere.rotation.z = t * 8;
    //till here

    //animate floating boat
    if (this.boat) {

      const waveSpeed = 0.3 + Math.sin(t * 0.1) * 0.05;
      //this.boat.position.y = 1.05 + Math.sin(t * waveSpeed) * 0.5;

      // small tilts — gives that "floating" rotation
      this.boat.rotation.z = Math.sin(t * waveSpeed) * 0.03; // side tilt (roll)
      this.boat.rotation.x = Math.cos(t * waveSpeed) * 0.02; // front/back tilt (pitch)
      this.boat.rotation.y = Math.sin(t * waveSpeed) * 0.01; // gentle yaw (turn)
    }


    if (this.#controls) this.#controls.update();

    // keep sky stars centered on the camera so they always fill the sky
    if (this.skyStars && this.#camera) {
      this.skyStars.position.copy(this.#camera.position);
    }
    // keep reflector also centered on the camera
    if (this.groundMirror && this.#camera) {
      this.groundMirror.position.copy(this.#camera.position);
      this.groundMirror.position.y = 0;
    }

    this.#renderer.render(this.#scene, this.#camera);
    this.#stats.end();
    this.raf = window.requestAnimationFrame(this.draw);
  };

  handleResize = () => {
    this.#width = window.innerWidth;
    this.#height = window.innerHeight;
    this.#camera.aspect = this.#width / this.#height;
    this.#camera.updateProjectionMatrix();
    const dpr = window.devicePixelRatio || 1;
    this.#renderer.setPixelRatio(dpr);
    this.#renderer.setSize(this.#width, this.#height);
    // update render target and shader resolution when resizing
    if (this.renderTarget) {
      this.renderTarget.setSize(this.#width, this.#height);
    }
    if (this.groundMirror?.material?.uniforms?.resolution) {
      this.groundMirror.material.uniforms.resolution.value.set(this.#width, this.#height, 1);
    }
  };

  events() {
    window.addEventListener("resize", this.handleResize, { passive: true });
    this.draw();
  }
}
