(function(e){function n(n){for(var c,r,a=n[0],i=n[1],l=n[2],f=0,d=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&d.push(u[r][0]),u[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},u={app:0},o=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0df465":"7b837c0c","chunk-d3e096b2":"a99bb91b","chunk-12f78829":"29d112ba","chunk-3029b068":"6c4e206c","chunk-1bc07ff9":"0f59ede0","chunk-334b15b2":"af48c36b","chunk-306cba27":"61849cce","chunk-343a9c92":"4feeca22","chunk-0799da90":"552e97a9","chunk-1d60cd56":"acb5bb27","chunk-2a2080b0":"69da99b0","chunk-7a6075c0":"1f7a92d2","chunk-4c29a4d4":"ff686025","chunk-65292918":"26de377c","chunk-8eae21c6":"e320fa5b","chunk-ff4db4d6":"7e0f4a16"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-d3e096b2":1,"chunk-12f78829":1,"chunk-3029b068":1,"chunk-1bc07ff9":1,"chunk-334b15b2":1,"chunk-306cba27":1,"chunk-343a9c92":1,"chunk-0799da90":1,"chunk-1d60cd56":1,"chunk-2a2080b0":1,"chunk-7a6075c0":1,"chunk-4c29a4d4":1,"chunk-65292918":1,"chunk-8eae21c6":1,"chunk-ff4db4d6":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0df465":"31d6cfe0","chunk-d3e096b2":"290434f2","chunk-12f78829":"aad2b2ba","chunk-3029b068":"600bcbb5","chunk-1bc07ff9":"19ee7847","chunk-334b15b2":"fd9f00e1","chunk-306cba27":"22c9a36a","chunk-343a9c92":"07c0c82d","chunk-0799da90":"4d5fc3ce","chunk-1d60cd56":"7c9b3420","chunk-2a2080b0":"9f4e5302","chunk-7a6075c0":"cf395e60","chunk-4c29a4d4":"138c8642","chunk-65292918":"136ea427","chunk-8eae21c6":"da46783c","chunk-ff4db4d6":"8a2ac6bc"}[e]+".css",u=i.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var l=o[a],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===c||f===u))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],f=l.getAttribute("data-href");if(f===c||f===u)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],h.parentNode.removeChild(h),t(o)},h.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=o);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var d=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}u[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var h=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"428fd":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7");var c=t("bc3a"),r=t.n(c),u={},o=r.a.create(u);o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})};Plugin;var a=t("7a23"),i=Object(a["withScopeId"])("data-v-1b9eb446"),l=i((function(e,n,t,c,r,u){var o=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(o,null,{default:i((function(e){var n=e.Component;return[(Object(a["openBlock"])(),Object(a["createBlock"])(a["KeepAlive"],null,[(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(n)))],1024))]})),_:1})})),f=(t("caad"),t("6c02")),d=t("c1fb"),h=[{path:"/",redirect:"/result"},{path:"/login",name:"登录页",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-343a9c92"),t.e("chunk-2a2080b0")]).then(t.bind(null,"a55b"))}},{path:"/result",name:"结果页",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-12f78829")]).then(t.bind(null,"eeac"))}},{path:"/mine",name:"个人中心",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-3029b068"),t.e("chunk-334b15b2")]).then(t.bind(null,"0a4e"))}},{path:"/auth",name:"实名认证",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-343a9c92"),t.e("chunk-1d60cd56")]).then(t.bind(null,"2fef"))}},{path:"/code",name:"我的核酸结果页",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-306cba27")]).then(t.bind(null,"af4a"))}},{path:"/accompany",name:"添加同行页",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-343a9c92"),t.e("chunk-0799da90")]).then(t.bind(null,"4d78"))}},{path:"/person-list",name:"亲友列表页",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-3029b068"),t.e("chunk-1bc07ff9")]).then(t.bind(null,"7c0e"))}},{path:"/order-list",name:"预约列表页",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-8eae21c6")]).then(t.bind(null,"bf4b"))}},{path:"/order-detail",name:"预约详情",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-65292918")]).then(t.bind(null,"d3bb"))}},{path:"/query",name:"查询页",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-ff4db4d6")]).then(t.bind(null,"a962"))}},{path:"/pay",name:"预约缴费",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-4c29a4d4")]).then(t.bind(null,"76a1"))}},{path:"/paid",name:"支付通知页",component:function(){return t.e("chunk-2d0df465").then(t.bind(null,"88e4"))}},{path:"/new-escort-card",name:"申请陪护证",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-343a9c92"),t.e("chunk-7a6075c0")]).then(t.bind(null,"805a"))}},{path:"/escort-card",name:"我的陪护证",component:function(){return Promise.all([t.e("chunk-d3e096b2"),t.e("chunk-343a9c92"),t.e("chunk-7a6075c0")]).then(t.bind(null,"805a"))}}],b=Object(f["a"])({history:Object(f["b"])(),routes:h}),s="h_c_";b.beforeEach((function(e,n,t){["/","/login"].includes(e.path)||Object(d["b"])()?t():(localStorage.setItem(s+"auth",""),localStorage.setItem(s+"phone",""),t({path:"/login"}))}));var p=b,k={mounted:function(){var e=this;p.beforeEach((function(n,t,c){e.$toast.clear(),c()}))}};t("b794");k.render=l,k.__scopeId="data-v-1b9eb446";var m=k,g=t("6d29"),v=t.n(g),y=(t("c2d8"),t("499a"),Object(a["createApp"])(m));y.config.globalProperties.$title=function(e){document.title=e},y.config.globalProperties.comColor="#5DBA47",y.config.globalProperties.pre_="h_c_",y.config.globalProperties.$store={},v.a.setDefaultOptions("loading",{forbidClick:!0,duration:0}),y.use(v.a),y.use(p),y.mount("#app")},b794:function(e,n,t){"use strict";t("428fd")},c1fb:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"f",(function(){return p})),t.d(n,"h",(function(){return k})),t.d(n,"k",(function(){return m})),t.d(n,"n",(function(){return g})),t.d(n,"j",(function(){return v})),t.d(n,"c",(function(){return y})),t.d(n,"a",(function(){return j})),t.d(n,"e",(function(){return P})),t.d(n,"m",(function(){return O})),t.d(n,"i",(function(){return w})),t.d(n,"g",(function(){return _})),t.d(n,"d",(function(){return S})),t.d(n,"l",(function(){return C})),t.d(n,"o",(function(){return E}));t("99af"),t("4fad");var c=t("3835"),r=t("53ca"),u=t("bc3a"),o=t.n(u),a=t("6821"),i=t.n(a);o.a.defaults.withCredentials=!0;var l="/api";function f(e){return e&&200===e.status&&e.data&&401===e.data.code&&(localStorage.setItem(b+"auth",""),localStorage.setItem(b+"phone",""),location.href="/"),e}function d(e,n){if(e+="?","object"===Object(r["a"])(n))for(var t=0,u=Object.entries(n);t<u.length;t++){var a=Object(c["a"])(u[t],2),i=a[0],d=a[1];void 0!==d&&null!==d&&(e+="".concat(i,"=").concat(d,"&"))}return e=e.substr(0,e.length-1),o.a.get(l+e).then(f)}function h(e,n,t){return o.a.post(l+e,n,t).then(f)}var b="h_c_";function s(){return localStorage.getItem(b+"phone")&&localStorage.getItem(b+"auth")===i()(localStorage.getItem(b+"phone")+" auth")}function p(e){return d("/getCode",e)}function k(e){return d("/patient",e)}function m(e){return h("/login",e)}function g(e){return d("/result",e)}function v(e){return d("/info",e)}function y(e){return h("/auth",e)}function j(e){return h("/accompany",e)}function P(e){return d("/accompany",e)}function O(e){return h("/pay",e)}function w(e){return d("/getTotalFee",e)}function _(e){return d("/getOrderList",e)}function S(e){return h("/del",e)}function C(e){return h("/newEscortCard",e)}function E(e){return h("/updateImg",e)}}});
//# sourceMappingURL=app.749f5938.js.map