/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flash-serviceworker-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,a,s,r;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],n=f[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],r=s.split("."),1===r.length?Modernizr[r[0]]=i:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=i),p.push((i?"":"no-")+r.join("-"))}}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):v?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||(e=a(v?"svg":"body"),e.fake=!0),e}function r(e){var n=h.className,t=Modernizr._config.classPrefix||"";if(v&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),v?h.className.baseVal=n:h.className=n)}function l(e,n){if("object"==typeof e)for(var t in e)u(e,t)&&l(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),r([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function c(e,t,o,i){var r,l,c,f,d="modernizr",u=a("div"),p=s();if(parseInt(o,10))for(;o--;)c=a("div"),c.id=i?i[o]:d+(o+1),u.appendChild(c);return r=a("style"),r.type="text/css",r.id="s"+d,(p.fake?p:u).appendChild(r),p.appendChild(u),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),u.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=h.style.overflow,h.style.overflow="hidden",h.appendChild(p)),l=t(u,e),p.fake?(p.parentNode.removeChild(p),h.style.overflow=f,h.offsetHeight):u.parentNode.removeChild(u),!!l}var f=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){f.push({name:e,fn:n,options:t})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr,Modernizr.addTest("serviceworker","serviceWorker"in navigator);var u,p=[],h=n.documentElement,v="svg"===h.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;u=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),d._l={},d.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},d._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){d.addTest=l}),Modernizr.addAsyncTest(function(){var t,o,i=function(e){h.contains(e)||h.appendChild(e)},r=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},c=function(e,n){var t=!!e;if(t&&(t=new Boolean(t),t.blocked="blocked"===e),l("flash",function(){return t}),n&&m.contains(n)){for(;n.parentNode!==m;)n=n.parentNode;m.removeChild(n)}};try{o="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||o),t||v)c(!1);else{var d,u,p=a("embed"),m=s();if(p.type="application/x-shockwave-flash",m.appendChild(p),!("Pan"in p||o))return i(m),c("blocked",p),void r(m);d=function(){return i(m),h.contains(m)?(h.contains(p)?(u=p.style.cssText,""!==u?c("blocked",p):c(!0,p)):c("blocked"),void r(m)):(m=n.body||m,p=a("embed"),p.type="application/x-shockwave-flash",m.appendChild(p),setTimeout(d,1e3))},setTimeout(d,10)}});var m=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=m;var g=d.testStyles=c;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",m.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");g(o,function(e){t=9===e.offsetTop})}return t}),i(),delete d.addTest,delete d.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);