(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-mathml",ev:"0.1",l:true,f:function(AMP,_){"use strict";function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ea(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ea(this);"function"===typeof Symbol&&Symbol("x");var u;if("function"==typeof Object.setPrototypeOf)u=Object.setPrototypeOf;else{var B;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;B=ha.a;break a}catch(a){}B=!1}u=B?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=u;function C(){return"2110121450047"}function E(a){return a||{}}var ja=Array.isArray;function F(a,b){try{return JSON.parse(a)}catch(c){return null==b||b(c),null}}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ka(a){var b=parseFloat(a);return"number"===typeof b&&isFinite(b)?b:void 0}function la(a){for(var b=null,c="",d=r(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ma(a){var b=la.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}var G,na="Webkit webkit Moz moz ms O o".split(" ");function oa(a,b,c){var d=a.style;if(!b.startsWith("--")){G||(G=Object.create(null));var e=G[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var g=0;g<na.length;g++){var h=na[g]+f;if(void 0!==d[h]){f=h;break b}}f=""}void 0!==d[f]&&(e=f)}G[b]=e}b=e}b&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}var H=self.AMP_CONFIG||{},pa=("string"==typeof H.cdnProxyRegex?new RegExp(H.cdnProxyRegex):H.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function qa(a){if(!self.document||!self.document.head||self.location&&pa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var J={thirdParty:H.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:H.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof H.thirdPartyFrameRegex?new RegExp(H.thirdPartyFrameRegex):H.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:H.cdnUrl||qa("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:pa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:H.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:H.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:H.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:H.geoApiUrl||qa("amp-geo-api")};var ra=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function sa(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function ta(a){var b=Object.create(null);if(!a)return b;for(var c;c=ra.exec(a);){var d=sa(c[1],c[1]);c=c[2]?sa(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}function ua(a){a=(a||self).location;return ta(a.originalHash||a.hash)}var K="";function L(){var a=self;if(a.__AMP_MODE)a=a.__AMP_MODE;else{var b=ua(a)||ua(a);b=["1","actions","amp","amp4ads","amp4email"].includes(b.development)||!!a.AMP_DEV_MODE;if(!K){var c;K=(null==(c=a.AMP_CONFIG)?void 0:c.v)||"01"+C()}a=a.__AMP_MODE={localDev:!1,development:b,esm:!1,test:!1,rtvVersion:K}}return a}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var M=self.__AMP_LOG;function va(){throw Error("failed to call initLogConstructor")}function xa(){M.user||(M.user=va());return M.user}function R(){return M.dev||(M.dev=va())}function S(a,b,c,d,e){xa().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)}function ya(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return za(a,b)}function T(a,b){var c=Aa(a);c=Aa(c);c=c.isSingleDoc()?c.win:c;return za(c,b)}function Aa(a){return a.nodeType?ya((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function za(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function U(){this.B=100;this.o=this.A=0;this.h=Object.create(null)}U.prototype.has=function(a){return!!this.h[a]};U.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.o,b.payload};U.prototype.put=function(a,b){this.has(a)||this.A++;this.h[a]={payload:b,access:this.o};if(!(this.A<=this.B)){a=this.h;var d,c=this.o+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.A--)}};new Set(["c","v","a","ad"]);var Ba,Ca;function V(a){Ba||(Ba=self.document.createElement("a"),Ca=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new U));var b=Ba,c=Ca;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}var W={};function Da(a,b){S("mathml","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+Ea(a);var g,e=d={},f=b.dataset;for(g in f)g.startsWith("vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=F(g);if(void 0===g)throw xa().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)e[h]=g[h]}h=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=ka(e);h.height=ka(g);b.getAttribute("title")&&(h.title=b.getAttribute("title"));var t=a.location.href;"about:srcdoc"==t&&(t=a.parent.location.href);var m=Aa(b),x=T(b,"documentInfo").get();e=T(b,"viewer").getUnconfirmedReferrerUrl();var p=b.ownerDocument.body;f=g=0;for(var v=b;v&&v!=p;v=v.offsetParent)g+=v.offsetLeft,f+=v.offsetTop;p=b.offsetWidth;v=b.offsetHeight;var l={left:g,top:f,width:p,height:v,bottom:f+v,right:g+p,x:g,y:f};g=h;f=C();p=J.thirdParty+"/"+C()+"/ampcontext-v0.js";v=x.sourceUrl;var Ia=x.canonicalUrl;x=x.pageViewId;t={href:t};var N,Ja=b.tagName,Ka={localDev:!1,development:L().development,esm:L().esm,test:!1,rtvVersion:L().rtvVersion};var La=!(null==(N=a.AMP_CONFIG)||!N.canary);N=!m.isVisible();m=l?{left:l.left,top:l.top,width:l.width,height:l.height}:null;l=b;for(var w=[],z=0;1==(null==l?void 0:l.nodeType)&&25>z;){var O="";l.id&&(O="/"+l.id);var ca=l.nodeName.toLowerCase(),D=w,Ma=D.push;O=""+ca+O;ca=l.nodeName;for(var da=0,P=0,Q=l.previousElementSibling;Q&&25>P&&100>da;)Q.nodeName==ca&&P++,da++,Q=Q.previousElementSibling;Ma.call(D,O+(25>P&&100>da?"."+P:""));z++;l=l.parentElement}l=w.join();w=l.length;z=5381;for(D=0;D<w;D++)z=33*z^l.charCodeAt(D);l=String(z>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);w=a.__AMP__EXPERIMENT_TOGGLES;var n,y,wa;z=Object.assign({},null!=(y=a.AMP_CONFIG)?y:{},null!=(wa=a.AMP_EXP)?wa:JSON.parse((null==(n=a.__AMP_EXP)?void 0:n.textContent)||"{}"));for(var A in z)n=z[A],"number"===typeof n&&0<=n&&1>=n&&(w[A]=Math.random()<n);var k;A=null==(k=a.AMP_CONFIG)?void 0:k["allow-doc-opt-in"];if(ja(A)&&A.length&&(k=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(k=k.getAttribute("content").split(","),n=r(k),k=n.next();!k.done;k=n.next())k=k.value,A.includes(k)&&(w[k]=!0);k=Object;A=k.assign;n="";try{"localStorage"in a&&(n=a.localStorage.getItem("amp-experiment-toggles"))}catch(Xa){R().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var q;n=(null==(q=n)?void 0:q.split(/\s*,\s*/g))||[];q=Object.create(null);n=r(n);for(y=n.next();!y.done;y=n.next())(y=y.value)&&("-"==y[0]?q[y.substr(1)]=!1:q[y]=!0);A.call(k,w,q);var I;q=null==(I=a.AMP_CONFIG)?void 0:I["allow-url-opt-in"];if(ja(q)&&q.length)for(a=ta(a.location.originalHash||a.location.hash),I=r(q),k=I.next();!k.done;k=I.next())q=k.value,k=a["e-"+q],"1"==k&&(w[q]=!0),"0"==k&&(w[q]=!1);a=w}g._context=E({ampcontextVersion:f,ampcontextFilepath:p,sourceUrl:v,referrer:e,canonicalUrl:Ia,pageViewId:x,location:t,startTime:d,tagName:Ja,mode:Ka,canary:La,hidden:N,initialLayoutRect:m,domFingerprint:l,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&(h.src=b);d=h;d.type="mathml";Object.assign(d._context,void 0);return d}function Fa(a,b){var c=void 0===c?{}:c;var d=void 0===c.allowFullscreen?!1:c.allowFullscreen,e=c.initialIntersection;c=Da(a,b);e&&(c._context.initialIntersection=e);var f=a.document.createElement("iframe");W[c.type]||(W[c.type]=0);W[c.type]+=1;var g=b.getAmpDoc();a=Ga(a,g);var h=V(a).hostname;g=JSON.stringify(E({host:h,bootstrap:Ha(c.type),type:c.type,count:W[c.type],attributes:c}));f.src=a;f.ampLocation=V(a);f.name=g;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");oa(f,"border","none");f.onload=function(){this.readyState="complete"};f.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("mathml")||Na(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}function Ha(a){return J.thirdParty+"/"+C()+"/vendor/"+a+".js"}function Ga(a,b){if(b=b.getMetaByName("amp-3p-iframe-src")){var c=void 0===c?"source":c;S(null!=b,"%s %s must be available",'meta[name="amp-3p-iframe-src"]',c);var d=b;d="string"==typeof d?V(d):d;var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);S(e||/^\/\//.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s','meta[name="amp-3p-iframe-src"]',c,b);S(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,b);c=V(b);S("localhost"==c.hostname&&!0||c.origin!=V(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",b,c.origin,b);b=b+"?"+C()}else b=null;b||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+Ea(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+"."+J.thirdPartyFrameHost+"/"+C()+"/frame.html");return b}function Ea(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}function Na(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c=0;c<b.length;c++){var d=b[c];if(!a.sandbox.supports(d)){R().info("3p-frame","Iframe doesn't support %s",d);return}}a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}}function Oa(a){if(!Pa(a))return null;var b=a.indexOf("{");return F(a.substr(b),(function(c){ma(Error("MESSAGING: Failed to parse message: "+a+"\n"+c.message))}))}function Pa(a){return"string"==typeof a&&a.startsWith("amp-")&&-1!=a.indexOf("{")}function Qa(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Ra(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=Qa(a,c,!0);for(c=0;c<a.length;c++){var d=a[c];if(d.frame===b){var e=d;break}}e||(e={frame:b,events:Object.create(null)},a.push(e));return e.events}function Sa(a){for(var b=E({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var f,e=d.events;for(f in e)e[f].splice(0,1/0).forEach((function(g){g(b)}))}}}function Ta(a){a.listeningFors||a.addEventListener("message",(function(b){if(b.data){var c=Ua(b.data);if(c&&c.sentinel){var d=b.source;var e=Qa(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var h=e[g],t=h.frame.contentWindow;if(t){var m;if(!(m=d==t))b:{for(m=d;m&&m!=m.parent;m=m.parent)if(m==t){m=!0;break b}m=!1}if(m){f=h;break}}else setTimeout(Sa,0,e)}d=f?f.events:null}else d=e;var x=d;if(x){var p=x[c.type];if(p)for(p=p.slice(),d=0;d<p.length;d++)(0,p[d])(c,b.source,b.origin,b)}}}}))}function Va(a,b){function c(h,t,m,x){if("amp"==h.sentinel){if(t!=a.contentWindow)return;var p="null"==m&&void 0;if(e!=m&&!p)return}t==a.contentWindow&&("unlisten"==h.sentinel?g():b(h,t,m,x))}var d=a.ownerDocument.defaultView;Ta(d);d=Ra(d,a);var e=V(a.src).origin,f=d["embed-size"]||(d["embed-size"]=[]);f.push(c);var g=function(){if(c){var h=f.indexOf(c);-1<h&&f.splice(h,1);b=f=c=null}}}function Ua(a){"string"==typeof a&&(a="{"==a.charAt(0)?F(a,(function(b){R().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",b)}))||null:Pa(a)?Oa(a):null);return a}function X(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;return a}var Y=AMP.BaseElement;X.prototype=ba(Y.prototype);X.prototype.constructor=X;if(ia)ia(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Wa=Object.getOwnPropertyDescriptor(Y,Z);Wa&&Object.defineProperty(X,Z,Wa)}else X[Z]=Y[Z];X.C=Y.prototype;X.prototype.preconnectCallback=function(){ya(this.win,"preconnect").url(this.getAmpDoc(),"https://cdnjs.cloudflare.com")};X.prototype.buildCallback=function(){var b,a=this;this.element.hasAttribute("inline")&&(b="1px");this.mutateElement((function(){var e,c=a.element,d={width:b,height:"1rem"};for(e in d)oa(c,e,d[e])}))};X.prototype.layoutCallback=function(){var a=this,b=Fa(this.win,this.element);b.title=this.element.title||"MathML formula";b.classList.add("i-amphtml-fill-content");Va(b,(function(c){a.element.hasAttribute("inline")||(c.width=void 0);T(a.getAmpDoc(),"mutator").forceChangeSize(a.element,c.height,c.width)}));this.element.appendChild(b);this.j=b;return this.loadPromise(b)};X.prototype.unlayoutCallback=function(){if(this.j){var b,a=this.j;null==(b=a.parentElement)||b.removeChild(a);this.j=null}return!0};X.prototype.isLayoutSupported=function(a){return"container"==a};AMP.registerElement("amp-mathml",X,"amp-mathml[inline]{display:inline-block;vertical-align:middle}\n/*# sourceURL=/extensions/amp-mathml/0.1/amp-mathml.css*/")}});//# sourceMappingURL=amp-mathml-0.1.js.map