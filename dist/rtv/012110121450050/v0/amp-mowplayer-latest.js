(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-mowplayer",ev:"0.1",l:true,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var da={a:!0},ea={};try{ea.__proto__=da;r=ea.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t,fa=q;function ha(){return t?t:t=Promise.resolve(void 0)}function u(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function ia(a){return new Promise((function(b){b(a())}))}var ja=Object.prototype.toString;function v(a){return"[object Object]"===ja.call(a)}function w(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function x(a){return a||{}}var y=Array.isArray;function ka(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function ma(a){try{return JSON.parse(a)}catch(b){return null}}function z(a){return"number"===typeof a&&isFinite(a)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var na={bubbles:!0,cancelable:!0};function A(a){var b;null==(b=a.parentElement)||b.removeChild(a)}function B(a,b,c){c=c||{};var d=a.ownerDocument.createEvent("Event");d.data=c;d.initEvent(b,na.bubbles,na.cancelable);a.dispatchEvent(d)}function oa(a){for(var b=null,c="",d=n(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function pa(a){var b,c;null==(c=(b=self).__AMP_REPORT_ERROR)||c.call(b,a)}function qa(a){var b=oa.apply(null,arguments);setTimeout((function(){pa(b);throw b}))}function ra(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){qa(e)}}function sa(a){var b=oa.apply(null,arguments);b.expected=!0;return b}function ta(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];pa(sa.apply(null,c))}var C,ua="Webkit webkit Moz moz ms O o".split(" "),va={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};var wa=/vertical/,xa=new WeakMap,D=new WeakMap,E=new WeakMap;function ya(a,b){var c=a.ownerDocument.defaultView;if(c){var d=D.get(a);d||(d=[],D.set(a,d),za(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=E.get(a);e&&setTimeout((function(){return Aa(1,b,e)}))}}}function Ba(a,b){var c=D.get(a);c&&(ka(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(D.delete(a),E.delete(a),(c=a.ownerDocument.defaultView)&&za(c).unobserve(a)))}function za(a){var b=xa.get(a);b||(b=new a.ResizeObserver(Ca),xa.set(a,b));return b}function Ca(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=D.get(e);if(f)for(E.set(e,d),e=0;e<f.length;e++){var h=f[e];Aa(h.type,h.callback,d)}}}}function Aa(a,b,c){if(0==a)a=c.contentRect,ra(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=wa.test(((a.ownerDocument||a).defaultView.getComputedStyle(a)||va)["writing-mode"]),h=a.offsetHeight,k=a.offsetWidth;if(f){var l=k;var m=h}else m=k,l=h;e={inlineSize:m,blockSize:l}}ra(b,e)}}function Da(a){this.X=a;this.Z=this.C=!1;this.T=this.T.bind(this)}Da.prototype.updatePlaying=function(a){a!==this.C&&((this.C=a)?(this.Z=!1,ya(this.X,this.T)):Ba(this.X,this.T))};Da.prototype.T=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.Z&&(this.Z=c,a=this.X,c||a.pause())};var F=self.AMP_CONFIG||{},Ea=("string"==typeof F.cdnProxyRegex?new RegExp(F.cdnProxyRegex):F.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Fa(a){if(self.document&&self.document.head&&(!self.location||!Ea.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}F.cdnUrl||Fa("runtime-host");F.geoApiUrl||Fa("amp-geo-api");function G(a){var b=!1,c=null,d=a;return function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];b||(c=d.apply(self,f),b=!0,d=null);return c}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Ga=self.__AMP_LOG;function H(){if(!Ga.user)throw Error("failed to call initLogConstructor");return Ga.user}function Ha(a,b,c){return H().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return J(a,b)}function Ia(a,b){var c=K(a);c=Ja(c);return J(c,b)}function L(a,b){a=K(a);a=Ja(a);return Ka(a,b)?J(a,b):null}function K(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Ja(a){a=K(a);return a.isSingleDoc()?a.win:a}function J(a,b){Ka(a,b);a=La(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function La(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Ka(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Ma(a,b,c){var d=c=void 0===c?{}:c,e=d.needsRootBounds;return new b.IntersectionObserver(a,{threshold:d.threshold,root:b.parent&&b.parent!=b&&e?b.document:void 0})}new WeakMap;new WeakMap;var M,Na;function Oa(a){M||(M=new WeakMap,Na=new WeakMap);var b=Na.get(a);b||(b=Ma((function(c){for(var d=new Set,e=c.length-1;0<=e;e--){var f=c[e].target;d.has(f)||(d.add(f),b.unobserve(f),M.get(f).resolve(c[e]),M.delete(f))}}),a,{needsRootBounds:!0}),Na.set(a,b));return b}function Pa(a){if(M&&M.has(a))return M.get(a).promise;Oa((a.ownerDocument||a).defaultView).observe(a);var b=new u;M.set(a,b);return b.promise}function Qa(a){if(null==a.__AMP_AUTOPLAY){var b=a.document.createElement("video");b.setAttribute("muted","");b.setAttribute("playsinline","");b.setAttribute("webkit-playsinline","");b.setAttribute("height","0");b.setAttribute("width","0");b.muted=!0;b.playsInline=!0;b.playsinline=!0;b.webkitPlaysinline=!0;var d,c={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"};for(d in c){var e=c[d];var f=b.style;var h=d;if(h.startsWith("--"))f=h;else{C||(C=w());var k=C[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var m=0;m<ua.length;m++){var p=ua[m]+l;if(void 0!==f[p]){l=p;break b}}l=""}void 0!==f[l]&&(k=l)}C[h]=k}f=k}f&&(f.startsWith("--")?b.style.setProperty(f,e):b.style[f]=e)}Ra(b);b=Promise.resolve(!b.paused);a.__AMP_AUTOPLAY=b}return a.__AMP_AUTOPLAY}function Sa(a,b){var c=ia((function(){return a.play(!!b)}));c.catch((function(d){ta("TRYPLAY",d)}));return c}function Ra(a){ia((function(){return a.play()})).catch((function(){}))}var N;function O(a,b,c){function d(k){try{return f(k)}catch(p){var l,m;null==(m=(l=self).__AMP_REPORT_ERROR)||m.call(l,p);throw p}}var e=a,f=c,h=Ta();e.addEventListener(b,d,h?void 0:!1);return function(){var k;null==(k=e)||k.removeEventListener(b,d,h?void 0:!1);d=e=f=null}}function Ta(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N}function Ua(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return O(a,b,c)}function Va(a,b){var c=b,d=O(a,"loadedmetadata",(function(e){try{c(e)}finally{c=null,d()}}));return d}function Wa(){this.B=null}g=Wa.prototype;g.add=function(a){var b=this;this.B||(this.B=[]);this.B.push(a);return function(){b.remove(a)}};g.remove=function(a){if(this.B){var b=this.B;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};g.removeAll=function(){this.B&&(this.B.length=0)};g.fire=function(a){if(this.B)for(var b=n(this.B),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.B)?void 0:a.length)?b:0};function Q(){this.R=!1;this.ia=new Wa}Q.prototype.onSessionEnd=function(a){this.ia.add(a)};Q.prototype.beginSession=function(){this.R=!0};Q.prototype.endSession=function(){this.R&&this.ia.fire();this.R=!1};Q.prototype.isSessionActive=function(){return this.R};var R;function Xa(a){a=a.ownerDocument||a;R&&R.ownerDocument===a||(R=a.createElement("div"));return Ya}function Ya(a){var b=R;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}var Za=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],$a=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function ab(a,b){var c=Xa(a)(Za);b&&b.title&&c.setAttribute("aria-label",b.title);return c}function bb(a){var b=Xa(a)($a),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}A(c);return b}function cb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}var db={title:"",artist:"",album:"",artwork:[{src:""}]};function eb(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=ma(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function fb(a,b){var c=L(a,"url");if(b&&b.artwork){var d=b.artwork;y(d);d.forEach((function(e){e&&(e=v(e)?e.src:e,Ha(c.isProtocolValid(e)))}))}}function gb(a){a.signals().signal("user-interacted")}function hb(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=G((function(){var c=b.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;var e=d?d(".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"):".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=w());var f=cb(c,d,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(c.ownerDocument||c).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=cb(c,d,"amp-runtime"),(e=void 0===e?null:e)?c.insertBefore(f,e.nextSibling):c.insertBefore(f,c.firstChild),d["amp-extension=amp-video-autoplay"]=f)}));this.aa=this.N=this.o=null;this.U=J(a.win,"timer");this.qa=L(a.getHeadNode(),"action");this.ha=function(){for(var c=0;c<b.o.length;c++){var d=b.o[c];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();z(e)&&z(f)&&0<f&&(e=Ua(b.ampdoc.win,"video-manager.timeUpdate",x({time:e,percent:e/f})),b.qa.trigger(d.video.element,"timeUpdate",e,1))}}b.U.delay(b.ha,1e3)};this.Y=G((function(){return new T(b.ampdoc,b)}));this.U.delay(this.ha,1e3)}g=hb.prototype;g.dispose=function(){this.Y().dispose();this.N.disconnect();this.N=null;if(this.o)for(var a=0;a<this.o.length;a++)this.o[a].dispose()};g.register=function(a){var b=this;ib(a);if(a.supportsPlatform()&&!U(this,a)){this.N||(this.N=Ma((function(e){return e.forEach((function(f){var h=f.isIntersecting;U(b,f.target).updateVisibility(h)}))}),this.ampdoc.win,{threshold:.5}));this.N.observe(a.element);P(a.element,"reloaded",(function(){return c.videoLoaded()}));this.o=this.o||[];var c=new jb(this,a);this.o.push(c);var d=c.video.element;B(d,"registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};function ib(a){function b(){return a.fullscreenEnter()}function c(d,e){a.registerAction(d,(function(){gb(a);e()}),1)}c("play",(function(){return Sa(a,!1)}));c("pause",(function(){return a.pause()}));c("mute",(function(){return a.mute()}));c("unmute",(function(){return a.unmute()}));c("fullscreenenter",b);c("fullscreen",b)}function U(a,b){if(kb(a.aa,b))return a.aa;for(var c=0;a.o&&c<a.o.length;c++){var d=a.o[c];if(kb(d,b))return a.aa=d}return null}g.registerForAutoFullscreen=function(a){this.Y().register(a)};g.xa=function(){return this.Y()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=H().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ha()).then((function(e){return e?e[b]:""}))};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.o.forEach((function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()}))};function kb(a,b){return!!a&&(a.video===b||a.video.element===b)}function jb(a,b){var c=this;this.I=a;this.j=a.ampdoc;this.video=b;this.ba=!0;this.H=this.M=this.C=this.na=!1;this.W=new Q;this.W.onSessionEnd((function(){return S(c,"video-session")}));this.K=new Q;this.K.onSessionEnd((function(){return S(c,"video-session-visible")}));this.ka=G((function(){return new V(c.j.win,c)}));this.ca=this.pa=!1;this.$=null;this.la=this.F=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.I.installAutoplayStyles();this.D=db;this.ua=function(){Sa(c.video,!1)};this.ta=function(){c.video.pause()};P(b.element,"load",(function(){return c.videoLoaded()}));P(b.element,"pause",(function(){S(c,"video-pause");c.C=!1;c.ca?c.ca=!1:c.W.endSession()}));P(b.element,"play",(function(){c.la=!0;S(c,"video-play")}));P(b.element,"playing",(function(){c.C=!0;"playing_manual"==c.getPlayingState()&&(c.ja(),c.I.pauseOtherVideos(c));var d=c.video,e=d.element;if(!d.preimplementsMediaSessionAPI()&&!e.classList.contains("i-amphtml-disable-mediasession")){fb(e,c.D);d=c.j.win;e=c.D;var f=c.ua,h=c.ta,k=d.navigator;"mediaSession"in k&&d.MediaMetadata&&(k.mediaSession.metadata=new d.MediaMetadata(db),k.mediaSession.metadata=new d.MediaMetadata(e),k.mediaSession.setActionHandler("play",f),k.mediaSession.setActionHandler("pause",h))}c.W.beginSession();c.H&&c.K.beginSession();c.la||S(c,"video-play")}));P(b.element,"muted",(function(){return c.F=!0}));P(b.element,"unmuted",(function(){c.F=!1;c.I.pauseOtherVideos(c)}));P(b.element,"amp:video:tick",(function(d){d=d.data;var e=d.eventType;e&&lb(c,e,d.vars)}));P(b.element,"ended",(function(){c.M=!1;S(c,"video-ended")}));P(b.element,"ad_start",(function(){c.M=!0;S(c,"video-ad-start")}));P(b.element,"ad_end",(function(){c.M=!1;S(c,"video-ad-end")}));b.signals().whenSignal("registered").then((function(){var d=c.video.element;(c.video.preimplementsAutoFullscreen()||!d.hasAttribute("rotate-to-fullscreen")?0:Ha(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",d))&&c.I.registerForAutoFullscreen(c);c.hasAutoplay&&mb(c)}));this.ja=G((function(){var d=Ua(c.j.win,"firstPlay",x({})),e=c.video.element;L(e,"action").trigger(e,"firstPlay",d,1)}));nb(this)}g=jb.prototype;g.dispose=function(){this.ka().stop()};function lb(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach((function(f){e["custom_"+f]=c[f]}));S(a,"video-hosted-custom",e)}function nb(a){a.video.signals().whenSignal("playback-delegated").then((function(){a.ba=!1;a.C&&a.video.pause()}))}g.isMuted=function(){return this.F};g.isPlaybackManaged=function(){return this.ba};g.videoLoaded=function(){this.na=!0;this.$=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.D=w(this.video.getMetadata()));var a=this.j.win.document;if(!this.D.artwork||0==this.D.artwork.length){var b;(b=eb(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.D.artwork=[{src:b}])}!this.D.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.$.getAttribute("title")||this.$.getAttribute("aria-label")||a.title)&&(this.D.title=a)}this.ka().start();this.H&&ob(this)};function ob(a){a.j.isVisible()&&Qa(a.j.win).then((function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.ba&&(a.H?(a.K.beginSession(),Sa(a.video,!0),a.pa=!0):(a.C&&a.K.endSession(),a.video.pause(),a.ca=!0)):a.H?a.K.beginSession():a.C&&a.K.endSession()}))}function mb(a){a.video.isInteractive()&&a.video.hideControls();Qa(a.j.win).then((function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),pb(a))}))}function pb(a){function b(m){d.mutateElementSkipRemeasure((function(){h.forEach((function(p){var la=m;void 0===la&&(la=p.hasAttribute("hidden"));la?p.removeAttribute("hidden"):p.setAttribute("hidden","")}))}))}function c(m){d.mutateElementSkipRemeasure((function(){return f.classList.toggle("amp-video-eq-play",m)}))}var d=a.video,e=a.video.element;if(!e.hasAttribute("noaudio")&&!e.signals().get("user-interacted")){var f=bb(e),h=[f],k=[P(e,"pause",(function(){return c(!1)})),P(e,"playing",(function(){return c(!0)})),P(e,"ad_start",(function(){b(!1);d.showControls()})),P(e,"ad_end",(function(){b(!0);d.hideControls()})),P(e,"unmuted",(function(){return gb(d)}))];if(d.isInteractive()){d.hideControls();var l=ab(e,a.D);h.push(l);k.push(P(l,"click",(function(){return gb(d)})))}d.mutateElementSkipRemeasure((function(){h.forEach((function(m){e.appendChild(m)}))}));a.M&&b(!1);d.signals().whenSignal("user-interacted").then((function(){a.ja();d.isInteractive()&&d.showControls();d.unmute();k.forEach((function(m){m()}));d.mutateElementSkipRemeasure((function(){h.forEach((function(m){A(m)}))}))}))}}g.updateVisibility=function(a){var b=this.H;this.H=a;a!=b&&this.na&&ob(this)};g.getPlayingState=function(){return this.C?this.C&&this.pa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.M};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};g.getAnalyticsDetails=function(){var a=this,b=this.video;return Promise.all([Qa(this.j.win),Pa(b.element)]).then((function(c){var d=c[0],e=c[1].boundingClientRect,f=e.height;e=e.width;var h=a.hasAutoplay&&d,k=b.getPlayedRanges(),l=k.reduce((function(m,p){return m+p[1]-p[0]}),0);return{autoplay:h,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:f,id:b.element.id,muted:a.F,playedTotal:l,playedRangesJson:JSON.stringify(k),state:a.getPlayingState(),width:e}}))};function T(a,b){var c=this;this.I=b;this.j=a;this.G=this.L=null;this.o=[];this.A=[];this.O=function(){return qb(c)};this.sa=function(d){return"playing_manual"==c.I.getPlayingState(d)};this.ra=function(d,e){var f=d.boundingClientRect;var h=e.boundingClientRect;d=d.intersectionRatio-e.intersectionRatio;.1<Math.abs(d)?f=d:(e=Ia(c.j,"viewport"),d=rb(e,f),e=rb(e,h),f=d<e||d>e?d-e:f.top-h.top);return f};sb(this);tb(this)}T.prototype.dispose=function(){this.A.forEach((function(a){return a()}));this.A.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=I(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.o.push(a),O(b,"pause",this.O),O(b,"playing",this.O),O(b,"ended",this.O),a.signals().whenSignal("user-interacted").then(this.O),qb(this))};function tb(a){function b(){a.L=null}var c=a.j.getRootNode();a.A.push(O(c,"webkitfullscreenchange",b),O(c,"mozfullscreenchange",b),O(c,"fullscreenchange",b),O(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};function sb(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.A.push(P(c.orientation,"change",(function(){return ub(a)})));a.A.push(P(b,"orientationchange",(function(){return ub(a)})))}function ub(a){a.isInLandscape()?null!=a.G&&vb(a,a.G):a.L&&wb(a,a.L)}function vb(a,b){var c=I(a.j.win,"platform");a.L=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():xb(a,b).then((function(){return b.fullscreenEnter()}))}function wb(a,b){a.L=null;xb(a,b,"center").then((function(){return b.fullscreenExit()}))}function xb(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=Ia(a.j,"viewport");return J(a.j.win,"timer").promise(330).then((function(){return Pa(e)})).then((function(h){var k=h.boundingClientRect;h=k.bottom;k=k.top;var l=f.getSize().height;return 0<=k&&h<=l?ha():f.animateScrollIntoView(e,d?d:h>l?"bottom":"top")}))}function qb(a){if(a.isInLandscape())return Promise.resolve(a.G);a.G=null;var b=a.o.filter(a.sa).map((function(c){return Pa(c.element)}));return Promise.all(b).then((function(c){var d=c.sort(a.ra)[0];return d&&.5<d.intersectionRatio?d.target.getImpl().then((function(e){return a.G=e})):a.G}))}function rb(a,b){b=b.top+b.height/2;var c=a.getSize().height/2;return Math.abs(b-c)}function V(a,b){this.U=J(a,"timer");this.P=b;this.A=null;this.V=this.ma=0}V.prototype.start=function(){var a=this,b=this.P.video.element;this.stop();this.A=this.A||[];yb(this)?zb(this,this.V):this.A.push(Va(b,(function(){yb(a)&&zb(a,a.V)})));this.A.push(P(b,"ended",(function(){yb(a)&&Ab(a,100)})))};V.prototype.stop=function(){if(this.A){for(;0<this.A.length;)this.A.pop()();this.V++}};function yb(a){var b=a.P.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.wa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.wa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];H().warn.apply(H(),["video-manager"].concat(b))};function zb(a,b){if(b==a.V){var c=a.P,d=a.U,e=c.video,f=function(){return zb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4e3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);z(l);Ab(a,l);d.delay(f,h)}else d.delay(f,500)}}function Ab(a,b){0>=b||a.ma==b||(a.ma=b,S(a.P,"video-percentage-played",{normalizedPercentage:b.toString()}))}function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then((function(e){c&&Object.assign(e,c);B(d.element,b,e)}))}var Bb=["<iframe frameborder=0 allowfullscreen></iframe>"];function Cb(a,b){return b&&a.source==b.contentWindow?"https://mowplayer.com"==a.origin:!1}function Db(a,b,c){if(null!=c[b]){var d=c[b];(y(d)?d:[d]).forEach((function(e){B(a,e)}))}}function Eb(a,b){var c=a.element,d=Xa(c)(Bb);a=a.element;var e=["referrerpolicy"];e=y(e)?e:[e];e=n(e);for(var f=e.next();!f.done;f=e.next()){f=f.value;var h=a.getAttribute(f);null!==h&&d.setAttribute(f,h)}d.src=L(c,"url").assertHttpsUrl(b,c);d.classList.add("i-amphtml-fill-content");c.appendChild(d);return d}function Fb(a){return a?v(a)||a.startsWith("{"):!1}function Gb(a){return v(a)?a:ma(a)}function W(a){a=AMP.BaseElement.call(this,a)||this;a.S="";a.F=!1;a.h=null;a.J=null;a.da=null;a.ea=null;a.fa=null;a.ga="https://mowplayer.com/watch/";a.oa=new Da(a.element);return a}var X=AMP.BaseElement;W.prototype=ba(X.prototype);W.prototype.constructor=W;if(fa)fa(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Hb=Object.getOwnPropertyDescriptor(X,Y);Hb&&Object.defineProperty(W,Y,Hb)}else W[Y]=X[Y];W.ya=X.prototype;g=W.prototype;g.preconnectCallback=function(a){var b=I(this.win,"preconnect");b.url(this.getAmpDoc(),this.J?this.J:this.J=this.ga+encodeURIComponent(this.S));b.url(this.getAmpDoc(),"https://mowplayer.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.buildCallback=function(){this.S=Ha(this.element.getAttribute("data-mediaid"),"/The data-mediaid attribute is required for <amp-mowplayer> %s",this.element);var a=new u;this.da=a.promise;this.ea=a.resolve;a=K(this.element);var b=Ja(a),c=La(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});d.ctor||(d.ctor=hb,d.context=a,d.sharedInstance=!1,d.resolve&&J(b,"video-manager"));Ia(this.element,"video-manager").register(this)};g.layoutCallback=function(){var a=this;this.h=Eb(this,this.J?this.J:this.J=this.ga+encodeURIComponent(this.S));this.fa=P(this.win,"message",this.va.bind(this));var b=this.loadPromise(this.h).then((function(){a.h&&Z(a,"listening",["amp",window.location.href,window.location.origin,!0]);B(a.element,"load")}));this.ea(b);this.oa.updatePlaying(!0);return b};g.unlayoutCallback=function(){this.h&&(A(this.h),this.h=null);this.fa&&this.fa();var a=new u;this.da=a.promise;this.ea=a.resolve;this.oa.updatePlaying(!1);return!0};g.pauseCallback=function(){this.h&&this.h.contentWindow&&this.pause()};g.mutatedAttributesCallback=function(a){null!=a["data-mediaid"]&&this.h&&Z(this,"loadVideoById",[this.S])};function Z(a,b,c){a.da.then((function(){if(a.h&&a.h.contentWindow){var d=JSON.stringify(x({event:"command",func:b,args:c||""}));a.h.contentWindow.postMessage(d,"https://mowplayer.com")}}))}g.va=function(a){if(Cb(a,this.h)){var b=a.data;if(Fb(b)){var c=Gb(b);if(null!=c){a=c.event;var d=c.info||{};c=this.element;"set_aspect_ratio"===a&&this.attemptChangeHeight(d.new_height).catch((function(){}));var e=d.playerState;if("infoDelivery"==a&&null!=e)a={},Db(c,e.toString(),(a[1]="playing",a[2]="pause",a[0]=["ended","pause"],a));else{var f=d.muted;"infoDelivery"==a&&d&&null!=f&&this.F!=f&&(this.F=f,B(c,this.F?"muted":"unmuted"))}}}}};g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.play=function(){Z(this,"playVideo")};g.pause=function(){Z(this,"pauseVideo");var a=this.h;a&&(a.src=a.src)};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unMute")};g.showControls=function(){};g.hideControls=function(){};g.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};g.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!0};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};g.seekTo=function(){this.user().error("amp-mowplayer","`seekTo` not supported.")};AMP.registerElement("amp-mowplayer",W)}});//# sourceMappingURL=amp-mowplayer-0.1.js.map