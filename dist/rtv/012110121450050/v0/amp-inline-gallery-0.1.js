(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-inline-gallery",ev:"0.1",l:true,f:function(AMP,_){"use strict";function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var da={a:!0},q={};try{q.__proto__=da;p=q.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=n;function t(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(r)r(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}function u(a){return a?Array.prototype.slice.call(a):[]}var v=Array.isArray;function w(a){return a||{}}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var x;function y(a){try{var b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(f){return!1}}function z(a,b){a.classList.add("i-amphtml-scoped");var c=b.replace(/^|,/g,"$&.i-amphtml-scoped "),d=a.querySelectorAll(c);a.classList.remove("i-amphtml-scoped");return d}function A(a,b){if(void 0!==x?x:x=y(a))return a.querySelector(b.replace(/^|,/g,"$&:scope "));var c=z(a,b);return void 0===c[0]?null:c[0]}function B(a,b){return(void 0!==x?x:x=y(a))?a.querySelectorAll(b.replace(/^|,/g,"$&:scope ")):z(a,b)}function C(a,b){var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return c?c.call(a,b):!1}function ea(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function fa(a){return a.closest?a.closest("amp-inline-gallery"):ea(a,(function(b){return C(b,"amp-inline-gallery")}))}function D(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function E(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}var F=self.AMP_CONFIG||{},ia=("string"==typeof F.cdnProxyRegex?new RegExp(F.cdnProxyRegex):F.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function G(a){if(self.document&&self.document.head&&(!self.location||!ia.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}F.cdnUrl||G("runtime-host");F.geoApiUrl||G("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var H=self.__AMP_LOG;function I(){throw Error("failed to call initLogConstructor")}function J(a){H.user||(H.user=I());H.user.assert(a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function K(a,b){var c={detail:b};Object.assign(c,{bubbles:!0});if("function"==typeof a.CustomEvent)return new a.CustomEvent("amp-inline-gallery:go-to-slide",c);a=a.document.createEvent("CustomEvent");a.initCustomEvent("amp-inline-gallery:go-to-slide",!!c.bubbles,!!c.cancelable,b);return a}var L;function M(a){var b=a.ownerDocument||a;L&&L.ownerDocument===b||(L=b.createElement("div"));return ja}function ja(a){var b=L;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}var N,O="Webkit webkit Moz moz ms O o".split(" ");function P(a,b,c){if(b.startsWith("--"))return b;N||(N=Object.create(null));var d=N[b];if(!d||c){d=b;if(void 0===a[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var e=0;e<O.length;e++){var g=O[e]+f;if(void 0!==a[g]){f=g;break a}}f=""}var h=f;void 0!==a[h]&&(d=h)}c||(N[b]=d)}return d}function Q(a,b){a=a.style;for(var c in b)a.setProperty(P(a,c),String(b[c]),"important")}function ka(a,b){var c=P(a.style,"padding-right",void 0);if(c){var d=b+"%";c.startsWith("--")?a.style.setProperty(c,d):a.style[c]=d}}var la=["<div class=i-amphtml-inline-gallery-pagination-container aria-hidden=true><div class=i-amphtml-inline-gallery-pagination-dots hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div></div><div class=i-amphtml-inline-gallery-pagination-numbers hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div><div class=i-amphtml-inline-gallery-pagination-count><span class=i-amphtml-inline-gallery-pagination-index></span> <span>/ </span><span class=i-amphtml-inline-gallery-pagination-total></span></div></div></div>"],ma=["<div class=i-amphtml-inline-gallery-pagination-dot-container><div class=i-amphtml-inline-gallery-pagination-dot><div class=i-amphtml-inline-gallery-pagination-dot-progress></div></div></div>"];function R(a){a=AMP.BaseElement.call(this,a)||this;a.A=0;a.G=null;a.j=null;a.C=null;a.B=null;a.D=null;return a}t(R,AMP.BaseElement);R.prerenderAllowed=function(){return!0};R.prototype.isLayoutSupported=function(a){return"fixed-height"==a};R.prototype.buildCallback=function(){this.element.appendChild(this.o());this.j=this.element.querySelector(".i-amphtml-inline-gallery-pagination-dots");this.C=this.element.querySelector(".i-amphtml-inline-gallery-pagination-numbers");this.B=this.element.querySelector(".i-amphtml-inline-gallery-pagination-index");this.D=this.element.querySelector(".i-amphtml-inline-gallery-pagination-total")};R.prototype.o=function(){return M(this.element)(la)};function na(a,b){var c=M(a.element)(ma);c.onclick=function(){var d=K(a.win,w({index:b}));a.element.dispatchEvent(d)};return c}function S(a){return u(B(a.j,"> .i-amphtml-inline-gallery-pagination-dot-container"))}function oa(a,b,c){S(a).forEach((function(d,f){Q(d,{"--percentage-falloff":Math.max(0,1-1/Math.pow(Math.max(1-Math.abs(f-(b+c)),0),-.5))});0==c&&d.setAttribute("i-amphtml-inline-gallery-pagination-dot-active",f===b)}))}R.prototype.updateProgress=function(a,b,c){var d=this;this.mutateElement((function(){if(a!=d.A){var f=8>=a,e=f?a:0;if(a!==d.A||f!==d.G){d.A=a;d.G=f;d.j.hidden=!f;d.C.hidden=f;d.D.textContent=a;f=S(d);for(var g=e;g<f.length;g++)d.j.removeChild(f[g]);for(f=f.length;f<e;f++)d.j.appendChild(na(d,f))}}oa(d,b,c);d.B.textContent=b+1}))};function pa(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.extensions;a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function T(a){if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;var c,d,f,e=Object.assign({},null!=(d=a.AMP_CONFIG)?d:{},null!=(f=a.AMP_EXP)?f:JSON.parse((null==(c=a.__AMP_EXP)?void 0:c.textContent)||"{}"));for(h in e)c=e[h],"number"===typeof c&&0<=c&&1>=c&&(b[h]=Math.random()<c);var g;e=null==(g=a.AMP_CONFIG)?void 0:g["allow-doc-opt-in"];if(v(e)&&e.length&&(g=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=g.getAttribute("content").split(",");var h=m(g);for(g=h.next();!g.done;g=h.next())g=g.value,e.includes(g)&&(b[g]=!0)}g=Object;e=g.assign;h="";try{"localStorage"in a&&(h=a.localStorage.getItem("amp-experiment-toggles"))}catch(xa){(H.dev||(H.dev=I())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var k;h=(null==(k=h)?void 0:k.split(/\s*,\s*/g))||[];k=Object.create(null);h=m(h);for(c=h.next();!c.done;c=h.next())(c=c.value)&&("-"==c[0]?k[c.substr(1)]=!1:k[c]=!0);e.call(g,b,k);var l;k=null==(l=a.AMP_CONFIG)?void 0:l["allow-url-opt-in"];if(v(k)&&k.length){l=a.location.originalHash||a.location.hash;a=Object.create(null);if(l)for(;e=ha.exec(l);)g=E(e[1],e[1]),e=e[2]?E(e[2].replace(/\+/g," "),e[2]):"",a[g]=e;l=m(k);for(g=l.next();!g.done;g=l.next())k=g.value,g=a["e-"+k],"1"==g&&(b[k]=!0),"0"==g&&(b[k]=!1)}}return!!b["amp-inline-gallery-captions"]}function U(a){return AMP.BaseElement.call(this,a)||this}t(U,AMP.BaseElement);U.prototype.isRelayoutNeeded=function(){return!0};U.prototype.isLayoutSupported=function(a){J(T(this.win)||'expected "amp-inline-gallery-captions" experiment to be enabled');return D(a)};U.prototype.layoutCallback=function(){var a=this.getLayoutBox().height,b=fa(this.element);Q(b,{"--i-amphtml-caption-height":a+"px"})};U.prototype.updateProgress=function(a,b,c,d){this.mutateElement((function(){qa(d,b,c)}))};function qa(a,b,c){a.forEach((function(d,f){var e=Math.max(0,1-1/Math.pow(Math.min(2*Math.abs(b+c-f),1),-1/3));Q(d,{"--caption-opacity":e,"pointer-events":0==e?"none":"all"})}))}function V(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)}var ra=["<figure class=i-amphtml-inline-gallery-slide-container><div class=i-amphtml-inline-gallery-slide-content-slot></div><figcaption class=i-amphtml-inline-gallery-slide-caption><amp-truncate-text layout=fill><span class=i-amphtml-inline-gallery-slide-caption-slot></span> <button class=i-amphtml-inline-gallery-slide-see-more slot=collapsed>See more</button><div class=i-amphtml-inline-gallery-slide-persistent-slot slot=persistent></div></amp-truncate-text></figcaption></figure>"];function W(a){return AMP.BaseElement.call(this,a)||this}t(W,AMP.BaseElement);W.prototype.o=function(){var a=this;J(T(this.win)||'expected "amp-inline-gallery-captions" experiment to be enabled');var b=M(this.element)(ra);b.querySelector('[slot="collapsed"]').addEventListener("click",(function(c){a.openLightbox();c.stopPropagation()}));return b};W.prototype.openLightbox=function(){var a=this;pa(this.win).installExtensionForDoc(this.getAmpDoc(),"amp-lightbox-gallery").then((function(){return document.querySelector("amp-lightbox-gallery").getImpl()})).then((function(b){b.open(a.element,!0)}))};W.prototype.isLayoutSupported=function(){return"flex-item"};W.prototype.buildCallback=function(){var a=this.o(),b=a.querySelector(".i-amphtml-inline-gallery-slide-caption-slot"),c=a.querySelector(".i-amphtml-inline-gallery-slide-content-slot"),d=a.querySelector(".i-amphtml-inline-gallery-slide-persistent-slot"),f=u(this.element.childNodes);f.filter((function(e){return e.hasAttribute&&"caption"===e.getAttribute("slot")})).forEach((function(e){return b.appendChild(e)}));f.filter((function(e){return!e.hasAttribute||!e.hasAttribute("slot")})).forEach((function(e){return c.appendChild(e)}));f.filter((function(e){return e.hasAttribute&&"attribution"===e.getAttribute("slot")})).forEach((function(e){return d.appendChild(e)}));this.element.appendChild(a)};var sa=["<div class=i-amphtml-inline-gallery-thumbnails-container><div class=i-amphtml-inline-gallery-thumbnails-thumbnail><div class=i-amphtml-inline-gallery-thumbnails-resizer></div></div></div>"],ta=['<amp-base-carousel layout=fill loop=true mixed-length=true snap=false snap-align=center controls="(pointer: fine) always, never" aria-hidden=true></amp-base-carousel>'];function X(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.F=null;return a}t(X,AMP.BaseElement);X.prerenderAllowed=function(){return!0};X.prototype.isLayoutSupported=function(a){return D(a)};X.prototype.buildCallback=function(){var a=Number(this.element.getAttribute("aspect-ratio-width"))||0,b=Number(this.element.getAttribute("aspect-ratio-height"))||0;a&&b&&(this.F=a/b);this.element.addEventListener("amp-carousel:offsetchange",(function(c){c.stopPropagation()}));this.element.addEventListener("amp-carousel:indexchange",(function(c){c.stopPropagation()}))};X.prototype.setSlides=function(a){var b=this,c=a.map((function(d,f){return ua(b,d,f)}));this.mutateElement((function(){b.h&&b.element.removeChild(b.h);b.h=M(b.element)(ta);for(var d=m(c),f=d.next();!f.done;f=d.next())b.h.appendChild(f.value);d=b.element;f=b.h;var e=["loop"];e=v(e)?e:[e];e=m(e);for(var g=e.next();!g.done;g=e.next()){g=g.value;var h=d.getAttribute(g);null!==h&&f.setAttribute(g,h)}b.element.appendChild(b.h)}))};function ua(a,b,c){var d=M(a.element)(sa),f=b.offsetWidth/b.offsetHeight,e=a.F||f||1;ka(d.querySelector(".i-amphtml-inline-gallery-thumbnails-resizer"),100*e);d.querySelector(".i-amphtml-inline-gallery-thumbnails-thumbnail").appendChild(va(b));d.onclick=function(){a.element.dispatchEvent(K(a.win,w({index:c})));a.h.getImpl().then((function(g){g.goToSlide(c,{smoothScroll:!0})}))};return d}function va(a){a=C(a,"amp-img, img")?a:A(a,"> amp-img, > img");if(!a)return a=document.createElement("div"),a.className="i-amphtml-inline-gallery-thumbnails-default",a;var b=document.createElement("amp-img");b.className="i-amphtml-inline-gallery-thumbnails-image";b.setAttribute("layout","fill");var c=a.getAttribute("src");c&&b.setAttribute("src",c);var d=a.getAttribute("srcset");d&&b.setAttribute("srcset",d);var f=a.getAttribute("sizes");f&&b.setAttribute("sizes",f);return b}function Y(a){return AMP.BaseElement.call(this,a)||this}t(Y,AMP.BaseElement);Y.prerenderAllowed=function(){return!0};Y.prototype.buildCallback=function(){var a=this;this.element.addEventListener("amp-carousel:offsetchange",(function(b){b=b.detail;Z(a,b.total,b.index,b.offset,b.slides)}));this.element.addEventListener("amp-carousel:indexchange",(function(b){b=b.detail;Z(a,b.total,b.index,0,b.slides)}));this.element.addEventListener("amp-inline-gallery:go-to-slide",(function(b){wa(a,b)}));Promise.all([A(this.element,"> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel").getImpl(),Promise.all(u(B(this.element,"amp-inline-gallery-thumbnails")).map((function(b){return b.getImpl()})))]).then((function(b){var c=b[1],d=b[0].getSlides();u(c).forEach((function(f){return f.setSlides(d)}))}))};Y.prototype.isLayoutSupported=function(a){return"container"===a};function Z(a,b,c,d,f){V(B(a.element,"amp-inline-gallery-pagination, amp-inline-gallery-captions"),(function(e){e.getImpl().then((function(g){g.updateProgress(b,c,d,f)}))}))}function wa(a,b){var c=b.detail.index;V(B(a.element,"> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel"),(function(d){d.getImpl().then((function(f){f.goToSlide(c,{smoothScroll:!0})}))}))}AMP.registerElement("amp-inline-gallery-captions",U,"amp-inline-gallery-captions{pointer-events:none;padding-top:var(--caption-margin-top);margin-top:calc(var(--i-amphtml-caption-height, 0)*-1)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-captions.css*/");AMP.registerElement("amp-inline-gallery-pagination",R,"amp-inline-gallery-pagination{font-size:12px;font-family:sans-serif;line-height:1}.i-amphtml-inline-gallery-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.i-amphtml-inline-gallery-pagination-dots{-ms-flex-item-align:center;align-self:center;z-index:0;-ms-flex-align:center;align-items:center;height:100%;max-width:60%}.i-amphtml-inline-gallery-pagination-dot-container,.i-amphtml-inline-gallery-pagination-dots{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-amphtml-inline-gallery-pagination-dot-container{z-index:1;width:16px;min-width:14px}.i-amphtml-inline-gallery-pagination-dot{position:relative;background-color:rgba(0,0,0,0.2)}.i-amphtml-inline-gallery-pagination-dot-progress{position:absolute;top:0;background-color:rgba(0,0,0,0.6);opacity:0;opacity:calc(1 - var(--percentage-falloff))}[i-amphtml-inline-gallery-pagination-dot-active=true] .i-amphtml-inline-gallery-pagination-dot-progress{opacity:1;opacity:calc(1 - var(--percentage-falloff))}.i-amphtml-inline-gallery-pagination-dot,.i-amphtml-inline-gallery-pagination-dot-progress{width:8px;height:8px;border-radius:50%}.i-amphtml-inline-gallery-pagination-numbers{position:relative;-ms-flex-item-align:end;align-self:flex-end;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px}.i-amphtml-inline-gallery-pagination-count{z-index:1}.i-amphtml-inline-gallery-pagination-dots[hidden],.i-amphtml-inline-gallery-pagination-numbers[hidden]{display:none}amp-inline-gallery-pagination[inset]:not(.i-amphtml-hidden-by-media-query){position:absolute!important;left:0;right:0;bottom:0;bottom:var(--i-amphtml-caption-height,0);display:-ms-flexbox!important;display:flex!important}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-container{margin:18px;height:20px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:12px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background{background-color:rgba(0,0,0,0.3)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dots{padding:0 4px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-numbers{color:#fff}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot{background-color:hsla(0,0%,100%,0.35)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot-progress{background-color:#fff}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.css*/");AMP.registerElement("amp-inline-gallery-slide",W,"amp-inline-gallery-slide{position:static!important;transform:none!important;will-change:auto!important}amp-inline-gallery-slide.i-amphtml-layout-size-defined{overflow:visible!important}.i-amphtml-inline-gallery-slide-container{width:100%;height:100%;margin:0}.i-amphtml-inline-gallery-slide-content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:calc(100% - var(--i-amphtml-caption-height, 0px));transform:var(--content-transform,translateZ(1px));will-change:transform;overflow:hidden}.i-amphtml-inline-gallery-slide-caption{position:absolute;left:6px;right:6px;margin-top:var(--caption-margin-top);height:var(--i-amphtml-caption-height,0);overflow:hidden;opacity:var(--caption-opacity)}.i-amphtml-inline-gallery-slide-see-more{float:right;padding:0 0 0 6px;border:0;color:#48f;background-color:transparent;outline:none;font-family:inherit;font-size:inherit;line-height:1.25em}.i-amphtml-inline-gallery-slide-persistent-slot{clear:both}.i-amphtml-inline-gallery-slide-content-slot>*{height:100%;width:100%}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-slide.css*/");AMP.registerElement("amp-inline-gallery-thumbnails",X,"amp-inline-gallery-thumbnails .i-amphtml-carousel-content{padding:0;padding:0 calc(var(--thumbnail-margin, 0)/2)}.i-amphtml-inline-gallery-thumbnails-container{box-sizing:border-box;width:auto!important;height:100%;-ms-flex-preferred-size:content;flex-basis:content;padding:0;padding:var(--thumbnail-margin,0) calc(var(--thumbnail-margin, 0)/2);-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.i-amphtml-inline-gallery-thumbnails-thumbnail{position:relative;width:auto;height:100%}.i-amphtml-inline-gallery-thumbnails-resizer{position:static;height:100%}.i-amphtml-inline-gallery-thumbnails-default,.i-amphtml-inline-gallery-thumbnails-image{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-inline-gallery-thumbnails-default{background-color:#999}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.css*/");AMP.registerElement("amp-inline-gallery",Y,"amp-inline-gallery{--i-amphtml-caption-height:0px}amp-inline-gallery>amp-base-carousel{padding-bottom:var(--i-amphtml-caption-height)}amp-inline-gallery .i-amphtml-base-carousel-arrow-next-slot,amp-inline-gallery .i-amphtml-base-carousel-arrow-prev-slot{margin-bottom:var(--i-amphtml-caption-height)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery.css*/")}});//# sourceMappingURL=amp-inline-gallery-0.1.js.map