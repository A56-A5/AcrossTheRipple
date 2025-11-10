uniform vec3 color;
uniform sampler2D tDiffuse;
varying vec4 vUv;
uniform sampler2D tDudv;
uniform float time;
#include <logdepthbuf_pars_fragment>

void main(){

    #include <logdepthbuf_fragment>

    float waveSpeed = 0.03;
    float waveStrength = 0.5;

    vec2 distortedUv = texture2D( tDudv, vec2( vUv.x + time * waveSpeed , vUv.y )).rg * waveStrength;
    distortedUv = vUv.yx + vec2(distortedUv.x,distortedUv.y+time*waveSpeed);
    vec2 distortion = ( texture2D( tDudv,distortedUv).rg *2.0 - 1.0) * waveStrength;

    vec4 uv = vec4(vUv);
    uv.xy += distortion;

    vec4 base = texture2DProj( tDiffuse, uv);
    gl_FragColor = vec4 (mix (base.rgb,color,0.3),1.0);
    #include <tonemapping_fragment>
    #include <encodings_fragment>
}