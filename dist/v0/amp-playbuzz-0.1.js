(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-playbuzz",ev:"0.1",l:true,f:function(AMP,_){"use strict";var h;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function q(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}q(this);"function"===typeof Symbol&&Symbol("x");var r;if("function"==typeof Object.setPrototypeOf)r=Object.setPrototypeOf;else{var t;a:{var u={a:!0},v={};try{v.__proto__=u;t=v.a;break a}catch(a){}t=!1}r=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var w=r;function x(a){return a||{}}var z=Array.isArray;
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */function A(a){var b;null==(b=a.parentElement)||b.removeChild(a)}function B(a){var b=C;var c=void 0===c?{}:c;var d=c.needsRootBounds;return new a.IntersectionObserver(b,{threshold:c.threshold,root:a.parent&&a.parent!=a&&d?a.document:void 0})}var D=new WeakMap,E=new WeakMap;function F(a,b){var c=(a.ownerDocument||a).defaultView,d=D.get(c);d||D.set(c,d=B(c));var e=E.get(a);e||(e=[],E.set(a,e));e.push(b);d.observe(a);return function(){var g,f=E.get(a);if(g=f)g=f.indexOf(b),-1==g?g=!1:(f.splice(g,1),g=!0),g=g&&!f.length;if(g){var k;null==(k=D.get((a.ownerDocument||a).defaultView))||k.unobserve(a);E.delete(a)}}}function C(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)&&(b.add(e),e=E.get(e)))for(var f=0;f<e.length;f++)(0,e[f])(d)}}var G=self.AMP_CONFIG||{},H=("string"==typeof G.cdnProxyRegex?new RegExp(G.cdnProxyRegex):G.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function I(a){if(self.document&&self.document.head&&(!self.location||!H.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}G.cdnUrl||I("runtime-host");G.geoApiUrl||I("amp-geo-api");function aa(a){var b=null,c="";var d=arguments;var e="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];d=e?e.call(d):{next:l(d)};for(e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function J(a){var b=aa.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var K=self.__AMP_LOG;function L(a,b,c){if(!K.user)throw Error("failed to call initLogConstructor");K.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function M(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return N(a,b)}function O(a){return a.nodeType?M((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function N(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}var P;function ba(a,b){function c(g){try{return e(g)}catch(m){var k,n;null==(n=(k=self).__AMP_REPORT_ERROR)||n.call(k,m);throw m}}var d=a,e=b,f=ca();d.addEventListener("message",c,f?void 0:!1);return function(){var g;null==(g=d)||g.removeEventListener("message",c,f?void 0:!1);c=d=e=null}}function ca(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P}function da(a,b){return ba(a,b)}function Q(){this.M=100;this.C=this.D=0;this.o=Object.create(null)}Q.prototype.has=function(a){return!!this.o[a]};Q.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.C,b.payload};Q.prototype.put=function(a,b){this.has(a)||this.D++;this.o[a]={payload:b,access:this.C};if(!(this.D<=this.M)){a=this.o;var d,c=this.C+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.D--)}};new Set(["c","v","a","ad"]);var R,S;function T(a){R||(R=self.document.createElement("a"),S=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Q));var b=R,c=S;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function U(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}function ea(a){var b;return function(){var c=this,d=arguments;clearTimeout(b);b=setTimeout((function(){b=null;a.apply(c,d)}),100)}}function V(a){return function(b,c,d){b=a.createElement(b);b.className=c;fa(b,d);return b}}function fa(a,b){b=b?Array.isArray(b)?b:[b]:[];b.forEach((function(c){return a.appendChild(c)}))}function ha(a){if("object"===typeof a)return a;var b="error parsing json message from playbuzz item: "+a;try{if("string"===typeof a)return JSON.parse(a)}catch(c){return J("amp-playbuzz",b,c),x({})}J("amp-playbuzz",b,a);return x({})}function W(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.K=null;a.j=300;a.H=!1;a.I=!1;a.G=!1;a.J=!1;a.L=!1;a.B=[];a.A="";a.F=null;return a}var X=AMP.BaseElement;W.prototype=p(X.prototype);W.prototype.constructor=W;if(w)w(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Z=Object.getOwnPropertyDescriptor(X,Y);Z&&Object.defineProperty(W,Y,Z)}else W[Y]=X[Y];W.P=X.prototype;h=W.prototype;h.preconnectCallback=function(){M(this.win,"preconnect").url(this.getAmpDoc(),this.A)};h.renderOutsideViewport=function(){return!1};h.buildCallback=function(){var a=this.element,b=a.getAttribute("src"),c=a.getAttribute("data-item");L(b||c,"Either src or data-item attribute is required for <amp-playbuzz> %s",this.element);b&&(L(/^https?:/i.test(b),'URL must start with "http://" or "https://". Invalid value: %s',b),T(b));var d=parseInt(a.getAttribute("height"),10);c?b="//app.ex.co/stories/item/"+c:(b=T(b),b=U(b.href).replace(b.protocol,"").replace(/(www\.)?playbuzz\.com/,"app.ex.co/stories"));this.A=b;this.j=isNaN(d)?this.j:d;this.H="true"===a.getAttribute("data-item-info");this.I="true"===a.getAttribute("data-share-buttons");this.G="true"===a.getAttribute("data-comments")};h.isLayoutSupported=function(a){return"responsive"===a||"fixed-height"===a};h.createPlaceholderCallback=function(){var a=this.win.document.createElement("div");this.element.hasAttribute("aria-label")?a.setAttribute("aria-label","Loading - "+this.element.getAttribute("aria-label")):a.setAttribute("aria-label","Loading interactive element");a.setAttribute("placeholder","");var b=a.appendChild;var c=V(this.element.ownerDocument);var d=c("img","pb_feed_anim_mask");d.src="data:image/png;base64,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";c=c("div","pb_feed_placeholder_container",c("div","pb_feed_placeholder_inner",c("div","pb_feed_placeholder_content",c("div","pb_feed_placeholder_preloader",d))));b.call(a,c);return a};function ia(a){a=V(a.element.ownerDocument);var b=a("div","pb-overflow");b.setAttribute("overflow","");var c=a("button");c.textContent="Show More";var d=a("img","pb-arrow-down");d.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAm0lEQVR4AZ3ORxXCABBF0VGBAfYooaOEXp2kxwOKwg4D9E/vLS9zzt/eN3Y7V/3DEvNUtqznqXXYzALV7elcTQ7TZatMEV+9B2N9MBqPn+tpnpbXCMWfIoFKx0BymH5GOH7d1E6Iq9XfCMfnFqlgh+MRhJvxCMZJhOMosuH4l8hhy3eE4zzCcR7hOI9wHEYoDiIA5xcqb7FyBm4P6hrNHZK+MqYAAAAASUVORK5CYII=";c.appendChild(d);b.appendChild(c);return b}h.layoutCallback=function(){var a=this;this.F=F(this.element,(function(c){return a.L=c.isIntersecting}));var b=this.element.ownerDocument.createElement("iframe");this.h=b;b.setAttribute("scrolling","no");b.setAttribute("frameborder","0");b.setAttribute("allowtransparency","true");b.setAttribute("allowfullscreen","true");b.src=ja(this);ka(this,ea(this.N.bind(this)));this.element.appendChild(ia(this));b.classList.add("i-amphtml-fill-content");this.element.appendChild(b);return this.K=this.loadPromise(b).then((function(){a.J=!0;a.attemptChangeHeight(a.j).catch((function(){}));var c=a.getViewport().onChanged(a.O.bind(a));a.B.push(c)}))};h.N=function(a){isNaN(a)||a===this.j||(this.j=a,this.J&&this.attemptChangeHeight(this.j).catch((function(){})))};function ka(a,b){var c=da(a.win,(function(d){a.h.contentWindow===d.source&&(d=ha(d.data),d.resize_height&&b(d.resize_height))}));a.B.push(c)}function ja(a){var b=O(a.element);b=O(b);b=b.isSingleDoc()?b.win:b;var c=N(b,"documentInfo").get().canonicalUrl,d=T(c);b=a.A;var e=T(a.A).pathname,f=a.H,g=a.I,k=a.G,n=U(d.href);a=b+"?";b=x({feed:!0,implementation:"amp",src:b,embedBy:"00000000-0000-0000-0000-000000000000",game:e,comments:void 0,useComments:k,gameInfo:f,useShares:g,socialReferrer:!1,height:"auto",parentUrl:n,parentHost:d.host});e=[];for(y in b)if(f=b[y],null!=f)for(f=z(f)?f:[f],g=0;g<f.length;g++){k=e;n=k.push;var m=f[g];m=encodeURIComponent(y)+"="+encodeURIComponent(m);n.call(k,m)}var y=e.join("&");return a+y}h.O=function(a){if(this.L){var b=x({event:"scroll",windowHeight:a.height,scroll:a.top,offsetTop:this.getLayoutBox().top}),c=JSON.stringify(b);this.h.contentWindow.postMessage(c,"*")}};h.unlayoutOnPause=function(){return!0};h.unlayoutCallback=function(){var a;null==(a=this.F)||a.call(this);this.F=null;this.B.forEach((function(b){return b()}));this.B.length=0;this.h&&(A(this.h),this.K=this.h=null);return!0};AMP.registerElement("amp-playbuzz",W,".pb-overflow[overflow]{width:100%;height:150px;position:absolute;bottom:0;text-align:center;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0%,#fff 75%)}.pb-overflow button{width:140px;height:37px;position:absolute;bottom:0;left:50%;margin-left:-70px;border-radius:4px;background-color:#fff;border:1px solid #009cff;color:#009cff;font-weight:700;font-family:Helvetica,Roboto,Arial,sans-serif;cursor:pointer}.pb-arrow-down{height:8px;margin-left:10px}.pb_feed_placeholder_container{width:100%;height:100%}.pb_feed_placeholder_container{direction:ltr}.pb_feed_placeholder_inner{position:relative;width:100%;height:100%;margin:auto}.pb_feed_placeholder_content{width:100%;height:100%;background-color:#f2f2f2;border-radius:5px}.pb_feed_placeholder_preloader{position:absolute;top:47%;left:50%;width:29px;height:38px;margin-top:-36px;margin-left:-15px;overflow:hidden;box-sizing:border-box}@media screen and (max-width:568px){.pb_feed_placeholder_preloader{top:46%}}@media screen and (min-width:569px) and (max-width:992px){.pb_feed_placeholder_preloader{top:48%}}.pb_feed_anim_mask{position:absolute;width:30px;top:0;left:0}.pb_feed_loading_text{position:absolute;font-family:arial;font-size:11px;color:#aaa;text-align:center;width:100%;top:51%;direction:ltr}\n/*# sourceURL=/extensions/amp-playbuzz/0.1/amp-playbuzz.css*/")}});//# sourceMappingURL=amp-playbuzz-0.1.js.map