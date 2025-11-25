import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextureLoader, LoadingManager } from "three";

class LoaderManager {
  constructor() {
    this.manager = new LoadingManager();
    this.assets = {};

    this.textureLoader = new TextureLoader(this.manager);
    this.gltfLoader = new GLTFLoader(this.manager);
    this.objLoader = new OBJLoader(this.manager);
    this.fontLoader = new FontLoader(this.manager);
    this.dracoLoader = new DRACOLoader(this.manager);

    this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
  }

  async load(assetList = []) {
    const tasks = assetList.map(async (asset) => {
      const { name, model, texture, img, font, obj, gltf } = asset;

      if (!this.assets[name]) this.assets[name] = {};

      try {
        if (model || gltf) {
          const result = await this.loadGLTF(model || gltf, name);
          this.assets[name].model = result;
        }

        if (texture) {
          const tex = await this.loadTexture(texture, name);
          this.assets[name].texture = tex;
        }

        if (img) {
          const image = await this.loadImage(img, name);
          this.assets[name].img = image;
        }

        if (font) {
          const f = await this.loadFont(font, name);
          this.assets[name].font = f;
        }

        if (obj) {
          const o = await this.loadObj(obj, name);
          this.assets[name].obj = o;
        }
      } catch (err) {
        console.error(`❌ Error loading asset: ${name}`, err);
      }
    });

    await Promise.all(tasks);
    console.log("✅ Assets loaded:", this.assets);
  }

  loadGLTF(url, name) {
    return new Promise((resolve, reject) => {
      this.gltfLoader.load(
        url,
        (gltf) => resolve(gltf),
        undefined,
        (err) => {
          console.error(`❌ Failed to load GLTF (${name}):`, err);
          reject(err);
        }
      );
    });
  }

  loadTexture(url, name) {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        url,
        (tex) => resolve(tex),
        undefined,
        (err) => {
          console.error(`❌ Failed to load texture (${name}):`, err);
          reject(err);
        }
      );
    });
  }

  loadImage(url, name) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = (err) => {
        console.error(`❌ Failed to load image (${name}):`, err);
        reject(err);
      };
      image.src = url;
    });
  }

  loadFont(url, name) {
    return new Promise((resolve, reject) => {
      this.fontLoader.load(
        url,
        (font) => resolve(font),
        undefined,
        (err) => {
          console.error(`❌ Failed to load font (${name}):`, err);
          reject(err);
        }
      );
    });
  }

  loadObj(url, name) {
    return new Promise((resolve, reject) => {
      this.objLoader.load(
        url,
        (obj) => resolve(obj),
        undefined,
        (err) => {
          console.error(`❌ Failed to load OBJ (${name}):`, err);
          reject(err);
        }
      );
    });
  }

  get(name) {
    return this.assets[name];
  }

  clear() {
    this.assets = {};
  }
}

export default new LoaderManager();
