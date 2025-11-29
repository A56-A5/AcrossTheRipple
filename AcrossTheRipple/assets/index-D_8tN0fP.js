(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Cr="181",ys={ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},id=0,Yl=1,sd=2,Zh=1,rd=2,Yn=3,wn=0,We=1,Tn=2,Qn=0,bs=1,Kl=2,Zl=3,$l=4,od=5,Fi=100,ad=101,cd=102,ld=103,ud=104,hd=200,fd=201,dd=202,pd=203,uc=204,hc=205,md=206,xd=207,gd=208,_d=209,vd=210,yd=211,bd=212,Md=213,Sd=214,fc=0,dc=1,pc=2,As=3,mc=4,xc=5,gc=6,_c=7,xl=0,Td=1,Ed=2,gi=0,Ad=1,wd=2,Rd=3,Cd=4,Pd=5,Id=6,Ld=7,Jl="attached",Dd="detached",$h=300,ws=301,Rs=302,vc=303,yc=304,jo=306,Vi=1e3,Fn=1001,ko=1002,Xe=1003,Jh=1004,sr=1005,Ge=1006,Lo=1007,$n=1008,On=1009,Qh=1010,tf=1011,xr=1012,gl=1013,_i=1014,rn=1015,Gi=1016,_l=1017,vl=1018,gr=1020,ef=35902,nf=35899,sf=1021,rf=1022,Je=1023,_r=1026,vr=1027,yl=1028,Yo=1029,bl=1030,Ml=1031,Sl=1033,Do=33776,Uo=33777,No=33778,Fo=33779,bc=35840,Mc=35841,Sc=35842,Tc=35843,Ec=36196,Ac=37492,wc=37496,Rc=37808,Cc=37809,Pc=37810,Ic=37811,Lc=37812,Dc=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,Bc=37818,zc=37819,kc=37820,Vc=37821,Hc=36492,Gc=36494,Wc=36495,Xc=36283,qc=36284,jc=36285,Yc=36286,yr=2300,br=2301,aa=2302,Ql=2400,tu=2401,eu=2402,Ud=2500,Nd=0,of=1,Kc=2,Fd=3200,Od=3201,Ko=0,Bd=1,di="",be="srgb",ze="srgb-linear",Vo="linear",ne="srgb",ji=7680,nu=519,zd=512,kd=513,Vd=514,af=515,Hd=516,Gd=517,Wd=518,Xd=519,Zc=35044,iu="300 es",An=2e3,Ho=2001;function cf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qd(){const s=Mr("canvas");return s.style.display="block",s}const su={};function Go(...s){const t="THREE."+s.shift();console.log(t,...s)}function _t(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Vt(...s){const t="THREE."+s.shift();console.error(t,...s)}function Sr(...s){const t=s.join(" ");t in su||(su[t]=!0,_t(...s))}function jd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const cr=Math.PI/180,Cs=180/Math.PI;function xn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Lt(s,t,e){return Math.max(t,Math.min(e,s))}function Tl(s,t){return(s%t+t)%t}function Yd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kd(s,t,e){return s!==t?(e-s)/(t-s):0}function lr(s,t,e){return(1-e)*s+e*t}function Zd(s,t,e,n){return lr(s,t,1-Math.exp(-e*n))}function $d(s,t=1){return t-Math.abs(Tl(s,t*2)-t)}function Jd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Qd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ep(s,t){return s+Math.random()*(t-s)}function np(s){return s*(.5-Math.random())}function ip(s){s!==void 0&&(ru=s);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sp(s){return s*cr}function rp(s){return s*Cs}function op(s){return(s&s-1)===0&&s!==0}function ap(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lp(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*x,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*x,a*l);break;case"ZYZ":s.set(c*x,c*d,a*u,a*l);break;default:_t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tr={DEG2RAD:cr,RAD2DEG:Cs,generateUUID:xn,clamp:Lt,euclideanModulo:Tl,mapLinear:Yd,inverseLerp:Kd,lerp:lr,damp:Zd,pingpong:$d,smoothstep:Jd,smootherstep:Qd,randInt:tp,randFloat:ep,randFloatSpread:np,seededRandom:ip,degToRad:sp,radToDeg:rp,isPowerOfTwo:op,ceilPowerOfTwo:ap,floorPowerOfTwo:cp,setQuaternionFromProperEuler:lp,normalize:Jt,denormalize:En};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],x=r[o+2],g=r[o+3];if(a<=0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a>=1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=g;return}if(h!==g||c!==f||l!==d||u!==x){let m=c*f+l*d+u*x+h*g;m<0&&(f=-f,d=-d,x=-x,g=-g,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),_=Math.sin(y);p=Math.sin(p*y)/_,a=Math.sin(a*y)/_,c=c*p+f*a,l=l*p+d*a,u=u*p+x*a,h=h*p+g*a}else{c=c*p+f*a,l=l*p+d*a,u=u*p+x*a,h=h*p+g*a;const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+u*h+c*d-l*f,t[e+1]=c*x+u*f+l*h-a*d,t[e+2]=l*x+u*d+a*f-c*h,t[e+3]=u*x-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"YXZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"ZXY":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"ZYX":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"YZX":this._x=f*u*h+l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h-f*d*x;break;case"XZY":this._x=f*u*h-l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h+f*d*x;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Lt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new R,ou=new gn;class Bt{constructor(t,e,n,i,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],x=n[8],g=i[0],m=i[3],p=i[6],y=i[1],_=i[4],v=i[7],b=i[2],M=i[5],E=i[8];return r[0]=o*g+a*y+c*b,r[3]=o*m+a*_+c*M,r[6]=o*p+a*v+c*E,r[1]=l*g+u*y+h*b,r[4]=l*m+u*_+h*M,r[7]=l*p+u*v+h*E,r[2]=f*g+d*y+x*b,r[5]=f*m+d*_+x*M,r[8]=f*p+d*v+x*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,x=e*h+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=h*g,t[1]=(i*l-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(u*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Bt,au=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){const s={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ze]:{primaries:t,whitePoint:n,transfer:Vo,toXYZ:au,fromXYZ:cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:au,fromXYZ:cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),s}const jt=up();function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yi;class hp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=Mr("canvas")),Yi.width=t.width,Yi.height=t.height;const i=Yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fp=0;class El{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ua(i[o].image)):r.push(ua(i[o]))}else r=ua(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let dp=0;const ha=new R;class Ie extends Wi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Fn,i=Fn,r=Ge,o=$n,a=Je,c=On,l=Ie.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=xn(),this.name="",this.source=new El(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){_t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){_t(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=$h;Ie.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,i=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],x=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(d+1)/2,b=(p+1)/2,M=(u+f)/4,E=(h+g)/4,C=(x+m)/4;return _>v&&_>b?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=M/n,r=E/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this.w=Lt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this.w=Lt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends Wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ie(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new El(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends pp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lf extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pe{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Fr.subVectors(this.max,ks),Ki.subVectors(t.a,ks),Zi.subVectors(t.b,ks),$i.subVectors(t.c,ks),si.subVectors(Zi,Ki),ri.subVectors($i,Zi),Ti.subVectors(Ki,$i);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,si.z,0,-si.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!fa(e,Ki,Zi,$i,Fr)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,Ki,Zi,$i,Fr))?!1:(Or.crossVectors(si,ri),e=[Or.x,Or.y,Or.z],fa(e,Ki,Zi,$i,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new R,new R,new R,new R,new R,new R,new R,new R],vn=new R,Nr=new pe,Ki=new R,Zi=new R,$i=new R,si=new R,ri=new R,Ti=new R,ks=new R,Fr=new R,Or=new R,Ei=new R;function fa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ei.fromArray(s,r);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const xp=new pe,Vs=new R,da=new R;class Ue{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(da)),this.expandByPoint(Vs.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hn=new R,pa=new R,Br=new R,oi=new R,ma=new R,zr=new R,xa=new R;class Xi{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){pa.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(pa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=oi.dot(this.direction),c=-oi.dot(Br),l=oi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,x;if(u>0)if(h=o*c-a,f=o*a-c,x=r*u,h>=0)if(f>=-x)if(f<=x){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(pa).addScaledVector(Br,f),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,r){ma.subVectors(e,t),zr.subVectors(n,t),xa.crossVectors(ma,zr);let o=this.direction.dot(xa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const c=a*this.direction.dot(zr.crossVectors(oi,zr));if(c<0)return null;const l=a*this.direction.dot(ma.cross(oi));if(l<0||c+l>o)return null;const u=-a*oi.dot(xa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(t,e,n,i,r,o,a,c,l,u,h,f,d,x,g,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,h,f,d,x,g,m)}set(t,e,n,i,r,o,a,c,l,u,h,f,d,x,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,x=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+x*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=x+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,x=l*u,g=l*h;e[0]=f+g*a,e[4]=x*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-x,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,x=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,x=a*u,g=a*h;e[0]=c*u,e[4]=x*l-d,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=d*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,x=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=x*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+x,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*c,d=o*l,x=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-x,e[2]=x*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,_p)}lookAt(t,e,n){const i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ai.crossVectors(n,nn),ai.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ai.crossVectors(n,nn)),ai.normalize(),kr.crossVectors(nn,ai),i[0]=ai.x,i[4]=kr.x,i[8]=nn.x,i[1]=ai.y,i[5]=kr.y,i[9]=nn.y,i[2]=ai.z,i[6]=kr.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],x=n[2],g=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],b=n[15],M=i[0],E=i[4],C=i[8],T=i[12],S=i[1],P=i[5],L=i[9],N=i[13],F=i[2],k=i[6],V=i[10],q=i[14],W=i[3],tt=i[7],nt=i[11],vt=i[15];return r[0]=o*M+a*S+c*F+l*W,r[4]=o*E+a*P+c*k+l*tt,r[8]=o*C+a*L+c*V+l*nt,r[12]=o*T+a*N+c*q+l*vt,r[1]=u*M+h*S+f*F+d*W,r[5]=u*E+h*P+f*k+d*tt,r[9]=u*C+h*L+f*V+d*nt,r[13]=u*T+h*N+f*q+d*vt,r[2]=x*M+g*S+m*F+p*W,r[6]=x*E+g*P+m*k+p*tt,r[10]=x*C+g*L+m*V+p*nt,r[14]=x*T+g*N+m*q+p*vt,r[3]=y*M+_*S+v*F+b*W,r[7]=y*E+_*P+v*k+b*tt,r[11]=y*C+_*L+v*V+b*nt,r[15]=y*T+_*N+v*q+b*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],x=t[3],g=t[7],m=t[11],p=t[15];return x*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*d-n*c*d)+g*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-i*a*u-e*c*h+e*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],x=t[12],g=t[13],m=t[14],p=t[15],y=h*m*l-g*f*l+g*c*d-a*m*d-h*c*p+a*f*p,_=x*f*l-u*m*l-x*c*d+o*m*d+u*c*p-o*f*p,v=u*g*l-x*h*l+x*a*d-o*g*d-u*a*p+o*h*p,b=x*h*c-u*g*c-x*a*f+o*g*f+u*a*m-o*h*m,M=e*y+n*_+i*v+r*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=y*E,t[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*E,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*E,t[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*d-n*c*d)*E,t[4]=_*E,t[5]=(u*m*r-x*f*r+x*i*d-e*m*d-u*i*p+e*f*p)*E,t[6]=(x*c*r-o*m*r-x*i*l+e*m*l+o*i*p-e*c*p)*E,t[7]=(o*f*r-u*c*r+u*i*l-e*f*l-o*i*d+e*c*d)*E,t[8]=v*E,t[9]=(x*h*r-u*g*r-x*n*d+e*g*d+u*n*p-e*h*p)*E,t[10]=(o*g*r-x*a*r+x*n*l-e*g*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*E,t[12]=b*E,t[13]=(u*g*i-x*h*i+x*n*f-e*g*f-u*n*m+e*h*m)*E,t[14]=(x*a*i-o*g*i-x*n*c+e*g*c+o*n*m-e*a*m)*E,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,x=r*h,g=o*u,m=o*h,p=a*h,y=c*l,_=c*u,v=c*h,b=n.x,M=n.y,E=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+v)*b,i[2]=(x-_)*b,i[3]=0,i[4]=(d-v)*M,i[5]=(1-(f+p))*M,i[6]=(m+y)*M,i[7]=0,i[8]=(x+_)*E,i[9]=(m-y)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const l=1/r,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=An,c=!1){const l=this.elements,u=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let x,g;if(c)x=r/(o-r),g=o*r/(o-r);else if(a===An)x=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ho)x=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=An,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let x,g;if(c)x=1/(o-r),g=o/(o-r);else if(a===An)x=-2/(o-r),g=-(o+r)/(o-r);else if(a===Ho)x=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new R,yn=new St,gp=new R(0,0,0),_p=new R(1,1,1),ai=new R,kr=new R,nn=new R,lu=new St,uu=new gn;class Rn{constructor(t=0,e=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vp=0;const hu=new R,Qi=new gn,Gn=new St,Vr=new R,Hs=new R,yp=new R,bp=new gn,fu=new R(1,0,0),du=new R(0,1,0),pu=new R(0,0,1),mu={type:"added"},Mp={type:"removed"},ts={type:"childadded",child:null},ga={type:"childremoved",child:null};class me extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new R,e=new Rn,n=new gn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Bt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Hs,Vr,this.up):Gn.lookAt(Vr,Hs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mu),ts.child=t,this.dispatchEvent(ts),ts.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),ga.child=t,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mu),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new R(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new R,Wn=new R,_a=new R,Xn=new R,es=new R,ns=new R,xu=new R,va=new R,ya=new R,ba=new R,Ma=new Kt,Sa=new Kt,Ta=new Kt;class De{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){bn.subVectors(i,e),Wn.subVectors(n,e),_a.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(Wn),c=bn.dot(_a),l=Wn.dot(Wn),u=Wn.dot(_a),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,x=(o*u-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ma.setScalar(0),Sa.setScalar(0),Ta.setScalar(0),Ma.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ma,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Wn.subVectors(t,e),bn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),bn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return De.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return De.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return De.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return De.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return De.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;es.subVectors(i,n),ns.subVectors(r,n),va.subVectors(t,n);const c=es.dot(va),l=ns.dot(va);if(c<=0&&l<=0)return e.copy(n);ya.subVectors(t,i);const u=es.dot(ya),h=ns.dot(ya);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(es,o);ba.subVectors(t,r);const d=es.dot(ba),x=ns.dot(ba);if(x>=0&&d<=x)return e.copy(r);const g=d*l-c*x;if(g<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(ns,a);const m=u*x-d*h;if(m<=0&&h-u>=0&&d-x>=0)return xu.subVectors(r,i),a=(h-u)/(h-u+(d-x)),e.copy(i).addScaledVector(xu,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Ea(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Tl(t,1),e=Lt(e,0,1),n=Lt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+1/3),this.g=Ea(o,r,t),this.b=Ea(o,r,t-1/3)}return jt.colorSpaceToWorking(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&_t("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:_t("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);_t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=uf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):_t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return jt.workingToColorSpace(Fe.copy(this),t),Math.round(Lt(Fe.r*255,0,255))*65536+Math.round(Lt(Fe.g*255,0,255))*256+Math.round(Lt(Fe.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,r=Fe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=be){jt.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Hr);const n=lr(ci.h,Hr.h,e),i=lr(ci.s,Hr.s,e),r=lr(ci.l,Hr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Mt;Mt.NAMES=uf;let Sp=0;class Qe extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=bs,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=hc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){_t(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){_t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bi extends Qe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new R,Gr=new st;let Tp=0;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zc&&(t.usage=this.usage),t}}class hf extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ff extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ep=0;const cn=new St,Aa=new me,is=new R,sn=new pe,Gs=new pe,Pe=new R;class we extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cf(t)?ff:hf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ue);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(sn.min,Gs.min),sn.expandByPoint(Pe),Pe.addVectors(sn.max,Gs.max),sn.expandByPoint(Pe)):(sn.expandByPoint(Gs.min),sn.expandByPoint(Gs.max))}sn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pe.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(t,l),Pe.add(is)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new R,c[C]=new R;const l=new R,u=new R,h=new R,f=new st,d=new st,x=new st,g=new R,m=new R;function p(C,T,S){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,T),x.fromBufferAttribute(r,S),u.sub(l),h.sub(l),d.sub(f),x.sub(f);const P=1/(d.x*x.y-x.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(P),a[C].add(g),a[T].add(g),a[S].add(g),c[C].add(m),c[T].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,T=y.length;C<T;++C){const S=y[C],P=S.start,L=S.count;for(let N=P,F=P+L;N<F;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new R,v=new R,b=new R,M=new R;function E(C){b.fromBufferAttribute(i,C),M.copy(b);const T=a[C];_.copy(T),_.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(M,T);const P=v.dot(c[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,T=y.length;C<T;++C){const S=y[C],P=S.start,L=S.count;for(let N=P,F=P+L;N<F;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const x=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,x=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[x++]=l[d++]}return new ve(f,u,h)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new St,Ai=new Xi,Wr=new Ue,_u=new R,Xr=new R,qr=new R,jr=new R,wa=new R,Yr=new R,vu=new R,Kr=new R;class Me extends me{constructor(t=new we,e=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(wa.fromBufferAttribute(h,t),o?Yr.addScaledVector(wa,u):Yr.addScaledVector(wa.sub(e),u))}e.add(Yr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Wr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Wr,_u)===null||Ai.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(gu.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){const m=f[x],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=_;v<b;v+=3){const M=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);i=Zr(this,p,t,n,l,u,h,M,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const x=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=Zr(this,o,t,n,l,u,h,y,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){const m=f[x],p=o[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=_;v<b;v+=3){const M=v,E=v+1,C=v+2;i=Zr(this,p,t,n,l,u,h,M,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const x=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const y=m,_=m+1,v=m+2;i=Zr(this,o,t,n,l,u,h,y,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ap(s,t,e,n,i,r,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===wn,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Kr);return l<e.near||l>e.far?null:{distance:l,point:Kr.clone(),object:s}}function Zr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Xr),s.getVertexPosition(c,qr),s.getVertexPosition(l,jr);const u=Ap(s,t,e,n,Xr,qr,jr,vu);if(u){const h=new R;De.getBarycoord(vu,Xr,qr,jr,h),i&&(u.uv=De.getInterpolatedAttribute(i,a,c,l,h,new st)),r&&(u.uv1=De.getInterpolatedAttribute(r,a,c,l,h,new st)),o&&(u.normal=De.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};De.getNormal(Xr,qr,jr,f.normal),u.face=f,u.barycoord=h}return u}class Pr extends we{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2));function x(g,m,p,y,_,v,b,M,E,C,T){const S=v/E,P=b/C,L=v/2,N=b/2,F=M/2,k=E+1,V=C+1;let q=0,W=0;const tt=new R;for(let nt=0;nt<V;nt++){const vt=nt*P-N;for(let zt=0;zt<k;zt++){const $t=zt*S-L;tt[g]=$t*y,tt[m]=vt*_,tt[p]=F,l.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=M>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(zt/E),h.push(1-nt/C),q+=1}}for(let nt=0;nt<C;nt++)for(let vt=0;vt<E;vt++){const zt=f+vt+k*nt,$t=f+vt+k*(nt+1),se=f+(vt+1)+k*(nt+1),Yt=f+(vt+1)+k*nt;c.push(zt,$t,Yt),c.push($t,se,Yt),W+=6}a.addGroup(d,W,T),d+=W,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=Ps(s[e]);for(const i in n)t[i]=n[i]}return t}function wp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function df(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const pf={clone:Ps,merge:He};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Qe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mf extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new R,yu=new st,bu=new st;class Be extends mf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,yu,bu),e.subVectors(bu,yu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,rs=1;class Pp extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(ss,rs,t,e);i.layers=this.layers,this.add(i);const r=new Be(ss,rs,t,e);r.layers=this.layers,this.add(r);const o=new Be(ss,rs,t,e);o.layers=this.layers,this.add(o);const a=new Be(ss,rs,t,e);a.layers=this.layers,this.add(a);const c=new Be(ss,rs,t,e);c.layers=this.layers,this.add(c);const l=new Be(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class xf extends Ie{constructor(t=[],e=ws,n,i,r,o,a,c,l,u){super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ip extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pr(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Qn});r.uniforms.tEquirect.value=e;const o=new Me(i,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=Ge),new Pp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class pi extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Dp extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new R;class Zo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mu=new R,Su=new Kt,Tu=new Kt,Up=new R,Eu=new St,$r=new R,Ca=new Ue,Au=new St,Pa=new Xi;class Np extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jl,this.bindMatrix=new St,this.bindMatrixInverse=new St,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new pe),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ue),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),t.ray.intersectsSphere(Ca)!==!1&&(Au.copy(i).invert(),Pa.copy(t.ray).applyMatrix4(Au),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Pa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Kt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():_t("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Su.fromBufferAttribute(i.attributes.skinIndex,t),Tu.fromBufferAttribute(i.attributes.skinWeight,t),Mu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Tu.getComponent(r);if(o!==0){const a=Su.getComponent(r);Eu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Up.copy(Mu).applyMatrix4(Eu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class _f extends me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ss extends Ie{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Xe,u=Xe,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new St,Fp=new St;class wl{constructor(t=[],e=[]){this.uuid=xn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){_t("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new St)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new St;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Fp;wu.multiplyMatrices(a,e[r]),wu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ss(e,t,t,Je,rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(_t("Skeleton: No bone found with UUID:",r),o=new _f),this.bones.push(o),this.boneInverses.push(new St().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class $c extends ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const os=new St,Ru=new St,Jr=[],Cu=new pe,Op=new St,Ws=new Me,Xs=new Ue;class Bp extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Op)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Cu.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(Cu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ue),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Xs.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,os),Ru.multiplyMatrices(n,os),Ws.matrixWorld=Ru,Ws.raycast(t,Jr);for(let o=0,a=Jr.length;o<a;o++){const c=Jr[o];c.instanceId=r,c.object=this,e.push(c)}Jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ss(new Float32Array(i*this.count),i,this.count,yl,rn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ia=new R,zp=new R,kp=new Bt;class Sn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ia.subVectors(n,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kp.getNormalMatrix(t),i=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Ue,Vp=new st(.5,.5),Qr=new R;class Ir{constructor(t=new Sn,e=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],x=r[8],g=r[9],m=r[10],p=r[11],y=r[12],_=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-o,d-u,p-x,b-y).normalize(),i[1].setComponents(l+o,d+u,p+x,b+y).normalize(),i[2].setComponents(l+a,d+h,p+g,b+_).normalize(),i[3].setComponents(l-a,d-h,p-g,b-_).normalize(),n)i[4].setComponents(c,f,m,v).normalize(),i[5].setComponents(l-c,d-f,p-m,b-v).normalize();else if(i[4].setComponents(l-c,d-f,p-m,b-v).normalize(),e===An)i[5].setComponents(l+c,d+f,p+m,b+v).normalize();else if(e===Ho)i[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=Vp.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Qr.x=i.normal.x>0?t.max.x:t.min.x,Qr.y=i.normal.y>0?t.max.y:t.min.y,Qr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ln=new St,Dn=new Ir;class Rl{constructor(){this.coordinateSystem=An}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Ln.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Dn.setFromProjectionMatrix(Ln,i.coordinateSystem,i.reversedDepth),Dn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Ln.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Dn.setFromProjectionMatrix(Ln,i.coordinateSystem,i.reversedDepth),Dn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Ln.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Dn.setFromProjectionMatrix(Ln,i.coordinateSystem,i.reversedDepth),Dn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Ln.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Dn.setFromProjectionMatrix(Ln,i.coordinateSystem,i.reversedDepth),Dn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Ln.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Dn.setFromProjectionMatrix(Ln,i.coordinateSystem,i.reversedDepth),Dn.containsPoint(t))return!0}return!1}clone(){return new Rl}}function La(s,t){return s-t}function Hp(s,t){return s.z-t.z}function Gp(s,t){return t.z-s.z}class Wp{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Ke=new St,Xp=new Mt(1,1,1),Pu=new Ir,qp=new Rl,to=new pe,Ri=new Ue,qs=new R,Iu=new R,jp=new R,Da=new Wp,Oe=new Me,eo=[];function Yp(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Ci(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Kp extends Me{constructor(t,e,n=e*2,i){super(new we,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Ss(e,t,t,Je,rn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Ss(e,t,t,Yo,_i);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Ss(e,t,t,Je,rn);n.colorSpace=jt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),h=new ve(u,c,l);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new ve(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pe);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ke),this.getBoundingBoxAt(r,to).applyMatrix4(Ke),t.union(to)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ue);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ke),this.getBoundingSphereAt(r,Ri).applyMatrix4(Ke),t.union(Ri)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(La),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Ke.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(Xp.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(La),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const u in n.attributes){const h=e.getAttribute(u),f=n.getAttribute(u);Yp(h,f,c);const d=h.itemSize;for(let x=h.count,g=l;x<g;x++){const m=c+x;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let f=0;f<o.count;f++)r.setX(u+f,c+o.getX(f));for(let f=o.count,d=h;f<d;f++)r.setX(u+f,c);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:u,vertexStart:h,reservedIndexCount:f}=l,d=r.index,x=d.array,g=t-h;for(let m=u;m<u+f;m++)x[m]=x[m]+g;d.array.copyWithin(e,u,u+f),d.addUpdateRange(e,f),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:u,reservedVertexCount:h}=l,f=r.attributes;for(const d in f){const x=f[d],{array:g,itemSize:m}=x;g.copyWithin(t*m,u*m,(u+h)*m),x.addUpdateRange(t*m,h*m)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new pe,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let u=c;o&&(u=o.getX(u)),r.expandByPoint(qs.fromBufferAttribute(a,u))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new Ue;this.getBoundingBoxAt(t,to),to.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=i.start,u=i.start+i.count;l<u;l++){let h=l;o&&(h=o.getX(h)),qs.fromBufferAttribute(a,h),c=Math.max(c,r.center.distanceToSquared(qs))}r.radius=Math.sqrt(c),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(La);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);Ci(this._multiDrawCounts,i),Ci(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ci(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ci(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Ci(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new we,this._initializeGeometry(r));const o=this.geometry;r.index&&Ci(r.index.array,o.index.array);for(const a in r.attributes)Ci(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Oe.material=this.material,Oe.geometry.index=o.index,Oe.geometry.attributes=o.attributes,Oe.geometry.boundingBox===null&&(Oe.geometry.boundingBox=new pe),Oe.geometry.boundingSphere===null&&(Oe.geometry.boundingSphere=new Ue);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=i[l];Oe.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Oe.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Oe.geometry.boundingBox),this.getBoundingSphereAt(l,Oe.geometry.boundingSphere),Oe.raycast(t,eo);for(let h=0,f=eo.length;h<f;h++){const d=eo[h];d.object=this,d.batchId=a,e.push(d)}eo.length=0}Oe.material=null,Oe.geometry.index=null,Oe.geometry.attributes={},Oe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,x=d.image.data,g=n.isArrayCamera?qp:Pu;f&&!n.isArrayCamera&&(Ke.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Pu.setFromProjectionMatrix(Ke,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){Ke.copy(this.matrixWorld).invert(),qs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ke),Iu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ke);for(let _=0,v=c.length;_<v;_++)if(c[_].visible&&c[_].active){const b=c[_].geometryIndex;this.getMatrixAt(_,Ke),this.getBoundingSphereAt(b,Ri).applyMatrix4(Ke);let M=!1;if(f&&(M=!g.intersectsSphere(Ri,n)),!M){const E=h[b],C=jp.subVectors(Ri.center,qs).dot(Iu);Da.push(E.start,E.count,C,_)}}const p=Da.list,y=this.customSort;y===null?p.sort(r.transparent?Gp:Hp):y.call(this,p,n);for(let _=0,v=p.length;_<v;_++){const b=p[_];l[m]=b.start*a,u[m]=b.count,x[m]=b.index,m++}Da.reset()}else for(let p=0,y=c.length;p<y;p++)if(c[p].visible&&c[p].active){const _=c[p].geometryIndex;let v=!1;if(f&&(this.getMatrixAt(p,Ke),this.getBoundingSphereAt(_,Ri).applyMatrix4(Ke),v=!g.intersectsSphere(Ri,n)),!v){const b=h[_];l[m]=b.start*a,u[m]=b.count,x[m]=p,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class Ts extends Qe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wo=new R,Xo=new R,Lu=new St,js=new Xi,no=new Ue,Ua=new R,Du=new R;class $o extends me{constructor(t=new we,e=new Ts){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Wo.fromBufferAttribute(e,i-1),Xo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Wo.distanceTo(Xo);t.setAttribute("lineDistance",new Ae(n,1))}else _t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;Lu.copy(i).invert(),js.copy(t.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let g=d,m=x-1;g<m;g+=l){const p=u.getX(g),y=u.getX(g+1),_=io(this,t,js,c,p,y,g);_&&e.push(_)}if(this.isLineLoop){const g=u.getX(x-1),m=u.getX(d),p=io(this,t,js,c,g,m,x-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let g=d,m=x-1;g<m;g+=l){const p=io(this,t,js,c,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=io(this,t,js,c,x-1,d,x-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function io(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Wo.fromBufferAttribute(a,i),Xo.fromBufferAttribute(a,r),e.distanceSqToSegment(Wo,Xo,Ua,Du)>n)return;Ua.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ua);if(!(l<t.near||l>t.far))return{distance:l,point:Du.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Uu=new R,Nu=new R;class Jc extends $o{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Uu.fromBufferAttribute(e,i),Nu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(Nu);t.setAttribute("lineDistance",new Ae(n,1))}else _t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zp extends $o{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class zi extends Qe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fu=new St,Qc=new Xi,so=new Ue,ro=new R;class ur extends me{constructor(t=new we,e=new zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;Fu.copy(i).invert(),Qc.copy(t.ray).applyMatrix4(Fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,g=d;x<g;x++){const m=l.getX(x);ro.fromBufferAttribute(h,m),Ou(ro,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let x=f,g=d;x<g;x++)ro.fromBufferAttribute(h,x),Ou(ro,x,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ou(s,t,e,n,i,r,o){const a=Qc.distanceSqToPoint(s);if(a<e){const c=new R;Qc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class vf extends Ie{constructor(t,e,n=_i,i,r,o,a=Xe,c=Xe,l,u=_r,h=1){if(u!==_r&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new El(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yf extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cl extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,u=new st;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new st:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,i=[],r=[],o=[],a=new R,c=new St;for(let d=0;d<=t;d++){const x=d/t;i[d]=this.getTangentAt(x,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Lt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Lt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],d*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends zn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new st){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $p extends Pl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const oo=new R,Na=new Il,Fa=new Il,Oa=new Il;class Jp extends zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(oo.subVectors(i[0],i[1]).add(i[0]),l=oo);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(oo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=oo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),Na.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,x,g,m),Fa.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,x,g,m),Oa.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,x,g,m)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Fa.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Oa.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Na.calc(c),Fa.calc(c),Oa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bu(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Qp(s,t){const e=1-s;return e*e*t}function tm(s,t){return 2*(1-s)*s*t}function em(s,t){return s*s*t}function hr(s,t,e,n){return Qp(s,t)+tm(s,e)+em(s,n)}function nm(s,t){const e=1-s;return e*e*e*t}function im(s,t){const e=1-s;return 3*e*e*s*t}function sm(s,t){return 3*(1-s)*s*s*t}function rm(s,t){return s*s*s*t}function fr(s,t,e,n,i){return nm(s,t)+im(s,e)+sm(s,n)+rm(s,i)}class bf extends zn{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,r.x,o.x,a.x),fr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class om extends zn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,r.x,o.x,a.x),fr(t,i.y,r.y,o.y,a.y),fr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mf extends zn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class am extends zn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sf extends zn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,i.x,r.x,o.x),hr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cm extends zn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,i.x,r.x,o.x),hr(t,i.y,r.y,o.y),hr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tf extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Bu(a,c.x,l.x,u.x,h.x),Bu(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var zu=Object.freeze({__proto__:null,ArcCurve:$p,CatmullRomCurve3:Jp,CubicBezierCurve:bf,CubicBezierCurve3:om,EllipseCurve:Pl,LineCurve:Mf,LineCurve3:am,QuadraticBezierCurve:Sf,QuadraticBezierCurve3:cm,SplineCurve:Tf});class lm extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new zu[i.type]().fromJSON(i))}return this}}class tl extends lm{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mf(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Sf(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new bf(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Tf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Pl(t,e,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ba extends tl{constructor(t){super(t),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new tl().fromJSON(i))}return this}}function um(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ef(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=mm(s,t,r,e)),s.length>80*e){a=s[0],c=s[1];let u=a,h=c;for(let f=e;f<i;f+=e){const d=s[f],x=s[f+1];d<a&&(a=d),x<c&&(c=x),d>u&&(u=d),x>h&&(h=x)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Er(r,o,e,a,c,l,0),o}function Ef(s,t,e,n,i){let r;if(i===Am(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=ku(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ku(o/n|0,s[o],s[o+1],r);return r&&Is(r,r.next)&&(wr(r),r=r.next),r}function Hi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Is(e,e.next)||de(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ym(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?fm(s,n,i,r):hm(s)){t.push(c.i,s.i,l.i),wr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=dm(Hi(s),t),Er(s,t,e,n,i,r,2)):o===2&&pm(s,t,e,n,i,r):Er(Hi(s),t,e,n,i,r,1);break}}}function hm(s){const t=s.prev,e=s,n=s.next;if(de(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(i,r,o),h=Math.min(a,c,l),f=Math.max(i,r,o),d=Math.max(a,c,l);let x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=f&&x.y>=h&&x.y<=d&&rr(i,a,r,c,o,l,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function fm(s,t,e,n){const i=s.prev,r=s,o=s.next;if(de(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,c,l),x=Math.min(u,h,f),g=Math.max(a,c,l),m=Math.max(u,h,f),p=el(d,x,t,e,n),y=el(g,m,t,e,n);let _=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&rr(a,u,c,h,l,f,_.x,_.y)&&de(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==i&&v!==o&&rr(a,u,c,h,l,f,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=g&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&rr(a,u,c,h,l,f,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==i&&v!==o&&rr(a,u,c,h,l,f,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function dm(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Is(n,i)&&wf(n,e,e.next,i)&&Ar(n,i)&&Ar(i,n)&&(t.push(n.i,e.i,i.i),wr(e),wr(e.next),e=s=i),e=e.next}while(e!==s);return Hi(e)}function pm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sm(o,a)){let c=Rf(o,a);o=Hi(o,o.next),c=Hi(c,c.next),Er(o,t,e,n,i,r,0),Er(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function mm(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Ef(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Mm(l))}i.sort(xm);for(let r=0;r<i.length;r++)e=gm(i[r],e);return e}function xm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function gm(s,t){const e=_m(s,t);if(!e)return t;const n=Rf(e,s);return Hi(n,n.next),Hi(e,e.next)}function _m(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Is(s,e))return e;do{if(Is(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Af(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const h=Math.abs(i-e.y)/(n-e.x);Ar(e,s)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&vm(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function vm(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function ym(s,t,e,n){let i=s;do i.z===0&&(i.z=el(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,bm(i)}function bm(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function el(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Mm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Af(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function rr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Af(s,t,e,n,i,r,o,a)}function Sm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Tm(s,t)&&(Ar(s,t)&&Ar(t,s)&&Em(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||Is(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Is(s,t){return s.x===t.x&&s.y===t.y}function wf(s,t,e,n){const i=co(de(s,t,e)),r=co(de(s,t,n)),o=co(de(e,n,s)),a=co(de(e,n,t));return!!(i!==r&&o!==a||i===0&&ao(s,e,t)||r===0&&ao(s,n,t)||o===0&&ao(e,s,n)||a===0&&ao(e,t,n))}function ao(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function co(s){return s>0?1:s<0?-1:0}function Tm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ar(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function Em(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Rf(s,t){const e=nl(s.i,s.x,s.y),n=nl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ku(s,t,e,n){const i=nl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function nl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Am(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class wm{static triangulate(t,e,n=2){return um(t,e,n)}}class Ll{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ll.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Vu(t),Hu(n,t);let o=t.length;e.forEach(Vu);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Hu(n,e[c]);const a=wm.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Vu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Hu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Jo extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,d=[],x=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let _=0;_<l;_++){const v=_*h-r;x.push(v,-y,0),g.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const _=y+l*p,v=y+l*(p+1),b=y+1+l*(p+1),M=y+1+l*p;d.push(_,v,M),d.push(v,b,M)}this.setIndex(d),this.setAttribute("position",new Ae(x,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dl extends Qe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kn extends Dl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Rm extends Qe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cm extends Qe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pm extends Qe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cf extends Qe{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Mt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}function lo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Im(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Lm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Gu(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Pf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class Lr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dm extends Lr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ql,endingEnd:Ql}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case tu:r=t,a=2*e-n;break;case eu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tu:o=t,c=2*n-e;break;case eu:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(i-e),g=x*x,m=g*x,p=-f*m+2*f*g-f*x,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*x+1,_=(-1-d)*m+(1.5+d)*g+.5*x,v=d*m-d*g;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+y*o[l+b]+_*o[c+b]+v*o[h+b];return r}}class Um extends Lr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class Nm extends Lr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Pn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return _t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){Vt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Vt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Im(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){Vt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===aa,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let x=0;x!==n;++x){const g=e[h+x];if(g!==e[f+x]||g!==e[d+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=br;class Fs extends Pn{constructor(t,e,n){super(t,e,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=yr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class If extends Pn{constructor(t,e,n,i){super(t,e,n,i)}}If.prototype.ValueTypeName="color";class Ls extends Pn{constructor(t,e,n,i){super(t,e,n,i)}}Ls.prototype.ValueTypeName="number";class Fm extends Lr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let u=l+a;l!==u;l+=4)gn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ds extends Pn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Fm(this.times,this.values,this.getValueSize(),t)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Pn{constructor(t,e,n){super(t,e,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=yr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Pn{constructor(t,e,n,i){super(t,e,n,i)}}Us.prototype.ValueTypeName="vector";class Om{constructor(t="",e=-1,n=[],i=Ud){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(zm(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Lm(c);c=Gu(c,1,u),l=Gu(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ls(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(_t("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Vt("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,x,g){if(d.length!==0){const m=[],p=[];Pf(d,m,p,x),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let g=0;g<f[x].morphTargets.length;g++)d[f[x].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let y=0;y!==f[x].morphTargets.length;++y){const _=f[x];m.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new Ls(".morphTargetInfluence["+g+"]",m,p))}c=d.length*o}else{const d=".bones["+e[h].name+"]";n(Us,d+".position",f,"pos",i),n(Ds,d+".quaternion",f,"rot",i),n(Us,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Bm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return If;case"quaternion":return Ds;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function zm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Bm(s.type);if(s.times===void 0){const e=[],n=[];Pf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Jn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Lf{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],x=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const km=new Lf;class ii{constructor(t){this.manager=t!==void 0?t:km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ii.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class Vm extends Error{constructor(t,e){super(t),this.response=e}}class Ns extends ii{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Jn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:i});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&_t("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=qn[t],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0;let g=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:_,value:v})=>{if(_)p.close();else{g+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:d});for(let M=0,E=u.length;M<E;M++){const C=u[M];C.onProgress&&C.onProgress(b)}p.enqueue(v),y()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Vm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{Jn.add(`file:${t}`,l);const u=qn[t];delete qn[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=qn[t];if(u===void 0)throw this.manager.itemError(t),l;delete qn[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const as=new WeakMap;class Hm extends ii{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Jn.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=as.get(o);h===void 0&&(h=[],as.set(o,h)),h.push({onLoad:e,onError:i})}return o}const a=Mr("img");function c(){u(),e&&e(this);const h=as.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}as.delete(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),Jn.remove(`image:${t}`);const f=as.get(this)||[];for(let d=0;d<f.length;d++){const x=f[d];x.onError&&x.onError(h)}as.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jn.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Df extends ii{constructor(t){super(t)}load(t,e,n,i){const r=new Ie,o=new Hm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Qo extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const za=new St,Wu=new R,Xu=new R;class Ul{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gm extends Ul{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Wm extends Qo{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const qu=new St,Ys=new R,ka=new R;class Xm extends Ul{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),ka.copy(n.position),ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu,n.coordinateSystem,n.reversedDepth)}}class qm extends Qo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Nl extends mf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jm extends Ul{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uf extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new jm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ym extends Qo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Va=new WeakMap;class Km extends ii{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&_t("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&_t("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Jn.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{if(Va.has(o)===!0)i&&i(Va.get(o)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(l),r.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Va.set(c,l),Jn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Jn.add(`image-bitmap:${t}`,c),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Zm extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $m{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Fl="\\[\\]\\.:\\/",Jm=new RegExp("["+Fl+"]","g"),Ol="[^"+Fl+"]",Qm="[^"+Fl.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",Ol),e0=/(WCOD+)?/.source.replace("WCOD",Qm),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),s0=new RegExp("^"+t0+e0+n0+i0+"$"),r0=["material","materials","bones","map"];class o0{constructor(t,e,n){const i=n||Qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Qt{constructor(t,e,n){this.path=e,this.parsedPath=n||Qt.parseTrackName(e),this.node=Qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Qt.Composite(t,e,n):new Qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jm,"")}static parseTrackName(t){const e=s0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);r0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){_t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=o0;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ju=new St;class a0{constructor(t,e,n=0,i=1/0){this.ray=new Xi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(t,e=!0,n=[]){return il(t,this,n,e),n.sort(Yu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)il(t[i],this,n,e);return n.sort(Yu),n}}function Yu(s,t){return s.distance-t.distance}function il(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)il(r[o],t,e,!0)}}class Ku{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Lt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zu=new R,uo=new R,cs=new R,ls=new R,Ha=new R,c0=new R,l0=new R;class ei{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Zu.subVectors(t,this.start),uo.subVectors(this.end,this.start);const n=uo.dot(uo);let r=uo.dot(Zu)/n;return e&&(r=Lt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=c0,n=l0){const i=10000000000000001e-32;let r,o;const a=this.start,c=t.start,l=this.end,u=t.end;cs.subVectors(l,a),ls.subVectors(u,c),Ha.subVectors(a,c);const h=cs.dot(cs),f=ls.dot(ls),d=ls.dot(Ha);if(h<=i&&f<=i)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(h<=i)r=0,o=d/f,o=Lt(o,0,1);else{const x=cs.dot(Ha);if(f<=i)o=0,r=Lt(-x/h,0,1);else{const g=cs.dot(ls),m=h*f-g*g;m!==0?r=Lt((g*d-x*f)/m,0,1):r=0,o=(g*r+d)/f,o<0?(o=0,r=Lt(-x/h,0,1)):o>1&&(o=1,r=Lt((g-x)/h,0,1))}}return e.copy(a).add(cs.multiplyScalar(r)),n.copy(c).add(ls.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class u0{constructor(){this.type="ShapePath",this.color=new Mt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new tl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const y=[];for(let _=0,v=p.length;_<v;_++){const b=p[_],M=new Ba;M.curves=b.curves,y.push(M)}return y}function n(p,y){const _=y.length;let v=!1;for(let b=_-1,M=0;M<_;b=M++){let E=y[b],C=y[M],T=C.x-E.x,S=C.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=y[M],T=-T,C=y[b],S=-S),p.y<E.y||p.y>C.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{const P=S*(p.x-E.x)-T*(p.y-E.y);if(P===0)return!0;if(P<0)continue;v=!v}}else{if(p.y!==E.y)continue;if(C.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=C.x)return!0}}return v}const i=Ll.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Ba,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],x=0,g;f[x]=void 0,d[x]=[];for(let p=0,y=r.length;p<y;p++)a=r[p],g=a.getPoints(),o=i(g),o=t?!o:o,o?(!u&&f[x]&&x++,f[x]={s:new Ba,p:g},f[x].s.curves=a.curves,u&&x++,d[x]=[]):d[x].push({h:a,p:g[0]});if(!f[0])return e(r);if(f.length>1){let p=!1,y=0;for(let _=0,v=f.length;_<v;_++)h[_]=[];for(let _=0,v=f.length;_<v;_++){const b=d[_];for(let M=0;M<b.length;M++){const E=b[M];let C=!0;for(let T=0;T<f.length;T++)n(E.p,f[T].p)&&(_!==T&&y++,C?(C=!1,h[T].push(E)):p=!0);C&&h[_].push(E)}}y>0&&p===!1&&(d=h)}let m;for(let p=0,y=f.length;p<y;p++){c=f[p].s,l.push(c),m=d[p];for(let _=0,v=m.length;_<v;_++)c.holes.push(m[_].h)}return l}}class h0 extends Wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){_t("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $u(s,t,e,n){const i=f0(n);switch(e){case sf:return s*t;case yl:return s*t/i.components*i.byteLength;case Yo:return s*t/i.components*i.byteLength;case bl:return s*t*2/i.components*i.byteLength;case Ml:return s*t*2/i.components*i.byteLength;case rf:return s*t*3/i.components*i.byteLength;case Je:return s*t*4/i.components*i.byteLength;case Sl:return s*t*4/i.components*i.byteLength;case Do:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case No:case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mc:case Tc:return Math.max(s,16)*Math.max(t,8)/4;case bc:case Sc:return Math.max(s,8)*Math.max(t,8)/2;case Ec:case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Gc:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xc:case qc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case jc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f0(s){switch(s){case On:case Qh:return{byteLength:1,components:1};case xr:case tf:case Gi:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case _i:case gl:case rn:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cr}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cr);function Nf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function d0(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<h.length;d++){const x=h[f],g=h[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,x=h.length;d<x;d++){const g=h[d];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,O0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:x0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:y0,aomap_pars_fragment:b0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:T0,beginnormal_vertex:E0,bsdfs:A0,iridescence_fragment:w0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:U0,color_pars_vertex:N0,color_vertex:F0,common:O0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:z0,displacementmap_pars_vertex:k0,displacementmap_vertex:V0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Y0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:ox,envmap_vertex:Z0,fog_vertex:$0,fog_pars_vertex:J0,fog_fragment:Q0,fog_pars_fragment:tx,gradientmap_pars_fragment:ex,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:cx,lights_phong_fragment:lx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:vx,map_fragment:yx,map_pars_fragment:bx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Ax,morphcolor_vertex:wx,morphnormal_vertex:Rx,morphtarget_pars_vertex:Cx,morphtarget_vertex:Px,normal_fragment_begin:Ix,normal_fragment_maps:Lx,normal_pars_fragment:Dx,normal_pars_vertex:Ux,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:zx,iridescence_pars_fragment:kx,opaque_fragment:Vx,packing:Hx,premultiplied_alpha_fragment:Gx,project_vertex:Wx,dithering_fragment:Xx,dithering_pars_fragment:qx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:Zx,shadowmap_vertex:$x,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:tg,skinning_vertex:eg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:og,transmission_fragment:ag,transmission_pars_fragment:cg,uv_pars_fragment:lg,uv_pars_vertex:ug,uv_vertex:hg,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:xg,cube_vert:gg,cube_frag:_g,depth_vert:vg,depth_frag:yg,distanceRGBA_vert:bg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:Tg,linedashed_vert:Eg,linedashed_frag:Ag,meshbasic_vert:wg,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Ig,meshmatcap_frag:Lg,meshnormal_vert:Dg,meshnormal_frag:Ug,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:kg,points_vert:Vg,points_frag:Hg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},at={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Nn={basic:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:He([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:He([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:He([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:He([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:He([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:He([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:He([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:He([at.lights,at.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Nn.physical={uniforms:He([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ho={r:0,b:0,g:0},Pi=new Rn,jg=new St;function Yg(s,t,e,n,i,r,o){const a=new Mt(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function g(_){let v=!1;const b=x(_);b===null?p(a,c):b&&b.isColor&&(p(b,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,v){const b=x(v);b&&(b.isCubeTexture||b.mapping===jo)?(u===void 0&&(u=new Me(new Pr(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ps(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Pi.copy(v.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Pi)),u.material.toneMapped=jt.getTransfer(b.colorSpace)!==ne,(h!==b||f!==b.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Me(new Jo(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ps(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=jt.getTransfer(b.colorSpace)!==ne,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(ho,df(s)),n.buffers.color.setClear(ho.r,ho.g,ho.b,v,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:g,addToRenderList:m,dispose:y}}function Kg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,P,L,N,F){let k=!1;const V=h(N,L,P);r!==V&&(r=V,l(r.object)),k=d(S,N,L,F),k&&x(S,N,L,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(S,P,L,N),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,P,L){const N=L.wireframe===!0;let F=n[S.id];F===void 0&&(F={},n[S.id]=F);let k=F[P.id];k===void 0&&(k={},F[P.id]=k);let V=k[N];return V===void 0&&(V=f(c()),k[N]=V),V}function f(S){const P=[],L=[],N=[];for(let F=0;F<e;F++)P[F]=0,L[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:N,object:S,attributes:{},index:null}}function d(S,P,L,N){const F=r.attributes,k=P.attributes;let V=0;const q=L.getAttributes();for(const W in q)if(q[W].location>=0){const nt=F[W];let vt=k[W];if(vt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),nt===void 0||nt.attribute!==vt||vt&&nt.data!==vt.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function x(S,P,L,N){const F={},k=P.attributes;let V=0;const q=L.getAttributes();for(const W in q)if(q[W].location>=0){let nt=k[W];nt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor));const vt={};vt.attribute=nt,nt&&nt.data&&(vt.data=nt.data),F[W]=vt,V++}r.attributes=F,r.attributesNum=V,r.index=N}function g(){const S=r.newAttributes;for(let P=0,L=S.length;P<L;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const L=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;L[S]=1,N[S]===0&&(s.enableVertexAttribArray(S),N[S]=1),F[S]!==P&&(s.vertexAttribDivisor(S,P),F[S]=P)}function y(){const S=r.newAttributes,P=r.enabledAttributes;for(let L=0,N=P.length;L<N;L++)P[L]!==S[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function _(S,P,L,N,F,k,V){V===!0?s.vertexAttribIPointer(S,P,L,F,k):s.vertexAttribPointer(S,P,L,N,F,k)}function v(S,P,L,N){g();const F=N.attributes,k=L.getAttributes(),V=P.defaultAttributeValues;for(const q in k){const W=k[q];if(W.location>=0){let tt=F[q];if(tt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const nt=tt.normalized,vt=tt.itemSize,zt=t.get(tt);if(zt===void 0)continue;const $t=zt.buffer,se=zt.type,Yt=zt.bytesPerElement,j=se===s.INT||se===s.UNSIGNED_INT||tt.gpuType===gl;if(tt.isInterleavedBufferAttribute){const Z=tt.data,ft=Z.stride,Ut=tt.offset;if(Z.isInstancedInterleavedBuffer){for(let yt=0;yt<W.locationSize;yt++)p(W.location+yt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let yt=0;yt<W.locationSize;yt++)m(W.location+yt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let yt=0;yt<W.locationSize;yt++)_(W.location+yt,vt/W.locationSize,se,nt,ft*Yt,(Ut+vt/W.locationSize*yt)*Yt,j)}else{if(tt.isInstancedBufferAttribute){for(let Z=0;Z<W.locationSize;Z++)p(W.location+Z,tt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Z=0;Z<W.locationSize;Z++)m(W.location+Z);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Z=0;Z<W.locationSize;Z++)_(W.location+Z,vt/W.locationSize,se,nt,vt*Yt,vt/W.locationSize*Z*Yt,j)}}else if(V!==void 0){const nt=V[q];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(W.location,nt);break;case 3:s.vertexAttrib3fv(W.location,nt);break;case 4:s.vertexAttrib4fv(W.location,nt);break;default:s.vertexAttrib1fv(W.location,nt)}}}}y()}function b(){C();for(const S in n){const P=n[S];for(const L in P){const N=P[L];for(const F in N)u(N[F].object),delete N[F];delete P[L]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const L in P){const N=P[L];for(const F in N)u(N[F].object),delete N[F];delete P[L]}delete n[S.id]}function E(S){for(const P in n){const L=n[P];if(L[S.id]===void 0)continue;const N=L[S.id];for(const F in N)u(N[F].object),delete N[F];delete L[S.id]}}function C(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Zg(s,t,e){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let x=0;x<h;x++)d+=u[x];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],u[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let x=0;for(let g=0;g<h;g++)x+=u[g]*f[g];e.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $g(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Je&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==On&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==rn&&!C)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(_t("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:b,maxSamples:M}}function Jg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Sn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||x===null||x.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,_=y*4;let v=p.clippingState||null;c.value=v,v=u(x,f,_,d);for(let b=0;b!==_;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,x){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,x!==!0||m===null){const p=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==g;++_,v+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Qg(s){let t=new WeakMap;function e(o,a){return a===vc?o.mapping=ws:a===yc&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vc||a===yc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ip(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const mi=4,Ju=[.125,.215,.35,.446,.526,.582],Oi=20,t_=256,Ks=new Nl,Qu=new Mt;let Ga=null,Wa=0,Xa=0,qa=!1;const e_=new R;class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=e_}=r;Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=qa,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Gi,format:Je,colorSpace:ze,depthBuffer:!1},i=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n_(r)),this._blurMaterial=s_(r,t,e)}return i}_compileMaterial(t){const e=new Me(new we,t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,n,i,r){const c=new Be(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Qu),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new Pr,new Bi({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(Qu),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));const b=this._cubeSize;us(i,v*b,_>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,c),h.render(t,c)}h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ws||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ks)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const y=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=i_(this._lodMax,y,_)}const o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,d=h*f,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-mi?n-x+mi:0),p=4*(this._cubeSize-g);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=x-e,us(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(a,Ks),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,us(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(a,Ks)}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Vt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=l;const f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),g=r/x,m=isFinite(r)?1+Math.floor(u*g):Oi;m>Oi&&_t(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let y=0;for(let E=0;E<Oi;++E){const C=E/g,T=Math.exp(-C*C/2);p.push(T),E===0?y+=T:E<m&&(y+=2*T)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;const v=this._sizeLods[i],b=3*v*(i>_-mi?i-_+mi:0),M=4*(this._cubeSize-v);us(e,b,M,3*v,2*v),c.setRenderTarget(e),c.render(h,Ks)}}function n_(s){const t=[],e=[],n=[];let i=s;const r=s-mi+1+Ju.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-mi?c=Ju[o-s+mi-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,x=6,g=3,m=2,p=1,y=new Float32Array(g*x*d),_=new Float32Array(m*x*d),v=new Float32Array(p*x*d);for(let M=0;M<d;M++){const E=M%3*2/3-1,C=M>2?0:-1,T=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(T,g*x*M),_.set(f,m*x*M);const S=[M,M,M,M,M,M];v.set(S,p*x*M)}const b=new we;b.setAttribute("position",new ve(y,g)),b.setAttribute("uv",new ve(_,m)),b.setAttribute("faceIndex",new ve(v,p)),n.push(new Me(b,null)),i>mi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function eh(s,t,e){const n=new vi(s,t,e);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function i_(s,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function s_(s,t,e){const n=new Float32Array(Oi),i=new R(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function nh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ih(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===vc||c===yc,u=c===ws||c===Rs;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new th(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new th(s)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function o_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Sr("WebGLRenderer: "+n+" extension not supported."),i}}}function a_(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,x=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let _=0,v=y.length;_<v;_+=3){const b=y[_+0],M=y[_+1],E=y[_+2];f.push(b,M,M,E,E,b)}}else if(x!==void 0){const y=x.array;g=x.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const b=_+0,M=_+1,E=_+2;f.push(b,M,M,E,E,b)}}else return;const m=new(cf(f)?ff:hf)(f,1);m.version=g;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function c_(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,x){x!==0&&(s.drawElementsInstanced(n,d,r,f*o,x),e.update(d,n,x))}function u(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];e.update(m,n,1)}function h(f,d,x,g){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,x);let p=0;for(let y=0;y<x;y++)p+=d[y]*g[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function l_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function u_(s,t,e){const n=new WeakMap,i=new Kt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;x===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const E=new Float32Array(b*M*4*h),C=new lf(E,b,M,h);C.type=rn,C.needsUpdate=!0;const T=v*4;for(let P=0;P<h;P++){const L=p[P],N=y[P],F=_[P],k=b*M*4*P;for(let V=0;V<L.count;V++){const q=V*T;x===!0&&(i.fromBufferAttribute(L,V),E[k+q+0]=i.x,E[k+q+1]=i.y,E[k+q+2]=i.z,E[k+q+3]=0),g===!0&&(i.fromBufferAttribute(N,V),E[k+q+4]=i.x,E[k+q+5]=i.y,E[k+q+6]=i.z,E[k+q+7]=0),m===!0&&(i.fromBufferAttribute(F,V),E[k+q+8]=i.x,E[k+q+9]=i.y,E[k+q+10]=i.z,E[k+q+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new st(b,M)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const g=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function h_(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Ff=new Ie,sh=new vf(1,1),Of=new lf,Bf=new mp,zf=new xf,rh=[],oh=[],ah=new Float32Array(16),ch=new Float32Array(9),lh=new Float32Array(4);function Bs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=rh[i];if(r===void 0&&(r=new Float32Array(i),rh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ea(s,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function f_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function d_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function p_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function m_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function x_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;lh.set(n),s.uniformMatrix2fv(this.addr,!1,lh),Ce(e,n)}}function g_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;ch.set(n),s.uniformMatrix3fv(this.addr,!1,ch),Ce(e,n)}}function __(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;ah.set(n),s.uniformMatrix4fv(this.addr,!1,ah),Ce(e,n)}}function v_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function b_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function M_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function S_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function T_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function E_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function A_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function w_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(sh.compareFunction=af,r=sh):r=Ff,e.setTexture2D(t||r,i)}function R_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Bf,i)}function C_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zf,i)}function P_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Of,i)}function I_(s){switch(s){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return x_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return b_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return T_;case 36295:return E_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}function L_(s,t){s.uniform1fv(this.addr,t)}function D_(s,t){const e=Bs(t,this.size,2);s.uniform2fv(this.addr,e)}function U_(s,t){const e=Bs(t,this.size,3);s.uniform3fv(this.addr,e)}function N_(s,t){const e=Bs(t,this.size,4);s.uniform4fv(this.addr,e)}function F_(s,t){const e=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function O_(s,t){const e=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function B_(s,t){const e=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function z_(s,t){s.uniform1iv(this.addr,t)}function k_(s,t){s.uniform2iv(this.addr,t)}function V_(s,t){s.uniform3iv(this.addr,t)}function H_(s,t){s.uniform4iv(this.addr,t)}function G_(s,t){s.uniform1uiv(this.addr,t)}function W_(s,t){s.uniform2uiv(this.addr,t)}function X_(s,t){s.uniform3uiv(this.addr,t)}function q_(s,t){s.uniform4uiv(this.addr,t)}function j_(s,t,e){const n=this.cache,i=t.length,r=ea(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ff,r[o])}function Y_(s,t,e){const n=this.cache,i=t.length,r=ea(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Bf,r[o])}function K_(s,t,e){const n=this.cache,i=t.length,r=ea(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||zf,r[o])}function Z_(s,t,e){const n=this.cache,i=t.length,r=ea(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Of,r[o])}function $_(s){switch(s){case 5126:return L_;case 35664:return D_;case 35665:return U_;case 35666:return N_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return k_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}class J_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=I_(e.type)}}class Q_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}}class tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function uh(s,t){s.seq.push(t),s.map[t.id]=t}function ev(s,t,e){const n=s.name,i=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){uh(e,l===void 0?new J_(a,s,t):new Q_(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new tv(a),uh(e,h)),e=h}}}class Oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ev(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function hh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const nv=37297;let iv=0;function sv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const fh=new Bt;function rv(s){jt._getMatrix(fh,jt.workingColorSpace,s);const t=`mat3( ${fh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Vo:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+sv(s.getShaderSource(t),a)}else return r}function ov(s,t){const e=rv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function av(s,t){let e;switch(t){case Ad:e="Linear";break;case wd:e="Reinhard";break;case Rd:e="Cineon";break;case Cd:e="ACESFilmic";break;case Id:e="AgX";break;case Ld:e="Neutral";break;case Pd:e="Custom";break;default:_t("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new R;function cv(){jt.getLuminanceCoefficients(fo);const s=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function uv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function or(s){return s!==""}function ph(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(fv,pv)}const dv=new Map;function pv(s,t){let e=Ot[t];if(e===void 0){const n=dv.get(t);if(n!==void 0)e=Ot[n],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(s){return s.replace(mv,xv)}function xv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function _v(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Rs:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function yv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Td:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function bv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=gv(e),l=_v(e),u=vv(e),h=yv(e),f=bv(e),d=lv(e),x=uv(r),g=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==gi?av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=sl(o),o=ph(o,e),o=mh(o,e),a=sl(a),a=ph(a,e),a=mh(a,e),o=xh(o),a=xh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+o,v=y+p+a,b=hh(i,i.VERTEX_SHADER,_),M=hh(i,i.FRAGMENT_SHADER,v);i.attachShader(g,b),i.attachShader(g,M),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(b)||"",F=i.getShaderInfoLog(M)||"",k=L.trim(),V=N.trim(),q=F.trim();let W=!0,tt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,M);else{const nt=dh(i,b,"vertex"),vt=dh(i,M,"fragment");Vt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+nt+`
`+vt)}else k!==""?_t("WebGLProgram: Program Info Log:",k):(V===""||q==="")&&(tt=!1);tt&&(P.diagnostics={runnable:W,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(b),i.deleteShader(M),C=new Oo(i,g),T=hv(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,nv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=M,this}let Sv=0;class Tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ev(t),e.set(t,n)),n}}class Ev{constructor(t){this.id=Sv++,this.code=t,this.usedTimes=0}}function Av(s,t,e,n,i,r,o){const a=new Al,c=new Tv,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,L,N){const F=L.fog,k=N.geometry,V=T.isMeshStandardMaterial?L.environment:null,q=(T.isMeshStandardMaterial?e:t).get(T.envMap||V),W=q&&q.mapping===jo?q.image.height:null,tt=x[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&_t("WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,vt=nt!==void 0?nt.length:0;let zt=0;k.morphAttributes.position!==void 0&&(zt=1),k.morphAttributes.normal!==void 0&&(zt=2),k.morphAttributes.color!==void 0&&(zt=3);let $t,se,Yt,j;if(tt){const te=Nn[tt];$t=te.vertexShader,se=te.fragmentShader}else $t=T.vertexShader,se=T.fragmentShader,c.update(T),Yt=c.getVertexShaderID(T),j=c.getFragmentShaderID(T);const Z=s.getRenderTarget(),ft=s.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,yt=N.isBatchedMesh===!0,kt=!!T.map,ye=!!T.matcap,Ht=!!q,le=!!T.aoMap,D=!!T.lightMap,Wt=!!T.bumpMap,Xt=!!T.normalMap,oe=!!T.displacementMap,xt=!!T.emissiveMap,ue=!!T.metalnessMap,Et=!!T.roughnessMap,Ft=T.anisotropy>0,I=T.clearcoat>0,A=T.dispersion>0,z=T.iridescence>0,Y=T.sheen>0,$=T.transmission>0,X=Ft&&!!T.anisotropyMap,bt=I&&!!T.clearcoatMap,ct=I&&!!T.clearcoatNormalMap,At=I&&!!T.clearcoatRoughnessMap,gt=z&&!!T.iridescenceMap,J=z&&!!T.iridescenceThicknessMap,it=Y&&!!T.sheenColorMap,Pt=Y&&!!T.sheenRoughnessMap,Rt=!!T.specularMap,ht=!!T.specularColorMap,Dt=!!T.specularIntensityMap,U=$&&!!T.transmissionMap,lt=$&&!!T.thicknessMap,rt=!!T.gradientMap,ot=!!T.alphaMap,Q=T.alphaTest>0,K=!!T.alphaHash,pt=!!T.extensions;let Nt=gi;T.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const ae={shaderID:tt,shaderType:T.type,shaderName:T.name,vertexShader:$t,fragmentShader:se,defines:T.defines,customVertexShaderID:Yt,customFragmentShaderID:j,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:yt,batchingColor:yt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ze,alphaToCoverage:!!T.alphaToCoverage,map:kt,matcap:ye,envMap:Ht,envMapMode:Ht&&q.mapping,envMapCubeUVHeight:W,aoMap:le,lightMap:D,bumpMap:Wt,normalMap:Xt,displacementMap:f&&oe,emissiveMap:xt,normalMapObjectSpace:Xt&&T.normalMapType===Bd,normalMapTangentSpace:Xt&&T.normalMapType===Ko,metalnessMap:ue,roughnessMap:Et,anisotropy:Ft,anisotropyMap:X,clearcoat:I,clearcoatMap:bt,clearcoatNormalMap:ct,clearcoatRoughnessMap:At,dispersion:A,iridescence:z,iridescenceMap:gt,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:it,sheenRoughnessMap:Pt,specularMap:Rt,specularColorMap:ht,specularIntensityMap:Dt,transmission:$,transmissionMap:U,thicknessMap:lt,gradientMap:rt,opaque:T.transparent===!1&&T.blending===bs&&T.alphaToCoverage===!1,alphaMap:ot,alphaTest:Q,alphaHash:K,combine:T.combine,mapUv:kt&&g(T.map.channel),aoMapUv:le&&g(T.aoMap.channel),lightMapUv:D&&g(T.lightMap.channel),bumpMapUv:Wt&&g(T.bumpMap.channel),normalMapUv:Xt&&g(T.normalMap.channel),displacementMapUv:oe&&g(T.displacementMap.channel),emissiveMapUv:xt&&g(T.emissiveMap.channel),metalnessMapUv:ue&&g(T.metalnessMap.channel),roughnessMapUv:Et&&g(T.roughnessMap.channel),anisotropyMapUv:X&&g(T.anisotropyMap.channel),clearcoatMapUv:bt&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:it&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(T.sheenRoughnessMap.channel),specularMapUv:Rt&&g(T.specularMap.channel),specularColorMapUv:ht&&g(T.specularColorMap.channel),specularIntensityMapUv:Dt&&g(T.specularIntensityMap.channel),transmissionMapUv:U&&g(T.transmissionMap.channel),thicknessMapUv:lt&&g(T.thicknessMap.channel),alphaMapUv:ot&&g(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Xt||Ft),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(kt||ot),fog:!!F,useFog:T.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:kt&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===ne,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Tn,flipSided:T.side===We,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:pt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&T.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(y(S,T),_(S,T),S.push(s.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const S=x[T.type];let P;if(S){const L=Nn[S];P=pf.clone(L.uniforms)}else P=T.uniforms;return P}function b(T,S){let P;for(let L=0,N=u.length;L<N;L++){const F=u[L];if(F.cacheKey===S){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Mv(s,S,T,r),u.push(P)),P}function M(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function E(T){c.remove(T)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:C}}function wv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Rv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _h(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,x,g,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,f,d,x,g,m){const p=o(h,f,d,x,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(h,f,d,x,g,m){const p=o(h,f,d,x,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Rv),n.length>1&&n.sort(f||_h),i.length>1&&i.sort(f||_h)}function u(){for(let h=t,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Cv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new vh,s.set(n,[o])):i>=r.length?(o=new vh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Pv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Mt};break;case"SpotLight":e={position:new R,direction:new R,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Lv=0;function Dv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Uv(s){const t=new Pv,e=Iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new St,o=new St;function a(l){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,x=0,g=0,m=0,p=0,y=0,_=0,v=0,b=0,M=0,E=0;l.sort(Dv);for(let T=0,S=l.length;T<S;T++){const P=l[T],L=P.color,N=P.intensity,F=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],N);E++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(L).multiplyScalar(N),V.distance=F,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const q=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,q.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[g]=q.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=k,v++}g++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(L).multiplyScalar(N),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=P.shadow.matrix,_++}n.point[x]=V,x++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(N),V.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==x||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+b-M,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,C.directionalLength=d,C.pointLength=x,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=E,n.version=Lv++)}function c(l,u){let h=0,f=0,d=0,x=0,g=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function yh(s){const t=new Uv(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Nv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new yh(s),t.set(i,[a])):r>=o.length?(a=new yh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bv(s,t,e){let n=new Ir;const i=new st,r=new st,o=new Kt,a=new Cm({depthPacking:Od}),c=new Pm,l={},u=e.maxTextureSize,h={[wn]:We,[We]:wn,[Tn]:Tn},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Fv,fragmentShader:Ov}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new we;x.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Me(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(M,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Qn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==Yn&&this.type===Yn,F=p===Yn&&this.type!==Yn;for(let k=0,V=M.length;k<V;k++){const q=M[k],W=q.shadow;if(W===void 0){_t("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const tt=W.getFrameExtents();if(i.multiply(tt),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/tt.x),i.x=r.x*tt.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/tt.y),i.y=r.y*tt.y,W.mapSize.y=r.y)),W.map===null||N===!0||F===!0){const vt=this.type!==Yn?{minFilter:Xe,magFilter:Xe}:{};W.map!==null&&W.map.dispose(),W.map=new vi(i.x,i.y,vt),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const nt=W.getViewportCount();for(let vt=0;vt<nt;vt++){const zt=W.getViewport(vt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),L.viewport(o),W.updateMatrices(q,vt),n=W.getFrustum(),v(E,C,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Yn&&y(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,S,P)};function y(M,E){const C=t.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vi(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,C,d,g,null)}function _(M,E,C,T){let S=null;const P=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=S.uuid,N=E.uuid;let F=l[L];F===void 0&&(F={},l[L]=F);let k=F[N];k===void 0&&(k=S.clone(),F[N]=k,E.addEventListener("dispose",b)),S=k}if(S.visible=E.visible,S.wireframe=E.wireframe,T===Yn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=s.properties.get(S);L.light=C}return S}function v(M,E,C,T,S){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Yn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const N=t.update(M),F=M.material;if(Array.isArray(F)){const k=N.groups;for(let V=0,q=k.length;V<q;V++){const W=k[V],tt=F[W.materialIndex];if(tt&&tt.visible){const nt=_(M,tt,T,S);M.onBeforeShadow(s,M,E,C,N,nt,W),s.renderBufferDirect(C,null,N,nt,M,W),M.onAfterShadow(s,M,E,C,N,nt,W)}}}else if(F.visible){const k=_(M,F,T,S);M.onBeforeShadow(s,M,E,C,N,k,null),s.renderBufferDirect(C,null,N,k,M,null),M.onAfterShadow(s,M,E,C,N,k,null)}}const L=M.children;for(let N=0,F=L.length;N<F;N++)v(L[N],E,C,T,S)}function b(M){M.target.removeEventListener("dispose",b);for(const C in l){const T=l[C],S=M.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const zv={[fc]:dc,[pc]:gc,[mc]:_c,[As]:xc,[dc]:fc,[gc]:pc,[_c]:mc,[xc]:As};function kv(s,t){function e(){let U=!1;const lt=new Kt;let rt=null;const ot=new Kt(0,0,0,0);return{setMask:function(Q){rt!==Q&&!U&&(s.colorMask(Q,Q,Q,Q),rt=Q)},setLocked:function(Q){U=Q},setClear:function(Q,K,pt,Nt,ae){ae===!0&&(Q*=Nt,K*=Nt,pt*=Nt),lt.set(Q,K,pt,Nt),ot.equals(lt)===!1&&(s.clearColor(Q,K,pt,Nt),ot.copy(lt))},reset:function(){U=!1,rt=null,ot.set(-1,0,0,0)}}}function n(){let U=!1,lt=!1,rt=null,ot=null,Q=null;return{setReversed:function(K){if(lt!==K){const pt=t.get("EXT_clip_control");K?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),lt=K;const Nt=Q;Q=null,this.setClear(Nt)}},getReversed:function(){return lt},setTest:function(K){K?Z(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(K){rt!==K&&!U&&(s.depthMask(K),rt=K)},setFunc:function(K){if(lt&&(K=zv[K]),ot!==K){switch(K){case fc:s.depthFunc(s.NEVER);break;case dc:s.depthFunc(s.ALWAYS);break;case pc:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case mc:s.depthFunc(s.EQUAL);break;case xc:s.depthFunc(s.GEQUAL);break;case gc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=K}},setLocked:function(K){U=K},setClear:function(K){Q!==K&&(lt&&(K=1-K),s.clearDepth(K),Q=K)},reset:function(){U=!1,rt=null,ot=null,Q=null,lt=!1}}}function i(){let U=!1,lt=null,rt=null,ot=null,Q=null,K=null,pt=null,Nt=null,ae=null;return{setTest:function(te){U||(te?Z(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(te){lt!==te&&!U&&(s.stencilMask(te),lt=te)},setFunc:function(te,In,_n){(rt!==te||ot!==In||Q!==_n)&&(s.stencilFunc(te,In,_n),rt=te,ot=In,Q=_n)},setOp:function(te,In,_n){(K!==te||pt!==In||Nt!==_n)&&(s.stencilOp(te,In,_n),K=te,pt=In,Nt=_n)},setLocked:function(te){U=te},setClear:function(te){ae!==te&&(s.clearStencil(te),ae=te)},reset:function(){U=!1,lt=null,rt=null,ot=null,Q=null,K=null,pt=null,Nt=null,ae=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,y=null,_=null,v=null,b=null,M=null,E=new Mt(0,0,0),C=0,T=!1,S=null,P=null,L=null,N=null,F=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=q>=2);let tt=null,nt={};const vt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),$t=new Kt().fromArray(vt),se=new Kt().fromArray(zt);function Yt(U,lt,rt,ot){const Q=new Uint8Array(4),K=s.createTexture();s.bindTexture(U,K),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<rt;pt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(lt+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return K}const j={};j[s.TEXTURE_2D]=Yt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc(As),Wt(!1),Xt(Yl),Z(s.CULL_FACE),le(Qn);function Z(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function ft(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Ut(U,lt){return h[U]!==lt?(s.bindFramebuffer(U,lt),h[U]=lt,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=lt),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function yt(U,lt){let rt=d,ot=!1;if(U){rt=f.get(lt),rt===void 0&&(rt=[],f.set(lt,rt));const Q=U.textures;if(rt.length!==Q.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let K=0,pt=Q.length;K<pt;K++)rt[K]=s.COLOR_ATTACHMENT0+K;rt.length=Q.length,ot=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,ot=!0);ot&&s.drawBuffers(rt)}function kt(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const ye={[Fi]:s.FUNC_ADD,[ad]:s.FUNC_SUBTRACT,[cd]:s.FUNC_REVERSE_SUBTRACT};ye[ld]=s.MIN,ye[ud]=s.MAX;const Ht={[hd]:s.ZERO,[fd]:s.ONE,[dd]:s.SRC_COLOR,[uc]:s.SRC_ALPHA,[vd]:s.SRC_ALPHA_SATURATE,[gd]:s.DST_COLOR,[md]:s.DST_ALPHA,[pd]:s.ONE_MINUS_SRC_COLOR,[hc]:s.ONE_MINUS_SRC_ALPHA,[_d]:s.ONE_MINUS_DST_COLOR,[xd]:s.ONE_MINUS_DST_ALPHA,[yd]:s.CONSTANT_COLOR,[bd]:s.ONE_MINUS_CONSTANT_COLOR,[Md]:s.CONSTANT_ALPHA,[Sd]:s.ONE_MINUS_CONSTANT_ALPHA};function le(U,lt,rt,ot,Q,K,pt,Nt,ae,te){if(U===Qn){g===!0&&(ft(s.BLEND),g=!1);return}if(g===!1&&(Z(s.BLEND),g=!0),U!==od){if(U!==m||te!==T){if((p!==Fi||v!==Fi)&&(s.blendEquation(s.FUNC_ADD),p=Fi,v=Fi),te)switch(U){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFunc(s.ONE,s.ONE);break;case Zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Vt("WebGLState: Invalid blending: ",U);break}else switch(U){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zl:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",U);break}y=null,_=null,b=null,M=null,E.set(0,0,0),C=0,m=U,T=te}return}Q=Q||lt,K=K||rt,pt=pt||ot,(lt!==p||Q!==v)&&(s.blendEquationSeparate(ye[lt],ye[Q]),p=lt,v=Q),(rt!==y||ot!==_||K!==b||pt!==M)&&(s.blendFuncSeparate(Ht[rt],Ht[ot],Ht[K],Ht[pt]),y=rt,_=ot,b=K,M=pt),(Nt.equals(E)===!1||ae!==C)&&(s.blendColor(Nt.r,Nt.g,Nt.b,ae),E.copy(Nt),C=ae),m=U,T=!1}function D(U,lt){U.side===Tn?ft(s.CULL_FACE):Z(s.CULL_FACE);let rt=U.side===We;lt&&(rt=!rt),Wt(rt),U.blending===bs&&U.transparent===!1?le(Qn):le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const ot=U.stencilWrite;a.setTest(ot),ot&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){S!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),S=U)}function Xt(U){U!==id?(Z(s.CULL_FACE),U!==P&&(U===Yl?s.cullFace(s.BACK):U===sd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),P=U}function oe(U){U!==L&&(V&&s.lineWidth(U),L=U)}function xt(U,lt,rt){U?(Z(s.POLYGON_OFFSET_FILL),(N!==lt||F!==rt)&&(s.polygonOffset(lt,rt),N=lt,F=rt)):ft(s.POLYGON_OFFSET_FILL)}function ue(U){U?Z(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function Et(U){U===void 0&&(U=s.TEXTURE0+k-1),tt!==U&&(s.activeTexture(U),tt=U)}function Ft(U,lt,rt){rt===void 0&&(tt===null?rt=s.TEXTURE0+k-1:rt=tt);let ot=nt[rt];ot===void 0&&(ot={type:void 0,texture:void 0},nt[rt]=ot),(ot.type!==U||ot.texture!==lt)&&(tt!==rt&&(s.activeTexture(rt),tt=rt),s.bindTexture(U,lt||j[U]),ot.type=U,ot.texture=lt)}function I(){const U=nt[tt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function Y(){try{s.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function $(){try{s.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function bt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ct(){try{s.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function At(){try{s.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function gt(){try{s.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function J(){try{s.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function it(U){$t.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),$t.copy(U))}function Pt(U){se.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function Rt(U,lt){let rt=l.get(lt);rt===void 0&&(rt=new WeakMap,l.set(lt,rt));let ot=rt.get(U);ot===void 0&&(ot=s.getUniformBlockIndex(lt,U.name),rt.set(U,ot))}function ht(U,lt){const ot=l.get(lt).get(U);c.get(lt)!==ot&&(s.uniformBlockBinding(lt,ot,U.__bindingPointIndex),c.set(lt,ot))}function Dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},tt=null,nt={},h={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,y=null,_=null,v=null,b=null,M=null,E=new Mt(0,0,0),C=0,T=!1,S=null,P=null,L=null,N=null,F=null,$t.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ft,bindFramebuffer:Ut,drawBuffers:yt,useProgram:kt,setBlending:le,setMaterial:D,setFlipSided:Wt,setCullFace:Xt,setLineWidth:oe,setPolygonOffset:xt,setScissorTest:ue,activeTexture:Et,bindTexture:Ft,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:z,texImage2D:gt,texImage3D:J,updateUBOMapping:Rt,uniformBlockBinding:ht,texStorage2D:ct,texStorage3D:At,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:bt,scissor:it,viewport:Pt,reset:Dt}}function Vv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,A){return d?new OffscreenCanvas(I,A):Mr("canvas")}function g(I,A,z){let Y=1;const $=Ft(I);if(($.width>z||$.height>z)&&(Y=z/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const X=Math.floor(Y*$.width),bt=Math.floor(Y*$.height);h===void 0&&(h=x(X,bt));const ct=A?x(X,bt):h;return ct.width=X,ct.height=bt,ct.getContext("2d").drawImage(I,0,0,X,bt),_t("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+bt+")."),ct}else return"data"in I&&_t("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(I,A,z,Y,$=!1){if(I!==null){if(s[I]!==void 0)return s[I];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let X=A;if(A===s.RED&&(z===s.FLOAT&&(X=s.R32F),z===s.HALF_FLOAT&&(X=s.R16F),z===s.UNSIGNED_BYTE&&(X=s.R8)),A===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.R8UI),z===s.UNSIGNED_SHORT&&(X=s.R16UI),z===s.UNSIGNED_INT&&(X=s.R32UI),z===s.BYTE&&(X=s.R8I),z===s.SHORT&&(X=s.R16I),z===s.INT&&(X=s.R32I)),A===s.RG&&(z===s.FLOAT&&(X=s.RG32F),z===s.HALF_FLOAT&&(X=s.RG16F),z===s.UNSIGNED_BYTE&&(X=s.RG8)),A===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RG8UI),z===s.UNSIGNED_SHORT&&(X=s.RG16UI),z===s.UNSIGNED_INT&&(X=s.RG32UI),z===s.BYTE&&(X=s.RG8I),z===s.SHORT&&(X=s.RG16I),z===s.INT&&(X=s.RG32I)),A===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RGB8UI),z===s.UNSIGNED_SHORT&&(X=s.RGB16UI),z===s.UNSIGNED_INT&&(X=s.RGB32UI),z===s.BYTE&&(X=s.RGB8I),z===s.SHORT&&(X=s.RGB16I),z===s.INT&&(X=s.RGB32I)),A===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),z===s.UNSIGNED_INT&&(X=s.RGBA32UI),z===s.BYTE&&(X=s.RGBA8I),z===s.SHORT&&(X=s.RGBA16I),z===s.INT&&(X=s.RGBA32I)),A===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),A===s.RGBA){const bt=$?Vo:jt.getTransfer(Y);z===s.FLOAT&&(X=s.RGBA32F),z===s.HALF_FLOAT&&(X=s.RGBA16F),z===s.UNSIGNED_BYTE&&(X=bt===ne?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(I,A){let z;return I?A===null||A===_i||A===gr?z=s.DEPTH24_STENCIL8:A===rn?z=s.DEPTH32F_STENCIL8:A===xr&&(z=s.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_i||A===gr?z=s.DEPTH_COMPONENT24:A===rn?z=s.DEPTH_COMPONENT32F:A===xr&&(z=s.DEPTH_COMPONENT16),z}function b(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xe&&I.minFilter!==Ge?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function M(I){const A=I.target;A.removeEventListener("dispose",M),C(A),A.isVideoTexture&&u.delete(A)}function E(I){const A=I.target;A.removeEventListener("dispose",E),S(A)}function C(I){const A=n.get(I);if(A.__webglInit===void 0)return;const z=I.source,Y=f.get(z);if(Y){const $=Y[A.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(I),Object.keys(Y).length===0&&f.delete(z)}n.remove(I)}function T(I){const A=n.get(I);s.deleteTexture(A.__webglTexture);const z=I.source,Y=f.get(z);delete Y[A.__cacheKey],o.memory.textures--}function S(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let $=0;$<A.__webglFramebuffer[Y].length;$++)s.deleteFramebuffer(A.__webglFramebuffer[Y][$]);else s.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)s.deleteFramebuffer(A.__webglFramebuffer[Y]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const z=I.textures;for(let Y=0,$=z.length;Y<$;Y++){const X=n.get(z[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(I)}let P=0;function L(){P=0}function N(){const I=P;return I>=i.maxTextures&&_t("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function F(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function k(I,A){const z=n.get(I);if(I.isVideoTexture&&ue(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const Y=I.image;if(Y===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,I,A);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+A)}function V(I,A){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){j(z,I,A);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+A)}function q(I,A){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){j(z,I,A);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+A)}function W(I,A){const z=n.get(I);if(I.version>0&&z.__version!==I.version){Z(z,I,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+A)}const tt={[Vi]:s.REPEAT,[Fn]:s.CLAMP_TO_EDGE,[ko]:s.MIRRORED_REPEAT},nt={[Xe]:s.NEAREST,[Jh]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Lo]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},vt={[zd]:s.NEVER,[Xd]:s.ALWAYS,[kd]:s.LESS,[af]:s.LEQUAL,[Vd]:s.EQUAL,[Wd]:s.GEQUAL,[Hd]:s.GREATER,[Gd]:s.NOTEQUAL};function zt(I,A){if(A.type===rn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ge||A.magFilter===Lo||A.magFilter===sr||A.magFilter===$n||A.minFilter===Ge||A.minFilter===Lo||A.minFilter===sr||A.minFilter===$n)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,tt[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,tt[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,tt[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,nt[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,nt[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,vt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Xe||A.minFilter!==sr&&A.minFilter!==$n||A.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function $t(I,A){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",M));const Y=A.source;let $=f.get(Y);$===void 0&&($={},f.set(Y,$));const X=F(A);if(X!==I.__cacheKey){$[X]===void 0&&($[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[X].usedTimes++;const bt=$[I.__cacheKey];bt!==void 0&&($[I.__cacheKey].usedTimes--,bt.usedTimes===0&&T(A)),I.__cacheKey=X,I.__webglTexture=$[X].texture}return z}function se(I,A,z){return Math.floor(Math.floor(I/z)/A)}function Yt(I,A,z,Y){const X=I.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,z,Y,A.data);else{X.sort((J,it)=>J.start-it.start);let bt=0;for(let J=1;J<X.length;J++){const it=X[bt],Pt=X[J],Rt=it.start+it.count,ht=se(Pt.start,A.width,4),Dt=se(it.start,A.width,4);Pt.start<=Rt+1&&ht===Dt&&se(Pt.start+Pt.count-1,A.width,4)===ht?it.count=Math.max(it.count,Pt.start+Pt.count-it.start):(++bt,X[bt]=Pt)}X.length=bt+1;const ct=s.getParameter(s.UNPACK_ROW_LENGTH),At=s.getParameter(s.UNPACK_SKIP_PIXELS),gt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let J=0,it=X.length;J<it;J++){const Pt=X[J],Rt=Math.floor(Pt.start/4),ht=Math.ceil(Pt.count/4),Dt=Rt%A.width,U=Math.floor(Rt/A.width),lt=ht,rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,Dt,U,lt,rt,z,Y,A.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ct),s.pixelStorei(s.UNPACK_SKIP_PIXELS,At),s.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function j(I,A,z){let Y=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=s.TEXTURE_3D);const $=$t(I,A),X=A.source;e.bindTexture(Y,I.__webglTexture,s.TEXTURE0+z);const bt=n.get(X);if(X.version!==bt.__version||$===!0){e.activeTexture(s.TEXTURE0+z);const ct=jt.getPrimaries(jt.workingColorSpace),At=A.colorSpace===di?null:jt.getPrimaries(A.colorSpace),gt=A.colorSpace===di||ct===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let J=g(A.image,!1,i.maxTextureSize);J=Et(A,J);const it=r.convert(A.format,A.colorSpace),Pt=r.convert(A.type);let Rt=_(A.internalFormat,it,Pt,A.colorSpace,A.isVideoTexture);zt(Y,A);let ht;const Dt=A.mipmaps,U=A.isVideoTexture!==!0,lt=bt.__version===void 0||$===!0,rt=X.dataReady,ot=b(A,J);if(A.isDepthTexture)Rt=v(A.format===vr,A.type),lt&&(U?e.texStorage2D(s.TEXTURE_2D,1,Rt,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,Rt,J.width,J.height,0,it,Pt,null));else if(A.isDataTexture)if(Dt.length>0){U&&lt&&e.texStorage2D(s.TEXTURE_2D,ot,Rt,Dt[0].width,Dt[0].height);for(let Q=0,K=Dt.length;Q<K;Q++)ht=Dt[Q],U?rt&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ht.width,ht.height,it,Pt,ht.data):e.texImage2D(s.TEXTURE_2D,Q,Rt,ht.width,ht.height,0,it,Pt,ht.data);A.generateMipmaps=!1}else U?(lt&&e.texStorage2D(s.TEXTURE_2D,ot,Rt,J.width,J.height),rt&&Yt(A,J,it,Pt)):e.texImage2D(s.TEXTURE_2D,0,Rt,J.width,J.height,0,it,Pt,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){U&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Rt,Dt[0].width,Dt[0].height,J.depth);for(let Q=0,K=Dt.length;Q<K;Q++)if(ht=Dt[Q],A.format!==Je)if(it!==null)if(U){if(rt)if(A.layerUpdates.size>0){const pt=$u(ht.width,ht.height,A.format,A.type);for(const Nt of A.layerUpdates){const ae=ht.data.subarray(Nt*pt/ht.data.BYTES_PER_ELEMENT,(Nt+1)*pt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Nt,ht.width,ht.height,1,it,ae)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,J.depth,it,ht.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Rt,ht.width,ht.height,J.depth,0,ht.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,J.depth,it,Pt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Rt,ht.width,ht.height,J.depth,0,it,Pt,ht.data)}else{U&&lt&&e.texStorage2D(s.TEXTURE_2D,ot,Rt,Dt[0].width,Dt[0].height);for(let Q=0,K=Dt.length;Q<K;Q++)ht=Dt[Q],A.format!==Je?it!==null?U?rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ht.width,ht.height,it,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Rt,ht.width,ht.height,0,ht.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?rt&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ht.width,ht.height,it,Pt,ht.data):e.texImage2D(s.TEXTURE_2D,Q,Rt,ht.width,ht.height,0,it,Pt,ht.data)}else if(A.isDataArrayTexture)if(U){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Rt,J.width,J.height,J.depth),rt)if(A.layerUpdates.size>0){const Q=$u(J.width,J.height,A.format,A.type);for(const K of A.layerUpdates){const pt=J.data.subarray(K*Q/J.data.BYTES_PER_ELEMENT,(K+1)*Q/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,it,Pt,pt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,it,Pt,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,J.width,J.height,J.depth,0,it,Pt,J.data);else if(A.isData3DTexture)U?(lt&&e.texStorage3D(s.TEXTURE_3D,ot,Rt,J.width,J.height,J.depth),rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,it,Pt,J.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,J.width,J.height,J.depth,0,it,Pt,J.data);else if(A.isFramebufferTexture){if(lt)if(U)e.texStorage2D(s.TEXTURE_2D,ot,Rt,J.width,J.height);else{let Q=J.width,K=J.height;for(let pt=0;pt<ot;pt++)e.texImage2D(s.TEXTURE_2D,pt,Rt,Q,K,0,it,Pt,null),Q>>=1,K>>=1}}else if(Dt.length>0){if(U&&lt){const Q=Ft(Dt[0]);e.texStorage2D(s.TEXTURE_2D,ot,Rt,Q.width,Q.height)}for(let Q=0,K=Dt.length;Q<K;Q++)ht=Dt[Q],U?rt&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,it,Pt,ht):e.texImage2D(s.TEXTURE_2D,Q,Rt,it,Pt,ht);A.generateMipmaps=!1}else if(U){if(lt){const Q=Ft(J);e.texStorage2D(s.TEXTURE_2D,ot,Rt,Q.width,Q.height)}rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it,Pt,J)}else e.texImage2D(s.TEXTURE_2D,0,Rt,it,Pt,J);m(A)&&p(Y),bt.__version=X.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Z(I,A,z){if(A.image.length!==6)return;const Y=$t(I,A),$=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);const X=n.get($);if($.version!==X.__version||Y===!0){e.activeTexture(s.TEXTURE0+z);const bt=jt.getPrimaries(jt.workingColorSpace),ct=A.colorSpace===di?null:jt.getPrimaries(A.colorSpace),At=A.colorSpace===di||bt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const gt=A.isCompressedTexture||A.image[0].isCompressedTexture,J=A.image[0]&&A.image[0].isDataTexture,it=[];for(let K=0;K<6;K++)!gt&&!J?it[K]=g(A.image[K],!0,i.maxCubemapSize):it[K]=J?A.image[K].image:A.image[K],it[K]=Et(A,it[K]);const Pt=it[0],Rt=r.convert(A.format,A.colorSpace),ht=r.convert(A.type),Dt=_(A.internalFormat,Rt,ht,A.colorSpace),U=A.isVideoTexture!==!0,lt=X.__version===void 0||Y===!0,rt=$.dataReady;let ot=b(A,Pt);zt(s.TEXTURE_CUBE_MAP,A);let Q;if(gt){U&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Dt,Pt.width,Pt.height);for(let K=0;K<6;K++){Q=it[K].mipmaps;for(let pt=0;pt<Q.length;pt++){const Nt=Q[pt];A.format!==Je?Rt!==null?U?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,Nt.width,Nt.height,Rt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Dt,Nt.width,Nt.height,0,Nt.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,Nt.width,Nt.height,Rt,ht,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Dt,Nt.width,Nt.height,0,Rt,ht,Nt.data)}}}else{if(Q=A.mipmaps,U&&lt){Q.length>0&&ot++;const K=Ft(it[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Dt,K.width,K.height)}for(let K=0;K<6;K++)if(J){U?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,it[K].width,it[K].height,Rt,ht,it[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Dt,it[K].width,it[K].height,0,Rt,ht,it[K].data);for(let pt=0;pt<Q.length;pt++){const ae=Q[pt].image[K].image;U?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,ae.width,ae.height,Rt,ht,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Dt,ae.width,ae.height,0,Rt,ht,ae.data)}}else{U?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,ht,it[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Dt,Rt,ht,it[K]);for(let pt=0;pt<Q.length;pt++){const Nt=Q[pt];U?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Rt,ht,Nt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Dt,Rt,ht,Nt.image[K])}}}m(A)&&p(s.TEXTURE_CUBE_MAP),X.__version=$.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ft(I,A,z,Y,$,X){const bt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),At=_(z.internalFormat,bt,ct,z.colorSpace),gt=n.get(A),J=n.get(z);if(J.__renderTarget=A,!gt.__hasExternalTextures){const it=Math.max(1,A.width>>X),Pt=Math.max(1,A.height>>X);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,X,At,it,Pt,A.depth,0,bt,ct,null):e.texImage2D($,X,At,it,Pt,0,bt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),xt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,$,J.__webglTexture,0,oe(A)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,$,J.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(I,A,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){const Y=A.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,X=v(A.stencilBuffer,$),bt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=oe(A);xt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,X,A.width,A.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,X,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,X,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,I)}else{const Y=A.textures;for(let $=0;$<Y.length;$++){const X=Y[$],bt=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),At=_(X.internalFormat,bt,ct,X.colorSpace),gt=oe(A);z&&xt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,At,A.width,A.height):xt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,At,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,At,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const $=Y.__webglTexture,X=oe(A);if(A.depthTexture.format===_r)xt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(A.depthTexture.format===vr)xt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function kt(I){const A=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){const $=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),A.__depthDisposeCallback=$}A.__boundDepthTexture=Y}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=I.texture.mipmaps;Y&&Y.length>0?yt(A.__webglFramebuffer[0],I):yt(A.__webglFramebuffer,I)}else if(z){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ut(A.__webglDepthbuffer[Y],I,!1);else{const $=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,X)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ut(A.__webglDepthbuffer,I,!1);else{const $=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(I,A,z){const Y=n.get(I);A!==void 0&&ft(Y.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&kt(I)}function Ht(I){const A=I.texture,z=n.get(I),Y=n.get(A);I.addEventListener("dispose",E);const $=I.textures,X=I.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=A.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let At=0;At<A.mipmaps.length;At++)z.__webglFramebuffer[ct][At]=s.createFramebuffer()}else z.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<A.mipmaps.length;ct++)z.__webglFramebuffer[ct]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ct=0,At=$.length;ct<At;ct++){const gt=n.get($[ct]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&xt(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<$.length;ct++){const At=$[ct];z.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const gt=r.convert(At.format,At.colorSpace),J=r.convert(At.type),it=_(At.internalFormat,gt,J,At.colorSpace,I.isXRRenderTarget===!0),Pt=oe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,it,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),zt(s.TEXTURE_CUBE_MAP,A);for(let ct=0;ct<6;ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let At=0;At<A.mipmaps.length;At++)ft(z.__webglFramebuffer[ct][At],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At);else ft(z.__webglFramebuffer[ct],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(A)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,At=$.length;ct<At;ct++){const gt=$[ct],J=n.get(gt);let it=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(it=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,J.__webglTexture),zt(it,gt),ft(z.__webglFramebuffer,I,gt,s.COLOR_ATTACHMENT0+ct,it,0),m(gt)&&p(it)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ct=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Y.__webglTexture),zt(ct,A),A.mipmaps&&A.mipmaps.length>0)for(let At=0;At<A.mipmaps.length;At++)ft(z.__webglFramebuffer[At],I,A,s.COLOR_ATTACHMENT0,ct,At);else ft(z.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,ct,0);m(A)&&p(ct),e.unbindTexture()}I.depthBuffer&&kt(I)}function le(I){const A=I.textures;for(let z=0,Y=A.length;z<Y;z++){const $=A[z];if(m($)){const X=y(I),bt=n.get($).__webglTexture;e.bindTexture(X,bt),p(X),e.unbindTexture()}}}const D=[],Wt=[];function Xt(I){if(I.samples>0){if(xt(I)===!1){const A=I.textures,z=I.width,Y=I.height;let $=s.COLOR_BUFFER_BIT;const X=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(I),ct=A.length>1;if(ct)for(let gt=0;gt<A.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const At=I.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let gt=0;gt<A.length;gt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);const J=n.get(A[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,$,s.NEAREST),c===!0&&(D.length=0,Wt.length=0,D.push(s.COLOR_ATTACHMENT0+gt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(D.push(X),Wt.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<A.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);const J=n.get(A[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,J,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function oe(I){return Math.min(i.maxSamples,I.samples)}function xt(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ue(I){const A=o.render.frame;u.get(I)!==A&&(u.set(I,A),I.update())}function Et(I,A){const z=I.colorSpace,Y=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==ze&&z!==di&&(jt.getTransfer(z)===ne?(Y!==Je||$!==On)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",z)),A}function Ft(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=ye,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=xt}function Hv(s,t){function e(n,i=di){let r;const o=jt.getTransfer(i);if(n===On)return s.UNSIGNED_BYTE;if(n===_l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return s.BYTE;if(n===tf)return s.SHORT;if(n===xr)return s.UNSIGNED_SHORT;if(n===gl)return s.INT;if(n===_i)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===Gi)return s.HALF_FLOAT;if(n===sf)return s.ALPHA;if(n===rf)return s.RGB;if(n===Je)return s.RGBA;if(n===_r)return s.DEPTH_COMPONENT;if(n===vr)return s.DEPTH_STENCIL;if(n===yl)return s.RED;if(n===Yo)return s.RED_INTEGER;if(n===bl)return s.RG;if(n===Ml)return s.RG_INTEGER;if(n===Sl)return s.RGBA_INTEGER;if(n===Do||n===Uo||n===No||n===Fo)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Mc||n===Sc||n===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===Ac||n===wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===Ac)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ic)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Gc||n===Wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hc)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===qc||n===jc||n===Yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new yf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bn({vertexShader:Gv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qv extends Wi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,x=null;const g=typeof XRWebGLBinding<"u",m=new Xv,p={},y=e.getContextAttributes();let _=null,v=null;const b=[],M=[],E=new st;let C=null;const T=new Be;T.viewport=new Kt;const S=new Be;S.viewport=new Kt;const P=[T,S],L=new Zm;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=b[j];return Z===void 0&&(Z=new Ra,b[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=b[j];return Z===void 0&&(Z=new Ra,b[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=b[j];return Z===void 0&&(Z=new Ra,b[j]=Z),Z.getHandSpace()};function k(j){const Z=M.indexOf(j.inputSource);if(Z===-1)return;const ft=b[Z];ft!==void 0&&(ft.update(j.inputSource,j.frame,l||o),ft.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let j=0;j<b.length;j++){const Z=M[j];Z!==null&&(M[j]=null,b[j].disconnect(Z))}N=null,F=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(_),d=null,f=null,h=null,i=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Ut=null,yt=null;y.depth&&(yt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=y.stencil?vr:_r,Ut=y.stencil?gr:_i);const kt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(kt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new vi(f.textureWidth,f.textureHeight,{format:Je,type:On,depthTexture:new vf(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ft={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new vi(d.framebufferWidth,d.framebufferHeight,{format:Je,type:On,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(j){for(let Z=0;Z<j.removed.length;Z++){const ft=j.removed[Z],Ut=M.indexOf(ft);Ut>=0&&(M[Ut]=null,b[Ut].disconnect(ft))}for(let Z=0;Z<j.added.length;Z++){const ft=j.added[Z];let Ut=M.indexOf(ft);if(Ut===-1){for(let kt=0;kt<b.length;kt++)if(kt>=M.length){M.push(ft),Ut=kt;break}else if(M[kt]===null){M[kt]=ft,Ut=kt;break}if(Ut===-1)break}const yt=b[Ut];yt&&yt.connect(ft)}}const W=new R,tt=new R;function nt(j,Z,ft){W.setFromMatrixPosition(Z.matrixWorld),tt.setFromMatrixPosition(ft.matrixWorld);const Ut=W.distanceTo(tt),yt=Z.projectionMatrix.elements,kt=ft.projectionMatrix.elements,ye=yt[14]/(yt[10]-1),Ht=yt[14]/(yt[10]+1),le=(yt[9]+1)/yt[5],D=(yt[9]-1)/yt[5],Wt=(yt[8]-1)/yt[0],Xt=(kt[8]+1)/kt[0],oe=ye*Wt,xt=ye*Xt,ue=Ut/(-Wt+Xt),Et=ue*-Wt;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Et),j.translateZ(ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),yt[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ft=ye+ue,I=Ht+ue,A=oe-Et,z=xt+(Ut-Et),Y=le*Ht/I*Ft,$=D*Ht/I*Ft;j.projectionMatrix.makePerspective(A,z,Y,$,Ft,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function vt(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Z=j.near,ft=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),L.near=S.near=T.near=Z,L.far=S.far=T.far=ft,(N!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,F=L.far),L.layers.mask=j.layers.mask|6,T.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const Ut=j.parent,yt=L.cameras;vt(L,Ut);for(let kt=0;kt<yt.length;kt++)vt(yt[kt],Ut);yt.length===2?nt(L,T,S):L.projectionMatrix.copy(T.projectionMatrix),zt(j,L,Ut)};function zt(j,Z,ft){ft===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ft.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Cs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(j){return p[j]};let $t=null;function se(j,Z){if(u=Z.getViewerPose(l||o),x=Z,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ut=!1;ft.length!==L.cameras.length&&(L.cameras.length=0,Ut=!0);for(let Ht=0;Ht<ft.length;Ht++){const le=ft[Ht];let D=null;if(d!==null)D=d.getViewport(le);else{const Xt=h.getViewSubImage(f,le);D=Xt.viewport,Ht===0&&(t.setRenderTargetTextures(v,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(v))}let Wt=P[Ht];Wt===void 0&&(Wt=new Be,Wt.layers.enable(Ht),Wt.viewport=new Kt,P[Ht]=Wt),Wt.matrix.fromArray(le.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(le.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(D.x,D.y,D.width,D.height),Ht===0&&(L.matrix.copy(Wt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ut===!0&&L.cameras.push(Wt)}const yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const Ht=h.getDepthInformation(ft[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,i.renderState)}if(yt&&yt.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let Ht=0;Ht<ft.length;Ht++){const le=ft[Ht].camera;if(le){let D=p[le];D||(D=new yf,p[le]=D);const Wt=h.getCameraImage(le);D.sourceTexture=Wt}}}}for(let ft=0;ft<b.length;ft++){const Ut=M[ft],yt=b[ft];Ut!==null&&yt!==void 0&&yt.update(Ut,Z,l||o)}$t&&$t(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),x=null}const Yt=new Nf;Yt.setAnimationLoop(se),this.setAnimationLoop=function(j){$t=j},this.dispose=function(){}}}const Ii=new Rn,jv=new St;function Yv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,df(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(Ii)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=i[y.id];v===void 0&&(x(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const b=_.program;n.updateUBOMapping(y,b);const M=t.render.frame;r[y.id]!==M&&(f(y),r[y.id]=M)}function u(y){const _=h();y.__bindingPointIndex=_;const v=s.createBuffer(),b=y.__size,M=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=i[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let M=0,E=v.length;M<E;M++){const C=Array.isArray(v[M])?v[M]:[v[M]];for(let T=0,S=C.length;T<S;T++){const P=C[T];if(d(P,M,T,b)===!0){const L=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let k=0;k<N.length;k++){const V=N[k],q=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+F,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,_,v,b){const M=y.value,E=_+"_"+v;if(b[E]===void 0)return typeof M=="number"||typeof M=="boolean"?b[E]=M:b[E]=M.clone(),!0;{const C=b[E];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return b[E]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function x(y){const _=y.uniforms;let v=0;const b=16;for(let E=0,C=_.length;E<C;E++){const T=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,P=T.length;S<P;S++){const L=T[S],N=Array.isArray(L.value)?L.value:[L.value];for(let F=0,k=N.length;F<k;F++){const V=N[F],q=g(V),W=v%b,tt=W%q.boundary,nt=W+tt;v+=tt,nt!==0&&b-nt<q.storage&&(v+=b-nt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=q.storage}}}const M=v%b;return M>0&&(v+=b-M),y.__size=v,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):_t("WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}const Zv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let jn=null;function $v(){return jn===null&&(jn=new Ss(Zv,32,32,bl,Gi),jn.minFilter=Ge,jn.magFilter=Ge,jn.wrapS=Fn,jn.wrapT=Fn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class Jv{constructor(t={}){const{canvas:e=qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const x=new Set([Sl,Ml,Yo]),g=new Set([On,_i,xr,gr,_l,vl]),m=new Uint32Array(4),p=new Int32Array(4);let y=null,_=null;const v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1;this._outputColorSpace=be;let C=0,T=0,S=null,P=-1,L=null;const N=new Kt,F=new Kt;let k=null;const V=new Mt(0);let q=0,W=e.width,tt=e.height,nt=1,vt=null,zt=null;const $t=new Kt(0,0,W,tt),se=new Kt(0,0,W,tt);let Yt=!1;const j=new Ir;let Z=!1,ft=!1;const Ut=new St,yt=new R,kt=new Kt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function le(){return S===null?nt:1}let D=n;function Wt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cr}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){const O="webgl2";if(D=Wt(O,w),D===null)throw Wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Xt,oe,xt,ue,Et,Ft,I,A,z,Y,$,X,bt,ct,At,gt,J,it,Pt,Rt,ht,Dt,U,lt;function rt(){Xt=new o_(D),Xt.init(),Dt=new Hv(D,Xt),oe=new $g(D,Xt,t,Dt),xt=new kv(D,Xt),oe.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),ue=new l_(D),Et=new wv,Ft=new Vv(D,Xt,xt,Et,oe,Dt,ue),I=new Qg(M),A=new r_(M),z=new d0(D),U=new Kg(D,z),Y=new a_(D,z,ue,U),$=new h_(D,Y,z,ue),Pt=new u_(D,oe,Ft),gt=new Jg(Et),X=new Av(M,I,A,Xt,oe,U,gt),bt=new Yv(M,Et),ct=new Cv,At=new Nv(Xt),it=new Yg(M,I,A,xt,$,d,c),J=new Bv(M,$,oe),lt=new Kv(D,ue,oe,xt),Rt=new Zg(D,Xt,ue),ht=new c_(D,Xt,ue),ue.programs=X.programs,M.capabilities=oe,M.extensions=Xt,M.properties=Et,M.renderLists=ct,M.shadowMap=J,M.state=xt,M.info=ue}rt();const ot=new qv(M,D);this.xr=ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(w){w!==void 0&&(nt=w,this.setSize(W,tt,!1))},this.getSize=function(w){return w.set(W,tt)},this.setSize=function(w,O,H=!0){if(ot.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,tt=O,e.width=Math.floor(w*nt),e.height=Math.floor(O*nt),H===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(W*nt,tt*nt).floor()},this.setDrawingBufferSize=function(w,O,H){W=w,tt=O,nt=H,e.width=Math.floor(w*H),e.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy($t)},this.setViewport=function(w,O,H,G){w.isVector4?$t.set(w.x,w.y,w.z,w.w):$t.set(w,O,H,G),xt.viewport(N.copy($t).multiplyScalar(nt).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,O,H,G){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,O,H,G),xt.scissor(F.copy(se).multiplyScalar(nt).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){xt.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,H=!0){let G=0;if(w){let B=!1;if(S!==null){const et=S.texture.format;B=x.has(et)}if(B){const et=S.texture.type,ut=g.has(et),mt=it.getClearColor(),dt=it.getClearAlpha(),Ct=mt.r,It=mt.g,Tt=mt.b;ut?(m[0]=Ct,m[1]=It,m[2]=Tt,m[3]=dt,D.clearBufferuiv(D.COLOR,0,m)):(p[0]=Ct,p[1]=It,p[2]=Tt,p[3]=dt,D.clearBufferiv(D.COLOR,0,p))}else G|=D.COLOR_BUFFER_BIT}O&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),it.dispose(),ct.dispose(),At.dispose(),Et.dispose(),I.dispose(),A.dispose(),$.dispose(),U.dispose(),lt.dispose(),X.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Vl),ot.removeEventListener("sessionend",Hl),Mi.stop()};function Q(w){w.preventDefault(),Go("WebGLRenderer: Context Lost."),E=!0}function K(){Go("WebGLRenderer: Context Restored."),E=!1;const w=ue.autoReset,O=J.enabled,H=J.autoUpdate,G=J.needsUpdate,B=J.type;rt(),ue.autoReset=w,J.enabled=O,J.autoUpdate=H,J.needsUpdate=G,J.type=B}function pt(w){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const O=w.target;O.removeEventListener("dispose",Nt),ae(O)}function ae(w){te(w),Et.remove(w)}function te(w){const O=Et.get(w).programs;O!==void 0&&(O.forEach(function(H){X.releaseProgram(H)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,G,B,et){O===null&&(O=ye);const ut=B.isMesh&&B.matrixWorld.determinant()<0,mt=$f(w,O,H,G,B);xt.setMaterial(G,ut);let dt=H.index,Ct=1;if(G.wireframe===!0){if(dt=Y.getWireframeAttribute(H),dt===void 0)return;Ct=2}const It=H.drawRange,Tt=H.attributes.position;let qt=It.start*Ct,ee=(It.start+It.count)*Ct;et!==null&&(qt=Math.max(qt,et.start*Ct),ee=Math.min(ee,(et.start+et.count)*Ct)),dt!==null?(qt=Math.max(qt,0),ee=Math.min(ee,dt.count)):Tt!=null&&(qt=Math.max(qt,0),ee=Math.min(ee,Tt.count));const xe=ee-qt;if(xe<0||xe===1/0)return;U.setup(B,G,mt,H,dt);let ge,re=Rt;if(dt!==null&&(ge=z.get(dt),re=ht,re.setIndex(ge)),B.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*le()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(B.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),xt.setLineWidth(wt*le()),B.isLineSegments?re.setMode(D.LINES):B.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else B.isPoints?re.setMode(D.POINTS):B.isSprite&&re.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const wt=B._multiDrawStarts,he=B._multiDrawCounts,Zt=B._multiDrawCount,tn=dt?z.get(dt).bytesPerElement:1,qi=Et.get(G).currentProgram.getUniforms();for(let en=0;en<Zt;en++)qi.setValue(D,"_gl_DrawID",en),re.render(wt[en]/tn,he[en])}else if(B.isInstancedMesh)re.renderInstances(qt,xe,B.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,he=Math.min(H.instanceCount,wt);re.renderInstances(qt,xe,he)}else re.render(qt,xe)};function In(w,O,H){w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,Ur(w,O,H),w.side=wn,w.needsUpdate=!0,Ur(w,O,H),w.side=Tn):Ur(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),_=At.get(H),_.init(O),b.push(_),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const G=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const et=B.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const mt=et[ut];In(mt,H,B),G.add(mt)}else In(et,H,B),G.add(et)}),_=b.pop(),G},this.compileAsync=function(w,O,H=null){const G=this.compile(w,O,H);return new Promise(B=>{function et(){if(G.forEach(function(ut){Et.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){B(w);return}setTimeout(et,10)}Xt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let _n=null;function Zf(w){_n&&_n(w)}function Vl(){Mi.stop()}function Hl(){Mi.start()}const Mi=new Nf;Mi.setAnimationLoop(Zf),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(w){_n=w,ot.setAnimationLoop(w),w===null?Mi.stop():Mi.start()},ot.addEventListener("sessionstart",Vl),ot.addEventListener("sessionend",Hl),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,O,S),_=At.get(w,b.length),_.init(O),b.push(_),Ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(Ut,An,O.reversedDepth),ft=this.localClippingEnabled,Z=gt.init(this.clippingPlanes,ft),y=ct.get(w,v.length),y.init(),v.push(y),ot.enabled===!0&&ot.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&ra(et,O,-1/0,M.sortObjects)}ra(w,O,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(vt,zt),Ht=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ht&&it.addToRenderList(y,w),this.info.render.frame++,Z===!0&&gt.beginShadows();const H=_.state.shadowsArray;J.render(H,w,O),Z===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,B=y.transmissive;if(_.setupLights(),O.isArrayCamera){const et=O.cameras;if(B.length>0)for(let ut=0,mt=et.length;ut<mt;ut++){const dt=et[ut];Wl(G,B,w,dt)}Ht&&it.render(w);for(let ut=0,mt=et.length;ut<mt;ut++){const dt=et[ut];Gl(y,w,dt,dt.viewport)}}else B.length>0&&Wl(G,B,w,O),Ht&&it.render(w),Gl(y,w,O);S!==null&&T===0&&(Ft.updateMultisampleRenderTarget(S),Ft.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(M,w,O),U.resetDefaultState(),P=-1,L=null,b.pop(),b.length>0?(_=b[b.length-1],Z===!0&&gt.setGlobalState(M.clippingPlanes,_.state.camera)):_=null,v.pop(),v.length>0?y=v[v.length-1]:y=null};function ra(w,O,H,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){G&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ut);const ut=$.update(w),mt=w.material;mt.visible&&y.push(w,ut,mt,H,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const ut=$.update(w),mt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),kt.copy(ut.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(Ut)),Array.isArray(mt)){const dt=ut.groups;for(let Ct=0,It=dt.length;Ct<It;Ct++){const Tt=dt[Ct],qt=mt[Tt.materialIndex];qt&&qt.visible&&y.push(w,ut,qt,H,kt.z,Tt)}}else mt.visible&&y.push(w,ut,mt,H,kt.z,null)}}const et=w.children;for(let ut=0,mt=et.length;ut<mt;ut++)ra(et[ut],O,H,G)}function Gl(w,O,H,G){const{opaque:B,transmissive:et,transparent:ut}=w;_.setupLightsView(H),Z===!0&&gt.setGlobalState(M.clippingPlanes,H),G&&xt.viewport(N.copy(G)),B.length>0&&Dr(B,O,H),et.length>0&&Dr(et,O,H),ut.length>0&&Dr(ut,O,H),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Wl(w,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[G.id]===void 0&&(_.state.transmissionRenderTarget[G.id]=new vi(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Gi:On,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=_.state.transmissionRenderTarget[G.id],ut=G.viewport||N;et.setSize(ut.z*M.transmissionResolutionScale,ut.w*M.transmissionResolutionScale);const mt=M.getRenderTarget(),dt=M.getActiveCubeFace(),Ct=M.getActiveMipmapLevel();M.setRenderTarget(et),M.getClearColor(V),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),Ht&&it.render(H);const It=M.toneMapping;M.toneMapping=gi;const Tt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),_.setupLightsView(G),Z===!0&&gt.setGlobalState(M.clippingPlanes,G),Dr(w,H,G),Ft.updateMultisampleRenderTarget(et),Ft.updateRenderTargetMipmap(et),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ee=0,xe=O.length;ee<xe;ee++){const ge=O[ee],{object:re,geometry:wt,material:he,group:Zt}=ge;if(he.side===Tn&&re.layers.test(G.layers)){const tn=he.side;he.side=We,he.needsUpdate=!0,Xl(re,H,G,wt,he,Zt),he.side=tn,he.needsUpdate=!0,qt=!0}}qt===!0&&(Ft.updateMultisampleRenderTarget(et),Ft.updateRenderTargetMipmap(et))}M.setRenderTarget(mt,dt,Ct),M.setClearColor(V,q),Tt!==void 0&&(G.viewport=Tt),M.toneMapping=It}function Dr(w,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,et=w.length;B<et;B++){const ut=w[B],{object:mt,geometry:dt,group:Ct}=ut;let It=ut.material;It.allowOverride===!0&&G!==null&&(It=G),mt.layers.test(H.layers)&&Xl(mt,O,H,dt,It,Ct)}}function Xl(w,O,H,G,B,et){w.onBeforeRender(M,O,H,G,B,et),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(M,O,H,G,w,et),B.transparent===!0&&B.side===Tn&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,M.renderBufferDirect(H,O,G,B,w,et),B.side=wn,B.needsUpdate=!0,M.renderBufferDirect(H,O,G,B,w,et),B.side=Tn):M.renderBufferDirect(H,O,G,B,w,et),w.onAfterRender(M,O,H,G,B,et)}function Ur(w,O,H){O.isScene!==!0&&(O=ye);const G=Et.get(w),B=_.state.lights,et=_.state.shadowsArray,ut=B.state.version,mt=X.getParameters(w,B.state,et,O,H),dt=X.getProgramCacheKey(mt);let Ct=G.programs;G.environment=w.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(w.isMeshStandardMaterial?A:I).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",Nt),Ct=new Map,G.programs=Ct);let It=Ct.get(dt);if(It!==void 0){if(G.currentProgram===It&&G.lightsStateVersion===ut)return jl(w,mt),It}else mt.uniforms=X.getUniforms(w),w.onBeforeCompile(mt,M),It=X.acquireProgram(mt,dt),Ct.set(dt,It),G.uniforms=mt.uniforms;const Tt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=gt.uniform),jl(w,mt),G.needsLights=Qf(w),G.lightsStateVersion=ut,G.needsLights&&(Tt.ambientLightColor.value=B.state.ambient,Tt.lightProbe.value=B.state.probe,Tt.directionalLights.value=B.state.directional,Tt.directionalLightShadows.value=B.state.directionalShadow,Tt.spotLights.value=B.state.spot,Tt.spotLightShadows.value=B.state.spotShadow,Tt.rectAreaLights.value=B.state.rectArea,Tt.ltc_1.value=B.state.rectAreaLTC1,Tt.ltc_2.value=B.state.rectAreaLTC2,Tt.pointLights.value=B.state.point,Tt.pointLightShadows.value=B.state.pointShadow,Tt.hemisphereLights.value=B.state.hemi,Tt.directionalShadowMap.value=B.state.directionalShadowMap,Tt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Tt.spotShadowMap.value=B.state.spotShadowMap,Tt.spotLightMatrix.value=B.state.spotLightMatrix,Tt.spotLightMap.value=B.state.spotLightMap,Tt.pointShadowMap.value=B.state.pointShadowMap,Tt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=It,G.uniformsList=null,It}function ql(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Oo.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function jl(w,O){const H=Et.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function $f(w,O,H,G,B){O.isScene!==!0&&(O=ye),Ft.resetTextureUnits();const et=O.fog,ut=G.isMeshStandardMaterial?O.environment:null,mt=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ze,dt=(G.isMeshStandardMaterial?A:I).get(G.envMap||ut),Ct=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!H.morphAttributes.position,qt=!!H.morphAttributes.normal,ee=!!H.morphAttributes.color;let xe=gi;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(xe=M.toneMapping);const ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=ge!==void 0?ge.length:0,wt=Et.get(G),he=_.state.lights;if(Z===!0&&(ft===!0||w!==L)){const ke=w===L&&G.id===P;gt.setState(G,w,ke)}let Zt=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==he.state.version||wt.outputColorSpace!==mt||B.isBatchedMesh&&wt.batching===!1||!B.isBatchedMesh&&wt.batching===!0||B.isBatchedMesh&&wt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&wt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&wt.instancing===!1||!B.isInstancedMesh&&wt.instancing===!0||B.isSkinnedMesh&&wt.skinning===!1||!B.isSkinnedMesh&&wt.skinning===!0||B.isInstancedMesh&&wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&wt.instancingMorph===!1&&B.morphTexture!==null||wt.envMap!==dt||G.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==gt.numPlanes||wt.numIntersection!==gt.numIntersection)||wt.vertexAlphas!==Ct||wt.vertexTangents!==It||wt.morphTargets!==Tt||wt.morphNormals!==qt||wt.morphColors!==ee||wt.toneMapping!==xe||wt.morphTargetsCount!==re)&&(Zt=!0):(Zt=!0,wt.__version=G.version);let tn=wt.currentProgram;Zt===!0&&(tn=Ur(G,O,B));let qi=!1,en=!1,zs=!1;const fe=tn.getUniforms(),je=wt.uniforms;if(xt.useProgram(tn.program)&&(qi=!0,en=!0,zs=!0),G.id!==P&&(P=G.id,en=!0),qi||L!==w){xt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",w.projectionMatrix),fe.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ye=fe.map.cameraPosition;Ye!==void 0&&Ye.setValue(D,yt.setFromMatrixPosition(w.matrixWorld)),oe.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,en=!0,zs=!0)}if(B.isSkinnedMesh){fe.setOptional(D,B,"bindMatrix"),fe.setOptional(D,B,"bindMatrixInverse");const ke=B.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),fe.setValue(D,"boneTexture",ke.boneTexture,Ft))}B.isBatchedMesh&&(fe.setOptional(D,B,"batchingTexture"),fe.setValue(D,"batchingTexture",B._matricesTexture,Ft),fe.setOptional(D,B,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",B._indirectTexture,Ft),fe.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",B._colorsTexture,Ft));const an=H.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Pt.update(B,H,tn),(en||wt.receiveShadow!==B.receiveShadow)&&(wt.receiveShadow=B.receiveShadow,fe.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(je.envMap.value=dt,je.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(je.envMapIntensity.value=O.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=$v()),en&&(fe.setValue(D,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&Jf(je,zs),et&&G.fog===!0&&bt.refreshFogUniforms(je,et),bt.refreshMaterialUniforms(je,G,nt,tt,_.state.transmissionRenderTarget[w.id]),Oo.upload(D,ql(wt),je,Ft)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Oo.upload(D,ql(wt),je,Ft),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(D,"center",B.center),fe.setValue(D,"modelViewMatrix",B.modelViewMatrix),fe.setValue(D,"normalMatrix",B.normalMatrix),fe.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ke=G.uniformsGroups;for(let Ye=0,oa=ke.length;Ye<oa;Ye++){const Si=ke[Ye];lt.update(Si,tn),lt.bind(Si,tn)}}return tn}function Jf(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Qf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,O,H){const G=Et.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Et.get(w.texture).__webglTexture=O,Et.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const H=Et.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const td=D.createFramebuffer();this.setRenderTarget=function(w,O=0,H=0){S=w,C=O,T=H;let G=!0,B=null,et=!1,ut=!1;if(w){const dt=Et.get(w);if(dt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(dt.__webglFramebuffer===void 0)Ft.setupRenderTarget(w);else if(dt.__hasExternalTextures)Ft.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(dt.__boundDepthTexture!==Tt){if(Tt!==null&&Et.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(w)}}const Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ut=!0);const It=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[O])?B=It[O][H]:B=It[O],et=!0):w.samples>0&&Ft.useMultisampledRTT(w)===!1?B=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[H]:B=It,N.copy(w.viewport),F.copy(w.scissor),k=w.scissorTest}else N.copy($t).multiplyScalar(nt).floor(),F.copy(se).multiplyScalar(nt).floor(),k=Yt;if(H!==0&&(B=td),xt.bindFramebuffer(D.FRAMEBUFFER,B)&&G&&xt.drawBuffers(w,B),xt.viewport(N),xt.scissor(F),xt.setScissorTest(k),et){const dt=Et.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,H)}else if(ut){const dt=O;for(let Ct=0;Ct<w.textures.length;Ct++){const It=Et.get(w.textures[Ct]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ct,It.__webglTexture,H,dt)}}else if(w!==null&&H!==0){const dt=Et.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,H)}P=-1},this.readRenderTargetPixels=function(w,O,H,G,B,et,ut,mt=0){if(!(w&&w.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt){xt.bindFramebuffer(D.FRAMEBUFFER,dt);try{const Ct=w.textures[mt],It=Ct.format,Tt=Ct.type;if(!oe.textureFormatReadable(It)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Tt)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&H>=0&&H<=w.height-B&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(O,H,G,B,Dt.convert(It),Dt.convert(Tt),et))}finally{const Ct=S!==null?Et.get(S).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,G,B,et,ut,mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt)if(O>=0&&O<=w.width-G&&H>=0&&H<=w.height-B){xt.bindFramebuffer(D.FRAMEBUFFER,dt);const Ct=w.textures[mt],It=Ct.format,Tt=Ct.type;if(!oe.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,qt),D.bufferData(D.PIXEL_PACK_BUFFER,et.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(O,H,G,B,Dt.convert(It),Dt.convert(Tt),0);const ee=S!==null?Et.get(S).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,ee);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jd(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,qt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,et),D.deleteBuffer(qt),D.deleteSync(xe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,H=0){const G=Math.pow(2,-H),B=Math.floor(w.image.width*G),et=Math.floor(w.image.height*G),ut=O!==null?O.x:0,mt=O!==null?O.y:0;Ft.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ut,mt,B,et),xt.unbindTexture()};const ed=D.createFramebuffer(),nd=D.createFramebuffer();this.copyTextureToTexture=function(w,O,H=null,G=null,B=0,et=null){et===null&&(B!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=B,B=0):et=0);let ut,mt,dt,Ct,It,Tt,qt,ee,xe;const ge=w.isCompressedTexture?w.mipmaps[et]:w.image;if(H!==null)ut=H.max.x-H.min.x,mt=H.max.y-H.min.y,dt=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,It=H.min.y,Tt=H.isBox3?H.min.z:0;else{const an=Math.pow(2,-B);ut=Math.floor(ge.width*an),mt=Math.floor(ge.height*an),w.isDataArrayTexture?dt=ge.depth:w.isData3DTexture?dt=Math.floor(ge.depth*an):dt=1,Ct=0,It=0,Tt=0}G!==null?(qt=G.x,ee=G.y,xe=G.z):(qt=0,ee=0,xe=0);const re=Dt.convert(O.format),wt=Dt.convert(O.type);let he;O.isData3DTexture?(Ft.setTexture3D(O,0),he=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ft.setTexture2DArray(O,0),he=D.TEXTURE_2D_ARRAY):(Ft.setTexture2D(O,0),he=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Zt=D.getParameter(D.UNPACK_ROW_LENGTH),tn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qi=D.getParameter(D.UNPACK_SKIP_PIXELS),en=D.getParameter(D.UNPACK_SKIP_ROWS),zs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,It),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt);const fe=w.isDataArrayTexture||w.isData3DTexture,je=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const an=Et.get(w),ke=Et.get(O),Ye=Et.get(an.__renderTarget),oa=Et.get(ke.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Ye.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let Si=0;Si<dt;Si++)fe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,B,Tt+Si),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(O).__webglTexture,et,xe+Si)),D.blitFramebuffer(Ct,It,ut,mt,qt,ee,ut,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||Et.has(w)){const an=Et.get(w),ke=Et.get(O);xt.bindFramebuffer(D.READ_FRAMEBUFFER,ed),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,nd);for(let Ye=0;Ye<dt;Ye++)fe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,B,Tt+Ye):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,B),je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,et,xe+Ye):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,et),B!==0?D.blitFramebuffer(Ct,It,ut,mt,qt,ee,ut,mt,D.COLOR_BUFFER_BIT,D.NEAREST):je?D.copyTexSubImage3D(he,et,qt,ee,xe+Ye,Ct,It,ut,mt):D.copyTexSubImage2D(he,et,qt,ee,Ct,It,ut,mt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else je?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(he,et,qt,ee,xe,ut,mt,dt,re,wt,ge.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(he,et,qt,ee,xe,ut,mt,dt,re,ge.data):D.texSubImage3D(he,et,qt,ee,xe,ut,mt,dt,re,wt,ge):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,et,qt,ee,ut,mt,re,wt,ge.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,et,qt,ee,ge.width,ge.height,re,ge.data):D.texSubImage2D(D.TEXTURE_2D,et,qt,ee,ut,mt,re,wt,ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qi),D.pixelStorei(D.UNPACK_SKIP_ROWS,en),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zs),et===0&&O.generateMipmaps&&D.generateMipmap(he),xt.unbindTexture()},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&Ft.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ft.setTextureCube(w,0):w.isData3DTexture?Ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ft.setTexture2DArray(w,0):Ft.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){C=0,T=0,S=null,xt.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const bh={type:"change"},Bl={type:"start"},kf={type:"end"},po=new Xi,Mh=new Sn,Qv=Math.cos(70*Tr.DEG2RAD),Ee=new R,Ze=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ya=1e-6;class ty extends h0{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new gn,this._lastTargetPosition=new R,this._quat=new gn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ku,this._sphericalDelta=new Ku,this._scale=1,this._panOffset=new R,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new R,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ny.bind(this),this._onPointerDown=ey.bind(this),this._onPointerUp=iy.bind(this),this._onContextMenu=uy.bind(this),this._onMouseWheel=oy.bind(this),this._onKeyDown=ay.bind(this),this._onTouchStart=cy.bind(this),this._onTouchMove=ly.bind(this),this._onMouseDown=sy.bind(this),this._onMouseMove=ry.bind(this),this._interceptControlDown=hy.bind(this),this._interceptControlUp=fy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bh),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ee.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<Qv?this.object.lookAt(this.target):(Mh.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(Mh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ya||this._lastTargetPosition.distanceToSquared(this.target)>Ya?(this.dispatchEvent(bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ee.copy(i).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new st,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ey(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function ny(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function iy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kf),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sy(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ie.DOLLY;break;case ys.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}break;case ys.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Bl)}function ry(s){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function oy(s){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(s.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(kf))}function ay(s){this.enabled!==!1&&this._handleKeyDown(s)}function cy(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ie.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ie.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Bl)}function ly(s){switch(this._trackPointer(s),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ie.NONE}}function uy(s){this.enabled!==!1&&s.preventDefault()}function hy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bo={exports:{}},py=Bo.exports,Sh;function my(){return Sh||(Sh=1,(function(s,t){(function(e,n){s.exports=n()})(py,function(){var e=function(){function n(d){return o.appendChild(d.dom),d}function i(d){for(var x=0;x<o.children.length;x++)o.children[x].style.display=x===d?"block":"none";r=d}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),i(++r%o.children.length)},!1);var a=(performance||Date).now(),c=a,l=0,u=n(new e.Panel("FPS","#0ff","#002")),h=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){l++;var d=(performance||Date).now();if(h.update(d-a,200),d>c+1e3&&(u.update(1e3*l/(d-c),100),c=d,l=0,f)){var x=performance.memory;f.update(x.usedJSHeapSize/1048576,x.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:i}};return e.Panel=function(n,i,r){var o=1/0,a=0,c=Math.round,l=c(window.devicePixelRatio||1),u=80*l,h=48*l,f=3*l,d=2*l,x=3*l,g=15*l,m=74*l,p=30*l,y=document.createElement("canvas");y.width=u,y.height=h,y.style.cssText="width:80px;height:48px";var _=y.getContext("2d");return _.font="bold "+9*l+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=r,_.fillRect(0,0,u,h),_.fillStyle=i,_.fillText(n,f,d),_.fillRect(x,g,m,p),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(x,g,m,p),{dom:y,update:function(v,b){o=Math.min(o,v),a=Math.max(a,v),_.fillStyle=r,_.globalAlpha=1,_.fillRect(0,0,u,g),_.fillStyle=i,_.fillText(c(v)+" "+n+" ("+c(o)+"-"+c(a)+")",f,d),_.drawImage(y,x+l,g,m-l,p,x,g,m-l,p),_.fillRect(x+m-l,g,l,p),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(x+m-l,g,l,c((1-v/b)*p))}}},e})})(Bo)),Bo.exports}var xy=my();const gy=dy(xy);function Th(s,t){if(t===Nd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Kc||t===of){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Kc)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class _y extends ii{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Sy(e)}),this.register(function(e){return new Ty(e)}),this.register(function(e){return new Dy(e)}),this.register(function(e){return new Uy(e)}),this.register(function(e){return new Ny(e)}),this.register(function(e){return new Ay(e)}),this.register(function(e){return new wy(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new Cy(e)}),this.register(function(e){return new My(e)}),this.register(function(e){return new Py(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new Ly(e)}),this.register(function(e){return new Iy(e)}),this.register(function(e){return new yy(e)}),this.register(function(e){return new Fy(e)}),this.register(function(e){return new Oy(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=dr.extractUrlBase(t);o=dr.resolveURL(l,this.path)}else o=dr.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Ns(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Vf){try{o[Gt.KHR_BINARY_GLTF]=new By(t)}catch(h){i&&i(h);return}r=JSON.parse(o[Gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new $y(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Gt.KHR_MATERIALS_UNLIT:o[h]=new by;break;case Gt.KHR_DRACO_MESH_COMPRESSION:o[h]=new zy(r,this.dracoLoader);break;case Gt.KHR_TEXTURE_TRANSFORM:o[h]=new ky;break;case Gt.KHR_MESH_QUANTIZATION:o[h]=new Vy;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function vy(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yy{constructor(t){this.parser=t,this.name=Gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const u=new Mt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],ze);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Uf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qm(u),l.distance=h;break;case"spot":l=new Wm(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Un(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class by{constructor(){this.name=Gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bi}extendParams(t,e,n){const i=[];t.color=new Mt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],ze),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,be))}return Promise.all(i)}}class My{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Sy{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new st(a,a)}return Promise.all(r)}}class Ty{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ey{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Ay{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ze)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,be)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class wy{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ry{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(a[0],a[1],a[2],ze),Promise.all(r)}}class Cy{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Py{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(a[0],a[1],a[2],ze),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,be)),Promise.all(r)}}class Iy{constructor(t){this.parser=t,this.name=Gt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ly{constructor(t){this.parser=t,this.name=Gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Dy{constructor(t){this.parser=t,this.name=Gt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Uy{constructor(t){this.parser=t,this.name=Gt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}}class Ny{constructor(t){this.parser=t,this.name=Gt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}}class Fy{constructor(t){this.name=Gt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class Oy{constructor(t){this.name=Gt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==hn.TRIANGLES&&l.mode!==hn.TRIANGLE_STRIP&&l.mode!==hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const x of h){const g=new St,m=new R,p=new gn,y=new R(1,1,1),_=new Bp(x.geometry,x.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,g.compose(m,p,y));for(const v in c)if(v==="_COLOR_0"){const b=c[v];_.instanceColor=new $c(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&x.geometry.setAttribute(v,c[v]);me.prototype.copy.call(_,x),this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Vf="glTF",Zs=12,Eh={JSON:1313821514,BIN:5130562};class By{constructor(t){this.name=Gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Vf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Zs,r=new DataView(t,Zs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Eh.JSON){const l=new Uint8Array(t,Zs+o,a);this.content=n.decode(l)}else if(c===Eh.BIN){const l=Zs+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Gt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=rl[u]||u.toLowerCase();a[h]=o[u]}for(const u in t.attributes){const h=rl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[t.attributes[u]],d=Es[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const x in d.attributes){const g=d.attributes[x],m=c[x];m!==void 0&&(g.normalized=m)}h(d)},a,l,ze,f)})})}}class ky{constructor(){this.name=Gt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Vy{constructor(){this.name=Gt.KHR_MESH_QUANTIZATION}}class Hf extends Lr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-e,h=(n-e)/u,f=h*h,d=f*h,x=t*l,g=x-l,m=-2*d+3*f,p=d-f,y=1-m,_=p-f+h;for(let v=0;v!==a;v++){const b=o[g+v+a],M=o[g+v+c]*u,E=o[x+v+a],C=o[x+v]*u;r[v]=y*b+_*M+m*E+p*C}return r}}const Hy=new gn;class Gy extends Hf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Hy.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ah={9728:Xe,9729:Ge,9984:Jh,9985:Lo,9986:sr,9987:$n},wh={33071:Fn,33648:ko,10497:Vi},Ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wy={CUBICSPLINE:void 0,LINEAR:br,STEP:yr},Za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Dl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wn})),s.DefaultMaterial}function Li(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Un(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function qy(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,u=t.length;l<u;l++){const h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];if(n){const f=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function jy(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yy(s){let t;const e=s.extensions&&s.extensions[Gt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+$a(e.attributes):t=s.indices+":"+$a(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+$a(s.targets[n]);return t}function $a(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function ol(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ky(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Zy=new St;class $y{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Df(this.options.manager):this.textureLoader=new Km(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Li(r,a,i),Un(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(dr.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ka[i.type],a=Es[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new ve(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ka[i.type],l=Es[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(y);_||(g=new l(a,p*d,i.count*d/u),_=new gf(g,d/u),e.cache.add(y,_)),m=new Zo(_,c,f%d/u,x)}else a===null?g=new l(i.count*c):g=new l(a,f,i.count*c),m=new ve(g,c,x);if(i.sparse!==void 0){const p=Ka.SCALAR,y=Es[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new y(o[1],_,i.sparse.count*p),M=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new ve(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=b.length;E<C;E++){const T=b[E];if(m.setX(T,M[E*c]),c>=2&&m.setY(T,M[E*c+1]),c>=3&&m.setZ(T,M[E*c+2]),c>=4&&m.setW(T,M[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ah[f.magFilter]||Ge,u.minFilter=Ah[f.minFilter]||$n,u.wrapS=wh[f.wrapS]||Vi,u.wrapT=wh[f.wrapT]||Vi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xe&&u.minFilter!==Ge,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let x=f;e.isImageBitmapLoader===!0&&(x=function(g){const m=new Ie(g);m.needsUpdate=!0,f(m)}),e.load(dr.resolveURL(h,r.path),x,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Un(h,o),h.userData.mimeType=o.mimeType||Ky(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Gt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new zi,Qe.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ts,Qe.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Dl}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[Gt.KHR_MATERIALS_UNLIT]){const h=i[Gt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,e))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Mt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ze),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",h.baseColorTexture,be)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Tn);const u=r.alphaMode||Za.OPAQUE;if(u===Za.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Za.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bi&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new st(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Bi&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bi){const h=r.emissiveFactor;a.emissive=new Mt().setRGB(h[0],h[1],h[2],ze)}return r.emissiveTexture!==void 0&&o!==Bi&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,be)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Un(h,r),e.associations.set(h,{materials:t}),r.extensions&&Li(i,h,r),h})}createUniqueName(t){const e=Qt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Rh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],u=Yy(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[Gt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Rh(new we,l,e),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Xy(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,x=u.length;d<x;d++){const g=u[d],m=o[d];let p;const y=l[d];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Np(g,y):new Me(g,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?p.geometry=Th(p.geometry,of):m.mode===hn.TRIANGLE_FAN&&(p.geometry=Th(p.geometry,Kc));else if(m.mode===hn.LINES)p=new Jc(g,y);else if(m.mode===hn.LINE_STRIP)p=new $o(g,y);else if(m.mode===hn.LINE_LOOP)p=new Zp(g,y);else if(m.mode===hn.POINTS)p=new ur(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jy(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Un(p,r),m.extensions&&Li(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let d=0,x=h.length;d<x;d++)e.associations.set(h[d],{meshes:t,primitives:d});if(h.length===1)return r.extensions&&Li(i,h[0],r),h[0];const f=new pi;r.extensions&&Li(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,x=h.length;d<x;d++)f.add(h[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Be(Tr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Nl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Un(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new St;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new wl(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],x=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,y=i.parameters!==void 0?i.parameters[x.output]:x.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(x),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],x=h[2],g=h[3],m=h[4],p=[];for(let _=0,v=f.length;_<v;_++){const b=f[_],M=d[_],E=x[_],C=g[_],T=m[_];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const S=n._createAnimationTracks(b,M,E,C,T);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const y=new Om(r,void 0,p);return Un(y,i),y})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Zy)});for(let d=0,x=h.length;d<x;d++)u.add(h[d]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new _f:l.length>1?u=new pi:l.length===1?u=l[0]:u=new me,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Un(u,r),r.extensions&&Li(n,u,r),r.matrix!==void 0){const h=new St;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new pi;n.name&&(r.name=i.createUniqueName(n.name)),Un(r,n),n.extensions&&Li(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Qe||f instanceof Ie)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];ui[r.path]===ui.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ui[r.path]){case ui.weights:l=Ls;break;case ui.rotation:l=Ds;break;case ui.translation:case ui.scale:l=Us;break;default:switch(n.itemSize){case 1:l=Ls;break;case 2:case 3:default:l=Us;break}break}const u=i.interpolation!==void 0?Wy[i.interpolation]:br,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const x=new l(c[f]+"."+ui[r.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=ol(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ds?Gy:Hf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jy(s,t,e){const n=t.attributes,i=new pe;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const u=ol(Es[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new R,c=new R;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=e.json.accessors[h.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){const g=ol(Es[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ue;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Rh(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=rl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return jt.workingColorSpace!==ze&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jt.workingColorSpace}" not supported.`),Un(s,t),Jy(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?qy(s,t.targets,e):s})}const Qy=/^[og]\s*(.+)?/,tb=/^mtllib /,eb=/^usemtl /,nb=/^usemap /,Ch=/\s+/,Ph=new R,Ja=new R,Ih=new R,Lh=new R,ln=new R,mo=new Mt;function ib(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,r=this.object.geometry.normals;Ph.fromArray(i,t),Ja.fromArray(i,e),Ih.fromArray(i,n),ln.subVectors(Ih,Ja),Lh.subVectors(Ph,Ja),ln.cross(Lh),ln.normalize(),r.push(ln.x,ln.y,ln.z),r.push(ln.x,ln.y,ln.z),r.push(ln.x,ln.y,ln.z)},addColor:function(t,e,n){const i=this.colors,r=this.object.geometry.colors;i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[t+0],i[t+1]),r.push(i[e+0],i[e+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,r,o,a,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(e,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const x=this.normals.length;h=this.parseNormalIndex(a,x),f=this.parseNormalIndex(c,x),d=this.parseNormalIndex(l,x),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(i!==void 0&&i!==""){const x=this.uvs.length;h=this.parseUVIndex(i,x),f=this.parseUVIndex(r,x),d=this.parseUVIndex(o,x),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],i))}};return s.startObject("",!1),s}class sb extends ii{constructor(t){super(t),this.materials=null}load(t,e,n,i){const r=this,o=new Ns(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new ib;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(Ch);switch(h[0]){case"v":e.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(mo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),be),e.colors.push(mo.r,mo.g,mo.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":e.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=l.slice(1).trim().split(Ch),d=[];for(let g=0,m=f.length;g<m;g++){const p=f[g];if(p.length>0){const y=p.split("/");d.push(y)}}const x=d[0];for(let g=1,m=d.length-1;g<m;g++){const p=d[g],y=d[g+1];e.addFace(x[0],p[0],y[0],x[1],p[1],y[1],x[2],p[2],y[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let f=[];const d=[];if(l.indexOf("/")===-1)f=h;else for(let x=0,g=h.length;x<g;x++){const m=h[x].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}e.addLineGeometry(f,d)}else if(u==="p"){const f=l.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((i=Qy.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);e.startObject(h)}else if(eb.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(tb.test(l))e.materialLibraries.push(l.substring(7).trim());else if(nb.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const f=i[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const h=e.object.currentMaterial();h&&(h.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const r=new pi;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){const l=e.objects[a],u=l.geometry,h=l.materials,f=u.type==="Line",d=u.type==="Points";let x=!1;if(u.vertices.length===0)continue;const g=new we;g.setAttribute("position",new Ae(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new Ae(u.normals,3)),u.colors.length>0&&(x=!0,g.setAttribute("color",new Ae(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new Ae(u.uvs,2));const m=[];for(let y=0,_=h.length;y<_;y++){const v=h[y],b=v.name+"_"+v.smooth+"_"+x;let M=e.materials[b];if(this.materials!==null){if(M=this.materials.create(v.name),f&&M&&!(M instanceof Ts)){const E=new Ts;Qe.prototype.copy.call(E,M),E.color.copy(M.color),M=E}else if(d&&M&&!(M instanceof zi)){const E=new zi({size:10,sizeAttenuation:!1});Qe.prototype.copy.call(E,M),E.color.copy(M.color),E.map=M.map,M=E}}M===void 0&&(f?M=new Ts:d?M=new zi({size:1,sizeAttenuation:!1}):M=new Rm,M.name=v.name,M.flatShading=!v.smooth,M.vertexColors=x,e.materials[b]=M),m.push(M)}let p;if(m.length>1){for(let y=0,_=h.length;y<_;y++){const v=h[y];g.addGroup(v.groupStart,v.groupCount,y)}f?p=new Jc(g,m):d?p=new ur(g,m):p=new Me(g,m)}else f?p=new Jc(g,m[0]):d?p=new ur(g,m[0]):p=new Me(g,m[0]);p.name=l.name,r.add(p)}else if(e.vertices.length>0){const a=new zi({size:1,sizeAttenuation:!1}),c=new we;c.setAttribute("position",new Ae(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new Ae(e.colors,3)),a.vertexColors=!0);const l=new ur(c,a);r.add(l)}return r}}const Qa=new WeakMap;class rb extends ii{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,i){const r=new Ns(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,o=>{this.parse(o,e,i)},n,i)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,be,n).catch(n)}decodeDracoFile(t,e,n,i,r=ze,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(t,a).then(e).catch(o)}decodeGeometry(t,e){const n=JSON.stringify(e);if(Qa.has(t)){const c=Qa.get(t);if(c.key===n)return c.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=t.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:e,buffer:t},[t])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Qa.set(t,{key:n,promise:a}),a}_createGeometry(t){const e=new we;t.index&&e.setIndex(new ve(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const{name:i,array:r,itemSize:o,stride:a,vertexColorSpace:c}=t.attributes[n];let l;if(o===a)l=new ve(r,o);else{const u=new gf(r,a);l=new Zo(u,o,0)}i==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),e.setAttribute(i,l)}return e}_assignVertexColorSpace(t,e){if(e!==be)return;const n=new Mt;for(let i=0,r=t.count;i<r;i++)n.fromBufferAttribute(t,i),jt.colorSpaceToWorking(n,be),t.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new Ns(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(t,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const i=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const r=ob.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function ob(){let s,t;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,t=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;t.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=e(h,f,new Int8Array(c),l),x=d.attributes.map(g=>g.array.buffer);d.index&&x.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},x)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function e(o,a,c,l){const u=l.attributeIDs,h=l.attributeTypes;let f,d;const x=a.GetEncodedGeometryType(c);if(x===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,f);else if(x===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let y,_;if(l.useUniqueIDs)_=u[m],y=a.GetAttributeByUniqueId(f,_);else{if(_=a.GetAttributeId(f,o[u[m]]),_===-1)continue;y=a.GetAttribute(f,_)}const v=i(o,a,f,m,p,y);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),g.attributes.push(v)}return x===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,c){const u=c.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(c,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,c,l,u,h){const f=c.num_points(),d=h.num_components(),x=r(o,u),g=d*u.BYTES_PER_ELEMENT,m=Math.ceil(g/4)*4,p=m/u.BYTES_PER_ELEMENT,y=f*g,_=f*m,v=o._malloc(y);a.GetAttributeDataArrayForAllPoints(c,h,x,y,v);const b=new u(o.HEAPF32.buffer,v,y/u.BYTES_PER_ELEMENT);let M;if(g===m)M=b.slice();else{M=new u(_/u.BYTES_PER_ELEMENT);let E=0;for(let C=0,T=b.length;C<T;C++){for(let S=0;S<d;S++)M[E+S]=b[C*d+S];E+=p}}return o._free(v),{name:l,count:f,itemSize:d,array:M,stride:p}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class ab extends ii{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Ns(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const c=r.parse(JSON.parse(a));e&&e(c)},n,i)}parse(t){return new cb(t)}}class cb{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100,n="ltr"){const i=[],r=lb(t,e,this.data,n);for(let o=0,a=r.length;o<a;o++)i.push(...r[o].toShapes());return i}}function lb(s,t,e,n){const i=Array.from(s),r=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,a=[];let c=0,l=0;(n=="rtl"||n=="tb")&&i.reverse();for(let u=0;u<i.length;u++){const h=i[u];if(h===`
`)c=0,l-=o;else{const f=ub(h,r,c,l,e);n=="tb"?(c=0,l+=e.ascender*r):c+=f.offsetX,a.push(f.path)}}return a}function ub(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new u0;let a,c,l,u,h,f,d,x;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*t+e,c=g[m++]*t+n,o.moveTo(a,c);break;case"l":a=g[m++]*t+e,c=g[m++]*t+n,o.lineTo(a,c);break;case"q":l=g[m++]*t+e,u=g[m++]*t+n,h=g[m++]*t+e,f=g[m++]*t+n,o.quadraticCurveTo(h,f,l,u);break;case"b":l=g[m++]*t+e,u=g[m++]*t+n,h=g[m++]*t+e,f=g[m++]*t+n,d=g[m++]*t+e,x=g[m++]*t+n,o.bezierCurveTo(h,f,d,x,l,u);break}}return{offsetX:r.ha*t,path:o}}class hb{constructor(){this.manager=new Lf,this.assets={},this.textureLoader=new Df(this.manager),this.gltfLoader=new _y(this.manager),this.objLoader=new sb(this.manager),this.fontLoader=new ab(this.manager),this.dracoLoader=new rb(this.manager),this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),this.gltfLoader.setDRACOLoader(this.dracoLoader)}async load(t=[]){const e=t.map(async n=>{const{name:i,model:r,texture:o,img:a,font:c,obj:l,gltf:u}=n;this.assets[i]||(this.assets[i]={});try{if(r||u){const h=await this.loadGLTF(r||u,i);this.assets[i].model=h}if(o){const h=await this.loadTexture(o,i);this.assets[i].texture=h}if(a){const h=await this.loadImage(a,i);this.assets[i].img=h}if(c){const h=await this.loadFont(c,i);this.assets[i].font=h}if(l){const h=await this.loadObj(l,i);this.assets[i].obj=h}}catch(h){console.error(`❌ Error loading asset: ${i}`,h)}});await Promise.all(e),console.log("✅ Assets loaded:",this.assets)}loadGLTF(t,e){return new Promise((n,i)=>{this.gltfLoader.load(t,r=>n(r),void 0,r=>{console.error(`❌ Failed to load GLTF (${e}):`,r),i(r)})})}loadTexture(t,e){return new Promise((n,i)=>{this.textureLoader.load(t,r=>n(r),void 0,r=>{console.error(`❌ Failed to load texture (${e}):`,r),i(r)})})}loadImage(t,e){return new Promise((n,i)=>{const r=new Image;r.onload=()=>n(r),r.onerror=o=>{console.error(`❌ Failed to load image (${e}):`,o),i(o)},r.src=t})}loadFont(t,e){return new Promise((n,i)=>{this.fontLoader.load(t,r=>n(r),void 0,r=>{console.error(`❌ Failed to load font (${e}):`,r),i(r)})})}loadObj(t,e){return new Promise((n,i)=>{this.objLoader.load(t,r=>n(r),void 0,r=>{console.error(`❌ Failed to load OBJ (${e}):`,r),i(r)})})}get(t){return this.assets[t]}clear(){this.assets={}}}const ki=new hb;class Rr extends Me{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Be;const n=this,i=e.color!==void 0?new Mt(e.color):new Mt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||Rr.ReflectorShader,l=e.multisample!==void 0?e.multisample:4,u=new Sn,h=new R,f=new R,d=new R,x=new St,g=new R(0,0,-1),m=new Kt,p=new R,y=new R,_=new Kt,v=new St,b=this.camera,M=new vi(r,o,{samples:l,type:Gi}),E=new Bn({name:c.name!==void 0?c.name:"unspecified",uniforms:pf.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=v,this.material=E,this.onBeforeRender=function(C,T,S){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(S.matrixWorld),x.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(x),p.subVectors(f,d),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(f),x.extractRotation(S.matrixWorld),g.set(0,0,-1),g.applyMatrix4(x),g.add(d),y.subVectors(f,g),y.reflect(h).negate(),y.add(f),b.position.copy(p),b.up.set(0,1,0),b.up.applyMatrix4(x),b.up.reflect(h),b.lookAt(y),b.far=S.far,b.updateMatrixWorld(),b.projectionMatrix.copy(S.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(b.projectionMatrix),v.multiply(b.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(b.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const L=b.projectionMatrix;_.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],_.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],_.z=-1,_.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(_)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-a,L.elements[14]=m.w,n.visible=!1;const N=C.getRenderTarget(),F=C.xr.enabled,k=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(M),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(T,b),C.xr.enabled=F,C.shadowMap.autoUpdate=k,C.setRenderTarget(N);const V=S.viewport;V!==void 0&&C.state.viewport(V),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()}}}Rr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const fb=`uniform vec3 color;\r
uniform sampler2D tDiffuse;\r
varying vec4 vUv;\r
uniform sampler2D tDudv;\r
uniform float time;\r
#include <logdepthbuf_pars_fragment>\r
\r
void main(){\r
\r
    #include <logdepthbuf_fragment>\r
\r
    float waveSpeed = 0.03;\r
    float waveStrength = 0.5;\r
\r
    vec2 distortedUv = texture2D( tDudv, vec2( vUv.x + time * waveSpeed , vUv.y )).rg * waveStrength;\r
    distortedUv = vUv.yx + vec2(distortedUv.x,distortedUv.y+time*waveSpeed);\r
    vec2 distortion = ( texture2D( tDudv,distortedUv).rg *2.0 - 1.0) * waveStrength;\r
\r
    vec4 uv = vec4(vUv);\r
    uv.xy += distortion;\r
\r
    vec4 base = texture2DProj( tDiffuse, uv);\r
    gl_FragColor = vec4 (mix (base.rgb,color,0.3),1.0);\r
    #include <tonemapping_fragment>\r
    #include <encodings_fragment>\r
}`,db=`uniform mat4 textureMatrix;\r
varying vec4 vUv;\r
\r
#include <common>\r
#include <logdepthbuf_pars_vertex>\r
\r
void main(){\r
    vUv = textureMatrix * vec4( position, 1.0);\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\r
    #include <logdepthbuf_vertex>\r
}`;function Dh(s){return s.replace(/#include <(.*?)>/g,(t,e)=>Ot[e]||"")}function pb(s){const t=new Cl(4e3,80,64),e=Rr.ReflectorShader;e.vertexShader=Dh(db),e.fragmentShader=Dh(fb);const n=ki.assets.waterdudv.texture;n.wrapS=n.wrapT=Vi,e.uniforms.tDudv={value:n},e.uniforms.time={value:0};const i=new Rr(t,{shader:e,clipBias:.003,textureWidth:window.innerWidth,textureHeight:window.innerHeight,color:0});return i.position.y=0,i.rotateX(-Math.PI/2),s.add(i),i}const Gf=0,mb=1,xb=2,Uh=2,tc=1.25,Nh=1,pr=32,na=65535,gb=Math.pow(2,-24),ec=Symbol("SKIP_GENERATION");function _b(s){return s.index?s.index.count:s.attributes.position.count}function bi(s){return _b(s)/3}function vb(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function yb(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=vb(e,n);s.setIndex(new ve(i,1));for(let r=0;r<e;r++)i[r]=r}}function Wf(s,t){const e=bi(s),n=t||s.drawRange,i=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,i),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Xf(s,t){if(!s.groups||!s.groups.length)return Wf(s,t);const e=[],n=new Set,i=t||s.drawRange,r=i.start/3,o=(i.start+i.count)/3;for(const c of s.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(o,u))}const a=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){const l=a[c],u=a[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function bb(s,t){const e=bi(s),n=Xf(s,t).sort((o,a)=>o.offset-a.offset),i=n[n.length-1];i.count=Math.min(e-i.offset,i.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function nc(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,x=-1/0,g=-1/0,m=-1/0;for(let p=t*6,y=(t+e)*6;p<y;p+=6){const _=s[p+0],v=s[p+1],b=_-v,M=_+v;b<r&&(r=b),M>c&&(c=M),_<h&&(h=_),_>x&&(x=_);const E=s[p+2],C=s[p+3],T=E-C,S=E+C;T<o&&(o=T),S>l&&(l=S),E<f&&(f=E),E>g&&(g=E);const P=s[p+4],L=s[p+5],N=P-L,F=P+L;N<a&&(a=N),F>u&&(u=F),P<d&&(d=P),P>m&&(m=P)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=f,i[2]=d,i[3]=x,i[4]=g,i[5]=m}function Mb(s,t=null,e=null,n=null){const i=s.attributes.position,r=s.index?s.index.array:null,o=bi(s),a=i.normalized;let c;t===null?c=new Float32Array(o*6):c=t,e=e||0,n=n||o;const l=i.array,u=i.offset||0;let h=3;i.isInterleavedBufferAttribute&&(h=i.data.stride);const f=["getX","getY","getZ"];for(let d=e;d<e+n;d++){const x=d*3,g=d*6;let m=x+0,p=x+1,y=x+2;r&&(m=r[m],p=r[p],y=r[y]),a||(m=m*h+u,p=p*h+u,y=y*h+u);for(let _=0;_<3;_++){let v,b,M;a?(v=i[f[_]](m),b=i[f[_]](p),M=i[f[_]](y)):(v=l[m+_],b=l[p+_],M=l[y+_]);let E=v;b<E&&(E=b),M<E&&(E=M);let C=v;b>C&&(C=b),M>C&&(C=M);const T=(C-E)/2,S=_*2;c[g+S+0]=E+T,c[g+S+1]=T+(Math.abs(E)+T)*gb}}return c}function _e(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function Fh(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function Oh(s,t){t.set(s)}function Bh(s,t,e){let n,i;for(let r=0;r<3;r++){const o=r+3;n=s[r],i=t[r],e[r]=n<i?n:i,n=s[o],i=t[o],e[o]=n>i?n:i}}function xo(s,t,e){for(let n=0;n<3;n++){const i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function $s(s){const t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}const Kn=32,Sb=(s,t)=>s.candidate-t.candidate,hi=new Array(Kn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),go=new Float32Array(6);function Tb(s,t,e,n,i,r){let o=-1,a=0;if(r===Gf)o=Fh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===mb)o=Fh(s),o!==-1&&(a=Eb(e,n,i,o));else if(r===xb){const c=$s(s);let l=tc*i;const u=n*6,h=(n+i)*6;for(let f=0;f<3;f++){const d=t[f],m=(t[f+3]-d)/Kn;if(i<Kn/4){const p=[...hi];p.length=i;let y=0;for(let v=u;v<h;v+=6,y++){const b=p[y];b.candidate=e[v+2*f],b.count=0;const{bounds:M,leftCacheBounds:E,rightCacheBounds:C}=b;for(let T=0;T<3;T++)C[T]=1/0,C[T+3]=-1/0,E[T]=1/0,E[T+3]=-1/0,M[T]=1/0,M[T+3]=-1/0;xo(v,e,M)}p.sort(Sb);let _=i;for(let v=0;v<_;v++){const b=p[v];for(;v+1<_&&p[v+1].candidate===b.candidate;)p.splice(v+1,1),_--}for(let v=u;v<h;v+=6){const b=e[v+2*f];for(let M=0;M<_;M++){const E=p[M];b>=E.candidate?xo(v,e,E.rightCacheBounds):(xo(v,e,E.leftCacheBounds),E.count++)}}for(let v=0;v<_;v++){const b=p[v],M=b.count,E=i-b.count,C=b.leftCacheBounds,T=b.rightCacheBounds;let S=0;M!==0&&(S=$s(C)/c);let P=0;E!==0&&(P=$s(T)/c);const L=Nh+tc*(S*M+P*E);L<l&&(o=f,l=L,a=b.candidate)}}else{for(let _=0;_<Kn;_++){const v=hi[_];v.count=0,v.candidate=d+m+_*m;const b=v.bounds;for(let M=0;M<3;M++)b[M]=1/0,b[M+3]=-1/0}for(let _=u;_<h;_+=6){let M=~~((e[_+2*f]-d)/m);M>=Kn&&(M=Kn-1);const E=hi[M];E.count++,xo(_,e,E.bounds)}const p=hi[Kn-1];Oh(p.bounds,p.rightCacheBounds);for(let _=Kn-2;_>=0;_--){const v=hi[_],b=hi[_+1];Bh(v.bounds,b.rightCacheBounds,v.rightCacheBounds)}let y=0;for(let _=0;_<Kn-1;_++){const v=hi[_],b=v.count,M=v.bounds,C=hi[_+1].rightCacheBounds;b!==0&&(y===0?Oh(M,go):Bh(M,go,go)),y+=b;let T=0,S=0;y!==0&&(T=$s(go)/c);const P=i-y;P!==0&&(S=$s(C)/c);const L=Nh+tc*(T*y+S*P);L<l&&(o=f,l=L,a=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function Eb(s,t,e,n){let i=0;for(let r=t,o=t+e;r<o;r++)i+=s[r*6+n*2];return i/e}class ic{constructor(){this.boundingData=new Float32Array(6)}}function Ab(s,t,e,n,i,r){let o=n,a=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let h=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=h}for(let u=0;u<6;u++){let h=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=h}o++,a--}else return o}}function wb(s,t,e,n,i,r){let o=n,a=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=s[o];s[o]=s[a],s[a]=u;for(let h=0;h<6;h++){let f=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=f}o++,a--}else return o}}function $e(s,t){return t[s+15]===65535}function on(s,t){return t[s+6]}function fn(s,t){return t[s+14]}function dn(s){return s+8}function pn(s,t){return t[s+6]}function qf(s,t){return t[s+7]}let jf,ar,zo,Yf;const Rb=Math.pow(2,32);function al(s){return"count"in s?1:1+al(s.left)+al(s.right)}function Cb(s,t,e){return jf=new Float32Array(e),ar=new Uint32Array(e),zo=new Uint16Array(e),Yf=new Uint8Array(e),cl(s,t)}function cl(s,t){const e=s/4,n=s/2,i="count"in t,r=t.boundingData;for(let o=0;o<6;o++)jf[e+o]=r[o];if(i)if(t.buffer){const o=t.buffer;Yf.set(new Uint8Array(o),s);for(let a=s,c=s+o.byteLength;a<c;a+=pr){const l=a/2;$e(l,zo)||(ar[a/4+6]+=e)}return s+o.byteLength}else{const o=t.offset,a=t.count;return ar[e+6]=o,zo[n+14]=a,zo[n+15]=na,s+pr}else{const o=t.left,a=t.right,c=t.splitAxis;let l;if(l=cl(s+pr,o),l/4>Rb)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ar[e+6]=l/4,l=cl(l,a),ar[e+7]=c,l}}function Pb(s,t){const e=(s.index?s.index.count:s.attributes.position.count)/3,n=e>2**16,i=n?4:2,r=t?new SharedArrayBuffer(e*i):new ArrayBuffer(e*i),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function Ib(s,t,e,n,i){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=i,h=s._indirectBuffer,f=s.geometry,d=f.index?f.index.array:null,x=u?wb:Ab,g=bi(f),m=new Float32Array(6);let p=!1;const y=new ic;return nc(t,e,n,y.boundingData,m),v(y,e,n,m),y;function _(b){l&&l(b/g)}function v(b,M,E,C=null,T=0){if(!p&&T>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),E<=a||T>=r)return _(M+E),b.offset=M,b.count=E,b;const S=Tb(b.boundingData,C,t,M,E,c);if(S.axis===-1)return _(M+E),b.offset=M,b.count=E,b;const P=x(h,d,t,M,E,S);if(P===M||P===M+E)_(M+E),b.offset=M,b.count=E;else{b.splitAxis=S.axis;const L=new ic,N=M,F=P-M;b.left=L,nc(t,N,F,L.boundingData,m),v(L,N,F,m,T+1);const k=new ic,V=P,q=E-F;b.right=k,nc(t,V,q,k.boundingData,m),v(k,V,q,m,T+1)}return b}}function Lb(s,t){const e=s.geometry;t.indirect&&(s._indirectBuffer=Pb(e,t.useSharedArrayBuffer),bb(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||yb(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Wf(e,t.range),r=Mb(e,null,i[0].offset,i[0].count),o=t.indirect?i:Xf(e,t.range);s._roots=o.map(a=>{const c=Ib(s,r,a.offset,a.count,t),l=al(c),u=new n(pr*l);return Cb(0,c,u),u})}class ni{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}}ni.prototype.setFromBox=(function(){const s=new R;return function(e,n){const i=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);const h=e.dot(s);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const Db=(function(){const s=new R,t=new R,e=new R;return function(i,r,o){const a=i.start,c=s,l=r.start,u=t;e.subVectors(a,l),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);const h=e.dot(u),f=u.dot(c),d=u.dot(u),x=e.dot(c),m=c.dot(c)*d-f*f;let p,y;m!==0?p=(h*f-x*d)/m:p=0,y=(h+p*f)/d,o.x=p,o.y=y}})(),zl=(function(){const s=new st,t=new R,e=new R;return function(i,r,o,a){Db(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;const f=t,d=e;if(i.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}})(),Ub=(function(){const s=new R,t=new R,e=new Sn,n=new ei;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;const g=o.getPlane(e);if(Math.abs(g.distanceToPoint(c))<=a){const p=g.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})(),Nb=["x","y","z"],Zn=1e-15,zh=Zn*Zn;function un(s){return Math.abs(s)<Zn}class Cn extends De{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new ni),this.points=[this.a,this.b,this.c],this.plane=new Sn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ei,this.needsUpdate=!0}intersectsSphere(t){return Ub(t,this)}update(){const t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,i);const h=r[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,i);const d=r[3],x=o[3];d.subVectors(n,t),x.setFromPoints(d,i);const g=l.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,g<Zn?m<Zn||p<Zn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<Zn?p<Zn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<Zn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Cn.prototype.closestPointToSegment=(function(){const s=new R,t=new R,e=new ei;return function(i,r=null,o=null){const{start:a,end:c}=i,l=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),zl(e,i,s,t),u=s.distanceToSquared(t),u<h&&(h=u,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(h)}})();Cn.prototype.intersectsTriangle=(function(){const s=new Cn,t=new ni,e=new ni,n=new R,i=new R,r=new R,o=new R,a=new ei,c=new ei,l=new R,u=new st,h=new st;function f(_,v,b,M){const E=n;!_.isDegenerateIntoPoint&&!_.isDegenerateIntoSegment?E.copy(_.plane.normal):E.copy(v.plane.normal);const C=_.satBounds,T=_.satAxes;for(let L=1;L<4;L++){const N=C[L],F=T[L];if(t.setFromPoints(F,v.points),N.isSeparated(t)||(o.copy(E).cross(F),t.setFromPoints(o,_.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}const S=v.satBounds,P=v.satAxes;for(let L=1;L<4;L++){const N=S[L],F=P[L];if(t.setFromPoints(F,_.points),N.isSeparated(t)||(o.crossVectors(E,F),t.setFromPoints(o,_.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}return b&&(M||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),b.start.set(0,0,0),b.end.set(0,0,0)),!0}function d(_,v,b,M,E,C,T,S,P,L,N){let F=T/(T-S);L.x=M+(E-M)*F,N.start.subVectors(v,_).multiplyScalar(F).add(_),F=T/(T-P),L.y=M+(C-M)*F,N.end.subVectors(b,_).multiplyScalar(F).add(_)}function x(_,v,b,M,E,C,T,S,P,L,N){if(E>0)d(_.c,_.a,_.b,M,v,b,P,T,S,L,N);else if(C>0)d(_.b,_.a,_.c,b,v,M,S,T,P,L,N);else if(S*P>0||T!=0)d(_.a,_.b,_.c,v,b,M,T,S,P,L,N);else if(S!=0)d(_.b,_.a,_.c,b,v,M,S,T,P,L,N);else if(P!=0)d(_.c,_.a,_.b,M,v,b,P,T,S,L,N);else return!0;return!1}function g(_,v,b,M){const E=v.degenerateSegment,C=_.plane.distanceToPoint(E.start),T=_.plane.distanceToPoint(E.end);return un(C)?un(T)?f(_,v,b,M):(b&&(b.start.copy(E.start),b.end.copy(E.start)),_.containsPoint(E.start)):un(T)?(b&&(b.start.copy(E.end),b.end.copy(E.end)),_.containsPoint(E.end)):_.plane.intersectLine(E,n)!=null?(b&&(b.start.copy(n),b.end.copy(n)),_.containsPoint(n)):!1}function m(_,v,b){const M=v.a;return un(_.plane.distanceToPoint(M))&&_.containsPoint(M)?(b&&(b.start.copy(M),b.end.copy(M)),!0):!1}function p(_,v,b){const M=_.degenerateSegment,E=v.a;return M.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<zh?(b&&(b.start.copy(E),b.end.copy(E)),!0):!1}function y(_,v,b,M){if(_.isDegenerateIntoSegment)if(v.isDegenerateIntoSegment){const E=_.degenerateSegment,C=v.degenerateSegment,T=i,S=r;E.delta(T),C.delta(S);const P=n.subVectors(C.start,E.start),L=T.x*S.y-T.y*S.x;if(un(L))return!1;const N=(P.x*S.y-P.y*S.x)/L,F=-(T.x*P.y-T.y*P.x)/L;if(N<0||N>1||F<0||F>1)return!1;const k=E.start.z+T.z*N,V=C.start.z+S.z*F;return un(k-V)?(b&&(b.start.copy(E.start).addScaledVector(T,N),b.end.copy(E.start).addScaledVector(T,N)),!0):!1}else return v.isDegenerateIntoPoint?p(_,v,b):g(v,_,b,M);else{if(_.isDegenerateIntoPoint)return v.isDegenerateIntoPoint?v.a.distanceToSquared(_.a)<zh?(b&&(b.start.copy(_.a),b.end.copy(_.a)),!0):!1:v.isDegenerateIntoSegment?p(v,_,b):m(v,_,b);if(v.isDegenerateIntoPoint)return m(_,v,b);if(v.isDegenerateIntoSegment)return g(_,v,b,M)}}return function(v,b=null,M=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(s.copy(v),s.update(),v=s);const E=y(this,v,b,M);if(E!==void 0)return E;const C=this.plane,T=v.plane;let S=T.distanceToPoint(this.a),P=T.distanceToPoint(this.b),L=T.distanceToPoint(this.c);un(S)&&(S=0),un(P)&&(P=0),un(L)&&(L=0);const N=S*P,F=S*L;if(N>0&&F>0)return!1;let k=C.distanceToPoint(v.a),V=C.distanceToPoint(v.b),q=C.distanceToPoint(v.c);un(k)&&(k=0),un(V)&&(V=0),un(q)&&(q=0);const W=k*V,tt=k*q;if(W>0&&tt>0)return!1;i.copy(C.normal),r.copy(T.normal);const nt=i.cross(r);let vt=0,zt=Math.abs(nt.x);const $t=Math.abs(nt.y);$t>zt&&(zt=$t,vt=1),Math.abs(nt.z)>zt&&(vt=2);const Yt=Nb[vt],j=this.a[Yt],Z=this.b[Yt],ft=this.c[Yt],Ut=v.a[Yt],yt=v.b[Yt],kt=v.c[Yt];if(x(this,j,Z,ft,N,F,S,P,L,u,a))return f(this,v,b,M);if(x(v,Ut,yt,kt,W,tt,k,V,q,h,c))return f(this,v,b,M);if(u.y<u.x){const ye=u.y;u.y=u.x,u.x=ye,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(h.y<h.x){const ye=h.y;h.y=h.x,h.x=ye,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<h.x||h.y<u.x?!1:(b&&(h.x>u.x?b.start.copy(c.start):b.start.copy(a.start),h.y<u.y?b.end.copy(c.end):b.end.copy(a.end)),!0)}})();Cn.prototype.distanceToPoint=(function(){const s=new R;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Cn.prototype.distanceToTriangle=(function(){const s=new R,t=new R,e=["a","b","c"],n=new ei,i=new ei;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=e[h],x=o[d];this.closestPointToPoint(x,s),f=x.distanceToSquared(s),f<u&&(u=f,a&&a.copy(s),c&&c.copy(x));const g=this[d];o.closestPointToPoint(g,s),f=g.distanceToSquared(s),f<u&&(u=f,a&&a.copy(g),c&&c.copy(s))}for(let h=0;h<3;h++){const f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let x=0;x<3;x++){const g=e[x],m=e[(x+1)%3];i.set(o[g],o[m]),zl(n,i,s,t);const p=s.distanceToSquared(t);p<u&&(u=p,a&&a.copy(s),c&&c.copy(t))}}return Math.sqrt(u)}})();class qe{constructor(t,e,n){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new St,this.invMatrix=new St,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new ni),this.alignedSatBounds=new Array(3).fill().map(()=>new ni),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}qe.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,d=i[f];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){const u=o[l],h=r[l],f=1<<l,d=i[f];u.subVectors(a,d),h.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();qe.prototype.intersectsBox=(function(){const s=new ni;return function(e){this.needsUpdate&&this.update();const n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(s.setFromBox(l,e),u.isSeparated(s))return!1}return!0}})();qe.prototype.intersectsTriangle=(function(){const s=new Cn,t=new Array(3),e=new ni,n=new ni,i=new R;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){const d=a[f],x=c[f];if(e.setFromPoints(x,t),d.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const d=l[f],x=u[f];if(e.setFromPoints(x,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){const d=c[f];for(let x=0;x<4;x++){const g=u[x];if(i.crossVectors(d,g),e.setFromPoints(i,t),n.setFromPoints(i,h),e.isSeparated(n))return!1}}return!0}})();qe.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();qe.prototype.distanceToPoint=(function(){const s=new R;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();qe.prototype.distanceToBox=(function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new ei),e=new Array(12).fill().map(()=>new ei),n=new R,i=new R;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=a*a,h=o.min,f=o.max,d=this.points;let x=1/0;for(let m=0;m<8;m++){const p=d[m];i.copy(p).clamp(h,f);const y=p.distanceToSquared(i);if(y<x&&(x=y,c&&c.copy(p),l&&l.copy(i),y<u))return Math.sqrt(y)}let g=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const _=(m+1)%3,v=(m+2)%3,b=p<<_|y<<v,M=1<<m|p<<_|y<<v,E=d[b],C=d[M];t[g].set(E,C);const S=s[m],P=s[_],L=s[v],N=e[g],F=N.start,k=N.end;F[S]=h[S],F[P]=p?h[P]:f[P],F[L]=y?h[L]:f[P],k[S]=f[S],k[P]=p?h[P]:f[P],k[L]=y?h[L]:f[P],g++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){i.x=m?f.x:h.x,i.y=p?f.y:h.y,i.z=y?f.z:h.z,this.closestPointToPoint(i,n);const _=i.distanceToSquared(n);if(_<x&&(x=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=t[m];for(let y=0;y<12;y++){const _=e[y];zl(p,_,n,i);const v=n.distanceToSquared(i);if(v<x&&(x=v,c&&c.copy(n),l&&l.copy(i),v<u))return Math.sqrt(v)}}return Math.sqrt(x)}})();class kl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Fb extends kl{constructor(){super(()=>new Cn)}}const mn=new Fb;class Ob{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ce=new Ob;let xi,vs;const hs=[],_o=new kl(()=>new pe);function Bb(s,t,e,n,i,r){xi=_o.getPrimitive(),vs=_o.getPrimitive(),hs.push(xi,vs),ce.setBuffer(s._roots[t]);const o=ll(0,s.geometry,e,n,i,r);ce.clearBuffer(),_o.releasePrimitive(xi),_o.releasePrimitive(vs),hs.pop(),hs.pop();const a=hs.length;return a>0&&(vs=hs[a-1],xi=hs[a-2]),o}function ll(s,t,e,n,i=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=ce;let u=s*2;if($e(u,c)){const x=on(s,l),g=fn(u,c);return _e(s,a,xi),n(x,g,!1,o,r+s,xi)}else{let L=function(F){const{uint16Array:k,uint32Array:V}=ce;let q=F*2;for(;!$e(q,k);)F=dn(F),q=F*2;return on(F,V)},N=function(F){const{uint16Array:k,uint32Array:V}=ce;let q=F*2;for(;!$e(q,k);)F=pn(F,V),q=F*2;return on(F,V)+fn(q,k)};var f=L,d=N;const x=dn(s),g=pn(s,l);let m=x,p=g,y,_,v,b;if(i&&(v=xi,b=vs,_e(m,a,v),_e(p,a,b),y=i(v),_=i(b),_<y)){m=g,p=x;const F=y;y=_,_=F,v=b}v||(v=xi,_e(m,a,v));const M=$e(m*2,c),E=e(v,M,y,o+1,r+m);let C;if(E===Uh){const F=L(m),V=N(m)-F;C=n(F,V,!0,o+1,r+m,v)}else C=E&&ll(m,t,e,n,i,r,o+1);if(C)return!0;b=vs,_e(p,a,b);const T=$e(p*2,c),S=e(b,T,_,o+1,r+p);let P;if(S===Uh){const F=L(p),V=N(p)-F;P=n(F,V,!0,o+1,r+p,b)}else P=S&&ll(p,t,e,n,i,r,o+1);return!!P}}const Js=new R,sc=new R;function zb(s,t,e={},n=0,i=1/0){const r=n*n,o=i*i;let a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(Js.copy(t).clamp(u.min,u.max),Js.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Js);const f=t.distanceToSquared(Js);return f<a&&(sc.copy(Js),a=f,c=h),f<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(sc):e.point=sc.clone(),e.distance=l,e.faceIndex=c,e}const vo=parseInt(Cr)>=169,kb=parseInt(Cr)<=161,Di=new R,Ui=new R,Ni=new R,yo=new st,bo=new st,Mo=new st,kh=new R,Vh=new R,Hh=new R,Qs=new R;function Vb(s,t,e,n,i,r,o,a){let c;if(r===We?c=s.intersectTriangle(n,e,t,!0,i):c=s.intersectTriangle(t,e,n,r!==Tn,i),c===null)return null;const l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function Hb(s,t,e,n,i,r,o,a,c,l,u){Di.fromBufferAttribute(t,r),Ui.fromBufferAttribute(t,o),Ni.fromBufferAttribute(t,a);const h=Vb(s,Di,Ui,Ni,Qs,c,l,u);if(h){if(n){yo.fromBufferAttribute(n,r),bo.fromBufferAttribute(n,o),Mo.fromBufferAttribute(n,a),h.uv=new st;const d=De.getInterpolation(Qs,Di,Ui,Ni,yo,bo,Mo,h.uv);vo||(h.uv=d)}if(i){yo.fromBufferAttribute(i,r),bo.fromBufferAttribute(i,o),Mo.fromBufferAttribute(i,a),h.uv1=new st;const d=De.getInterpolation(Qs,Di,Ui,Ni,yo,bo,Mo,h.uv1);vo||(h.uv1=d),kb&&(h.uv2=h.uv1)}if(e){kh.fromBufferAttribute(e,r),Vh.fromBufferAttribute(e,o),Hh.fromBufferAttribute(e,a),h.normal=new R;const d=De.getInterpolation(Qs,Di,Ui,Ni,kh,Vh,Hh,h.normal);h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1),vo||(h.normal=d)}const f={a:r,b:o,c:a,normal:new R,materialIndex:0};if(De.getNormal(Di,Ui,Ni,f.normal),h.face=f,h.faceIndex=r,vo){const d=new R;De.getBarycoord(Qs,Di,Ui,Ni,d),h.barycoord=d}}return h}function ia(s,t,e,n,i,r,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const h=s.index;s.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:f,normal:d,uv:x,uv1:g}=s.attributes,m=Hb(e,f,d,x,g,c,l,u,t,r,o);return m?(m.faceIndex=n,i&&i.push(m),m):null}function Te(s,t,e,n){const i=s.a,r=s.b,o=s.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Gb(s,t,e,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++)ia(c,t,e,u,r,o,a)}function Wb(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=ia(a,t,e,h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function Xb(s,t,e,n,i,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let f;if(f=u,Te(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function qb(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,x=!1){const g=f*2;if(a[g+15]===na){const p=o[f+6],y=a[g+14];let _=1/0,v=1/0,b=1/0,M=-1/0,E=-1/0,C=-1/0;for(let T=3*p,S=3*(p+y);T<S;T++){let P=n[T];const L=i.getX(P),N=i.getY(P),F=i.getZ(P);L<_&&(_=L),L>M&&(M=L),N<v&&(v=N),N>E&&(E=N),F<b&&(b=F),F>C&&(C=F)}return c[f+0]!==_||c[f+1]!==v||c[f+2]!==b||c[f+3]!==M||c[f+4]!==E||c[f+5]!==C?(c[f+0]=_,c[f+1]=v,c[f+2]=b,c[f+3]=M,c[f+4]=E,c[f+5]=C,!0):!1}else{const p=f+8,y=o[f+6],_=p+d,v=y+d;let b=x,M=!1,E=!1;t?b||(M=t.has(_),E=t.has(v),b=!M&&!E):(M=!0,E=!0);const C=b||M,T=b||E;let S=!1;C&&(S=h(p,d,b));let P=!1;T&&(P=h(y,d,b));const L=S||P;if(L)for(let N=0;N<3;N++){const F=p+N,k=y+N,V=c[F],q=c[F+3],W=c[k],tt=c[k+3];c[f+N]=V<W?V:W,c[f+N+3]=q>tt?q:tt}return L}}}function yi(s,t,e,n,i){let r,o,a,c,l,u;const h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,x=e.origin.x,g=e.origin.y,m=e.origin.z;let p=t[s],y=t[s+3],_=t[s+1],v=t[s+3+1],b=t[s+2],M=t[s+3+2];return h>=0?(r=(p-x)*h,o=(y-x)*h):(r=(y-x)*h,o=(p-x)*h),f>=0?(a=(_-g)*f,c=(v-g)*f):(a=(v-g)*f,c=(_-g)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(b-m)*d,u=(M-m)*d):(l=(M-m)*d,u=(b-m)*d),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=i&&o>=n)}function jb(s,t,e,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++){let f=l?l[u]:u;ia(c,t,e,f,r,o,a)}}function Yb(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=ia(a,t,e,c?c[h]:h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function Kb(s,t,e,n,i,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),Te(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function Zb(s,t,e,n,i,r,o){ce.setBuffer(s._roots[t]),ul(0,s,e,n,i,r,o),ce.clearBuffer()}function ul(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ce,u=s*2;if($e(u,c)){const f=on(s,l),d=fn(u,c);Gb(t,e,n,f,d,i,r,o)}else{const f=dn(s);yi(f,a,n,r,o)&&ul(f,t,e,n,i,r,o);const d=pn(s,l);yi(d,a,n,r,o)&&ul(d,t,e,n,i,r,o)}}const $b=["x","y","z"];function Jb(s,t,e,n,i,r){ce.setBuffer(s._roots[t]);const o=hl(0,s,e,n,i,r);return ce.clearBuffer(),o}function hl(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ce;let l=s*2;if($e(l,a)){const h=on(s,c),f=fn(l,a);return Wb(t,e,n,h,f,i,r)}else{const h=qf(s,c),f=$b[h],x=n.direction[f]>=0;let g,m;x?(g=dn(s),m=pn(s,c)):(g=pn(s,c),m=dn(s));const y=yi(g,o,n,i,r)?hl(g,t,e,n,i,r):null;if(y){const b=y.point[f];if(x?b<=o[m+h]:b>=o[m+h+3])return y}const v=yi(m,o,n,i,r)?hl(m,t,e,n,i,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}const So=new pe,fs=new Cn,ds=new Cn,tr=new St,Gh=new qe,To=new qe;function Qb(s,t,e,n){ce.setBuffer(s._roots[t]);const i=fl(0,s,e,n);return ce.clearBuffer(),i}function fl(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ce;let c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Gh.set(e.boundingBox.min,e.boundingBox.max,n),i=Gh),$e(c,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,x=e.attributes.position,g=on(s,a),m=fn(c,o);if(tr.copy(n).invert(),e.boundsTree)return _e(s,r,To),To.matrix.copy(tr),To.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>To.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=g*3,v=(m+g)*3;_<v;_+=3)if(Te(ds,_,h,f),ds.needsUpdate=!0,y.intersectsTriangle(ds))return!0;return!1}});{const p=bi(e);for(let y=g*3,_=(m+g)*3;y<_;y+=3){Te(fs,y,h,f),fs.a.applyMatrix4(tr),fs.b.applyMatrix4(tr),fs.c.applyMatrix4(tr),fs.needsUpdate=!0;for(let v=0,b=p*3;v<b;v+=3)if(Te(ds,v,d,x),ds.needsUpdate=!0,fs.intersectsTriangle(ds))return!0}}}else{const u=s+8,h=a[s+6];return _e(u,r,So),!!(i.intersectsBox(So)&&fl(u,t,e,n,i)||(_e(h,r,So),i.intersectsBox(So)&&fl(h,t,e,n,i)))}}const Eo=new St,rc=new qe,er=new qe,tM=new R,eM=new R,nM=new R,iM=new R;function sM(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),rc.set(t.boundingBox.min,t.boundingBox.max,e),rc.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=mn.getPrimitive(),d=mn.getPrimitive();let x=tM,g=eM,m=null,p=null;i&&(m=nM,p=iM);let y=1/0,_=null,v=null;return Eo.copy(e).invert(),er.matrix.copy(Eo),s.shapecast({boundsTraverseOrder:b=>rc.distanceToBox(b),intersectsBounds:(b,M,E)=>E<y&&E<o?(M&&(er.min.copy(b.min),er.max.copy(b.max),er.needsUpdate=!0),!0):!1,intersectsRange:(b,M)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>er.distanceToBox(C),intersectsBounds:(C,T,S)=>S<y&&S<o,intersectsRange:(C,T)=>{for(let S=C,P=C+T;S<P;S++){Te(d,3*S,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=b,N=b+M;L<N;L++){Te(f,3*L,l,c),f.needsUpdate=!0;const F=f.distanceToTriangle(d,x,m);if(F<y&&(g.copy(x),p&&p.copy(m),y=F,_=L,v=S),F<r)return!0}}}});{const E=bi(t);for(let C=0,T=E;C<T;C++){Te(d,3*C,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=b,P=b+M;S<P;S++){Te(f,3*S,l,c),f.needsUpdate=!0;const L=f.distanceToTriangle(d,x,m);if(L<y&&(g.copy(x),p&&p.copy(m),y=L,_=S,v=C),L<r)return!0}}}}}),mn.releasePrimitive(f),mn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=y,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Eo),g.applyMatrix4(Eo),i.distance=g.sub(i.point).length(),i.faceIndex=v),n)}function rM(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,x=!1){const g=f*2;if(a[g+15]===na){const p=o[f+6],y=a[g+14];let _=1/0,v=1/0,b=1/0,M=-1/0,E=-1/0,C=-1/0;for(let T=p,S=p+y;T<S;T++){const P=3*s.resolveTriangleIndex(T);for(let L=0;L<3;L++){let N=P+L;N=n?n[N]:N;const F=i.getX(N),k=i.getY(N),V=i.getZ(N);F<_&&(_=F),F>M&&(M=F),k<v&&(v=k),k>E&&(E=k),V<b&&(b=V),V>C&&(C=V)}}return c[f+0]!==_||c[f+1]!==v||c[f+2]!==b||c[f+3]!==M||c[f+4]!==E||c[f+5]!==C?(c[f+0]=_,c[f+1]=v,c[f+2]=b,c[f+3]=M,c[f+4]=E,c[f+5]=C,!0):!1}else{const p=f+8,y=o[f+6],_=p+d,v=y+d;let b=x,M=!1,E=!1;t?b||(M=t.has(_),E=t.has(v),b=!M&&!E):(M=!0,E=!0);const C=b||M,T=b||E;let S=!1;C&&(S=h(p,d,b));let P=!1;T&&(P=h(y,d,b));const L=S||P;if(L)for(let N=0;N<3;N++){const F=p+N,k=y+N,V=c[F],q=c[F+3],W=c[k],tt=c[k+3];c[f+N]=V<W?V:W,c[f+N+3]=q>tt?q:tt}return L}}}function oM(s,t,e,n,i,r,o){ce.setBuffer(s._roots[t]),dl(0,s,e,n,i,r,o),ce.clearBuffer()}function dl(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=ce,u=s*2;if($e(u,c)){const f=on(s,l),d=fn(u,c);jb(t,e,n,f,d,i,r,o)}else{const f=dn(s);yi(f,a,n,r,o)&&dl(f,t,e,n,i,r,o);const d=pn(s,l);yi(d,a,n,r,o)&&dl(d,t,e,n,i,r,o)}}const aM=["x","y","z"];function cM(s,t,e,n,i,r){ce.setBuffer(s._roots[t]);const o=pl(0,s,e,n,i,r);return ce.clearBuffer(),o}function pl(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=ce;let l=s*2;if($e(l,a)){const h=on(s,c),f=fn(l,a);return Yb(t,e,n,h,f,i,r)}else{const h=qf(s,c),f=aM[h],x=n.direction[f]>=0;let g,m;x?(g=dn(s),m=pn(s,c)):(g=pn(s,c),m=dn(s));const y=yi(g,o,n,i,r)?pl(g,t,e,n,i,r):null;if(y){const b=y.point[f];if(x?b<=o[m+h]:b>=o[m+h+3])return y}const v=yi(m,o,n,i,r)?pl(m,t,e,n,i,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}const Ao=new pe,ps=new Cn,ms=new Cn,nr=new St,Wh=new qe,wo=new qe;function lM(s,t,e,n){ce.setBuffer(s._roots[t]);const i=ml(0,s,e,n);return ce.clearBuffer(),i}function ml(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ce;let c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Wh.set(e.boundingBox.min,e.boundingBox.max,n),i=Wh),$e(c,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,x=e.attributes.position,g=on(s,a),m=fn(c,o);if(nr.copy(n).invert(),e.boundsTree)return _e(s,r,wo),wo.matrix.copy(nr),wo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>wo.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=g,v=m+g;_<v;_++)if(Te(ms,3*t.resolveTriangleIndex(_),h,f),ms.needsUpdate=!0,y.intersectsTriangle(ms))return!0;return!1}});{const p=bi(e);for(let y=g,_=m+g;y<_;y++){const v=t.resolveTriangleIndex(y);Te(ps,3*v,h,f),ps.a.applyMatrix4(nr),ps.b.applyMatrix4(nr),ps.c.applyMatrix4(nr),ps.needsUpdate=!0;for(let b=0,M=p*3;b<M;b+=3)if(Te(ms,b,d,x),ms.needsUpdate=!0,ps.intersectsTriangle(ms))return!0}}}else{const u=s+8,h=a[s+6];return _e(u,r,Ao),!!(i.intersectsBox(Ao)&&ml(u,t,e,n,i)||(_e(h,r,Ao),i.intersectsBox(Ao)&&ml(h,t,e,n,i)))}}const Ro=new St,oc=new qe,ir=new qe,uM=new R,hM=new R,fM=new R,dM=new R;function pM(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),oc.set(t.boundingBox.min,t.boundingBox.max,e),oc.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=mn.getPrimitive(),d=mn.getPrimitive();let x=uM,g=hM,m=null,p=null;i&&(m=fM,p=dM);let y=1/0,_=null,v=null;return Ro.copy(e).invert(),ir.matrix.copy(Ro),s.shapecast({boundsTraverseOrder:b=>oc.distanceToBox(b),intersectsBounds:(b,M,E)=>E<y&&E<o?(M&&(ir.min.copy(b.min),ir.max.copy(b.max),ir.needsUpdate=!0),!0):!1,intersectsRange:(b,M)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:C=>ir.distanceToBox(C),intersectsBounds:(C,T,S)=>S<y&&S<o,intersectsRange:(C,T)=>{for(let S=C,P=C+T;S<P;S++){const L=E.resolveTriangleIndex(S);Te(d,3*L,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let N=b,F=b+M;N<F;N++){const k=s.resolveTriangleIndex(N);Te(f,3*k,l,c),f.needsUpdate=!0;const V=f.distanceToTriangle(d,x,m);if(V<y&&(g.copy(x),p&&p.copy(m),y=V,_=N,v=S),V<r)return!0}}}})}else{const E=bi(t);for(let C=0,T=E;C<T;C++){Te(d,3*C,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=b,P=b+M;S<P;S++){const L=s.resolveTriangleIndex(S);Te(f,3*L,l,c),f.needsUpdate=!0;const N=f.distanceToTriangle(d,x,m);if(N<y&&(g.copy(x),p&&p.copy(m),y=N,_=S,v=C),N<r)return!0}}}}}),mn.releasePrimitive(f),mn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=y,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Ro),g.applyMatrix4(Ro),i.distance=g.sub(i.point).length(),i.faceIndex=v),n)}function mM(){return typeof SharedArrayBuffer<"u"}const mr=new ce.constructor,qo=new ce.constructor,fi=new kl(()=>new pe),xs=new pe,gs=new pe,ac=new pe,cc=new pe;let lc=!1;function xM(s,t,e,n){if(lc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");lc=!0;const i=s._roots,r=t._roots;let o,a=0,c=0;const l=new St().copy(e).invert();for(let u=0,h=i.length;u<h;u++){mr.setBuffer(i[u]),c=0;const f=fi.getPrimitive();_e(0,mr.float32Array,f),f.applyMatrix4(l);for(let d=0,x=r.length;d<x&&(qo.setBuffer(r[d]),o=Mn(0,0,e,l,n,a,c,0,0,f),qo.clearBuffer(),c+=r[d].length,!o);d++);if(fi.releasePrimitive(f),mr.clearBuffer(),a+=i[u].length,o)break}return lc=!1,o}function Mn(s,t,e,n,i,r=0,o=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=qo,f=mr):(h=mr,f=qo);const d=h.float32Array,x=h.uint32Array,g=h.uint16Array,m=f.float32Array,p=f.uint32Array,y=f.uint16Array,_=s*2,v=t*2,b=$e(_,g),M=$e(v,y);let E=!1;if(M&&b)u?E=i(on(t,p),fn(t*2,y),on(s,x),fn(s*2,g),c,o+t,a,r+s):E=i(on(s,x),fn(s*2,g),on(t,p),fn(t*2,y),a,r+s,c,o+t);else if(M){const C=fi.getPrimitive();_e(t,m,C),C.applyMatrix4(e);const T=dn(s),S=pn(s,x);_e(T,d,xs),_e(S,d,gs);const P=C.intersectsBox(xs),L=C.intersectsBox(gs);E=P&&Mn(t,T,n,e,i,o,r,c,a+1,C,!u)||L&&Mn(t,S,n,e,i,o,r,c,a+1,C,!u),fi.releasePrimitive(C)}else{const C=dn(t),T=pn(t,p);_e(C,m,ac),_e(T,m,cc);const S=l.intersectsBox(ac),P=l.intersectsBox(cc);if(S&&P)E=Mn(s,C,e,n,i,r,o,a,c+1,l,u)||Mn(s,T,e,n,i,r,o,a,c+1,l,u);else if(S)if(b)E=Mn(s,C,e,n,i,r,o,a,c+1,l,u);else{const L=fi.getPrimitive();L.copy(ac).applyMatrix4(e);const N=dn(s),F=pn(s,x);_e(N,d,xs),_e(F,d,gs);const k=L.intersectsBox(xs),V=L.intersectsBox(gs);E=k&&Mn(C,N,n,e,i,o,r,c,a+1,L,!u)||V&&Mn(C,F,n,e,i,o,r,c,a+1,L,!u),fi.releasePrimitive(L)}else if(P)if(b)E=Mn(s,T,e,n,i,r,o,a,c+1,l,u);else{const L=fi.getPrimitive();L.copy(cc).applyMatrix4(e);const N=dn(s),F=pn(s,x);_e(N,d,xs),_e(F,d,gs);const k=L.intersectsBox(xs),V=L.intersectsBox(gs);E=k&&Mn(T,N,n,e,i,o,r,c,a+1,L,!u)||V&&Mn(T,F,n,e,i,o,r,c,a+1,L,!u),fi.releasePrimitive(L)}}return E}const Co=new qe,Xh=new pe,gM={strategy:Gf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class sa{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:i.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:i,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:o}=t,a=new sa(e,{...n,[ec]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new ve(t.index,1,!1);e.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...gM,[ec]:!1},e),e.useSharedArrayBuffer&&!mM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[ec]||(Lb(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new pe))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?rM:qb)(this,t)}traverse(t,e=0){const n=this._roots[e],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){const l=a*2,u=r[l+15]===na;if(u){const h=i[a+6],f=r[l+14];t(c,u,new Float32Array(n,a*4,6),h,f)}else{const h=a+pr/4,f=i[a+6],d=i[a+7];t(c,u,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(f,c+1))}}}raycast(t,e=wn,n=0,i=1/0){const r=this._roots,o=this.geometry,a=[],c=e.isMaterial,l=Array.isArray(e),u=o.groups,h=c?e.side:e,f=this.indirect?oM:Zb;for(let d=0,x=r.length;d<x;d++){const g=l?e[u[d].materialIndex].side:h,m=a.length;if(f(this,d,g,t,a,n,i),l){const p=u[d].materialIndex;for(let y=m,_=a.length;y<_;y++)a[y].face.materialIndex=p}}return a}raycastFirst(t,e=wn,n=0,i=1/0){const r=this._roots,o=this.geometry,a=e.isMaterial,c=Array.isArray(e);let l=null;const u=o.groups,h=a?e.side:e,f=this.indirect?cM:Jb;for(let d=0,x=r.length;d<x;d++){const g=c?e[u[d].materialIndex].side:h,m=f(this,d,g,t,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[d].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const i=this._roots,r=this.indirect?lM:Qb;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=mn.getPrimitive(),n=this.indirect?Kb:Xb;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const h=o;o=(f,d,x,g,m)=>h(f,d,x,g,m)?!0:n(f,d,this,a,x,g,e)}else o||(a?o=(h,f,d,x)=>n(h,f,this,a,d,x,e):o=(h,f,d)=>d);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(c=Bb(this,h,r,o,i,l),c)break;l+=d.byteLength}return mn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const o=mn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?x=>{const g=this.resolveTriangleIndex(x);Te(o,g*3,a,c)}:x=>{Te(o,x*3,a,c)},u=mn.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?x=>{const g=t.resolveTriangleIndex(x);Te(u,g*3,h,f)}:x=>{Te(u,x*3,h,f)};if(r){const x=(g,m,p,y,_,v,b,M)=>{for(let E=p,C=p+y;E<C;E++){d(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let T=g,S=g+m;T<S;T++)if(l(T),o.needsUpdate=!0,r(o,u,T,E,_,v,b,M))return!0}return!1};if(i){const g=i;i=function(m,p,y,_,v,b,M,E){return g(m,p,y,_,v,b,M,E)?!0:x(m,p,y,_,v,b,M,E)}}else i=x}return xM(this,t,e,i)}intersectsBox(t,e){return Co.set(t.min,t.max,e),Co.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Co.intersectsBox(n),intersectsTriangle:n=>Co.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?pM:sM)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return zb(this,t,e,n,i)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{_e(0,new Float32Array(n),Xh),t.union(Xh)}),t}}function qh(s,t,e){return s===null?null:(s.point.applyMatrix4(t.matrixWorld),s.distance=s.point.distanceTo(e.ray.origin),s.object=t,s)}const Po=new Xi,jh=new R,Yh=new St,_M=Me.prototype.raycast,vM=Kp.prototype.raycast,Kh=new R,Le=new Me,Io=[];function Kf(s,t){this.isBatchedMesh?yM.call(this,s,t):bM.call(this,s,t)}function yM(s,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Le.material=this.material,Le.geometry=this.geometry;const o=Le.geometry.boundsTree,a=Le.geometry.drawRange;Le.geometry.boundingSphere===null&&(Le.geometry.boundingSphere=new Ue);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const u=n[c].geometryIndex;if(Le.geometry.boundsTree=e[u],this.getMatrixAt(c,Le.matrixWorld).premultiply(r),!Le.geometry.boundsTree){this.getBoundingBoxAt(u,Le.geometry.boundingBox),this.getBoundingSphereAt(u,Le.geometry.boundingSphere);const h=i[u];Le.geometry.setDrawRange(h.start,h.count)}Le.raycast(s,Io);for(let h=0,f=Io.length;h<f;h++){const d=Io[h];d.object=this,d.batchId=c,t.push(d)}Io.length=0}Le.geometry.boundsTree=o,Le.geometry.drawRange=a,Le.material=null,Le.geometry=null}else vM.call(this,s,t)}function bM(s,t){if(this.geometry.boundsTree){if(this.material===void 0)return;Yh.copy(this.matrixWorld).invert(),Po.copy(s.ray).applyMatrix4(Yh),Kh.setFromMatrixScale(this.matrixWorld),jh.copy(Po.direction).multiply(Kh);const e=jh.length(),n=s.near/e,i=s.far/e,r=this.geometry.boundsTree;if(s.firstHitOnly===!0){const o=qh(r.raycastFirst(Po,this.material,n,i),this,s);o&&t.push(o)}else{const o=r.raycast(Po,this.material,n,i);for(let a=0,c=o.length;a<c;a++){const l=qh(o[a],this,s);l&&t.push(l)}}}else _M.call(this,s,t)}Me.prototype.raycast=Kf;function MM(s){const t=ki.assets.allbergs;if(!t||!t.model||!t.model.scene)return console.warn("allbergs.glb not loaded!"),[];const e=t.model.scene.clone(!0),n=[];return e.traverse(i=>{i.isMesh&&(i.geometry=i.geometry.clone(),i.material=i.material.clone(),i.material.color.multiplyScalar(1.35),i.frustumCulled=!0,i.geometry.index||(i.geometry=i.geometry.toNonIndexed()),i.geometry.computeBoundingSphere(),i.geometry.boundsTree=new sa(i.geometry,{lazyGeneration:!1}),i.userData.collisionRadius=i.geometry.boundingSphere.radius*i.scale.x,n.push(i))}),e.updateMatrixWorld(!0),e.traverse(i=>{i.matrixAutoUpdate&&(i.updateMatrix(),i.matrixAutoUpdate=!1)}),s.add(e),n}Me.prototype.raycast=Kf;function SM(s,t){const n=ki.assets.boatModel.model.scene.clone(),i=ki.assets.matcap.texture;n.traverse(o=>{o.isMesh&&(o.material=new Cf({matcap:i,color:16777215}),o.geometry=o.geometry.clone(),o.geometry.index||(o.geometry=o.geometry.toNonIndexed()),o.geometry.computeBoundingSphere(),o.geometry.boundsTree=new sa(o.geometry,{lazyGeneration:!1}))}),n.scale.set(10,10,10),n.position.set(0,1.69,0),s.add(n);const r=[];return n.traverse(o=>{o.isMesh&&r.push(o)}),n.userData={currentVelocity:new R,impulses:[],angularVelocity:0,angularEnd:0,angularTarget:0,meshes:r},n}function TM(s,t,e=2500,n=4e3){const i=Date.now(),r=t.clone().multiplyScalar(e/(n/1e3));s.userData.impulses.push({v:r,start:i,end:i+n})}function EM(s,t,e=[]){const n=s.userData,i=n.currentVelocity,r=new R,o=Date.now(),a=[];for(const m of n.impulses){const p=m.end-m.start,y=Math.max(0,(m.end-o)/p);y>0&&(r.add(m.v.clone().multiplyScalar(y)),a.push(m))}n.impulses=a;const c=6,l=r.clone().sub(i),u=l.length();if(u>1e-4){const m=c*t;u<m?i.copy(r):i.add(l.normalize().multiplyScalar(m))}s.position.add(i.clone().multiplyScalar(t));const h=new R,f=new R,d=new gn;for(const m of n.meshes)m.userData.hitboxMesh&&(m.userData.hitboxMesh.position.copy(m.getWorldPosition(h)),m.userData.hitboxMesh.quaternion.copy(m.getWorldQuaternion(d)),m.userData.hitboxMesh.scale.copy(m.getWorldScale(f)));wM(s,e,t);const x=.05,g=.95;n.angularVelocity+=(n.angularTarget-n.angularVelocity)*x,n.angularVelocity*=g,Math.abs(n.angularVelocity)<5e-4&&(n.angularVelocity=0),s.rotation.y+=n.angularVelocity*t,n.angularTarget*=g}function AM(s,t,e){if(!e.sinkingStarted)return;const n=Tr.clamp(Tr.mapLinear(e.timeLeft,8,0,0,1),0,1),i=5;s.position.y=t-n*i,e.timeLeft<=0&&(e.sinkingStarted=!1,e.timeLeft=0);const r=new R,o=new R,a=new gn;for(const c of s.userData.meshes)c.userData.hitboxMesh&&(c.userData.hitboxMesh.position.copy(c.getWorldPosition(r)),c.userData.hitboxMesh.quaternion.copy(c.getWorldQuaternion(a)),c.userData.hitboxMesh.scale.copy(c.getWorldScale(o)))}function wM(s,t,e){const n=new R,i=new R,r=s.userData.currentVelocity.clone().multiplyScalar(e);for(const o of s.userData.meshes){if(!o.geometry.boundsTree)continue;const a=o.geometry.boundingSphere.radius*o.scale.x,c=o.getWorldPosition(i),l=Math.ceil(r.length()/(a*.05)),u=r.clone().divideScalar(l);for(const h of t){if(!h.geometry.boundsTree)continue;let f=!1;for(let d=0;d<=l;d++){const g=c.clone().add(u.clone().multiplyScalar(d)).clone();h.worldToLocal(g);const m=new Ue(g,a);if(h.geometry.boundsTree.shapecast({intersectsBounds:p=>p.intersectsSphere(m),intersectsTriangle:p=>{const y=p.closestPointToPoint(g,n);if(y.distanceTo(g)<a){const v=g.clone().sub(y);v.y=0;const b=v.length(),M=v.clone().normalize();s.position.add(M.clone().multiplyScalar(b+.01));const E=s.userData.currentVelocity,C=E.clone();C.y=0;const T=C.dot(M);return T<0&&E.addScaledVector(M,-1.5*T),E.multiplyScalar(.7),s.userData.angularVelocity+=(Math.random()-.5)*.1,f=!0,!0}return!1}}),f)break}}}}function RM(){const s=[];for(let n=0;n<=64;n++){const i=n/64*Math.PI*2;s.push(Math.cos(i),0,Math.sin(i))}const e=new we;return e.setAttribute("position",new Ae(s,3)),e}function CM(s,t,e,n,i,r){const o=new Ts({color:16777215,transparent:!0,opacity:1}),a=new $o(e.clone(),o),c=(i?i.position.y:0)+9e-4;a.position.set(n.x,c,n.z),a.scale.set(.001,1,.001),s.add(a),t.push({start:performance.now(),center:new R(n.x,c,n.z),speed:3,life:3.8,maxRadius:12,ring:a,triggered:!1,triggersMovement:r})}function PM(s,t,e){const n=performance.now();for(let i=t.length-1;i>=0;i--){const r=t[i],o=(n-r.start)*.001,a=o*r.speed;if(r.ring.scale.set(a,1,a),r.ring.material.opacity=Math.max(0,1-o/r.life),e&&r.triggersMovement&&!r.triggered){const c=new R;e.getWorldPosition(c);const l=c.x-r.center.x,u=c.z-r.center.z;if(Math.hypot(l,u)<=a){r.triggered=!0;const f=new R(l,0,u);f.lengthSq()<1e-6&&f.set(1,0,0),f.normalize(),TM(e,f,25,4e3);const d=new R;e.getWorldDirection(d),d.y=0,d.normalize();const x=d.dot(f),g=d.x*f.z-d.z*f.x,m=Math.atan2(g,x);e.userData.angularTarget+=Tr.clamp(m*.6,-1,1),e.userData.angularEnd=Date.now()+1500}}(a>r.maxRadius||o>r.life)&&(s.remove(r.ring),r.ring.geometry.dispose(),r.ring.material.dispose(),t.splice(i,1))}}class IM{constructor(){this.canvas=document.querySelector(".scene"),this.clock=new $m,this.ripples=[],this.unitCircleGeom=RM(),this.stars=[],this.starMatcap=null,this.starBoundingSphere=new Ue(new R,4),this.currentScore=0,this.highscore=0,this._boatInitial={position:new R(0,1.69,0),scale:10},this.init()}async init(){await ki.load([{name:"waterdudv",texture:"textures/waterdudv.jpg"},{name:"matcap",texture:"textures/matcap.png"},{name:"boatModel",model:"models/boat.glb"},{name:"star",model:"models/star.glb"},{name:"allbergs",model:"models/allbergs.glb"}]),this.stats=new gy,document.body.appendChild(this.stats.dom);try{const t=localStorage.getItem("atr_highscore");t!==null&&(this.highscore=parseInt(t,10)||0)}catch(t){console.warn("localStorage unavailable",t)}this.initTimer(),this.scene=new Dp,this.scene.background=new Mt(0),this.renderer=new Jv({canvas:this.canvas,antialias:!0}),this.camera=new Be(60,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.set(20,50,50),this.scene.add(this.camera),this.controls=new ty(this.camera,this.renderer.domElement),this.controls.maxPolarAngle=Math.PI/2,this.addLights(),await this.loadStarModel(),this.groundMirror=pb(this.scene),this.boat=SM(this.scene,this.groundMirror),this.icebergs=MM(this.scene),this.createSky(),this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),this.renderer.domElement.addEventListener("pointerdown",t=>this.onPointerDown(t)),this.createScoreUI(),this.createStar(),this.draw()}async loadStarModel(){const t=ki.get("star");this.starPrefab=t?.model?.scene||t?.model?.scenes?.[0]||null;const e=ki.get("matcap");this.starMatcap=e?.texture||e||null}createStar(){if(!this.starPrefab)return null;const t=this.starPrefab.clone(!0),e=10;return t.userData.baseScale=e,t.scale.set(e,e,e),t.userData.spinSpeed=.8,t.userData.pulse=!0,t.userData.pulseT=Math.random()*Math.PI*2,t.traverse(n=>{n.isMesh&&(n.material=new Cf({matcap:this.starMatcap||void 0,color:16777164}))}),this.placeStarRandom(t),this.scene.add(t),this.stars.push(t),t}isInsideIceberg(t){if(!this.icebergs)return!1;const e=new R;for(const n of this.icebergs){n.boundingSphere||(n.geometry.computeBoundingSphere(),n.boundingSphere=n.geometry.boundingSphere.clone()),e.copy(n.boundingSphere.center).applyMatrix4(n.matrixWorld);const i=n.boundingSphere.radius*n.scale.x;if(e.distanceTo(t)<i+5)return!0}return!1}placeStarRandom(t,e=300,n=150){if(!this.boat){t.position.set(Math.random()*100-50,1,Math.random()*100-50);return}const i=5;let r=0;for(;r<50;){const o=Math.random()*Math.PI*2,a=Math.random()*(e-n)+n,c=this.boat.position.x+Math.cos(o)*a,l=this.boat.position.z+Math.sin(o)*a,u=new R(c,i,l);if(!this.isInsideIceberg(u)){t.position.copy(u);return}r++}t.position.set(this.boat.position.x+200,i,this.boat.position.z)}checkStarCollision(t){if(this.boat)for(let e=this.stars.length-1;e>=0;e--){const n=this.stars[e];if(this.starBoundingSphere.center.copy(n.position),this.starBoundingSphere.distanceToPoint(this.boat.position)<5){if(this.currentScore+=1,this.currentScore>this.highscore){this.highscore=this.currentScore;try{localStorage.setItem("atr_highscore",String(this.highscore))}catch{}}this.updateScoreUI(),this.timeLeft=this.timerDuration,this.boat.position.y=this._boatInitial.position.y,this.sinkingStarted=!1,this.sinkStartY=null,this.placeStarRandom(n)}}}updateStars(t){for(const e of this.stars)if(e.rotation.y+=e.userData.spinSpeed*t,e.userData.pulse){e.userData.pulseT+=t*2.5;const n=e.userData.baseScale*(1+Math.sin(e.userData.pulseT)*.2);e.scale.set(n,n,n)}}initTimer(){this.timerDuration=60,this.timeLeft=60,this.sinkingStarted=!1,this.sinkStartY=null,this.createTimerUI()}updateTimer(t){if(this.timeLeft<=0)return;this.timeLeft-=t,this.timeLeft<0&&(this.timeLeft=0);const e=this.timeLeft/this.timerDuration*100;if(this.timerBar.style.width=e+"%",this.timeLeft<=10?this.timerBar.style.background="#ff3b3b":this.timeLeft<=20?this.timerBar.style.background="#ff9800":this.timerBar.style.background="#4caf50",this.timeLeft<=10&&!this.sinkingStarted){this.sinkingStarted=!0,this.sinkStartY=this.boat.position.y;try{const n=parseInt(localStorage.getItem("atr_highscore")||"0",10);this.highscore>n&&localStorage.setItem("atr_highscore",String(this.highscore))}catch{}this.updateScoreUI()}}createTimerUI(){this.timerContainer=document.createElement("div"),this.timerContainer.id="timerBarContainer",document.body.appendChild(this.timerContainer),this.timerBar=document.createElement("div"),this.timerBar.id="timerBar",this.timerContainer.appendChild(this.timerBar);const t=document.createElement("style");t.innerHTML=`
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
    `,document.head.appendChild(t)}createScoreUI(){const t=document.getElementById("atr_score_ui");t&&t.remove();const e=document.createElement("div");e.id="atr_score_ui";const n=document.createElement("div");n.className="col";const i=document.createElement("div");i.className="label",i.innerText="Current Stars";const r=document.createElement("div");r.className="value",r.id="atr_current_value",r.innerText=String(this.currentScore),n.appendChild(i),n.appendChild(r);const o=document.createElement("div");o.className="col";const a=document.createElement("div");a.className="label",a.innerText="Highscore";const c=document.createElement("div");c.className="value",c.id="atr_high_value",c.innerText=String(this.highscore),o.appendChild(a),o.appendChild(c),e.appendChild(n),e.appendChild(o),document.body.appendChild(e);const l=document.createElement("div");l.id="atr_controls";const u=document.createElement("button");u.className="atr_button",u.innerText="Redo",u.addEventListener("click",()=>this.redoGame()),l.appendChild(u);const h=document.createElement("button");h.className="atr_button",h.innerText="Reset Highscore",h.addEventListener("click",()=>{this.highscore=0;try{localStorage.setItem("atr_highscore","0")}catch{}this.updateScoreUI()}),l.appendChild(h),document.body.appendChild(l),this.updateScoreUI()}updateScoreUI(){const t=document.getElementById("atr_current_value"),e=document.getElementById("atr_high_value");t&&(t.innerText=String(this.currentScore)),e&&(e.innerText=String(this.highscore))}redoGame(){if(this.currentScore=0,this.timeLeft=this.timerDuration,this.sinkingStarted=!1,this.sinkStartY=null,this.timerBar&&(this.timerBar.style.background="#4caf50",this.timerBar.style.width="100%"),this.controls&&(this.boat.position.x=this._boatInitial.position.x,this.boat.position.y=this._boatInitial.position.y,this.boat.position.z=this._boatInitial.position.z,this.controls.update()),this.stars&&this.stars.length>0)try{this.placeStarRandom(this.stars[0])}catch{}this.updateScoreUI()}addLights(){const t=new Uf(16777215,0);this.scene.add(t);const e=new Ym(6710886);this.scene.add(e)}createSky(){const t=new we,e=[],n=2e3,i=4e3;for(let o=0;o<n;o++){const a=Math.random(),c=Math.random(),l=2*Math.PI*a,u=Math.acos(2*c-1),h=Math.sin(u)*Math.cos(l),f=Math.sin(u)*Math.sin(l),d=Math.cos(u);e.push(h*i,f*i,d*i)}t.setAttribute("position",new ve(new Float32Array(e),3));const r=new zi({color:16777215,size:1,sizeAttenuation:!0,depthWrite:!1});this.sky=new ur(t,r),this.sky.frustumCulled=!1,this.scene.add(this.sky)}onPointerDown(t){if(t.button!==0)return;const e=this.renderer.domElement.getBoundingClientRect(),n={x:(t.clientX-e.left)/e.width*2-1,y:-((t.clientY-e.top)/e.height*2-1)},i=new a0;i.setFromCamera(n,this.camera);const r=i.ray.origin,o=i.ray.direction;if(Math.abs(o.y)<1e-6)return;const a=(0-r.y)/o.y;if(a<=0)return;const c=r.clone().add(o.clone().multiplyScalar(a));CM(this.scene,this.ripples,this.unitCircleGeom,c,this.groundMirror,!0)}handleResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(window.devicePixelRatio||1)}draw=()=>{this.stats.begin();const t=this.clock.getDelta();this.updateTimer(t),AM(this.boat,this.sinkStartY,this),this.groundMirror.material.uniforms.time.value+=.7,PM(this.scene,this.ripples,this.boat),EM(this.boat,t,this.icebergs),this.controls.target.copy(this.boat.position),this.controls.target.y+=5,this.controls.update(),this.sky.position.copy(this.camera.position),this.groundMirror.position.copy(this.camera.position),this.groundMirror.position.y=0,this.updateStars(t),this.checkStarCollision(t),this.renderer.render(this.scene,this.camera),this.stats.end(),requestAnimationFrame(this.draw)}}new IM;
