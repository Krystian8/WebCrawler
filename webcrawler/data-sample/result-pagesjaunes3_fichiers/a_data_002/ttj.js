!function(){function e(e,t){return"function"==typeof __an_obj_extend_thunk?__an_obj_extend_thunk(e,t):e}function t(e,t){"function"==typeof __an_err_thunk&&__an_err_thunk(e,t)}function n(e,t){if("function"==typeof __an_redirect_thunk)__an_redirect_thunk(e);else{var n=navigator.connection;navigator.__an_connection&&(n=navigator.__an_connection),window==window.top&&n&&n.downlinkMax<=.115&&"function"==typeof HTMLIFrameElement&&HTMLIFrameElement.prototype.hasOwnProperty("srcdoc")?(window.__an_resize=function(e,t,n){var r=e.frameElement;r&&"__an_if"==r.getAttribute("name")&&(t&&(r.style.width=t+"px"),n&&(r.style.height=n+"px"))},document.write('<iframe name="__an_if" style="width:0;height:0" srcdoc="<script type=\'text/javascript\' src=\''+e+"&"+t.bdfif+"=1'></sc"),document.write('ript>" frameborder="0" scrolling="no" marginheight=0 marginwidth=0 topmargin="0" leftmargin="0" allowtransparency="true"></iframe>')):document.write('<script language="javascript" src="'+e+'"></scr'+'ipt>')}};var r=function(e){this.rdParams=e};r.prototype={constructor:r,walkAncestors:function(e){try{if(!window.location.ancestorOrigins)return;for(var t=0,n=window.location.ancestorOrigins.length;n>t;t++)e.call(null,window.location.ancestorOrigins[t],t)}catch(r){"undefined"!=typeof console}return[]},walkUpWindows:function(e){var t,n=[];do try{t=t?t.parent:window,e.call(null,t,n)}catch(r){return"undefined"!=typeof console,n.push({referrer:null,location:null,isTop:!1}),n}while(t!=window.top);return n},getPubUrlStack:function(e){var n,r=[],o=null,i=null,a=null,c=null,d=null,s=null,u=null;for(n=e.length-1;n>=0;n--){try{a=e[n].location}catch(l){"undefined"!=typeof console,t(l,"AnRDModule::getPubUrlStack:: location")}if(a)i=encodeURIComponent(a),r.push(i),u||(u=i);else if(0!==n){c=e[n-1];try{d=c.referrer,s=c.ancestor}catch(l){"undefined"!=typeof console,t(l,"AnRDModule::getPubUrlStack:: prevFrame")}d?(i=encodeURIComponent(d),r.push(i),u||(u=i)):s?(i=encodeURIComponent(s),r.push(i),u||(u=i)):r.push(o)}else r.push(o)}return{stack:r,detectUrl:u}},getLevels:function(){var e=this.walkUpWindows(function(e,n){try{n.push({referrer:e.document.referrer||null,location:e.location.href||null,isTop:e==window.top})}catch(r){n.push({referrer:null,location:null,isTop:e==window.top}),"undefined"!=typeof console,t(r,"AnRDModule::getLevels")}});return this.walkAncestors(function(t,n){e[n].ancestor=t}),e},getRefererInfo:function(){var e="";try{var n=this.getLevels(),r=n.length-1,o=null!==n[r].location||r>0&&null!==n[r-1].referrer,i=this.getPubUrlStack(n);e=this.rdParams.rdRef+"="+i.detectUrl+"&"+this.rdParams.rdTop+"="+o+"&"+this.rdParams.rdIfs+"="+r+"&"+this.rdParams.rdStk+"="+i.stack+"&"+this.rdParams.rdQs}catch(a){e="","undefined"!=typeof console,t(a,"AnRDModule::getRefererInfo")}return e}};var o=function(n){var o="";try{n=e(n,0);var i=e(new r(n),1);return i.getRefererInfo()}catch(a){o="","undefined"!=typeof console,t(a,"AnRDModule::executeRD")}return o};;var i=function(e){e=e?e:{};var t={};t.idsStaleMs="idsStaleSec"in e?1e3*e.idsStaleSec:0,t.criBidderId="criBidderId"in e?e.criBidderId:"0",t.criId="criId"in e?e.criId:"0",t.ids=e.ids,t.criteoFun=e.criteoFun,this.params=t,"undefined"!=typeof console};i.prototype={constructor:i,Util:{Base64:{keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,r,o,i,a,c,d="",s=0;for(e=this.utf8Encode(e);s<e.length;)t=e.charCodeAt(s++),n=e.charCodeAt(s++),r=e.charCodeAt(s++),o=t>>2,i=(3&t)<<4|n>>4,a=(15&n)<<2|r>>6,c=63&r,isNaN(n)?a=c=64:isNaN(r)&&(c=64),d=d+this.keyStr.charAt(o)+this.keyStr.charAt(i)+this.keyStr.charAt(a)+this.keyStr.charAt(c);return d},decode:function(e){var t,n,r,o,i,a,c,d="",s=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<e.length;)o=this.keyStr.indexOf(e.charAt(s++)),i=this.keyStr.indexOf(e.charAt(s++)),a=this.keyStr.indexOf(e.charAt(s++)),c=this.keyStr.indexOf(e.charAt(s++)),t=o<<2|i>>4,n=(15&i)<<4|a>>2,r=(3&a)<<6|c,d+=String.fromCharCode(t),64!=a&&(d+=String.fromCharCode(n)),64!=c&&(d+=String.fromCharCode(r));return d=this.utf8Decode(d)},utf8Encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);128>r?t+=String.fromCharCode(r):r>127&&2048>r?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t},utf8Decode:function(e){for(var t="",n=0,r=0,o=0,i=0;n<e.length;)r=e.charCodeAt(n),128>r?(t+=String.fromCharCode(r),n++):r>191&&224>r?(o=e.charCodeAt(n+1),t+=String.fromCharCode((31&r)<<6|63&o),n+=2):(o=e.charCodeAt(n+1),i=e.charCodeAt(n+2),t+=String.fromCharCode((15&r)<<12|(63&o)<<6|63&i),n+=3);return t}}},getStg:function(e){var n=null;try{window.sessionStorage&&(n=window.sessionStorage.getItem(e)),!n&&window.localStorage&&(n=window.localStorage.getItem(e))}catch(r){"undefined"!=typeof console,t(r,"AnSync3rdParty::getStg")}return n},setStg:function(e,n){try{window.sessionStorage&&window.sessionStorage.setItem(e,n),window.localStorage&&window.localStorage.setItem(e,n)}catch(r){"undefined"!=typeof console,t(r,"AnSync3rdParty::setStg")}},getCachedIds:function(e){var n=this.getStg("__ansync3rdp_"+e);if(n)try{n=JSON.parse(this.Util.Base64.decode(n))}catch(r){n=null,"undefined"!=typeof console,t(r,"AnSync3rdParty::getCachedIds")}return n},getCachedIdsEnc:function(){var e=this.getCachedIds(this.params.criBidderId),n=null;try{e&&e.uCode?(n={tpuids:[{provider:e.bId,user_id:e.uCode}]},n=this.Util.Base64.encode(JSON.stringify(n))):n=null}catch(r){n=null,"undefined"!=typeof console,t(r,"AnSync3rdParty::getCachedIdsEnc")}return n},setCachedIds:function(e,n){var r=null;try{r={bId:e,uCode:n,ts:(new Date).getTime()},r=this.Util.Base64.encode(JSON.stringify(r))}catch(o){"undefined"!=typeof console,t(o,"AnSync3rdParty::setCachedIds")}this.setStg("__ansync3rdp_"+e,r)},isStaleCachedIds:function(e){var n=!0;if(e&&("string"==typeof e.ts||"number"==typeof e.ts))try{var r=new Date-new Date(e.ts);n=isNaN(r)||r>this.params.idsStaleMs,"undefined"!=typeof console}catch(o){n=!0,"undefined"!=typeof console,t(o,"AnSync3rdParty::isStaleCachedIds")}return n},criteoMakeSyncCb:function(){var e=this;return function(t){"undefined"!=typeof console,e.setCachedIds(e.params.criBidderId,"string"==typeof t.userid&&""!==t.userid?t.userid:null)}},criteoSchdAsync:function(e,t){"undefined"!=typeof console,window[e]=t;var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://gum.criteo.com/sync?c="+this.params.criId+"&r=2&j="+e;var r=document.getElementsByTagName("head")||document.getElementsByTagName("body");r&&r[0]&&r[0].appendChild(n)},sync:function(){var e=this.getCachedIds(this.params.criBidderId);this.isStaleCachedIds(e)&&this.criteoSchdAsync(this.params.criteoFun,this.criteoMakeSyncCb());var t=this.getCachedIdsEnc();return c=t?this.params.ids+"="+t:""}};var a=function(n){var r="";try{n=e(n,2);var o=e(new i(n),3);r=o.sync()}catch(a){r="","undefined"!=typeof console,t(a,"AnSync3rdParty::executeSync")}return r};;var c="https://ib.adnxs.com/ttj?ttjb=1&bdc=1509320504&bdh=pwi8bmyzCBpaMTGHLV8-POL625M.";c+="&"+a({idsStaleSec:600,criBidderId:"criteo",criId:"30",ids:"tpuids",criteoFun:"cr_handle_data_a"}),c+="&"+o({rdRef:"bdref",rdTop:"bdtop",rdIfs:"bdifs",rdStk:"bstk",rdQs:"&id=6458255&psa=0&pjmotclethema=001710&localites=137700&departements=091&regions=11&zonedevie=002013&pjrubrique=050190"}),n(c,{bdfif:"bdfif"})}();