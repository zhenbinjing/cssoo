!function(t){function n(n){for(var r,a,u=n[0],c=n[1],s=n[2],f=0,d=[];f<u.length;f++)a=u[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(n);d.length;)d.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={1:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise(function(n,r){e=o[t]=[n,r]});n.push(e[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(t){return a.p+"static/js/legacy."+({}[t]||t)+"."+{2:"73918fc071aa4bcc0ba2",3:"5d5a3f7aeb649aca41fb"}[t]+".js"}(t),i=function(n){u.onerror=u.onload=null,clearTimeout(c);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,e[1](a)}o[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/v-dist/",a.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=c;i.push([171,0]),e()}({171:function(t,n,e){e(172),t.exports=e(406)},363:function(t,n,e){"use strict";var r=e(79);e.n(r).a},364:function(t,n,e){n=t.exports=e(112)(!1);var r=e(365)(e(366));n.push([t.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml{line-height:1.15;-webkit-text-size-adjust:100%}\nbody{margin:0}\nh1{font-size:2em;margin:.67em 0}\nhr{box-sizing:content-box;height:0;overflow:visible}\npre{font-family:monospace,monospace;font-size:1em}\na{background-color:transparent}\nabbr[title]{border-bottom:0;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}\nb,strong{font-weight:bolder}\ncode,kbd,samp{font-family:monospace,monospace;font-size:1em}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsub{bottom:-0.25em}\nsup{top:-0.5em}\nimg{border-style:none}\nbutton,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\nbutton,input{overflow:visible}\nbutton,select{text-transform:none}\nbutton,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}\nbutton::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}\nbutton:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:0.01rem dotted ButtonText}\nfieldset{padding:.35em .75em .625em}\nlegend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\nprogress{vertical-align:baseline}\ntextarea{overflow:auto}\n[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}\n[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}\n[type="search"]{-webkit-appearance:textfield;outline-offset:-0.02rem}\n[type="search"]::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\ndetails{display:block}\nsummary{display:list-item}\ntemplate{display:none}\n[hidden]{display:none}\n* {\r\n    box-sizing: border-box\n}\n*:before,\r\n*:after {\r\n    box-sizing: border-box\n}\n@font-face {\r\n\tfont-family: \'amrcaxbc\';\r\n\tsrc: url('+r+") format('truetype')\n}\n.amrcaxbc{ font-family: 'amrcaxbc';\n}\nhtml,\r\nbody {\r\n    height: 100%;\n}\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0;\n}\ndiv {\r\n    text-align: center;\n}\nbutton {\r\n    font-size: 0.3rem;\r\n    vertical-align: middle;\n}\n.title {\r\n    font-size: 0.6rem;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 1;\r\n    font-weight: bold;\n}\na {\r\n    text-decoration: none;\r\n    font-size: 0.6rem;\r\n    color: #57bb8a;\r\n    margin: 0;\r\n    line-height: 2;\r\n    font-weight: bold;\n}\na.active {\r\n    color: #35495e;\n}\nimg {\r\n    max-width: 100%;\n}\np {\r\n    padding: 0;\r\n    margin: 0;\n}\nbutton {\r\n    color: #35495e;\n}\n.fz40 {\r\n    font-size: 0.4rem;\r\n    color: #35495e;\n}\n.main {\r\n    width: 100%;\n}\n.hello {\r\n    font-size: 0;\n}\n.hello img {\r\n  position: relative;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  display: inline-block;\n}\n.hello img:after {\r\n  content: attr(alt) \" Loading ...\";\r\n  display: block;\r\n  box-sizing: border-box;\r\n  padding-top: 1rem;\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #f5f5f5;\r\n  text-align: center;\r\n  font-size: 0.24rem;\r\n  color: rgb(100, 100, 100);\n}\n.router {\r\n  font-size: 0.5rem\n}\n.router_img {\r\n  font-size: 0;\r\n  text-align: center;\n}\n.router_img img{\r\n  width: 2rem;\r\n  height: 0.8rem;\n}\n.vuex {\r\n    line-height: 1\n}\n.increment {\r\n    margin-top: 0.2rem\n}\n",""])},366:function(t,n,e){t.exports=e.p+"static/font/amrcaxbc.f04e667.ttf"},367:function(t,n,e){"use strict";var r=e(80);e.n(r).a},368:function(t,n,e){(t.exports=e(112)(!1)).push([t.i,".mlra {\n  margin-left: auto;\n  margin-right: auto;\n}\n",""])},403:function(t,n,e){t.exports=e.p+"static/img/hld.27ffe07.png"},406:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"getRouter",function(){return T}),e.d(r,"getText",function(){return j}),e.d(r,"getCount",function(){return O});var o={};e.r(o),e.d(o,"getRouter",function(){return C}),e.d(o,"getText",function(){return E}),e.d(o,"loadings",function(){return L}),e.d(o,"increment",function(){return S}),e.d(o,"decrement",function(){return P});var i={};e.r(i),e.d(i,"ROUTER_LIST",function(){return I}),e.d(i,"TEXT_LIST",function(){return $}),e.d(i,"COUNT_LIST",function(){return M}),e.d(i,"increment",function(){return A}),e.d(i,"decrement",function(){return D});var a=e(78),u=e.n(a),c=e(32),s=e.n(c),l=e(43),f=e(170),d=e.n(f),p=e(53),m=e.n(p),b={props:{data:{type:Object,default:function(){return{avatar:""}}}}},g=e(29),h={components:{Hello:Object(g.a)(b,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("p",{staticClass:"logo"},[n("img",{attrs:{src:this.data.avatar,alt:"logo"}})])])},[],!1,null,null,null).exports,Router:Object(g.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"router amrcaxbc"},[e("div",{staticClass:"title"},[t._v("Ecosystem")]),t._v(" "),e("RouterLink",{attrs:{to:"/vr1"}},[t._v(" router ")]),t._v(" "),e("RouterLink",{attrs:{to:"/axios"}},[t._v(" axios ")]),t._v(" "),e("RouterLink",{attrs:{to:"/vuex"}},[t._v(" vuex ")]),t._v(" "),e("RouterView",{staticClass:"fz40"})],1)},[],!1,null,null,null).exports},data:function(){return{data:{}}},created:function(){var t=this;m.a.get("https://i-cut.cc/axios.json").then(function(n){t.data=n.data.logo})}},v=(e(363),e(367),Object(g.a)(h,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Hello",{attrs:{data:this.data}}),this._v(" "),n("Router")],1)},[],!1,null,null,null).exports),x=(e(369),e(374),e(111)),y=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"router_img"},[n("img",{attrs:{src:e(403),alt:""}})])}],w=function(t){return t.dispatch("getRouter")},_={prefetch:w,computed:u()({},Object(l.c)({RouterData:"getRouter"})),mounted:function(){w(this.$store)}},z=Object(g.a)(_,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vue-router"},[this._v("\n  "+this._s(this.RouterData.value)+"\n  "),this._m(0)])},y,!1,null,null,null).exports;s.a.use(x.a);var k=new x.a({routes:[{path:"/",redirect:"/vr1"},{path:"/vr1",component:z},{path:"/axios",component:function(){return e.e(2).then(e.bind(null,414))}},{path:"/vuex",component:function(){return e.e(3).then(e.bind(null,413))}}],linkActiveClass:"active"}),T=function(t){return t.router},j=function(t){return t.text},O=function(t){return t.count},R="https://i-cut.cc/axios.json",C=function(t){var n=t.commit;return m.a.get(R).then(function(t){n("ROUTER_LIST",t.data)})},E=function(t){var n=t.commit;return m.a.get(R).then(function(t){n("TEXT_LIST",t.data)})},L=function(t){var n=t.commit;return m.a.get(R).then(function(t){n("COUNT_LIST",t.data)})},S=function(t){return(0,t.commit)("increment")},P=function(t){return(0,t.commit)("decrement")},I=function(t,n){t.router=n.router},$=function(t,n){t.text=n.text},M=function(t,n){t.count=n.number.count},U="点击加载初始化值",A=function(t){"空"===t.count?t.count=U:t.count===U?t.count=U:t.count+=1},D=function(t){"空"===t.count?t.count=U:t.count===U?t.count=U:t.count-=1};s.a.use(l.a);var H=new l.a.Store({state:{router:{},text:"",count:"空"},getters:r,actions:o,mutations:i});e.d(n,"app",function(){return J}),e.d(n,"router",function(){return k}),e.d(n,"store",function(){return H}),d.a.attach(document.body),s.a.config.productionTip=!1,s.a.use(l.a);var J=new s.a(u()({el:"#app",router:k,store:H},v))},79:function(t,n,e){var r=e(364);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(113).default)("4e739682",r,!0,{})},80:function(t,n,e){var r=e(368);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(113).default)("5e1a8305",r,!0,{})}});
//# sourceMappingURL=legacy.main.7da2a432575fa7927e3c.js.map