(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-tiktok",ev:"0.1",l:true,f:function(AMP,_){"use strict";var k,l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}n(this);"function"===typeof Symbol&&Symbol("x");var p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={a:!0},t={};try{t.__proto__=r;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p;function v(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var w;function x(a,b){if(void 0!==w)var c=w;else{try{var d=a.ownerDocument,e=d.createElement("div"),f=d.createElement("div");e.appendChild(f);c=e.querySelector(":scope div")===f}catch(g){c=!1}c=w=c}if(c)return a.querySelector(b.replace(/^|,/g,"$&:scope "));a.classList.add("i-amphtml-scoped");b=b.replace(/^|,/g,"$&.i-amphtml-scoped ");b=a.querySelectorAll(b);a.classList.remove("i-amphtml-scoped");return void 0===b[0]?null:b[0]}function y(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a}var z=self.AMP_CONFIG||{},A=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function B(a){if(self.document&&self.document.head&&(!self.location||!A.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}z.cdnUrl||B("runtime-host");z.geoApiUrl||B("amp-geo-api");function C(a,b){function c(){d=0;var g=1e3-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var h=f;f=null;b.apply(null,h)}}var d=0,e=0,f=null;return function(g){for(var h=[],m=0;m<arguments.length;++m)h[m-0]=arguments[m];e=a.Date.now();f=h;d||(d=a.setTimeout(c,1e3))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};function D(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return E(a,b)}function E(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}var F;function H(a,b){function c(g){try{return e(g)}catch(G){var h,m;null==(m=(h=self).__AMP_REPORT_ERROR)||m.call(h,G);throw G}}var d=a,e=b,f=I();d.addEventListener("message",c,f?void 0:!1);return function(){var g;null==(g=d)||g.removeEventListener("message",c,f?void 0:!1);c=d=e=null}}function I(){if(void 0!==F)return F;F=!1;try{var a={get capture(){F=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return F}function J(a,b){return H(a,b)}var K;function L(a){var b=K;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}var M,N="Webkit webkit Moz moz ms O o".split(" ");function O(a,b,c){var d=a.style;if(!b.startsWith("--")){M||(M=Object.create(null));var e=M[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var g=0;g<N.length;g++){var h=N[g]+f;if(void 0!==d[h]){f=h;break b}}f=""}void 0!==d[f]&&(e=f)}M[b]=e}b=e}b&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}var P=['<svg width=38 height=38 viewBox="0 0 72 72" fill=none style="margin: 17px;" xmlns=http://www.w3.org/2000/svg><path d="M22.96.04C25.35 0 27.72.02 30.09 0c.14 2.8 1.14 5.67 3.18 7.65 2.04 2.03 4.93 2.96 7.73 3.28v7.38a19.26 19.26 0 01-10.6-3.48c-.02 5.36.01 10.7-.04 16.04a14.01 14.01 0 01-2.47 7.23 13.55 13.55 0 01-10.77 5.88A13.2 13.2 0 019.7 42.1a13.82 13.82 0 01-6.65-10.47c-.04-.92-.06-1.84-.02-2.73a13.77 13.77 0 014.7-9.1 13.5 13.5 0 0111.21-3.16c.04 2.72-.07 5.43-.07 8.15a6.32 6.32 0 00-5.5.68 6.35 6.35 0 00-2.49 3.2c-.38.94-.27 1.97-.25 2.96.44 3 3.31 5.53 6.38 5.26a6.14 6.14 0 005.05-2.95c.34-.6.73-1.23.75-1.95.18-3.28.1-6.54.13-9.82.01-7.4-.02-14.76.03-22.13z" fill=#fff></path></svg>'],Q=['<svg width=38 height=38 viewBox="0 0 72 72" fill=none style="margin: 17px;"><g clip-path=url(#clip0)><path d="M30.976 15.93a17.366 17.366 0 0010.122 3.233v-7.25a10.26 10.26 0 01-2.126-.223v5.708a17.37 17.37 0 01-10.121-3.234v14.797c0 7.402-6.011 13.402-13.425 13.402-2.767 0-5.338-.834-7.474-2.267a13.395 13.395 0 009.599 4.033c7.415 0 13.426-6 13.426-13.403V15.93zM33.6 8.614a10.098 10.098 0 01-2.623-5.916v-.933h-2.014a10.151 10.151 0 004.637 6.85zM12.64 34.416a6.099 6.099 0 01-1.252-3.711c0-3.386 2.749-6.13 6.14-6.13.633 0 1.261.096 1.864.287v-7.413a13.565 13.565 0 00-2.125-.122v5.77a6.154 6.154 0 00-1.864-.288 6.129 6.129 0 00-2.763 11.607z" fill=#FF004F></path><path d="M28.85 14.164a17.37 17.37 0 0010.122 3.234V11.69a10.165 10.165 0 01-5.374-3.076 10.151 10.151 0 01-4.636-6.849H23.67v28.96a6.137 6.137 0 01-6.142 6.11 6.136 6.136 0 01-4.888-2.419 6.13 6.13 0 012.763-11.606c.65 0 1.276.1 1.863.287v-5.77c-7.284.15-13.142 6.092-13.142 13.399 0 3.648 1.46 6.955 3.827 9.37a13.378 13.378 0 007.474 2.268c7.414 0 13.425-6 13.425-13.403V14.164z" fill=#000></path><path d="M38.973 11.69v-1.543c-1.9.003-3.763-.528-5.374-1.533a10.154 10.154 0 005.374 3.076zM28.962 1.765a10.326 10.326 0 01-.111-.832V0h-7.306v28.96a6.136 6.136 0 01-6.141 6.11 6.125 6.125 0 01-2.763-.654 6.136 6.136 0 004.889 2.42 6.137 6.137 0 006.14-6.11V1.766h5.292zM17.268 17.327v-1.643a13.576 13.576 0 00-1.842-.125C8.01 15.56 2 21.56 2 28.961c0 4.64 2.362 8.73 5.952 11.135a13.345 13.345 0 01-3.826-9.37c0-7.307 5.858-13.249 13.142-13.4z" fill=#00F2EA></path></g><defs><clipPath id=clip0><path fill=#fff d="M0 0h44v44H0z"></path></clipPath></defs></svg>'],R=0;function S(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;b.o=null;b.B=null;b.j=null;b.D=null;b.A=null;b.H=T();b.C=775.25;b.F=function(c){for(var d=b.h,e=["width","height","position","opacity","pointer-events"],f=0;f<e.length;f++)O(d,e[f],null);b.h.removeAttribute("aria-hidden");b.h.title=b.element.title||"TikTok";b.h.classList.remove("i-amphtml-tiktok-unresolved");b.h.classList.add("i-amphtml-tiktok-centered");b.forceChangeHeight(c)};b.I=C(b.win,(function(c){b.F(c)}));return b}var U=AMP.BaseElement;S.prototype=l(U.prototype);S.prototype.constructor=S;if(u)u(S,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var W=Object.getOwnPropertyDescriptor(U,V);W&&Object.defineProperty(S,V,W)}else S[V]=U[V];S.J=U.prototype;S.createLoaderLogoCallback=function(a){var b=a.ownerDocument||a;K&&K.ownerDocument===b||(K=b.createElement("div"));/^[\w-]+$/.test("placeholder");return x(a,"> [placeholder]")?{color:"#FFFFFF",content:L(P)}:{color:"#FFFFFF",content:L(Q)}};k=S.prototype;k.preconnectCallback=function(a){D(this.win,"preconnect").url(this.getAmpDoc(),"https://www.tiktok.com",a)};k.buildCallback=function(){var a=this.element.dataset.src;if(a)this.o=a.replace(/^((.+\/)?)(\d+)\/?$/,"$3"),this.j=this.o===a?null:a;else if(a=this.element,/^[\w-]+$/.test("blockquote"),(a=x(a,"> blockquote"))&&a.hasAttribute("placeholder")&&a.dataset.videoId){var b;this.o=null==a?void 0:null==(b=a.dataset)?void 0:b.videoId;var c;this.j=null==a?void 0:null==(c=a.dataset)?void 0:c.cite}};k.layoutCallback=function(){var a=this,b=this.element.dataset;b=void 0===b.locale?"en-US":b.locale;b="https://www.tiktok.com/embed/v2/"+encodeURIComponent(this.o)+"?lang="+encodeURIComponent(b);var c=y(this.element.ownerDocument,"iframe",{src:b,name:this.H,"aria-hidden":"true",frameborder:"0","class":"i-amphtml-tiktok-unresolved"});this.h=c;this.B=J(this.win,this.G.bind(this));b=new v;var d=b.promise;this.A=b.resolve;Promise.resolve(this.D).then((function(e){if(null==e?0:e.title)c.title="TikTok: "+e.title}));this.element.appendChild(c);return this.loadPromise(c).then((function(){E(a.win,"timer").timeoutPromise(1e3,d).catch((function(){a.F(a.C);var g,e=a.h,f={width:"325px",height:a.C+"px"};for(g in f)O(e,g,f[g])}))}))};k.G=function(a){if("https://www.tiktok.com"==a.origin&&a.source==this.h.contentWindow){try{var b=JSON.parse(a.data)}catch(d){b=null}if(b&&b.height){this.A&&this.A();this.I(b.height);a=this.h;b={width:b.width+"px",height:b.height+"px"};for(var c in b)O(a,c,b[c])}}};k.createPlaceholderCallback=function(){var a=this;if(this.j){var b=y(this.element.ownerDocument,"div",{placeholder:""}),c=y(this.element.ownerDocument,"div",{"class":"i-amphtml-tiktok-placeholder-image-container"}),d=encodeURIComponent(this.j);this.D=D(this.win,"xhr").fetchJson("https://www.tiktok.com/oembed?url="+d).then((function(e){return e.json()})).then((function(e){var f=e.thumbnail_url;if(f){var g=y(a.element.ownerDocument,"img",{src:f,placeholder:f,"class":"i-amphtml-tiktok-centered i-amphtml-tiktok-placeholder-image"});b.parentElement&&(c.appendChild(g),b.appendChild(c))}return e}));return b}};k.unlayoutCallback=function(){if(this.h){var b,a=this.h;null==(b=a.parentElement)||b.removeChild(a);this.h=null}this.B&&this.B();return!0};k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};function T(){for(var a=(R++).toString();17>a.length;)a="0"+a;return"__tt_embed__v"+a}AMP.registerElement("amp-tiktok",S,".i-amphtml-tiktok-centered{height:100%;left:50%;width:325px;transform:translateX(-50%);position:absolute}.i-amphtml-tiktok-unresolved{position:fixed;opacity:0;pointer-events:none;width:325px;height:1000px}.i-amphtml-tiktok-placeholder-image{height:578px;top:1px;border-radius:8px 8px 0px 0px}.i-amphtml-tiktok-placeholder-image-container{height:100%;background:hsla(0,0%,86%,0.6)}\n/*# sourceURL=/extensions/amp-tiktok/0.1/amp-tiktok.css*/")}});//# sourceMappingURL=amp-tiktok-0.1.js.map