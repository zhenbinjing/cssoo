!function(){"use strict";!function(e){var t={slideCell:(e=e||{}).slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoad:e.switchLoad||null},n=document.getElementById(t.slideCell.replace("#",""));if(!n)return!1;var a=function(e,t){e=e.split(" ");var n=[],a=[t=t||document];for(var i in e)0!=e[i].length&&n.push(e[i]);for(var i in n){if(0==a.length)return!1;var r=[];for(var l in a)if("#"==n[i][0])r.push(document.getElementById(n[i].replace("#","")));else if("."==n[i][0])for(var o=a[l].getElementsByTagName("*"),s=0;s<o.length;s++){var c=o[s].className;c&&-1!=c.search(new RegExp("\\b"+n[i].replace(".","")+"\\b"))&&r.push(o[s])}else for(var o=a[l].getElementsByTagName(n[i]),s=0;s<o.length;s++)r.push(o[s]);a=r}return 0!=a.length&&a[0]!=t&&a},i=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},r=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},l=t.effect,o=a(t.prevCell,n)[0],s=a(t.nextCell,n)[0],c=a(t.pageStateCell)[0],u=a(t.mainCell,n)[0];if(!u)return!1;var d,f,m=u.children.length,p=a(t.titCell,n),v=p?p.length:m,h=t.switchLoad,g=parseInt(t.defaultIndex),y=parseInt(t.delayTime),C=parseInt(t.interTime),b="false"!=t.autoPlay&&0!=t.autoPlay,z="false"!=t.autoPage&&0!=t.autoPage,w="false"!=t.pnLoop&&0!=t.pnLoop,T=g,E=null,L=null,N=null,x=0,A=0,M=0,P=0,S=/hp-tablet/gi.test(navigator.appVersion),k="ontouchstart"in window&&!S,F=k?"touchstart":"mousedown",B=k?"touchmove":"",I=k?"touchend":"mouseup",W=u.parentNode.clientWidth,_=m;if(0==v&&(v=m),z){v=m,(p=p[0]).innerHTML="";var D="";if(1==t.autoPage||"true"==t.autoPage)for($=0;v>$;$++)D+="<li></li>";else for($=0;v>$;$++)D+=t.autoPage.replace("$",$+1);p.innerHTML=D,p=p.children}for("leftLoop"==l&&(_+=2,u.appendChild(u.children[0].cloneNode(!0)),u.insertBefore(u.children[m-1].cloneNode(!0),u.children[0])),d=function(e,t){var n=document.createElement("div");n.innerHTML=t,n=n.children[0];var a=e.cloneNode(!0);return n.appendChild(a),e.parentNode.replaceChild(n,e),u=a,n}(u,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),u.style.cssText="width:"+_*W+"px;position:relative;overflow:hidden;padding:0;margin:0;",$=0;_>$;$++)u.children[$].style.cssText="display:table-cell;vertical-align:top;width:"+W+"px";var R=function(e){var t=("leftLoop"==l?g+1:g)+e,n=function(e){for(var t=u.children[e].getElementsByTagName("img"),n=0;n<t.length;n++)t[n].getAttribute(h)&&(t[n].setAttribute("src",t[n].getAttribute(h)),t[n].removeAttribute(h))};if(n(t),"leftLoop"==l)switch(t){case 0:n(m);break;case 1:n(m+1);break;case m:n(0);break;case m+1:n(1)}};window.addEventListener("resize",function(){W=d.clientWidth,u.style.width=_*W+"px";for(var e=0;_>e;e++)u.children[e].style.width=W+"px";H(-("leftLoop"==l?g+1:g)*W,0)},!1);var H=function(e,t,n){(n=n?n.style:u.style).webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms",n.webkitTransform="translate("+e+"px,0)translateZ(0)",n.msTransform=n.MozTransform=n.OTransform="translateX("+e+"px)"},O=function(e){switch(l){case"left":g>=v?g=e?g-1:0:0>g&&(g=e?0:v-1),null!=h&&R(0),H(-g*W,y),T=g;break;case"leftLoop":null!=h&&R(0),H(-(g+1)*W,y),-1==g?(L=setTimeout(function(){H(-v*W,0)},y),g=v-1):g==v&&(L=setTimeout(function(){H(-W,0)},y),g=0),T=g}"function"==typeof t.startFun&&t.startFun(g,v),N=setTimeout(function(){"function"==typeof t.endFun&&t.endFun(g,v)},y);for(var n=0;v>n;n++)r(p[n],t.titOnClassName),n==g&&i(p[n],t.titOnClassName);0==w&&(r(s,"nextStop"),r(o,"prevStop"),0==g?i(o,"prevStop"):g==v-1&&i(s,"nextStop")),c&&(c.innerHTML="<span>"+(g+1)+"</span>/"+v)};if(O(),b&&(E=setInterval(function(){g++,O()},C)),p)for(var $=0;v>$;$++)!function(){var e=$;p[e].addEventListener("click",function(){clearTimeout(L),clearTimeout(N),g=e,O()})}();s&&s.addEventListener("click",function(){(1==w||g!=v-1)&&(clearTimeout(L),clearTimeout(N),g++,O())}),o&&o.addEventListener("click",function(){(1==w||0!=g)&&(clearTimeout(L),clearTimeout(N),g--,O())});var q=function(e){if(!k||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=k?e.touches[0]:e;if(M=t.pageX-x,P=t.pageY-A,void 0===f&&(f=!!(f||Math.abs(M)<Math.abs(P))),!f){switch(e.preventDefault(),b&&clearInterval(E),l){case"left":(0==g&&M>0||g>=v-1&&0>M)&&(M*=.4),H(-g*W+M,0);break;case"leftLoop":H(-(g+1)*W+M,0)}null!=h&&Math.abs(M)>W/3&&R(M>-0?-1:1)}}},X=function e(t){0!=M&&(t.preventDefault(),f||(Math.abs(M)>W/10&&(M>0?g--:g++),O(!0),b&&(E=setInterval(function(){g++,O()},C))),u.rveEventListener(B,q,!1),u.removeEventListener(I,e,!1))};u.addEventListener(F,function(e){clearTimeout(L),clearTimeout(N),f=void 0,M=0;var t=k?e.touches[0]:e;x=t.pageX,A=t.pageY,u.addEventListener(B,q,!1),u.addEventListener(I,X,!1)},!1)}({slideCell:"#focus",titCell:".hd ul",mainCell:".bd ul",effect:"left",autoPlay:!0,interTime:3e3,autoPage:!0,switchLoad:"s-src"}),function(){function e(e){var t=e.getBoundingClientRect(),n=window.innerHeight;return t.top<=n+100}function t(){for(var t=document.querySelectorAll(".bglazy"),a=n;a<t.length;a++)e(t[a])&&(t[a].classList.remove("bglazy"),n=a)}var n=0;window.onload=t(),window.onscroll=function(e,t){void 0===t&&(t=500);var n=null;return function(){var a=new Date,i=arguments;n||(n=a),t&&a-n>=t&&(e.apply(this,i),n=a)}}(t)}(),function(e,t){var n=function(e,t){if(t.getElementsByClassName){var n,a,i=t.documentElement,r=e.Date,l=e.HTMLPictureElement,o="addEventListener",s="getAttribute",c=e[o],u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,m=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],v={},h=Array.prototype.forEach,g=function(e,t){return v[t]||(v[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),v[t].test(e[s]("class")||"")&&v[t]},y=function(e,t){g(e,t)||e.setAttribute("class",(e[s]("class")||"").trim()+" "+t)},C=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[s]("class")||"").replace(n," "))},b=function e(t,n,a){var i=a?o:"removeEventListener";a&&e(t,n),p.forEach(function(e){t[i](e,n)})},z=function(e,a,i,r,l){var o=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,o.initCustomEvent(a,!r,!l,i),e.dispatchEvent(o),o},w=function(t,n){var i;!l&&(i=e.picturefill||a.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},T=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},L=function(){var e,n,a=[],i=[],r=a,l=function(){var t=r;for(r=a.length?i:a,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(a,i){e&&!i?a.apply(this,arguments):(r.push(a),n||(n=!0,(t.hidden?u:d)(l)))};return o._lsFlush=l,o}(),N=function(e,t){return t?function(){L(e)}:function(){var t=this,n=arguments;L(function(){e.apply(t,n)})}},x=function(e){var t,n=0,i=a.ricTimeout,l=function(){t=!1,n=r.now(),e()},o=f&&a.ricTimeout?function(){f(l,{timeout:i}),i!==a.ricTimeout&&(i=a.ricTimeout)}:N(function(){u(l)},!0);return function(e){var a;(e=!0===e)&&(i=33),t||(t=!0,(a=125-(r.now()-n))<0&&(a=0),e||a<9&&f?o():u(o,a))}},A=function(e){var t,n,a=function(){t=null,e()},i=function e(){var t=r.now()-n;t<99?u(e,99-t):(f||a)(a)};return function(){n=r.now(),t||(t=u(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};a=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in a||(a[t]=n[t]);e.lazySizesConfig=a,u(function(){a.init&&S()})}();var M=function(){var l,d,f,p,v,E,M,S,k,F,B,I,W,_,D=/^img$/i,R=/^iframe$/i,H="onscroll"in e&&!/glebot/.test(navigator.userAgent),O=0,$=0,q=-1,X=function e(t){$--,t&&t.target&&b(t.target,e),(!t||$<0||!t.target)&&($=0)},Y=function(e,n){var a,r=e,l="hidden"==T(t.body,"visibility")||"hidden"!=T(e,"visibility");for(S-=n,B+=n,k-=n,F+=n;l&&(r=r.offsetParent)&&r!=t.body&&r!=i;)(l=(T(r,"opacity")||1)>0)&&"visible"!=T(r,"overflow")&&(a=r.getBoundingClientRect(),l=F>a.left&&k<a.right&&B>a.top-1&&S<a.bottom+1);return l},j=function(){var e,r,o,c,u,f,m,v,h,g=n.elements;if((p=a.loadMode)&&$<8&&(e=g.length)){r=0,q++,null==W&&("expand"in a||(a.expand=i.clientHeight>500&&i.clientWidth>500?500:370),I=a.expand,W=I*a.expFactor),O<W&&$<1&&q>2&&p>2&&!t.hidden?(O=W,q=0):O=p>1&&q>1&&$<6?I:0;for(;r<e;r++)if(g[r]&&!g[r]._lazyRace)if(H)if((v=g[r][s]("data-expand"))&&(f=1*v)||(f=O),h!==f&&(E=innerWidth+f*_,M=innerHeight+f,m=-1*f,h=f),o=g[r].getBoundingClientRect(),(B=o.bottom)>=m&&(S=o.top)<=M&&(F=o.right)>=m*_&&(k=o.left)<=E&&(B||F||k||S)&&(a.loadHidden||"hidden"!=T(g[r],"visibility"))&&(d&&$<3&&!v&&(p<3||q<4)||Y(g[r],f))){if(U(g[r]),u=!0,$>9)break}else!u&&d&&!c&&$<4&&q<4&&p>2&&(l[0]||a.preloadAfterLoad)&&(l[0]||!v&&(B||F||k||S||"auto"!=g[r][s](a.sizesAttr)))&&(c=l[0]||g[r]);else U(g[r]);c&&!u&&U(c)}},V=x(j),Z=function(e){y(e.target,a.loadedClass),C(e.target,a.loadingClass),b(e.target,J),z(e.target,"lazyloaded")},G=N(Z),J=function(e){G({target:e.target})},K=function(e){var t,n=e[s](a.srcsetAttr);(t=a.customMedia[e[s]("data-media")||e[s]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Q=N(function(e,t,n,i,r){var l,o,c,d,p,v;(p=z(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?y(e,a.autosizesClass):e.setAttribute("sizes",i)),o=e[s](a.srcsetAttr),l=e[s](a.srcAttr),r&&(c=e.parentNode,d=c&&m.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(o||l||d),p={target:e},v&&(b(e,X,!0),clearTimeout(f),f=u(X,2500),y(e,a.loadingClass),b(e,J,!0)),d&&h.call(c.getElementsByTagName("source"),K),o?e.setAttribute("srcset",o):l&&!d&&(R.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,l):e.src=l),r&&(o||d)&&w(e,{src:l})),e._lazyRace&&delete e._lazyRace,C(e,a.lazyClass),L(function(){(!v||e.complete&&e.naturalWidth>1)&&(v?X(p):$--,Z(p))},!0)}),U=function(e){var t,n=D.test(e.nodeName),i=n&&(e[s](a.sizesAttr)||e[s]("sizes")),r="auto"==i;(!r&&d||!n||!e[s]("src")&&!e.srcset||e.complete||g(e,a.errorClass)||!g(e,a.lazyClass))&&(t=z(e,"lazyunveilread").detail,r&&P.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,$++,Q(e,t,r,i,n))},ee=function e(){if(!d)if(r.now()-v<999)u(e,999);else{var t=A(function(){a.loadMode=3,V()});d=!0,a.loadMode=3,V(),c("scroll",function(){3==a.loadMode&&(a.loadMode=2),t()},!0)}};return{_:function(){v=r.now(),n.elements=t.getElementsByClassName(a.lazyClass),l=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),_=a.hFac,c("scroll",V,!0),c("resize",V,!0),e.MutationObserver?new MutationObserver(V).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[o]("DOMNodeInserted",V,!0),i[o]("DOMAttrModified",V,!0),setInterval(V,999)),c("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[o](e,V,!0)}),/d$|^c/.test(t.readyState)?ee():(c("load",ee),t[o]("DOMContentLoaded",V),u(ee,2e4)),n.elements.length?(j(),L._lsFlush()):V()},checkElems:V,unveil:U}}(),P=function(){var e,n=N(function(e,t,n,a){var i,r,l;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),m.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,l=i.length;r<l;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||w(e,n.detail)}),i=function(e,t,a){var i,r=e.parentNode;r&&(a=E(e,r,a),(i=z(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=i.detail.width)&&a!==e._lazysizesWidth&&n(e,r,i,a))},r=A(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(a.autosizesClass),c("resize",r)},checkElems:r,updateElem:i}}(),S=function e(){e.i||(e.i=!0,P._(),M._())};return n={cfg:a,autoSizer:P,loader:M,init:S,uP:w,aC:y,rC:C,hC:g,fire:z,gW:E,rAF:L}}}(e,e.document);e.lazySizes=n,"object"==("undefined"==typeof module?"undefined":babelHelpers.typeof(module))&&module.exports&&(module.exports=n)}(window)}();
