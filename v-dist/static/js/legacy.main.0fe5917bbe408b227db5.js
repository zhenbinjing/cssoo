!function(t){function n(n){for(var r,u,a=n[0],c=n[1],s=n[2],f=0,d=[];f<a.length;f++)u=a[f],o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(n);d.length;)d.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},o={0:0},i=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise(function(n,r){e=o[t]=[n,r]});n.push(e[2]=r);var i,a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(t){return u.p+"static/js/legacy."+({}[t]||t)+"."+{1:"33ff24e52bc78d4edd01",2:"277678cf037389f6376c"}[t]+".js"}(t),i=function(n){c.onerror=c.onload=null,clearTimeout(s);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");u.type=r,u.request=i,e[1](u)}o[t]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,a.appendChild(c)}return Promise.all(n)},u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/v-dist/",u.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=c;i.push([23,3]),e()}({23:function(t,n,e){e(24),t.exports=e(50)},45:function(t,n,e){"use strict";var r=e(7);e.n(r).a},46:function(t,n,e){(t.exports=e(12)(!1)).push([t.i,'\n* {\n    box-sizing: border-box\n}\n*:before,\n*:after {\n    box-sizing: border-box\n}\nhtml,\nbody {\n    height: 100%;\n}\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n}\ndiv {\n    text-align: center;\n}\nbutton {\n    font-size: 0.3rem;\n    vertical-align: middle;\n}\n.title {\n    font-size: 0.6rem;\n    color: #57bb8a;\n    margin: 0;\n    line-height: 1;\n    font-weight: bold;\n}\na {\n    text-decoration: none;\n    font-size: 0.6rem;\n    color: #57bb8a;\n    margin: 0;\n    line-height: 2;\n    font-weight: bold;\n}\na.active {\n    color: #35495e;\n}\nimg {\n    max-width: 100%;\n}\np {\n    padding: 0;\n    margin: 0;\n}\nbutton {\n    color: #35495e;\n}\n.fz40 {\n    font-size: 0.4rem;\n    color: #35495e;\n}\n.main {\n    width: 100%;\n}\n.hello {\n    font-size: 0;\n}\n.hello img {\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  display: inline-block;\n}\n.hello img:after {\n  content: attr(alt) " Loading ...";\n  display: block;\n  box-sizing: border-box;\n  padding-top: 1rem;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #f5f5f5;\n  text-align: center;\n  font-size: 0.24rem;\n  color: rgb(100, 100, 100);\n}\n.router {\n  font-size: 0.5rem\n}\n.router_img {\n  font-size: 0;\n  text-align: center;\n}\n.router_img img{\n  width: 2rem;\n  height: 0.8rem;\n}\n.vuex {\n    line-height: 1\n}\n.increment {\n    margin-top: 0.2rem\n}\n',""])},47:function(t,n,e){"use strict";var r=e(8);e.n(r).a},48:function(t,n,e){(t.exports=e(12)(!1)).push([t.i,"\n.mlra {\n  margin-left: auto;\n  margin-right: auto;\n}\n",""])},49:function(t,n,e){t.exports=e.p+"static/assets/hld.e58f898.png"},50:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"getRouter",function(){return k}),e.d(r,"getText",function(){return R}),e.d(r,"getCount",function(){return L});var o={};e.r(o),e.d(o,"getRouter",function(){return I}),e.d(o,"getText",function(){return $}),e.d(o,"loadings",function(){return M}),e.d(o,"increment",function(){return U}),e.d(o,"decrement",function(){return A});var i={};e.r(i),e.d(i,"ROUTER_LIST",function(){return N}),e.d(i,"TEXT_LIST",function(){return D}),e.d(i,"COUNT_LIST",function(){return J}),e.d(i,"increment",function(){return X}),e.d(i,"decrement",function(){return q});var u=e(6),a=e.n(u),c=e(2),s=e.n(c),l=e(3),f=e(22),d=e.n(f),p=e(4),m=e.n(p),v={props:{data:{type:Object,default:function(){return{avatar:""}}}}},h=e(1),g=Object(h.a)(v,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("p",{staticClass:"logo"},[n("img",{attrs:{src:this.data.avatar,alt:"logo"}})])])},[],!1,null,null,null);g.options.__file="hello.vue";var b=g.exports,_=Object(h.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"router"},[e("div",{staticClass:"title"},[t._v("Ecosystem")]),t._v(" "),e("router-link",{attrs:{to:"/vr1"}},[t._v("router")]),t._v(" "),e("router-link",{attrs:{to:"/axios"}},[t._v("axios")]),t._v(" "),e("router-link",{attrs:{to:"/vuex"}},[t._v("vuex")]),t._v(" "),e("router-view",{staticClass:"fz40"})],1)},[],!1,null,null,null);_.options.__file="router.vue";var x={components:{hello:b,router:_.exports},data:function(){return{data:{}}},created:function(){var t=this;m.a.get("https://i-cut.cc/axios.json").then(function(n){t.data=n.data.logo})}},y=(e(45),e(47),Object(h.a)(x,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("hello",{attrs:{data:this.data}}),this._v(" "),n("router")],1)},[],!1,null,null,null));y.options.__file="App.vue";var T=y.exports,w=e(11),j=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"router_img"},[n("img",{attrs:{src:e(49),alt:""}})])}],O=function(t){return t.dispatch("getRouter")},z={prefetch:O,computed:a()({},Object(l.c)({RouterData:"getRouter"})),mounted:function(){O(this.$store)}},E=Object(h.a)(z,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vue-router"},[this._v("\n  "+this._s(this.RouterData.value)+"\n  "),this._m(0)])},j,!1,null,null,null);E.options.__file="Vr1.vue";var C=E.exports;s.a.use(w.a);var S=new w.a({routes:[{path:"/",redirect:"/vr1"},{path:"/vr1",component:C},{path:"/axios",component:function(){return e.e(1).then(e.bind(null,58))}},{path:"/vuex",component:function(){return e.e(2).then(e.bind(null,57))}}],linkActiveClass:"active"}),k=function(t){return t.router},R=function(t){return t.text},L=function(t){return t.count},P="https://i-cut.cc/axios.json",I=function(t){var n=t.commit;return m.a.get(P).then(function(t){n("ROUTER_LIST",t.data)})},$=function(t){var n=t.commit;return m.a.get(P).then(function(t){n("TEXT_LIST",t.data)})},M=function(t){var n=t.commit;return m.a.get(P).then(function(t){n("COUNT_LIST",t.data)})},U=function(t){return(0,t.commit)("increment")},A=function(t){return(0,t.commit)("decrement")},N=function(t,n){t.router=n.router},D=function(t,n){t.text=n.text},J=function(t,n){t.count=n.number.count},X=function(t){"空"===t.count?t.count="点击加载初始化值":"点击加载初始化值"===t.count?t.count="点击加载初始化值":t.count+=1},q=function(t){"空"===t.count?t.count="点击加载初始化值":"点击加载初始化值"===t.count?t.count="点击加载初始化值":t.count-=1};s.a.use(l.a);var B=new l.a.Store({state:{router:{},text:{},count:"空"},getters:r,actions:o,mutations:i});e.d(n,"app",function(){return V}),e.d(n,"router",function(){return S}),e.d(n,"store",function(){return B}),d.a.attach(document.body),s.a.config.productionTip=!1,s.a.use(l.a);var V=new s.a(a()({el:"#app",router:S,store:B},T))},7:function(t,n,e){var r=e(46);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(13).default)("0de36a8a",r,!0,{})},8:function(t,n,e){var r=e(48);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(13).default)("3c3f6501",r,!0,{})}});
//# sourceMappingURL=legacy.main.0fe5917bbe408b227db5.js.map