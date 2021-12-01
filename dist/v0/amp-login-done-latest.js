(function(){"use strict";var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}return function(){throw Error("Cannot find global object")}()}var da=ca(this);"function"===typeof Symbol&&Symbol("x");var ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;function ka(){this.A=new la}ka.prototype.abort=function(){this.A.P||(this.A.P=!0,this.A.I&&this.A.I({type:"abort",bubbles:!1,cancelable:!1,target:this.A,currentTarget:this.A}))};da.Object.defineProperties(ka.prototype,{signal:{configurable:!0,enumerable:!0,get:function(){return this.A}}});function la(){this.P=!1;this.I=null}da.Object.defineProperties(la.prototype,{aborted:{configurable:!0,enumerable:!0,get:function(){return this.P}},onabort:{configurable:!0,enumerable:!0,get:function(){return this.I},set:function(a){this.I=a}}});function ma(a,b){var c=b||0,d=this.length;for(b=0<=c?c:Math.max(d+c,0);b<d;b++){var e=this[b];if(e===a||a!==a&&e!==e)return!0}return!1}var na;function oa(){return na?na:na=Promise.resolve(void 0)}function pa(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function qa(a){var b;if(null==(b=Object.getOwnPropertyDescriptor(a,"message"))?0:b.writable)return a;var c=a.stack;b=Error(a.message);for(var d in a)b[d]=a[d];b.stack=c;return b}function ra(a){for(var b=null,c="",d=r(arguments),e=d.next();!e.done;e=d.next())e=e.value,e instanceof Error&&!b?b=qa(e):(c&&(c+=" "),c+=e);b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function t(a){var b=ra.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function sa(a){var b=ra.apply(null,arguments);b.expected=!0;return b}var ta=Object.prototype,ua=ta.hasOwnProperty,va=ta.toString;var wa=/^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,xa="annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),ya={childList:!0,subtree:!0};function za(a,b){if(!wa.test(b)||xa.includes(b))throw new a('invalid custom element name "'+b+'"')}function x(a,b){this.C=a;this.K=b;this.W=Object.create(null)}x.prototype.define=function(a,b,c){this.K.define(a,b,c);var d=this.W,e=d[a];e&&(e.resolve(),delete d[a])};x.prototype.get=function(a){var b=this.K.getByName(a);if(b)return b.ctor};x.prototype.whenDefined=function(a){za(this.C.SyntaxError,a);if(this.K.getByName(a))return oa();var b=this.W,c=b[a];c||(c=new pa,b[a]=c);return c.promise};x.prototype.upgrade=function(a){this.K.upgrade(a)};function Aa(a){this.C=a;this.O=Object.create(null);this.o="";this.F=this.N=null;this.T=[a.document]}m=Aa.prototype;m.current=function(){var a=this.N;this.N=null;return a};m.getByName=function(a){var b=this.O[a];if(b)return b};m.getByConstructor=function(a){var c,b=this.O;for(c in b){var d=b[c];if(d.ctor===a)return d}};m.define=function(a,b,c){var d=this.C,e=d.Error;d=d.SyntaxError;if(c)throw new e("Extending native custom elements is not supported");za(d,a);if(this.getByName(a)||this.getByConstructor(b))throw new e('duplicate definition "'+a+'"');this.O[a]={name:a,ctor:b};Ba(this,a);b=r(this.T);for(c=b.next();!c.done;c=b.next())this.upgrade(c.value,a)};m.upgrade=function(a,b){var c=!!b,d=Ca(a,b||this.o);a=r(d);for(var e=a.next();!e.done;e=a.next())e=e.value,c?Da(this,e):this.upgradeSelf(e)};m.upgradeSelf=function(a){var b=this.getByName(a.localName);b&&Ea(this,a,b)};function Ca(a,b){return b&&a.querySelectorAll?a.querySelectorAll(b):[]}function Ea(a,b,c){c=c.ctor;if(!(b instanceof c)){a.N=b;try{if(new c!==b)throw new a.C.Error("Constructor illegally returned a different instance.")}catch(d){t(d)}}}function Da(a,b){var c=a.getByName(b.localName);if(c&&(Ea(a,b,c),b.connectedCallback))try{b.connectedCallback()}catch(d){t(d)}}function Ba(a,b){if(a.o)a.o+=","+b;else{a.o=b;var c=new a.C.MutationObserver((function(e){e&&Fa(a,e)}));a.F=c;b=r(a.T);for(var d=b.next();!d.done;d=b.next())c.observe(d.value,ya);Ga(a.C,a)}}m.observe=function(a){this.T.push(a);this.F&&this.F.observe(a,ya)};m.sync=function(){this.F&&Fa(this,this.F.takeRecords())};function Fa(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next()){var d=c.value;if(d){c=d;var e=c.removedNodes;c=r(c.addedNodes);for(var f=c.next();!f.done;f=c.next()){f=f.value;var g=Ca(f,a.o);Da(a,f);var h=r(g);for(f=h.next();!f.done;f=h.next())Da(a,f.value)}c=r(e);for(f=c.next();!f.done;f=c.next()){f=f.value;var k=Ca(f,a.o);if(f.disconnectedCallback)try{f.disconnectedCallback()}catch(l){t(l)}h=r(k);for(f=h.next();!f.done;f=h.next())if(f=f.value,f.disconnectedCallback)try{f.disconnectedCallback()}catch(l){t(l)}}}}}function Ga(a,b){var c=a.document,d=a.Document.prototype,e=a.Element.prototype,f=a.Node.prototype,g=d.createElement,h=d.importNode,k=f.appendChild,l=f.cloneNode,q=f.insertBefore,p=f.removeChild,v=f.replaceChild;d.createElement=function(n){var J=b.getByName(n);return J?new J.ctor:g.apply(this,arguments)};d.importNode=function(){var n=h.apply(this,arguments);n&&this===c&&(b.upgradeSelf(n),b.upgrade(n));return n};f.appendChild=function(){var n=k.apply(this,arguments);b.sync();return n};f.insertBefore=function(){var n=q.apply(this,arguments);b.sync();return n};f.removeChild=function(){var n=p.apply(this,arguments);b.sync();return n};f.replaceChild=function(){var n=v.apply(this,arguments);b.sync();return n};f.cloneNode=function(){var n=l.apply(this,arguments);n.ownerDocument===c&&(b.upgradeSelf(n),b.upgrade(n));return n};var u=e,w=Object.getOwnPropertyDescriptor(u,"innerHTML");w||(u=Object.getPrototypeOf(a.HTMLElement.prototype),w=Object.getOwnPropertyDescriptor(u,"innerHTML"));var K;if(null==(K=w)?0:K.configurable){var V=w.set;w.set=function(n){V.call(this,n);b.upgrade(this)};Object.defineProperty(u,"innerHTML",w)}}function Ha(){function a(){var q=this.constructor,p=g.current();p||(p=g.getByConstructor(q),p=f.call(e,p.name));Ia(p,q.prototype);return p}var b=y,c=b.Element,d=b.HTMLElement,e=b.document,f=e.createElement,g=new Aa(b),h=new x(b,g);Object.defineProperty(b,"customElements",{enumerable:!0,configurable:!0,value:h});c=c.prototype;var k=c.attachShadow,l=c.createShadowRoot;k&&(c.attachShadow=function(q){var p=k.apply(this,arguments);g.observe(p);return p},c.attachShadow.toString=function(){return k.toString()});l&&(c.createShadowRoot=function(){var q=l.apply(this,arguments);g.observe(q);return q},c.createShadowRoot.toString=function(){return l.toString()});Ja(d,a);b.HTMLElementOrig=b.HTMLElement;b.HTMLElement=a;a.call||(a.apply=b.Function.apply,a.bind=b.Function.bind,a.call=b.Function.call)}function Ka(){function a(){return d.construct(c,[],this.constructor)}var b=y,c=b.HTMLElement,d=b.Reflect;Ja(c,a);b.HTMLElementOrig=b.HTMLElement;b.HTMLElement=a}function Ja(a,b){b.prototype=Object.create(a.prototype,{constructor:{configurable:!0,writable:!0,value:b}});Ia(b,a)}function Ia(a,b){if(Object.setPrototypeOf)Object.setPrototypeOf(a,b);else if({__proto__:{test:!0}}.test)a.__proto__=b;else for(;null!==b&&!Object.isPrototypeOf.call(b,a);){for(var c=r(Object.getOwnPropertyNames(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.hasOwnProperty.call(a,d)){var e=Object.getOwnPropertyDescriptor(b,d);Object.defineProperty(a,d,e)}b=Object.getPrototypeOf(b)}}function La(a){return a==this||this.documentElement.contains(a)}var z=Array.isArray;function Ma(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d);return c}function Na(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}function Oa(a){return 1==(null==a?void 0:a.nodeType)?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function Pa(a){return 0<=a.indexOf("​​​")}function Qa(a,b,c,d){var e=void 0===c?"Assertion failed":c;if(b)return b;a&&-1==e.indexOf(a)&&(e+=a);for(var f=3,g=e.split("%s"),h=g.shift(),k=[h];g.length;){var l=arguments[f++],q=g.shift();h+=Oa(l)+q;k.push(l,q.trim())}f=Error(h);f.messageArray=Ma(k,(function(u){return""!==u}));var p,v;null==(v=(p=self).__AMP_REPORT_ERROR)||v.call(p,f);throw f}function A(a,b,c,d,e){z(e)?a(c,e.concat([b])):a(c,(e||d)+": %s",b);return b}function Ra(a){return JSON.parse(a)}function Sa(a){if("undefined"!==typeof TextEncoder)a=new TextEncoder("utf-8").encode(a);else{a=unescape(encodeURIComponent(a));for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);b[c]=d}a=b}return a}function Ta(a){var b=!1,c=null,d=a;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];b||(c=d.apply(self,f),b=!0,d=null);return c}}var Ua=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function Va(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function Wa(a){var b=Object.create(null);if(!a)return b;for(var c;c=Ua.exec(a);){var d=Va(c[1],c[1]);c=c[2]?Va(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}function B(a){a=(a||self).location;return Wa(a.originalHash||a.hash)}var C=self.AMP_CONFIG||{},Xa=("string"==typeof C.cdnProxyRegex?new RegExp(C.cdnProxyRegex):C.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Ya(a){if(!self.document||!self.document.head||self.location&&Xa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var D={thirdParty:C.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:C.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof C.thirdPartyFrameRegex?new RegExp(C.thirdPartyFrameRegex):C.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:C.cdnUrl||Ya("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:Xa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:C.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:C.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:C.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:C.geoApiUrl||Ya("amp-geo-api")};var Za="";function E(a){a=a||self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{var c=B(a)||B(a);c=["1","actions","amp","amp4ads","amp4email"].includes(c.development)||!!a.AMP_DEV_MODE;Za||(Za=(null==(b=a.AMP_CONFIG)?void 0:b.v)||"012110171511011");b=a.__AMP_MODE={localDev:!1,development:c,esm:!1,test:!1,rtvVersion:Za}}return b}function $a(){}function ab(a,b){return b.reduce((function(c,d){return c+"&s[]="+encodeURIComponent(String(Oa(d)))}),"https://log.amp.dev/?v=012110171511011&id="+encodeURIComponent(a))}function bb(a,b,c){var d=this,e=c=void 0===c?"":c;this.win=a;this.$=b;this.aa=cb(this);this.G=e;this.R=null;this.Z=Ta((function(){a.fetch(D.cdn+"/rtv/012110171511011/log-messages.simple.json").then((function(f){return f.json()}),$a).then((function(f){f&&(d.R=f)}))}));this.D=this.assert.bind(this)}function cb(a){var c,b=a.win;return null!=(c=b.console)&&c.log&&0!=parseInt(B(b).log,10)?a.$(parseInt(B(void 0).log,10),E().development):0}function F(a,b,c,d){if(c>a.aa)return!1;var f,e=a.win.console,g={};c=null!=(f=(g[1]=e.error,g[3]=e.info,g[2]=e.warn,g)[c])?f:e.log;a=z(d[0])?db(a,d[0]):d;b="["+b+"]";"string"==typeof a[0]?a[0]=b+" "+a[0]:a.unshift(b);c.apply(e,a);return!0}m=bb.prototype;m.fine=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];F(this,a,4,c)};m.info=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];F(this,a,3,c)};m.warn=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];F(this,a,2,c)};m.error=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!F(this,a,1,c)){c=this.createError.apply(this,c);c.name=a||c.name;var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,c)}};m.expectedError=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!F(this,a,1,c)){var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,this.createExpectedError.apply(this,c))}};m.createError=function(a){return eb(this,ra.apply(null,arguments))};m.createExpectedError=function(a){return eb(this,sa.apply(null,arguments))};function eb(a,b){b=qa(b);a.G?b.message?-1==b.message.indexOf(a.G)&&(b.message+=a.G):b.message=a.G:Pa(b.message)&&(b.message=b.message.replace("​​​",""));return b}function db(a,b){var c=b.shift();E(a.win).development&&a.Z();var d;return(null==(d=a.R)?0:d[c])?[a.R[c]].concat(b):["More info at "+ab(c,b)]}m.assert=function(a,b,c){return z(b)?this.assert.apply(this,[a].concat(db(this,b))):Qa.apply(null,[this.G].concat(Array.prototype.slice.call(arguments)))};m.assertElement=function(a,b){return A(this.D,a,1==(null==a?void 0:a.nodeType),"Element expected",b)};m.assertString=function(a,b){return A(this.D,a,"string"==typeof a,"String expected",b)};m.assertNumber=function(a,b){return A(this.D,a,"number"==typeof a,"Number expected",b)};m.assertArray=function(a,b){return A(this.D,a,z(a),"Array expected",b)};m.assertBoolean=function(a,b){return A(this.D,a,!!a===a,"Boolean expected",b)};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG,fb=null;function gb(a,b){if(!fb)throw Error("failed to call initLogConstructor");return new fb(self,a,b)}function H(){G.user||(G.user=hb());return G.user}function hb(){return gb((function(a,b){return b||1<=a?4:2}),"​​​")}function ib(){return G.dev||(G.dev=gb((function(a){return 3<=a?4:2<=a?3:0})))}var jb={document:1,text:2},kb=["GET","POST"];function lb(a,b){var c=b=void 0===b?{}:b;return new Promise((function(d,e){var f=mb(c.method||"GET"),g=nb(f,a);"include"==c.credentials&&(g.withCredentials=!0);c.responseType in jb&&(g.responseType=c.responseType);c.headers&&Object.keys(c.headers).forEach((function(h){g.setRequestHeader(h,c.headers[h])}));g.onreadystatechange=function(){2>g.readyState||(100>g.status||599<g.status?(g.onreadystatechange=null,e(H().createExpectedError("Unknown HTTP status "+g.status))):4==g.readyState&&d(new I(g)))};g.onerror=function(){e(H().createExpectedError("Network failure"))};g.onabort=function(){e(H().createExpectedError("Request aborted"))};"POST"==f?g.send(c.body):g.send()}))}function nb(a,b){var c=new XMLHttpRequest;if("withCredentials"in c)c.open(a,b,!0);else throw ib().createExpectedError("CORS is not supported");return c}function I(a){this.B=a;this.status=this.B.status;this.statusText=this.B.statusText;this.ok=200<=this.status&&300>this.status;this.headers=new ob(a);this.bodyUsed=!1;this.body=null;this.url=a.responseURL}I.prototype.clone=function(){return new I(this.B)};function pb(a){a.bodyUsed=!0;return Promise.resolve(a.B.responseText)}I.prototype.text=function(){return pb(this)};I.prototype.json=function(){return pb(this).then(Ra)};I.prototype.arrayBuffer=function(){return pb(this).then(Sa)};function mb(a){if(void 0===a)return"GET";a=a.toUpperCase();kb.includes(a);return a}function ob(a){this.B=a}ob.prototype.get=function(a){return this.B.getResponseHeader(a)};ob.prototype.has=function(a){return null!=this.B.getResponseHeader(a)};function L(a,b){var c=b=void 0===b?{}:b,d=Object.create(null);a=Object.assign({},{status:200,statusText:"OK",responseText:a?String(a):"",getResponseHeader:function(f){var g=String(f).toLowerCase();return ua.call(d,g)?d[g]:null}},c);a.status=void 0===c.status?200:parseInt(c.status,10);if(z(c.headers))c.headers.forEach((function(f){var g=f[1];d[String(f[0]).toLowerCase()]=String(g)}));else if("[object Object]"===va.call(c.headers))for(var e in c.headers)d[String(e).toLowerCase()]=String(c.headers[e]);c.statusText&&(a.statusText=String(c.statusText));I.call(this,a)}var M=I;L.prototype=ba(M.prototype);L.prototype.constructor=L;if(ja)ja(L,M);else for(var N in M)if("prototype"!=N)if(Object.defineProperties){var qb=Object.getOwnPropertyDescriptor(M,N);qb&&Object.defineProperty(L,N,qb)}else L[N]=M[N];L.da=M.prototype;
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */var rb;function sb(){var a=this.isConnected;if(void 0===a){a=this;do{if(Node.prototype.getRootNode)a=a.getRootNode()||a;else for(;a.parentNode&&(!a||"I-AMPHTML-SHADOW-ROOT"!=a.tagName&&(11!=a.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(a)));a=a.parentNode);if(a.host)a=a.host;else break}while(1);a=a.nodeType===Node.DOCUMENT_NODE}return a?rb.call(this):{left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}}function tb(){var a=ub;if(!a.document)return!1;try{return 0!==a.document.createElement("div").getBoundingClientRect().top}catch(b){return!0}}function vb(){var a=O.IntersectionObserver,b=P;return function(c,d){var e;return 9===(null==d?void 0:null==(e=d.root)?void 0:e.nodeType)?new b(c,d):new a(c,d)}}function wb(){var a=Q;try{return new a.IntersectionObserver((function(){}),{root:a.document}),!0}catch(b){return!1}}function P(a,b){this.M=a;this.J=Object.assign({},{root:null,rootMargin:"0px 0px 0px 0px"},b);this.j=[];this.h=null;P._upgraders.push(this.V.bind(this))}m=P.prototype;m.disconnect=function(){this.h?this.h.disconnect():this.j.length=0};m.takeRecords=function(){return this.h?this.h.takeRecords():[]};m.observe=function(a){this.h?this.h.observe(a):-1==this.j.indexOf(a)&&this.j.push(a)};m.unobserve=function(a){this.h?this.h.unobserve(a):(a=this.j.indexOf(a),-1!=a&&this.j.splice(a,1))};m.V=function(a){var b=new a(this.M,this.J);this.h=b;a=r(this.j);for(var c=a.next();!c.done;c=a.next())b.observe(c.value);this.j.length=0};da.Object.defineProperties(P.prototype,{root:{configurable:!0,enumerable:!0,get:function(){return this.h?this.h.root:this.J.root||null}},rootMargin:{configurable:!0,enumerable:!0,get:function(){return this.h?this.h.rootMargin:this.J.rootMargin}},thresholds:{configurable:!0,enumerable:!0,get:function(){return this.h?this.h.thresholds:[].concat(this.J.threshold||0)}}});P._upgraders=[];function xb(){var a=yb;!a.IntersectionObserverEntry||"isIntersecting"in a.IntersectionObserverEntry.prototype||Object.defineProperty(a.IntersectionObserverEntry.prototype,"isIntersecting",{enumerable:!0,configurable:!0,get:function(){return 0<this.intersectionRatio}})}function zb(a){return(a=Number(a))?0<a?1:-1:a}var Ab=Object.prototype.hasOwnProperty;function Bb(a,b){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(null!=e)for(var f in e)Ab.call(e,f)&&(c[f]=e[f])}return c}function Cb(a){return Object.keys(a).map((function(b){return a[b]}))}function R(a){if(!(this instanceof R))throw new TypeError("Constructor Promise requires `new`");if(!S(a))throw new TypeError("Must pass resolver function");this._state=Db;this._value=[];this._isChainEnd=!0;Eb(this,Fb(this,Gb),Fb(this,Hb),{then:a})}R.prototype.then=function(a,b){a=S(a)?a:void 0;b=S(b)?b:void 0;if(a||b)this._isChainEnd=!1;return this._state(this._value,a,b)};R.prototype.catch=function(a){return this.then(void 0,a)};function Ib(a){return a===Object(a)&&a instanceof this?a:new this((function(b){b(a)}))}function Jb(a){return new this((function(b,c){c(a)}))}function Kb(a){var b=this;return new b((function(c,d){var e=a.length,f=Array(e);if(0===e)return c(f);Lb(a,(function(g,h){b.resolve(g).then((function(k){f[h]=k;0===--e&&c(f)}),d)}))}))}function Mb(a){var b=this;return new b((function(c,d){for(var e=0;e<a.length;e++)b.resolve(a[e]).then(c,d)}))}function Gb(a,b,c,d){if(!b)return d&&(b=d.promise,b._state=Gb,b._value=a),this;d||(d=new Nb(this.constructor));Ob(Pb(d,b,a));return d.promise}function Hb(a,b,c,d){if(!c)return d&&(b=d.promise,b._state=Hb,b._value=a),this;d||(d=new Nb(this.constructor));Ob(Pb(d,c,a));return d.promise}function Db(a,b,c,d){if(!d){if(!b&&!c)return this;d=new Nb(this.constructor)}a.push({deferred:d,onFulfilled:b||d.resolve,onRejected:c||d.reject});return d.promise}function Nb(a){var b=this;this.promise=new a((function(c,d){b.resolve=c;b.reject=d}));return b}function Qb(a,b,c,d){var e=a._value;a._state=b;a._value=c;d&&b===Db&&d._state(c,void 0,void 0,{promise:a,resolve:void 0,reject:void 0});for(var f=0;f<e.length;f++){var g=e[f];a._state(c,g.onFulfilled,g.onRejected,g.deferred)}e.length=0;d&&(d._isChainEnd=!1);b===Hb&&a._isChainEnd&&setTimeout((function(){if(a._isChainEnd)throw c}),0)}function Fb(a,b){return function(c){Qb(a,b,c)}}function Rb(){}function S(a){return"function"===typeof a}function Lb(a,b){for(var c=0;c<a.length;c++)b(a[c],c)}function Pb(a,b,c){var d=a.promise,e=a.resolve,f=a.reject;return function(){try{var g=b(c);Eb(d,e,f,g,g)}catch(h){f(h)}}}var Ob=function(){function a(){for(var e=0;e<d;e++){var f=c[e];c[e]=null;f()}d=0}if("undefined"!==typeof window&&window.postMessage){window.addEventListener("message",a);var b=function(){window.postMessage("macro-task","*")}}else b=function(){setTimeout(a,0)};var c=Array(16),d=0;return function(e){0===d&&b();c[d++]=e}}();function Eb(a,b,c,d,e){var g,f=c;try{if(d===a)throw new TypeError("Cannot fulfill promise with itself");var h=d===Object(d);if(h&&d instanceof a.constructor)Qb(a,d._state,d._value,d);else if(h&&(g=d.then)&&S(g)){var k=function(l){k=f=Rb;Eb(a,b,c,l,l)};f=function(l){k=f=Rb;c(l)};g.call(e,(function(l){k(l)}),(function(l){f(l)}))}else b(d)}catch(l){f(l)}}function T(a){this.M=a;this.j=[];this.h=null;T._upgraders.push(this.V.bind(this))}T.prototype.disconnect=function(){this.h?this.h.disconnect():this.j.length=0};T.prototype.observe=function(a){this.h?this.h.observe(a):-1==this.j.indexOf(a)&&this.j.push(a)};T.prototype.unobserve=function(a){this.h?this.h.unobserve(a):(a=this.j.indexOf(a),-1!=a&&this.j.splice(a,1))};T.prototype.V=function(a){this.h=a=new a(this.M);for(var b=r(this.j),c=b.next();!c.done;c=b.next())a.observe(c.value);this.j.length=0};T._upgraders=[];function Sb(a,b){return this.substr(0<b?0|b:0,a.length)===a}var Tb=self;Tb.fetch||(Object.defineProperty(Tb,"fetch",{value:lb,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(Tb,"Response",{value:L,writable:!0,enumerable:!1,configurable:!0}));var Ub=self;Ub.Math.sign||Ub.Object.defineProperty(Ub.Math,"sign",{enumerable:!1,configurable:!0,writable:!0,value:zb});var Vb=self;Vb.Object.assign||Vb.Object.defineProperty(Vb.Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:Bb});var Wb=self;Wb.Object.values||Wb.Object.defineProperty(Wb.Object,"values",{configurable:!0,writable:!0,value:Cb});var U=self;U.Promise||(U.Promise=R,R.default&&(U.Promise=R.default),U.Promise.resolve=Ib,U.Promise.reject=Jb,U.Promise.all=Kb,U.Promise.race=Mb);var Xb=self;Xb.Array.prototype.includes||Xb.Object.defineProperty(Xb.Array.prototype,"includes",{enumerable:!1,configurable:!0,writable:!0,value:ma});(function(){var a=self,b=a.Map,c=new b;if(c.set(0,0)!==c){var d=c.set;a.Object.defineProperty(b.prototype,"set",{enumerable:!1,configurable:!0,writable:!0,value:function(){d.apply(this,arguments);return this}})}})();(function(){var a=self,b=a.WeakMap,c=new b;if(c.set({},0)!==c){var d=c.set;a.Object.defineProperty(b.prototype,"set",{enumerable:!1,configurable:!0,writable:!0,value:function(){d.apply(this,arguments);return this}})}})();(function(){var a=self,b=a.Set,c=new b([1]);1>c.size&&(a.Set=function(e){var f=new b;if(e){var g=e?Array.prototype.slice.call(e):[];for(e=0;e<g.length;e++)f.add(g[e])}return f});if(c.add(0)!==c){var d=c.add;a.Object.defineProperty(b.prototype,"add",{enumerable:!1,configurable:!0,writable:!0,value:function(){d.apply(this,arguments);return this}})}})();var Yb=self;Yb.String.prototype.startsWith||Yb.Object.defineProperty(Yb.String.prototype,"startsWith",{enumerable:!1,configurable:!0,writable:!0,value:Sb});if(self.document){var Zb=self,$b=Zb.HTMLDocument||Zb.Document;$b&&!$b.prototype.contains&&Zb.Object.defineProperty($b.prototype,"contains",{enumerable:!1,configurable:!0,writable:!0,value:La});var ub=self;tb()&&(rb=Element.prototype.getBoundingClientRect,ub.Object.defineProperty(ub.Element.prototype,"getBoundingClientRect",{value:sb}));var cc,ac=function(){},y=self,bc=y.document,W=y.customElements;cc=!!(W&&W.define&&W.get&&W.whenDefined);var dc;if(!(dc=!bc)){var ec;if(ec=cc)ec=-1===y.HTMLElement.toString().indexOf("[native code]");dc=ec}if(!dc){var fc=!0,gc=!1;if(ac&&cc)try{var hc=y.Reflect,ic=Object.create(ac.prototype);Function.call.call(ac,ic);gc=!(null==hc||!hc.construct)}catch(a){fc=!1}gc?Ka():fc&&Ha()}var jc,yb=self,Q=yb;(jc=!Q.IntersectionObserver||!Q.IntersectionObserverEntry||!!Q.IntersectionObserver._stub||!wb())||(jc=/apple/i.test(Q.navigator.vendor));if(jc){var O=yb;if(O.IntersectionObserver){var kc=O.IntersectionObserver;O.IntersectionObserver=vb();O.IntersectionObserver._stub=P;O.IntersectionObserver._native=kc}else O.IntersectionObserver=P,O.IntersectionObserver._stub=P}xb();var X=self;X.ResizeObserver&&!X.ResizeObserver._stub||X.ResizeObserver||(X.ResizeObserver=T,X.ResizeObserver._stub=T);var lc=self;lc.AbortController||(Object.defineProperty(lc,"AbortController",{configurable:!0,enumerable:!1,writable:!0,value:ka}),Object.defineProperty(lc,"AbortSignal",{configurable:!0,enumerable:!1,writable:!0,value:la}))}function mc(a){return"loading"!=a.readyState&&"uninitialized"!=a.readyState}function nc(a,b){var c=mc(a);if(c)b(a);else{var d=function(){mc(a)&&(c||(c=!0,b(a)),a.removeEventListener("readystatechange",d))};a.addEventListener("readystatechange",d)}}var Y;function oc(a,b){function c(g){try{return e(g)}catch(l){var h,k;null==(k=(h=self).__AMP_REPORT_ERROR)||k.call(h,l);throw l}}var d=a,e=b,f=pc();d.addEventListener("message",c,f?void 0:!1);return function(){var g;null==(g=d)||g.removeEventListener("message",c,f?void 0:!1);c=d=e=null}}function pc(){if(void 0!==Y)return Y;Y=!1;try{var a={get capture(){Y=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Y}function qc(a,b){return oc(a,b)}function rc(){this.X=100;this.L=this.U=0;this.H=Object.create(null)}rc.prototype.has=function(a){return!!this.H[a]};rc.prototype.get=function(a){var b=this.H[a];if(b)return b.access=++this.L,b.payload};rc.prototype.put=function(a,b){this.has(a)||this.U++;this.H[a]={payload:b,access:this.L};if(!(this.U<=this.X)){a=this.H;var d,c=this.L+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.U--)}};new Set(["c","v","a","ad"]);var sc,tc;function uc(a){sc||(sc=self.document.createElement("a"),tc=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new rc));var b=sc,c=tc;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function vc(){this.win=window}vc.prototype.start=function(){var a=this.win.document,b=a.createElement("style");a:{var c=Wa(this.win.location.search),d=this.win;var e=d.document;d=d.navigator;c=[c.hl,d.language,d.userLanguage,"en-US"];for(d=0;d<c.length;d++){var f=c[d];if(f){if(f){f=f.split("-");for(var g="",h="",k=0;k<f.length;k++)0<k&&(g+=", ",h+="-"),h+=0==k?f[k].toLowerCase():f[k].toUpperCase(),h=h.replace(/[^a-zA-Z\-]/g,""),g+='[lang="'+h+'"]';f=g}else f=null;if(f&&e.querySelector(f)){e=f+" {display: block}";break a}}}e=""}b.textContent=e;a.head.appendChild(b);a=Wa(this.win.location.search);this.win.opener&&this.win.opener!=this.win?wc(this).then(this.ba.bind(this),this.S.bind(this)):a.url?(e=a.url,/^https?%/i.test(e)&&(e=Va(e)),a=this.win.location,b=a.replace,c=/^https?:/i.test(e),H().assert(c,'URL must start with "http://" or "https://". Invalid value: %s',e,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0),e=uc(e).href,b.call(a,e),oa()):(a=Error("No opener or return location available"),this.S(a),Promise.reject(a))};function wc(a){function b(){}var c=a.win.location.hash;return new Promise((function(d,e){var f=a.win.opener;f?(b=qc(a.win,(function(g){g.data&&"amp"==g.data.sentinel&&"result-ack"==g.data.type&&d()})),f.postMessage({sentinel:"amp",type:"result",result:c},"*"),a.win.setTimeout((function(){e(Error("Timed out"))}),5e3)):e(Error("Opener not available"))})).then((function(){b()}),(function(d){b();throw d}))}vc.prototype.ba=function(){var a=this;try{this.win.close()}catch(d){}var b=Date.now()+6e4,c=this.win.setInterval((function(){if(a.win.closed||Date.now()>b)clearInterval(c);else try{a.win.close()}catch(d){}}),500);this.win.setTimeout((function(){a.S(Error("Failed to close the dialog"))}),3e3)};vc.prototype.S=function(a){var b=this;this.win.console&&this.win.console.log&&(this.win.console.error||this.win.console.log).call(this.win.console,"Postback failed: ",a);var c=this.win.document;c.documentElement.classList.toggle("amp-error",!0);c.documentElement.setAttribute("data-error","postback");c.getElementById("closeButton").onclick=function(){try{b.win.close()}catch(d){}b.win.setTimeout((function(){b.win.closed||c.documentElement.setAttribute("data-error","close")}),1e3)}};function xc(){var a=yc();return function(b){return setTimeout(b,a())}}function yc(){var a=0;return function(){var b=Math.pow(1.5,a++);var c=b*(c||.3)*Math.random();.5<Math.random()&&(c*=-1);b+=c;return 1e3*b}}function zc(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Ac(a,"ampdoc")}function Bc(a){var b=Cc(a);b=Cc(b);b=b.isSingleDoc()?b.win:b;return Ac(b,"viewer")}function Cc(a){return a.nodeType?zc((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function Ac(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}var Dc,Ec="Webkit webkit Moz moz ms O o".split(" ");var Fc=!1;function Gc(a){if(!Fc){Fc=!0;a=a.body;var c,b={opacity:1,visibility:"visible",animation:"none"};for(c in b){var d=a,e=b[c];var f=d.style;var g=c;if(g.startsWith("--"))f=g;else{Dc||(Dc=Object.create(null));var h=Dc[g];if(!h){h=g;if(void 0===f[g]){var k=g;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var l=0;l<Ec.length;l++){var q=Ec[l]+k;if(void 0!==f[q]){k=q;break b}}k=""}void 0!==f[k]&&(h=k)}Dc[g]=h}f=h}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}}var Z=self.__AMP_ERRORS||[];self.__AMP_ERRORS=Z;function Hc(a){Hc=xc();return Hc(a)}function Ic(a){try{return JSON.stringify(a)}catch(b){return String(a)}}function Jc(a,b,c,d,e){var f=this;!this||!this.document||e&&e.expected||Gc(this.document);if(!E().development){var g=!1;try{g=Kc()}catch(k){}if(!(g&&.01<Math.random())){var h=Lc(a,b,c,d,e,g);h&&Hc((function(){try{return Mc(f,h).catch((function(){}))}catch(k){}}))}}}function Mc(a,b){return b.pt&&.9>Math.random()?oa():Nc(a,b).then((function(c){if(!c){var d=new XMLHttpRequest;d.open("POST",.1>Math.random()?D.betaErrorReporting:D.errorReporting,!0);d.send(JSON.stringify(b))}}))}function Nc(a,b){a=zc(a);if(!a.isSingleDoc())return Promise.resolve(!1);var c=a.getSingleDoc();if(!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var d=Bc(c);return d.hasCapability("errorReporter")?d.isTrustedViewer().then((function(e){if(!e)return!1;d.sendMessage.call(d,"error",{m:b.m,a:b.a,s:b.s,el:b.el,ex:b.ex,v:b.v,pt:b.pt});return!0})):Promise.resolve(!1)}function Lc(a,b,c,d,e,f){var g=a;e&&(g=e.message?e.message:String(e));g||(g="Unknown error");a=g;var h=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var k=!(self&&self.window),l=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||k)if(h=!0,.001<l)return;var q=Pa(a);if(!(q&&.1<l)){g=Object.create(null);g.v=E().rtvVersion;g.noAmp=f?"1":"0";g.m=a.replace("​​​","");g.a=q?"1":"0";g.ex=h?"1":"0";g.dw=k?"1":"0";var p="1p";self.context&&self.context.location?(g["3p"]="1",p="3p"):E().runtime&&(p=E().runtime);g.rt=p;"inabox"===p&&(g.adid=E().a4aId);var v;f=!(null==(v=self.AMP_CONFIG)||!v.canary);g.ca=f?"1":"0";var u;v=(null==(u=self.AMP_CONFIG)?void 0:u.type)||"unknown";g.bt=v;self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(g.or=self.location.ancestorOrigins[0]);self.viewerState&&(g.vs=self.viewerState);self.parent&&self.parent!=self&&(g.iem="1");if(self.AMP&&self.AMP.viewer){var w=self.AMP.viewer.getResolvedViewerUrl(),K=self.AMP.viewer.maybeGetMessagingOrigin();w&&(g.rvu=w);K&&(g.mso=K)}var V=[];u=self.__AMP__EXPERIMENT_TOGGLES||null;for(var n in u)V.push(n+"="+(u[n]?"1":"0"));g.exps=V.join(",");if(e){var J;g.el=(null==(J=e.associatedElement)?void 0:J.tagName)||"u";e.args&&(g.args=JSON.stringify(e.args));q||e.ignoreStack||!e.stack||(g.s=e.stack);e.message&&(e.message+=" _reported_")}else g.f=b||"",g.l=c||"",g.c=d||"";g.r=self.document?self.document.referrer:"";g.ae=Z.join(",");g.fr=self.location.originalHash||self.location.hash;"production"===g.bt&&(g.pt="1");b=a;25<=Z.length&&Z.splice(0,Z.length-25+1);Z.push(b);return g}}}function Kc(){var a=self;if(!a.document)return!1;a=a.document.querySelectorAll("script[src]");for(var b=0;b<a.length;b++){var c=D.cdnProxyRegex,d=c.test;var e=a[b].src.toLowerCase();e="string"==typeof e?uc(e):e;if(!d.call(c,e.origin))return!0}return!1}(function(){Fc=!0})(window);(function(){fb=bb;ib();H()})();(function(a){self.__AMP_REPORT_ERROR=a})((function(a,b){try{if(a)if(void 0!==a.message)a=qa(a);else{var c=a;a=Error(Ic(c));a.origError=c}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;if(a.messageArray){var d,e=Na(a.messageArray,(function(h){return null==(d=h)?void 0:d.tagName}));-1<e&&(a.associatedElement=a.messageArray[e])}var f=b||a.associatedElement;f&&f.classList&&(f.classList.add("i-amphtml-error"),E().development&&(f.classList.add("i-amphtml-element-error"),f.setAttribute("error-message",a.message)));if(self.console&&(Pa(a.message)||!a.expected)){var g=console.error||console.log;a.messageArray?g.apply(console,a.messageArray):f?g.call(console,a.message,f):g.call(console,a.message)}f&&f.Y&&f.Y("amp:error",a.message);Jc.call(self,void 0,void 0,void 0,void 0,a)}catch(h){setTimeout((function(){throw h}))}return a}));(function(a,b){nc(a,b)})(document,(function(){(new vc).start()}))})();//# sourceMappingURL=amp-login-done-0.1.js.map