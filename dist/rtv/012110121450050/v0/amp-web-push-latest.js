(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-web-push",ev:"0.1",l:true,f:function(AMP,_){"use strict";var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ea(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}return function(){throw Error("Cannot find global object")}()}var k=ea(this);"function"===typeof Symbol&&Symbol("x");var l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var n;a:{var fa={a:!0},q={};try{q.__proto__=fa;n=q.a;break a}catch(a){}n=!1}l=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=l;function u(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(r)r(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.da=b.prototype}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var ha=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function ia(a,b,c,d,e){return e?e:b?"�":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a}function v(a){return String(a).replace(ha,ia)}var ja=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function x(a){var b=Object.create(null);if(!a)return b;for(var c;c=ja.exec(a);){var d=w(c[1],c[1]);c=c[2]?w(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}function y(a){a=(a||self).location;return x(a.originalHash||a.hash)}var z=self.AMP_CONFIG||{},ka=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function A(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}z.cdnUrl||A("runtime-host");z.geoApiUrl||A("amp-geo-api");var B="";function C(){var a=self;if(a.__AMP_MODE)a=a.__AMP_MODE;else{var b=y(a)||y(a);b=["1","actions","amp","amp4ads","amp4email"].includes(b.development)||!!a.AMP_DEV_MODE;if(!B){var c;B=(null==(c=a.AMP_CONFIG)?void 0:c.v)||"012110121450047"}a=a.__AMP_MODE={localDev:!1,development:b,esm:!1,test:!1,rtvVersion:B}}return a}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function la(){throw Error("failed to call initLogConstructor")}function E(){D.user||(D.user=la());return D.user}function F(){return D.dev||(D.dev=la())}function ma(a,b){for(a=a.lastElementChild;a;a=a.previousElementSibling)if(b(a))return a;return null}function na(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function G(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=H(b,"ampdoc").getAmpDoc(a)}return a.isSingleDoc()?a.win:a}function H(a,b){a=I(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function J(a){var b;(b=I(a)["amp-web-push-service"])?b.promise?b=b.promise:(H(a,"amp-web-push-service"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=I(a);a["amp-web-push-service"]=oa();return a["amp-web-push-service"].promise}function I(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function oa(){var a=new na,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function K(a){return AMP.BaseElement.call(this,a)||this}u(K,AMP.BaseElement);K.prototype.isLayoutSupported=function(a){return"fixed"==a};K.prototype.buildCallback=function(){this.element.classList.add("amp-invisible")};var L;function pa(a,b,c,d){function e(t){try{return h(t)}catch(ba){var ca,da;null==(da=(ca=self).__AMP_REPORT_ERROR)||da.call(ca,ba);throw ba}}var g=a,h=c,m=qa(),p=!(null==d||!d.capture);g.addEventListener(b,e,m?d:p);return function(){var t;null==(t=g)||t.removeEventListener(b,e,m?d:p);e=g=h=null}}function qa(){if(void 0!==L)return L;L=!1;try{var a={get capture(){L=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return L}function M(a,b,c,d){var e=c,g=pa(a,b,(function(h){try{e(h)}finally{e=null,g()}}),d);return g}function ra(a){return!!(a.complete||"complete"==a.readyState||N(a)&&0<a.readyState||a.document&&"complete"==a.document.readyState)}function sa(a){var b,c;if(ra(a))return Promise.resolve(a);var d=N(a);return d&&a.__AMP_MEDIA_LOAD_FAILURE_SRC===a.currentSrc?Promise.reject(a):new Promise((function(e,g){b=d?M(a,"loadedmetadata",e,{capture:!0}):M(a,"load",e);if(a.tagName){var h=a;if(d&&!a.hasAttribute("src")&&(h=ma(a,(function(m){return"SOURCE"===m.tagName})),!h))return g(Error("Media has no source."));c=M(h,"error",g)}})).then((function(){c&&c();return a}),(function(){b&&b();N(a)&&(a.__AMP_MEDIA_LOAD_FAILURE_SRC=a.currentSrc||!0);var e=a;e&&e.src&&(e=e.src);throw E().createError("Failed to load:",e)}))}function N(a){return"AUDIO"===a.tagName||"VIDEO"===a.tagName}function O(a,b){this.J=a;this.ca=b;this.B=null;this.S=new Promise((function(){}))}O.prototype.load=function(){var a=this;return this.J.whenReady().then((function(){a.B=a.J.win.document.createElement("iframe");var b=a.B,c=!1;void 0===c&&(c=b.hasAttribute("hidden"));c?b.removeAttribute("hidden"):b.setAttribute("hidden","");a.B.sandbox="allow-same-origin allow-scripts";a.B.src=a.ca;a.J.getBody().appendChild(a.B);a.S=sa(a.B);return a.whenReady()}))};O.prototype.getDomElement=function(){return this.B};O.prototype.whenReady=function(){return this.S};function P(){this.W=100;this.I=this.O=0;this.D=Object.create(null)}P.prototype.has=function(a){return!!this.D[a]};P.prototype.get=function(a){var b=this.D[a];if(b)return b.access=++this.I,b.payload};P.prototype.put=function(a,b){this.has(a)||this.O++;this.D[a]={payload:b,access:this.I};if(!(this.O<=this.W)){a=this.D;var d,c=this.I+1;for(d in a){var e=a[d].access;if(e<c){c=e;var g=d}}void 0!==g&&(delete a[g],this.O--)}};new Set(["c","v","a","ad"]);var Q,ta;function R(a){Q||(Q=self.document.createElement("a"),ta=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new P));var b=Q,c=ta;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function S(a){a||(a={debug:!1,windowContext:window});this.C={};this.A={};this.j=a.debug;this.F=this.X=this.Y=!1;this.H=this.L=this.M=this.o=this.K=null;this.V=a.windowContext||window}f=S.prototype;f.listen=function(a){var b=this;return new Promise((function(c,d){b.F?d(Error("Already connected.")):b.Y?d(Error("Already listening for connections.")):Array.isArray(a)?(b.M=b.$.bind(b,a,c,d),b.V.addEventListener("message",b.M),b.j&&F().fine("amp-web-push","Listening for a connection message...")):d(Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",a))})).then((function(){b.send(S.Topics.CONNECT_HANDSHAKE,null);b.F=!0}))};f.$=function(a,b,c,d){var e=d.data,g=d.origin,h=d.ports;this.j&&F().fine("amp-web-push","Window message for listen() connection received:",e);a:{var m=R(g).origin;for(var p=0;p<a.length;p++)if(R(a[p]).origin===m){m=!0;break a}m=!1}m?e&&e.topic===S.Topics.CONNECT_HANDSHAKE?(F().fine("amp-web-push","Received expected connection handshake message:",e),this.V.removeEventListener("message",this.M),this.o=h[0],this.H=this.T.bind(this),this.o.addEventListener("message",this.H,!1),this.o.start(),b()):F().fine("amp-web-push","Discarding connection message because it did not contain our expected handshake:",e):F().fine("amp-web-push","Discarding connection message from "+g+" because it isn't an allowed origin:",e," (allowed  origins are)",a)};f.connect=function(a,b){var c=this;return new Promise((function(d,e){a||e(Error("Provide a valid Window context to connect to."));b||e(Error("Provide an expected origin for the remote Window or provide the wildcard *."));c.F?e(Error("Already connected.")):c.X?e(Error("Already connecting.")):(c.K=new MessageChannel,c.o=c.K.port1,c.L=c.Z.bind(c,c.o,b,d),c.o.addEventListener("message",c.L),c.o.start(),a.postMessage({topic:S.Topics.CONNECT_HANDSHAKE},"*"===b?"*":R(b).origin,[c.K.port2]),F().fine("amp-web-push","Opening channel to "+b+"..."))}))};f.Z=function(a,b,c){this.F=!0;this.j&&F().fine("amp-web-push","Messenger channel to "+b+" established.");a.removeEventListener("message",this.L);this.H=this.T.bind(this);a.addEventListener("message",this.H,!1);c()};f.T=function(a){a=a.data;if(this.C[a.id]&&a.isReply){var b=this.C[a.id];delete this.C[a.id];var c=b.promiseResolver;b.message=a.data;this.j&&F().fine("amp-web-push","Received reply for topic '%s': %s",a.topic,a.data);c([a.data,this.U.bind(this,a.id,b.topic)])}else{var d=this.A[a.topic];if(d){this.j&&F().fine("amp-web-push","Received new message for topic '"+a.topic+"': "+a.data);for(var e=0;e<d.length;e++)(0,d[e])(a.data,this.U.bind(this,a.id,a.topic))}}};f.on=function(a,b){this.A[a]?this.A[a].push(b):this.A[a]=[b]};f.off=function(a,b){if(b){var c=this.A[a].indexOf(b);-1!==c&&this.A[a].splice(c,1)}else this.A[a]&&delete this.A[a]};f.U=function(a,b,c){var d=this,e={id:a,topic:b,data:c,isReply:!0};this.o.postMessage(e);return new Promise((function(g){d.C[e.id]={message:c,topic:b,promiseResolver:g}}))};f.send=function(a,b){var c=this,d={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:a,data:b};this.j&&F().fine("amp-web-push","Sending %s: %s",a,b);this.o.postMessage(d);return new Promise((function(e){c.C[d.id]={message:b,topic:a,promiseResolver:e}}))};k.Object.defineProperties(S,{Topics:{configurable:!0,enumerable:!0,get:function(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}}});function ua(a,b){var c=a.getHeadNode(),d=va(c,wa(c));if(b){var e=a.getRootNode();if(xa(e,d))b(d);else var g=setInterval((function(){xa(e,d)&&(clearInterval(g),b(d))}),4)}}function va(a,b){var c=a.__AMP_CSS_SM;c||(c=a.__AMP_CSS_SM=Object.create(null));var d=ya(a,c,"amp-extension=amp-web-push");if(d)return d.textContent!==b&&(d.textContent=b),d;var e=(a.ownerDocument||a).createElement("style");e.textContent=b;e.setAttribute("amp-extension","amp-web-push");b=ya(a,c,"amp-runtime");(b=void 0===b?null:b)?a.insertBefore(e,b.nextSibling):a.insertBefore(e,a.firstChild);return c["amp-extension=amp-web-push"]=e}function ya(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function wa(a){return(a=a.__AMP_CSS_TR)?a("amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"):"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"}function xa(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++)if(c[a].ownerNode==b)return!0;return!1}function T(a){this.ampdoc=a;ua(a,(function(){}));this.h={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,debug:null};this.j=C().development;this.R=this.G=null;this.P=new S({debug:this.j});this.N=null}f=T.prototype;f.start=function(a){var b=this;F().fine("amp-web-push","amp-web-push extension starting up.");if(!this.environmentSupportsWebPush())return E().warn("amp-web-push","Web push is not supported."),Promise.reject("Web push is not supported");this.initializeConfig(a);var c=this.installHelperFrame();c.then((function(){F().fine("amp-web-push","Helper frame "+b.h["helper-iframe-url"]+" DOM loaded. Connecting to the frame via postMessage()...");return b.P.connect(b.G.getDomElement().contentWindow,R(b.h["helper-iframe-url"]).origin)})).then((function(){if(b.isContinuingSubscriptionFromRedirect())za(b);else return b.updateWidgetVisibilities()}));return c};f.initializeConfig=function(a){this.h=a};f.installHelperFrame=function(){var a=-1!==this.h["helper-iframe-url"].indexOf("?")?"&":"?";this.G=new O(this.ampdoc,""+this.h["helper-iframe-url"]+a+"parentOrigin="+this.ampdoc.win.location.origin);return this.G.load()};f.isContinuingSubscriptionFromRedirect=function(){return-1!==(this.ampdoc.win.testLocation||this.ampdoc.win.location).search.indexOf(T.PERMISSION_POPUP_URL_FRAGMENT)};f.removePermissionPopupUrlFragmentFromUrl=function(a){var b=a.replace("?"+T.PERMISSION_POPUP_URL_FRAGMENT,"");return b=b.replace("&"+T.PERMISSION_POPUP_URL_FRAGMENT,"")};function U(a,b,c){return a.G.whenReady().then((function(){return a.P.send(b,c)})).then((function(d){var e=d[0];if(e.success)return e.result;throw Error("AMP page helper iframe query topic "+b+" and message "+c+" failed with: "+e.error)}))}function V(a,b){return U(a,S.Topics.SERVICE_WORKER_QUERY,{topic:b,payload:null})}f.queryNotificationPermission=function(){return U(this,S.Topics.NOTIFICATION_PERMISSION_STATE,null)};f.registerServiceWorker=function(){var a=this.h["service-worker-scope"];return U(this,S.Topics.SERVICE_WORKER_REGISTRATION,{workerUrl:this.h["service-worker-url"],registrationOptions:a?{scope:a}:{}})};f.querySubscriptionStateRemotely=function(){return V(this,"amp-web-push-subscription-state")};f.subscribeForPushRemotely=function(){return V(this,"amp-web-push-subscribe")};f.unsubscribeFromPushRemotely=function(){return V(this,"amp-web-push-unsubscribe")};f.isServiceWorkerActivated=function(){var a=this,b=this;return U(this,S.Topics.SERVICE_WORKER_STATE,null).then((function(c){var d=!0===c.isControllingFrame,e=a.isUrlSimilarForQueryParams(c.url,b.h["service-worker-url"]),g="activated"===c.state;return d&&e&&g}))};f.isUrlSimilarForQueryParams=function(a,b){var h,c=R(a),d=x(c.search),e=R(b),g=x(e.search);for(h in d)if(g[h]!==d[h])return!1;return c.origin===e.origin&&c.pathname===e.pathname};f.setWidgetVisibilities=function(a,b){for(var c=this.ampdoc.getRootNode().querySelectorAll(v("amp-web-push-widget")+"[visibility="+v(a)+"]"),d=0;d<c.length;d++){var e=c[d];b?e.classList.remove("amp-invisible"):e.classList.add("amp-invisible")}};function Aa(a){return a.queryNotificationPermission().then((function(b){a.R=b}))}f.updateWidgetVisibilities=function(){var a=this;return Aa(this).then((function(){return U(a,S.Topics.NOTIFICATION_PERMISSION_STATE,{isQueryTopicSupported:S.Topics.STORAGE_GET})})).then((function(b){return!0===b?U(a,S.Topics.STORAGE_GET,{key:"amp-web-push-notification-permission"}):Promise.resolve("default")})).then((function(b){if("denied"===b)0<a.ampdoc.getRootNode().querySelectorAll(v("amp-web-push-widget")+"[visibility="+v("blocked")+"]").length?(a.setWidgetVisibilities("unsubscribed",!1),a.setWidgetVisibilities("subscribed",!1),a.setWidgetVisibilities("blocked",!0)):W(a);else return a.isServiceWorkerActivated().then((function(c){c?Ba(a):W(a)}))}))};function Ba(a){H(a.ampdoc.win,"timer").timeoutPromise(5e3,a.querySubscriptionStateRemotely().then((function(b){switch("boolean"===typeof b?1:void 0){case T.AMP_VERSION_INITIAL:b?(a.setWidgetVisibilities("unsubscribed",!1),a.setWidgetVisibilities("subscribed",!0),a.setWidgetVisibilities("blocked",!1)):W(a);break;default:throw E().createError("The controlling service worker replied to amp-web-push with an unexpected value.")}})),"The controlling service worker does not support amp-web-push.")}function W(a){a.setWidgetVisibilities("unsubscribed",!0);a.setWidgetVisibilities("subscribed",!1);a.setWidgetVisibilities("blocked",!1)}f.subscribe=function(a){var b=this,c=[];c.push(this.registerServiceWorker());c.push(new Promise((function(d){switch(b.R){case"granted":return X(b).then((function(){d()}));default:var e=b.openPopupOrRedirect();Ca(b,e,a);b.N=new S({debug:b.j});b.N.listen([b.h["permission-dialog-url"]]);b.onPermissionDialogInteracted().then((function(g){return b.handlePermissionDialogInteraction(g)})).then((function(){d()}))}})));return Promise.all(c)};function Ca(a,b,c){if(b&&!b.closed)var d=a.ampdoc.win.setInterval((function(){b.closed&&(c(),a.ampdoc.win.clearInterval(d))}),500)}f.handlePermissionDialogInteraction=function(a){var b=a[0];a=a[1];switch(b){case"denied":case"default":return a({closeFrame:!0}),this.updateWidgetVisibilities();case"granted":a({closeFrame:!0});X(this);break;default:throw Error("Unexpected permission value:",b)}};function X(a){return a.subscribeForPushRemotely().then((function(){return a.updateWidgetVisibilities()}))}f.unsubscribe=function(){var a=this;return this.unsubscribeFromPushRemotely().then((function(){return a.updateWidgetVisibilities()}))};f.onPermissionDialogInteracted=function(){var a=this;return new Promise((function(b){a.N.on(S.Topics.NOTIFICATION_PERMISSION_STATE,(function(c,d){b([c,d])}))}))};f.openPopupOrRedirect=function(){var a=-1!==this.ampdoc.win.location.href.indexOf("?")?"&":"?",b=this.ampdoc.win.location.href+a+T.PERMISSION_POPUP_URL_FRAGMENT,c=-1!==this.h["permission-dialog-url"].indexOf("?")?"&":"?",d=this.h["permission-dialog-url"]+c+"return="+encodeURIComponent(b),e=Math.floor(Math.min(700,.9*screen.width)),g=Math.floor(Math.min(450,.9*screen.height)),h=this.ampdoc.win;e="height="+g+",width="+e+",left="+Math.floor((screen.width-e)/2)+",top="+Math.floor((screen.height-g)/2)+",resizable=yes,scrollbars=yes";try{var m=h.open(d,"_blank",e)}catch(t){F().error("DOM","Failed to open url on target: ","_blank",t)}if(!(g=m)){e=e||"";var p;"number"!==typeof p&&(p=0);g=p+8>e.length?!1:-1!==e.indexOf("noopener",p)}g||(m=h.open(d,"_top"));return m};function za(a){a.ampdoc.win.history.replaceState(null,"",a.removePermissionPopupUrlFragmentFromUrl(a.ampdoc.win.location.href));a.queryNotificationPermission().then((function(b){switch(b){case"denied":case"default":return a.updateWidgetVisibilities();case"granted":X(a);break;default:throw Error("Unexpected permission value",b)}}))}f.environmentSupportsWebPush=function(){return void 0!==this.ampdoc.win.Notification&&void 0!==this.ampdoc.win.navigator.serviceWorker&&void 0!==this.ampdoc.win.PushManager&&("https:"===this.ampdoc.win.location.protocol||"localhost"===this.ampdoc.win.location.hostname||"127.0.0.1"===this.ampdoc.win.location.hostname||C().development||!1)};k.Object.defineProperties(T,{PERMISSION_POPUP_URL_FRAGMENT:{configurable:!0,enumerable:!0,get:function(){return"amp-web-push-subscribing=yes"}},AMP_VERSION_INITIAL:{configurable:!0,enumerable:!0,get:function(){return 1}}});var Y={HELPER_FRAME_URL:"helper-iframe-url",PERMISSION_DIALOG_URL:"permission-dialog-url",SERVICE_WORKER_URL:"service-worker-url",SERVICE_WORKER_SCOPE:"service-worker-scope"};function Z(a){return AMP.BaseElement.call(this,a)||this}u(Z,AMP.BaseElement);f=Z.prototype;f.validate=function(){if("amp-web-push"!==this.element.getAttribute("id"))throw E().createError("<amp-web-push> must have an id attribute with value 'amp-web-push'.");if(1<this.getAmpDoc().getRootNode().querySelectorAll("#"+v("amp-web-push")).length)throw E().createError("Only one <amp-web-push> element may exist on a page.");var b,a={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,"service-worker-scope":null};for(b in Y){var c=Y[b],d=this.element.getAttribute(c)||"service-worker-scope"===c;E().assert(d,"The "+c+" attribute is required for <amp-web-push>",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);a[c]=this.element.getAttribute(c)}if(!Da(a["helper-iframe-url"]))throw E().createError("<amp-web-push> must have a valid helper-iframe-url attribute. It should begin with the https:// protocol and point to the provided lightweight template page provided for AMP messaging.");if(!Da(a["permission-dialog-url"]))throw E().createError("<amp-web-push> must have a valid permission-dialog-url attribute. It should begin with the https:// protocol and point to the provided template page for showing the permission prompt.");if("https:"!==R(a["service-worker-url"]).protocol)throw E().createError("<amp-web-push> must have a valid service-worker-url attribute. It should begin with the https:// protocol and point to the service worker JavaScript file to be installed.");if(R(a["service-worker-url"]).origin!==R(a["permission-dialog-url"]).origin||R(a["permission-dialog-url"]).origin!==R(a["helper-iframe-url"]).origin)throw E().createError("<amp-web-push> URL attributes service-worker-url, permission-dialog-url, and helper-iframe-url must all share the same origin.")};f.parseConfig=function(){var b,a={};for(b in Y){var c=Y[b];a[c]=this.element.getAttribute(c)}return a};f.buildCallback=function(){this.validate();var a=this.parseConfig();J(G(this.element)).then((function(b){b.start(a).catch((function(){}))}));this.registerAction("subscribe",this.aa.bind(this));this.registerAction("unsubscribe",this.ba.bind(this))};f.aa=function(a){var b=a.event.target;b.disabled=!0;J(G(this.element)).then((function(c){c.subscribe((function(){b.disabled=!1})).then((function(){b.disabled=!1}))}))};f.ba=function(a){var b=a.event.target;b.disabled=!0;J(G(this.element)).then((function(c){c.unsubscribe().then((function(){b.disabled=!1}))}))};function Da(a){try{var b=R(a),c=1<b.pathname.length;return"https:"===b.protocol&&c}catch(d){return!1}}AMP.registerServiceForDoc("amp-web-push-service",T);AMP.registerElement("amp-web-push",Z);AMP.registerElement("amp-web-push-widget",K,"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/")}});//# sourceMappingURL=amp-web-push-0.1.js.map