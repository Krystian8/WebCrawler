/* Source and licensing information for the line(s) below can be found at http://www.independent.co.uk/sites/all/themes/ines_themes/independent_theme/js/adunit_define.js. */
window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);(function(){function retrieve(n){var m,k='kx'+n;if(window.localStorage){return window.localStorage[k]||""}else if(navigator.cookieEnabled){m=document.cookie.match(k+'=([^;]*)');return(m&&unescape(m[1]))||""}else return''};Krux.user=retrieve('user');Krux.segments=retrieve('segs')&&retrieve('segs').split(',')||[]})();var googletag=googletag||{};googletag.cmd=googletag.cmd||[];var gptAdSlots=[],esGPT='/71347885/_main_independent';if(location.origin==='http://uat.independent.co.uk'||location.origin==='http://uat-origin.independent.co.uk'||location.origin==='http://dev.independent.co.uk')esGPT='/71347885/test_main_independent';if(typeof gptPath!=="undefined"){gptPath=gptPath.replace(/[-]/g,'/');esGPT+=gptPath};window.Adomik=window.Adomik||{};Adomik.randomAdGroup=function(){var rand=Math.random();switch(false){case !(rand<0.09):return"ad_ex"+(Math.floor(100*rand));case !(rand<0.10):return"ad_bc";default:return"ad_opt"}};var autoRefresh=(location.href.indexOf('?CMP=ILC-refresh')>=0)?'yes':'no';inesDefineAdSlots=function(){googletag.cmd.push(function(){var ldrMapping,takeover1Mapping,takeover2Mapping;if($(document).width()>=990){ldrMapping=[[970,250],[728,90]];takeover1Mapping=[[970,252],[728,92]];takeover2Mapping=[[970,253],[728,93]]}else if($(document).width()>=750){ldrMapping=[728,90];takeover1Mapping=[728,92];takeover2Mapping=[728,93]}else{ldrMapping=[320,50];takeover1Mapping=[320,52];takeover2Mapping=[320,53]};if(pageType=='index'){var mpuMapping0=googletag.sizeMapping().addSize([620,0],[[300,600],[300,250]]).addSize([0,0],[300,250]).build()}else var mpuMapping0=googletag.sizeMapping().addSize([930,0],[[300,600],[300,250]]).addSize([0,0],[300,250]).build();var mpuMapping1=googletag.sizeMapping().addSize([620,0],[[300,251],[300,601]]).addSize([0,0],[300,251]).build(),mpuMapping2=googletag.sizeMapping().addSize([620,0],[[300,602],[300,252]]).addSize([0,0],[300,252]).build(),mpuMapping5=googletag.sizeMapping().addSize([930,0],[300,255]).addSize([0,0],[320,51]).build(),partnerMapping1=googletag.sizeMapping().addSize([0,0],[245,210]).build(),partnerMapping2=googletag.sizeMapping().addSize([535,0],[245,210]).addSize([0,0],[]).build(),partnerMapping3=googletag.sizeMapping().addSize([765,0],[245,210]).addSize([0,0],[]).build(),partnerMapping4=googletag.sizeMapping().addSize([1065,0],[245,210]).addSize([0,0],[]).build(),partnerMapping5=googletag.sizeMapping().addSize([1330,0],[245,210]).addSize([0,0],[]).build(),partnerMapping6=googletag.sizeMapping().addSize([0,0],[245,211]).build(),partnerMapping7=googletag.sizeMapping().addSize([535,0],[245,211]).addSize([0,0],[]).build(),partnerMapping8=googletag.sizeMapping().addSize([765,0],[245,211]).addSize([0,0],[]).build(),partnerMapping9=googletag.sizeMapping().addSize([1065,0],[245,211]).addSize([0,0],[]).build(),partnerMapping10=googletag.sizeMapping().addSize([1330,0],[245,211]).addSize([0,0],[]).build(),fn_pageskin="no";if(screen.width>=1280&&pageType!='video')fn_pageskin="yes";var sharempu0='',sharempu1='',sharempu2='';if(document.body.className.match(/\bsection\b/)){sharempu0='319894dd',sharempu1='fc54e299';sharempu2='umGJYxaMJXZFusoqnbYxt7Ms'};gptAdSlots.outofpageslot=googletag.defineOutOfPageSlot(esGPT,'outofpageslot').setCollapseEmptyDiv(true).setTargeting("tile","outofpageslot").addService(googletag.pubads());gptAdSlots.teadsib=googletag.defineSlot(esGPT,[4,4],'teadsib').setCollapseEmptyDiv(true).setTargeting("tile","teadsib").setTargeting("inskin",fn_pageskin).addService(googletag.pubads());gptAdSlots.leaderboard=googletag.defineSlot(esGPT,ldrMapping,'leaderboard').setCollapseEmptyDiv(true).setTargeting("tile","leaderboard").setTargeting("inskin",fn_pageskin).addService(googletag.pubads());if(jQuery('#takeover1').length)gptAdSlots.takeover1=googletag.defineSlot(esGPT,takeover1Mapping,'takeover1').setCollapseEmptyDiv(true).setTargeting("tile","takeover1").addService(googletag.pubads());if(jQuery('#takeover2').length)gptAdSlots.takeover2=googletag.defineSlot(esGPT,takeover2Mapping,'takeover2').setCollapseEmptyDiv(true).setTargeting("tile","takeover2").addService(googletag.pubads());gptAdSlots.mpu0=googletag.defineSlot(esGPT,[[300,250],[300,600]],'mpu0').defineSizeMapping(mpuMapping0).setCollapseEmptyDiv(true).setTargeting("tile","mpu0").setTargeting("share","f936e1d9").addService(googletag.pubads());if(jQuery('#mpu1').length)gptAdSlots.mpu1=googletag.defineSlot(esGPT,[[300,251],[300,601]],'mpu1').defineSizeMapping(mpuMapping1).setCollapseEmptyDiv(true).setTargeting("tile","mpu1").setTargeting("share",sharempu1).addService(googletag.pubads());if(jQuery('#mpu2').length)gptAdSlots.mpu2=googletag.defineSlot(esGPT,[[300,252],[300,602]],'mpu2').defineSizeMapping(mpuMapping2).setCollapseEmptyDiv(true).setTargeting("tile","mpu2").addService(googletag.pubads());if(jQuery('#mpu3').length)gptAdSlots.mpu3=googletag.defineSlot(esGPT,[300,253],'mpu3').setCollapseEmptyDiv(true).setTargeting("tile","mpu3").addService(googletag.pubads());if(jQuery('#mpu4').length)gptAdSlots.mpu4=googletag.defineSlot(esGPT,[300,254],'mpu4').setCollapseEmptyDiv(true).setTargeting("tile","mpu4").setTargeting("share","91a6b708").addService(googletag.pubads());if(jQuery('.grid-mod-gallery').length)gptAdSlots.mpu5=googletag.defineSlot(esGPT,[[300,255],[320,51]],'mpu5').defineSizeMapping(mpuMapping5).setCollapseEmptyDiv(true).setTargeting("tile","mpu5").addService(googletag.pubads());if(jQuery('#mpu6').length)gptAdSlots.mpu6=googletag.defineSlot(esGPT,[300,254],'mpu6').setCollapseEmptyDiv(true).setTargeting("tile","mpu4").setTargeting("share","91a6b708").addService(googletag.pubads());if(jQuery('#mpu7').length)gptAdSlots.mpu7=googletag.defineSlot(esGPT,[[300,257],[300,607],[160,607],[120,607]],'mpu7').setCollapseEmptyDiv(true).setTargeting("tile","mpu7").addService(googletag.pubads());if(pageType!=='index'){gptAdSlots.partner1=googletag.defineSlot(esGPT,[245,210],'partner1').defineSizeMapping(partnerMapping1).setCollapseEmptyDiv(true).setTargeting("tile","partner1").addService(googletag.pubads());gptAdSlots.partner2=googletag.defineSlot(esGPT,[245,210],'partner2').defineSizeMapping(partnerMapping2).setCollapseEmptyDiv(true).setTargeting("tile","partner2").addService(googletag.pubads())};gptAdSlots.znaptag=googletag.defineSlot(esGPT,[9,9],'znaptag').setCollapseEmptyDiv(true).setTargeting("tile","znaptag").addService(googletag.pubads());gptAdSlots.thirdparty01=googletag.defineSlot(esGPT,[3,3],'thirdparty01').setCollapseEmptyDiv(true).setTargeting("tile","thirdparty01").addService(googletag.pubads());if(pageType=='index')gptAdSlots.st_mpu0=googletag.defineSlot(esGPT,[300,260],'st_mpu0').setCollapseEmptyDiv(true).setTargeting("tile","st_mpu0").setTargeting("share",sharempu0).addService(googletag.pubads());if(jQuery('#mpu1').length)gptAdSlots.st_mpu1=googletag.defineSlot(esGPT,[300,261],'st_mpu1').setCollapseEmptyDiv(true).setTargeting("tile","st_mpu1").setTargeting("share",sharempu1).addService(googletag.pubads());if(jQuery('#mpu2').length)gptAdSlots.st_mpu2=googletag.defineSlot(esGPT,[300,262],'st_mpu2').setCollapseEmptyDiv(true).setTargeting("tile","st_mpu2").setTargeting("share",sharempu2).addService(googletag.pubads());googletag.pubads().setTargeting("ksg",Krux.segments);googletag.pubads().setTargeting("kuid",Krux.user);googletag.pubads().setTargeting("khost",encodeURIComponent(location.hostname));googletag.pubads().setTargeting("article",articleId);googletag.pubads().setTargeting("pagetype",pageType);googletag.pubads().setTargeting("ad_group",Adomik.randomAdGroup());googletag.pubads().setTargeting("branch","lazysra");if(typeof topicTags!=='undefined')googletag.pubads().setTargeting("topictags",topicTags);if(typeof gs_channels!=='undefined')googletag.pubads().setTargeting("gs_channels",gs_channels);if(typeof ESIRealTimeOrderIDs!=='undefined')googletag.pubads().setTargeting("realtime",ESIRealTimeOrderIDs);googletag.pubads().setTargeting("autorefresh",autoRefresh);googletag.pubads().addEventListener('slotRenderEnded',function(event){if(typeof event.slot.f.tile[0]!=="undefined"&&event.slot.f.tile[0]==="leaderboard"){var tile=document.getElementById(event.slot.f.tile[0]);tile.style.height=event.size[1]+'px'}});googletag.pubads().disableInitialLoad();googletag.pubads().enableSingleRequest();googletag.enableServices();googletag.cmd.push(function(){googletag.display('mpu0');googletag.display('leaderboard');googletag.display('outofpageslot');googletag.display('teadsib');googletag.display('znaptag');googletag.display('thirdparty01')});googletag.pubads().refresh([gptAdSlots.mpu0,gptAdSlots.leaderboard,gptAdSlots.outofpageslot,gptAdSlots.teadsib,gptAdSlots.znaptag,gptAdSlots.thirdparty01],{changeCorrelator:false});if(typeof Drupal!=='undefined')Drupal.behaviors.commercial_lazy_ads.processGPTQueue()})};
/* Source and licensing information for the above line(s) can be found at http://www.independent.co.uk/sites/all/themes/ines_themes/independent_theme/js/adunit_define.js. */
/* Source and licensing information for the line(s) below can be found at http://www.independent.co.uk/sites/all/modules/custom/pugpig/core/js/pugpig.js. */
(function($){$(function(){$('a[rel*=external]').click(function(){window.open(this.href);return false});$('#edit-field-pugpig-key-und-0-value').change(function(){$this=$(this)})})
function marketSummaryCSV($el,regex){$el.val($el.val().replace(/(\n|\r)([-+–0-9])/mg,' $2').replace(/(\t| )+/g,' ').replace(regex,'$1,$2'))}
function updateImageFieldLabels(){$('.image-widget-data label').each(function(){$el=$(this);switch($el.text()){case'Alternate text ':$el.html('Caption');break;case'Title ':$el.html('Credit');break}})};$('body').ready(function(){theme_base=$('#theme_base').attr('data-url')+'/';$('#stay-link').bind('click',function(){$('#stay').val('here');$('#article-node-form').submit()});$('#edit-title').bind('change',function(){heading=$('#edit-field-heading-und-0-value');if(heading&&heading.length>0&&heading.val()=='')heading.val($(this).val())});$('#market-summary-node-form textarea').bind('paste',function(){var $el=$(this);if($el.val()=='')setTimeout(function(){marketSummaryCSV($el,/([^-+–0-9])([-+–0-9]+\.[0-9]+)/g)},100)});$('#edit-field-market-sterling-und-0-value').bind('paste',function(){var $el=$(this);if($el.val()=='')setTimeout(function(){$el.val($el.val().replace('g','€'));marketSummaryCSV($el,/(.)([€$¥][0-9]+\.[0-9]+)/g)},100)});updateImageFieldLabels();if(document.addEventListener){document.addEventListener('DOMSubtreeModified',updateImageFieldLabels)}else if(document.attachEvent)document.attachEvent('DOMSubtreeModified',updateImageFieldLabels)})})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.independent.co.uk/sites/all/modules/custom/pugpig/core/js/pugpig.js. */
/* Source and licensing information for the line(s) below can be found at http://www.independent.co.uk/sites/all/modules/contrib/google_analytics/googleanalytics.js. */
(function($){Drupal.googleanalytics={};$(document).ready(function(){$(document.body).bind("mousedown keyup touchstart",function(event){$(event.target).closest("a,area").each(function(){if(Drupal.googleanalytics.isInternal(this.href)){if($(this).is('.colorbox')&&(Drupal.settings.googleanalytics.trackColorbox));else if(Drupal.settings.googleanalytics.trackDownload&&Drupal.googleanalytics.isDownload(this.href)){ga("send",{hitType:"event",eventCategory:"Downloads",eventAction:Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),eventLabel:Drupal.googleanalytics.getPageUrl(this.href),transport:"beacon"})}else if(Drupal.googleanalytics.isInternalSpecial(this.href))ga("send",{hitType:"pageview",page:Drupal.googleanalytics.getPageUrl(this.href),transport:"beacon"})}else if(Drupal.settings.googleanalytics.trackMailto&&$(this).is("a[href^='mailto:'],area[href^='mailto:']")){ga("send",{hitType:"event",eventCategory:"Mails",eventAction:"Click",eventLabel:this.href.substring(7),transport:"beacon"})}else if(Drupal.settings.googleanalytics.trackOutbound&&this.href.match(/^\w+:\/\//i))if(Drupal.settings.googleanalytics.trackDomainMode!==2||(Drupal.settings.googleanalytics.trackDomainMode===2&&!Drupal.googleanalytics.isCrossDomain(this.hostname,Drupal.settings.googleanalytics.trackCrossDomains)))ga("send",{hitType:"event",eventCategory:"Outbound links",eventAction:"Click",eventLabel:this.href,transport:"beacon"})})});if(Drupal.settings.googleanalytics.trackUrlFragments)window.onhashchange=function(){ga("send",{hitType:"pageview",page:location.pathname+location.search+location.hash})};if(Drupal.settings.googleanalytics.trackColorbox)$(document).bind("cbox_complete",function(){var href=$.colorbox.element().attr("href");if(href)ga("send",{hitType:"pageview",page:Drupal.googleanalytics.getPageUrl(href)})})});Drupal.googleanalytics.isCrossDomain=function(hostname,crossDomains){if(!crossDomains){return false}else return $.inArray(hostname,crossDomains)>-1?true:false};Drupal.googleanalytics.isDownload=function(url){var isDownload=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i");return isDownload.test(url)};Drupal.googleanalytics.isInternal=function(url){var isInternal=new RegExp("^(https?):\/\/"+window.location.host,"i");return isInternal.test(url)};Drupal.googleanalytics.isInternalSpecial=function(url){var isInternalSpecial=new RegExp("(\/go\/.*)$","i");return isInternalSpecial.test(url)};Drupal.googleanalytics.getPageUrl=function(url){var extractInternalUrl=new RegExp("^(https?):\/\/"+window.location.host,"i");return url.replace(extractInternalUrl,'')};Drupal.googleanalytics.getDownloadExtension=function(url){var extractDownloadextension=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i"),extension=extractDownloadextension.exec(url);return(extension===null)?'':extension[1]}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.independent.co.uk/sites/all/modules/contrib/google_analytics/googleanalytics.js. */
/* Source and licensing information for the line(s) below can be found at http://www.independent.co.uk/profiles/ines/modules/ines_scald_videos_external/ines_scald_videos_external.js. */
function fixVideoPlayerHeight(id){if(undefined!==jQuery('#'+id)){var iframe=jQuery('#'+id),container=jQuery('#'+id).parent(),width=jQuery(container).width(),height=width*(6/9);jQuery(iframe).css('width',width);jQuery(container).css('width',width);jQuery(iframe).css('height',height);jQuery(container).css('height',height)}};
/* Source and licensing information for the above line(s) can be found at http://www.independent.co.uk/profiles/ines/modules/ines_scald_videos_external/ines_scald_videos_external.js. */
/* Source and licensing information for the line(s) below can be found at http://www.independent.co.uk/profiles/ines/modules/ines_layout_config/js/layout_grid.feeds.js. */
(function($,Drupal,window,document,undefined){Drupal.behaviors.layoutgridfeeds={attach:function(context,settings){if(typeof Drupal.settings.layoutgridfeeds!=='undefined')Drupal.settings.layoutgridfeeds.map(function(feed){if(typeof feed.data!=='undefined'){var data=feed.data}else var data={};$.ajax({type:"get",url:feed.url,data:data,success:function(idata,textStatus,jqXHR){try{var data=$.parseJSON(idata)}catch(err){var data=idata};if(typeof feed.root==="string"&&feed.root.length>0){var rootpieces=feed.root.split(':');rootpieces.map(function(rootpiece){data=data[rootpieces]})};if(Array.isArray(data)){for(var i=0;i<5;i++){var item={},title='',image='',url='';if(typeof data[i]==='undefined')continue;if(typeof feed.title==="string"&&feed.title.length>0){title=data[i];var titlepieces=feed.title.split(':');titlepieces.map(function(titlepiece){title=title[titlepiece]})};if(typeof feed.image==="string"&&feed.image.length>0){image=data[i];var imagepieces=feed.image.split(':');imagepieces.map(function(imagepiece){if(image&&imagepiece in image)image=image[imagepiece]});if(typeof image!=='string')image=''};if(typeof feed.link==="string"&&feed.link.length>0){url=data[i];var urlpieces=feed.link.split(':');urlpieces.map(function(urlpiece){url=url[urlpiece]})};var targetBlank="";if(feed.url==='http://i100.independent.co.uk/feed'||feed.url==='/layout_component/api-i100'){url+='?utm_source=indy&utm_medium=top5&utm_campaign=i100';targetBlank=" target='_blank'"};if(feed.type==='video'){$('[data-feed="'+feed.url+'"] ul').append('<li><a href="'+url+'"'+targetBlank+'><span class="icon-play"></span><img class="image lazy" data-original="'+image+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /	><h2>'+title+'</h2></a></li>')}else $('[data-feed="'+feed.url+'"] ul').append('<li class="story"><a href="'+url+'"'+targetBlank+'><img class="image lazy" data-original="'+image+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /><h2>'+title+'</h2></a></li>');$('[data-feed="'+feed.url+'"] .lazy').lazyload({effect:"fadeIn",threshold:600,load:function(elements_left,settings){$(this).removeClass('lazy')}})};$('[data-feed="'+feed.url+'"] ul li a').click(function(){var sHr=$(this).attr("href"),sEq=($(this).closest('li').index()+1),sUrl=feed.url.substr(feed.url.length-5);ga('send','event',sUrl,sHr,sEq);var b=s_gi(s_account);b.linkTrackVars='prop36';b.prop36=sUrl+' - '+sEq+' - '+sHr;b.tl(this,'o',sUrl);console.log('feed hit')})}},error:function(xhr,status,error){console.log(xhr)}})})}}})(jQuery,Drupal,this,this.document);;
/* Source and licensing information for the above line(s) can be found at http://www.independent.co.uk/profiles/ines/modules/ines_layout_config/js/layout_grid.feeds.js. */
/* Source and licensing information for the line(s) below can be found at http://www.independent.co.uk/sites/all/themes/ines_themes/ines_theme/js/gigya.session.js. */
(function($){$(document).ready(function(){indes_gyJourney()})
function indes_gyJourney(){var indes_SourceURL=window.location.href,id
function indes_Storage(indes_Type){sessionStorage.setItem('indes_SourceURL',indes_SourceURL);sessionStorage.setItem('indes_Type',indes_Type)}
function indes_ClearStorage(){sessionStorage.removeItem('indes_SourceURL');sessionStorage.removeItem('indes_Type');return false};$('#signInLink, #joinLink, .indes_store').click(function(){var id=$(this).data("id");indes_Storage(id)});$('.competition_btn').click(function(){var id='indes_competition_entry';indes_Storage(id)})}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.independent.co.uk/sites/all/themes/ines_themes/ines_theme/js/gigya.session.js. */
