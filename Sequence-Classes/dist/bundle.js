!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clickTriggered=!1,this.div=this.createDiv(t),this.id=t,this.colors={blue:"rgb(25, 153, 238)",pink:"pink",skyblue:"rgb(86, 204, 242)",purple:"rgb(155, 81, 224)",red:"rgb(235,87,87)",green:"rgb(39,174,96)",orange:"rgb(242,153,74)",yellow:"rgb(242,201,76)"}}var t,n,i;return t=e,(n=[{key:"createDiv",value:function(e){var t=document.createElement("div");return t.className="tile",t.setAttribute("data-name","tile"+e),t.style.transform="scale(0)",t}},{key:"toDefault",value:function(e){e.div.style.transition="all 0.25s cubic-bezier(0.25, .1, 0.25, 1.35)",e.div.style.backgroundColor=e.colors.blue,e.div.style.opacity="1",e.div.style.transform="scale(1)"}},{key:"testVal",value:function(){return this.id}}])&&r(t.prototype,n),i&&r(t,i),e}(),o=0,s={blue:"rgb(25, 153, 238)",pink:"pink",skyblue:"rgb(86, 204, 242)",purple:"rgb(155, 81, 224)",red:"rgb(235,87,87)",green:"rgb(39,174,96)",orange:"rgb(242,153,74)",yellow:"rgb(242,201,76)"};Object.values(s);function l(e){e.style.transition="all 0.55s cubic-bezier(0.25, .1, 0.25, 1.35)",e.style.opacity="0",e.style.transform="scale(0)"}function u(e){e.style.transition="all 0.25s cubic-bezier(0.25, .1, 0.25, 1.35)",e.style.backgroundColor=s.blue,e.style.opacity="1",e.style.transform="scale(1)"}function a(e){o+=90,e.style.transition="all 1s cubic-bezier(0.25, .1, 0.25, 1.40)",e.style.transform="rotate("+o+"deg)"}function c(e){for(var t=0;t<e.length;t++)setTimeout(u,60*t,e[t])}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.board,this.startButton,this.message,this.sequence=[],this.initialSequenceLength=2,this.level=1,this.tiles=[],this.numberOfTiles=9,this.stepToCheck=0}var t,n,r;return t=e,r=[{key:"tileClicked",value:function(e,t){var n=e.dataset.name.slice(-1);t.sequence[t.stepToCheck]==n?t.correctOption(e):console.log("incorrect")}},{key:"createBoard",value:function(t){t.level=1,t.message.innerHTML="Level "+t.level;for(var n=0;n<t.numberOfTiles;n++){var r=new i(n);t.board.appendChild(r.div),t.tiles.push(r),r.div.addEventListener("click",function(n){n.preventDefault(),e.tileClicked(this,t)})}}}],(n=[{key:"getRandomNumber",value:function(){var e=Math.floor(9*Math.random());return null==this.sequence[this.sequence.length-1]?e:e!=this.sequence[this.sequence.length-1]?e:e!=this.sequence[this.sequence.length-2]?e:void this.getRandomNumber()}},{key:"buildSequence",value:function(e){for(var t=0;t<e.initialSequenceLength;t++)e.sequence.push(e.getRandomNumber())}},{key:"showChallenge",value:function(e){e.sequence.map(function(t,n){setTimeout(function(){var t,r=e.sequence[n],i=e.tiles[r].div;(t=i).style.transition="all 0.33s cubic-bezier(0.25, .1, 0.25, 1.35)",t.style.backgroundColor=s.purple,t.style.transform="scale(1.2)",setTimeout(u,250,t)},600*n)})}},{key:"moveToNextLevel",value:function(){this.level++,setTimeout(function(){this.message.innerHTML="Level "+this.level,function(e){for(var t,n=e.childNodes,r=0;r<n.length;r++)(t=n[r]).style.transition="all 0.33s cubic-bezier(0.25, .1, 0.25, 1)",t.style.transform="scale(0.45)";setTimeout(a,150,e),setTimeout(c,1e3,n)}(this.board),this.stepToCheck=0,this.sequence.push(this.getRandomNumer()),setTimeout(function(){this.showChallenge()},2e3)},600)}},{key:"correctOption",value:function(e){var t;(t=e).style.transition="all 0.33s cubic-bezier(0.25, .1, 0.25, 1)",t.style.backgroundColor=s.pink,t.style.transform="scale(0.45)",this.stepToCheck==this.sequence.length-1?(setTimeout(u,260,e),this.moveToNextLevel()):(console.log("at else"),setTimeout(u,260,e),this.stepToCheck++)}},{key:"startGame",value:function(){var t=this;this.board=document.getElementById("board"),this.startButton=document.getElementById("startButton"),this.message=document.getElementById("gameMessage"),l(startButton),setTimeout(e.createBoard,500,this),setTimeout(function(){t.tiles.map(function(e,t){setTimeout(e.toDefault,100*t,e)}),setTimeout(t.buildSequence,500,t),setTimeout(t.showChallenge,1250,t)},800)}}])&&f(t.prototype,n),r&&f(t,r),e}(),d=document.getElementById("startButton"),h=new b;d.addEventListener("click",function(e){e.preventDefault(),h.startGame()})}]);