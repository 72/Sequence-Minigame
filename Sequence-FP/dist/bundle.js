!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){return{clickTriggered:!1,div:function(e){var t=document.createElement("div");return t.className="tile",t.setAttribute("data-name","tile"+e),t.style.transform="scale(0)",t}(e),id:e}}r.r(t);var o={blue:"rgb(25, 153, 238)",pink:"pink",skyblue:"rgb(86, 204, 242)",purple:"rgb(155, 81, 224)",red:"rgb(235,87,87)",green:"rgb(39,174,96)",orange:"rgb(242,153,74)",yellow:"rgb(242,201,76)"};function i(e){e.style.transition="all 0.25s cubic-bezier(0.25, .1, 0.25, 1.35)",e.style.backgroundColor=o.blue,e.style.transform="scale(1)"}function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.style.transition="all 0.33s cubic-bezier(0.25, .1, 0.25, 1)",!0===t&&(e.style.backgroundColor=o.pink),e.style.transform="scale(0.45)"}var l=[],a=2,c=[],s=9,f=0;function d(){0;for(var e=function(e){setTimeout(function(){var t,r=l[e],n=c[r].div;(t=n).style.transition="all 0.33s cubic-bezier(0.25, .1, 0.25, 1.35)",t.style.backgroundColor=o.purple,t.style.transform="scale(1.2)",setTimeout(i,250,t)},600*e)},t=0;t<l.length;t++)e(t)}function b(){var e=Math.floor(9*Math.random());return null==l[l.length-1]?e:e!=l[l.length-1]?e:e!=l[l.length-2]?e:void b()}function v(){for(var e=0;e<a;e++)l.push(b())}var g=document.getElementById("board"),p=document.getElementById("startButton");!function(e){for(var t=0;t<s;t++){var r=n(t);e.appendChild(r.div),c.push(r),r.div.addEventListener("click",function(e){var t,r,n;e.preventDefault(),r=(t=this).dataset.name.slice(-1),0==(n=c[r]).clickTriggered&&(n.clickTriggered=!0,l[f]==n.id&&(u(t,!0),setTimeout(i,260,t),f++))})}}(g),p.addEventListener("click",function(e){e.preventDefault(),function(){for(var e=0;e<c.length;e++)setTimeout(i,100*e,c[e].div);setTimeout(v,500),setTimeout(d,1250)}()})}]);