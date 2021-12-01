(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-apester-media",ev:"0.1",l:true,f:function(AMP,_){"use strict";var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var r;if("function"==typeof Object.setPrototypeOf)r=Object.setPrototypeOf;else{var t;a:{var da={a:!0},u={};try{u.__proto__=da;t=u.a;break a}catch(a){}t=!1}r=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=r;function ea(a){return a?Array.prototype.slice.call(a):[]}var fa=Array.isArray;function ha(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}var ia=Object.prototype.hasOwnProperty;function w(a){return a||{}}function x(a,b){if("."==b)return a;var c=b.split(".");b=q(c);for(var d=b.next();!d.done;d=b.next()){var e=d.value;if(e&&a&&void 0!==a[e]&&"object"==typeof a&&ia.call(a,e))a=a[e];else{a=void 0;break}}return a}var y;function ja(a,b){function c(g){try{return e(g)}catch(k){var h,l;null==(l=(h=self).__AMP_REPORT_ERROR)||l.call(h,k);throw k}}var d=a,e=b,f=ka();d.addEventListener("message",c,f?void 0:!1);return function(){var g;null==(g=d)||g.removeEventListener("message",c,f?void 0:!1);c=d=e=null}}function ka(){if(void 0!==y)return y;y=!1;try{var a={get capture(){y=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return y}function la(a){for(var b=null,c="",d=q(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ma(a){var b=la.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function z(a,b){try{return JSON.parse(a)}catch(c){return null==b||b(c),null}}function na(a){if(!A(a))return null;var b=a.indexOf("{");return z(a.substr(b),(function(c){ma(Error("MESSAGING: Failed to parse message: "+a+"\n"+c.message))}))}function A(a){return"string"==typeof a&&a.startsWith("amp-")&&-1!=a.indexOf("{")}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function B(a){var b;null==(b=a.parentElement)||b.removeChild(a)}function C(a,b){a=a.createElement("amp-ad");for(var c in b)a.setAttribute(c,b[c]);return a}var D,E="Webkit webkit Moz moz ms O o".split(" ");function F(a,b,c){var d=a.style;if(!b.startsWith("--")){D||(D=Object.create(null));var e=D[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var g=0;g<E.length;g++){var h=E[g]+f;if(void 0!==d[h]){f=h;break b}}f=""}void 0!==d[f]&&(e=f)}D[b]=e}b=e}b&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}var G=self.AMP_CONFIG||{},oa=("string"==typeof G.cdnProxyRegex?new RegExp(G.cdnProxyRegex):G.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function H(a){if(self.document&&self.document.head&&(!self.location||!oa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}G.cdnUrl||H("runtime-host");G.geoApiUrl||H("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I=self.__AMP_LOG;function J(){throw Error("failed to call initLogConstructor")}function pa(){I.user||(I.user=J());return I.user}function K(){return I.dev||(I.dev=J())}function qa(a,b){return ja(a,b)}function L(){this.W=100;this.H=this.M=0;this.A=Object.create(null)}L.prototype.has=function(a){return!!this.A[a]};L.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.H,b.payload};L.prototype.put=function(a,b){this.has(a)||this.M++;this.A[a]={payload:b,access:this.H};if(!(this.M<=this.W)){a=this.A;var d,c=this.H+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.M--)}};new Set(["c","v","a","ad"]);var M,ra;function sa(a){M||(M=self.document.createElement("a"),ra=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new L));var b=M,c=ra;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function ta(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),e=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return e+=c[1]?"#"+c[1]:""}function ua(a){var c,b=[];for(c in a){var d=a[c];if(null!=d){d=fa(d)?d:[d];for(var e=0;e<d.length;e++){var f=b,g=f.push;var h=d[e];h=encodeURIComponent(c)+"="+encodeURIComponent(h);g.call(f,h)}}}return b.join("&")}function va(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function wa(a,b,c){var d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=va(a,d,!0);for(d=0;d<a.length;d++){var e=a[d];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}function xa(a){for(var b=w({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var f,e=d.events;for(f in e)e[f].splice(0,1/0).forEach((function(g){g(b)}))}}}function ya(a){a.listeningFors||a.addEventListener("message",(function(b){if(b.data){var c=za(b.data);if(c&&c.sentinel){var d=b.source;var e=va(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var h=e[g],l=h.frame.contentWindow;if(l){var k;if(!(k=d==l))b:{for(k=d;k&&k!=k.parent;k=k.parent)if(k==l){k=!0;break b}k=!1}if(k){f=h;break}}else setTimeout(xa,0,e)}d=f?f.events:null}else d=e;var m=d;if(m){var p=m[c.type];if(p)for(p=p.slice(),d=0;d<p.length;d++)(0,p[d])(c,b.source,b.origin,b)}}}}))}function Aa(a,b,c,d){function e(k,m,p,Ja){if("amp"==k.sentinel){if(m!=a.contentWindow)return;var Ka="null"==p&&void 0;if(g!=p&&!Ka)return}if(d||m==a.contentWindow)"unlisten"==k.sentinel?l():b(k,m,p,Ja)}var f=a.ownerDocument.defaultView;ya(f);c=wa(f,a,c);var l,g=sa(a.src).origin,h=c["send-intersections"]||(c["send-intersections"]=[]);h.push(e);return l=function(){if(e){var k=h.indexOf(e);-1<k&&h.splice(k,1);b=h=e=null}}}function Ba(a,b,c,d,e){if(a.contentWindow)for(d.type=c,d.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp",a=d,e&&(a="amp-"+JSON.stringify(d)),d=0;d<b.length;d++)e=b[d],e.win.postMessage(a,e.origin)}function za(a){"string"==typeof a&&(a="{"==a.charAt(0)?z(a,(function(b){K().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",b)}))||null:A(a)?na(a):null);return a}function N(a,b){var c=this;this.h=a;this.J=!1;this.j=[];this.Z=Aa(this.h,(function(d,e,f){c.j.some((function(g){return g.win==e}))||c.j.push({win:e,origin:f});b(d,e,f)}),this.J,this.J)}N.prototype.send=function(a,b){ha(this.j,(function(c){return!c.win.parent}));Ba(this.h,this.j,a,b,this.J)};N.prototype.destroy=function(){this.Z();this.j.length=0};var Ca=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];Date.now();function Da(a,b){var c=this;this.V=a;this.C=null;this.N=new N(b,(function(){c.C.observe(c.V.element)}));this.C=new IntersectionObserver((function(d){c.N.send("intersection",w({changes:d.map(Ea)}))}),{threshold:Ca})}Da.prototype.destroy=function(){this.C.disconnect();this.C=null;this.N.destroy();this.N=null};function Ea(a){return{time:a.time,rootBounds:a.rootBounds,boundingClientRect:a.boundingClientRect,intersectionRect:a.intersectionRect,intersectionRatio:a.intersectionRatio}}var Fa;function Ga(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function O(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return P(a,b)}function Q(a,b){var c=R(a);c=S(c);return P(c,b)}function R(a){return a.nodeType?O((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function S(a){a=R(a);return a.isSingleDoc()?a.win:a}function P(a,b){a=T(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Ha(a){var b=T(a).consentPolicyManager;if(b){if(b.promise)return b.promise;P(a,"consentPolicyManager");return b.promise=Promise.resolve(b.obj)}return null}function T(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Ia(){var a=new Ga,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function La(a){var b=Ha(S(a));if(b)return b;var c=R(a);return c.whenExtensionsKnown().then((function(){var d=c.getExtensionVersion("amp-consent");return d?O(c.win,"extensions").waitForExtension("amp-consent",d):null})).then((function(d){if(d){var e=S(a);var f=Ha(e);f?e=f:(e=T(e),e.consentPolicyManager=Ia(),e=e.consentPolicyManager.promise)}else e=null;return e}))}function Ma(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0}var Na=/(WebView|(iPhone|iPod|iPad)(?!.*Safari)|Android.*(wv|.0.0.0)|Linux; U; Android)/gi;function Oa(){var a=!!navigator.userAgent.match(Na);var b=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4))?"mobile"+(a?"-webview":""):"desktop"}function Pa(a){var b=a&&a.getAttribute("data-apester-tags");return b?b.split(",").map((function(c){return c.trim()}))||[]:[]}function Qa(a){return ea(a.querySelectorAll('script[type="application/ld+json"]')).map((function(b){var c;if(c=b){var d;c="SCRIPT"==b.tagName&&"APPLICATION/LD+JSON"==(null==(d=b.getAttribute("type"))?void 0:d.toUpperCase())}return c?z(b.textContent)||{}:{}})).map((function(b){return b&&b.headline})).filter((function(b){return"string"===typeof b})).map((function(b){return b.trim().split(" ").filter((function(c){return 2<c.length}))})).reduce((function(b,c){return b.concat(c)}),[]).slice(0,5)}function Ra(a){return(a.getMetaByName("keywords")||"").split(",").map((function(b){return b.trim()})).filter(Boolean)}function Sa(a,b){var c=Pa(b)||[],d=Ra(a);return c.concat(d.length?d:Qa(a.getRootNode())||[]).map((function(e){return e.toLowerCase().trim()})).filter((function(e,f,g){return g.indexOf(e)===f}))}function U(a,b,c,d,e){c=qa(c,(function(f){var g=d.contentWindow===f.source;f.data.type===a&&g&&b(f.data)}));e.push(c)}function Ta(a){var b=void 0===b?"default":b;return La(a).then((function(c){return c?c.whenPolicyResolved(b):null}))}function Ua(a){return La(a).then((function(b){return b?b.getConsentStringInfo("default"):null}))}function Va(){return new Promise((function(a){setTimeout((function(){a([4,void 0])}),3e3)}))}function Wa(a){var b=Ta(a).catch((function(e){K().error("amp-apester-media","Error determining consent state",e);return 4})),c=Ua(a).catch((function(e){K().error("amp-apester-media","Error determining consent string",e)})),d=Promise.all([b,c]);return Promise.race([d,Va()]).then((function(e){var f=e[1];switch(e[0]){case 1:return w({gdpr:1,user_consent:1,gdprString:f});case 2:case 4:return w({gdpr:1,user_consent:0,gdprString:f});default:return{}}}))}function Xa(a,b,c,d){var e=Math.max.apply(null,b.map((function(h){return h[0]}))),f=Math.max.apply(null,b.map((function(h){return h[1]}))),g=b.map((function(h){return h.join("x")})).join();a=C(c.ownerDocument,w({width:""+e,height:"0",type:"doubleclick",layout:"fixed","data-slot":""+a,"data-multi-size-validation":"false","data-multi-size":g,"data-enable-refresh":""+d}));a.classList.add("i-amphtml-amp-apester-companion");c.parentNode.insertBefore(a,c.nextSibling);Q(c,"mutator").requestChangeSize(a,f,void 0)}function Ya(a,b){var c=a.campaignData;c&&!c.disabledAmpCompanionAds?Wa(b).then((function(d){var e=x(a,"campaignData.companionOptions");if(e){var f=x(e,"enabled");e=x(e,"settings");f&&e&&"gdt"===e.bannerAdProvider&&(f=[[300,250]],Xa(e.slot,e.bannerSizes||f,b,6e4===e.options.autoRefreshTime?60:30))}var g=x(a,"campaignData.companionCampaignOptions");f=(e=x(a,"campaignData.companionOptions.video"))?e.companion.enabled?"above":e.companion_below.enabled?"below":e.floating.enabled?"floating":null:null;if(g&&e&&e.enabled&&"sr"===e.provider&&f&&"floating"!==f){var h=g.companionCampaignId,l=a.interactionId,k=a.publisherId;g=a.publisher;var m=Q(b,"documentInfo").get().canonicalUrl;h=w({param1:l,param2:k,param6:h,page_url:m});d.gdpr&&(h.gdpr=d.gdpr,h.user_consent=d.user_consent,h.param4=d.gdprString);g&&g.groupId&&(h.param7="apester.com:"+g.groupId,h.schain="1.0,1!apester.com,"+g.groupId+",1,,,,");g=e.videoTag;l=b.clientWidth;e=Math.ceil(.6*l);g=C(b.ownerDocument,w({width:l,height:e,type:"blade",layout:"fixed","data-blade_player_type":"bladex",servingDomain:"ssr.streamrail.net","data-blade_macros":JSON.stringify(h),"data-blade_player_id":g,"data-blade_api_key":"5857d2ee263dc90002000001","data-enable-refresh":"30"}));g.classList.add("i-amphtml-amp-apester-companion");b.parentNode.insertBefore(g,"below"===f?b.nextSibling:b);Q(b,"mutator").requestChangeSize(g,e,void 0)}(e=x(a,"campaignData.bottomAdOptions"))&&x(e,"enabled")&&"gpt"===e.videoPlayer&&(g=[[300,50]],f=g[0][1],e=C(b.ownerDocument,w({width:""+g[0][0],height:""+f,type:"doubleclick",layout:"fixed","data-slot":""+e.tag,"data-multi-size-validation":"false","data-enable-refresh":"30"})),e.classList.add("i-amphtml-amp-apester-bottom-ad"),b.appendChild(e),Q(b,"mutator").requestChangeSize(e,f))})):Fa||(Fa=Promise.resolve(void 0))}function Za(a){var b=$a;var c=void 0===c?{}:c;var d=c.needsRootBounds;return new a.IntersectionObserver(b,{threshold:c.threshold,root:a.parent&&a.parent!=a&&d?a.document:void 0})}var V=new WeakMap,W=new WeakMap;function ab(a,b){var c=(a.ownerDocument||a).defaultView,d=V.get(c);d||V.set(c,d=Za(c));var e=W.get(a);e||(e=[],W.set(a,e));e.push(b);d.observe(a);return function(){var g,f=W.get(a);if(g=f)g=f.indexOf(b),-1==g?g=!1:(f.splice(g,1),g=!0),g=g&&!f.length;if(g){var h;null==(h=V.get((a.ownerDocument||a).defaultView))||h.unobserve(a);W.delete(a)}}}function $a(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)&&(b.add(e),e=W.get(e)))for(var f=0;f<e.length;f++)(0,e[f])(d)}}var bb=w({type:"has_bottom_ad",adHeight:50});function X(a){a=AMP.BaseElement.call(this,a)||this;a.S="https://renderer.apester.com";a.P="https://display.apester.com";a.Y="https://static.qmerce.com";a.X="https://static.apester.com/js/assets/loader_100x100.gif";a.T=!1;a.h=null;a.F=null;a.U=null;a.B=null;a.L=!1;a.R=!1;a.K=null;a.o={};a.D=null;a.G=[];a.I=null;a.O=null;return a}var Y=AMP.BaseElement;X.prototype=ba(Y.prototype);X.prototype.constructor=X;if(v)v(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var cb=Object.getOwnPropertyDescriptor(Y,Z);cb&&Object.defineProperty(X,Z,cb)}else X[Z]=Y[Z];X.$=Y.prototype;n=X.prototype;n.preconnectCallback=function(a){var b=O(this.win,"preconnect");b.url(this.getAmpDoc(),this.P,a);b.url(this.getAmpDoc(),this.S,a);b.url(this.getAmpDoc(),this.Y,a)};n.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};n.buildCallback=function(){var a=this.element.getAttribute("width"),b=this.element.getAttribute("height");this.U=Ma(a);this.B=Ma(b);this.L=this.element.hasAttribute("data-apester-channel-token");a=this.element.getAttribute("data-apester-media-id")||this.element.getAttribute("data-apester-channel-token");b=this.element;this.K=pa().assert(a,"Either the data-apester-media-id or the data-apester-channel-token attributes must be specified for <amp-apester-media> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.o={playlist:this.L,idOrToken:this.K,inative:"true"===this.element.getAttribute("data-apester-inative"),fallback:this.element.getAttribute("data-apester-fallback"),distributionChannelId:this.element.getAttribute("data-apester-channel-id"),renderer:!0,tags:Sa(this.getAmpDoc(),this.element)}};function db(a){var b=a.o,c=b.distributionChannelId,d=b.fallback,e=b.idOrToken,f=b.inative,g=b.playlist,h=b.tags,l=encodeURIComponent(a.K);b="";var k={renderer:!1};k.platform=Oa();f?e?b="/inatives/"+e:c&&(b="/channels/"+c+"/inatives"):g&&h?(b="/tokens/"+l+"/interactions/random",k.tags=h,k.fallback=!!d):b=g?"/tokens/"+l+"/interactions/random":"/interactions/"+l+"/display";return ta(""+a.P+b,ua(k))}function eb(a){var b=db(a);return O(a.win,"xhr").fetchJson(b,{}).then((function(c){return 200===c.status?c.json():c}))}function fb(a,b,c){var d={};d.channelId=a.o.distributionChannelId;d.type=a.o.playlist?"playlist":"editorial";d.platform=Oa();d.cannonicalUrl=Q(a.element,"documentInfo").get().canonicalUrl;d.sdk="amp";a=a.S+"/"+(c?"v2":"interaction")+"/"+encodeURIComponent(b);return ta(a,ua(d))}function gb(a,b){var c=a.element.ownerDocument.createElement("iframe");c.setAttribute("frameborder","0");c.setAttribute("allowtransparency","true");c.setAttribute("scrolling","no");c.src=b;c.name=a.win.location.href;c.height=a.B;c.width=a.U;c.classList.add("amp-apester-iframe");c.classList.add("i-amphtml-fill-content");return c}n.layoutCallback=function(){var a=this;this.element.classList.add("amp-apester-container");var b=O(this.win,"vsync");return eb(this).then((function(c){if(!c||204===c.status)return K().warn("amp-apester-media","Display","No Content for provided tag"),a.unlayoutCallback();c=c.payload;var d=a.o.playlist?c[Math.floor(Math.random()*c.length)]:c;c=d.interactionId;var e=fb(a,c,d.usePlayer),f=gb(a,e);a.I=new Da(a,f);a.D=c;a.h=f;hb(a);return b.mutatePromise((function(){var g=a.element.ownerDocument.createElement("div");g.setAttribute("overflow","");g.className="amp-apester-overflow";var h=a.element.ownerDocument.createElement("button");h.textContent="Full Size";g.appendChild(h);a.element.appendChild(g);a.element.appendChild(f);Ya(d,a.element)})).then((function(){return a.loadPromise(f)})).then((function(){return b.mutatePromise((function(){if(a.h){a.h.classList.add("i-amphtml-apester-iframe-ready");var g=d.campaignData;if(g){var h;if(null==(h=g.bottomAdOptions)?0:h.enabled)a.R=!0,h=a.getAmpDoc(),O(a.win,"extensions").installExtensionForDoc(h,"amp-ad"),a.h.contentWindow.postMessage(bb,"*");a.h.contentWindow.postMessage({type:"campaigns",data:g},"*")}}var l,k,m;h=null!=(m=null==d?void 0:null==(l=d.data)?void 0:null==(k=l.size)?void 0:k.height)?m:0;h!=a.B&&(a.B=h,a.L?a.attemptChangeHeight(h):a.forceChangeHeight(h))}))})).then((function(){a.O=ab(a.element,(function(g){g.isIntersecting&&!a.T&&a.h&&a.h.contentWindow&&(K().fine("amp-apester-media","media seen"),a.T=!0,a.h.contentWindow.postMessage("interaction seen","*"))}))}))})).catch((function(c){pa().error("amp-apester-media","Display",c)}))};n.createPlaceholderCallback=function(){var a=this.element.ownerDocument.createElement("div"),b=this.element.ownerDocument.createElement("img");b.setAttribute("loading","lazy");b.setAttribute("src",this.X);var d,c={width:"100px",height:"100px"};for(d in c)F(b,d,c[d]);this.element.hasAttribute("aria-label")?a.setAttribute("aria-label","Loading - "+this.element.getAttribute("aria-label")):a.setAttribute("aria-label","Loading Apester Media");a.setAttribute("placeholder","");a.className="amp-apester-loader";c={position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)"};for(var e in c)F(b,e,c[e]);a.appendChild(b);return this.F=a};n.unlayoutOnPause=function(){return!0};n.unlayoutCallback=function(){var a;null==(a=this.O)||a.call(this);this.O=null;this.h&&(this.I.destroy(),this.I=null,this.G.forEach((function(b){return b()})),B(this.h),this.h=null);this.F&&(B(this.F),this.F=null);return!1};function hb(a){U("fullscreen_on",(function(b){a.D===b.id&&a.element.classList.add("amp-apester-fullscreen")}),a.win,a.h,a.G);U("fullscreen_off",(function(b){a.D===b.id&&a.element.classList.remove("amp-apester-fullscreen")}),a.win,a.h,a.G);U("apester_resize_unit",(function(b){a.D===b.id&&b.height&&(a.attemptChangeHeight(b.height),a.R&&a.h.contentWindow.postMessage(bb,"*"))}),a.win,a.h,a.G)}AMP.registerElement("amp-apester-media",X,".amp-apester-iframe{transition:opacity 0.4s;opacity:0}.i-amphtml-apester-iframe-ready{transition:opacity 1s ease-out;opacity:1!important}.amp-apester-loader{height:100%;width:100%;background-color:#fff}.amp-apester-container{max-width:700px;margin:0 auto;display:block;position:relative;width:100%}.amp-apester-overflow{position:absolute;margin:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.amp-apester-overflow button{border:none;background:#fff;cursor:pointer;padding:25px 80px;text-transform:uppercase;letter-spacing:1px;font-weight:700;outline:none;position:relative}.amp-apester-fullscreen{background:rgba(34,36,38,0.97)!important;position:fixed!important;width:100vw!important;height:100vh!important;z-index:2147483646!important;top:0;zoom:1;-webkit-overflow-scrolling:touch!important}.i-amphtml-amp-apester-companion{display:block;margin:10px auto}.i-amphtml-amp-apester-bottom-ad{display:block!important;position:absolute!important;bottom:0!important;left:50%!important;transform:translateX(-50%)!important;margin:0!important}\n/*# sourceURL=/extensions/amp-apester-media/0.1/amp-apester-media.css*/")}});//# sourceMappingURL=amp-apester-media-0.1.js.map