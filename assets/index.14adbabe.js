const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};ge();const x={},pe=(e,t)=>e===t,me=Symbol("solid-proxy"),J={equals:pe};let ye=re;const j={},A=1,F=2,ie={owned:null,cleanups:null,context:null,owner:null};var g=null;let O=null,d=null,T=null,h=null,y=null,K=0;function be(e,t){const n=d,s=g,i=e.length===0,l=i?ie:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>z(l));g=l,d=null;try{return V(o,!0)}finally{d=n,g=s}}function we(e,t,n){const s=R(e,t,!0,A);k(s)}function E(e,t,n){const s=R(e,t,!1,A);k(s)}function X(e,t,n){n=n?Object.assign({},J,n):J;const s=R(e,t,!0,0);return s.pending=j,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,k(s),Ce.bind(s)}function xe(e){if(T)return e();let t;const n=T=[];try{t=e()}finally{T=null}return V(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==j){const l=i.pending;i.pending=j,le(i,l)}}},!1),t}function D(e){let t,n=d;return d=null,t=e(),d=n,t}function Se(e){const t=Symbol("context");return{id:t,Provider:Le(t),defaultValue:e}}function Ne(e){let t;return(t=fe(g,e.id))!==void 0?t:e.defaultValue}function Ae(e){const t=X(e);return X(()=>q(t()))}function Ce(){const e=O;if(this.sources&&(this.state||e)){const t=h;h=null,this.state===A||e?k(this):M(this),h=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function le(e,t,n){if(T)return e.pending===j&&T.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&V(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&O.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?h.push(l):y.push(l),l.observers&&ce(l)),s||(l.state=A)}if(h.length>1e6)throw h=[],new Error},!1),t}function k(e){if(!e.fn)return;z(e);const t=g,n=d,s=K;d=g=e,Ee(e,e.value,s),d=n,g=t}function Ee(e,t,n){let s;try{s=e.fn(t)}catch(i){ue(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?le(e,s):e.value=s,e.updatedAt=n)}function R(e,t,n,s=A,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==ie&&(g.owned?g.owned.push(l):g.owned=[l]),l}function oe(e){const t=O;if(e.state===0||t)return;if(e.state===F||t)return M(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===A||t)k(e);else if(e.state===F||t){const i=h;h=null,M(e,n[0]),h=i}}function V(e,t){if(h)return e();let n=!1;t||(h=[]),y?n=!0:y=[],K++;try{const s=e();return $e(n),s}catch(s){ue(s)}finally{h=null,n||(y=null)}}function $e(e){h&&(re(h),h=null),!e&&(y.length?xe(()=>{ye(y),y=null}):y=null)}function re(e){for(let t=0;t<e.length;t++)oe(e[t])}function M(e,t){const n=O;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===A||n?i!==t&&oe(i):(i.state===F||n)&&M(i,t))}}function ce(e){const t=O;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=F,s.pure?h.push(s):y.push(s),s.observers&&ce(s))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ue(e){throw e}function fe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:fe(e.owner,t):void 0}function q(e){if(typeof e=="function"&&!e.length)return q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=q(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Le(e){return function(n){let s;return we(()=>s=D(()=>(g.context={[e]:n.value},Ae(()=>n.children)))),s}}function p(e,t){return D(()=>e(t||{}))}function _(){return!0}const ae={get(e,t,n){return t===me?n:e.get(t)},has(e,t){return e.has(t)},set:_,deleteProperty:_,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:_,deleteProperty:_}},ownKeys(e){return e.keys()}};function B(e){return(e=typeof e=="function"?e():e)==null?{}:e}function G(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=B(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in B(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(B(e[n])));return[...new Set(t)]}},ae)}function Pe(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),i=t.map(l=>{const o={};for(let r=0;r<l.length;r++){const c=l[r];Object.defineProperty(o,c,s[c]?s[c]:{get(){return e[c]},set(){return!0}})}return o});return i.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},ae)),i}const Te=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Oe=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Te]),ke=new Set(["innerHTML","textContent","innerText","children"]),_e={className:"class",htmlFor:"for"},W={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},je=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Fe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Me(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,c=t[i-1].nextSibling,u=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const f=l<s?r?n[r-1].nextSibling:n[l-r]:c;for(;r<l;)e.insertBefore(n[r++],f)}else if(l===r)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!u){u=new Map;let a=r;for(;a<l;)u.set(n[a],a++)}const f=u.get(t[o]);if(f!=null)if(r<f&&f<l){let a=o,w=1,L;for(;++a<i&&a<l&&!((L=u.get(t[a]))==null||L!==f+w);)w++;if(w>f-r){const I=t[o];for(;r<f;)e.insertBefore(n[r++],I)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Q="_$DX_DELEGATE";function ve(e,t,n){let s;return be(i=>{s=i,t===document?e():m(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function b(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function De(e,t=window.document){const n=t[Q]||(t[Q]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Je))}}function Ie(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Be(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function He(e,t){t==null?e.removeAttribute("class"):e.className=t}function qe(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function Ue(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,o;for(l=0,o=i.length;l<o;l++){const r=i[l];!r||r==="undefined"||t[r]||(Y(e,r,!1),delete n[r])}for(l=0,o=s.length;l<o;l++){const r=s[l],c=!!t[r];!r||r==="undefined"||n[r]===c||!c||(Y(e,r,!0),n[r]=c)}return n}function Ke(e,t,n={}){const s=e.style,i=typeof n=="string";if(t==null&&i||typeof t=="string")return s.cssText=t;i&&(s.cssText=void 0,n={}),t||(t={});let l,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)l=t[o],l!==n[o]&&(s.setProperty(o,l),n[o]=l);return n}function Re(e,t,n,s){typeof t=="function"?E(i=>ee(e,t(),i,n,s)):ee(e,t,void 0,n,s)}function m(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return $(e,t,s,n);E(i=>$(e,t(),i,n),s)}function Ve(e,t,n,s,i={},l=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;Z(e,o,null,i[o],n,l)}for(const o in t){if(o==="children"){s||$(e,t.children);continue}const r=t[o];i[o]=Z(e,o,r,i[o],n,l)}}function ze(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Y(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function Z(e,t,n,s,i,l){let o,r,c;if(t==="style")return Ke(e,n,s);if(t==="classList")return Ue(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),f=je.has(u);if(!f&&s){const a=Array.isArray(s)?s[0]:s;e.removeEventListener(u,a)}(f||n)&&(qe(e,u,n,f),f&&De([u]))}else if((c=ke.has(t))||!i&&(W[t]||(r=Oe.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?He(e,n):o&&!r&&!c?e[ze(t)]=n:e[W[t]||t]=n;else{const u=i&&t.indexOf(":")>-1&&Fe[t.split(":")[0]];u?Be(e,u,t,n):Ie(e,_e[t]||t,n)}return n}function Je(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ee(e,t,n={},s,i){return t||(t={}),!i&&"children"in t&&E(()=>n.children=$(e,t.children,n.children)),t.ref&&t.ref(e),E(()=>Ve(e,t,s,!0,n,!0)),n}function $(e,t,n,s,i){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(x.context)return n;if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=C(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(x.context)return n;n=C(e,n,s)}else{if(l==="function")return E(()=>{let r=t();for(;typeof r=="function";)r=r();n=$(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[];if(U(r,t,i))return E(()=>n=$(e,r,n,s,!0)),()=>n;if(x.context){for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=C(e,n,s),o)return n}else Array.isArray(n)?n.length===0?te(e,r,s):Me(e,n,r):(n&&C(e),te(e,r));n=r}else if(t instanceof Node){if(x.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=C(e,n,s,t);C(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function U(e,t,n){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],r;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=U(e,o)||s;else if((r=typeof o)=="string")e.push(document.createTextNode(o));else if(r==="function")if(n){for(;typeof o=="function";)o=o();s=U(e,Array.isArray(o)?o:[o])||s}else e.push(o),s=!0;else e.push(document.createTextNode(o.toString()))}return s}function te(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function C(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const c=r.parentNode===e;!l&&!o?c?e.replaceChild(i,r):e.insertBefore(i,n):c&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}let Xe={data:""},Ge=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Xe,We=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Qe=/\/\*[^]*?\*\/|  +/g,ne=/\n+/g,N=(e,t)=>{let n="",s="",i="";for(let l in e){let o=e[l];l[0]=="@"?l[1]=="i"?n=l+" "+o+";":s+=l[1]=="f"?N(o,l):l+"{"+N(o,l[1]=="k"?"":t)+"}":typeof o=="object"?s+=N(o,t?t.replace(/([^,])+/g,r=>l.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,r):r?r+" "+c:c)):l):o!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=N.p?N.p(l,o):l+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+s},P={},de=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+de(e[n]);return t}return e},Ye=(e,t,n,s,i)=>{let l=de(e),o=P[l]||(P[l]=(r=>{let c=0,u=11;for(;c<r.length;)u=101*u+r.charCodeAt(c++)>>>0;return"go"+u})(l));if(!P[o]){let r=l!==e?e:(c=>{let u,f,a=[{}];for(;u=We.exec(c.replace(Qe,""));)u[4]?a.shift():u[3]?(f=u[3].replace(ne," ").trim(),a.unshift(a[0][f]=a[0][f]||{})):a[0][u[1]]=u[2].replace(ne," ").trim();return a[0]})(e);P[o]=N(i?{["@keyframes "+o]:r}:r,n?"":"."+o)}return((r,c,u)=>{c.data.indexOf(r)==-1&&(c.data=u?r+c.data:c.data+r)})(P[o],t,s),o},Ze=(e,t,n)=>e.reduce((s,i,l)=>{let o=t[l];if(o&&o.call){let r=o(n),c=r&&r.props&&r.props.className||/^go/.test(r)&&r;o=c?"."+c:r&&typeof r=="object"?r.props?"":N(r,""):r===!1?"":r}return s+i+(o??"")},"");function v(e){let t=this||{},n=e.call?e(t.p):e;return Ye(n.unshift?n.raw?Ze(n,[].slice.call(arguments,1),t.p):n.reduce((s,i)=>Object.assign(s,i&&i.call?i(t.p):i),{}):n,Ge(t.target),t.g,t.o,t.k)}v.bind({g:1});v.bind({k:1});const et=Se();function tt(e){let t=this||{};return(...n)=>{const s=i=>{const l=Ne(et),o=G(i,{theme:l}),r=G(o,{get class(){const L=o.class,I="class"in o&&/^go[0-9]+/.test(L);let he=v.apply({target:t.target,o:I,p:o,g:t.g},n);return[L,he].filter(Boolean).join(" ")}}),[c,u]=Pe(r,["as","theme"]),f=u,a=c.as||e;let w;return typeof a=="function"?w=a(f):(w=document.createElement(a),Re(w,f)),w};return s.class=i=>D(()=>v.apply({target:t.target,p:i,g:t.g},n)),s}}const S=new Proxy(tt,{get(e,t){return e(t)}}),nt=b("<br>"),st=b("<div><div></div></div>"),it=b("<section><h2>About me</h2></section>"),lt=b("<h1>Programming</h1>"),ot=b("<h1>Interface design</h1>"),rt=b("<h1>Algebra & calculus</h1>"),ct=b("<section><h2>Skills</h2></section>"),ut=b("<div></div>"),ft=S.header`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,at=S.span`
  color: #888;
`,dt=S.h1`
  font-size: 64px;
  line-height: 1.5;
  max-width: 720px;
`,se=S.button`
  box-sizing: border-box;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;
  border: ${e=>e.secondary?"none":"solid 2px black"};
  background: none;
  transition: ease-out all 200ms;
  cursor: pointer;

  &:hover {
    text-decoration: ${e=>e.secondary?"underline":"none"};
    background: #eee;
  }
`,ht=S.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
`,gt=S.p`
  font-size: 20px;
  font-family: sans-serif;
  padding-bottom: 16px;
`,pt=S.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 16px;
  padding-bottom: 16px;
`,H=S.article`
  background-color: #eee;
  padding: 16px;
`,mt=()=>(()=>{const e=ut.cloneNode(!0);return m(e,p(ft,{get children(){const t=st.cloneNode(!0),n=t.firstChild;return m(t,p(dt,{get children(){return[p(at,{children:"Julian Soto."}),nt.cloneNode(!0),"I can help you build amazing web apps."]}}),n),m(n,p(se,{children:"Contact me"}),null),m(n,p(se,{secondary:!0,onclick:()=>window.open("https://github.com/JulianSoto","_blank"),children:"My Github \u2197"}),null),t}}),null),m(e,p(ht,{get children(){return[(()=>{const t=it.cloneNode(!0);return t.firstChild,m(t,p(gt,{children:"Hi! my name is Julian Soto, I'm a sofware developer."}),null),t})(),(()=>{const t=ct.cloneNode(!0);return t.firstChild,m(t,p(pt,{get children(){return[p(H,{get children(){return lt.cloneNode(!0)}}),p(H,{get children(){return ot.cloneNode(!0)}}),p(H,{get children(){return rt.cloneNode(!0)}})]}}),null),t})()]}}),null),e})(),yt=b("<div></div>"),bt=()=>(()=>{const e=yt.cloneNode(!0);return m(e,p(mt,{})),e})();ve(()=>p(bt,{}),document.getElementById("root"));
