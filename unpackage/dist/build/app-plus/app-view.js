(function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="9af6")})({"09f8":function(e,t,n){"use strict";n.r(t);var r=n("525f"),i=n("13c3");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("3dea");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=u.exports},"13c3":function(e,t,n){"use strict";n.r(t);var r=n("cb1e"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=i.a},"1b47":function(e,t,n){var r=n("934c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("7f7e").default;i("f2bb55ba",r,!0,{sourceMap:!1,shadowMode:!1})},2350:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"===typeof btoa){var o=r(i),a=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"===typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"===typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},2906:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},"3dea":function(e,t,n){"use strict";var r=n("1b47"),i=n.n(r);i.a},"525f":function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:e._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-image",{staticClass:e._$g(1,"sc"),attrs:{src:"/static/logo.png",_i:1}}),n("v-uni-view",{staticClass:e._$g(2,"sc"),attrs:{_i:2}},[n("v-uni-text",{staticClass:e._$g(3,"sc"),attrs:{_i:3}},[e._v(e._$g(3,"t0"))]),n("v-uni-view",{attrs:{_i:4}},[n("v-uni-button",{staticClass:e._$g(5,"sc"),attrs:{_i:5},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("视频播放")])],1),n("v-uni-video",{attrs:{src:"https://sightpvideo-cdn.sightp.com/sdkvideo/EasyARSDKShow201520.mp4",_i:6}})],1)],1)},o=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r})},"7f7e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],u=o[2],c=o[3],f={id:e+":"+i,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(t),n.d(t,"default",function(){return v});var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,i){c=n,l=i||{};var a=r(e,t);return b(a),function(t){for(var n=[],i=0;i<a.length;i++){var s=a[i],u=o[s.id];u.refs--,n.push(u)}t?(a=r(e,t),b(a)):a=[];for(i=0;i<n.length;i++){u=n[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function b(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(g(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(p){var i=u++;r=s||(s=h()),t=_.bind(null,r,i,!1),n=_.bind(null,r,i,!0)}else r=h(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function _(e,t,n,r){var i=n?"":O(r.css);if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function x(e,t){var n=O(t.css),r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute(d,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var y=/([+-]?\d+(\.\d+)?)[r|u]px/g,w=/var\(--status-bar-height\)/gi,C=/var\(--window-top\)/gi,j=/var\(--window-bottom\)/gi,S=!1;function O(e){if(!uni.canIUse("css.var")){!1===S&&(S=plus.navigator.getStatusbarHeight());var t={statusBarHeight:S,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};e=e.replace(w,t.statusBarHeight+"px").replace(C,t.top+"px").replace(j,t.bottom+"px")}return e.replace(y,function(e,t){return uni.upx2px(t)+"px"})}},"934c":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo{height:200rpx;width:200rpx;margin-top:200rpx;margin-left:auto;margin-right:auto;margin-bottom:50rpx}.text-area{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title{font-size:36rpx;color:#8f8f94}",""])},"9af6":function(e,t,n){"use strict";function r(){function e(e){var t=n("d6a9");t.__inject__&&t.__inject__(e)}e(),UniViewJSBridge.publishHandler("webviewReady")}n("b67f"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},b67f:function(e,t,n){"use strict";uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",function(){return Vue.extend(n("09f8").default)})},cb1e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};t.default=r},d6a9:function(e,t,n){"use strict";n.r(t);var r=n("e4eb"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=i.a},e4eb:function(e,t,n){var r=n("2906");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("7f7e").default;i("e0190e6a",r,!0,{sourceMap:!1,shadowMode:!1})},f0c5:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a,s,u,c){var f,l="function"===typeof e?e.options:e;if(u&&(l.components=Object.assign(u,l.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(l.mixins||(l.mixins=[])).push(c)),t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=f):i&&(f=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var d=l.render;l.render=function(e,t){return f.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return{exports:e,options:l}}n.d(t,"a",function(){return r})}});