(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body {\r\n  margin: 0;\r\n}\r\n\r\n#content {\r\n  position: relative;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  background-color: darkslateblue;\r\n}\r\n\r\n/* - - - navigation - - - */\r\n\r\n.nav-bar {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.go-to-menu {\r\n  width: 30%;\r\n  background-color: royalblue;\r\n}\r\n\r\n\r\n\r\n/* - - - menu - - - */\r\n#menu {\r\n  --anim-reveal-duration: 1s;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu-axis {\r\n  height: 90vmin;\r\n  width: 200px;\r\n  justify-content: center;\r\n  position: absolute;\r\n  animation: reveal var(--anim-reveal-duration);\r\n}\r\n\r\n.menu-item {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: red;\r\n  width: 200px;\r\n  height: 200px;\r\n  animation: reveal var(--anim-reveal-duration);\r\n}\r\n\r\n/*axes and item rotations*/\r\n.menu-axis-0 {rotate: 0deg;}\r\n.menu-axis-1 {rotate: 60deg;}\r\n.menu-axis-2 {rotate: 120deg;}\r\n.menu-axis-3 {rotate: 180deg;}\r\n.menu-axis-4 {rotate: 240deg;}\r\n.menu-axis-5 {rotate: 300deg;}\r\n\r\n.menu-item-0 {rotate: -0deg;}\r\n.menu-item-1 {rotate: -60deg;}\r\n.menu-item-2 {rotate: -120deg;}\r\n.menu-item-3 {rotate: -180deg;}\r\n.menu-item-4 {rotate: -240deg;}\r\n.menu-item-5 {rotate: -300deg;}\r\n\r\n@keyframes reveal { from {rotate: 0deg;} }\r\n\r\n\r\n/* for testing */\r\n\r\n** {\r\n  outline: 1px solid gray;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=a(p,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),u=0;u<o.length;u++){var d=t(o[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),u=t(216),d=t.n(u),l=t(589),m=t.n(l),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=document.querySelector("#content");document.querySelector("#content").appendChild(function(){const e=document.createElement("div");e.id="menu";for(let n=0;n<6;n++){const t=document.createElement("div");t.classList.add("menu-axis",`menu-axis-${n}`);const r=document.createElement("div");r.classList.add("menu-item",`menu-item-${n}`),t.appendChild(r),e.appendChild(t)}return e}()),v.appendChild(function(){const e=document.createElement("div");e.classList.add("nav-bar");for(let n=0;n<2;n++){const t=document.createElement("div");t.classList.add("go-to-menu",0===n?"menu-left":"menu-right"),t.innerText=0===n?"left":"right",e.appendChild(t)}return e}())})()})();