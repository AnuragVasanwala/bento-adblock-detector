(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-access-scroll",ev:"0.1",l:true,f:function(AMP,_){"use strict";var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ea={a:!0},p={};try{p.__proto__=ea;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=m;function r(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.fa=b.prototype}var t=Object.prototype.hasOwnProperty;function u(a){return a||{}}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function v(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a}var w=self.AMP_CONFIG||{},x=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function y(a){if(!self.document||!self.document.head||self.location&&x.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var fa={thirdParty:w.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:w.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof w.thirdPartyFrameRegex?new RegExp(w.thirdPartyFrameRegex):w.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:w.cdnUrl||y("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:x,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:w.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:w.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:w.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:w.geoApiUrl||y("amp-geo-api")};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function z(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function A(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=z(c[1],c[1]);c=c[2]?z(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}function B(a){a=(a||self).location;return A(a.originalHash||a.hash)}var C="";function D(){var a=self;if(a.__AMP_MODE)a=a.__AMP_MODE;else{var b=B(a)||B(a);b=["1","actions","amp","amp4ads","amp4email"].includes(b.development)||!!a.AMP_DEV_MODE;if(!C){var c;C=(null==(c=a.AMP_CONFIG)?void 0:c.v)||"012110121450047"}a=a.__AMP_MODE={localDev:!1,development:b,esm:!1,test:!1,rtvVersion:C}}return a}function ia(a){var b=null,c="";var d=arguments;var e="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];d=e?e.call(d):{next:aa(d)};for(e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ja(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];c=ia.apply(null,c);c.name=a||c.name;var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,c)}function ka(a,b){function c(){d=0;var g=1e3-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var h=f;f=null;b.apply(null,h)}}var d=0,e=0,f=null;return function(g){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];e=a.Date.now();f=h;d||(d=a.setTimeout(c,1e3))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E=self.__AMP_LOG;function F(){throw Error("failed to call initLogConstructor")}function G(){return E.dev||(E.dev=F())}function H(a,b,c,d,e,f){E.user||(E.user=F());return E.user.assert(a,b,c,d,e,f,void 0,void 0,void 0,void 0,void 0)}function la(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return J(a,b)}function K(a,b){var c=L(a);c=M(c);return J(c,b)}function L(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function M(a){a=L(a);return a.isSingleDoc()?a.win:a}function J(a,b){a=N(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ma(a){var b=N(a).access;if(b){if(b.promise)return b.promise;J(a,"access");return b.promise=Promise.resolve(b.obj)}return null}function N(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function na(){var a=new la,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function oa(a){return pa(a).then((function(b){return H(b,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","access","amp-access","amp-access","amp-access")}))}function pa(a){var b=ma(M(a));if(b)return b;var c=L(a);return c.whenExtensionsKnown().then((function(){var d=c.getExtensionVersion("amp-access");return d?I(c.win,"extensions").waitForExtension("amp-access",d):null})).then((function(d){if(d){var e=M(a);var f=ma(e);f?e=f:(e=N(e),e.access=na(),e=e.access.promise)}else e=null;return e}))}function qa(a,b,c){var d=this;this.o=a;this.V=null;this.h=b;this.ba=c;var e=ka(a.win,this.ca.bind(this));this.Y=K(a,"viewport");this.P=[];a.whenReady().then((function(){d.Y.onChanged(e);d.P=a.getBody().getElementsByTagName("p")}))}qa.prototype.ca=function(){var a=this;return Promise.all([].slice.call(this.P).map((function(b){return a.Y.getClientRectAsync(b)}))).then((function(b){for(var c=null,d=null,e=b.length-1;0<=e;e--){var f=b[e].bottom;0>=f&&(null===d||d<f)&&(c=e,d=f)}null!==c&&(e=c,a.V!==e&&(a.V=e,ra(a,a.P[e].innerText.substring(0,50))))}))};function ra(a,b){a.h.buildUrl(a.ba+"/amp/updatedepth?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&rd="+encodeURIComponent(b),!1).then((function(c){I(a.o.win,"xhr").fetch(c)}))}var P,sa="Webkit webkit Moz moz ms O o".split(" ");function Q(a){var b=this;this.F=a;this.j=this.A=this.R=null;this.H={width:null,left:null,right:null};this.window=new Promise((function(c){b.R=c}))}k=Q.prototype;k.el=function(a,b,c){var d=v(this.F.win.document,a,b);Array.isArray(c)&&c.forEach((function(e){return d.appendChild(e)}));return d};k.mount=function(){var a=this.A;this.F.getBody().appendChild(a);K(this.F,"viewport").addToFixedLayer(a)};k.mutate=function(a){I(this.F.win,"vsync").mutate(a)};k.toggleClass=function(a,b){var c=this.A.classList;b?c.add(a):c.remove(a)};k.toggleChecked=function(a){this.A.checked=a?!0:!1};k.updateHorizontalLayout=function(a){var b=this,c=!1;Object.keys(this.H).forEach((function(d){if(t.call(a,d)){var e=b.cssSize(a[d]);b.H[d]!==e&&(b.H[d]=e,c=!0)}}));return c};k.renderHorizontalLayout=function(){var a=this.A,b=this.H;"display"in b&&ja("STYLE","`display` style detected. You must use toggle instead.");for(var c in b){var d=a,e=b[c];var f=d.style;var g=c;if(g.startsWith("--"))f=g;else{P||(P=Object.create(null));var h=P[g];if(!h){h=g;if(void 0===f[g]){var l=g;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var O=0;O<sa.length;O++){var da=sa[O]+l;if(void 0!==f[da]){l=da;break b}}l=""}void 0!==f[l]&&(h=l)}P[g]=h}f=h}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}};k.cssSize=function(a){return"number"===typeof a?a+"px":a};function R(a){return"https://connect"+((D().development&&a.etld?a.etld:"")||".scroll.com")}function ta(a,b){return a.buildUrl(b+"?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&p=1.2&x=QUERY_PARAM(scrollx)",!1)}function S(a,b){Q.call(this,a);this.h=b;this.J()}r(S,Q);S.prototype.J=function(){var a=this;this.mutate((function(){a.j||(a.N(),a.R(a.j.contentWindow));a.renderHorizontalLayout()}))};S.prototype.N=function(){var a=this;this.j=this.el("iframe",u({scrolling:"no",frameborder:"0",allowtransparency:"true",title:"Scroll",width:"100%",height:"100%",sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"}));this.A=this.el("div",u({"class":"amp-access-scroll-bar"}),[this.j]);this.mount();ta(this.h,R(this.h.getAdapterConfig())+"/html/amp/scrolltab").then((function(b){a.j.setAttribute("src",b)}))};S.prototype.update=function(a){this.updateHorizontalLayout(a)&&this.J()};var T;function ua(a){var b=window,c=va();b.addEventListener("message",(function(d){try{return a(d)}catch(g){var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,g);throw g}}),c?void 0:!1)}function va(){if(void 0!==T)return T;T=!1;try{var a={get capture(){T=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return T}function U(a){this.G=[];this.W=[];this.X=a;this.O=this.O.bind(this);ua(this.O)}U.prototype.O=function(a){var b=this,c=a.data,d=a.origin===this.X,e="object"===typeof c&&"_scramp"in c,f=-1<this.G.indexOf(a.source);d&&f&&e&&(this.W.forEach((function(g){return g(c)})),this.G.filter((function(g){return g!==a.source})).forEach((function(g){g.postMessage(c,b.X)})))};U.prototype.register=function(a,b){var c=this;b&&this.W.push(b);Promise.resolve(a).then((function(d){-1===c.G.indexOf(d)&&c.G.push(d)}))};function V(a){Q.call(this,a);this.T="Scroll Feature";this.C={url:"",open:!1,title:this.T}}r(V,Q);V.prototype.update=function(a){var b=this,c=!1;switch(a._scramp){case"au":c=this.updateHorizontalLayout(a);["open","url","title"].forEach((function(d){t.call(a,d)&&a[d]!==b.C[d]&&(b.C[d]=a[d],c=!0)}));break;case"st":["revealed"].forEach((function(d){t.call(a,d)&&a[d]!==b.C[d]&&(b.C[d]=a[d],c=!0)}))}c&&this.J(this.C)};V.prototype.J=function(a){var b=this;this.mutate((function(){b.j||(b.N(),b.R(b.j.contentWindow));b.j.src!==a.url&&b.j.setAttribute("src",a.url);b.renderHorizontalLayout();b.j.setAttribute("title",a.title);var c=b.j,d=a.open;void 0===d&&(d=c.hasAttribute("hidden"));d?c.removeAttribute("hidden"):c.setAttribute("hidden","")}))};V.prototype.N=function(){this.A=this.j=this.el("iframe",u({"class":"amp-access-scroll-sheet",scrolling:"no",frameborder:"0",allowtransparency:"true",title:this.T,sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"}));this.mount()};function wa(a,b){var c=a.getHeadNode(),d=xa(c,ya(c));if(b){var e=a.getRootNode();if(za(e,d))b(d);else var f=setInterval((function(){za(e,d)&&(clearInterval(f),b(d))}),4)}}function xa(a,b){var c=a.__AMP_CSS_SM;c||(c=a.__AMP_CSS_SM=Object.create(null));var d=Aa(a,c,"amp-extension=amp-access-scroll-elt");if(d)return d.textContent!==b&&(d.textContent=b),d;var e=(a.ownerDocument||a).createElement("style");e.textContent=b;e.setAttribute("amp-extension","amp-access-scroll-elt");b=Aa(a,c,"amp-runtime");(b=void 0===b?null:b)?a.insertBefore(e,b.nextSibling):a.insertBefore(e,a.firstChild);return c["amp-extension=amp-access-scroll-elt"]=e}function Aa(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function ya(a){return(a=a.__AMP_CSS_TR)?a(".amp-access-scroll-bar{bottom:0;height:60px;left:auto;right:0px;width:48px;margin:0;padding:0}.amp-access-scroll-bar,.amp-access-scroll-sheet{position:fixed;background:transparent;z-index:2147483647}@media (max-width:599px){.amp-access-scroll-sheet{bottom:60px;height:100px;left:0!important;right:0!important;width:100%!important}}@media (min-width:600px){.amp-access-scroll-sheet{bottom:76px;height:56px;left:auto;right:16px;width:475px}}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/"):".amp-access-scroll-bar{bottom:0;height:60px;left:auto;right:0px;width:48px;margin:0;padding:0}.amp-access-scroll-bar,.amp-access-scroll-sheet{position:fixed;background:transparent;z-index:2147483647}@media (max-width:599px){.amp-access-scroll-sheet{bottom:60px;height:100px;left:0!important;right:0!important;width:100%!important}}@media (min-width:600px){.amp-access-scroll-sheet{bottom:76px;height:56px;left:auto;right:16px;width:475px}}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/"}function za(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++)if(c[a].ownerNode==b)return!0;return!1}function W(){this.aa=100;this.K=this.S=0;this.D=Object.create(null)}W.prototype.has=function(a){return!!this.D[a]};W.prototype.get=function(a){var b=this.D[a];if(b)return b.access=++this.K,b.payload};W.prototype.put=function(a,b){this.has(a)||this.S++;this.D[a]={payload:b,access:this.K};if(!(this.S<=this.aa)){a=this.D;var d,c=this.K+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.S--)}};new Set(["c","v","a","ad"]);var X,Ba;function Ca(a){if("string"==typeof a){X||(X=self.document.createElement("a"),Ba=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new W));var b=X,c=Ba;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}}return a}function Da(a,b){var c=void 0===c?"source":c;H(null!=a,"%s %s must be available",b,c);var d=Ca(a);var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);H(e||/^\/\//.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,a)}function Y(a,b,c){this.ampdoc=a;this.U=c;this.B=H(b.authorization,'"authorization" URL must be specified');Da(this.B,'"authorization"');this.M=!b.noPingback;this.I=b.pingback;this.M&&(H(this.I,'"pingback" URL must be specified'),Da(this.I,'"pingback"'));b.authorizationTimeout?(c=b.authorizationTimeout,H("number"==typeof c,'"authorizationTimeout" must be a number'),D().development||(c=Math.min(c,3e3))):c=3e3;this.L=c;this.Z=I(a.win,"xhr");this.ea=J(a.win,"timer")}k=Y.prototype;k.getConfig=function(){return{authorizationUrl:this.B,pingbackEnabled:this.M,pingbackUrl:this.I,authorizationTimeout:this.L}};k.getAuthorizationUrl=function(){return this.B};k.isAuthorizationEnabled=function(){return!0};k.getAuthorizationTimeout=function(){return this.L};k.authorize=function(){var a=this;G().fine("amp-access-client","Start authorization via ",this.B);return this.U.buildUrl(this.B,!1).then((function(b){G().fine("amp-access-client","Authorization URL: ",b);return a.ea.timeoutPromise(a.L,a.Z.fetchJson(b,{credentials:"include"})).then((function(c){return c.json()}))}))};k.isPingbackEnabled=function(){return this.M};k.pingback=function(){var a=this;return this.U.buildUrl(this.I,!0).then((function(b){G().fine("amp-access-client","Pingback URL: ",b);return a.Z.sendSignal(b,{method:"POST",credentials:"include",headers:u({"Content-Type":"application/x-www-form-urlencoded"}),body:""})}))};k.postAction=function(){};function Z(a,b){var c=b.getAdapterConfig(),d=R(c);Y.call(this,a,{authorization:d+"/amp/access?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&x=QUERY_PARAM(scrollx)&p=1.2",pingback:d+"/amp/pingback?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll)&v=AUTHDATA(visitId)&p=1.2",namespace:"scroll"},{buildUrl:b.buildUrl.bind(b),collectUrlVars:b.collectUrlVars.bind(b)});wa(a,(function(){}));this.h=b;this.$=d}r(Z,Y);Z.prototype.authorize=function(){var a=this;return Y.prototype.authorize.call(this).then((function(b){var c=a.ampdoc.getRootNode().querySelector("amp-story[standalone]");if(b&&b.scroll){if(!c){var d=new S(a.ampdoc,a.h),e=new V(a.ampdoc),f=new U(a.$);f.register(e.window,(function(h){"au"!==h._scramp&&"st"!==h._scramp||e.update(h)}));f.register(d.window,(function(h){"st"===h._scramp&&(e.update(h),d.update(h))}));var g=a.h.getAdapterConfig();Ea(a.ampdoc,g);b.features&&b.features.d&&new qa(a.ampdoc,a.h,R(g))}}else b&&b.blocker&&!A(a.ampdoc.win.location.search).scrollnoblockerrefresh&&new Fa(a.ampdoc,a.h,b.features&&b.features.r).check();return b}))};function Fa(a,b,c){this.o=a;this.h=b;this.da=c}Fa.prototype.check=function(){var a=this;I(this.o.win,"xhr").fetchJson("https://block.scroll.com/check.json").then((function(b){return b.json().then((function(c){return!0===c.dns}))}),(function(b){return 0===b.message.indexOf("XHR Failed fetching (https://block.scroll.com/...): Resource blocked by content blocker")})).then((function(b){!0===b&&Ga(a)}))};function Ga(a){if(a.da&&!fa.cdnProxyRegex.test(Ca(a.o.win.location).origin))ta(a.h,"https://scroll.com/loginwithapp").then((function(d){var h,e=K(a.o,"navigation"),f=e.navigateTo,g=a.o.win;if(h=encodeURIComponent("feature")+"="+encodeURIComponent("r")){d=d.split("#",2);var l=d[0].split("?",2);h=l[0]+(l[1]?"?"+l[1]+"&"+h:"?"+h);h+=d[1]?"#"+d[1]:""}else h=d;f.call(e,g,h)}));else{var b=R(a.h.getAdapterConfig()),c=new S(a.o,a.h);new U(b).register(c.window,(function(d){"st"===d._scramp&&c.update(d)}))}}function Ea(a,b){if(!b.disableAnalytics){var c=a.win.document,d=u({trigger:"immediate"});b.dataConsentId&&(d["data-block-on-consent"]="");var e=v(c,"amp-analytics",d),f=v(c,"script",u({type:"application/json"}));c={requests:{scroll:R(b)+"/amp/analytics?rid=ACCESS_READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll.scroll)&v=AUTHDATA(scroll.visitId)&h=SOURCE_HOSTNAME&s=${totalEngagedTime}&p=1.2"},triggers:{trackInterval:{on:"timer",timerSpec:{interval:15,maxTimerLength:7200},request:"scroll"}}};f.textContent=JSON.stringify(c);e.appendChild(f);e.CONFIG=c;I(a.win,"extensions").installExtensionForDoc(a,"amp-analytics");a.getBody().appendChild(e)}}AMP.registerServiceForDoc("scroll",(function(a){var b=a.getHeadNode();return oa(b).then((function(c){var d=c.getVendorSource("scroll"),e=new Z(a,d);d.getAdapter().registerVendor(e);return e}))}))}});//# sourceMappingURL=amp-access-scroll-0.1.js.map