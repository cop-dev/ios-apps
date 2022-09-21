(function(){"use strict";var e={6639:function(e,t,n){var r=n(8061),o=n(6252);const i={id:"app"};function a(e,t,n,r,a,u){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[e.$route.meta.keepAlive?((0,o.wg)(),(0,o.j4)(s,{key:0},{default:(0,o.w5)((({Component:e})=>[((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))],1024))])),_:1})):(0,o.kq)("",!0),e.$route.meta.keepAlive?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(s,{key:1},{default:(0,o.w5)((({Component:e})=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:1}))])}var u={name:"app"},s=n(3744);const c=(0,s.Z)(u,[["render",a],["__scopeId","data-v-55d71285"]]);var f=c,l=n(2201);const p=()=>Promise.all([n.e(753),n.e(358)]).then(n.bind(n,7358)),d=()=>Promise.all([n.e(753),n.e(594)]).then(n.bind(n,2594)),h=[{path:"/:pathMatch(.*)*",redirect:"MainPage"},{name:"MainPage",component:p},{name:"CatApps",component:d}];h.forEach((e=>{e.path=e.path||"/"+(e.name||"")}));const m=(0,l.p7)({routes:h,history:(0,l.r5)()});m.afterEach(((e,t)=>{e.meta.title?document.title=e.meta.title:document.title="ios app",window.scrollTo(0,0)}));var v=n(9669),g=n.n(v);const b=g().create();b.defaults.baseURL="https://cop-dev.github.io/ios-apps/plist",b.defaults.timeout=16e3;var y=b,w=(n(3787),n(3180)),k=(n(4401),n(1743)),_=(n(7658),{methods:{_showAlert(e,t){k.Z.alert({message:e}).then(t)},_showConfirm(e,t,n){k.Z.confirm({message:e}).then(t).catch(n)},_routeReplace(e,t){this.$router.replace({name:e,params:t})},_routeReplaceQ(e,t){this.$router.replace({name:e,query:t})},_routePush(e,t){this.$router.push({name:e,params:t})},_routePushQ(e,t){this.$router.push({name:e,query:t})},_showToast(e){(0,w.Z)(e)},_routerBack(){this.$router?this.$router.back():window.history.back()},_showLoading(){w.Z.loading({mask:!0,duration:1e4,loadingType:"spinner",message:"加载中..."})},_dismissLoading(){w.Z.clear()}}});const j=(0,r.ri)(f);j.use(m),j.mixin(_),j.config.globalProperties.$http=y,j.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{358:"ec3b03a1",594:"4892af2a",753:"9cdc4bbe"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{358:"4f034e44",594:"06b0a7e7",753:"5445b90f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ios-apps:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={358:1,594:1,753:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(753!=t){var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkios_apps"]=self["webpackChunkios_apps"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6639)}));r=n.O(r)})();