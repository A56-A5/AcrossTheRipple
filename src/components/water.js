import {
  CircleGeometry,
  RepeatWrapping,
} from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import loaderManager from "../managers/loaderManager.js";
import fragmentShader from "../glsl/main.frag?raw";
import vertexShader from "../glsl/main.vert?raw";
import { ShaderChunk } from "three";

export function resolveIncludes(shader) {
  return shader.replace(/#include <(.*?)>/g, (match, name) => ShaderChunk[name] || "");
}

//shiny wotah thingy 
export function createWater(scene) {
  const geometry = new CircleGeometry(4000, 80, 64);
  const customShader = Reflector.ReflectorShader;

  customShader.vertexShader = resolveIncludes(vertexShader);
  customShader.fragmentShader = resolveIncludes(fragmentShader);

  const dudvMap = loaderManager.assets["waterdudv"].texture;
  dudvMap.wrapS = dudvMap.wrapT = RepeatWrapping;

  customShader.uniforms.tDudv = { value: dudvMap };
  customShader.uniforms.time = { value: 0 };

  const groundMirror = new Reflector(geometry, {
    shader: customShader,
    clipBias: 0.003,
    textureWidth: window.innerWidth,
    textureHeight: window.innerHeight,
    color: 0x000000,
  });

  groundMirror.position.y = 0;
  groundMirror.rotateX(-Math.PI / 2);
  scene.add(groundMirror);

  return groundMirror;
}
