(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-delight-player",ev:"0.1",l:true,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var da={a:!0},ea={};try{ea.__proto__=da;q=ea.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t,fa=p;function u(){return t?t:t=Promise.resolve(void 0)}function v(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function ha(a){return new Promise((function(b){b(a())}))}var ia=Object.prototype.toString;function w(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function ja(a){return a||{}}var ka=Array.isArray;function la(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function ma(a,b){b=a.indexOf(b);if(-1==b)return!1;a.splice(b,1);return!0}function na(a){try{return JSON.parse(a)}catch(b){return null}}function oa(a){return"number"===typeof a&&isFinite(a)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var pa={bubbles:!0,cancelable:!0};function qa(a){var b;null==(b=a.parentElement)||b.removeChild(a)}function y(a,b,c){c=c||{};var d=a.ownerDocument.createEvent("Event");d.data=c;d.initEvent(b,pa.bubbles,pa.cancelable);a.dispatchEvent(d)}function ra(a){a.classList.add("i-amphtml-fill-content")}function sa(a,b,c){var d=c=void 0===c?{}:c,e=d.needsRootBounds;return new b.IntersectionObserver(a,{threshold:d.threshold,root:b.parent&&b.parent!=b&&e?b.document:void 0})}var ta=new WeakMap,z=new WeakMap;function ua(a,b){var c=(a.ownerDocument||a).defaultView,d=ta.get(c);d||ta.set(c,d=sa(va,c));var e=z.get(a);e||(e=[],z.set(a,e));e.push(b);d.observe(a);return function(){var f=z.get(a);if(f&&ma(f,b)&&!f.length){var h;null==(h=ta.get((a.ownerDocument||a).defaultView))||h.unobserve(a);z.delete(a)}}}function va(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)&&(b.add(e),e=z.get(e)))for(var f=0;f<e.length;f++)(0,e[f])(d)}}var A;function B(a){var b=a.ownerDocument||a;A&&A.ownerDocument===b||(A=b.createElement("div"));return wa}function wa(a){var b=A;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}function xa(a){for(var b=null,c="",d=k(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ya(a){var b,c;null==(c=(b=self).__AMP_REPORT_ERROR)||c.call(b,a)}function za(a){var b=xa.apply(null,arguments);setTimeout((function(){ya(b);throw b}))}function Aa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){za(e)}}function Ba(a){var b=xa.apply(null,arguments);b.expected=!0;return b}function Ca(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];ya(Ba.apply(null,c))}var C,Da="Webkit webkit Moz moz ms O o".split(" "),Ea={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function Fa(a,b,c){var d=a.style;if(!b.startsWith("--")){C||(C=w());var e=C[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<Da.length;h++){var l=Da[h]+f;if(void 0!==d[l]){f=l;break b}}f=""}void 0!==d[f]&&(e=f)}C[b]=e}b=e}b&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}var Ga=/vertical/,Ha=new WeakMap,D=new WeakMap,Ia=new WeakMap;function Ja(a,b){var c=a.ownerDocument.defaultView;if(c){var d=D.get(a);d||(d=[],D.set(a,d),Ka(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=Ia.get(a);e&&setTimeout((function(){return La(1,b,e)}))}}}function Ma(a,b){var c=D.get(a);c&&(la(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(D.delete(a),Ia.delete(a),(c=a.ownerDocument.defaultView)&&Ka(c).unobserve(a)))}function Ka(a){var b=Ha.get(a);b||(b=new a.ResizeObserver(Oa),Ha.set(a,b));return b}function Oa(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=D.get(e);if(f)for(Ia.set(e,d),e=0;e<f.length;e++){var h=f[e];La(h.type,h.callback,d)}}}}function La(a,b,c){if(0==a)a=c.contentRect,Aa(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=Ga.test(((a.ownerDocument||a).defaultView.getComputedStyle(a)||Ea)["writing-mode"]),h=a.offsetHeight,l=a.offsetWidth;if(f){var n=l;var m=h}else m=l,n=h;e={inlineSize:m,blockSize:n}}Aa(b,e)}}function Pa(a){this.Y=a;this.$=this.C=!1;this.R=this.R.bind(this)}Pa.prototype.updatePlaying=function(a){a!==this.C&&((this.C=a)?(this.$=!1,Ja(this.Y,this.R)):Ma(this.Y,this.R))};Pa.prototype.R=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.$&&(this.$=c,a=this.Y,c||a.pause())};var E=self.AMP_CONFIG||{},Qa=("string"==typeof E.cdnProxyRegex?new RegExp(E.cdnProxyRegex):E.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Ra(a){if(self.document&&self.document.head&&(!self.location||!Qa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}E.cdnUrl||Ra("runtime-host");E.geoApiUrl||Ra("amp-geo-api");function F(a){var b=!1,c=null,d=a;return function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];b||(c=d.apply(self,f),b=!0,d=null);return c}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Sa=self.__AMP_LOG;function G(){if(!Sa.user)throw Error("failed to call initLogConstructor");return Sa.user}function Ta(a,b,c){return G().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function Ua(a,b){var c=J(a);c=K(c);return I(c,b)}function L(a,b){a=J(a);a=K(a);return Va(a,b)?I(a,b):null}function J(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function K(a){a=J(a);return a.isSingleDoc()?a.win:a}function I(a,b){Va(a,b);a=M(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Wa(a){var b=M(a).consentPolicyManager;if(b){if(b.promise)return b.promise;I(a,"consentPolicyManager");return b.promise=Promise.resolve(b.obj)}return null}function M(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Va(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Xa(){var a=new v,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function N(a){var b=Wa(K(a));if(b)return b;var c=J(a);return c.whenExtensionsKnown().then((function(){var d=c.getExtensionVersion("amp-consent");return d?H(c.win,"extensions").waitForExtension("amp-consent",d):null})).then((function(d){if(d){var e=K(a);var f=Wa(e);f?e=f:(e=M(e),e.consentPolicyManager=Xa(),e=e.consentPolicyManager.promise)}else e=null;return e}))}var O,Ya;function Za(a){O||(O=new WeakMap,Ya=new WeakMap);var b=Ya.get(a);b||(b=sa((function(c){for(var d=new Set,e=c.length-1;0<=e;e--){var f=c[e].target;d.has(f)||(d.add(f),b.unobserve(f),O.get(f).resolve(c[e]),O.delete(f))}}),a,{needsRootBounds:!0}),Ya.set(a,b));return b}function $a(a){if(O&&O.has(a))return O.get(a).promise;Za((a.ownerDocument||a).defaultView).observe(a);var b=new v;O.set(a,b);return b.promise}function ab(a){if(null==a.__AMP_AUTOPLAY){var b=a.document.createElement("video");b.setAttribute("muted","");b.setAttribute("playsinline","");b.setAttribute("webkit-playsinline","");b.setAttribute("height","0");b.setAttribute("width","0");b.muted=!0;b.playsInline=!0;b.playsinline=!0;b.webkitPlaysinline=!0;var d,c={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"};for(d in c)Fa(b,d,c[d]);bb(b);b=Promise.resolve(!b.paused);a.__AMP_AUTOPLAY=b}return a.__AMP_AUTOPLAY}function cb(a,b){var c=ha((function(){return a.play(!!b)}));c.catch((function(d){Ca("TRYPLAY",d)}));return c}function bb(a){ha((function(){return a.play()})).catch((function(){}))}var P;function db(a,b,c,d){function e(m){try{return h(m)}catch(Na){var r,x;null==(x=(r=self).__AMP_REPORT_ERROR)||x.call(r,Na);throw Na}}var f=a,h=c,l=eb(),n=!(null==d||!d.capture);f.addEventListener(b,e,l?d:n);return function(){var m;null==(m=f)||m.removeEventListener(b,e,l?d:n);e=f=h=null}}function eb(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P}function fb(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function Q(a,b,c){return db(a,b,c,void 0)}function gb(a,b,c,d){var e=c,f=db(a,b,(function(h){try{e(h)}finally{e=null,f()}}),d);return f}function hb(a){var b,c=new Promise((function(d){b=gb(a,"transitionend",d,void 0)}));c.then(b,b);return c}function ib(){this.B=null}g=ib.prototype;g.add=function(a){var b=this;this.B||(this.B=[]);this.B.push(a);return function(){b.remove(a)}};g.remove=function(a){this.B&&ma(this.B,a)};g.removeAll=function(){this.B&&(this.B.length=0)};g.fire=function(a){if(this.B)for(var b=k(this.B),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.B)?void 0:a.length)?b:0};function R(){this.O=!1;this.pa=new ib}R.prototype.onSessionEnd=function(a){this.pa.add(a)};R.prototype.beginSession=function(){this.O=!0};R.prototype.endSession=function(){this.O&&this.pa.fire();this.O=!1};R.prototype.isSessionActive=function(){return this.O};var jb=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],kb=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function lb(a,b){var c=B(a)(jb);b&&b.title&&c.setAttribute("aria-label",b.title);return c}function mb(a){var b=B(a)(kb),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}qa(c);return b}function nb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}var ob={title:"",artist:"",album:"",artwork:[{src:""}]};function pb(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=na(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function qb(a,b){var c=L(a,"url");if(b&&b.artwork){var d=b.artwork;ka(d);d.forEach((function(e){e&&(e="[object Object]"===ia.call(e)?e.src:e,Ta(c.isProtocolValid(e)))}))}}function rb(a){a.signals().signal("user-interacted")}function sb(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=F((function(){var c=b.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;var e=d?d(".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"):".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=w());var f=nb(c,d,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(c.ownerDocument||c).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=nb(c,d,"amp-runtime"),(e=void 0===e?null:e)?c.insertBefore(f,e.nextSibling):c.insertBefore(f,c.firstChild),d["amp-extension=amp-video-autoplay"]=f)}));this.ca=this.L=this.j=null;this.S=I(a.win,"timer");this.Aa=L(a.getHeadNode(),"action");this.na=function(){for(var c=0;c<b.j.length;c++){var d=b.j[c];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();oa(e)&&oa(f)&&0<f&&(e=fb(b.ampdoc.win,"video-manager.timeUpdate",ja({time:e,percent:e/f})),b.Aa.trigger(d.video.element,"timeUpdate",e,1))}}b.S.delay(b.na,1e3)};this.Z=F((function(){return new T(b.ampdoc,b)}));this.S.delay(this.na,1e3)}g=sb.prototype;g.dispose=function(){this.Z().dispose();this.L.disconnect();this.L=null;if(this.j)for(var a=0;a<this.j.length;a++)this.j[a].dispose()};g.register=function(a){var b=this;tb(a);if(a.supportsPlatform()&&!U(this,a)){this.L||(this.L=sa((function(e){return e.forEach((function(f){var h=f.isIntersecting;U(b,f.target).updateVisibility(h)}))}),this.ampdoc.win,{threshold:.5}));this.L.observe(a.element);Q(a.element,"reloaded",(function(){return c.videoLoaded()}));this.j=this.j||[];var c=new ub(this,a);this.j.push(c);var d=c.video.element;y(d,"registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};function tb(a){function b(){return a.fullscreenEnter()}function c(d,e){a.registerAction(d,(function(){rb(a);e()}),1)}c("play",(function(){return cb(a,!1)}));c("pause",(function(){return a.pause()}));c("mute",(function(){return a.mute()}));c("unmute",(function(){return a.unmute()}));c("fullscreenenter",b);c("fullscreen",b)}function U(a,b){if(vb(a.ca,b))return a.ca;for(var c=0;a.j&&c<a.j.length;c++){var d=a.j[c];if(vb(d,b))return a.ca=d}return null}g.registerForAutoFullscreen=function(a){this.Z().register(a)};g.Ga=function(){return this.Z()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=G().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():u()).then((function(e){return e?e[b]:""}))};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.j.forEach((function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()}))};function vb(a,b){return!!a&&(a.video===b||a.video.element===b)}function ub(a,b){var c=this;this.H=a;this.h=a.ampdoc;this.video=b;this.da=!0;this.G=this.K=this.C=this.va=!1;this.V=new R;this.V.onSessionEnd((function(){return S(c,"video-session")}));this.I=new R;this.I.onSessionEnd((function(){return S(c,"video-session-visible")}));this.ra=F((function(){return new V(c.h.win,c)}));this.ea=this.xa=!1;this.aa=null;this.sa=this.P=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.H.installAutoplayStyles();this.D=ob;this.Ea=function(){cb(c.video,!1)};this.Da=function(){c.video.pause()};Q(b.element,"load",(function(){return c.videoLoaded()}));Q(b.element,"pause",(function(){S(c,"video-pause");c.C=!1;c.ea?c.ea=!1:c.V.endSession()}));Q(b.element,"play",(function(){c.sa=!0;S(c,"video-play")}));Q(b.element,"playing",(function(){c.C=!0;"playing_manual"==c.getPlayingState()&&(c.qa(),c.H.pauseOtherVideos(c));var d=c.video,e=d.element;if(!d.preimplementsMediaSessionAPI()&&!e.classList.contains("i-amphtml-disable-mediasession")){qb(e,c.D);d=c.h.win;e=c.D;var f=c.Ea,h=c.Da,l=d.navigator;"mediaSession"in l&&d.MediaMetadata&&(l.mediaSession.metadata=new d.MediaMetadata(ob),l.mediaSession.metadata=new d.MediaMetadata(e),l.mediaSession.setActionHandler("play",f),l.mediaSession.setActionHandler("pause",h))}c.V.beginSession();c.G&&c.I.beginSession();c.sa||S(c,"video-play")}));Q(b.element,"muted",(function(){return c.P=!0}));Q(b.element,"unmuted",(function(){c.P=!1;c.H.pauseOtherVideos(c)}));Q(b.element,"amp:video:tick",(function(d){d=d.data;var e=d.eventType;e&&wb(c,e,d.vars)}));Q(b.element,"ended",(function(){c.K=!1;S(c,"video-ended")}));Q(b.element,"ad_start",(function(){c.K=!0;S(c,"video-ad-start")}));Q(b.element,"ad_end",(function(){c.K=!1;S(c,"video-ad-end")}));b.signals().whenSignal("registered").then((function(){var d=c.video.element;(c.video.preimplementsAutoFullscreen()||!d.hasAttribute("rotate-to-fullscreen")?0:Ta(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",d))&&c.H.registerForAutoFullscreen(c);c.hasAutoplay&&xb(c)}));this.qa=F((function(){var d=fb(c.h.win,"firstPlay",ja({})),e=c.video.element;L(e,"action").trigger(e,"firstPlay",d,1)}));yb(this)}g=ub.prototype;g.dispose=function(){this.ra().stop()};function wb(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach((function(f){e["custom_"+f]=c[f]}));S(a,"video-hosted-custom",e)}function yb(a){a.video.signals().whenSignal("playback-delegated").then((function(){a.da=!1;a.C&&a.video.pause()}))}g.isMuted=function(){return this.P};g.isPlaybackManaged=function(){return this.da};g.videoLoaded=function(){this.va=!0;this.aa=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.D=w(this.video.getMetadata()));var a=this.h.win.document;if(!this.D.artwork||0==this.D.artwork.length){var b;(b=pb(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.D.artwork=[{src:b}])}!this.D.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.aa.getAttribute("title")||this.aa.getAttribute("aria-label")||a.title)&&(this.D.title=a)}this.ra().start();this.G&&zb(this)};function zb(a){a.h.isVisible()&&ab(a.h.win).then((function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.da&&(a.G?(a.I.beginSession(),cb(a.video,!0),a.xa=!0):(a.C&&a.I.endSession(),a.video.pause(),a.ea=!0)):a.G?a.I.beginSession():a.C&&a.I.endSession()}))}function xb(a){a.video.isInteractive()&&a.video.hideControls();ab(a.h.win).then((function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Ab(a))}))}function Ab(a){function b(m){d.mutateElementSkipRemeasure((function(){h.forEach((function(r){var x=m;void 0===x&&(x=r.hasAttribute("hidden"));x?r.removeAttribute("hidden"):r.setAttribute("hidden","")}))}))}function c(m){d.mutateElementSkipRemeasure((function(){return f.classList.toggle("amp-video-eq-play",m)}))}var d=a.video,e=a.video.element;if(!e.hasAttribute("noaudio")&&!e.signals().get("user-interacted")){var f=mb(e),h=[f],l=[Q(e,"pause",(function(){return c(!1)})),Q(e,"playing",(function(){return c(!0)})),Q(e,"ad_start",(function(){b(!1);d.showControls()})),Q(e,"ad_end",(function(){b(!0);d.hideControls()})),Q(e,"unmuted",(function(){return rb(d)}))];if(d.isInteractive()){d.hideControls();var n=lb(e,a.D);h.push(n);l.push(Q(n,"click",(function(){return rb(d)})))}d.mutateElementSkipRemeasure((function(){h.forEach((function(m){e.appendChild(m)}))}));a.K&&b(!1);d.signals().whenSignal("user-interacted").then((function(){a.qa();d.isInteractive()&&d.showControls();d.unmute();l.forEach((function(m){m()}));d.mutateElementSkipRemeasure((function(){h.forEach((function(m){qa(m)}))}))}))}}g.updateVisibility=function(a){var b=this.G;this.G=a;a!=b&&this.va&&zb(this)};g.getPlayingState=function(){return this.C?this.C&&this.xa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.K};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};g.getAnalyticsDetails=function(){var a=this,b=this.video;return Promise.all([ab(this.h.win),$a(b.element)]).then((function(c){var d=c[0],e=c[1].boundingClientRect,f=e.height;e=e.width;var h=a.hasAutoplay&&d,l=b.getPlayedRanges(),n=l.reduce((function(m,r){return m+r[1]-r[0]}),0);return{autoplay:h,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:f,id:b.element.id,muted:a.P,playedTotal:n,playedRangesJson:JSON.stringify(l),state:a.getPlayingState(),width:e}}))};function T(a,b){var c=this;this.H=b;this.h=a;this.F=this.J=null;this.j=[];this.A=[];this.M=function(){return Bb(c)};this.Ca=function(d){return"playing_manual"==c.H.getPlayingState(d)};this.Ba=function(d,e){var f=d.boundingClientRect;var h=e.boundingClientRect;d=d.intersectionRatio-e.intersectionRatio;.1<Math.abs(d)?f=d:(e=Ua(c.h,"viewport"),d=Cb(e,f),e=Cb(e,h),f=d<e||d>e?d-e:f.top-h.top);return f};Db(this);Eb(this)}T.prototype.dispose=function(){this.A.forEach((function(a){return a()}));this.A.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=H(this.h.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.j.push(a),Q(b,"pause",this.M),Q(b,"playing",this.M),Q(b,"ended",this.M),a.signals().whenSignal("user-interacted").then(this.M),Bb(this))};function Eb(a){function b(){a.J=null}var c=a.h.getRootNode();a.A.push(Q(c,"webkitfullscreenchange",b),Q(c,"mozfullscreenchange",b),Q(c,"fullscreenchange",b),Q(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.h.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};function Db(a){var b=a.h.win,c=b.screen;c&&"orientation"in c&&a.A.push(Q(c.orientation,"change",(function(){return Fb(a)})));a.A.push(Q(b,"orientationchange",(function(){return Fb(a)})))}function Fb(a){a.isInLandscape()?null!=a.F&&Gb(a,a.F):a.J&&Hb(a,a.J)}function Gb(a,b){var c=H(a.h.win,"platform");a.J=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():Ib(a,b).then((function(){return b.fullscreenEnter()}))}function Hb(a,b){a.J=null;Ib(a,b,"center").then((function(){return b.fullscreenExit()}))}function Ib(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=Ua(a.h,"viewport");return I(a.h.win,"timer").promise(330).then((function(){return $a(e)})).then((function(h){var l=h.boundingClientRect;h=l.bottom;l=l.top;var n=f.getSize().height;return 0<=l&&h<=n?u():f.animateScrollIntoView(e,d?d:h>n?"bottom":"top")}))}function Bb(a){if(a.isInLandscape())return Promise.resolve(a.F);a.F=null;var b=a.j.filter(a.Ca).map((function(c){return $a(c.element)}));return Promise.all(b).then((function(c){var d=c.sort(a.Ba)[0];return d&&.5<d.intersectionRatio?d.target.getImpl().then((function(e){return a.F=e})):a.F}))}function Cb(a,b){b=b.top+b.height/2;var c=a.getSize().height/2;return Math.abs(b-c)}function V(a,b){this.S=I(a,"timer");this.N=b;this.A=null;this.T=this.ua=0}V.prototype.start=function(){var a=this,b=this.N.video.element;this.stop();this.A=this.A||[];Jb(this)?Kb(this,this.T):this.A.push(gb(b,"loadedmetadata",(function(){Jb(a)&&Kb(a,a.T)})));this.A.push(Q(b,"ended",(function(){Jb(a)&&Lb(a,100)})))};V.prototype.stop=function(){if(this.A){for(;0<this.A.length;)this.A.pop()();this.T++}};function Jb(a){var b=a.N.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.Fa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.Fa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];G().warn.apply(G(),["video-manager"].concat(b))};function Kb(a,b){if(b==a.T){var c=a.N,d=a.S,e=c.video,f=function(){return Kb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4e3),l=e.getCurrentTime()/c*100,n=5*Math.floor(l/5);oa(n);Lb(a,n);d.delay(f,h)}else d.delay(f,500)}}function Lb(a,b){0>=b||a.ua==b||(a.ua=b,S(a.N,"video-percentage-played",{normalizedPercentage:b.toString()}))}function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then((function(e){c&&Object.assign(e,c);y(d.element,b,e)}))}function Mb(a,b){var c=b=void 0===b?"default":b;return N(a).then((function(d){return d?d.whenPolicyResolved(c):null}))}function Nb(a,b){return N(a).then((function(c){return c?c.getMergedSharedData(b):null}))}function Ob(a,b){var c=void 0===b?"default":b;return N(a).then((function(d){return d?d.getConsentStringInfo(c):null}))}function Pb(a,b){var c=void 0===b?"default":b;return N(a).then((function(d){return d?d.getConsentMetadataInfo(c):null}))}var Qb=["<iframe frameborder=0 allowfullscreen></iframe>"];function Rb(a,b,c){if(null==c[b])return!1;var d=c[b];(ka(d)?d:[d]).forEach((function(e){y(a,e)}));return!0}function Sb(a,b){var c=a.element,d=B(c)(Qb);a=a.element;var e=["referrerpolicy"];e=ka(e)?e:[e];e=k(e);for(var f=e.next();!f.done;f=e.next()){f=f.value;var h=a.getAttribute(f);null!==h&&d.setAttribute(f,h)}d.src=L(c,"url").assertHttpsUrl(b,c);ra(d);c.appendChild(d);return d}var Tb=["<img placeholder referrerpolicy=origin loading=lazy>"];function W(a){a=AMP.BaseElement.call(this,a)||this;a.ta=!1;a.W="https://players.delight-vr.com";a.X="";a.za=1;a.oa=0;a.ya=[];a.ba=!1;a.o=null;a.ga=null;a.ha=null;a.ka=null;a.la=null;a.U=null;a.ja=null;a.ia=null;a.wa=null;a.fa=new Pa(a.element);a.ma=null;return a}var X=AMP.BaseElement;W.prototype=ba(X.prototype);W.prototype.constructor=W;if(fa)fa(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Ub=Object.getOwnPropertyDescriptor(X,Y);Ub&&Object.defineProperty(W,Y,Ub)}else W[Y]=X[Y];W.Ha=X.prototype;g=W.prototype;g.preconnectCallback=function(a){H(this.win,"preconnect").url(this.getAmpDoc(),this.W,a)};g.renderOutsideViewport=function(){return!1};g.buildCallback=function(){this.X=Ta(this.element.getAttribute("data-content-id"),"The data-content-id attribute is required");var a=new v;this.ga=a.promise;this.ha=a.resolve;a=J(this.element);var b=K(a),c=M(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});d.ctor||(d.ctor=sb,d.context=a,d.sharedInstance=!1,d.resolve&&I(b,"video-manager"));Ua(this.element,"video-manager").register(this)};g.layoutCallback=function(){var a=this;this.ma=ua(this.element,(function(c){return a.ta=c.isIntersecting}));var b=Sb(this,this.W+"/player/"+this.X+"?amp=1");b.setAttribute("allow","vr");this.ka=Q(this.win,"message",(function(c){var d=a.o,e=/.*/;if(d&&c.source==d.contentWindow&&("string"===typeof e?e==c.origin:e.test(c.origin))&&(c=c.data,(c="[object Object]"===ia.call(c)?c:na(c))&&c.type)){d=a.element;switch(c.type){case"x-dl8-to-parent-playing":a.fa.updatePlaying(!0);break;case"x-dl8-to-parent-paused":case"x-dl8-to-parent-ended":a.fa.updatePlaying(!1)}e={};if(!Rb(d,c.type,(e["x-dl8-to-parent-playing"]="playing",e["x-dl8-to-parent-paused"]="pause",e["x-dl8-to-parent-ended"]="ended",e["x-dl8-to-parent-muted"]="muted",e["x-dl8-to-parent-unmuted"]="unmuted",e["x-dl8-to-parent-amp-ad-start"]="ad_start",e["x-dl8-to-parent-amp-ad-end"]="ad_end",e)))switch(c.type){case"x-dl8-ping":(c=c.guid)&&a.o.contentWindow.postMessage(JSON.stringify({type:"x-dl8-pong",guid:c,idx:0}),"*");break;case"x-dl8-to-parent-ready":y(d,"load");a.ha(a.o);break;case"x-dl8-to-parent-player-ready":Vb(a);break;case"x-dl8-to-parent-timeupdate":c=c.payload;a.oa=c.currentTime;a.ya=c.playedRanges;break;case"x-dl8-to-parent-duration":a.za=c.payload.duration;break;case"x-dl8-iframe-enter-fullscreen":Fa(a.o,"position","fixed");break;case"x-dl8-iframe-exit-fullscreen":Fa(a.o,"position","absolute");break;case"x-dl8-to-parent-entered-fullscreen":a.ba=!0;break;case"x-dl8-to-parent-exited-fullscreen":a.ba=!1;break;case"x-dl8-to-parent-amp-custom-tick":c=c.payload,y(a.element,"amp:video:tick",ja({eventType:"video-custom-"+c.type,vars:c}))}}}));this.o=b;Wb(this);return this.loadPromise(b)};g.unlayoutCallback=function(){if(this.element.hasAttribute("dock"))return!1;this.o&&(qa(this.o),this.o=null);this.ka&&this.ka();var a=new v;this.ga=a.promise;this.ha=a.resolve;this.la&&this.la();this.U&&this.U();this.ja&&this.ja();this.ia&&this.ia();var b;null==(b=this.ma)||b.call(this);this.ma=null;this.fa.updatePlaying(!1);return!0};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.createPlaceholderCallback=function(){var a=B(this.element)(Tb);ra(a);a.setAttribute("src",this.W+"/poster/"+this.X);return this.wa=a};g.firstLayoutCompleted=function(){var a=this,b=this.wa,c=null;b&&this.ta?(b.classList.add("i-amphtml-delight-player-faded"),c=hb(b)):c=u();return c.then((function(){return AMP.BaseElement.prototype.firstLayoutCompleted.call(a)}))};g.pauseCallback=function(){this.o&&this.o.contentWindow&&this.pause()};g.resumeCallback=function(){this.o&&this.o.contentWindow&&this.play(!1)};function Z(a,b,c){var d=c=void 0===c?{}:c;a.ga.then((function(e){e&&e.contentWindow&&e.contentWindow.postMessage(JSON.stringify({type:b,payload:d}),"*")}))}function Wb(a){function b(){Z(a,"x-dl8-iframe-window-orientationchange",{orientation:window.orientation})}function c(){var e=window.screen.orientation||window.screen.mozOrientation||window.screen.msOrientation;Z(a,"x-dl8-iframe-screen-change",{orientation:{angle:e.angle,type:e.type}})}if(window.screen){var d=window.screen.orientation||window.screen.mozOrientation||window.screen.msOrientation;d&&d.addEventListener?a.la=Q(d,"change",c):a.U=Q(a.win,"orientationchange",b)}else a.U=Q(a.win,"orientationchange",b);a.ja=Q(a.win,"deviceorientation",(function(e){Z(a,"x-dl8-iframe-window-deviceorientation",{alpha:e.alpha,beta:e.beta,gamma:e.gamma,absolute:e.absolute,timeStamp:e.timeStamp})}));a.ia=Q(a.win,"devicemotion",(function(e){var f={interval:e.interval,timeStamp:e.timeStamp};e.acceleration&&Object.assign(f,{acceleration:{x:e.acceleration.x,y:e.acceleration.y,z:e.acceleration.z}});e.accelerationIncludingGravity&&Object.assign(f,{accelerationIncludingGravity:{x:e.accelerationIncludingGravity.x,y:e.accelerationIncludingGravity.y,z:e.accelerationIncludingGravity.z}});e.rotationRate&&Object.assign(f,{rotationRate:{alpha:e.rotationRate.alpha,beta:e.rotationRate.beta,gamma:e.rotationRate.gamma}});Z(a,"x-dl8-iframe-window-devicemotion",f)}))}function Vb(a){var b=AMP.BaseElement.prototype.getConsentPolicy.call(a)||"default",c=Ob(a.element,b),d=Pb(a.element,b),e=Mb(a.element,b),f=Nb(a.element,b);Promise.all([d,c,e,f]).then((function(h){Z(a,"x-dl8-to-iframe-consent-data",{consentMetadata:h[0],consentString:h[1],consentPolicyState:h[2],consentPolicySharedData:h[3]})}))}g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.play=function(){Z(this,"x-dl8-to-iframe-play")};g.pause=function(){Z(this,"x-dl8-to-iframe-pause")};g.mute=function(){Z(this,"x-dl8-to-iframe-mute")};g.unmute=function(){Z(this,"x-dl8-to-iframe-unmute")};g.showControls=function(){Z(this,"x-dl8-to-iframe-enable-interface")};g.hideControls=function(){Z(this,"x-dl8-to-iframe-disable-interface")};g.fullscreenEnter=function(){Z(this,"x-dl8-to-iframe-enter-fullscreen")};g.fullscreenExit=function(){Z(this,"x-dl8-to-iframe-exit-fullscreen")};g.isFullscreen=function(){return this.ba};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!1};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return this.oa};g.getDuration=function(){return this.za};g.getPlayedRanges=function(){return this.ya};g.seekTo=function(a){Z(this,"x-dl8-to-iframe-seek",{time:a})};AMP.registerElement("amp-delight-player",W,"amp-delight-player [placeholder]{transition:opacity 0.5s ease-out}amp-delight-player [placeholder].i-amphtml-delight-player-faded{opacity:0;pointer-events:none}\n/*# sourceURL=/extensions/amp-delight-player/0.1/amp-delight-player.css*/")}});//# sourceMappingURL=amp-delight-player-0.1.js.map