(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-image-lightbox",ev:"0.1",l:true,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function da(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}da(this);"function"===typeof Symbol&&Symbol("x");var ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;function n(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.vb=b.prototype}var ka;function p(){return ka?ka:ka=Promise.resolve(void 0)}function la(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}var ma=Array.isArray;function na(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d);return c}function oa(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}function pa(a){return"string"==typeof a}function q(a,b,c,d){return function(e){return t(e,a,b,c,d)}}function t(a,b,c,d,e){a:{var f=a-0;if(0>=f)a=0;else if(1<=f)a=1;else{for(var h=0,k=1,l=0,m=0;8>m;m++){l=qa(f,b,d);var r=(qa(f+1e-6,b,d)-l)/1e-6;if(1e-6>Math.abs(l-a)){a=f;break a}if(1e-6>Math.abs(r))break;else l<a?h=f:k=f,f-=(l-a)/r}for(m=0;1e-6<Math.abs(l-a)&&8>m;m++)l<a?(h=f,f=(f+k)/2):(k=f,f=(f+h)/2),l=qa(f,b,d);a=f}}0==a?e=0:1==a?e=1:(b=v(0,c,a),c=v(c,e,a),e=v(e,1,a),b=v(b,c,a),c=v(c,e,a),e=v(b,c,a));return e}function qa(a,b,c){if(0==a)return 0;if(1==a)return 1;var d=v(0,b,a),e=v(b,c,a),f=v(c,1,a);d=v(d,e,a);e=v(e,f,a);return v(d,e,a)}function v(a,b,c){return a+c*(b-a)}var ra={linear:function(a){return a},ease:function(a){return t(a,.25,.1,.25,1)},"ease-in":function(a){return t(a,.42,0,1,1)},"ease-out":function(a){return t(a,0,0,.58,1)},"ease-in-out":function(a){return t(a,.42,0,.58,1)}};function sa(a){if(!a)return null;if(pa(a)){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return q(b[0],b[1],b[2],b[3])}return null}return ra[a]}return a}function ta(a){return 1==(null==a?void 0:a.nodeType)?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function ua(a,b,c,d){var e=void 0===c?"Assertion failed":c;if(b)return b;a&&-1==e.indexOf(a)&&(e+=a);for(var f=3,h=e.split("%s"),k=h.shift(),l=[k];h.length;){var m=arguments[f++],r=h.shift();k+=ta(m)+r;l.push(m,r.trim())}f=Error(k);f.messageArray=na(l,(function(fb){return""!==fb}));var u,wa;null==(wa=(u=self).__AMP_REPORT_ERROR)||wa.call(u,f);throw f}function w(a,b,c){return ua("​​​",a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var va;function xa(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ya(a){return a.closest?a.closest("figure"):xa(a,(function(b){var c=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector;return c?c.call(b,"figure"):!1}))}function x(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function za(a){return x(Number(a.left),Number(a.top),Number(a.width),Number(a.height))}function Aa(a,b){var c=Ba;c=ma(c)?c:[c];c=ba(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=a.getAttribute(d);null!==e&&b.setAttribute(d,e)}}var Ca=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Da(a){var b=a.getAttribute("srcset");if(b){a=[];for(var c;c=Ca.exec(b);){var d=c[1],e=void 0,f=void 0;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)f=parseFloat(c[2]);else continue}else f=1;a.push({url:d,width:e,dpr:f})}return new y(a)}var k=w(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a);return new y([{url:k,width:void 0,dpr:1}])}function y(a){w(0<a.length,"Srcset must have at least one source");this.qa=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}w(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?Ea:Fa);this.fb=b}y.prototype.select=function(a,b){if(this.fb){b*=a;a=this.qa;for(var c=0,d=1/0,e=1/0,f=0;f<a.length;f++){var h=a[f].width,k=Math.abs(h-b);if(k<=1.1*d||1.2<b/e)c=f,d=k,e=h;else break}b=c}else{a=this.qa;c=0;d=1/0;for(e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c}return this.qa[b].url};y.prototype.getUrls=function(){return this.qa.map((function(a){return a.url}))};y.prototype.stringify=function(a){for(var b=[],c=this.qa,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.fb?f+" "+e.width+"w":f+" "+e.dpr+"x";b.push(f)}return b.join(", ")};function Ea(a,b){w(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function Fa(a,b){w(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr}function Ga(a){for(var b=null,c="",d=ba(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function Ha(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];c=Ga.apply(null,c);c.name=a||c.name;var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,c)}var z,Ia="Webkit webkit Moz moz ms O o".split(" ");function Ja(a,b,c){var d=a.style;if(!b.startsWith("--")){z||(z=Object.create(null));var e=z[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<Ia.length;h++){var k=Ia[h]+f;if(void 0!==d[k]){f=k;break b}}f=""}void 0!==d[f]&&(e=f)}z[b]=e}b=e}b&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}function A(a,b){for(var c in b)Ja(a,c,b[c])}function Ka(a){var b=!0;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function La(a){return"number"==typeof a?a+"px":a}function Ma(a,b){return void 0===b||null===b?"translate("+La(a)+")":"translate("+La(a)+", "+La(b)+")"}function Na(a){var b=void 0===b?" ":b;return function(c,d){return a.map((function(e){return e(c,d)})).filter(pa).join(b)}}function B(a,b){return function(c,d){for(var e in b){var f=e;"display"===f&&Ha("STYLE","`display` style detected. You must use toggle instead.");Ja(a,f,b[e](c,d))}}}function C(a,b){return function(c){return a+(b-a)*c}}function Oa(a,b){var c;return function(d){return Ma(a(d),null==(c=b)?void 0:c(d))}}function Pa(a){return function(b){return"scale("+a(b)+")"}}function D(a,b,c){return Math.min(Math.max(a,b),c)}function Qa(a,b){return Math.sqrt(a*a+b*b)}var E=self.AMP_CONFIG||{},Ra=("string"==typeof E.cdnProxyRegex?new RegExp(E.cdnProxyRegex):E.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Sa(a){if(self.document&&self.document.head&&(!self.location||!Ra.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}E.cdnUrl||Sa("runtime-host");E.geoApiUrl||Sa("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var F=self.__AMP_LOG;function Ta(){throw Error("failed to call initLogConstructor")}function G(){return F.dev||(F.dev=Ta())}function Ua(a,b){F.user||(F.user=Ta());F.user.assert(a,"Unsupported element: %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function Va(a){var b=Wa(a);b=Xa(b);return I(b,"history")}function Wa(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Xa(a){a=Wa(a);return a.isSingleDoc()?a.win:a}function I(a,b){Ya(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Ya(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Za(){}function J(a){this.$=a;this.ca=H(self,"vsync");this.Va=null;this.K=[]}function $a(a,b,c){var d=ab;return new J(a).setCurve(d).add(0,b,1).start(c)}J.prototype.setCurve=function(a){a&&(this.Va=sa(a));return this};J.prototype.add=function(a,b,c,d){this.K.push({delay:a,func:b,duration:c,curve:sa(d)});return this};J.prototype.start=function(a){return new K(this.ca,this.$,this.K,this.Va,a)};function K(a,b,c,d,e){this.ca=a;this.$=b;this.K=[];for(b=0;b<c.length;b++){var f=c[b];this.K.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.jb=e;this.wa=Date.now();this.ba=!0;this.$a={};c=new la;this.na=c.promise;this.Pa=c.resolve;this.Oa=c.reject;this.bb=this.ca.createAnimTask(this.$,{mutate:this.tb.bind(this)});this.ca.canAnimate(this.$)?this.bb(this.$a):(G().warn("Animation","cannot animate"),L(this,!1,0))}K.prototype.then=function(a,b){return a||b?this.na.then(a,b):this.na};K.prototype.thenAlways=function(a){a=a||Za;return this.then(a,a)};K.prototype.halt=function(a){L(this,!1,a||0)};function L(a,b,c){if(a.ba){a.ba=!1;if(0!=c){1<a.K.length&&a.K.sort((function(e,f){return e.delay+e.duration-(f.delay+f.duration)}));try{if(0<c)for(c=0;c<a.K.length;c++)a.K[c].func(1,!0);else for(var d=a.K.length-1;0<=d;d--)a.K[d].func(0,!1)}catch(e){G().error("Animation","completion failed: "+e,e),b=!1}}b?a.Pa():a.Oa()}}K.prototype.tb=function(){if(this.ba){for(var a=Date.now(),b=Math.min((a-this.wa)/this.jb,1),c=0;c<this.K.length;c++){var d=this.K[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.K.length;c++)if(d=this.K[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){G().error("Animation","step curve failed: "+h,h);L(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){G().error("Animation","step mutate failed: "+h,h),L(this,!1,0)}}1==b?L(this,!0,0):this.ca.canAnimate(this.$)?this.bb(this.$a):(G().warn("Animation","cancel animation"),L(this,!1,0))}};var M;function bb(a){if(void 0!==M)return M;M=!1;try{var b={get passive(){M=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(c){}return M}function cb(a){var b;(b=a.complete||"complete"==a.readyState)||(b=("AUDIO"===a.tagName||"VIDEO"===a.tagName)&&0<a.readyState);return!!(b||a.document&&"complete"==a.document.readyState)}function db(){this.U=null}g=db.prototype;g.add=function(a){var b=this;this.U||(this.U=[]);this.U.push(a);return function(){b.remove(a)}};g.remove=function(a){if(this.U){var b=this.U;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};g.removeAll=function(){this.U&&(this.U.length=0)};g.fire=function(a){if(this.U)for(var b=ba(this.U),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.U)?void 0:a.length)?b:0};function N(a,b){var c=this;this.cb=I(a,"timer");this.kb=b;this.ib=0;this.oa=-1;this.Ma=0;this.ba=!1;this.gb=function(){c.ua()}}N.prototype.isPending=function(){return-1!=this.oa};N.prototype.schedule=function(a){a=a||this.ib;this.ba&&10>a&&(a=10);var b=Date.now()+a;return!this.isPending()||-10>b-this.Ma?(this.cancel(),this.Ma=b,this.oa=this.cb.delay(this.gb,a),!0):!1};N.prototype.ua=function(){this.oa=-1;this.Ma=0;this.ba=!0;this.kb();this.ba=!1};N.prototype.cancel=function(){this.isPending()&&(this.cb.cancel(this.oa),this.oa=-1)};function eb(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}function gb(a,b,c){this.X=a;this.D=[];this.ha=[];this.S=[];this.F=[];this.C=null;this.qb=b;this.rb=c;this.za=!1;this.ua=new N((a.ownerDocument||a).defaultView,this.Wa.bind(this));this.Za=new db;this.ma=Object.create(null);this.Ua=this.pb.bind(this);this.Sa=this.nb.bind(this);this.Ta=this.ob.bind(this);this.Ra=this.mb.bind(this);var d=bb(a.ownerDocument.defaultView);this.X.addEventListener("touchstart",this.Ua,d?{passive:!0}:!1);this.X.addEventListener("touchend",this.Sa);this.X.addEventListener("touchmove",this.Ta,d?{passive:!0}:!1);this.X.addEventListener("touchcancel",this.Ra);this.Na=!1}function hb(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new gb(a,b,c),a.__AMP_Gestures=d);return d}g=gb.prototype;g.cleanup=function(){this.X.removeEventListener("touchstart",this.Ua);this.X.removeEventListener("touchend",this.Sa);this.X.removeEventListener("touchmove",this.Ta);this.X.removeEventListener("touchcancel",this.Ra);delete this.X.__AMP_Gestures;this.ua.cancel()};g.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ma[d];e||(this.D.push(c),e=new db,this.ma[d]=e);return e.add(b)};g.removeGesture=function(a){var b=new a(this).getType();if(a=this.ma[b]){a.removeAll();a=oa(this.D,(function(c){return c.getType()==b}));if(0>a)return!1;this.D.splice(a,1);this.S.splice(a,1);this.F.splice(a,1);this.ha.splice(a,1);delete this.ma[b];return!0}return!1};g.onPointerDown=function(a){return this.Za.add(a)};g.pb=function(a){var b=Date.now();this.za=!1;this.Za.fire(a);for(var c=0;c<this.D.length;c++)if(!this.S[c]&&(this.F[c]&&this.F[c]<b&&O(this,c),this.D[c].onTouchStart(a))){var d=c;this.ha[d]=!0;this.F[d]=0}P(this,a)};g.ob=function(a){for(var b=Date.now(),c=0;c<this.D.length;c++)this.ha[c]&&(this.F[c]&&this.F[c]<b?O(this,c):this.D[c].onTouchMove(a)||O(this,c));P(this,a)};g.nb=function(a){for(var b=Date.now(),c=0;c<this.D.length;c++)if(this.ha[c])if(this.F[c]&&this.F[c]<b)O(this,c);else{this.D[c].onTouchEnd(a);var d=!this.F[c],e=this.F[c]<b;this.C!=this.D[c]&&(d||e)&&O(this,c)}P(this,a)};g.mb=function(a){for(var b=0;b<this.D.length;b++){var c=b;this.S[c]=0;O(this,c)}P(this,a)};function P(a,b){var c=!!a.C||a.za;a.za=!1;if(!c)for(var d=Date.now(),e=0;e<a.D.length;e++)if(a.S[e]||a.F[e]&&a.F[e]>=d){c=!0;break}c?(b.stopPropagation(),a.qb||b.preventDefault()):a.rb&&b.stopPropagation();a.Na&&(a.Na=!1,a.Wa())}g.Wa=function(){for(var a=Date.now(),b=-1,c=0;c<this.D.length;c++)if(!this.S[c])this.F[c]&&this.F[c]<a&&O(this,c);else if(-1==b||this.S[c]>this.S[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.D.length;c++)!this.S[c]&&this.ha[c]&&(d=Math.max(d,this.F[c]-a));if(2>d){a=b;c=this.D[a];for(var e=0;e<this.D.length;e++)if(e!=a){var f=e;this.S[f]=0;O(this,f)}this.S[a]=0;this.F[a]=0;this.C=c;c.acceptStart()}else this.ua.schedule(d)}};function O(a,b){a.ha[b]=!1;a.F[b]=0;a.S[b]||a.D[b].acceptCancel()}function Q(a,b){this.ub=a;this.sa=b}g=Q.prototype;g.getType=function(){return this.ub};g.signalReady=function(a){var b=this.sa;if(b.C)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.D.length;d++)b.D[d]==this&&(b.S[d]=c+a,b.F[d]=0);b.Na=!0}};g.signalPending=function(a){var b=this.sa;if(b.C)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.D.length;d++)b.D[d]==this&&(b.F[d]=c+a)};g.signalEnd=function(){var a=this.sa;a.C==this&&(a.C=null,a.za=!0)};g.signalEmit=function(a,b){var c=this.sa.ma[this.getType()];c&&c.fire(new eb(this.getType(),a,Date.now(),b))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function ib(){}var jb=Math.round(-16.67/Math.log(.95));function R(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)}function kb(a,b,c,d,e,f){return new lb(a,b,c,d,e,f).start()}function lb(a,b,c,d,e,f){this.ca=H(self,"vsync");this.$=a;this.Aa=f;this.h=b;this.j=c;this.Fa=d;this.Ga=e;this.O=this.N=0;a=new la;this.na=a.promise;this.Pa=a.resolve;this.Oa=a.reject;this.ja=!1}g=lb.prototype;g.start=function(){this.ja=!0;if(.02>=Math.abs(this.Fa)&&.02>=Math.abs(this.Ga))this.Aa(this.h,this.j),this.Ba(!0);else{this.N=this.Fa;this.O=this.Ga;var a=this.sb.bind(this),b=this.Ba.bind(this,!0);this.ca.runAnimMutateSeries(this.$,a,5e3).then(b,b)}return this};g.halt=function(){this.ja&&this.Ba(!1)};g.then=function(a,b){return a||b?this.na.then(a,b):this.na};g.thenAlways=function(a){a=a||ib;return this.then(a,a)};g.sb=function(a,b){if(!this.ja)return!1;this.h+=b*this.N;this.j+=b*this.O;if(!this.Aa(this.h,this.j))return!1;var c=Math.exp(-a/jb);this.N=this.Fa*c;this.O=this.Ga*c;return.02<Math.abs(this.N)||.02<Math.abs(this.O)};g.Ba=function(a){this.ja&&(this.ja=!1,this.Aa(this.h,this.j),a?this.Pa():this.Oa())};function S(a){Q.call(this,"tap",a);this.j=this.h=this.o=this.B=0;this.ab=null}n(S,Q);S.prototype.onTouchStart=function(a){var b=a.touches;this.ab=a.target;return b&&1==b.length?(this.B=b[0].clientX,this.o=b[0].clientY,!0):!1};S.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.h=a[0].clientX,this.j=a[0].clientY,a=8<=Math.abs(this.j-this.o),8<=Math.abs(this.h-this.B)||a)?!1:!0};S.prototype.onTouchEnd=function(){this.signalReady(0)};S.prototype.acceptStart=function(){this.signalEmit({clientX:this.h,clientY:this.j,target:this.ab},null);this.signalEnd()};function mb(a){Q.call(this,"doubletap",a);this.T=this.j=this.h=this.o=this.B=0;this.Xa=null}n(mb,Q);g=mb.prototype;g.onTouchStart=function(a){return 1<this.T?!1:(a=a.touches)&&1==a.length?(this.B=a[0].clientX,this.o=a[0].clientY,this.h=a[0].clientX,this.j=a[0].clientY,!0):!1};g.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.h=a[0].clientX,this.j=a[0].clientY,a=8<=Math.abs(this.j-this.o),8<=Math.abs(this.h-this.B)||a?(this.acceptCancel(),!1):!0):!1};g.onTouchEnd=function(a){this.T++;2>this.T?this.signalPending(200):(this.Xa=a,this.signalReady(0))};g.acceptStart=function(){this.T=0;this.signalEmit({clientX:this.h,clientY:this.j},this.Xa);this.signalEnd()};g.acceptCancel=function(){this.T=0};function T(a,b,c,d){Q.call(this,a,b);this.Ya=c;this.eb=d;this.C=!1;this.O=this.N=this.Z=this.V=this.wa=this.ea=this.da=this.j=this.h=this.o=this.B=0}n(T,Q);g=T.prototype;g.onTouchStart=function(a){a=a.touches;return this.C&&a&&1<a.length?!0:a&&1==a.length?(this.wa=Date.now(),this.B=a[0].clientX,this.o=a[0].clientY,!0):!1};g.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.h=b;this.j=c;if(this.C)this.aa(!1,!1,a);else if(a=Math.abs(b-this.B),b=Math.abs(c-this.o),this.Ya&&this.eb)(8<=a||8<=b)&&this.signalReady(-10);else if(this.Ya){if(8<=a&&a>b)this.signalReady(-10);else if(8<=b)return!1}else if(this.eb){if(8<=b&&b>a)this.signalReady(-10);else if(8<=a)return!1}else return!1;return!0}return!1};g.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.Ca(a)};g.acceptStart=function(){this.C=!0;this.da=this.B;this.ea=this.o;this.Z=this.wa;this.B=this.h;this.o=this.j;this.aa(!0,!1,null)};g.acceptCancel=function(){this.C=!1};g.aa=function(a,b,c){this.V=Date.now();var d=this.V-this.Z;if(!b&&4<d||b&&16<d){var e=R(this.h-this.da,d,this.N),f=R(this.j-this.ea,d,this.O);if(!b||32<d||0!=e||0!=f)this.N=1e-4<Math.abs(e)?e:0,this.O=1e-4<Math.abs(f)?f:0;this.da=this.h;this.ea=this.j;this.Z=this.V}this.signalEmit({first:a,last:b,time:this.V,deltaX:this.h-this.B,deltaY:this.j-this.o,startX:this.B,startY:this.o,lastX:this.h,lastY:this.j,velocityX:this.N,velocityY:this.O},c)};g.Ca=function(a){this.C&&(this.C=!1,this.aa(!1,!0,a),this.signalEnd())};function nb(a){T.call(this,"swipe-xy",a,!0,!0)}n(nb,T);function ob(a){Q.call(this,"tapzoom",a);this.C=!1;this.O=this.N=this.Z=this.V=this.ea=this.da=this.T=this.j=this.h=this.o=this.B=0}n(ob,Q);g=ob.prototype;g.onTouchStart=function(a){return this.C?!1:(a=a.touches)&&1==a.length?(this.B=a[0].clientX,this.o=a[0].clientY,!0):!1};g.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){this.h=b[0].clientX;this.j=b[0].clientY;if(this.C)this.aa(!1,!1,a);else if(a=8<=Math.abs(this.j-this.o),8<=Math.abs(this.h-this.B)||a){if(0==this.T)return this.acceptCancel(),!1;this.signalReady(0)}return!0}return!1};g.onTouchEnd=function(a){this.C?this.Ca(a):(this.T++,1==this.T?this.signalPending(400):this.acceptCancel())};g.acceptStart=function(){this.T=0;this.C=!0;this.aa(!0,!1,null)};g.acceptCancel=function(){this.T=0;this.C=!1};g.aa=function(a,b,c){this.V=Date.now();a?this.N=this.O=0:2<this.V-this.Z&&(this.N=R(this.h-this.da,this.V-this.Z,this.N),this.O=R(this.j-this.ea,this.V-this.Z,this.O));this.da=this.h;this.ea=this.j;this.Z=this.V;this.signalEmit({first:a,last:b,centerClientX:this.B,centerClientY:this.o,deltaX:this.h-this.B,deltaY:this.j-this.o,velocityX:this.N,velocityY:this.O},c)};g.Ca=function(a){this.C&&(this.C=!1,this.aa(!1,!0,a),this.signalEnd())};var pb=new Set(["amp-img","amp-anim","img"]),Ba=["aria-label","aria-describedby","aria-labelledby"],qb=q(.4,0,.2,1),U=q(.4,0,.2,1),ab=q(.4,0,.2,1.4);function rb(a,b,c){this.Ea=a;this.win=b;this.lb=c;this.ya=a.element.ownerDocument.createElement("div");this.ya.classList.add("i-amphtml-image-lightbox-viewer");this.G=a.element.ownerDocument.createElement("img");this.G.classList.add("i-amphtml-image-lightbox-viewer-image");this.ya.appendChild(this.G);this.va=null;this.fa=this.ga=0;this.H=x(0,0,0,0);this.P=x(0,0,0,0);this.Ja=this.ta=this.ra=this.A=1;this.la=2;this.Ia=this.Ha=this.La=this.Ka=this.I=this.J=this.o=this.B=0;this.Y=null;sb(this)}g=rb.prototype;g.getElement=function(){return this.ya};g.getImage=function(){return this.G};g.getViewerBox=function(){return this.H};g.getImageBox=function(){return this.P};g.getImageBoxWithOffset=function(){if(0==this.J&&0==this.I)var a=this.P;else{a=this.P;var b=this.J,c=this.I;a=0==b&&0==c||0==a.width&&0==a.height?a:x(a.left+b,a.top+c,a.width,a.height)}return a};g.reset=function(){var a=this;this.G.setAttribute("src","");Ba.forEach((function(b){a.G.removeAttribute(b)}));this.G.removeAttribute("aria-describedby");this.va=null;this.P=x(0,0,0,0);this.fa=this.ga=0;this.ra=this.A=this.ta=1;this.la=2;this.Ia=this.Ha=this.La=this.Ka=this.I=this.J=this.o=this.B=0;this.Y&&this.Y.halt();this.Y=null};function tb(a,b,c){c?(a.ga=c.naturalWidth||b.offsetWidth,a.fa=c.naturalHeight||b.offsetHeight):(a.ga=b.offsetWidth,a.fa=b.offsetHeight)}g.init=function(a,b){var c=this;tb(this,a,b);this.va=Da(a);"img"===a.tagName.toLowerCase()?Aa(a,this.G):a.getImpl().then((function(d){return Aa(d.element,c.G)}));b&&cb(b)&&b.src&&this.G.setAttribute("src",b.src)};g.measure=function(){this.H=za(this.ya.getBoundingClientRect());var a=this.ga/this.fa,b=Math.min(this.H.width/a,this.H.height),c=Math.min(this.H.height*a,this.H.width);16>=Math.abs(c-this.ga)&&16>=Math.abs(b-this.fa)&&(c=this.ga,b=this.fa);this.P=x(Math.round((this.H.width-c)/2),Math.round((this.H.height-b)/2),Math.round(c),Math.round(b));A(this.G,{top:this.P.top+"px",left:this.P.left+"px",width:this.P.width+"px",height:this.P.height+"px"});var d=this.H.width/this.H.height;this.la=Math.max(2,Math.max(d/a,a/d));this.ra=this.A=1;this.o=this.I=this.B=this.J=0;ub(this,this.A);V(this);return vb(this)};function vb(a){if(!a.va)return p();a.ta=Math.max(a.ta,a.A);var b=a.va.select(a.P.width*a.ta,self.devicePixelRatio||1);return b==a.G.getAttribute("src")?p():I(a.win,"timer").promise(1).then((function(){a.G.setAttribute("src",b);return a.lb(a.G)}))}function sb(a){var b=hb(a.G);b.onGesture(S,(function(){a.Ea.toggleViewMode()}));b.onGesture(nb,(function(c){var d=c.data.deltaY,e=W(a,a.B+c.data.deltaX,!0);d=X(a,a.o+d,!0);Y(a,a.A,e,d,!1);c.data.last&&wb(a,c.data.velocityX,c.data.velocityY)}));b.onPointerDown((function(){a.Y&&a.Y.halt()}));b.onGesture(mb,(function(c){xb(a,1==a.A?a.la:a.Ja,a.H.width/2-c.data.clientX,a.H.height/2-c.data.clientY,!0).then((function(){return yb(a,0,0,0,0,0,0)}))}));b.onGesture(ob,(function(c){zb(a,c.data.centerClientX,c.data.centerClientY,c.data.deltaX,c.data.deltaY);c.data.last&&yb(a,c.data.centerClientX,c.data.centerClientY,c.data.deltaX,c.data.deltaY,c.data.velocityY,c.data.velocityY)}))}function W(a,b,c){c=c&&1<a.A?.25*a.H.width:0;return D(b,a.Ka-c,a.Ha+c)}function X(a,b,c){c=c?.25*a.H.height:0;return D(b,a.La-c,a.Ia+c)}function ub(a,b){var c=0,d=0,e=a.H.height-a.P.height*b;0<=e?d=c=0:(d=e/2,c=-d);var f=0,h=0;b=a.H.width-a.P.width*b;0<=b?h=f=0:(h=b/2,f=-h);a.Ka=h;a.La=d;a.Ha=f;a.Ia=c}function V(a){A(a.G,{transform:Ma(a.J,a.I)+" scale("+a.A+")"});1!=a.A&&a.Ea.toggleViewMode(!0)}function wb(a,b,c){var d=a.I-a.o;1==a.A&&10<Math.abs(d)?a.Ea.close():(a.Y=kb(a.G,a.J,a.I,b,c,(function(e,f){e=W(a,e,!0);f=X(a,f,!0);if(1>Math.abs(e-a.J)&&1>Math.abs(f-a.I))return!1;Y(a,a.A,e,f,!1);return!0})),a.Y.thenAlways((function(){a.Y=null;return Ab(a)})))}function zb(a,b,c,d,e){var f=Qa(d,e),h=Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d);if(0!=h){var k=a.ra*(1+h*f/100),l=a.H.width/2-b,m=a.H.height/2-c;d=Math.min(l,f/100*l);e=Math.min(m,f/100*m);xb(a,k,d,e,!1)}}function xb(a,b,c,d,e){b=D(b,a.Ja-.25,a.la+.25);if(b!=a.A)return ub(a,b),c=W(a,a.B+c*b,!1),d=X(a,a.o+d*b,!1),Y(a,b,c,d,e)}function yb(a,b,c,d,e,f,h){d=0==f&&0==h?p():kb(a.G,d,e,f,h,(function(l,m){zb(a,b,c,l,m);return!0})).thenAlways();var k=a.A>a.ra;return d.then((function(){return Ab(a)})).then((function(){k&&vb(a)}))}function Y(a,b,c,d,e){var f=b-a.A,h=Qa(c-a.J,d-a.I),k=0;e&&(k=Math.min(250,Math.max(2.5*h,250*Math.abs(f))));if(16<k&&e){var l=C(a.A,b),m=C(a.J,c),r=C(a.I,d);e=$a(a.G,(function(u){a.A=l(u);a.J=m(u);a.I=r(u);V(a)}),k).thenAlways((function(){a.A=b;a.J=c;a.I=d;V(a)}))}else a.A=b,a.J=c,a.I=d,V(a),e=e?p():void 0;return e}function Ab(a){var b=D(a.A,a.Ja-0,a.la+0);b!=a.A&&ub(a,b);var c=W(a,a.J/a.A*b,!1),d=X(a,a.I/a.A*b,!1);return Y(a,b,c,d,!0).then((function(){a.ra=a.A;a.B=a.J;a.o=a.I}))}function Z(a){var b=AMP.BaseElement.call(this,a)||this;b.Da=-1;b.ia=!1;b.ka=!1;b.pa=null;b.L=null;b.xa=null;b.M=null;b.R=null;b.W=null;b.Qa=b.hb.bind(b);b.registerDefaultAction((function(c){return Bb(b,c)}),"open");return b}n(Z,AMP.BaseElement);Z.prototype.buildCallback=function(){var a=Wa(this.element);a=Xa(a);(Ya(a,"action")?I(a,"action"):null).addToAllowlist("AMP-IMAGE-LIGHTBOX","open",["email"])};function Cb(a){if(!a.M){a.M=a.element.ownerDocument.createElement("div");a.M.classList.add("i-amphtml-image-lightbox-container");a.element.appendChild(a.M);a.R=new rb(a,a.win,a.loadPromise.bind(a));a.M.appendChild(a.R.getElement());a.W=a.element.ownerDocument.createElement("div");a.W.setAttribute("id",a.element.getAttribute("id")+"-caption");a.W.classList.add("amp-image-lightbox-caption");a.W.classList.add("i-amphtml-image-lightbox-caption");a.M.appendChild(a.W);var b=a.element.ownerDocument.createElement("button"),c=a.element.getAttribute("data-close-button-aria-label")||"Close the lightbox";b.textContent=c;b.classList.add("i-amphtml-screen-reader");b.tabIndex=-1;b.addEventListener("click",(function(){a.close()}));a.element.appendChild(b);var d=hb(a.element);a.element.addEventListener("click",(function(e){a.ka||a.R.getImage().contains(e.target)||a.close()}));d.onGesture(S,(function(){a.ka||a.close()}));d.onGesture(nb,(function(){}))}}function Bb(a,b){if(!a.ia){Cb(a);b=b.caller;var c=b.tagName.toLowerCase();Ua(b&&pb.has(c),b.tagName);a.ia=!0;Db(a);Eb(a,b);a.win.document.documentElement.addEventListener("keydown",a.Qa);a.getViewport().enterLightboxMode();Fb(a);a.xa=a.getViewport().onChanged((function(){a.ia&&(H(a.win,"platform").getIosVersionString().startsWith("10.3")?I(a.win,"timer").delay((function(){a.R.measure()}),500):a.R.measure())}));Va(a.getAmpDoc()).push(a.close.bind(a)).then((function(d){a.Da=d}))}}Z.prototype.hb=function(a){"Escape"==a.key&&(a.preventDefault(),this.close())};Z.prototype.close=function(){if(this.ia&&(this.ka=this.ia=!1,Gb(this),this.xa&&(this.xa(),this.xa=null),this.getViewport().leaveLightboxMode(),-1!=this.Da&&Va(this.getAmpDoc()).pop(this.Da),this.win.document.documentElement.removeEventListener("keydown",this.Qa),this.pa))try{this.pa.focus()}catch(a){}};Z.prototype.toggleViewMode=function(a){void 0!==a?this.M.classList.toggle("i-amphtml-image-lightbox-view-mode",a):this.M.classList.toggle("i-amphtml-image-lightbox-view-mode")};function Eb(a,b){a.pa=b;/^[\w-]+$/.test("img");if(void 0!==va)var c=va;else{try{var d=b.ownerDocument,e=d.createElement("div"),f=d.createElement("div");e.appendChild(f);c=e.querySelector(":scope div")===f}catch(m){c=!1}c=va=c}c?c=b.querySelector("> img".replace(/^|,/g,"$&:scope ")):(b.classList.add("i-amphtml-scoped"),c="> img".replace(/^|,/g,"$&.i-amphtml-scoped "),c=b.querySelectorAll(c),b.classList.remove("i-amphtml-scoped"),c=void 0===c[0]?null:c[0]);a.L=c;a.R.init(a.pa,a.L);var h=null,k=ya(b);k&&(/^[\w-]+$/.test("figcaption"),h=k.querySelector("figcaption"));if(!h){var l=b.getAttribute("aria-describedby");h=a.element.ownerDocument.getElementById(l)}if(h){d=h;b=a.W;c=b.ownerDocument.createDocumentFragment();for(d=d.firstChild;d;d=d.nextSibling)c.appendChild(d.cloneNode(!0));b.appendChild(c);a.R.getImage().setAttribute("aria-describedby",a.W.getAttribute("id"))}a.W.classList.toggle("i-amphtml-empty",!h)}function Db(a){a.R.reset();for(var b=a.W;b.firstChild;)b.removeChild(b.firstChild);a.pa=null;a.L=null;a.toggleViewMode(!1)}function Fb(a){a.ka=!0;Ka(a.element);A(a.element,{opacity:0});a.R.measure();var b=new J(a.element);b.add(0,B(a.element,{opacity:C(0,1)}),.6,qb);var c=null;if(a.L&&cb(a.L)&&a.L.src){c=a.element.ownerDocument.createElement("div");c.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(c);var d=za(a.L.getBoundingClientRect()),e=a.R.getImageBox(),f=a.L.cloneNode(!0);f.className="";A(f,{position:"absolute",top:d.top+"px",left:d.left+"px",width:d.width+"px",height:d.height+"px",transformOrigin:"top left",willChange:"transform"});c.appendChild(f);a.L.classList.add("i-amphtml-ghost");var h=e.left-d.left,k=e.top-d.top;d=0!=d.width?e.width/d.width:1;var l=D(Math.abs(k)/250*.8,.2,.8);b.add(0,B(f,{transform:Na([Oa(C(0,h),C(0,k)),Pa(C(1,d))])}),l,qb);A(a.M,{opacity:0});b.add(.8,B(a.M,{opacity:C(0,1)}),.1,qb);b.add(.9,B(c,{opacity:C(1,.01)}),.1,U)}b.start(500).thenAlways((function(){a.ka=!1;A(a.element,{opacity:""});A(a.M,{opacity:""});c&&a.getAmpDoc().getBody().removeChild(c)}))}function Gb(a){var b=a.R.getImage(),c=a.R.getImageBoxWithOffset(),d=new J(a.element),e=500;d.add(0,B(a.element,{opacity:C(1,0)}),.9,U);var f=null;if(cb(b)&&b.src&&a.L){f=a.element.ownerDocument.createElement("div");f.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(f);var h=za(a.L.getBoundingClientRect()),k=b.cloneNode(!0);A(k,{position:"absolute",top:c.top+"px",left:c.left+"px",width:c.width+"px",height:c.height+"px",transform:"",transformOrigin:"top left",willChange:"transform"});f.appendChild(k);d.add(0,B(a.M,{opacity:C(1,0)}),.1,U);b=h.top-c.top;var l=0!=c.width?h.width/c.width:1,m=B(k,{transform:Na([Oa(C(0,h.left-c.left),C(0,b)),Pa(C(1,l))])});c=D(Math.abs(b)/250*.8,.2,.8);d.add(Math.min(.8-c,.2),(function(r,u){m(r);u&&a.L.classList.remove("i-amphtml-ghost")}),c,U);d.add(.8,B(f,{opacity:C(1,.01)}),.2,U);e=D(Math.abs(b)/250*e,300,e)}d.start(e).thenAlways((function(){a.L&&a.L.classList.remove("i-amphtml-ghost");a.collapse();A(a.element,{opacity:""});A(a.M,{opacity:""});f&&a.getAmpDoc().getBody().removeChild(f);Db(a)}))}AMP.registerElement("amp-image-lightbox",Z,"amp-image-lightbox{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;z-index:1000;background:rgba(0,0,0,0.95);color:#f2f2f2}.i-amphtml-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.i-amphtml-image-lightbox-caption{position:absolute!important;z-index:2;bottom:0!important;left:0!important;right:0!important}.i-amphtml-image-lightbox-caption.i-amphtml-empty,.i-amphtml-image-lightbox-view-mode .i-amphtml-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,0.5);max-height:25%;padding:8px}.i-amphtml-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/")}});//# sourceMappingURL=amp-image-lightbox-0.1.js.map