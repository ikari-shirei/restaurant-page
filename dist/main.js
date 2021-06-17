(()=>{"use strict";var e={982:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,":root {\n  --font: 'Roboto', sans-serif;\n  --white: #ffffff;\n  --black: #363237;\n  --dark-brown: #73605B; \n}\n\nbody {\n  margin: 0;\n  padding: 0.5rem 0 0 0;\n  background-color: var(--white);\n  color: var(--black);\n  font-family: var(--font);\n\n}\n\n#content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n/* Tabs */\n\n#tabs {\n  z-index: 99;\n  position: sticky;\n  top: 0;\n  background-color: var(--white);\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  justify-content: space-evenly;\n  align-content: center;\n}\n\n.tab {\n  color: var(--dark-brown);\n  padding: 1rem 2rem;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1.25px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.active-tab {\n  color: var(--black);\n  font-weight: 550; \n  border-bottom: 1px var(--black) solid;\n}\n\n/* Home Tab */\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 8px;\n  max-width: 400px;\n}\n\n.home-content h1 {\n  justify-self: flex-start;\n  font-weight: 100;\n  color: var(--black);\n  font-size: 34px;\n  line-height: 36px;\n  margin: 1rem 0;\n}\n\n\n.home-content p {\n  color: var(--dark-brown);\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n\n/* Menu Tab */\n\n#menuSection {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n#menuSection h1 {\n  justify-self: flex-start;\n  font-weight: 100;\n  color: var(--black);\n  font-size: 34px;\n  line-height: 36px;\n  margin: 1rem 0;\n}\n\n.menu-content {\n  position: relative;\n  width: 340px;\n  height: 200px;\n  background-color: var(--dark-brown);\n  margin: 1rem 0;\n  border-radius: 15px;\n}\n\n.menu-content-header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: absolute;\n  bottom: 100;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  background-color: rgba(54,50,55, 0.7);\n  color: var(--white);\n  border-radius: 0 0 15px 15px;\n}\n\n.menu-content-header h2 {\n  justify-self: flex-start;\n  font-weight: 200;\n  color: var(--white);\n  font-size: 18px;\n  line-height: 36px;\n  margin: 1rem 0;\n  padding-left: 1rem;\n}\n\n#breakfast, #lunch, #dinner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 1rem;\n}\n\n/* Contact section */\n\n#contactSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  position: absolute; \n  top: 50%; \n  left: 50%;\n  transform: translate(-50%,-50%)\n}\n\n#contactSection h1 {\n  justify-self: flex-start;\n  font-weight: 100;\n  color: var(--black);\n  font-size: 34px;\n  line-height: 36px;\n  margin: 1rem 0;\n}\n\n#information {\n  margin: 1rem 0;\n}\n\n#information {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0;\n}\n\n.contact-content {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\n\n.contact-content div:first-child {\n  width: 90px;\n  padding: 1rem 0 1rem 0;\n  color: var(--black);\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.contact-content div:nth-child(2) {\n  padding: 1rem 0rem;\n  color: var(--black);\n}\n\n@media only screen and (min-width: 600px) {\n  .menu-content {\n    margin: 1rem;\n  }\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(i[r]=!0)}for(var o=0;o<e.length;o++){var s=[].concat(e[o]);a&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var a,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function r(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function o(e,n){for(var t={},a=[],i=0;i<e.length;i++){var o=e[i],s=n.base?o[0]+n.base:o[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=r(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:d,updater:h(p,n),references:1}),a.push(d)}return a}function s(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var c=t.nc;c&&(a.nonce=c)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var c=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(c,r[n]):e.appendChild(c)}}function p(e,n,t){var a=t.css,i=t.media,c=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,f=0;function h(e,n){var t,a,i;if(n.singleton){var c=f++;t=m||(m=s(n)),a=u.bind(null,t,c,!1),i=u.bind(null,t,c,!0)}else t=s(n),a=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=o(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=r(t[a]);c[i].references--}for(var s=o(e,n),l=0;l<t.length;l++){var d=r(t[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}t=s}}}}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var c=n[a]={id:a,exports:{}};return e[a](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{function e(e){const n=document.querySelector("#homeSection");!1===e?n.style.display="none":!0===e&&(n.style.display="initial")}const n=t.p+"9775085822a7cf624b19563bc965f070.jpg",a=t.p+"10dacf3c420245ad96c82455ecde5c13.jpg",i=t.p+"17139b702c8677849cb83a9c2c8738d2.jpg",c=t.p+"75b398a6808361265ef0d9e14c858fde.jpg",r=t.p+"95e06b09451d2524dc252ddfffbb3ba9.jpg",o=t.p+"9ac6e1376388469c77bb420746bfa174.jpg",s=t.p+"15045e6a69d9dd61a95cad30c2b2283c.jpg",l=t.p+"5c8f0292d3f1d47d1250ab7bb9d9ac46.jpg",d=t.p+"cd593f7cba68de69d757711f5fbc6994.jpg",u=t.p+"dbe3d34dd78b226e6a72de02f398cea0.jpg",p=t.p+"2ee4206bb5b3ce2977cab97bc7377ef8.jpg",m=t.p+"8e6066002d3e4a119fa45ab0d24c039d.jpg",f=t.p+"51c4a83c8960d411bb48655afdac1039.jpg",h=t.p+"f8de9bf103396d67f7ed9d29d6c8f9f1.jpg",b=t.p+"c952cb463eb6861c9a9a27099ed56bb1.jpg",v=t.p+"1a9e6296443c7427acfacd80755a67ae.jpg",g=t.p+"ce953f45e37fc2ca0218c8a09ef7ced2.jpg",y=t.p+"d66a98bc9dfcb0a402e8a5d1c0fcfd95.jpg",x=t.p+"5736ffe5669992dffd331d9ae81984a7.jpg",C=t.p+"dae7476a92a491eb9b0e1ac16cf0d1ee.jpg",w=t.p+"1bb052d0bcaca40bb683bbe0229cce4f.jpg",E=t.p+"a9d78e2554858b0adf1527c5db344c93.jpg",L=t.p+"f3338275873502831d96e33318f4ba73.jpg",j=t.p+"0eb19e380e63090c297df6b7689cf661.jpg",S=t.p+"f8996683ff7896ff15a2f94ae8af5270.jpg",k=t.p+"2bfae40c0df3cafaf586a2afc0e50bfd.jpg",$=t.p+"9757aa4c6b23c9d0a57a3ec86d3d7a29.jpg";function q(e){const n=document.querySelector("#menuSection");!1===e?n.style.display="none":!0===e&&(n.style.display="initial")}function M(e){const n=document.querySelector("#contactSection");!1===e?n.style.display="none":!0===e&&(n.style.display="initial")}var T=t(379),A=t.n(T),N=t(982);A()(N.Z,{insert:"head",singleton:!1}),N.Z.locals,t.p,function(){const t=document.querySelector("#content"),T=document.createElement("div");T.setAttribute("id","tabs");const A=document.createElement("div");A.classList.add("tab"),A.setAttribute("id","home"),A.textContent="HOME";const N=document.createElement("div");N.classList.add("tab"),N.setAttribute("id","menu"),N.textContent="MENU";const B=document.createElement("div");B.classList.add("tab"),B.setAttribute("id","contact"),B.textContent="CONTACT",T.appendChild(A),T.appendChild(N),T.appendChild(B),t.appendChild(T),A.classList.add("active-tab"),function(e){const n=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","homeSection");const a=document.createElement("div");a.classList.add("home-content"),a.innerHTML+="<h1>Restaurant Galaxy</h1>",a.innerHTML+="<p>\n  Tellus pellentesque eu tincidunt tortor aliquam nulla. Sed pulvinar\n  proin gravida hendrerit lectus a. Convallis a cras semper auctor\n  neque vitae tempus quam. Massa ultricies mi quis hendrerit. Nunc sed\n  augue lacus viverra vitae congue eu consequat ac. Gravida neque\n  convallis a cras semper auctor. Sed pulvinar proin gravida hendrerit\n  lectus. Sed elementum tempus egestas sed sed risus. Iaculis urna id\n  volutpat lacus laoreet. Tortor dignissim convallis aenean et tortor\n  at. Vestibulum rhoncus est pellentesque elit.\n</p>";const i=document.createElement("div");i.classList.add("home-content"),i.innerHTML+="<h1>About Us</h1>",i.innerHTML+="<p>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus\n            viverra accumsan in nisl. Lacinia at quis risus sed vulputate odio\n            ut enim. Sollicitudin nibh sit amet commodo. Bibendum at varius vel\n            pharetra vel turpis nunc eget. Lacus vel facilisis volutpat est\n            velit egestas dui id. Nisi porta lorem mollis aliquam ut porttitor\n            leo. Justo laoreet sit amet cursus sit. Suspendisse sed nisi lacus\n            sed viverra tellus in hac habitasse. Ut tortor pretium viverra\n            suspendisse potenti. Elementum facilisis leo vel fringilla est\n            ullamcorper. Ipsum consequat nisl vel pretium lectus quam id leo.\n            Sollicitudin ac orci phasellus egestas tellus rutrum tellus\n            pellentesque. In ante metus dictum at tempor commodo ullamcorper a\n            lacus. Rhoncus est pellentesque elit ullamcorper dignissim cras\n            tincidunt lobortis. Eget nunc scelerisque viverra mauris in.\n</p>",t.appendChild(a),t.appendChild(i),n.appendChild(t)}(),function(e){function t(e,n,t){const a=document.createElement("div");a.classList.add("menu-content"),a.style.backgroundImage=e,a.style.backgroundSize="340px 200px";const i=document.createElement("div");i.classList.add("menu-content-header"),a.appendChild(i);const c=document.createElement("h2");c.textContent=`${n}`,i.appendChild(c),t.appendChild(a),M.appendChild(t)}const q=document.querySelector("#content"),M=document.createElement("div");M.setAttribute("id","menuSection");const T=document.createElement("div");T.setAttribute("id","breakfast"),M.appendChild(T);const A=document.createElement("h1");A.textContent="Breakfast",T.appendChild(A);const N=document.createElement("div");N.classList.add("menu-container"),T.appendChild(N),t(`url(${n})`,"Simple Milky Way",N),t(`url(${a})`,"Complex Milky Way",N),t(`url(${i})`,"Holy Jupiter Renewed",N),t(`url(${c})`,"Best Egg in The Space",N),t(`url(${r})`,"Little Asteroid",N),t(`url(${o})`,"Celestial Grand Pink",N),t(`url(${s})`,"Doppler's Pancake",N),t(`url(${l})`,"Everything in the Universe",N),t(`url(${d})`,"Fermi's Breakfast",N),T.appendChild(N);const B=document.createElement("div");B.setAttribute("id","lunch"),M.appendChild(B);const O=document.createElement("h1");O.textContent="Lunch",B.appendChild(O);const H=document.createElement("div");H.classList.add("menu-container"),t(`url(${u})`,"Our Only Satellite",H),t(`url(${p})`,"Trip Around Orbit",H),t(`url(${m})`,"Mixed as Universe",H),t(`url(${f})`,"Moon`s Gravity",H),t(`url(${h})`,"Supernova",H),t(`url(${b})`,"Brown Dwarf",H),t(`url(${v})`,"Comet",H),t(`url(${g})`,"Seven Stars",H),t(`url(${y})`,"Dark Energy",H),B.appendChild(H);const z=document.createElement("div");z.setAttribute("id","dinner"),M.appendChild(z);const R=document.createElement("h1");R.textContent="Dinner",z.appendChild(R);const U=document.createElement("div");U.classList.add("menu-container"),t(`url(${x})`,"Hot Mercury ",U),t(`url(${C})`,"Venus Special",U),t(`url(${w})`,"White Dwarf",U),t(`url(${E})`,"Red Comet",U),t(`url(${L})`,"Red Giant",U),t(`url(${j})`,"Little Mars",U),t(`url(${S})`,"Saturn's Ring",U),t(`url(${k})`,"Solar System",U),t(`url(${$})`,"Sweet as Uranus ",U),z.appendChild(U),q.appendChild(M),M.style.display="none"}(),function(e){const n=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","contactSection");const a=document.createElement("h1");a.textContent="Contact",t.appendChild(a);const i=document.createElement("div");i.classList.add("information");const c=document.createElement("div");c.classList.add("contact-content");const r=document.createElement("div");r.textContent="Number:",c.appendChild(r);const o=document.createElement("div");o.textContent="+999 999 999",c.appendChild(o),i.appendChild(c);const s=document.createElement("div");s.classList.add("contact-content");const l=document.createElement("div");l.textContent="E-mail:",s.appendChild(l);const d=document.createElement("div");d.textContent="restaurant.galaxy99@gmail.com",s.appendChild(d),i.appendChild(s);const u=document.createElement("div");u.classList.add("contact-content");const p=document.createElement("div");p.textContent="Location:",u.appendChild(p);const m=document.createElement("div");m.textContent="Piney, MB, Canada",u.appendChild(m),i.appendChild(u),t.appendChild(i),n.appendChild(t),t.style.display="none"}(),A.addEventListener("click",(n=>{n.target.classList.add("active-tab"),N.classList.contains("active-tab")?N.classList.remove("active-tab"):B.classList.contains("active-tab")&&B.classList.remove("active-tab"),M(!1),q(!1),n.target.classList.contains("active-tab")&&e(!0)})),N.addEventListener("click",(n=>{n.target.classList.add("active-tab"),A.classList.contains("active-tab")?A.classList.remove("active-tab"):B.classList.contains("active-tab")&&B.classList.remove("active-tab"),e(!1),M(!1),n.target.classList.contains("active-tab")&&q(!0)})),B.addEventListener("click",(n=>{n.target.classList.add("active-tab"),A.classList.contains("active-tab")?A.classList.remove("active-tab"):N.classList.contains("active-tab")&&N.classList.remove("active-tab"),e(!1),q(!1),n.target.classList.contains("active-tab")&&M(!0)}))}()})()})();