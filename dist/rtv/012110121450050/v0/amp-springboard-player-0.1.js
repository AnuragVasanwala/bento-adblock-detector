(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-springboard-player",ev:"0.1",l:true,f:function(AMP,_){"use strict";var h;function k(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function l(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:k(a)}}var m="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}n(this);"function"===typeof Symbol&&Symbol("x");var p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={a:!0},t={};try{t.__proto__=r;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p;var v=Array.isArray;function w(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function x(a){a.classList.add("i-amphtml-fill-content")}function y(a){for(var b=null,c="",d=l(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function z(a){var b=y.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function A(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){z(e)}}var B={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};var C=/vertical/,D=new WeakMap,H=new WeakMap,I=new WeakMap;function J(a,b){var c=a.ownerDocument.defaultView;if(c){var d=H.get(a);d||(d=[],H.set(a,d),K(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=I.get(a);e&&setTimeout((function(){return L(1,b,e)}))}}}function M(a,b){var c=H.get(a);c&&(w(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(H.delete(a),I.delete(a),(c=a.ownerDocument.defaultView)&&K(c).unobserve(a)))}function K(a){var b=D.get(a);b||(b=new a.ResizeObserver(N),D.set(a,b));return b}function N(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=H.get(e);if(f)for(I.set(e,d),e=0;e<f.length;e++){var g=f[e];L(g.type,g.callback,d)}}}}function L(a,b,c){if(0==a)a=c.contentRect,A(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=C.test(((a.ownerDocument||a).defaultView.getComputedStyle(a)||B)["writing-mode"]),g=a.offsetHeight,E=a.offsetWidth;if(f){var F=E;var G=g}else G=E,F=g;e={inlineSize:G,blockSize:F}}A(b,e)}}function O(a){this.B=a;this.C=this.G=!1;this.o=this.o.bind(this)}O.prototype.updatePlaying=function(a){a!==this.G&&((this.G=a)?(this.C=!1,J(this.B,this.o)):M(this.B,this.o))};O.prototype.o=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.C&&(this.C=c,a=this.B,c||a.pause())};
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */var P=self.AMP_CONFIG||{},Q=("string"==typeof P.cdnProxyRegex?new RegExp(P.cdnProxyRegex):P.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function R(a){if(self.document&&self.document.head&&(!self.location||!Q.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}P.cdnUrl||R("runtime-host");P.geoApiUrl||R("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var S=self.__AMP_LOG;function T(a,b,c){if(!S.user)throw Error("failed to call initLogConstructor");return S.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function U(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function V(a){a=AMP.BaseElement.call(this,a)||this;a.D="";a.j="";a.A="";a.I="";a.F="";a.h=null;a.H=new O(a.element);return a}var W=AMP.BaseElement;V.prototype=m(W.prototype);V.prototype.constructor=V;if(u)u(V,W);else for(var X in W)if("prototype"!=X)if(Object.defineProperties){var Y=Object.getOwnPropertyDescriptor(W,X);Y&&Object.defineProperty(V,X,Y)}else V[X]=W[X];V.J=W.prototype;h=V.prototype;h.preconnectCallback=function(a){U(this.win).url(this.getAmpDoc(),"https://cms.springboardplatform.com",a);U(this.win).url(this.getAmpDoc(),"https://www.springboardplatform.com",a)};h.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};h.buildCallback=function(){this.element.classList.add("i-amphtml-media-component");this.D=T(this.element.getAttribute("data-mode"),"The data-mode attribute is required for <amp-springboard-player> %s",this.element);this.j=T(this.element.getAttribute("data-content-id"),"The data-content-id attribute is required for<amp-springboard-player> %s",this.element);this.A=T(this.element.getAttribute("data-domain"),"The data-domain attribute is required for <amp-springboard-player> %s",this.element);this.I=T(this.element.getAttribute("data-site-id"),"The data-site-id attribute is required for<amp-springboard-player> %s",this.element);this.F=T(this.element.getAttribute("data-player-id"),"The data-player-id attribute is required for<amp-springboard-player> %s",this.element)};h.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe"),b=this.element.getAttribute("data-items")||"10";a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.id=this.F+"_"+this.j;a.src="https://cms.springboardplatform.com/embed_iframe/"+encodeURIComponent(this.I)+"/"+encodeURIComponent(this.D)+"/"+encodeURIComponent(this.j)+"/"+encodeURIComponent(this.F)+"/"+encodeURIComponent(this.A)+"/"+encodeURIComponent(b);x(a);this.h=a;this.element.appendChild(a);this.H.updatePlaying(!0);return this.loadPromise(a)};h.unlayoutCallback=function(){var a=this.h;a&&(this.element.removeChild(a),this.h=null);this.H.updatePlaying(!1);return!0};h.pauseCallback=function(){this.h&&this.h.contentWindow&&this.h.contentWindow.postMessage("ampPause","*")};h.createPlaceholderCallback=function(){var a=this.win.document.createElement("img"),b=this.element;var c=["aria-label"];c=v(c)?c:[c];c=l(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=b.getAttribute(d);null!==e&&a.setAttribute(d,e)}x(a);a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");a.hasAttribute("aria-label")?a.setAttribute("alt","Loading video - "+a.getAttribute("aria-label")):a.setAttribute("alt","Loading video");a.setAttribute("src","https://www.springboardplatform.com/storage/"+("playlist"==this.D?"default/snapshots/default_snapshot.png":encodeURIComponent(this.A)+"/snapshots/"+encodeURIComponent(this.j)+".jpg"));return a};AMP.registerElement("amp-springboard-player",V)}});//# sourceMappingURL=amp-springboard-player-0.1.js.map