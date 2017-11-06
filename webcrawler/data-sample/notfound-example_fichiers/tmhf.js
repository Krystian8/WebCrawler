/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
;
!function(d,c){"function"==typeof define&&define.amd?define([],function(){return d.svg4everybody=c()
}):"object"==typeof exports?module.exports=c():d.svg4everybody=c()
}(this,function(){
/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
;
function e(h,g){if(g){var k=!h.getAttribute("viewBox")&&g.getAttribute("viewBox"),j=document.createDocumentFragment(),i=g.cloneNode(!0);
for(k&&h.setAttribute("viewBox",k);
i.childNodes.length;
){j.appendChild(i.firstChild)
}h.appendChild(j)
}}function d(a){a.onreadystatechange=function(){if(4===a.readyState){var b=document.createElement("x");
b.innerHTML=a.responseText,a.s.splice(0).map(function(c){e(c[0],b.querySelector("#"+c[1].replace(/(\W)/g,"\\$1")))
})
}},a.onreadystatechange()
}function f(n){function m(){for(var s;
s=l[0];
){var p=s.parentNode;
if(p&&/svg/i.test(p.nodeName)){var i=s.getAttribute("xlink:href");
if(k&&(!j||j(i,p,s))){var h=i.split("#"),g=h[0],r=h[1];
if(p.removeChild(s),g.length){var q=a[g]=a[g]||new XMLHttpRequest;
q.s||(q.s=[],q.open("GET",g),q.send()),q.s.push([p,r]),d(q)
}else{e(p,document.getElementById(r))
}}}}b(m,17)
}n=n||{};
var l=document.getElementsByTagName("use"),k="polyfill" in n?n.polyfill:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,j=n.validate,b=window.requestAnimationFrame||setTimeout,a={};
k&&m()
}return f
});
var tmx={getattribute:function(c,a){var b={};
b.val="";
if(c!==null){if(c.attributes&&c.attributes[a]&&typeof c.attributes[a]!=="undefined"){b.val=c.getAttribute(a)
}}return(b.val)
},getElementsByClass:function(c,b){var a={};
a.collection=[];
if(c!==null){if(document.getElementsByClassName&&typeof document.getElementsByClassName!=="undefined"){a.collection=c.getElementsByClassName(b)
}else{a.collection=c.querySelectorAll("."+b)
}}return(a.collection)
},setevent:{add:function(c,a,b){if(c!==null){if(c.addEventListener){c.addEventListener(a,b,false)
}else{if(c.attachEvent){c["e"+a+b]=b;
c[a+b]=function(){c["e"+a+b](window.event)
};
c.attachEvent("on"+a,c[a+b])
}}}},cancel:function(a){if(a){if(a.stopPropagation){a.stopPropagation()
}if(a.preventDefault){a.preventDefault()
}a.cancelBubble=true;
a.returnValue=false
}}},isSecure:function(){return(location.protocol==="https:")
},isFramed:function(){var a={};
a.isFramed=false;
if(window.frameElement&&window.frameElement.nodeName=="IFRAME"){a.isFramed=true
}return(a.isFramed)
},isMobile:function(){var a={};
a.isMobile=false;
if(window.innerWidth){if(window.innerWidth<=736){a.isMobile=true
}}return(a.isMobile)
},isSvg:function(){var a={};
a.isSvg=true;
if(window.Modernizr!==undefined){a.isSvg=Modernizr.svg
}return(a.isSvg)
},isSmil:function(){var a={};
a.isSmil=true;
if(window.Modernizr!==undefined){a.isSmil=Modernizr.smil
}return(a.isSmil)
},isUnmetered:function(){var a={};
a.isunmetered=false;
a.unmetered=document.getElementById("tmx-unmetered");
if(a.unmetered!==null){a.isunmetered=true
}return(a.isunmetered)
},legacycss:function(){var a={};
a.head=document.getElementsByTagName("HEAD")[0];
a.legacylink=document.createElement("LINK");
a.legacylink.setAttribute("rel","stylesheet");
a.legacylink.setAttribute("href","/bphf/res/css/tmhf.src.legacy.min.css");
a.head.appendChild(a.legacylink)
},localstore:{get:function(b){var a={};
a.val=null;
try{if(window.sessionStorage!==undefined){a.val=window.sessionStorage.getItem(b)
}}catch(c){}return(a.val)
},set:function(a,b){try{if(window.sessionStorage!==undefined){window.sessionStorage.setItem(a,b)
}}catch(c){}}},findinarray:function(b,c){var a={};
a.len=(c.length+1);
a.num=0;
a.exists=false;
if(b!==""){for(a.item=a.len;
a.item-=1;
){if(c[a.num]===b){a.exists=true;
break
}a.num+=1
}}return(a.exists)
},trimstring:function(a){a=a.replace(/^\s+|\s+$/g,"").replace(/ +/g," ");
return(a)
},tclass:{hasclass:function(c,b){var a={};
a.exists=false;
a.objclasses=" "+c.className+" ";
a.classname=" "+b+" ";
if(typeof c!=="undefined"){if(a.objclasses.match(a.classname)){a.exists=true
}}else{a.exists=false
}return(a.exists)
},add:function(c,b){var a={};
a.actioned=false;
a.classname="tmx-active";
if(typeof b!=="undefined"){a.classname=b
}a.hasclass=tmx.tclass.hasclass(c,a.classname);
if(a.hasclass===false){c.className=c.className+" "+a.classname;
a.actioned=true
}return(a.actioned)
},remove:function(c,b){var a={};
a.actioned=false;
a.classname="tmx-active";
if(typeof b!=="undefined"){a.classname=b
}a.hasclass=tmx.tclass.hasclass(c,a.classname);
if(a.hasclass===true){c.className=tmx.trimstring(c.className.replace(a.classname,""));
a.actioned=true
}return(a.actioned)
}},toggle:function(d,c){var a={};
a.classname="tmx-active";
a.classlist="";
a.node2=null;
a.trigger=document.getElementById("tmx-trigger");
if(typeof c!=="undefined"){if(typeof c==="string"){a.classname=c
}else{a.node2=c
}}a.isactive=tmx.tclass.add(d,a.classname);
if(a.isactive===false){tmx.tclass.remove(d,a.classname)
}if(a.node2!==null){try{a.attr=a.node2.className
}catch(b){a.attr=null
}if(a.attr!==null){tmx.tclass.remove(c,a.classname);
if(a.attr.match("tmx-menu")){tmx.tclass.remove(a.trigger,a.classname)
}}}},settarget:function(c,a){var b={};
b.elems=c.getElementsByTagName(a);
b.len=b.elems.length;
for(b.item=b.len;
b.item-=1;
){b.elems[b.item].setAttribute("target","_top")
}},aflnrl:{list:function(){var a={};
a.host=window.location.hostname.toLowerCase().replace("www.","");
a.list=document.getElementById("tmx-slist");
a.listdata=tmx.getElementsByClass(a.list,"tmx-slist-data")[0];
a.val="";
if(a.listdata){a.afl=a.listdata.getAttribute("data-afl").split(",");
a.nrl=a.listdata.getAttribute("data-nrl").split(",");
if(tmx.findinarray(a.host,a.afl)===true){a.val="afl"
}else{if(tmx.findinarray(a.host,a.nrl)===true){a.val="nrl"
}}}return(a.val)
},handler:function(){var a={};
a.cname=document.getElementsByTagName("BODY")[0].className;
a.stored=tmx.localstore.get("tmhf");
a.site="";
if(a.stored!==null){a.site=a.stored;
if(tmx.aflnrl.list()!==""){tmx.tclass.add(document.getElementsByTagName("BODY")[0],"tmhf-"+a.site)
}}else{if(a.cname.match(/tmhf-afl/)!==null){a.site="afl"
}else{if(a.cname.match(/tmhf-nrl/)!==null){a.site="nrl"
}else{a.site=tmx.aflnrl.list();
if(a.site!==""){if(a.cname!==""){a.cname=a.cname+" "
}document.getElementsByTagName("BODY")[0].className=(a.cname+"tmhf-"+a.site)
}}}if(a.site===""){a.array=["afl","nrl"];
a.item=(Math.floor(Math.random()*a.array.length)+1)-1;
a.site=a.array[a.item]
}tmx.localstore.set("tmhf",a.site)
}return(a.site)
}},loadframe:function(c,a,d,e){var b={};
b.pos=0;
if(typeof e!=="undefined"){if(parseInt(e,10)>0){b.pos=e
}}if(typeof a==="string"){b.iframe=document.createElement("iframe");
b.iframe.setAttribute("src",a);
b.iframe.setAttribute("id",d);
b.iframe.setAttribute("name",d);
b.iframe.scrolling="no";
b.iframe.allowTransparency="true";
b.iframe.frameBorder="0";
b.iframe.marginWidth="0";
b.iframe.marginHeight="0";
c.insertBefore(b.iframe,c.children[b.pos])
}},promo:{handler:function(c,a){var b={};
b.iframeid="tmx-promo";
b.insertpos=0;
b.footersearch=document.getElementById("tmx-search-f");
if(b.footersearch!==null){b.insertpos=1
}if(c&&!tmx.isSecure()&&!tmx.isMobile()){b.fsrc=c.getAttribute("data-src-"+a);
if(b.fsrc){tmx.loadframe(c,b.fsrc,b.iframeid,b.insertpos)
}}}},loadScript:function(c,a,d){var b={};
try{b.head=document.getElementsByTagName("HEAD")[0];
b.script=document.createElement("script");
b.isloaded=false;
if(b.head){b.script.setAttribute("id",c);
b.script.async=true;
b.script.setAttribute("src",a);
b.func=function(){if(this.readyState==="complete"||this.readyState==="loaded"){d()
}};
b.script.onreadystatechange=b.func;
b.script.onload=d;
b.head.appendChild(b.script)
}}catch(e){}if(document.getElementById(c)!==null){b.isloaded=true
}return(b.isloaded)
},satellite:function(){if(typeof _satellite!=="undefined"){_satellite.pageBottom()
}},nielsen:{dopost:function(){try{var a={cid:"bigpond",content:"0",server:"secure-au"},b=nol_t(a);
b.record().post()
}catch(c){}},handler:function(){try{if(typeof nol_t==="undefined"){tmx.loadScript("bxb-nsa","//secure-au.imrworldwide.com/v60.js",tmx.nielsen.dopost)
}}catch(a){}}},iext:{sform:{},iestr:"",load:function(a){tmx.iext.sform=a;
tmx.iextsrc="/bphf/res/js/tmhf.src"+".".slice(0)+"ie.min.js";
tmx.loadScript("isiext",tmx.iextsrc,tmx.iext.go)
},go:function(){var a={};
a.body=document.getElementsByTagName("BODY")[0];
a.elem=document.createElement("DIV");
a.elem.setAttribute("class","sie");
a.elem.innerHTML='<div class="siel l1"></div><div class="siel l2"></div><img src="data:image/gif;base64,'+tmx.iext.iestr+'"/>';
if(tmx.iext.iestr!==""){a.body.appendChild(a.elem)
}window.setTimeout(function(){tmx.iext.sform.submit()
},4500)
}},search:{handler:function(b){var a={};
a.str="abcdefghijklmnopqrstuvwxyz";
a.sie=a.str[11]+a.str[0]+a.str[18]+a.str[4]+a.str[17]+a.str[2]+a.str[0]+a.str[19];
a.search=document.getElementById("tmx-search-"+b);
a.form=document.getElementById("tmx-search-form-"+b);
a.go=document.getElementById("tmx-search-go-"+b);
a.searchinput=document.getElementById("tmx-search-input-"+b);
a.searchbut=document.getElementById("tmx-searchbut");
a.msg=tmx.getattribute(a.searchinput,"data-alert");
a.asidedrop=document.getElementById("tmx-menu-aside");
if(a.form!==null&&a.searchinput!==null){a.searchtext=tmx.trimstring(a.searchinput.value);
if(a.searchtext!==""){tmx.tclass.add(a.searchinput)
}tmx.setevent.add(a.searchinput,"focus",function(){tmx.tclass.add(a.searchinput);
tmx.tclass.add(a.search)
});
tmx.setevent.add(a.searchinput,"blur",function(){if(tmx.trimstring(a.searchinput.value)===""){tmx.tclass.remove(a.searchinput);
tmx.tclass.remove(a.search)
}});
tmx.setevent.add(a.searchinput,"click",function(c){if(a.searchinput.value===a.msg){a.searchinput.value="";
tmx.toggle(a.searchinput,"tmx-alert")
}});
tmx.setevent.add(a.searchbut,"click",function(c){tmx.toggle(a.search,a.asidedrop)
});
if(a.go!==null){tmx.setevent.add(a.go,"click",function(c){tmx.tclass.add(a.searchinput);
tmx.tclass.add(a.search)
})
}tmx.setevent.add(a.form,"submit",function(c){a.dosubmit=true;
a.searchtext=tmx.trimstring(a.searchinput.value);
if(a.searchtext===""){a.searchinput.value=a.msg;
a.dosubmit=false
}else{if(a.searchtext===a.msg){a.dosubmit=false
}else{if(a.searchtext.replace(/ /g,"").toLowerCase()===a.sie){a.dosubmit=false;
try{tmx.iext.load(a.form)
}catch(d){}}}}if(a.dosubmit===false){tmx.setevent.cancel(c)
}})
}}},dropdowns:function(){var a={};
a.mobilemenu=document.getElementById("tmx-narrow");
a.search=document.getElementById("tmx-search-h");
a.mobiledrop=document.getElementById("tmx-menu-aside-mobile");
a.trigger=document.getElementById("tmx-trigger");
a.asidedrop=document.getElementById("tmx-menu-aside");
a.searchlinks=tmx.getElementsByClass(a.mobilemenu,"tmx-search");
if(a.searchlinks.length>0){for(a.i=0;
a.i<a.searchlinks.length;
a.i+=1){tmx.setevent.add(a.searchlinks[a.i],"click",function(b){tmx.setevent.cancel(b);
tmx.toggle(a.search,a.mobiledrop)
})
}}if(a.trigger!==null){tmx.setevent.add(a.trigger,"click",function(b){tmx.toggle(a.trigger);
tmx.toggle(a.asidedrop);
tmx.toggle(a.mobiledrop,a.search)
})
}},hasbaseref:function(){var a={};
a.head=document.getElementsByTagName("HEAD")[0];
a.base=a.head.getElementsByTagName("BASE")[0];
a.hasref=false;
if(a.base!=null){if(a.base.hasAttribute("href")){a.hasref=true
}}return(a.hasref)
},setbase:function(){var a={};
a.head=document.getElementsByTagName("HEAD")[0];
a.base=a.head.getElementsByTagName("BASE")[0];
if(a.base!=null){a.base.setAttribute("target","_top")
}else{a.base=document.createElement("BASE");
a.base.setAttribute("target","_top");
a.head.appendChild(a.base)
}},inframe:function(){var a={};
a.body=document.getElementsByTagName("BODY")[0];
tmx.tclass.add(a.body,"tmhf-hidedropdown");
tmx.setbase()
},internalsvgref:function(b){var a={};
a.list=b.getElementsByTagName("use");
a.num=a.list.length;
a.loc=window.location.href.split("#")[0];
for(a.item=0;
a.item<a.num;
a.item+=1){a.refstr="";
a.refstart="";
if(a.list[a.item].hasAttribute("xlink:href")){a.refstr=a.list[a.item].getAttribute("xlink:href");
a.startswith=a.refstr.substr(0,1);
if(a.startswith==="#"){a.list[a.item].setAttribute("xlink:href",a.loc+a.refstr)
}}}},footerad:function(c,a){var b={};
b.title="728x90";
b.adnode=document.createElement("SPAN");
if(a===true){b.title="320x50,300x50"
}b.adnode.setAttribute("class","mcnamf");
b.adnode.setAttribute("title",b.title);
c.appendChild(b.adnode)
},init:function(){var a={};
a.header=document.getElementById("tmx-header");
a.footer=document.getElementById("tmx-footer");
a.footerad=document.getElementById("tmx-footerad");
a.isUnmetered=this.isUnmetered();
a.isMobile=this.isMobile();
a.isSvg=this.isSvg();
a.isSmil=this.isSmil();
a.aflnrl=this.aflnrl.handler();
this.search.handler("h");
this.dropdowns();
this.search.handler("f");
if(!a.isUnmetered&&a.footer!==null){this.promo.handler(a.footer,a.aflnrl)
}if(!a.isSvg&&a.isMobile){this.legacycss()
}if(!a.isSmil||a.isMobile){if(typeof svg4everybody!=="undefined"){svg4everybody()
}}if(this.isFramed()){this.inframe()
}if(a.footerad!==null){this.footerad(a.footerad,a.isMobile)
}if(!a.isUnmetered){this.nielsen.handler();
this.satellite()
}if(this.hasbaseref()){this.internalsvgref(a.header);
this.internalsvgref(a.footer)
}}};
try{tmx.init()
}catch(ignore){};