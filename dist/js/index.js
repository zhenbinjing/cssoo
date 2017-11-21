!function(){"use strict";!function(e){var t={slideCell:(e=e||{}).slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoad:e.switchLoad||null},n=document.getElementById(t.slideCell.replace("#",""));if(!n)return!1;var a=function(e,t){e=e.split(" ");var n=[],a=[t=t||document];for(var i in e)0!=e[i].length&&n.push(e[i]);for(var i in n){if(0==a.length)return!1;var r=[];for(var l in a)if("#"==n[i][0])r.push(document.getElementById(n[i].replace("#","")));else if("."==n[i][0])for(var o=a[l].getElementsByTagName("*"),s=0;s<o.length;s++){var u=o[s].className;u&&-1!=u.search(new RegExp("\\b"+n[i].replace(".","")+"\\b"))&&r.push(o[s])}else for(var o=a[l].getElementsByTagName(n[i]),s=0;s<o.length;s++)r.push(o[s]);a=r}return 0!=a.length&&a[0]!=t&&a},i=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},r=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},l=t.effect,o=a(t.prevCell,n)[0],s=a(t.nextCell,n)[0],u=a(t.pageStateCell)[0],c=a(t.mainCell,n)[0];if(!c)return!1;var d,f,m=c.children.length,p=a(t.titCell,n),v=p?p.length:m,g=t.switchLoad,h=parseInt(t.defaultIndex),y=parseInt(t.delayTime),b=parseInt(t.interTime),C="false"!=t.autoPlay&&0!=t.autoPlay,z="false"!=t.autoPage&&0!=t.autoPage,E="false"!=t.pnLoop&&0!=t.pnLoop,T=h,A=null,L=null,w=null,N=0,x=0,M=0,P=0,S=/hp-tablet/gi.test(navigator.appVersion),k="ontouchstart"in window&&!S,F=k?"touchstart":"mousedown",B=k?"touchmove":"",I=k?"touchend":"mouseup",W=c.parentNode.clientWidth,_=m;if(0==v&&(v=m),z){v=m,(p=p[0]).innerHTML="";var D="";if(1==t.autoPage||"true"==t.autoPage)for(Y=0;v>Y;Y++)D+="<li></li>";else for(Y=0;v>Y;Y++)D+=t.autoPage.replace("$",Y+1);p.innerHTML=D,p=p.children}for("leftLoop"==l&&(_+=2,c.appendChild(c.children[0].cloneNode(!0)),c.insertBefore(c.children[m-1].cloneNode(!0),c.children[0])),d=function(e,t){var n=document.createElement("div");n.innerHTML=t,n=n.children[0];var a=e.cloneNode(!0);return n.appendChild(a),e.parentNode.replaceChild(n,e),c=a,n}(c,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),c.style.cssText="width:"+_*W+"px;position:relative;overflow:hidden;padding:0;margin:0;",Y=0;_>Y;Y++)c.children[Y].style.cssText="display:table-cell;vertical-align:top;width:"+W+"px";var O=function(){"function"==typeof t.startFun&&t.startFun(h,v)},R=function(){"function"==typeof t.endFun&&t.endFun(h,v)},H=function(e){var t=("leftLoop"==l?h+1:h)+e,n=function(e){for(var t=c.children[e].getElementsByTagName("img"),n=0;n<t.length;n++)t[n].getAttribute(g)&&(t[n].setAttribute("src",t[n].getAttribute(g)),t[n].removeAttribute(g))};if(n(t),"leftLoop"==l)switch(t){case 0:n(m);break;case 1:n(m+1);break;case m:n(0);break;case m+1:n(1)}},$=function(){W=d.clientWidth,c.style.width=_*W+"px";for(var e=0;_>e;e++)c.children[e].style.width=W+"px";X(-("leftLoop"==l?h+1:h)*W,0)};window.addEventListener("resize",$,!1);var X=function(e,t,n){(n=n?n.style:c.style).webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms",n.webkitTransform="translate("+e+"px,0)translateZ(0)",n.msTransform=n.MozTransform=n.OTransform="translateX("+e+"px)"},q=function(e){switch(l){case"left":h>=v?h=e?h-1:0:0>h&&(h=e?0:v-1),null!=g&&H(0),X(-h*W,y),T=h;break;case"leftLoop":null!=g&&H(0),X(-(h+1)*W,y),-1==h?(L=setTimeout(function(){X(-v*W,0)},y),h=v-1):h==v&&(L=setTimeout(function(){X(-W,0)},y),h=0),T=h}O(),w=setTimeout(function(){R()},y);for(var n=0;v>n;n++)r(p[n],t.titOnClassName),n==h&&i(p[n],t.titOnClassName);0==E&&(r(s,"nextStop"),r(o,"prevStop"),0==h?i(o,"prevStop"):h==v-1&&i(s,"nextStop")),u&&(u.innerHTML="<span>"+(h+1)+"</span>/"+v)};if(q(),C&&(A=setInterval(function(){h++,q()},b)),p)for(var Y=0;v>Y;Y++)!function(){var e=Y;p[e].addEventListener("click",function(){clearTimeout(L),clearTimeout(w),h=e,q()})}();s&&s.addEventListener("click",function(){(1==E||h!=v-1)&&(clearTimeout(L),clearTimeout(w),h++,q())}),o&&o.addEventListener("click",function(){(1==E||0!=h)&&(clearTimeout(L),clearTimeout(w),h--,q())});var j=function(e){clearTimeout(L),clearTimeout(w),f=void 0,M=0;var t=k?e.touches[0]:e;N=t.pageX,x=t.pageY,c.addEventListener(B,V,!1),c.addEventListener(I,Z,!1)},V=function(e){if(!k||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=k?e.touches[0]:e;if(M=t.pageX-N,P=t.pageY-x,void 0===f&&(f=!!(f||Math.abs(M)<Math.abs(P))),!f){switch(e.preventDefault(),C&&clearInterval(A),l){case"left":(0==h&&M>0||h>=v-1&&0>M)&&(M*=.4),X(-h*W+M,0);break;case"leftLoop":X(-(h+1)*W+M,0)}null!=g&&Math.abs(M)>W/3&&H(M>-0?-1:1)}}},Z=function e(t){0!=M&&(t.preventDefault(),f||(Math.abs(M)>W/10&&(M>0?h--:h++),q(!0),C&&(A=setInterval(function(){h++,q()},b))),c.rveEventListener(B,V,!1),c.removeEventListener(I,e,!1))};c.addEventListener(F,j,!1)}({slideCell:"#focus",titCell:".hd ul",mainCell:".bd ul",effect:"left",autoPlay:!0,interTime:3e3,autoPage:!0,switchLoad:"s-src"}),function(){!function(e,t){var n=function(e,t){if(t.getElementsByClassName){var n,a,i=t.documentElement,r=e.Date,l=e.HTMLPictureElement,o=e.addEventListener,s=e.setTimeout,u=e.requestAnimationFrame||s,c=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],m={},p=Array.prototype.forEach,v=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e.getAttribute("class")||"")&&m[t]},g=function(e,t){v(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},h=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},y=function e(t,n,a){var i=a?"addEventListener":"removeEventListener";a&&e(t,n),f.forEach(function(e){t[i](e,n)})},b=function(e,a,i,r,l){var o=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,o.initCustomEvent(a,!r,!l,i),e.dispatchEvent(o),o},C=function(t,n){var i;!l&&(i=e.picturefill||a.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},T=function(){var e,n,a=[],i=[],r=a,l=function(){var t=r;for(r=a.length?i:a,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(a,i){e&&!i?a.apply(this,arguments):(r.push(a),n||(n=!0,(t.hidden?s:u)(l)))};return o._lsFlush=l,o}(),A=function(e,t){return t?function(){T(e)}:function(){var t=this,n=arguments;T(function(){e.apply(t,n)})}},L=function(e){var t,n=0,i=a.ricTimeout,l=function(){t=!1,n=r.now(),e()},o=c&&a.ricTimeout?function(){c(l,{timeout:i}),i!==a.ricTimeout&&(i=a.ricTimeout)}:A(function(){s(l)},!0);return function(e){var a;(e=!0===e)&&(i=33),t||(t=!0,(a=125-(r.now()-n))<0&&(a=0),e||a<9&&c?o():s(o,a))}},w=function(e){var t,n,a=function(){t=null,e()},i=function e(){var t=r.now()-n;t<99?s(e,99-t):(c||a)(a)};return function(){n=r.now(),t||(t=s(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};a=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in a||(a[t]=n[t]);e.lazySizesConfig=a,s(function(){a.init&&M()})}();var N=function(){var l,u,c,f,m,E,N,M,P,S,k,F,B,I,W=/^img$/i,_=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),O=0,R=0,H=-1,$=function e(t){R--,t&&t.target&&y(t.target,e),(!t||R<0||!t.target)&&(R=0)},X=function(e,n){var a,r=e,l="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(M-=n,k+=n,P-=n,S+=n;l&&(r=r.offsetParent)&&r!=t.body&&r!=i;)(l=(z(r,"opacity")||1)>0)&&"visible"!=z(r,"overflow")&&(a=r.getBoundingClientRect(),l=S>a.left&&P<a.right&&k>a.top-1&&M<a.bottom+1);return l},q=function(){var e,r,o,s,c,d,m,p,v,g=n.elements;if((f=a.loadMode)&&R<8&&(e=g.length)){r=0,H++,null==B&&("expand"in a||(a.expand=i.clientHeight>500&&i.clientWidth>500?500:370),F=a.expand,B=F*a.expFactor),O<B&&R<1&&H>2&&f>2&&!t.hidden?(O=B,H=0):O=f>1&&H>1&&R<6?F:0;for(;r<e;r++)if(g[r]&&!g[r]._lazyRace)if(D)if((p=g[r].getAttribute("data-expand"))&&(d=1*p)||(d=O),v!==d&&(E=innerWidth+d*I,N=innerHeight+d,m=-1*d,v=d),o=g[r].getBoundingClientRect(),(k=o.bottom)>=m&&(M=o.top)<=N&&(S=o.right)>=m*I&&(P=o.left)<=E&&(k||S||P||M)&&(a.loadHidden||"hidden"!=z(g[r],"visibility"))&&(u&&R<3&&!p&&(f<3||H<4)||X(g[r],d))){if(Q(g[r]),c=!0,R>9)break}else!c&&u&&!s&&R<4&&H<4&&f>2&&(l[0]||a.preloadAfterLoad)&&(l[0]||!p&&(k||S||P||M||"auto"!=g[r].getAttribute(a.sizesAttr)))&&(s=l[0]||g[r]);else Q(g[r]);s&&!c&&Q(s)}},Y=L(q),j=function(e){g(e.target,a.loadedClass),h(e.target,a.loadingClass),y(e.target,Z),b(e.target,"lazyloaded")},V=A(j),Z=function(e){V({target:e.target})},G=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},J=function(e){var t,n=e.getAttribute(a.srcsetAttr);(t=a.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},K=A(function(e,t,n,i,r){var l,o,u,f,m,v;(m=b(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,a.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(a.srcsetAttr),l=e.getAttribute(a.srcAttr),r&&(f=(u=e.parentNode)&&d.test(u.nodeName||"")),v=t.firesLoad||"src"in e&&(o||l||f),m={target:e},v&&(y(e,$,!0),clearTimeout(c),c=s($,2500),g(e,a.loadingClass),y(e,Z,!0)),f&&p.call(u.getElementsByTagName("source"),J),o?e.setAttribute("srcset",o):l&&!f&&(_.test(e.nodeName)?G(e,l):e.src=l),r&&(o||f)&&C(e,{src:l})),e._lazyRace&&delete e._lazyRace,h(e,a.lazyClass),T(function(){(!v||e.complete&&e.naturalWidth>1)&&(v?$(m):R--,j(m))},!0)}),Q=function(e){var t,n=W.test(e.nodeName),i=n&&(e.getAttribute(a.sizesAttr)||e.getAttribute("sizes")),r="auto"==i;(!r&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||v(e,a.errorClass)||!v(e,a.lazyClass))&&(t=b(e,"lazyunveilread").detail,r&&x.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,R++,K(e,t,r,i,n))},U=function e(){if(!u)if(r.now()-m<999)s(e,999);else{var t=w(function(){a.loadMode=3,Y()});u=!0,a.loadMode=3,Y(),o("scroll",function(){3==a.loadMode&&(a.loadMode=2),t()},!0)}};return{_:function(){m=r.now(),n.elements=t.getElementsByClassName(a.lazyClass),l=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),I=a.hFac,o("scroll",Y,!0),o("resize",Y,!0),e.MutationObserver?new MutationObserver(Y).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",Y,!0),i.addEventListener("DOMAttrModified",Y,!0),setInterval(Y,999)),o("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,Y,!0)}),/d$|^c/.test(t.readyState)?U():(o("load",U),t.addEventListener("DOMContentLoaded",Y),s(U,2e4)),n.elements.length?(q(),T._lsFlush()):Y()},checkElems:Y,unveil:Q}}(),x=function(){var e,n=A(function(e,t,n,a){var i,r,l;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),d.test(t.nodeName||""))for(r=0,l=(i=t.getElementsByTagName("source")).length;r<l;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||C(e,n.detail)}),i=function(e,t,a){var i,r=e.parentNode;r&&(a=E(e,r,a),(i=b(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=i.detail.width)&&a!==e._lazysizesWidth&&n(e,r,i,a))},r=w(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(a.autosizesClass),o("resize",r)},checkElems:r,updateElem:i}}(),M=function e(){e.i||(e.i=!0,x._(),N._())};return n={cfg:a,autoSizer:x,loader:N,init:M,uP:C,aC:g,rC:h,hC:v,fire:b,gW:E,rAF:T}}}(e,e.document);e.lazySizes=n,"object"==("undefined"==typeof module?"undefined":babelHelpers.typeof(module))&&module.exports&&(module.exports=n)}(window)}()}();
