import{ae as pe,a2 as ae,a0 as be,H as xe,af as _e,ag as Ee}from"./DocsRenderer-CFRXHY34-VmAN3iBv.js";import{g as ye,R as c,r as h}from"./index-CTjT7uj6.js";import{T as $}from"./index-CwFsC-Nm.js";import{c as y}from"./index-DHSEDKkq.js";import{_ as we,i as oe}from"./_baseIsEqual-CcvNbvPI.js";import"./iframe-B44tCdH4.js";import"../sb-preview/runtime.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-BbmHap-z.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-BSDNMsTW.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./react-18-DrYoX0Ry.js";var Ce=we,ke=function(){return Ce.Date.now()},$e=ke,Ne=/\s/;function Ie(e){for(var r=e.length;r--&&Ne.test(e.charAt(r)););return r}var Me=Ie,Se=Me,Re=/^\s+/;function Oe(e){return e&&e.slice(0,Se(e)+1).replace(Re,"")}var He=Oe,Te=He,Y=oe,Le=pe,J=NaN,Pe=/^[-+]0x[0-9a-f]+$/i,ze=/^0b[01]+$/i,Be=/^0o[0-7]+$/i,je=parseInt;function Xe(e){if(typeof e=="number")return e;if(Le(e))return J;if(Y(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Y(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Te(e);var t=ze.test(e);return t||Be.test(e)?je(e.slice(2),t?2:8):Pe.test(e)?J:+e}var We=Xe,De=oe,X=$e,Q=We,Ve="Expected a function",Ae=Math.max,Fe=Math.min;function Ge(e,r,t){var n,a,i,l,o,u,s=0,m=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(Ve);r=Q(r)||0,De(t)&&(m=!!t.leading,d="maxWait"in t,i=d?Ae(Q(t.maxWait)||0,r):i,f="trailing"in t?!!t.trailing:f);function x(v){var k=n,O=a;return n=a=void 0,s=v,l=e.apply(O,k),l}function R(v){return s=v,o=setTimeout(g,r),m?x(v):l}function C(v){var k=v-u,O=v-s,U=r-k;return d?Fe(U,i-O):U}function p(v){var k=v-u,O=v-s;return u===void 0||k>=r||k<0||d&&O>=i}function g(){var v=X();if(p(v))return _(v);o=setTimeout(g,C(v))}function _(v){return o=void 0,f&&n?x(v):(n=a=void 0,l)}function w(){o!==void 0&&clearTimeout(o),s=0,n=u=a=o=void 0}function E(){return o===void 0?l:_(X())}function N(){var v=X(),k=p(v);if(n=arguments,a=this,u=v,k){if(o===void 0)return R(u);if(d)return clearTimeout(o),o=setTimeout(g,r),x(u)}return o===void 0&&(o=setTimeout(g,r)),l}return N.cancel=w,N.flush=E,N}var Ke=Ge;const qe=ye(Ke);function I(){return(I=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function G(e,r){if(e==null)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(a[t]=e[t]);return a}function W(e){var r=h.useRef(e),t=h.useRef(function(n){r.current&&r.current(n)});return r.current=e,t.current}var S=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=1),e>t?t:e<r?r:e},H=function(e){return"touches"in e},D=function(e){return e&&e.ownerDocument.defaultView||self},Z=function(e,r,t){var n=e.getBoundingClientRect(),a=H(r)?function(i,l){for(var o=0;o<i.length;o++)if(i[o].identifier===l)return i[o];return i[0]}(r.touches,t):r;return{left:S((a.pageX-(n.left+D(e).pageXOffset))/n.width),top:S((a.pageY-(n.top+D(e).pageYOffset))/n.height)}},ee=function(e){!H(e)&&e.preventDefault()},K=c.memo(function(e){var r=e.onMove,t=e.onKey,n=G(e,["onMove","onKey"]),a=h.useRef(null),i=W(r),l=W(t),o=h.useRef(null),u=h.useRef(!1),s=h.useMemo(function(){var x=function(p){ee(p),(H(p)?p.touches.length>0:p.buttons>0)&&a.current?i(Z(a.current,p,o.current)):C(!1)},R=function(){return C(!1)};function C(p){var g=u.current,_=D(a.current),w=p?_.addEventListener:_.removeEventListener;w(g?"touchmove":"mousemove",x),w(g?"touchend":"mouseup",R)}return[function(p){var g=p.nativeEvent,_=a.current;if(_&&(ee(g),!function(E,N){return N&&!H(E)}(g,u.current)&&_)){if(H(g)){u.current=!0;var w=g.changedTouches||[];w.length&&(o.current=w[0].identifier)}_.focus(),i(Z(_,g,o.current)),C(!0)}},function(p){var g=p.which||p.keyCode;g<37||g>40||(p.preventDefault(),l({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},C]},[l,i]),m=s[0],d=s[1],f=s[2];return h.useEffect(function(){return f},[f]),c.createElement("div",I({},n,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:a,onKeyDown:d,tabIndex:0,role:"slider"}))}),T=function(e){return e.filter(Boolean).join(" ")},q=function(e){var r=e.color,t=e.left,n=e.top,a=n===void 0?.5:n,i=T(["react-colorful__pointer",e.className]);return c.createElement("div",{className:i,style:{top:100*a+"%",left:100*t+"%"}},c.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},b=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=Math.pow(10,r)),Math.round(t*e)/t},Ue={grad:.9,turn:360,rad:360/(2*Math.PI)},Ye=function(e){return ue(V(e))},V=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?b(parseInt(e.substring(6,8),16)/255,2):1}},Je=function(e,r){return r===void 0&&(r="deg"),Number(e)*(Ue[r]||1)},Qe=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?Ze({h:Je(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ze=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},er=function(e){return tr(le(e))},ie=function(e){var r=e.s,t=e.v,n=e.a,a=(200-r)*t/100;return{h:b(e.h),s:b(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:b(a/2),a:b(n,2)}},A=function(e){var r=ie(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},B=function(e){var r=ie(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},le=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var i=Math.floor(r),l=n*(1-t),o=n*(1-(r-i)*t),u=n*(1-(1-r+i)*t),s=i%6;return{r:b(255*[n,o,l,l,u,n][s]),g:b(255*[u,n,n,o,l,l][s]),b:b(255*[l,l,u,n,n,o][s]),a:b(a,2)}},rr=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?ue({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},L=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},tr=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,i=a<1?L(b(255*a)):"";return"#"+L(r)+L(t)+L(n)+i},ue=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,i=Math.max(r,t,n),l=i-Math.min(r,t,n),o=l?i===r?(t-n)/l:i===t?2+(n-r)/l:4+(r-t)/l:0;return{h:b(60*(o<0?o+6:o)),s:b(i?l/i*100:0),v:b(i/255*100),a}},se=c.memo(function(e){var r=e.hue,t=e.onChange,n=T(["react-colorful__hue",e.className]);return c.createElement("div",{className:n},c.createElement(K,{onMove:function(a){t({h:360*a.left})},onKey:function(a){t({h:S(r+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(r),"aria-valuemax":"360","aria-valuemin":"0"},c.createElement(q,{className:"react-colorful__hue-pointer",left:r/360,color:A({h:r,s:100,v:100,a:1})})))}),ce=c.memo(function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:A({h:r.h,s:100,v:100,a:1})};return c.createElement("div",{className:"react-colorful__saturation",style:n},c.createElement(K,{onMove:function(a){t({s:100*a.left,v:100-100*a.top})},onKey:function(a){t({s:S(r.s+100*a.left,0,100),v:S(r.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(r.s)+"%, Brightness "+b(r.v)+"%"},c.createElement(q,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:A(r)})))}),fe=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},de=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},nr=function(e,r){return e.toLowerCase()===r.toLowerCase()||fe(V(e),V(r))};function he(e,r,t){var n=W(t),a=h.useState(function(){return e.toHsva(r)}),i=a[0],l=a[1],o=h.useRef({color:r,hsva:i});h.useEffect(function(){if(!e.equal(r,o.current.color)){var s=e.toHsva(r);o.current={hsva:s,color:r},l(s)}},[r,e]),h.useEffect(function(){var s;fe(i,o.current.hsva)||e.equal(s=e.fromHsva(i),o.current.color)||(o.current={hsva:i,color:s},n(s))},[i,e,n]);var u=h.useCallback(function(s){l(function(m){return Object.assign({},m,s)})},[]);return[i,u]}var ar=typeof window<"u"?h.useLayoutEffect:h.useEffect,or=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},re=new Map,me=function(e){ar(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!re.has(r)){var t=r.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,re.set(r,t);var n=or();n&&t.setAttribute("nonce",n),r.head.appendChild(t)}},[])},ir=function(e){var r=e.className,t=e.colorModel,n=e.color,a=n===void 0?t.defaultColor:n,i=e.onChange,l=G(e,["className","colorModel","color","onChange"]),o=h.useRef(null);me(o);var u=he(t,a,i),s=u[0],m=u[1],d=T(["react-colorful",r]);return c.createElement("div",I({},l,{ref:o,className:d}),c.createElement(ce,{hsva:s,onChange:m}),c.createElement(se,{hue:s.h,onChange:m,className:"react-colorful__last-control"}))},lr={defaultColor:"000",toHsva:Ye,fromHsva:function(e){return er({h:e.h,s:e.s,v:e.v,a:1})},equal:nr},ur=function(e){return c.createElement(ir,I({},e,{colorModel:lr}))},sr=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+B(Object.assign({},t,{a:0}))+", "+B(Object.assign({},t,{a:1}))+")"},i=T(["react-colorful__alpha",r]),l=b(100*t.a);return c.createElement("div",{className:i},c.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),c.createElement(K,{onMove:function(o){n({a:o.left})},onKey:function(o){n({a:S(t.a+o.left)})},"aria-label":"Alpha","aria-valuetext":l+"%","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"},c.createElement(q,{className:"react-colorful__alpha-pointer",left:t.a,color:B(t)})))},ge=function(e){var r=e.className,t=e.colorModel,n=e.color,a=n===void 0?t.defaultColor:n,i=e.onChange,l=G(e,["className","colorModel","color","onChange"]),o=h.useRef(null);me(o);var u=he(t,a,i),s=u[0],m=u[1],d=T(["react-colorful",r]);return c.createElement("div",I({},l,{ref:o,className:d}),c.createElement(ce,{hsva:s,onChange:m}),c.createElement(se,{hue:s.h,onChange:m}),c.createElement(sr,{hsva:s,onChange:m,className:"react-colorful__last-control"}))},cr={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Qe,fromHsva:B,equal:de},fr=function(e){return c.createElement(ge,I({},e,{colorModel:cr}))},dr={defaultColor:"rgba(0, 0, 0, 1)",toHsva:rr,fromHsva:function(e){var r=le(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:de},hr=function(e){return c.createElement(ge,I({},e,{colorModel:dr}))},mr=$.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),gr=$(ae)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),vr=$.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),pr=$(be)(({theme:e})=>({fontFamily:e.typography.fonts.base})),br=$.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),xr=$.div(({theme:e,active:r})=>({width:16,height:16,boxShadow:r?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),_r=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,te=({value:e,style:r,...t})=>{let n=`linear-gradient(${e}, ${e}), ${_r}, linear-gradient(#fff, #fff)`;return c.createElement(xr,{...t,style:{...r,backgroundImage:n}})},Er=$(xe.Input)(({theme:e,readOnly:r})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),yr=$(_e)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),ve=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(ve||{}),P=Object.values(ve),wr=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Cr=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,kr=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,F=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,$r=/^\s*#?([0-9a-f]{3})\s*$/i,Nr={hex:ur,rgb:hr,hsl:fr},z={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ne=e=>{let r=e==null?void 0:e.match(wr);if(!r)return[0,0,0,1];let[,t,n,a,i=1]=r;return[t,n,a,i].map(Number)},M=e=>{if(!e)return;let r=!0;if(Cr.test(e)){let[l,o,u,s]=ne(e),[m,d,f]=y.rgb.hsl([l,o,u])||[0,0,0];return{valid:r,value:e,keyword:y.rgb.keyword([l,o,u]),colorSpace:"rgb",rgb:e,hsl:`hsla(${m}, ${d}%, ${f}%, ${s})`,hex:`#${y.rgb.hex([l,o,u]).toLowerCase()}`}}if(kr.test(e)){let[l,o,u,s]=ne(e),[m,d,f]=y.hsl.rgb([l,o,u])||[0,0,0];return{valid:r,value:e,keyword:y.hsl.keyword([l,o,u]),colorSpace:"hsl",rgb:`rgba(${m}, ${d}, ${f}, ${s})`,hsl:e,hex:`#${y.hsl.hex([l,o,u]).toLowerCase()}`}}let t=e.replace("#",""),n=y.keyword.rgb(t)||y.hex.rgb(t),a=y.rgb.hsl(n),i=e;if(/[^#a-f0-9]/i.test(e)?i=t:F.test(e)&&(i=`#${t}`),i.startsWith("#"))r=F.test(i);else try{y.keyword.hex(i)}catch{r=!1}return{valid:r,value:i,keyword:y.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:i}},Ir=(e,r,t)=>{if(!e||!(r!=null&&r.valid))return z[t];if(t!=="hex")return(r==null?void 0:r[t])||z[t];if(!r.hex.startsWith("#"))try{return`#${y.keyword.hex(r.hex)}`}catch{return z.hex}let n=r.hex.match($r);if(!n)return F.test(r.hex)?r.hex:z.hex;let[a,i,l]=n[1].split("");return`#${a}${a}${i}${i}${l}${l}`},Mr=(e,r)=>{let[t,n]=h.useState(e||""),[a,i]=h.useState(()=>M(t)),[l,o]=h.useState((a==null?void 0:a.colorSpace)||"hex");h.useEffect(()=>{let d=e||"",f=M(d);n(d),i(f),o((f==null?void 0:f.colorSpace)||"hex")},[e]);let u=h.useMemo(()=>Ir(t,a,l).toLowerCase(),[t,a,l]),s=h.useCallback(d=>{let f=M(d),x=(f==null?void 0:f.value)||d||"";n(x),x===""&&(i(void 0),r(void 0)),f&&(i(f),o(f.colorSpace),r(f.value))},[r]),m=h.useCallback(()=>{let d=P.indexOf(l)+1;d>=P.length&&(d=0),o(P[d]);let f=(a==null?void 0:a[P[d]])||"";n(f),r(f)},[a,l,r]);return{value:t,realValue:u,updateValue:s,color:a,colorSpace:l,cycleColorSpace:m}},j=e=>e.replace(/\s*/,"").toLowerCase(),Sr=(e,r,t)=>{let[n,a]=h.useState(r!=null&&r.valid?[r]:[]);h.useEffect(()=>{r===void 0&&a([])},[r]);let i=h.useMemo(()=>(e||[]).map(o=>typeof o=="string"?M(o):o.title?{...M(o.color),keyword:o.title}:M(o.color)).concat(n).filter(Boolean).slice(-27),[e,n]),l=h.useCallback(o=>{o!=null&&o.valid&&(i.some(u=>j(u[t])===j(o[t]))||a(u=>u.concat(o)))},[t,i]);return{presets:i,addPreset:l}},Rr=({name:e,value:r,onChange:t,onFocus:n,onBlur:a,presetColors:i,startOpen:l=!1,argType:o})=>{var w;let u=h.useCallback(qe(t,200),[t]),{value:s,realValue:m,updateValue:d,color:f,colorSpace:x,cycleColorSpace:R}=Mr(r,u),{presets:C,addPreset:p}=Sr(i,f,x),g=Nr[x],_=!!((w=o==null?void 0:o.table)!=null&&w.readonly);return c.createElement(mr,{"aria-readonly":_},c.createElement(gr,{startOpen:l,trigger:_?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>p(f),tooltip:c.createElement(vr,null,c.createElement(g,{color:m==="transparent"?"#000000":m,onChange:d,onFocus:n,onBlur:a}),C.length>0&&c.createElement(br,null,C.map((E,N)=>c.createElement(ae,{key:`${E.value}-${N}`,hasChrome:!1,tooltip:c.createElement(pr,{note:E.keyword||E.value})},c.createElement(te,{value:E[x],active:f&&j(E[x])===j(f[x]),onClick:()=>d(E.value)})))))},c.createElement(te,{value:m,style:{margin:4}})),c.createElement(Er,{id:Ee(e),value:s,onChange:E=>d(E.target.value),onFocus:E=>E.target.select(),readOnly:_,placeholder:"Choose color..."}),s?c.createElement(yr,{onClick:R}):null)},Gr=Rr;export{Rr as ColorControl,Gr as default};
