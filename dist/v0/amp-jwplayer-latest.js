(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-jwplayer",ev:"0.1",l:true,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var da={a:!0},ea={};try{ea.__proto__=da;q=ea.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r,fa=p;function ha(){return r?r:r=Promise.resolve(void 0)}function u(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function ia(a){return new Promise((function(b){b(a())}))}var ja=Object.prototype.toString;function v(a){return"[object Object]"===ja.call(a)}function ka(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function w(a){return a||{}}var la=Array.isArray;function ma(a){return la(a)?a:[a]}function na(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function x(a){try{return JSON.parse(a)}catch(b){return null}}function oa(a){return"number"===typeof a&&isFinite(a)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var pa={bubbles:!0,cancelable:!0};function qa(a){var b;null==(b=a.parentElement)||b.removeChild(a)}function sa(a,b){function c(l){return l}var d=a.dataset;a={};var f,e=b||/^param(.+)/;for(f in d){var h=f.match(e);if(h){var k=h[1][0].toLowerCase()+h[1].substr(1);a[c(k)]=d[f]}}return a}function y(a,b,c){c=c||{};var d=a.ownerDocument.createEvent("Event");d.data=c;d.initEvent(b,pa.bubbles,pa.cancelable);a.dispatchEvent(d)}function ta(a){a.classList.add("i-amphtml-fill-content")}function ua(a,b,c){var d=ma(a);a=m(d);for(var e=a.next();!e.done;e=a.next()){e=e.value;var f=b.getAttribute(e);null!==f&&c.setAttribute(e,f)}}function va(a){for(var b=null,c="",d=m(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function wa(a){var b,c;null==(c=(b=self).__AMP_REPORT_ERROR)||c.call(b,a)}function xa(a){var b=va.apply(null,arguments);setTimeout((function(){wa(b);throw b}))}function ya(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){xa(e)}}function za(a){var b=va.apply(null,arguments);b.expected=!0;return b}function Aa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];wa(za.apply(null,c))}var z,Ba="Webkit webkit Moz moz ms O o".split(" "),Ca={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function Da(a,b,c){var d=a.style;if(!b.startsWith("--")){z||(z=ka());var e=z[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<Ba.length;h++){var k=Ba[h]+f;if(void 0!==d[k]){f=k;break b}}f=""}void 0!==d[f]&&(e=f)}z[b]=e}b=e}b&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}var Ea=/vertical/,Fa=new WeakMap,A=new WeakMap,Ga=new WeakMap;function Ha(a,b){var c=a.ownerDocument.defaultView;if(c){var d=A.get(a);d||(d=[],A.set(a,d),Ia(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=Ga.get(a);e&&setTimeout((function(){return Ja(1,b,e)}))}}}function Ka(a,b){var c=A.get(a);c&&(na(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(A.delete(a),Ga.delete(a),(c=a.ownerDocument.defaultView)&&Ia(c).unobserve(a)))}function Ia(a){var b=Fa.get(a);b||(b=new a.ResizeObserver(La),Fa.set(a,b));return b}function La(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=A.get(e);if(f)for(Ga.set(e,d),e=0;e<f.length;e++){var h=f[e];Ja(h.type,h.callback,d)}}}}function Ja(a,b,c){if(0==a)a=c.contentRect,ya(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=Ea.test(((a.ownerDocument||a).defaultView.getComputedStyle(a)||Ca)["writing-mode"]),h=a.offsetHeight,k=a.offsetWidth;if(f){var l=k;var n=h}else n=k,l=h;e={inlineSize:n,blockSize:l}}ya(b,e)}}function Ma(a){this.Z=a;this.aa=this.C=!1;this.R=this.R.bind(this)}Ma.prototype.updatePlaying=function(a){a!==this.C&&((this.C=a)?(this.aa=!1,Ha(this.Z,this.R)):Ka(this.Z,this.R))};Ma.prototype.R=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.aa&&(this.aa=c,a=this.Z,c||a.pause())};function B(a){var b=!1,c=null,d=a;return function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];b||(c=d.apply(self,f),b=!0,d=null);return c}}var C=self.AMP_CONFIG||{},Na=("string"==typeof C.cdnProxyRegex?new RegExp(C.cdnProxyRegex):C.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Oa(a){if(self.document&&self.document.head&&(!self.location||!Na.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}C.cdnUrl||Oa("runtime-host");C.geoApiUrl||Oa("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function Pa(){throw Error("failed to call initLogConstructor")}function E(){D.user||(D.user=Pa());return D.user}function F(a,b,c){return E().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function G(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function Qa(a,b){var c=I(a);c=J(c);return H(c,b)}function K(a,b){a=I(a);a=J(a);return Ra(a,b)?H(a,b):null}function I(a){return a.nodeType?G((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function J(a){a=I(a);return a.isSingleDoc()?a.win:a}function H(a,b){Ra(a,b);a=L(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Sa(a){var b=L(a).consentPolicyManager;if(b){if(b.promise)return b.promise;H(a,"consentPolicyManager");return b.promise=Promise.resolve(b.obj)}return null}function L(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Ra(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Ta(){var a=new u,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function Ua(a){var b=Sa(J(a));if(b)return b;var c=I(a);return c.whenExtensionsKnown().then((function(){var d=c.getExtensionVersion("amp-consent");return d?G(c.win,"extensions").waitForExtension("amp-consent",d):null})).then((function(d){if(d){var e=J(a);var f=Sa(e);f?e=f:(e=L(e),e.consentPolicyManager=Ta(),e=e.consentPolicyManager.promise)}else e=null;return e}))}function Va(a,b,c){var d=c=void 0===c?{}:c,e=d.needsRootBounds;return new b.IntersectionObserver(a,{threshold:d.threshold,root:b.parent&&b.parent!=b&&e?b.document:void 0})}new WeakMap;new WeakMap;var M,Wa;function Xa(a){M||(M=new WeakMap,Wa=new WeakMap);var b=Wa.get(a);b||(b=Va((function(c){for(var d=new Set,e=c.length-1;0<=e;e--){var f=c[e].target;d.has(f)||(d.add(f),b.unobserve(f),M.get(f).resolve(c[e]),M.delete(f))}}),a,{needsRootBounds:!0}),Wa.set(a,b));return b}function Ya(a){if(M&&M.has(a))return M.get(a).promise;Xa((a.ownerDocument||a).defaultView).observe(a);var b=new u;M.set(a,b);return b.promise}function Za(a){if(null==a.__AMP_AUTOPLAY){var b=a.document.createElement("video");b.setAttribute("muted","");b.setAttribute("playsinline","");b.setAttribute("webkit-playsinline","");b.setAttribute("height","0");b.setAttribute("width","0");b.muted=!0;b.playsInline=!0;b.playsinline=!0;b.webkitPlaysinline=!0;var d,c={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"};for(d in c)Da(b,d,c[d]);$a(b);b=Promise.resolve(!b.paused);a.__AMP_AUTOPLAY=b}return a.__AMP_AUTOPLAY}function ab(a,b){var c=ia((function(){return a.play(!!b)}));c.catch((function(d){Aa("TRYPLAY",d)}));return c}function $a(a){ia((function(){return a.play()})).catch((function(){}))}var N;function O(a,b,c){function d(k){try{return f(k)}catch(t){var l,n;null==(n=(l=self).__AMP_REPORT_ERROR)||n.call(l,t);throw t}}var e=a,f=c,h=bb();e.addEventListener(b,d,h?void 0:!1);return function(){var k;null==(k=e)||k.removeEventListener(b,d,h?void 0:!1);d=e=f=null}}function bb(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N}function cb(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return O(a,b,c)}function db(a,b){var c=b,d=O(a,"loadedmetadata",(function(e){try{c(e)}finally{c=null,d()}}));return d}function eb(){this.B=null}g=eb.prototype;g.add=function(a){var b=this;this.B||(this.B=[]);this.B.push(a);return function(){b.remove(a)}};g.remove=function(a){if(this.B){var b=this.B;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};g.removeAll=function(){this.B&&(this.B.length=0)};g.fire=function(a){if(this.B)for(var b=m(this.B),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.B)?void 0:a.length)?b:0};function Q(){this.O=!1;this.qa=new eb}Q.prototype.onSessionEnd=function(a){this.qa.add(a)};Q.prototype.beginSession=function(){this.O=!0};Q.prototype.endSession=function(){this.O&&this.qa.fire();this.O=!1};Q.prototype.isSessionActive=function(){return this.O};var R;function fb(a){a=a.ownerDocument||a;R&&R.ownerDocument===a||(R=a.createElement("div"));return gb}function gb(a){var b=R;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}var hb=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],ib=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function jb(a,b){var c=fb(a)(hb);b&&b.title&&c.setAttribute("aria-label",b.title);return c}function kb(a){var b=fb(a)(ib),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}qa(c);return b}function lb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}var mb={title:"",artist:"",album:"",artwork:[{src:""}]};function nb(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=x(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function ob(a,b){var c=K(a,"url");if(b&&b.artwork){var d=b.artwork;la(d);d.forEach((function(e){e&&(e=v(e)?e.src:e,F(c.isProtocolValid(e)))}))}}function pb(a){a.signals().signal("user-interacted")}function qb(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=B((function(){var c=b.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;var e=d?d(".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"):".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=ka());var f=lb(c,d,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(c.ownerDocument||c).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=lb(c,d,"amp-runtime"),(e=void 0===e?null:e)?c.insertBefore(f,e.nextSibling):c.insertBefore(f,c.firstChild),d["amp-extension=amp-video-autoplay"]=f)}));this.ca=this.L=this.o=null;this.T=H(a.win,"timer");this.Ca=K(a.getHeadNode(),"action");this.ja=function(){for(var c=0;c<b.o.length;c++){var d=b.o[c];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();oa(e)&&oa(f)&&0<f&&(e=cb(b.ampdoc.win,"video-manager.timeUpdate",w({time:e,percent:e/f})),b.Ca.trigger(d.video.element,"timeUpdate",e,1))}}b.T.delay(b.ja,1e3)};this.$=B((function(){return new T(b.ampdoc,b)}));this.T.delay(this.ja,1e3)}g=qb.prototype;g.dispose=function(){this.$().dispose();this.L.disconnect();this.L=null;if(this.o)for(var a=0;a<this.o.length;a++)this.o[a].dispose()};g.register=function(a){var b=this;rb(a);if(a.supportsPlatform()&&!U(this,a)){this.L||(this.L=Va((function(e){return e.forEach((function(f){var h=f.isIntersecting;U(b,f.target).updateVisibility(h)}))}),this.ampdoc.win,{threshold:.5}));this.L.observe(a.element);P(a.element,"reloaded",(function(){return c.videoLoaded()}));this.o=this.o||[];var c=new sb(this,a);this.o.push(c);var d=c.video.element;y(d,"registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};function rb(a){function b(){return a.fullscreenEnter()}function c(d,e){a.registerAction(d,(function(){pb(a);e()}),1)}c("play",(function(){return ab(a,!1)}));c("pause",(function(){return a.pause()}));c("mute",(function(){return a.mute()}));c("unmute",(function(){return a.unmute()}));c("fullscreenenter",b);c("fullscreen",b)}function U(a,b){if(tb(a.ca,b))return a.ca;for(var c=0;a.o&&c<a.o.length;c++){var d=a.o[c];if(tb(d,b))return a.ca=d}return null}g.registerForAutoFullscreen=function(a){this.$().register(a)};g.Ka=function(){return this.$()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=E().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ha()).then((function(e){return e?e[b]:""}))};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.o.forEach((function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()}))};function tb(a,b){return!!a&&(a.video===b||a.video.element===b)}function sb(a,b){var c=this;this.H=a;this.h=a.ampdoc;this.video=b;this.da=!0;this.G=this.K=this.C=this.va=!1;this.V=new Q;this.V.onSessionEnd((function(){return S(c,"video-session")}));this.I=new Q;this.I.onSessionEnd((function(){return S(c,"video-session-visible")}));this.sa=B((function(){return new V(c.h.win,c)}));this.fa=this.wa=!1;this.ba=null;this.ta=this.P=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.H.installAutoplayStyles();this.D=mb;this.Ga=function(){ab(c.video,!1)};this.Fa=function(){c.video.pause()};P(b.element,"load",(function(){return c.videoLoaded()}));P(b.element,"pause",(function(){S(c,"video-pause");c.C=!1;c.fa?c.fa=!1:c.V.endSession()}));P(b.element,"play",(function(){c.ta=!0;S(c,"video-play")}));P(b.element,"playing",(function(){c.C=!0;"playing_manual"==c.getPlayingState()&&(c.ra(),c.H.pauseOtherVideos(c));var d=c.video,e=d.element;if(!d.preimplementsMediaSessionAPI()&&!e.classList.contains("i-amphtml-disable-mediasession")){ob(e,c.D);d=c.h.win;e=c.D;var f=c.Ga,h=c.Fa,k=d.navigator;"mediaSession"in k&&d.MediaMetadata&&(k.mediaSession.metadata=new d.MediaMetadata(mb),k.mediaSession.metadata=new d.MediaMetadata(e),k.mediaSession.setActionHandler("play",f),k.mediaSession.setActionHandler("pause",h))}c.V.beginSession();c.G&&c.I.beginSession();c.ta||S(c,"video-play")}));P(b.element,"muted",(function(){return c.P=!0}));P(b.element,"unmuted",(function(){c.P=!1;c.H.pauseOtherVideos(c)}));P(b.element,"amp:video:tick",(function(d){d=d.data;var e=d.eventType;e&&ub(c,e,d.vars)}));P(b.element,"ended",(function(){c.K=!1;S(c,"video-ended")}));P(b.element,"ad_start",(function(){c.K=!0;S(c,"video-ad-start")}));P(b.element,"ad_end",(function(){c.K=!1;S(c,"video-ad-end")}));b.signals().whenSignal("registered").then((function(){var d=c.video.element;(c.video.preimplementsAutoFullscreen()||!d.hasAttribute("rotate-to-fullscreen")?0:F(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",d))&&c.H.registerForAutoFullscreen(c);c.hasAutoplay&&vb(c)}));this.ra=B((function(){var d=cb(c.h.win,"firstPlay",w({})),e=c.video.element;K(e,"action").trigger(e,"firstPlay",d,1)}));wb(this)}g=sb.prototype;g.dispose=function(){this.sa().stop()};function ub(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach((function(f){e["custom_"+f]=c[f]}));S(a,"video-hosted-custom",e)}function wb(a){a.video.signals().whenSignal("playback-delegated").then((function(){a.da=!1;a.C&&a.video.pause()}))}g.isMuted=function(){return this.P};g.isPlaybackManaged=function(){return this.da};g.videoLoaded=function(){this.va=!0;this.ba=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.D=ka(this.video.getMetadata()));var a=this.h.win.document;if(!this.D.artwork||0==this.D.artwork.length){var b;(b=nb(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.D.artwork=[{src:b}])}!this.D.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.ba.getAttribute("title")||this.ba.getAttribute("aria-label")||a.title)&&(this.D.title=a)}this.sa().start();this.G&&xb(this)};function xb(a){a.h.isVisible()&&Za(a.h.win).then((function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.da&&(a.G?(a.I.beginSession(),ab(a.video,!0),a.wa=!0):(a.C&&a.I.endSession(),a.video.pause(),a.fa=!0)):a.G?a.I.beginSession():a.C&&a.I.endSession()}))}function vb(a){a.video.isInteractive()&&a.video.hideControls();Za(a.h.win).then((function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),yb(a))}))}function yb(a){function b(n){d.mutateElementSkipRemeasure((function(){h.forEach((function(t){var ra=n;void 0===ra&&(ra=t.hasAttribute("hidden"));ra?t.removeAttribute("hidden"):t.setAttribute("hidden","")}))}))}function c(n){d.mutateElementSkipRemeasure((function(){return f.classList.toggle("amp-video-eq-play",n)}))}var d=a.video,e=a.video.element;if(!e.hasAttribute("noaudio")&&!e.signals().get("user-interacted")){var f=kb(e),h=[f],k=[P(e,"pause",(function(){return c(!1)})),P(e,"playing",(function(){return c(!0)})),P(e,"ad_start",(function(){b(!1);d.showControls()})),P(e,"ad_end",(function(){b(!0);d.hideControls()})),P(e,"unmuted",(function(){return pb(d)}))];if(d.isInteractive()){d.hideControls();var l=jb(e,a.D);h.push(l);k.push(P(l,"click",(function(){return pb(d)})))}d.mutateElementSkipRemeasure((function(){h.forEach((function(n){e.appendChild(n)}))}));a.K&&b(!1);d.signals().whenSignal("user-interacted").then((function(){a.ra();d.isInteractive()&&d.showControls();d.unmute();k.forEach((function(n){n()}));d.mutateElementSkipRemeasure((function(){h.forEach((function(n){qa(n)}))}))}))}}g.updateVisibility=function(a){var b=this.G;this.G=a;a!=b&&this.va&&xb(this)};g.getPlayingState=function(){return this.C?this.C&&this.wa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.K};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};g.getAnalyticsDetails=function(){var a=this,b=this.video;return Promise.all([Za(this.h.win),Ya(b.element)]).then((function(c){var d=c[0],e=c[1].boundingClientRect,f=e.height;e=e.width;var h=a.hasAutoplay&&d,k=b.getPlayedRanges(),l=k.reduce((function(n,t){return n+t[1]-t[0]}),0);return{autoplay:h,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:f,id:b.element.id,muted:a.P,playedTotal:l,playedRangesJson:JSON.stringify(k),state:a.getPlayingState(),width:e}}))};function T(a,b){var c=this;this.H=b;this.h=a;this.F=this.J=null;this.o=[];this.A=[];this.M=function(){return zb(c)};this.Ea=function(d){return"playing_manual"==c.H.getPlayingState(d)};this.Da=function(d,e){var f=d.boundingClientRect;var h=e.boundingClientRect;d=d.intersectionRatio-e.intersectionRatio;.1<Math.abs(d)?f=d:(e=Qa(c.h,"viewport"),d=Ab(e,f),e=Ab(e,h),f=d<e||d>e?d-e:f.top-h.top);return f};Bb(this);Cb(this)}T.prototype.dispose=function(){this.A.forEach((function(a){return a()}));this.A.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=G(this.h.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.o.push(a),O(b,"pause",this.M),O(b,"playing",this.M),O(b,"ended",this.M),a.signals().whenSignal("user-interacted").then(this.M),zb(this))};function Cb(a){function b(){a.J=null}var c=a.h.getRootNode();a.A.push(O(c,"webkitfullscreenchange",b),O(c,"mozfullscreenchange",b),O(c,"fullscreenchange",b),O(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.h.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};function Bb(a){var b=a.h.win,c=b.screen;c&&"orientation"in c&&a.A.push(P(c.orientation,"change",(function(){return Db(a)})));a.A.push(P(b,"orientationchange",(function(){return Db(a)})))}function Db(a){a.isInLandscape()?null!=a.F&&Eb(a,a.F):a.J&&Fb(a,a.J)}function Eb(a,b){var c=G(a.h.win,"platform");a.J=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():Gb(a,b).then((function(){return b.fullscreenEnter()}))}function Fb(a,b){a.J=null;Gb(a,b,"center").then((function(){return b.fullscreenExit()}))}function Gb(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=Qa(a.h,"viewport");return H(a.h.win,"timer").promise(330).then((function(){return Ya(e)})).then((function(h){var k=h.boundingClientRect;h=k.bottom;k=k.top;var l=f.getSize().height;return 0<=k&&h<=l?ha():f.animateScrollIntoView(e,d?d:h>l?"bottom":"top")}))}function zb(a){if(a.isInLandscape())return Promise.resolve(a.F);a.F=null;var b=a.o.filter(a.Ea).map((function(c){return Ya(c.element)}));return Promise.all(b).then((function(c){var d=c.sort(a.Da)[0];return d&&.5<d.intersectionRatio?d.target.getImpl().then((function(e){return a.F=e})):a.F}))}function Ab(a,b){b=b.top+b.height/2;var c=a.getSize().height/2;return Math.abs(b-c)}function V(a,b){this.T=H(a,"timer");this.N=b;this.A=null;this.U=this.ua=0}V.prototype.start=function(){var a=this,b=this.N.video.element;this.stop();this.A=this.A||[];Hb(this)?Ib(this,this.U):this.A.push(db(b,(function(){Hb(a)&&Ib(a,a.U)})));this.A.push(P(b,"ended",(function(){Hb(a)&&Jb(a,100)})))};V.prototype.stop=function(){if(this.A){for(;0<this.A.length;)this.A.pop()();this.U++}};function Hb(a){var b=a.N.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.Ja("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.Ja=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];E().warn.apply(E(),["video-manager"].concat(b))};function Ib(a,b){if(b==a.U){var c=a.N,d=a.T,e=c.video,f=function(){return Ib(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4e3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);oa(l);Jb(a,l);d.delay(f,h)}else d.delay(f,500)}}function Jb(a,b){0>=b||a.ua==b||(a.ua=b,S(a.N,"video-percentage-played",{normalizedPercentage:b.toString()}))}function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then((function(e){c&&Object.assign(e,c);y(d.element,b,e)}))}function Kb(a,b){var c=b=void 0===b?"default":b;return Ua(a).then((function(d){return d?d.whenPolicyResolved(c):null}))}function Lb(a,b){var c=void 0===b?"default":b;return Ua(a).then((function(d){return d?d.getConsentStringInfo(c):null}))}function Mb(a,b){var c=void 0===b?"default":b;return Ua(a).then((function(d){return d?d.getConsentMetadataInfo(c):null}))}new Set(["c","v","a","ad"]);function Nb(a,b){var d,c=[];for(d in b){var e=b[d];if(null!=e){e=ma(e);for(var f=0;f<e.length;f++){var h=c,k=h.push;var l=e[f];l=encodeURIComponent(d)+"="+encodeURIComponent(l);k.call(h,l)}}}b=c.join("&");b&&(a=a.split("#",2),c=a[0].split("?",2),b=c[0]+(c[1]?"?"+c[1]+"&"+b:"?"+b),a=b+=a[1]?"#"+a[1]:"");return a}function Ob(a){var c,b=w({scrolling:"no"});for(c in b)a.setAttribute(c,b[c]);Da(a,"overflow","hidden");return a}var Pb=["<iframe frameborder=0 allowfullscreen></iframe>"];function Qb(a,b){var c=Rb;if(null==c[b])return!1;var d=c[b];(la(d)?d:[d]).forEach((function(e){y(a,e)}));return!0}function Sb(a,b,c){var d=a.element,e=fb(d)(Pb);c&&e.setAttribute("name",c);ua(["referrerpolicy"],a.element,e);e.src=K(d,"url").assertHttpsUrl(b,d);ta(e);d.appendChild(e);return e}function Tb(a){var b=a.getAttribute("allow")||"";a.setAttribute("allow",b+"autoplay;")}var Rb={ready:"load",play:"playing",pause:"pause",complete:"ended",visible:"amp:video:visibility",adImpression:"ad_start",adComplete:"ad_end"};function W(a){var b=AMP.BaseElement.call(this,a)||this;b.X="";b.Aa="";b.W="";b.oa="";b.na="";b.j=null;b.ya=null;b.za=null;b.Ia=B((function(){return Ub(b)}));b.Ha=B((function(c){var d=b.element;b.S=Object.assign({},c.playlistItem);b.za(b.j);c.muted&&y(d,"muted");y(d,"load")}));b.ea=b.ea.bind(b);b.S=null;b.pa=0;b.Y=0;b.xa=[];b.ha=null;b.ia=null;b.ga=new Ma(b.element);b.la=null;b.ma=null;b.ka=null;return b}var X=AMP.BaseElement;W.prototype=ba(X.prototype);W.prototype.constructor=W;if(fa)fa(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Vb=Object.getOwnPropertyDescriptor(X,Y);Vb&&Object.defineProperty(W,Y,Vb)}else W[Y]=X[Y];W.La=X.prototype;g=W.prototype;g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.getCurrentTime=function(){return this.Y};g.getDuration=function(){return this.pa||this.S.duration||0};g.getPlayedRanges=function(){return this.xa||[]};g.play=function(a){var b;a&&(b="auto");Z(this,"play",{reason:b})};g.pauseCallback=function(){this.pause()};g.pause=function(){Z(this,"pause")};g.mute=function(){Z(this,"setMute",!0)};g.unmute=function(){Z(this,"setMute",!1)};g.showControls=function(){Z(this,"setControls",!0)};g.hideControls=function(){Z(this,"setControls",!1)};g.getMetadata=function(){var a=this.S,b=this.win;if(b.MediaMetadata&&a.meta)try{return new b.MediaMetadata(a.meta)}catch(c){}};g.preimplementsAutoFullscreen=function(){return!1};g.preimplementsMediaSessionAPI=function(){return!1};g.fullscreenEnter=function(){if(this.j)if(Wb(this))Z(this,"setFullscreen",!0);else{var a=this.j,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};g.fullscreenExit=function(){if(this.j)if(Wb(this))Z(this,"setFullscreen",!1);else{var a=this.j,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};g.isFullscreen=function(){if(this.j){var a=this.j;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.seekTo=function(a){Z(this,"seek",a)};g.preconnectCallback=function(a){function b(e){return G(c.win,"preconnect").url(d,e,a)}var c=this,d=this.getAmpDoc();b("https://content.jwplatform.com");b("https://ssl.p.jwpcdn.com");b(Xb(this))};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.buildCallback=function(){var a=this.element,b=new u;this.ya=b.promise;this.za=b.resolve;this.X=F(a.getAttribute("data-playlist-id")||a.getAttribute("data-media-id"),"Either the data-media-id or the data-playlist-id attributes must be specified for <amp-jwplayer> %s",a);this.Aa=F(a.getAttribute("data-player-id"),"The data-player-id attribute is required for <amp-jwplayer> %s",a);this.W=a.getAttribute("data-content-search")||"";this.na=a.getAttribute("data-content-backfill")||"";this.oa=a.getAttribute("data-content-recency")||"";this.Ba=a.getAttribute("data-player-querystring")||"";a=I(this.element);b=J(a);var c=L(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});d.ctor||(d.ctor=qb,d.context=a,d.sharedInstance=!1,d.resolve&&H(b,"video-manager"));Qa(this.element,"video-manager").register(this)};g.layoutCallback=function(){var a=this;return Yb(this).then((function(){var b,c=w({search:Zb(a)||void 0,recency:a.oa||void 0,backfill:a.na||void 0,isAMP:!0,consentState:a.la||void 0,consentValue:a.ma||void 0,consentGdpr:(null==(b=a.ka)?void 0:b.gdprApplies)||void 0});b=Xb(a);b=Nb(b,c);b=Nb(b,sa(a.element,/^playerParam(.+)/));a.Ba&&(b+="&"+a.Ba);b=Ob(Sb(a,b,a.element.id));Tb(b);Ob(b);a.ha=O(a.win,"message",a.ea);a.ia=P(b,"fullscreenchange",(function(){var d=a.isFullscreen();Z(a,"setFullscreen",d)}));a.j=b;return a.loadPromise(a.j)}))};g.unlayoutCallback=function(){this.ha&&this.ha();this.ia&&this.ia();this.j&&(qa(this.j),this.j=null);this.ga.updatePlaying(!1);return!0};g.createPlaceholderCallback=function(){if(this.element.hasAttribute("data-media-id")){var a=this.win.document.createElement("img");ua(["aria-label"],this.element,a);ta(a);a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");a.hasAttribute("aria-label")?a.setAttribute("alt","Loading video - "+a.getAttribute("aria-label")):a.setAttribute("alt","Loading video");a.setAttribute("loading","lazy");a.setAttribute("src","https://content.jwplatform.com/thumbs/"+encodeURIComponent(this.X)+"-720.jpg");return a}};function Ub(a){var b=a.element,c=sa(b,/^config(.+)/),d=b.getAttribute("data-config-json"),e=x(d)||{};Object.keys(c).forEach((function(k){-1===k.indexOf("json")&&(e[k]=c[k])}));var f=b.getAttribute("data-ad-cust-params");f&&(e.adCustParams=x(f));var h=sa(b,/^adMacro(.+)/);0!==Object.keys(h).length&&(e.adMacros=h);$b(a,"setupConfig",e)}g.ea=function(a){if(this.j&&a&&a.source==this.j.contentWindow){var b=a.data;if(b&&(v(b)||b.startsWith("{"))){var c=v(b)?b:x(b);var d=c.event,e=c.detail;(D.dev||(D.dev=Pa())).info("JWPLAYER","EVENT:",d||"anon event",e||c);if("setup"===d)this.Ia();else if("ready"===d)e&&this.Ha(e);else{switch(d){case"play":case"adPlay":this.ga.updatePlaying(!0);break;case"pause":case"complete":this.ga.updatePlaying(!1)}if(!Qb(this.element,d)&&e&&d)switch(d){case"fullscreen":var f=e.fullscreen;f!==this.isFullscreen()&&(f?this.fullscreenEnter():this.fullscreenExit());break;case"meta":c=e.duration;"media"===e.metadataType&&(this.pa=c);break;case"mute":y(this.element,e.mute?"muted":"unmuted");break;case"playedRanges":this.xa=e.ranges;break;case"playlistItem":this.S=Object.assign({},e);Z(this,"getPlayedRanges");break;case"time":this.Y=e.currentTime;Z(this,"getPlayedRanges");break;case"adTime":this.Y=e.position}}}}};function Z(a,b,c){a.ya.then((function(){return $b(a,b,c)}))}function $b(a,b,c){a.j&&a.j.contentWindow&&((D.dev||(D.dev=Pa())).info("JWPLAYER","COMMAND:",b,c),a.j.contentWindow.postMessage(JSON.stringify(w({method:b,optParams:c})),"*"))}function Wb(a){a=G(a.win,"platform");return a.isSafari()||a.isIos()}function Xb(a){var b=encodeURIComponent(a.Aa),c=encodeURIComponent(a.X);"outstream"===c&&(c="oi7pAMI1");return"https://content.jwplatform.com/players/"+c+"-"+b+".html"}function Zb(a){if("__CONTEXTUAL__"===a.W){a=a.getAmpDoc().getHeadNode();var b=a.querySelector('meta[property="og:title"]'),c=b?b.getAttribute("content"):null;a=(a.querySelector("title")||{}).textContent;return c||a||""}return a.W}function Yb(a){var b=AMP.BaseElement.prototype.getConsentPolicy.call(a),c=b?Kb(a.element,b):Promise.resolve(null),d=b?Lb(a.element,b):Promise.resolve(null),e=b?Mb(a.element,b):Promise.resolve(null);return Promise.all([c,d,e]).then((function(f){a.la=f[0];a.ma=f[1];a.ka=f[2]}))}AMP.registerElement("amp-jwplayer",W)}});//# sourceMappingURL=amp-jwplayer-0.1.js.map