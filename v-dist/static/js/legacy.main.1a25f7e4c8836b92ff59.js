!function(n){function t(t){for(var o,a,u=t[0],c=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],o=!0,u=1;u<e.length;u++){var c=e[u];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),n=a(a.s=e[0]))}return n}var o={},r={1:0},i=[];function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.e=function(n){var t=[],e=r[n];if(0!==e)if(e)t.push(e[2]);else{var o=new Promise(function(t,o){e=r[n]=[t,o]});t.push(e[2]=o);var i,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(n){return a.p+"static/js/legacy."+({}[n]||n)+"."+{2:"16fd3b635a85218d2ced",3:"d7ef1e47ae9e4bda2577"}[n]+".js"}(n),i=function(t){c.onerror=c.onload=null,clearTimeout(s);var e=r[n];if(0!==e){if(e){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+n+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,e[1](a)}r[n]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,u.appendChild(c)}return Promise.all(t)},a.m=n,a.c=o,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)a.d(e,o,function(t){return n[t]}.bind(null,o));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/v-dist/",a.oe=function(n){throw console.error(n),n};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([23,0]),e()}({23:function(n,t,e){e(24),n.exports=e(50)},45:function(n,t,e){"use strict";var o=e(7);e.n(o).a},46:function(n,t,e){(n.exports=e(12)(!1)).push([n.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml{line-height:1.15;-webkit-text-size-adjust:100%\n}\nbody{margin:0\n}\nh1{font-size:2em;margin:.67em 0\n}\nhr{box-sizing:content-box;height:0;overflow:visible\n}\npre{font-family:monospace,monospace;font-size:1em\n}\na{background-color:transparent\n}\nabbr[title]{border-bottom:0;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted\n}\nb,strong{font-weight:bolder\n}\ncode,kbd,samp{font-family:monospace,monospace;font-size:1em\n}\nsmall{font-size:80%\n}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline\n}\nsub{bottom:-0.25em\n}\nsup{top:-0.5em\n}\nimg{border-style:none\n}\nbutton,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0\n}\nbutton,input{overflow:visible\n}\nbutton,select{text-transform:none\n}\nbutton,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button\n}\nbutton::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0\n}\nbutton:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:0.01rem dotted ButtonText\n}\nfieldset{padding:.35em .75em .625em\n}\nlegend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal\n}\nprogress{vertical-align:baseline\n}\ntextarea{overflow:auto\n}\n[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0\n}\n[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto\n}\n[type="search"]{-webkit-appearance:textfield;outline-offset:-0.02rem\n}\n[type="search"]::-webkit-search-decoration{-webkit-appearance:none\n}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit\n}\ndetails{display:block\n}\nsummary{display:list-item\n}\ntemplate{display:none\n}\n[hidden]{display:none\n}\n* {\n    box-sizing: border-box\n}\n*:before,\n*:after {\n    box-sizing: border-box\n}\nhtml,\nbody {\n    height: 100%;\n}\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n}\ndiv {\n    text-align: center;\n}\nbutton {\n    font-size: 0.3rem;\n    vertical-align: middle;\n}\n.title {\n    font-size: 0.6rem;\n    color: #57bb8a;\n    margin: 0;\n    line-height: 1;\n    font-weight: bold;\n}\na {\n    text-decoration: none;\n    font-size: 0.6rem;\n    color: #57bb8a;\n    margin: 0;\n    line-height: 2;\n    font-weight: bold;\n}\na.active {\n    color: #35495e;\n}\nimg {\n    max-width: 100%;\n}\np {\n    padding: 0;\n    margin: 0;\n}\nbutton {\n    color: #35495e;\n}\n.fz40 {\n    font-size: 0.4rem;\n    color: #35495e;\n}\n.main {\n    width: 100%;\n}\n.hello {\n    font-size: 0;\n}\n.hello img {\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  display: inline-block;\n}\n.hello img:after {\n  content: attr(alt) " Loading ...";\n  display: block;\n  box-sizing: border-box;\n  padding-top: 1rem;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #f5f5f5;\n  text-align: center;\n  font-size: 0.24rem;\n  color: rgb(100, 100, 100);\n}\n.router {\n  font-size: 0.5rem\n}\n.router_img {\n  font-size: 0;\n  text-align: center;\n}\n.router_img img{\n  width: 2rem;\n  height: 0.8rem;\n}\n.vuex {\n    line-height: 1\n}\n.increment {\n    margin-top: 0.2rem\n}\n',""])},47:function(n,t,e){"use strict";var o=e(8);e.n(o).a},48:function(n,t,e){(n.exports=e(12)(!1)).push([n.i,"\n.mlra {\n  margin-left: auto;\n  margin-right: auto;\n}\n",""])},49:function(n,t,e){n.exports=e.p+"static/assets/hld.e58f898.png"},50:function(n,t,e){"use strict";e.r(t);var o={};e.r(o),e.d(o,"getRouter",function(){return S}),e.d(o,"getText",function(){return R}),e.d(o,"getCount",function(){return L});var r={};e.r(r),e.d(r,"getRouter",function(){return I}),e.d(r,"getText",function(){return $}),e.d(r,"loadings",function(){return M}),e.d(r,"increment",function(){return U}),e.d(r,"decrement",function(){return A});var i={};e.r(i),e.d(i,"ROUTER_LIST",function(){return N}),e.d(i,"TEXT_LIST",function(){return B}),e.d(i,"COUNT_LIST",function(){return D}),e.d(i,"increment",function(){return J}),e.d(i,"decrement",function(){return X});var a=e(6),u=e.n(a),c=e(2),s=e.n(c),l=e(3),f=e(22),d=e.n(f),p=e(4),m=e.n(p),b={props:{data:{type:Object,default:function(){return{avatar:""}}}}},h=e(1),g=Object(h.a)(b,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"hello"},[t("p",{staticClass:"logo"},[t("img",{attrs:{src:this.data.avatar,alt:"logo"}})])])},[],!1,null,null,null);g.options.__file="hello.vue";var v=g.exports,x=Object(h.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"router"},[e("div",{staticClass:"title"},[n._v("Ecosystem")]),n._v(" "),e("router-link",{attrs:{to:"/vr1"}},[n._v("router")]),n._v(" "),e("router-link",{attrs:{to:"/axios"}},[n._v("axios")]),n._v(" "),e("router-link",{attrs:{to:"/vuex"}},[n._v("vuex")]),n._v(" "),e("router-view",{staticClass:"fz40"})],1)},[],!1,null,null,null);x.options.__file="router.vue";var y={components:{hello:v,router:x.exports},data:function(){return{data:{}}},created:function(){var n=this;m.a.get("https://i-cut.cc/axios.json").then(function(t){n.data=t.data.logo})}},_=(e(45),e(47),Object(h.a)(y,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("hello",{attrs:{data:this.data}}),this._v(" "),t("router")],1)},[],!1,null,null,null));_.options.__file="App.vue";var w=_.exports,z=e(11),k=[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"router_img"},[t("img",{attrs:{src:e(49),alt:""}})])}],T=function(n){return n.dispatch("getRouter")},j={prefetch:T,computed:u()({},Object(l.c)({RouterData:"getRouter"})),mounted:function(){T(this.$store)}},O=Object(h.a)(j,function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"vue-router"},[this._v("\n  "+this._s(this.RouterData.value)+"\n  "),this._m(0)])},k,!1,null,null,null);O.options.__file="Vr1.vue";var E=O.exports;s.a.use(z.a);var C=new z.a({routes:[{path:"/",redirect:"/vr1"},{path:"/vr1",component:E},{path:"/axios",component:function(){return e.e(2).then(e.bind(null,58))}},{path:"/vuex",component:function(){return e.e(3).then(e.bind(null,57))}}],linkActiveClass:"active"}),S=function(n){return n.router},R=function(n){return n.text},L=function(n){return n.count},P="https://i-cut.cc/axios.json",I=function(n){var t=n.commit;return m.a.get(P).then(function(n){t("ROUTER_LIST",n.data)})},$=function(n){var t=n.commit;return m.a.get(P).then(function(n){t("TEXT_LIST",n.data)})},M=function(n){var t=n.commit;return m.a.get(P).then(function(n){t("COUNT_LIST",n.data)})},U=function(n){return(0,n.commit)("increment")},A=function(n){return(0,n.commit)("decrement")},N=function(n,t){n.router=t.router},B=function(n,t){n.text=t.text},D=function(n,t){n.count=t.number.count},J=function(n){"空"===n.count?n.count="点击加载初始化值":"点击加载初始化值"===n.count?n.count="点击加载初始化值":n.count+=1},X=function(n){"空"===n.count?n.count="点击加载初始化值":"点击加载初始化值"===n.count?n.count="点击加载初始化值":n.count-=1};s.a.use(l.a);var q=new l.a.Store({state:{router:{},text:"",count:"空"},getters:o,actions:r,mutations:i});e.d(t,"app",function(){return V}),e.d(t,"router",function(){return C}),e.d(t,"store",function(){return q}),d.a.attach(document.body),s.a.config.productionTip=!1,s.a.use(l.a);var V=new s.a(u()({el:"#app",router:C,store:q},w))},7:function(n,t,e){var o=e(46);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e(13).default)("0de36a8a",o,!0,{})},8:function(n,t,e){var o=e(48);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e(13).default)("3c3f6501",o,!0,{})}});
//# sourceMappingURL=legacy.main.1a25f7e4c8836b92ff59.js.map