!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/js/",t(t.s=0)}([function(e,t){var n=function(e){e=e||{};var t={slideCell:e.slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoad:e.switchLoad||null},n=document.getElementById(t.slideCell.replace("#",""));if(!n)return!1;var a=function(e,t){e=e.split(" ");var n=[];t=t||document;var a=[t];for(var r in e)0!=e[r].length&&n.push(e[r]);for(var r in n){if(0==a.length)return!1;var l=[];for(var i in a)if("#"==n[r][0])l.push(document.getElementById(n[r].replace("#","")));else if("."==n[r][0])for(var o=a[i].getElementsByTagName("*"),s=0;s<o.length;s++){var u=o[s].className;u&&-1!=u.search(new RegExp("\\b"+n[r].replace(".","")+"\\b"))&&l.push(o[s])}else for(var o=a[i].getElementsByTagName(n[r]),s=0;s<o.length;s++)l.push(o[s]);a=l}return 0!=a.length&&a[0]!=t&&a},r=function(e,t){var n=document.createElement("div");n.innerHTML=t,n=n.children[0];var a=e.cloneNode(!0);return n.appendChild(a),e.parentNode.replaceChild(n,e),f=a,n},l=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},i=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},o=t.effect,s=a(t.prevCell,n)[0],u=a(t.nextCell,n)[0],c=a(t.pageStateCell)[0],f=a(t.mainCell,n)[0];if(!f)return!1;var p,d,v=f.children.length,m=a(t.titCell,n),h=m?m.length:v,g=t.switchLoad,T=parseInt(t.defaultIndex),b=parseInt(t.delayTime),x=parseInt(t.interTime),L="false"!=t.autoPlay&&0!=t.autoPlay,y="false"!=t.autoPage&&0!=t.autoPage,C="false"!=t.pnLoop&&0!=t.pnLoop,w=T,N=null,E=null,P=null,I=0,M=0,k=0,O=0,S=/hp-tablet/gi.test(navigator.appVersion),F="ontouchstart"in window&&!S,D=F?"touchstart":"mousedown",B=F?"touchmove":"",A=F?"touchend":"mouseup",H=f.parentNode.clientWidth,R=v;if(0==h&&(h=v),y){h=v,m=m[0],m.innerHTML="";var j="";if(1==t.autoPage||"true"==t.autoPage)for(var z=0;h>z;z++)j+="<li>"+(z+1)+"</li>";else for(var z=0;h>z;z++)j+=t.autoPage.replace("$",z+1);m.innerHTML=j,m=m.children}"leftLoop"==o&&(R+=2,f.appendChild(f.children[0].cloneNode(!0)),f.insertBefore(f.children[v-1].cloneNode(!0),f.children[0])),p=r(f,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),f.style.cssText="width:"+R*H+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(var z=0;R>z;z++)f.children[z].style.cssText="display:table-cell;vertical-align:top;width:"+H+"px";var W=function(){"function"==typeof t.startFun&&t.startFun(T,h)},X=function(){"function"==typeof t.endFun&&t.endFun(T,h)},Y=function(e){var t=("leftLoop"==o?T+1:T)+e,n=function(e){for(var t=f.children[e].getElementsByTagName("img"),n=0;n<t.length;n++)t[n].getAttribute(g)&&(t[n].setAttribute("src",t[n].getAttribute(g)),t[n].removeAttribute(g))};if(n(t),"leftLoop"==o)switch(t){case 0:n(v);break;case 1:n(v+1);break;case v:n(0);break;case v+1:n(1)}},_=function(){H=p.clientWidth,f.style.width=R*H+"px";for(var e=0;R>e;e++)f.children[e].style.width=H+"px";var t="leftLoop"==o?T+1:T;V(-t*H,0)};window.addEventListener("resize",_,!1);var V=function(e,t,n){n=n?n.style:f.style,n.webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms",n.webkitTransform="translate("+e+"px,0)translateZ(0)",n.msTransform=n.MozTransform=n.OTransform="translateX("+e+"px)"},Z=function(e){switch(o){case"left":T>=h?T=e?T-1:0:0>T&&(T=e?0:h-1),null!=g&&Y(0),V(-T*H,b),w=T;break;case"leftLoop":null!=g&&Y(0),V(-(T+1)*H,b),-1==T?(E=setTimeout(function(){V(-h*H,0)},b),T=h-1):T==h&&(E=setTimeout(function(){V(-H,0)},b),T=0),w=T}W(),P=setTimeout(function(){X()},b);for(var n=0;h>n;n++)i(m[n],t.titOnClassName),n==T&&l(m[n],t.titOnClassName);0==C&&(i(u,"nextStop"),i(s,"prevStop"),0==T?l(s,"prevStop"):T==h-1&&l(u,"nextStop")),c&&(c.innerHTML="<span>"+(T+1)+"</span>/"+h)};if(Z(),L&&(N=setInterval(function(){T++,Z()},x)),m)for(var z=0;h>z;z++)!function(){var e=z;m[e].addEventListener("click",function(){clearTimeout(E),clearTimeout(P),T=e,Z()})}();u&&u.addEventListener("click",function(){(1==C||T!=h-1)&&(clearTimeout(E),clearTimeout(P),T++,Z())}),s&&s.addEventListener("click",function(){(1==C||0!=T)&&(clearTimeout(E),clearTimeout(P),T--,Z())});var $=function(e){clearTimeout(E),clearTimeout(P),d=void 0,k=0;var t=F?e.touches[0]:e;I=t.pageX,M=t.pageY,f.addEventListener(B,q,!1),f.addEventListener(A,G,!1)},q=function(e){if(!F||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=F?e.touches[0]:e;if(k=t.pageX-I,O=t.pageY-M,"undefined"==typeof d&&(d=!!(d||Math.abs(k)<Math.abs(O))),!d){switch(e.preventDefault(),L&&clearInterval(N),o){case"left":(0==T&&k>0||T>=h-1&&0>k)&&(k*=.4),V(-T*H+k,0);break;case"leftLoop":V(-(T+1)*H+k,0)}null!=g&&Math.abs(k)>H/3&&Y(k>-0?-1:1)}}},G=function(e){0!=k&&(e.preventDefault(),d||(Math.abs(k)>H/10&&(k>0?T--:T++),Z(!0),L&&(N=setInterval(function(){T++,Z()},x))),f.rveEventListener(B,q,!1),f.removeEventListener(A,G,!1))};f.addEventListener(D,$,!1)};e.exports=n}]);