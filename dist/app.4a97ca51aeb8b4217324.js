!function(e){function n(n){for(var r,u,i=n[0],c=n[1],l=n[2],p=0,s=[];p<i.length;p++)u=i[p],o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(n);s.length;)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={1:0},a=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=c;a.push([10,0]),t()}([function(e,n,t){"use strict";t(2);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,(t=[{key:"render",value:function(e){var n=document.querySelector("body"),t=document.createElement("header"),r=document.createElement("h1");t.classList.add("header"),r.innerText="this is ".concat(e),t.appendChild(r),n.appendChild(t),console.log("aaa")}}])&&r(n.prototype,t),o&&r(n,o),e}();n.a=o},,function(e,n,t){},,function(e,n,t){},,,,,,function(e,n,t){"use strict";t.r(n);t(4);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.btnClass="btn"}var n,t,o;return n=e,(t=[{key:"render",value:function(){var e=document.createElement("button");e.classList.add(this.btnClass),e.innerText="Hello!";var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerText="Hello!!",n.appendChild(e)},n.appendChild(e)}}])&&r(n.prototype,t),o&&r(n,o),e}(),a=t(0),u=t(1),i=t.n(u),c=new o;(new a.a).render(i.a.upperFirst("application")),c.render();var l=document.querySelector("body"),f=document.createElement("a");f.href="image.html",f.innerText="Check our page",l.appendChild(f);console.log(i.a.includes({a:1,b:2},1))}]);