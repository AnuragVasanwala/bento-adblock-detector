(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-pan-zoom",ev:"0.1",l:true,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function da(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}da(this);"function"===typeof Symbol&&Symbol("x");var p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;q=fa.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=p;function r(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Eb=b.prototype}var t;function ia(){return t?t:t=Promise.resolve(void 0)}function ja(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function ka(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function la(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}function ma(a,b,c,d){return function(e){return u(e,a,b,c,d)}}function u(a,b,c,d,e){a:{var f=a-0;if(0>=f)a=0;else if(1<=f)a=1;else{for(var h=0,l=1,k=0,m=0;8>m;m++){k=v(f,b,d);var n=(v(f+1e-6,b,d)-k)/1e-6;if(1e-6>Math.abs(k-a)){a=f;break a}if(1e-6>Math.abs(n))break;else k<a?h=f:l=f,f-=(k-a)/n}for(m=0;1e-6<Math.abs(k-a)&&8>m;m++)k<a?(h=f,f=(f+l)/2):(l=f,f=(f+h)/2),k=v(f,b,d);a=f}}0==a?e=0:1==a?e=1:(b=w(0,c,a),c=w(c,e,a),e=w(e,1,a),b=w(b,c,a),c=w(c,e,a),e=w(b,c,a));return e}function v(a,b,c){if(0==a)return 0;if(1==a)return 1;var d=w(0,b,a),e=w(b,c,a),f=w(c,1,a);d=w(d,e,a);e=w(e,f,a);return w(d,e,a)}function w(a,b,c){return a+c*(b-a)}var na={linear:function(a){return a},ease:function(a){return u(a,.25,.1,.25,1)},"ease-in":function(a){return u(a,.42,0,1,1)},"ease-out":function(a){return u(a,0,0,.58,1)},"ease-in-out":function(a){return u(a,.42,0,.58,1)}};function oa(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return ma(b[0],b[1],b[2],b[3])}return null}return na[a]}return a}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function pa(a,b){var c=[];for(a=a.firstElementChild;a;a=a.nextElementSibling)b(a)&&c.push(a);return c}function qa(a){return pa(a,(function(b){if("string"==typeof b)var c=b;else b.nodeType===Node.ELEMENT_NODE&&(c=b.tagName);b=c&&c.toLowerCase().startsWith("i-")?!0:b.nodeType!==Node.ELEMENT_NODE?!1:b.hasAttribute("placeholder")||b.hasAttribute("fallback")||b.hasAttribute("overflow");return!b}))}var ra={bubbles:!0,cancelable:!0};function sa(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function ta(a){for(var b=null,c="",d=ba(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ua(a){var b=ta.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function va(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){ua(e)}}var y,wa="Webkit webkit Moz moz ms O o".split(" "),xa={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function z(a,b){for(var c in b){var d=a,e=b[c];var f=d.style;var h=c;if(h.startsWith("--"))f=h;else{y||(y=Object.create(null));var l=y[h];if(!l){l=h;if(void 0===f[h]){var k=h;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var m=0;m<wa.length;m++){var n=wa[m]+k;if(void 0!==f[n]){k=n;break b}}k=""}void 0!==f[k]&&(l=k)}y[h]=l}f=l}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}function ya(a){return"number"==typeof a?a+"px":a}var za=/vertical/,Aa=new WeakMap,A=new WeakMap,Ba=new WeakMap;function Ca(a,b){var c=a.ownerDocument.defaultView;if(c){var d=A.get(a);d||(d=[],A.set(a,d),Da(c).observe(a));if(!d.some((function(f){return f.callback===b&&0===f.type}))){d.push({type:0,callback:b});var e=Ba.get(a);e&&setTimeout((function(){return Ea(0,b,e)}))}}}function Fa(a,b){var c=A.get(a);c&&(ka(c,(function(d){return d.callback===b&&0===d.type})),0==c.length&&(A.delete(a),Ba.delete(a),(c=a.ownerDocument.defaultView)&&Da(c).unobserve(a)))}function Da(a){var b=Aa.get(a);b||(b=new a.ResizeObserver(Ga),Aa.set(a,b));return b}function Ga(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=A.get(e);if(f)for(Ba.set(e,d),e=0;e<f.length;e++){var h=f[e];Ea(h.type,h.callback,d)}}}}function Ea(a,b,c){if(0==a)a=c.contentRect,va(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=za.test(((a.ownerDocument||a).defaultView.getComputedStyle(a)||xa)["writing-mode"]),h=a.offsetHeight,l=a.offsetWidth;if(f){var k=l;var m=h}else m=l,k=h;e={inlineSize:m,blockSize:k}}va(b,e)}}var B;function Ha(a){var b=a.ownerDocument||a;B&&B.ownerDocument===b||(B=b.createElement("div"));return Ia}function Ia(a){var b=B;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}function Ja(a,b){return function(c){return a+(b-a)*c}}function C(a,b,c,d){return Math.min(Math.max(a,b-d),c+d)}function Ka(a,b){return Math.sqrt(a*a+b*b)}var D=self.AMP_CONFIG||{},La=("string"==typeof D.cdnProxyRegex?new RegExp(D.cdnProxyRegex):D.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Na(a){if(self.document&&self.document.head&&(!self.location||!La.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}D.cdnUrl||Na("runtime-host");D.geoApiUrl||Na("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E=self.__AMP_LOG;function Oa(){throw Error("failed to call initLogConstructor")}function F(){return E.dev||(E.dev=Oa())}function Pa(a,b,c,d){E.user||(E.user=Oa());E.user.assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function Qa(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function Ra(a){var b=Sa(a);b=Ta(b);return G(b,"owners")}function Ua(a){a=Sa(a);a=Ta(a);return Va(a,"action")?G(a,"action"):null}function Sa(a){return a.nodeType?Qa((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Ta(a){a=Sa(a);return a.isSingleDoc()?a.win:a}function G(a,b){Va(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Va(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Wa(){}function H(a){this.U=a;this.$=Qa(self,"vsync");this.Va=null;this.K=[]}function Xa(a,b,c){var d=Ya;return new H(a).setCurve(d).add(0,b,1).start(c)}H.prototype.setCurve=function(a){a&&(this.Va=oa(a));return this};H.prototype.add=function(a,b,c,d){this.K.push({delay:a,func:b,duration:c,curve:oa(d)});return this};H.prototype.start=function(a){return new I(this.$,this.U,this.K,this.Va,a)};function I(a,b,c,d,e){this.$=a;this.U=b;this.K=[];for(b=0;b<c.length;b++){var f=c[b];this.K.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.tb=e;this.Z=Date.now();this.Y=!0;this.lb={};c=new ja;this.oa=c.promise;this.Ma=c.resolve;this.La=c.reject;this.nb=this.$.createAnimTask(this.U,{mutate:this.Cb.bind(this)});this.$.canAnimate(this.U)?this.nb(this.lb):(F().warn("Animation","cannot animate"),J(this,!1,0))}I.prototype.then=function(a,b){return a||b?this.oa.then(a,b):this.oa};I.prototype.thenAlways=function(a){a=a||Wa;return this.then(a,a)};I.prototype.halt=function(a){J(this,!1,a||0)};function J(a,b,c){if(a.Y){a.Y=!1;if(0!=c){1<a.K.length&&a.K.sort((function(e,f){return e.delay+e.duration-(f.delay+f.duration)}));try{if(0<c)for(c=0;c<a.K.length;c++)a.K[c].func(1,!0);else for(var d=a.K.length-1;0<=d;d--)a.K[d].func(0,!1)}catch(e){F().error("Animation","completion failed: "+e,e),b=!1}}b?a.Ma():a.La()}}I.prototype.Cb=function(){if(this.Y){for(var a=Date.now(),b=Math.min((a-this.Z)/this.tb,1),c=0;c<this.K.length;c++){var d=this.K[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.K.length;c++)if(d=this.K[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){F().error("Animation","step curve failed: "+h,h);J(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){F().error("Animation","step mutate failed: "+h,h),J(this,!1,0)}}1==b?J(this,!0,0):this.$.canAnimate(this.U)?this.nb(this.lb):(F().warn("Animation","cancel animation"),J(this,!1,0))}};var K,L;function Za(a,b,c){function d(l){try{return f(l)}catch(n){var k,m;null==(m=(k=self).__AMP_REPORT_ERROR)||m.call(k,n);throw n}}var e=a,f=c,h=$a();e.addEventListener(b,d,h?void 0:!1);return function(){var l;null==(l=e)||l.removeEventListener(b,d,h?void 0:!1);d=e=f=null}}function $a(){if(void 0!==K)return K;K=!1;try{var a={get capture(){K=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return K}function ab(a){if(void 0!==L)return L;L=!1;try{var b={get passive(){L=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(c){}return L}function bb(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a}function cb(a,b,c){return Za(a,b,c)}function db(){this.P=null}g=db.prototype;g.add=function(a){var b=this;this.P||(this.P=[]);this.P.push(a);return function(){b.remove(a)}};g.remove=function(a){if(this.P){var b=this.P;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};g.removeAll=function(){this.P&&(this.P.length=0)};g.fire=function(a){if(this.P)for(var b=ba(this.P),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.P)?void 0:a.length)?b:0};function M(a,b){var c=this;this.ob=G(a,"timer");this.ub=b;this.sb=0;this.pa=-1;this.Fa=0;this.Y=!1;this.rb=function(){c.ta()}}M.prototype.isPending=function(){return-1!=this.pa};M.prototype.schedule=function(a){a=a||this.sb;this.Y&&10>a&&(a=10);var b=Date.now()+a;return!this.isPending()||-10>b-this.Fa?(this.cancel(),this.Fa=b,this.pa=this.ob.delay(this.rb,a),!0):!1};M.prototype.ta=function(){this.pa=-1;this.Fa=0;this.Y=!0;this.ub();this.Y=!1};M.prototype.cancel=function(){this.isPending()&&(this.ob.cancel(this.pa),this.pa=-1)};function eb(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}function fb(a,b,c){this.S=a;this.A=[];this.ga=[];this.N=[];this.C=[];this.h=null;this.zb=b;this.Ab=c;this.za=!1;this.ta=new M((a.ownerDocument||a).defaultView,this.Xa.bind(this));this.jb=new db;this.na=Object.create(null);this.Sa=this.yb.bind(this);this.Qa=this.wb.bind(this);this.Ra=this.xb.bind(this);this.Pa=this.vb.bind(this);var d=ab(a.ownerDocument.defaultView);this.S.addEventListener("touchstart",this.Sa,d?{passive:!0}:!1);this.S.addEventListener("touchend",this.Qa);this.S.addEventListener("touchmove",this.Ra,d?{passive:!0}:!1);this.S.addEventListener("touchcancel",this.Pa);this.Ga=!1}function gb(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new fb(a,b,c),a.__AMP_Gestures=d);return d}g=fb.prototype;g.cleanup=function(){this.S.removeEventListener("touchstart",this.Sa);this.S.removeEventListener("touchend",this.Qa);this.S.removeEventListener("touchmove",this.Ra);this.S.removeEventListener("touchcancel",this.Pa);delete this.S.__AMP_Gestures;this.ta.cancel()};g.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.na[d];e||(this.A.push(c),e=new db,this.na[d]=e);return e.add(b)};g.removeGesture=function(a){var b=new a(this).getType();if(a=this.na[b]){a.removeAll();a=la(this.A,(function(c){return c.getType()==b}));if(0>a)return!1;this.A.splice(a,1);this.N.splice(a,1);this.C.splice(a,1);this.ga.splice(a,1);delete this.na[b];return!0}return!1};g.onPointerDown=function(a){return this.jb.add(a)};g.yb=function(a){var b=Date.now();this.za=!1;this.jb.fire(a);for(var c=0;c<this.A.length;c++)if(!this.N[c]&&(this.C[c]&&this.C[c]<b&&N(this,c),this.A[c].onTouchStart(a))){var d=c;this.ga[d]=!0;this.C[d]=0}O(this,a)};g.xb=function(a){for(var b=Date.now(),c=0;c<this.A.length;c++)this.ga[c]&&(this.C[c]&&this.C[c]<b?N(this,c):this.A[c].onTouchMove(a)||N(this,c));O(this,a)};g.wb=function(a){for(var b=Date.now(),c=0;c<this.A.length;c++)if(this.ga[c])if(this.C[c]&&this.C[c]<b)N(this,c);else{this.A[c].onTouchEnd(a);var d=!this.C[c],e=this.C[c]<b;this.h!=this.A[c]&&(d||e)&&N(this,c)}O(this,a)};g.vb=function(a){for(var b=0;b<this.A.length;b++){var c=b;this.N[c]=0;N(this,c)}O(this,a)};function O(a,b){var c=!!a.h||a.za;a.za=!1;if(!c)for(var d=Date.now(),e=0;e<a.A.length;e++)if(a.N[e]||a.C[e]&&a.C[e]>=d){c=!0;break}c?(b.stopPropagation(),a.zb||b.preventDefault()):a.Ab&&b.stopPropagation();a.Ga&&(a.Ga=!1,a.Xa())}g.Xa=function(){for(var a=Date.now(),b=-1,c=0;c<this.A.length;c++)if(!this.N[c])this.C[c]&&this.C[c]<a&&N(this,c);else if(-1==b||this.N[c]>this.N[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.A.length;c++)!this.N[c]&&this.ga[c]&&(d=Math.max(d,this.C[c]-a));if(2>d){a=b;c=this.A[a];for(var e=0;e<this.A.length;e++)if(e!=a){var f=e;this.N[f]=0;N(this,f)}this.N[a]=0;this.C[a]=0;this.h=c;c.acceptStart()}else this.ta.schedule(d)}};function N(a,b){a.ga[b]=!1;a.C[b]=0;a.N[b]||a.A[b].acceptCancel()}function P(a,b){this.Db=a;this.ra=b}g=P.prototype;g.getType=function(){return this.Db};g.signalReady=function(a){var b=this.ra;if(b.h)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.A.length;d++)b.A[d]==this&&(b.N[d]=c+a,b.C[d]=0);b.Ga=!0}};g.signalPending=function(a){var b=this.ra;if(b.h)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.A.length;d++)b.A[d]==this&&(b.C[d]=c+a)};g.signalEnd=function(){var a=this.ra;a.h==this&&(a.h=null,a.za=!0)};g.signalEmit=function(a,b){var c=this.ra.na[this.getType()];c&&c.fire(new eb(this.getType(),a,Date.now(),b))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function hb(){}var ib=Math.round(-16.67/Math.log(.95));function Q(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)}function jb(a,b,c,d,e,f){return new kb(a,b,c,d,e,f).start()}function kb(a,b,c,d,e,f){this.$=Qa(self,"vsync");this.U=a;this.Aa=f;this.j=b;this.o=c;this.Da=d;this.Ea=e;this.J=this.I=0;a=new ja;this.oa=a.promise;this.Ma=a.resolve;this.La=a.reject;this.ha=!1}g=kb.prototype;g.start=function(){this.ha=!0;if(.02>=Math.abs(this.Da)&&.02>=Math.abs(this.Ea))this.Aa(this.j,this.o),this.Ba(!0);else{this.I=this.Da;this.J=this.Ea;var a=this.Bb.bind(this),b=this.Ba.bind(this,!0);this.$.runAnimMutateSeries(this.U,a,5e3).then(b,b)}return this};g.halt=function(){this.ha&&this.Ba(!1)};g.then=function(a,b){return a||b?this.oa.then(a,b):this.oa};g.thenAlways=function(a){a=a||hb;return this.then(a,a)};g.Bb=function(a,b){if(!this.ha)return!1;this.j+=b*this.I;this.o+=b*this.J;if(!this.Aa(this.j,this.o))return!1;var c=Math.exp(-a/ib);this.I=this.Da*c;this.J=this.Ea*c;return.02<Math.abs(this.I)||.02<Math.abs(this.J)};g.Ba=function(a){this.ha&&(this.ha=!1,this.Aa(this.j,this.o),a?this.Ma():this.La())};function R(a){P.call(this,"tap",a);this.o=this.j=this.G=this.F=0;this.mb=null}r(R,P);R.prototype.onTouchStart=function(a){var b=a.touches;this.mb=a.target;return b&&1==b.length?(this.F=b[0].clientX,this.G=b[0].clientY,!0):!1};R.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.j=a[0].clientX,this.o=a[0].clientY,a=8<=Math.abs(this.o-this.G),8<=Math.abs(this.j-this.F)||a)?!1:!0};R.prototype.onTouchEnd=function(){this.signalReady(0)};R.prototype.acceptStart=function(){this.signalEmit({clientX:this.j,clientY:this.o,target:this.mb},null);this.signalEnd()};function lb(a){P.call(this,"doubletap",a);this.qa=this.o=this.j=this.G=this.F=0;this.Ya=null}r(lb,P);g=lb.prototype;g.onTouchStart=function(a){return 1<this.qa?!1:(a=a.touches)&&1==a.length?(this.F=a[0].clientX,this.G=a[0].clientY,this.j=a[0].clientX,this.o=a[0].clientY,!0):!1};g.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.j=a[0].clientX,this.o=a[0].clientY,a=8<=Math.abs(this.o-this.G),8<=Math.abs(this.j-this.F)||a?(this.acceptCancel(),!1):!0):!1};g.onTouchEnd=function(a){this.qa++;2>this.qa?this.signalPending(200):(this.Ya=a,this.signalReady(0))};g.acceptStart=function(){this.qa=0;this.signalEmit({clientX:this.j,clientY:this.o},this.Ya);this.signalEnd()};g.acceptCancel=function(){this.qa=0};function S(a,b,c,d){P.call(this,a,b);this.Za=c;this.qb=d;this.h=!1;this.J=this.I=this.X=this.T=this.Z=this.Ka=this.Ja=this.o=this.j=this.G=this.F=0}r(S,P);g=S.prototype;g.onTouchStart=function(a){a=a.touches;return this.h&&a&&1<a.length?!0:a&&1==a.length?(this.Z=Date.now(),this.F=a[0].clientX,this.G=a[0].clientY,!0):!1};g.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.j=b;this.o=c;if(this.h)this.V(!1,!1,a);else if(a=Math.abs(b-this.F),b=Math.abs(c-this.G),this.Za&&this.qb)(8<=a||8<=b)&&this.signalReady(-10);else if(this.Za){if(8<=a&&a>b)this.signalReady(-10);else if(8<=b)return!1}else if(this.qb){if(8<=b&&b>a)this.signalReady(-10);else if(8<=a)return!1}else return!1;return!0}return!1};g.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.Ca(a)};g.acceptStart=function(){this.h=!0;this.Ja=this.F;this.Ka=this.G;this.X=this.Z;this.F=this.j;this.G=this.o;this.V(!0,!1,null)};g.acceptCancel=function(){this.h=!1};g.V=function(a,b,c){this.T=Date.now();var d=this.T-this.X;if(!b&&4<d||b&&16<d){var e=Q(this.j-this.Ja,d,this.I),f=Q(this.o-this.Ka,d,this.J);if(!b||32<d||0!=e||0!=f)this.I=1e-4<Math.abs(e)?e:0,this.J=1e-4<Math.abs(f)?f:0;this.Ja=this.j;this.Ka=this.o;this.X=this.T}this.signalEmit({first:a,last:b,time:this.T,deltaX:this.j-this.F,deltaY:this.o-this.G,startX:this.F,startY:this.G,lastX:this.j,lastY:this.o,velocityX:this.I,velocityY:this.J},c)};g.Ca=function(a){this.h&&(this.h=!1,this.V(!1,!0,a),this.signalEnd())};function mb(a){S.call(this,"swipe-xy",a,!0,!0)}r(mb,S);function nb(a){P.call(this,"pinch",a);this.h=!1;this.J=this.I=this.X=this.T=this.Z=this.Ua=this.Ta=this.Ia=this.Ha=this.la=this.ja=this.ka=this.ia=this.fa=this.da=this.ea=this.ca=0}r(nb,P);g=nb.prototype;g.onTouchStart=function(a){a=a.touches;return a?1==a.length||this.h&&2<a.length?!0:2==a.length?(this.Z=Date.now(),this.ca=a[0].clientX,this.ea=a[0].clientY,this.da=a[1].clientX,this.fa=a[1].clientY,!0):!1:!1};g.onTouchMove=function(a){var b=a.touches;if(!b||0==b.length)return!1;if(1==b.length)return!0;this.ia=b[0].clientX;this.ka=b[0].clientY;this.ja=b[1].clientX;this.la=b[1].clientY;if(this.h)return this.V(!1,!1,a),!0;a=this.ia-this.ca;b=this.ka-this.ea;var c=this.ja-this.da,d=this.la-this.fa,e=10<=Math.abs(a+c),f=10<=Math.abs(b+d);if((0<a*c||0<b*d)&&(e||f))return!1;a=this.ia-this.ca;b=this.ka-this.ea;c=this.ja-this.da;d=this.la-this.fa;e=4<=Math.abs(a-c);f=4<=Math.abs(b-d);0>=a*c&&0>=b*d&&(e||f)&&this.signalReady(0);return!0};g.onTouchEnd=function(a){var b=a.touches;b&&2>b.length&&this.Ca(a)};g.acceptStart=function(){this.h=!0;this.X=this.Z;this.Ia=this.Ha=0;this.Ta=.5*(this.ca+this.da);this.Ua=.5*(this.ea+this.fa);this.V(!0,!1,null)};g.acceptCancel=function(){this.h=!1};g.V=function(a,b,c){this.T=Date.now();var d=this.T-this.X,e=Math.abs(this.ia-this.ca-(this.ja-this.da)),f=Math.abs(this.ka-this.ea-(this.la-this.fa));if(!b&&4<d||b&&16<d)this.I=Q(e-this.Ha,d,this.I),this.J=Q(f-this.Ia,d,this.J),this.I=1e-4<Math.abs(this.I)?this.I:0,this.J=1e-4<Math.abs(this.J)?this.J:0,this.Ha=e,this.Ia=f,this.X=this.T;d=this.ca;var h=this.da,l=this.ea,k=this.fa,m=this.ia,n=this.ja,x=this.ka,Ma=this.la;this.signalEmit({first:a,last:b,time:this.T,centerClientX:this.Ta,centerClientY:this.Ua,dir:Math.sign((m-n)*(m-n)+(x-Ma)*(x-Ma)-((d-h)*(d-h)+(l-k)*(l-k))),deltaX:.5*e,deltaY:.5*f,velocityX:.5*this.I,velocityY:.5*this.J},c)};g.Ca=function(a){this.h&&(this.h=!1,this.V(!1,!0,a),this.signalEnd())};var ob=['<div class="amp-pan-zoom-in-icon amp-pan-zoom-button"></div>'],Ya=ma(.4,0,.2,1.4),pb=new Set("svg DIV AMP-IMG AMP-LAYOUT AMP-SELECTOR IMG".split(" "));function qb(a){a=AMP.BaseElement.call(this,a)||this;a.H=null;a.Oa=null;a.va=0;a.ua=0;a.D=null;a.aa=null;a.ya=null;a.B=1;a.Na=1;a.ba=1;a.W=3;a.ab=0;a.bb=0;a.$a=1;a.F=0;a.G=0;a.L=0;a.M=0;a.fb=0;a.gb=0;a.cb=0;a.eb=0;a.O=null;a.ma=null;a.kb=!1;a.R=null;a.Wa=!1;a.pb=null;a.xa=null;a.wa=null;a.ib=0;a.hb=0;a.sa=a.sa.bind(a);return a}r(qb,AMP.BaseElement);g=qb.prototype;g.buildCallback=function(){var a=this;this.Oa=Ua(this.element);var b=qa(this.element);Pa(1==b.length,"%s should have its target element as its one and only child","amp-pan-zoom");Pa(pb.has(b[0].tagName),"%s is not supported by %s",b[0].tagName,"amp-pan-zoom");this.element.classList.add("i-amphtml-pan-zoom");this.H=b[0];this.H.classList.add("i-amphtml-pan-zoom-child");this.W=T(this,"max-scale",3);this.$a=T(this,"initial-scale",1);this.ab=T(this,"initial-x",0);this.bb=T(this,"initial-y",0);this.kb=this.element.hasAttribute("reset-on-resize");this.Wa=this.element.hasAttribute("disable-double-tap");this.registerAction("transform",(function(c){var d=c.args;if(d)return a.transform(d.x||0,d.y||0,d.scale||1)}))};g.transform=function(a,b,c){var d=this;U(this,c);var e=V(this,a,!1),f=W(this,b,!1);return X(this,c,e,f,!0).then((function(){return rb(d)}))};g.layoutCallback=function(){sb(this);Ra(this.element).scheduleLayout(this.element,this.H);return tb(this).then(ub(this))};g.pauseCallback=function(){vb(this)};g.resumeCallback=function(){this.H&&Ra(this.element).scheduleLayout(this.element,this.H);ub(this)};g.unlayoutCallback=function(){vb(this);return!0};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"fill"==a||"responsive"==a};g.sa=function(){this.kb&&tb(this)};function sb(a){a.R=Ha(a.element)(ob);a.R.addEventListener("click",(function(){a.R.classList.contains("amp-pan-zoom-in-icon")?(a.transform(0,0,a.W),wb(a)):(a.transform(0,0,a.ba),xb(a))}));a.element.appendChild(a.R)}function T(a,b,c){a=a.element;return a.hasAttribute(b)?parseInt(a.getAttribute(b),10):c}function tb(a){return a.mutateElement((function(){z(a.H,{width:"",height:""})})).then((function(){return a.measureMutateElement((function(){a.va=a.H.scrollWidth;a.ua=a.H.scrollHeight;var b=a.va/a.ua;a.D=a.getViewport().getLayoutRect(a.element);var c=Math.min(a.D.width/b,a.D.height),d=Math.min(a.D.height*b,a.D.width);16>=Math.abs(d-a.va)&&16>=Math.abs(c-a.ua)&&(d=a.va,c=a.ua);a.aa=sa(0,0,Math.round(d),Math.round(c));c=a.D;c=c.width/c.height;b=Math.max(c/b,b/c);isNaN(b)||(a.W=Math.max(a.W,b));a.Na=a.B=a.$a;a.F=a.L=a.ab;a.G=a.M=a.bb}),(function(){z(a.H,{width:a.aa.width+"px",height:a.aa.height+"px"})}),a.H)})).then((function(){var b=a.H.getBoundingClientRect();b=sa(Number(b.left),Number(b.top),Number(b.width),Number(b.height));a.aa.top=b.top-a.D.top;a.aa.left=b.left-a.D.left;U(a,a.B);return Y(a)}))}function ub(a){yb(a);a.pb=cb(a.element,"mousedown",(function(b){return zb(a,b)}));Ca(a.element,a.sa)}function Z(a){a&&a()}function vb(a){a.O&&(a.O.cleanup(),a.O=null);Z(a.pb);Z(a.wa);Z(a.xa);Fa(a.element,a.sa)}function zb(a,b){if(2!=b.button){b.preventDefault();var c=b.clientX;b=b.clientY;Z(a.wa);Z(a.xa);a.hb=c;a.ib=b;a.wa=cb(a.element,"mousemove",(function(d){d.preventDefault();Ab(a,d.clientX-a.hb,d.clientY-a.ib)}));a.xa=cb(a.win,"mouseup",(function(d){d.preventDefault();Bb(a);Z(a.wa);Z(a.xa)}))}}function yb(a){a.O||(a.O=gb(a.element),a.O.onPointerDown((function(){a.ma&&a.ma.halt()})),a.O.onGesture(nb,(function(b){return a.handlePinch(b.data)})),a.Wa||(a.O.onGesture(lb,(function(b){return a.handleDoubleTap(b.data)})),a.O.onGesture(R,(function(b){b=b.data;var c=bb(a.win,"click",null,{bubbles:!0});b.target.dispatchEvent(c)}))))}g.handleDoubleTap=function(a){var b=this;return Cb(this,a.clientX,a.clientY).then((function(){return rb(b)}))};g.handlePinch=function(a){var b=this,c=a.last;return Db(this,a.centerClientX,a.centerClientY,a.deltaX,a.deltaY,a.dir).then((function(){if(c)return rb(b)}))};g.handleSwipe=function(a){var b=this,c=a.last,d=a.velocityX,e=a.velocityY;return Ab(this,a.deltaX,a.deltaY).then((function(){if(c)return Eb(b,d,e)}))};function Fb(a){a.ya=a.O.onGesture(mb,(function(b){return a.handleSwipe(b.data)}))}function V(a,b,c){var d=.25*a.D.width;return C(b,a.fb,a.cb,c&&1<a.B?d:0)}function W(a,b,c){var d=.25*a.D.height;return C(b,a.gb,a.eb,c&&1<a.B?d:0)}function U(a,b){var c=a.aa,d=c.height,e=c.left,f=c.top,h=c.width;c=a.D;var l=c.height;a.fb=Math.min(0,c.width-(e+h*(b+1)/2));a.cb=Math.max(0,(h*b-h)/2-e);a.gb=Math.min(0,l-(f+d*(b+1)/2));a.eb=Math.max(0,(d*b-d)/2-f)}function Y(a){var b=a.H,c=a.L,d=a.M,e=a.B;return a.mutateElement((function(){z(b,{transform:(void 0===d||null===d?"translate("+ya(c)+")":"translate("+ya(c)+", "+ya(d)+")")+" scale("+e+")"})}),b)}function Ab(a,b,c){var d=V(a,a.F+b,!0),e=W(a,a.G+c,!0);return X(a,a.B,d,e,!1)}function Eb(a,b,c){a.ma=jb(a.H,a.L,a.M,b,c,(function(d,e){d=V(a,d,!0);e=W(a,e,!0);if(1>Math.abs(d-a.L)&&1>Math.abs(e-a.M))return!1;X(a,a.B,d,e,!1);return!0}));return a.ma.thenAlways((function(){a.ma=null;return Bb(a)}))}function Cb(a,b,c){var d=a.B==a.ba?a.W:a.ba;b=a.D.width/2-(b-(a.D.left-a.getViewport().getScrollLeft()));c=a.D.height/2-(c-(a.D.top-a.getViewport().getScrollTop()));return Gb(a,d,b,c,!0)}function Db(a,b,c,d,e,f){if(0==f)return ia();var h=a.D,l=h.height;h=h.width;var k=Ka(d,e);d=a.Na*(1+f*k/100);var m=h/2-(b-(a.D.left-a.getViewport().getScrollLeft())),n=l/2-(c-(a.D.top-a.getViewport().getScrollTop()));return Gb(a,d,Math.min(k/100,1)*m,Math.min(k/100,1)*n,!1)}function Gb(a,b,c,d,e){b=C(b,a.ba,a.W,.25);if(b==a.B)return ia();U(a,b);c=V(a,a.F+c*b,!1);d=W(a,a.G+d*b,!1);return X(a,b,c,d,e)}function xb(a){a.R&&(a.R.classList.add("amp-pan-zoom-in-icon"),a.R.classList.remove("amp-pan-zoom-out-icon"))}function wb(a){a.R&&(a.R.classList.remove("amp-pan-zoom-in-icon"),a.R.classList.add("amp-pan-zoom-out-icon"))}function rb(a){return Bb(a).then((function(){a.B<=a.ba?(a.ya&&(a.ya(),a.ya=null,a.O.removeGesture(mb)),xb(a),a.H.classList.remove("i-amphtml-pan-zoom-scrollable")):(Fb(a),wb(a),a.H.classList.add("i-amphtml-pan-zoom-scrollable"))}))}function X(a,b,c,d,e){var f=b-a.B,h=Ka(c-a.L,d-a.M),l=e?250*Math.min(1,Math.max(.01*h,Math.abs(f))):0;if(16<l&&e){var k=Ja(a.B,b),m=Ja(a.L,c),n=Ja(a.M,d);return Xa(a.H,(function(x){a.B=k(x);a.L=m(x);a.M=n(x);Y(a)}),l).thenAlways((function(){a.B=b;a.L=c;a.M=d;Y(a)}))}a.B=b;a.L=c;a.M=d;return Y(a)}function Bb(a){var b=C(a.B,a.ba,a.W,0);b!=a.B&&U(a,b);var c=V(a,a.L/a.B*b,!1),d=W(a,a.M/a.B*b,!1);return X(a,b,c,d,!0).then((function(){a.Na=a.B;a.F=a.L;a.G=a.M;var e=bb(a.win,"amp-pan-zoom.transformEnd",{scale:a.B,x:a.L,y:a.M});a.Oa.trigger(a.element,"transformEnd",e,3);e=a.element;var f=e.ownerDocument.createEvent("Event");f.data={};f.initEvent("transformEnd",ra.bubbles,ra.cancelable);e.dispatchEvent(f)}))}AMP.registerElement("amp-pan-zoom",qb,".i-amphtml-pan-zoom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}.i-amphtml-pan-zoom-scrollable{cursor:all-scroll}.amp-pan-zoom-button{position:absolute;right:12px;width:36px;height:36px;bottom:12px;background-repeat:no-repeat;background-position:50%;box-shadow:1px 1px 2px;background-color:#fff;border-radius:3px}.amp-pan-zoom-in-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-pan-zoom-out-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13H5v-2h14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/")}});//# sourceMappingURL=amp-pan-zoom-0.1.js.map