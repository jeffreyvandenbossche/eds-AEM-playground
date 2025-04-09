(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const x="modulepreload",_=function(t){return"/"+t},L={},w=function(e,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(n.map(c=>{if(c=_(c),c in L)return;L[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":x,l||(f.as="script"),f.crossOrigin="",f.href=c,i&&f.setAttribute("nonce",i),document.head.appendChild(f),l)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&s(i.reason);return e().catch(s)})};function d(t,e){const n=()=>window.performance?window.performance.now():Date.now()-window.hlx.rum.firstReadTime;try{if(window.hlx=window.hlx||{},d.enhance=()=>{},!window.hlx.rum){const o=new URLSearchParams(window.location.search).get("rum"),r=window.SAMPLE_PAGEVIEWS_AT_RATE==="high"&&10||window.SAMPLE_PAGEVIEWS_AT_RATE==="low"&&1e3||o==="on"&&1||100,s=Math.random().toString(36).slice(-4),a=o!=="off"&&Math.random()*r<1;if(window.hlx.rum={weight:r,id:s,isSelected:a,firstReadTime:window.performance?window.performance.timeOrigin:Date.now(),sampleRUM:d,queue:[],collector:(...i)=>window.hlx.rum.queue.push(i)},a){const i=c=>{const l={source:"undefined error"};try{l.target=c.toString(),l.source=c.stack.split(`
`).filter(u=>u.match(/https?:\/\//)).shift().replace(/at ([^ ]+) \((.+)\)/,"$1@$2").replace(/ at /,"@").trim()}catch{}return l};window.addEventListener("error",({error:c})=>{const l=i(c);d("error",l)}),window.addEventListener("unhandledrejection",({reason:c})=>{let l={source:"Unhandled Rejection",target:c||"Unknown"};c instanceof Error&&(l=i(c)),d("error",l)}),d.baseURL=d.baseURL||new URL(window.RUM_BASE||"/",new URL("https://rum.hlx.page")),d.collectBaseURL=d.collectBaseURL||d.baseURL,d.sendPing=(c,l,u={})=>{const f=JSON.stringify({weight:r,id:s,referer:window.location.href,checkpoint:c,t:l,...u}),h=window.RUM_PARAMS?`?${new URLSearchParams(window.RUM_PARAMS).toString()}`:"",{href:p,origin:N}=new URL(`.rum/${r}${h}`,d.collectBaseURL),R=N===window.location.origin?new Blob([f],{type:"application/json"}):f;navigator.sendBeacon(p,R),console.debug(`ping:${c}`,u)},d.sendPing("top",n()),d.enhance=()=>{if(document.querySelector('script[src*="rum-enhancer"]'))return;const{enhancerVersion:c,enhancerHash:l}=d.enhancerContext||{},u=document.createElement("script");l&&(u.integrity=l,u.setAttribute("crossorigin","anonymous")),u.src=new URL(`.rum/@adobe/helix-rum-enhancer@${c||"^2"}/src/index.js`,d.baseURL).href,document.head.appendChild(u)},window.hlx.RUM_MANUAL_ENHANCE||d.enhance()}}window.hlx.rum&&window.hlx.rum.isSelected&&t&&window.hlx.rum.collector(t,e,n()),document.dispatchEvent(new CustomEvent("rum",{detail:{checkpoint:t,data:e}}))}catch{}}function v(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.RUM_MANUAL_ENHANCE=!0,window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const t=document.querySelector('script[src$="/scripts/scripts.js"]');if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split("/scripts/scripts.js")}catch(e){console.log(e)}}function U(){v(),d()}function m(t){return typeof t=="string"?t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}function q(t){return m(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}function C(t){const e={};return t.querySelectorAll(":scope > div").forEach(n=>{if(n.children){const o=[...n.children];if(o[1]){const r=o[1],s=m(o[0].textContent);let a="";if(r.querySelector("a")){const i=[...r.querySelectorAll("a")];i.length===1?a=i[0].href:a=i.map(c=>c.href)}else if(r.querySelector("img")){const i=[...r.querySelectorAll("img")];i.length===1?a=i[0].src:a=i.map(c=>c.src)}else if(r.querySelector("p")){const i=[...r.querySelectorAll("p")];i.length===1?a=i[0].textContent:a=i.map(c=>c.textContent)}else a=n.children[1].textContent;e[s]=a}}}),e}async function y(t){return new Promise((e,n)=>{if(document.querySelector(`head > link[href="${t}"]`))e();else{const o=document.createElement("link");o.rel="stylesheet",o.href=t,o.onload=e,o.onerror=n,document.head.append(o)}})}async function $(t,e){return new Promise((n,o)=>{if(document.querySelector(`head > script[src="${t}"]`))n();else{const r=document.createElement("script");if(r.src=t,e)for(const s in e)r.setAttribute(s,e[s]);r.onload=n,r.onerror=o,document.head.append(r)}})}function P(t,e=document){const n=t&&t.includes(":")?"property":"name";return[...e.head.querySelectorAll(`meta[${n}="${t}"]`)].map(r=>r.content).join(", ")||""}function B(){const t=(o,r)=>{r.split(",").forEach(s=>{o.classList.add(m(s.trim()))})},e=P("template");e&&t(document.body,e);const n=P("theme");n&&t(document.body,n)}function M(t){const e=["P","PRE","UL","OL","PICTURE","TABLE","H1","H2","H3","H4","H5","H6"],n=o=>{const r=document.createElement("p");r.append(...o.childNodes),o.append(r)};t.querySelectorAll(":scope > div > div").forEach(o=>{o.hasChildNodes()&&(!!o.firstElementChild&&e.some(s=>o.firstElementChild.tagName===s)?o.firstElementChild.tagName==="PICTURE"&&(o.children.length>1||o.textContent.trim())&&n(o):n(o))})}function T(t){t.querySelectorAll("a").forEach(e=>{if(e.title=e.title||e.textContent,e.href!==e.textContent){const n=e.parentElement,o=e.parentElement.parentElement;e.querySelector("img")||(n.childNodes.length===1&&(n.tagName==="P"||n.tagName==="DIV")&&(e.className="button",n.classList.add("button-container")),n.childNodes.length===1&&n.tagName==="STRONG"&&o.childNodes.length===1&&o.tagName==="P"&&(e.className="button primary",o.classList.add("button-container")),n.childNodes.length===1&&n.tagName==="EM"&&o.childNodes.length===1&&o.tagName==="P"&&(e.className="button secondary",o.classList.add("button-container")))}})}function I(t,e="",n=""){const o=Array.from(t.classList).find(s=>s.startsWith("icon-")).substring(5),r=document.createElement("img");r.dataset.iconName=o,r.src=`${window.hlx.codeBasePath}${e}/icons/${o}.svg`,r.alt=n,r.loading="lazy",t.append(r)}function O(t,e=""){[...t.querySelectorAll("span.icon")].forEach(o=>{I(o,e)})}function j(t){t.querySelectorAll(":scope > div").forEach(e=>{const n=[];let o=!1;[...e.children].forEach(s=>{if(s.tagName==="DIV"||!o){const a=document.createElement("div");n.push(a),o=s.tagName!=="DIV",o&&a.classList.add("default-content-wrapper")}n[n.length-1].append(s)}),n.forEach(s=>e.append(s)),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none";const r=e.querySelector("div.section-metadata");if(r){const s=C(r);Object.keys(s).forEach(a=>{a==="style"?s.style.split(",").filter(c=>c).map(c=>m(c.trim())).forEach(c=>e.classList.add(c)):e.dataset[q(a)]=s[a]}),r.parentNode.remove()}})}function g(t,e){const n=Array.isArray(e)?e:[[e]],o=document.createElement("div");return o.classList.add(t),n.forEach(r=>{const s=document.createElement("div");r.forEach(a=>{const i=document.createElement("div");(a.elems?a.elems:[a]).forEach(l=>{l&&(typeof l=="string"?i.innerHTML+=l:i.appendChild(l))}),s.appendChild(i)}),o.appendChild(s)}),o}async function E(t){const e=t.dataset.blockStatus;if(e!=="loading"&&e!=="loaded"){t.dataset.blockStatus="loading";const{blockName:n}=t.dataset;try{const o=y(`${window.hlx.codeBasePath}/blocks/${n}/${n}.css`),r=new Promise(s=>{(async()=>{try{const a=await w(()=>import(`${window.hlx.codeBasePath}/blocks/${n}/${n}.js`),[]);a.default&&await a.default(t)}catch(a){console.log(`failed to load module for ${n}`,a)}s()})()});await Promise.all([o,r])}catch(o){console.log(`failed to load block ${n}`,o)}t.dataset.blockStatus="loaded"}return t}function S(t){const e=t.classList[0];if(e){t.classList.add("block"),t.dataset.blockName=e,t.dataset.blockStatus="initialized",M(t),t.parentElement.classList.add(`${e}-wrapper`);const o=t.closest(".section");o&&o.classList.add(`${e}-container`)}}function D(t){t.querySelectorAll("div.section > div > div").forEach(S)}async function k(t){const e=g("header","");return t.append(e),S(e),E(e)}async function H(t){const e=g("footer","");return t.append(e),S(e),E(e)}async function V(t){const e=t.querySelector("img");await new Promise(n=>{e&&!e.complete?(e.setAttribute("loading","eager"),e.addEventListener("load",n),e.addEventListener("error",n)):n()})}async function A(t,e){const n=t.dataset.sectionStatus;if(!n||n==="initialized"){t.dataset.sectionStatus="loading";const o=[...t.querySelectorAll("div.block")];for(let r=0;r<o.length;r+=1)await E(o[r]);e&&await e(t),t.dataset.sectionStatus="loaded",t.style.display=null}}async function W(t){const e=[...t.querySelectorAll("div.section")];for(let n=0;n<e.length;n+=1)await A(e[n]),n===0&&d.enhance&&d.enhance()}U();function z(t){const e=t.querySelector("h1"),n=t.querySelector("picture");if(e&&n&&e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){const o=document.createElement("div");o.append(g("hero",{elems:[n,e]})),t.prepend(o)}}async function b(){await y(`${window.hlx.codeBasePath}/styles/fonts.css`);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}function F(t){try{z(t)}catch(e){console.error("Auto Blocking failed",e)}}function G(t){T(t),O(t),F(t),j(t),D(t)}async function K(t){document.documentElement.lang="en",B();const e=t.querySelector("main");e&&(G(e),document.body.classList.add("appear"),await A(e.querySelector(".section"),V));try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&b()}catch{}}async function J(t){const e=t.querySelector("main");await W(e);const{hash:n}=window.location,o=n?t.getElementById(n.substring(1)):!1;n&&o&&o.scrollIntoView(),k(t.querySelector("header")),H(t.querySelector("footer")),y(`${window.hlx.codeBasePath}/styles/lazy-styles.css`),b()}function Q(){window.setTimeout(()=>w(()=>Promise.resolve().then(()=>Y),void 0),3e3),$(`${window.hlx.codeBasePath}/dist/libs/bridgestone-web-components/index.js`,{}).then(()=>{console.log("index.js is loaded successfully"),window.setTimeout(()=>w(()=>import("./web-components-C5oTtr5P.js"),[]),1e3)})}async function X(){await K(document),await J(document),Q()}X();window.addEventListener("load",()=>{if(document.referrer){const{origin:t,pathname:e}=new URL(document.referrer);if(t===window.location.origin){const n=document.createElement("a");n.classList.add("button","error-button-back"),n.href=e,n.textContent="Go back",n.title="Go back",document.querySelector(".button-container").append(n)}}});d("404",{source:document.referrer});const Y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{w as _};
