(self.AMP=self.AMP||[]).push({m:0,v:"2111192320000",n:"amp-loader",ev:"0.1",l:true,f:function(AMP,_){"use strict";var h=/^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;function k(a){return"AMP-VIDEO"==a?!1:h.test(a)}var l;function m(a){var b=a.ownerDocument||a;l&&l.ownerDocument===b||(l=b.createElement("div"));return n}function n(a){var b=l;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}var p,q="Webkit webkit Moz moz ms O o".split(" ");function r(a,b,c){if(b.startsWith("--"))return b;p||(p=Object.create(null));var d=p[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<q.length;f++){var g=q[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var t=e;void 0!==a[t]&&(d=t)}c||(p[b]=d)}return d}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var u=self.AMP_CONFIG||{},v=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function w(a){if(self.document&&self.document.head&&(!self.location||!v.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||w("runtime-host");u.geoApiUrl||w("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};function x(a,b){var c=a.getHeadNode(),d=y(c,z(c));if(b){var e=a.getRootNode();if(A(e,d))b(d);else var f=setInterval((function(){A(e,d)&&(clearInterval(f),b(d))}),4)}}function y(a,b){var c=a.__AMP_CSS_SM;c||(c=a.__AMP_CSS_SM=Object.create(null));var d=B(a,c,"amp-extension=amp-loader");if(d)return"STYLE"==d.tagName&&d.textContent!==b&&(d.textContent=b),d;var e=(a.ownerDocument||a).createElement("style");e.textContent=b;e.setAttribute("amp-extension","amp-loader");b=B(a,c,"amp-runtime");(b=void 0===b?null:b)?a.insertBefore(e,b.nextSibling):a.insertBefore(e,a.firstChild);return c["amp-extension=amp-loader"]=e}function B(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"], link["+c+"]"))?b[c]=a:null}function z(a){return(a=a.__AMP_CSS_TR)?a(".i-amphtml-loader-background{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#f8f8f8}.i-amphtml-new-loader{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;color:#aaa}.i-amphtml-new-loader-size-default,.i-amphtml-new-loader-size-small{width:72px;height:72px}.i-amphtml-new-loader-logo{transform-origin:center;opacity:0;animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-logo{display:none}.i-amphtml-new-loader-logo-default{fill:currentColor;animation:i-amphtml-new-loader-fade-out 0.8s ease-out forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-has-shim{color:#fff!important}.i-amphtml-new-loader-shim{width:72px;height:72px;border-radius:50%;display:none;transform-origin:center;opacity:0;background-color:rgba(0,0,0,0.6);animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-shim{width:48px;height:48px;margin:12px}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-shim{display:initial}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-logo-default{display:none}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-transparent-on-shim{fill:transparent!important}.i-amphtml-new-loader-logo,.i-amphtml-new-loader-shim,.i-amphtml-new-loader-spinner-wrapper{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-new-loader-spinner-wrapper{margin:12px}.i-amphtml-new-loader-spinner{stroke:currentColor;stroke-width:1.5px;opacity:0;animation:i-amphtml-new-loader-fade-in 0.8s ease-in forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-spinner-path{animation:frame-position-first-spin 0.6s steps(30),frame-position-infinite-spin 1.2s steps(59) infinite;animation-delay:2.8s,3.4s;animation-delay:calc(2.8s - var(--loader-delay-offset)),calc(3.4s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner{transform:scale(0.54545);stroke-width:2.75px}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner-path{animation-delay:1.4s,2s;animation-delay:calc(1.4s - var(--loader-delay-offset)),calc(2s - var(--loader-delay-offset))}.i-amphtml-new-loader *{animation-play-state:paused}.amp-active>.i-amphtml-new-loader *{animation-play-state:running}.i-amphtml-new-loader-ad-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.i-amphtml-new-loader-ad-label{all:initial!important;display:inline-block!important;padding:0 0.4ch!important;border:1px solid!important;border-radius:2px!important;color:currentColor!important;font-size:11px!important;font-family:sans-serif!important;line-height:1.1!important;visibility:inherit!important}@keyframes i-amphtml-new-loader-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-new-loader-fade-out{0%{opacity:1}to{opacity:0}}@keyframes i-amphtml-new-loader-scale-and-fade-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1)}to{opacity:1}}@keyframes frame-position-first-spin{0%{transform:translateX(0)}to{transform:translateX(-1440px)}}@keyframes frame-position-infinite-spin{0%{transform:translateX(-1440px)}to{transform:translateX(-4272px)}}\n/*# sourceURL=/extensions/amp-loader/0.1/amp-loader.css*/"):".i-amphtml-loader-background{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#f8f8f8}.i-amphtml-new-loader{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;color:#aaa}.i-amphtml-new-loader-size-default,.i-amphtml-new-loader-size-small{width:72px;height:72px}.i-amphtml-new-loader-logo{transform-origin:center;opacity:0;animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-logo{display:none}.i-amphtml-new-loader-logo-default{fill:currentColor;animation:i-amphtml-new-loader-fade-out 0.8s ease-out forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-has-shim{color:#fff!important}.i-amphtml-new-loader-shim{width:72px;height:72px;border-radius:50%;display:none;transform-origin:center;opacity:0;background-color:rgba(0,0,0,0.6);animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-shim{width:48px;height:48px;margin:12px}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-shim{display:initial}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-logo-default{display:none}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-transparent-on-shim{fill:transparent!important}.i-amphtml-new-loader-logo,.i-amphtml-new-loader-shim,.i-amphtml-new-loader-spinner-wrapper{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-new-loader-spinner-wrapper{margin:12px}.i-amphtml-new-loader-spinner{stroke:currentColor;stroke-width:1.5px;opacity:0;animation:i-amphtml-new-loader-fade-in 0.8s ease-in forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-spinner-path{animation:frame-position-first-spin 0.6s steps(30),frame-position-infinite-spin 1.2s steps(59) infinite;animation-delay:2.8s,3.4s;animation-delay:calc(2.8s - var(--loader-delay-offset)),calc(3.4s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner{transform:scale(0.54545);stroke-width:2.75px}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner-path{animation-delay:1.4s,2s;animation-delay:calc(1.4s - var(--loader-delay-offset)),calc(2s - var(--loader-delay-offset))}.i-amphtml-new-loader *{animation-play-state:paused}.amp-active>.i-amphtml-new-loader *{animation-play-state:running}.i-amphtml-new-loader-ad-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.i-amphtml-new-loader-ad-label{all:initial!important;display:inline-block!important;padding:0 0.4ch!important;border:1px solid!important;border-radius:2px!important;color:currentColor!important;font-size:11px!important;font-family:sans-serif!important;line-height:1.1!important;visibility:inherit!important}@keyframes i-amphtml-new-loader-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-new-loader-fade-out{0%{opacity:1}to{opacity:0}}@keyframes i-amphtml-new-loader-scale-and-fade-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1)}to{opacity:1}}@keyframes frame-position-first-spin{0%{transform:translateX(0)}to{transform:translateX(-1440px)}}@keyframes frame-position-infinite-spin{0%{transform:translateX(-1440px)}to{transform:translateX(-4272px)}}\n/*# sourceURL=/extensions/amp-loader/0.1/amp-loader.css*/"}function A(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++)if(c[a].ownerNode==b)return!0;return!1}var C=['<div class=i-amphtml-new-loader-spinner-wrapper><svg class=i-amphtml-new-loader-spinner viewBox="0 0 48 48"><path class=i-amphtml-new-loader-spinner-path fill=none d="M24 2a22 22 0 10.01 0m33.27 5.65a22 22 0 102.74-2.1m46.13 1.35a22 22 0 105.96-3.44m42.96 2.74a22 22 0 109.49-3.93m39.46 3.28a22 22 0 1013.13-3.52M253 4.95a22 22 0 1016.69-2.2m32.32 1.65a22 22 0 1019.98 0m29.06-.5a22 22 0 1022.79 3m26.28-3.44a22 22 0 1024.98 6.69m24.1-7.07a22 22 0 1026.4 10.94m22.71-11.27a22 22 0 1026.94 15.56m22.18-15.83a22 22 0 1026.54 20.37m22.59-20.58a22 22 0 1025.17 25.17M645.7 2.12a22 22 0 1022.84 29.76m26.31-29.85a22 22 0 1019.6 33.95M744 2a22 22 0 1015.56 37.56m33.59-37.53a22 22 0 1010.83 40.42M842.3 2.12a22 22 0 105.58 42.42m43.56-42.27a22 22 0 100 43.46m49.13-43.25a22 22 0 10-5.73 43.49m54.85-43.22a22 22 0 10-11.39 42.5m60.5-42.17a22 22 0 00-16.79 40.53m65.87-40.15a22 22 0 00-21.73 37.64m70.8-37.2a22 22 0 00-26.05 33.94m75.09-33.44a22 22 0 00-29.59 29.59M1235 4.95a22 22 0 00-32.25 24.75m81.23-24.15a22 22 0 00-33.95 19.6m82.9-18.95a22 22 0 00-34.66 14.36m83.58-13.66a22 22 0 00-34.38 9.21m83.25-8.46a22 22 0 00-33.17 4.37m82.01-3.58a22 22 0 00-31.11 0m81.35 2.63a22 22 0 00-32.52-3.42m82.32 6.36a22 22 0 00-33.45-7.11m82.77 10.3a22 22 0 00-33.85-11m82.66 14.36a22 22 0 00-33.71-15.01M1726 24a22 22 0 00-33-19.05m80.73 22.49a22 22 0 00-31.72-23.04m78.91 26.4a22 22 0 00-29.87-26.9m76.55 30.09a22 22 0 00-27.49-30.53m73.69 33.47a22 22 0 00-24.6-33.85m70.36 36.48a22 22 0 00-21.25-36.81m66.62 39.05a22 22 0 00-17.51-39.32m62.57 41.12a22 22 0 00-13.43-41.33m58.24 42.65a22 22 0 00-9.1-42.8m53.74 43.61a22 22 0 00-4.59-43.7M2184 46a22 22 0 100-44m44.56 43.73a22 22 0 104.59-43.7m40.05 42.89a22 22 0 109.1-42.8m35.71 41.48a22 22 0 1013.43-41.33m31.63 39.53a22 22 0 1017.51-39.32m27.86 37.08a22 22 0 1021.25-36.81m24.51 34.18a22 22 0 1024.6-33.85m21.6 30.91a22 22 0 1027.49-30.53m19.19 27.34a22 22 0 1029.87-26.9m17.32 23.54a22 22 0 1031.72-23.04M2642 24a22 22 0 1033-19.05m15.27 15.61a22 22 0 1033.71-15.01m15.1 11.65a22 22 0 1033.85-11m15.47 7.81a22 22 0 1033.45-7.11m16.35 4.17a22 22 0 1032.52-3.42m17.72.79a22 22 0 1031.11 0m17.73-.79a22 22 0 1032.52 3.42m16.35-4.17a22 22 0 1033.45 7.11m15.47-7.81a22 22 0 1033.85 11m15.1-11.65a22 22 0 1033.71 15.01M3133 4.95A22 22 0 103166 24m16.01-19.6a22 22 0 1031.72 23.04m17.32-23.54a22 22 0 1029.87 26.9m19.2-27.34a22 22 0 1027.49 30.53m21.59-30.91a22 22 0 1024.6 33.85m24.51-34.18a22 22 0 1021.25 36.81m27.87-37.08a22 22 0 1017.51 39.32m31.62-39.53a22 22 0 1013.43 41.33m35.71-41.48a22 22 0 109.1 42.8m40.05-42.89a22 22 0 104.59 43.7M3624 2a22 22 0 100 44m49.15-43.97a22 22 0 00-4.59 43.7m53.74-43.61a22 22 0 00-9.1 42.8m58.24-42.65a22 22 0 00-13.43 41.33m62.56-41.12a22 22 0 00-17.51 39.32m66.63-39.05a22 22 0 00-21.25 36.81m70.36-36.48a22 22 0 00-24.6 33.85m73.68-33.47a22 22 0 00-27.49 30.53m76.56-30.09a22 22 0 00-29.87 26.9m78.91-26.4a22 22 0 00-31.72 23.04M4115 4.95A22 22 0 004082 24m81.98-18.45a22 22 0 00-33.71 15.01m82.66-14.36a22 22 0 00-33.85 11m82.77-10.3a22 22 0 00-33.45 7.11m82.32-6.36a22 22 0 00-32.52 3.42"></path></svg></div>'],D=["<div class=i-amphtml-new-loader><div class=i-amphtml-new-loader-shim></div><div class=i-amphtml-new-loader-logo></div></div>"],E=['<svg viewBox="0 0 72 72"><path class=i-amphtml-new-loader-white-on-shim fill=currentColor d=M41,34.5V31c0-0.5-0.4-1-1-1H27c-0.5,0-1,0.5-1,1v10c0,0.6,0.5,1,1,1h13c0.6,0,1-0.4,1-1v-3.5l5,4v-11L41,34.5z></path></svg>'],F=['<svg class=i-amphtml-new-loader-logo-default viewBox="0 0 72 72"><circle cx=36 cy=36 r=12></circle></svg>'],G=["<div class=i-amphtml-new-loader-ad-logo><span class=i-amphtml-new-loader-ad-label>Ad</span></div>"],H={"AMP-IMG":!0,"AMP-ANIM":!0,"AMP-PINTEREST":!0,"AMP-INSTAGRAM":!0,"AMP-GOOGLE-DOCUMENT-EMBED":!0},I=null;function J(a,b,c,d){this.h=a;this.B=b;this.A=c;this.o=d;this.j=null}J.prototype.build=function(){if(!I){var a=m(this.h);I=a(D);I.appendChild(a(C))}this.j=I.cloneNode(!0);this.B.appendChild(this.j);a=!!this.h.getPlaceholder();var b=this.h.hasAttribute("poster");if(a=!(a||b))a=this.h.tagName,a=H[a]||k(a);a&&this.B.classList.add("i-amphtml-loader-background");if(a=!(50>this.A||50>this.o))a=this.h.getPlaceholder(),a=!(a&&a.classList.contains("i-amphtml-blurry-placeholder"));if(a&&("AMP-AD"==this.h.tagName?this.j.classList.add("i-amphtml-new-loader-size-default"):50>this.A||50>this.o||!(100>=this.A||100>=this.o)?this.j.classList.add("i-amphtml-new-loader-size-default"):this.j.classList.add("i-amphtml-new-loader-size-small"),a=this.h.hasAttribute("poster")?!0:(a=this.h.getPlaceholder())?"AMP-IMG"==a.tagName||"IMG"==a.tagName?!0:!1:!1,a&&this.j.classList.add("i-amphtml-new-loader-has-shim"),b="AMP-AD"==this.h.tagName?{content:m(this.h)(G)}:k(this.h.tagName)?{content:m(this.h)(E)}:this.h.createLoaderLogo(),a=b.color,b=void 0===b.content?m(this.h)(F):b.content,this.j.querySelector(".i-amphtml-new-loader-logo").appendChild(b),a)){b=this.j;var c=r(b.style,"color",void 0);c&&(c.startsWith("--")?b.style.setProperty(c,a):b.style[c]=a)}};function K(){}K.prototype.initializeLoader=function(a,b,c,d,e){var f=Math.min(c,600);new J(a,b,d,e).build();d={"--loader-delay-offset":f+"ms"};a=a.style;for(var g in d)a.setProperty(r(a,g),String(d[g]),"important")};AMP.registerServiceForDoc("loader",K);(function(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.extensions;a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj})(AMP.win).addDocFactory((function(a){x(a,(function(){}))}))}});//# sourceMappingURL=amp-loader-0.1.js.map