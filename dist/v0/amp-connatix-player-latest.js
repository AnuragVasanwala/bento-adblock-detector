(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-connatix-player",ev:"0.1",l:true,f:function(AMP,_){"use strict";var k;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],e=0;e<b.length;++e){var c=b[e];if(c&&c.Math==Math)return}(function(){throw Error("Cannot find global object")})()}n(this);"function"===typeof Symbol&&Symbol("x");var r;if("function"==typeof Object.setPrototypeOf)r=Object.setPrototypeOf;else{var t;a:{var u={a:!0},v={};try{v.__proto__=u;t=v.a;break a}catch(a){}t=!1}r=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var w=r,x={SUFFICIENT:1,INSUFFICIENT:2,UNKNOWN_NOT_REQUIRED:3,UNKNOWN:4},aa={TCF_V1:1,TCF_V2:2,US_PRIVACY_STRING:3};function y(){var a=this;this.promise=new Promise((function(b,e){a.resolve=b;a.reject=e}))}function z(a){return a||{}}var ba=Array.isArray;function ca(a,b){for(var e=[],c=0,d=0;d<a.length;d++){var f=a[d];b(f,d,a)?e.push(f):(c<d&&(a[c]=f),c++)}c<a.length&&(a.length=c)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function A(a){var b;null==(b=a.parentElement)||b.removeChild(a)}function da(a){var b=null,e="";var c=arguments;var d="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];c=d?d.call(c):{next:l(c)};for(d=c.next();!d.done;d=c.next())if(d=d.value,d instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(d,"message"))?0:f.writable)b=d;else{f=d.stack;var g=Error(d.message);for(b in d)g[b]=d[b];g.stack=f;b=g}}else e&&(e+=" "),e+=d;b?e&&(b.message=e+": "+b.message):b=Error(e);return b}function ea(a){var b=da.apply(null,arguments);setTimeout((function(){var e,c;null==(c=(e=self).__AMP_REPORT_ERROR)||c.call(e,b);throw b}))}function B(a,b){for(var e=[],c=1;c<arguments.length;++c)e[c-1]=arguments[c];try{a.apply(null,e)}catch(d){ea(d)}}var fa={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};var ha=/vertical/,C=new WeakMap,D=new WeakMap,E=new WeakMap;function F(a,b,e){var c=a.ownerDocument.defaultView;if(c){var d=D.get(a);d||(d=[],D.set(a,d),G(c).observe(a));if(!d.some((function(g){return g.callback===e&&g.type===b}))){d.push({type:b,callback:e});var f=E.get(a);f&&setTimeout((function(){return H(b,e,f)}))}}}function I(a,b,e){var c=D.get(a);c&&(ca(c,(function(d){return d.callback===e&&d.type===b})),0==c.length&&(D.delete(a),E.delete(a),(c=a.ownerDocument.defaultView)&&G(c).unobserve(a)))}function G(a){var b=C.get(a);b||(b=new a.ResizeObserver(ia),C.set(a,b));return b}function ia(a){for(var b=new Set,e=a.length-1;0<=e;e--){var c=a[e],d=c.target;if(!b.has(d)){b.add(d);var f=D.get(d);if(f)for(E.set(d,c),d=0;d<f.length;d++){var g=f[d];H(g.type,g.callback,c)}}}}function H(a,b,e){if(0==a)a=e.contentRect,B(b,{width:a.width,height:a.height});else if(1==a){var c=e.borderBoxSize;if(c)var d=0<c.length?c[0]:{inlineSize:0,blockSize:0};else{a=e.target;var f=ha.test(((a.ownerDocument||a).defaultView.getComputedStyle(a)||fa)["writing-mode"]),g=a.offsetHeight,h=a.offsetWidth;if(f){var p=h;var q=g}else q=h,p=g;d={inlineSize:q,blockSize:p}}B(b,d)}}function J(a){this.C=a;this.D=this.G=!1;this.B=this.B.bind(this)}J.prototype.updatePlaying=function(a){a!==this.G&&((this.G=a)?(this.D=!1,F(this.C,1,this.B)):I(this.C,1,this.B))};J.prototype.B=function(a){var b=a.blockSize,e=0<a.inlineSize&&0<b;e!==this.D&&(this.D=e,a=this.C,e||a.pause())};var K=self.AMP_CONFIG||{},ja=("string"==typeof K.cdnProxyRegex?new RegExp(K.cdnProxyRegex):K.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function L(a){if(self.document&&self.document.head&&(!self.location||!ja.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}K.cdnUrl||L("runtime-host");K.geoApiUrl||L("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var M=self.__AMP_LOG;function N(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return O(a,b)}function ka(a){var b=P(a);b=Q(b);return O(b,"documentInfo")}function P(a){return a.nodeType?N((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Q(a){a=P(a);return a.isSingleDoc()?a.win:a}function O(a,b){a=R(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function S(a){var b=R(a).consentPolicyManager;if(b){if(b.promise)return b.promise;O(a,"consentPolicyManager");return b.promise=Promise.resolve(b.obj)}return null}function R(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function la(){var a=new y,b=a.promise,e=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:e,context:null,ctor:null}}function T(a){var b=S(Q(a));if(b)return b;var e=P(a);return e.whenExtensionsKnown().then((function(){var c=e.getExtensionVersion("amp-consent");return c?N(e.win,"extensions").waitForExtension("amp-consent",c):null})).then((function(c){if(c){var d=Q(a);var f=S(d);f?d=f:(d=R(d),d.consentPolicyManager=la(),d=d.consentPolicyManager.promise)}else d=null;return d}))}function ma(a,b){var e=b=void 0===b?"default":b;return T(a).then((function(c){return c?c.whenPolicyResolved(e):null}))}function na(a,b){return T(a).then((function(e){return e?e.getMergedSharedData(b):null}))}function oa(a,b){var e=void 0===b?"default":b;return T(a).then((function(c){return c?c.getConsentStringInfo(e):null}))}function pa(a,b){var e=void 0===b?"default":b;return T(a).then((function(c){return c?c.getConsentMetadataInfo(e):null}))}new Set(["c","v","a","ad"]);function qa(a,b){if(!b)return a;var e=a.split("#",2),c=e[0].split("?",2),d=c[0]+(c[1]?"?"+c[1]+"&"+b:"?"+b);return d+=e[1]?"#"+e[1]:""}function ra(a){var e,b=[];for(e in a){var c=a[e];if(null!=c){c=ba(c)?c:[c];for(var d=0;d<c.length;d++){var f=b,g=f.push;var h=c[d];h=encodeURIComponent(e)+"="+encodeURIComponent(h);g.call(f,h)}}}return b.join("&")}function sa(a){function b(c){return{status:"fulfilled",value:c}}function e(c){return{status:"rejected",reason:c}}return Promise.all(a.map((function(c){return c.then(b,e)})))}function V(a){a=AMP.BaseElement.call(this,a)||this;a.J="";a.H="";a.j=null;a.h=null;a.o=null;a.F=null;a.A=a.A.bind(a);a.I=new J(a.element);return a}var W=AMP.BaseElement;V.prototype=m(W.prototype);V.prototype.constructor=V;if(w)w(V,W);else for(var X in W)if("prototype"!=X)if(Object.defineProperties){var Y=Object.getOwnPropertyDescriptor(W,X);Y&&Object.defineProperty(V,X,Y)}else V[X]=W[X];V.K=W.prototype;function Z(a,b,e){a.o&&a.o.then((function(c){c&&c.contentWindow&&c.contentWindow.postMessage(JSON.stringify(z({event:"command",func:b,args:e||""})),a.j)}))}function ta(a){a.win.addEventListener("message",(function(b){if(a.h&&b.source===a.h.contentWindow){var e=b.data;try{var c=JSON.parse(e)}catch(f){c=null}var d=c;if(d&&"command"===d.event)switch(d.func){case"cnxClose":a.h&&(A(a.h),a.h=null);a.attemptCollapse();break;case"cnxPlayerRendered":a.F(a.h)}}}))}function ua(a){var b=AMP.BaseElement.prototype.getConsentPolicy.call(a)||"default",e=ma(a.element,b),c=oa(a.element,b),d=na(a.element,b),f=pa(a.element,b);sa([e,c,d,f]).then((function(g){if(g&&4===g.length){var h=g[0],p=g[1],q=g[2],U=g[3];Z(a,"ampConsentInfo",{consentPolicyStateEnum:x,consentStringTypeEnum:aa,consentPolicyState:{error:h.reason,value:h.value},rawConsentString:{error:p.reason,value:p.value},consentSharedData:{error:q.reason,value:q.value},consentMetadata:{error:U.reason,value:U.value}})}}))}k=V.prototype;k.buildCallback=function(){var a=this.element;a.classList.add("i-amphtml-media-component");var b=a.getAttribute("data-player-id");if(!M.user)throw Error("failed to call initLogConstructor");this.J=M.user.assert(b,"The data-player-id attribute is required for <amp-connatix-player> %s",a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.H=a.getAttribute("data-media-id")||"";a.getAttribute("data-elements-player")?this.j="https://cdm.elements.video":this.j="https://cdm.connatix.com";a=new y;this.o=a.promise;this.F=a.resolve};k.preconnectCallback=function(a){N(this.win,"preconnect").url(this.getAmpDoc(),this.j,a)};k.layoutCallback=function(){var a=this,b=this.element,e=z({playerId:this.J||void 0,mediaId:this.H||void 0,url:ka(b).get().sourceUrl}),c=qa(this.j+"/amp-embed/index.html",ra(e)),d=b.ownerDocument.createElement("iframe");d.setAttribute("frameborder","0");d.setAttribute("allowfullscreen","true");d.src=c;d.classList.add("i-amphtml-fill-content");d.classList.add("i-amphtml-replaced-content");b.appendChild(d);this.h=d;ta(this);ua(this);F(this.element,0,this.A);this.I.updatePlaying(!0);return this.loadPromise(d).then((function(){return a.o}))};k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};k.A=function(a){this.h&&Z(this,"ampResize",{width:a.width,height:a.height})};k.pauseCallback=function(){this.h&&(Z(this,"ampPause"),this.h.src=this.h.src)};k.unlayoutCallback=function(){this.h&&(A(this.h),this.h=null);var a=new y;this.o=a.promise;this.F=a.resolve;I(this.element,0,this.A);this.I.updatePlaying(!1);return!0};AMP.registerElement("amp-connatix-player",V)}});//# sourceMappingURL=amp-connatix-player-0.1.js.map