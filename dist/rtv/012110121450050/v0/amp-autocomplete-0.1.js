(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-autocomplete",ev:"0.1",l:true,f:function(AMP,_){"use strict";var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var r;a:{var da={a:!0},ea={};try{ea.__proto__=da;r=ea.a;break a}catch(a){}r=!1}p=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t,fa=p;function u(){return t?t:t=Promise.resolve(void 0)}var v=Array.isArray;function ha(a,b){var c;"number"!==typeof c&&(c=0);return c+b.length>a.length?!1:-1!==a.indexOf(b,c)}var ia=Object.prototype,y=ia.hasOwnProperty,ja=ia.toString;function z(a){return a||{}}function A(a,b){if(y.call(a,b))return a[b]}function B(a,b){if("."==b)return a;var c=b.split(".");b=(b="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator])?b.call(c):{next:aa(c)};for(var d=b.next();!d.done;d=b.next()){var e=d.value;if(e&&a&&void 0!==a[e]&&"object"==typeof a&&y.call(a,e))a=a[e];else{a=void 0;break}}return a}function ka(){}function la(a,b){try{return JSON.parse(a)}catch(c){return null==b||b(c),null}}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ma(a){var b=!1,c=null,d=a;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];b||(c=d.apply(self,f),b=!0,d=null);return c}}var na=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function oa(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}var C=self.AMP_CONFIG||{},pa=("string"==typeof C.cdnProxyRegex?new RegExp(C.cdnProxyRegex):C.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function qa(a){if(!self.document||!self.document.head||self.location&&pa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var ra={thirdParty:C.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:C.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof C.thirdPartyFrameRegex?new RegExp(C.thirdPartyFrameRegex):C.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:C.cdnUrl||qa("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:pa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:C.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:C.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:C.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:C.geoApiUrl||qa("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var sa=self.__AMP_LOG;function D(){if(!sa.user)throw Error("failed to call initLogConstructor");return sa.user}function E(a,b,c,d,e){D().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)}function ta(a){var b=a.element;this.Z=b;this.J=this.Z.getAttribute("inline");E(""!==this.J,'Empty value for the "inline" attr is unsupported, %s. %s',"amp-autocomplete",b);E(""!==this.J,"AutocompleteBindingInline does not support an empty value in the constructor.");this.H=null;var c=this.J.replace(/([()[{*+.$^\\|?])/g,"\\$1");this.fa=new RegExp("(("+c+"|^"+c+")(\\w+)?)","gm")}l=ta.prototype;l.shouldAutocomplete=function(a){var b;if(b=this.fa){for(var e,f,c=a.selectionStart,d=a.value;null!==(e=b.exec(d))&&!(e[0].length+A(e,"index")>c);)f=e;b=!f||f[0].length+A(f,"index")<c?null:f}else b=null;this.H=b;return!!b};l.getUserInputForUpdate=function(){return this.H&&this.H[0]?this.H[0].slice(this.J.length):""};l.getUserInputForUpdateWithSelection=function(a,b,c){if(!this.H)return b.value;var d=b.selectionStart,e=Number(A(this.H,"index")),f=c.length;d>=e+f&&(d-=f);try{b.focus()}catch(h){}d=d+a.length+1;b.setSelectionRange(d,d);this.H=null;b=b.value;var g=b.slice(0,e+this.J.length),k=b.slice(e+this.J.length+f);return g+a+" "+k};l.resetInputOnWrapAround=function(){};l.shouldSuggestFirst=function(){return this.Z.hasAttribute("suggest-first")};l.shouldShowOnFocus=function(){return!1};l.displayActiveItemInInput=function(){};l.removeSelectionHighlighting=function(){};l.shouldPreventDefaultOnEnter=function(a){return a};function ua(a){a=a.element;this.F=a.hasAttribute("suggest-first");var b=a.getAttribute("filter");this.F&&"prefix"!==b&&(this.F=!1,D().warn("AMP-AUTOCOMPLETE",'"suggest-first" expected "filter" type "prefix".'));this.ha=a.hasAttribute("submit-on-enter")}l=ua.prototype;l.shouldAutocomplete=function(){return!0};l.getUserInputForUpdate=function(a){return a.value||""};l.getUserInputForUpdateWithSelection=function(a){return a};l.resetInputOnWrapAround=function(a,b){b.value=a};l.shouldSuggestFirst=function(){return this.F};l.shouldShowOnFocus=function(){return!0};l.displayActiveItemInInput=function(a,b,c){a.value=b;this.F&&a.setSelectionRange(c.length,b.length)};l.removeSelectionHighlighting=function(a){var b=a.value.length;a.setSelectionRange(b,b)};l.shouldPreventDefaultOnEnter=function(){return!this.ha};function F(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function H(a,b){var c=I(a);c=va(c);return G(c,b)}function xa(a,b){a=I(a);a=va(a);return ya(a,b)?G(a,b):null}function I(a){return a.nodeType?F((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function va(a){a=I(a);return a.isSingleDoc()?a.win:a}function G(a,b){ya(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ya(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function za(a){return!!a&&"function"==typeof a.getFormData}function J(){this.da=100;this.S=this.X=0;this.N=Object.create(null)}J.prototype.has=function(a){return!!this.N[a]};J.prototype.get=function(a){var b=this.N[a];if(b)return b.access=++this.S,b.payload};J.prototype.put=function(a,b){this.has(a)||this.X++;this.N[a]={payload:b,access:this.S};if(!(this.X<=this.da)){a=this.N;var d,c=this.S+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.X--)}};var K,Ba,Aa=new Set(["c","v","a","ad"]);function L(a){return"string"==typeof a?M(a):a}function M(a){K||(K=self.document.createElement("a"),Ba=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new J));var b=K,c=Ba;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function Ca(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),e=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return e+=c[1]?"#"+c[1]:""}function N(a,b){return encodeURIComponent(a)+"="+encodeURIComponent(b)}function Da(a){var c,b=[];for(c in a){var d=a[c];if(null!=d){d=v(d)?d:[d];for(var e=0;e<d.length;e++)b.push(N(c,d[e]))}}return b.join("&")}function Ea(a,b){var c=void 0===c?"source":c;E(null!=a,"%s %s must be available",b,c);var d=L(a);var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);E(e||/^\/\//.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,a)}var Fa=["GET","POST"],Ga=[v,function(a){return"[object Object]"===ja.call(a)}];function Ha(a){a=a||{};var b=a.method;void 0===b?b="GET":(b=b.toUpperCase(),Fa.includes(b));a.method=b;a.headers=a.headers||z({});a.headers.Accept="application/json";return a}function Ia(a){var b=Ha(a);"POST"!=b.method||za(b.body)||(ka(Ga.some((function(c){return c(b.body)}))),b.headers["Content-Type"]=b.headers["Content-Type"]||"text/plain;charset=utf-8",b.body="application/x-www-form-urlencoded"===b.headers["Content-Type"]?Da(b.body):JSON.stringify(b.body))}function O(a,b){this.R=a;this.G=b;this.ga="amp-autocomplete"}O.prototype.isEnabled=function(){var a=this.R.getAmpDoc();return a.isSingleDoc()&&a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template")?this.R.hasCapability("viewerRenderTemplate"):!1};O.prototype.assertTrustedViewer=function(a){return this.R.isTrustedViewer().then((function(b){E(b,"Refused to attempt SSR in untrusted viewer: ",a)}))};O.prototype.ssr=function(a,b,c,d){var e=this;c=void 0===c?null:c;d=void 0===d?{}:d;var k,f=c,g=d;f||(k=this.G.maybeFindTemplate(a));return this.assertTrustedViewer(a).then((function(){var h=e.R,q=h.sendMessageAwaitResponse,n=k;var m=g;var x=m=void 0===m?{}:m;m=z({type:e.ga});(n=f&&f.successTemplate?f.successTemplate:n)&&(m.successTemplate={type:"amp-mustache",payload:n.innerHTML});(n=f&&f.errorTemplate?f.errorTemplate:null)&&(m.errorTemplate={type:"amp-mustache",payload:n.innerHTML});x&&Object.assign(m,x);x=b.xhrUrl;var w=b.fetchOpt;n=Object.assign({},w);if(za(w.body)){w=w.body;n.headers["Content-Type"]="multipart/form-data;charset=utf-8";w=w.entries();for(var wa=[],X=w.next();!X.done;X=w.next())wa.push(X.value);n.body=wa}m=z({originalRequest:{input:x,init:n},ampComponent:m});return q.call(h,"viewerRenderTemplate",m)}))};O.prototype.applySsrOrCsrTemplate=function(a,b){var c=this;if(this.isEnabled()){E("string"===typeof b.html,"Skipping template rendering due to failed fetch");var d=this.assertTrustedViewer(a).then((function(){return c.G.findAndSetHtmlForTemplate(a,b.html)}))}else d=v(b)?this.G.findAndRenderTemplateArray(a,b):this.G.findAndRenderTemplate(a,b);return d};function Ja(a,b,c){c=void 0===c?{}:c;var d=void 0===c.expr?".":c.expr,e=void 0===c.urlReplacement?0:c.urlReplacement,f=void 0===c.refresh?!1:c.refresh,g=void 0===c.xssiPrefix?void 0:c.xssiPrefix;Ea(b.getAttribute("src"),b);var k=F(a.win,"batched-xhr");return Ka(b,e,f).then((function(h){return k.fetchJson(h.xhrUrl,h.fetchOpt)})).then((function(h){return F(a.win,"xhr").xssiJson(h,g)})).then((function(h){if(null==h)throw Error("Response is undefined.");return B(h,d||".")})).catch((function(h){throw D().createError("failed fetching JSON data",h)}))}function Ka(a,b,c){var d=a.getAttribute("src"),e=xa(a,"url-replace");return(1<=b?e.expandUrlAsync(d):Promise.resolve(d)).then((function(f){if(1==b){var g=e.collectDisallowedVarsSync(a);if(0<g.length)throw D().createError('URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. Please add data-amp-replace="'+g.join(" ")+'" to the <'+a.tagName+"> element. See https://bit.ly/amp-var-subs.")}var k={};a.hasAttribute("credentials")&&(k.credentials=a.getAttribute("credentials"));c&&(k.cache="reload");return{xhrUrl:f,fetchOpt:k}}))}function La(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a}function Ma(a,b){return 0<a&&0<b?a%b:(a%b+b)%b}function Na(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function Oa(a,b){var c=b.length,d=a.length;if(d>c)return!1;if(d===c&&a===b)return!0;var e=0,f=0;a:for(;e<d;e++){for(var g=a.charCodeAt(e);f<c;)if(b.charCodeAt(f++)===g)continue a;return!1}return!0}function P(a){var b=AMP.BaseElement.call(this,a)||this;b.D=null;b.B=null;b.h=null;b.j="";b.C="";b.ba=1;b.M=null;b.F=!1;b.U=!1;b.aa=!1;b.P="";b.O="";b.I=-1;b.o=null;b.ea=a.id?a.id:Math.floor(100*Math.random());b.A=null;b.K=!1;b.W=null;b.G=null;b.V=!1;b.getSsrTemplateHelper=ma((function(){return new O(H(b.element,"viewer"),b.G)}));b.L=!1;b.Y=null;b.ca=null;b.$=!1;b.T=a.id?a.id:Math.floor(100*Math.random())+"_AMP_content_";return b}var Q=AMP.BaseElement;P.prototype=ba(Q.prototype);P.prototype.constructor=P;if(fa)fa(P,Q);else for(var R in Q)if("prototype"!=R)if(Object.defineProperties){var Pa=Object.getOwnPropertyDescriptor(Q,R);Pa&&Object.defineProperty(P,R,Pa)}else P[R]=Q[R];P.ia=Q.prototype;P.prototype.buildCallback=function(){this.G=H(this.element,"templates");this.Y=xa(this.element,"action");this.ca=H(this.element,"viewport");var a=this.element.querySelectorAll("input,textarea");E(1==a.length,"%s should contain exactly one <input> or <textarea> descendant %s","amp-autocomplete",this.element);this.h=a[0];var b=this.h.getAttribute("type");E(!this.h.hasAttribute("type")||"text"===b||"search"===b,'%s requires the "type" attribute to be "text" or "search" if present on <input>. %s',"amp-autocomplete",this.element);this.D=this.element.hasAttribute("inline")?new ta(this):new ua(this);this.O=this.element.getAttribute("query");this.P=this.element.getAttribute("src");var c=this.element.querySelector('script[type="application/json"]');c?this.B=Qa(this,c):this.element.hasAttribute("src")||D().warn("amp-autocomplete",'Expected a <script type="application/json"> child or a URL specified in "src".');this.h.setAttribute("dir","auto");this.h.setAttribute("aria-autocomplete","both");this.h.setAttribute("role","textbox");this.h.setAttribute("aria-controls",this.T);"INPUT"===this.h.tagName&&(this.element.setAttribute("role","combobox"),this.h.setAttribute("aria-multiline","false"));this.element.setAttribute("aria-haspopup","listbox");this.element.setAttribute("aria-expanded","false");this.element.setAttribute("aria-owns",this.T);(a=this.h.form||null)&&a.hasAttribute("autocomplete")&&(this.W=a.getAttribute("autocomplete"));this.L=this.getSsrTemplateHelper().isEnabled();this.V=this.G.hasTemplate(this.element,"template, script[template]");this.L&&(E(this.P,'%s requires data to be provided via "src" attribute for server-side rendering. %s',"amp-autocomplete",this.element),E(this.V,'amp-autocomplete should provide a <template> or <script type="plain/text"> element.'),E(!this.element.hasAttribute("filter"),"amp-autocomplete does not support client-side filter when server-side render is required."));this.C=this.element.getAttribute("filter")||"none";E("substring"===this.C||"prefix"===this.C||"token-prefix"===this.C||"fuzzy"===this.C||"custom"===this.C||"none"===this.C,"Unexpected filter: %s. %s",this.C,this.element);this.ba=this.element.hasAttribute("min-characters")?parseInt(this.element.getAttribute("min-characters"),10):1;this.element.hasAttribute("max-entries")&&D().warn("amp-autocomplete",'"max-items" attribute is preferred to "max-entries"');var d=this.element.getAttribute("max-items")||this.element.getAttribute("max-entries");this.M=d?parseInt(d,10):null;this.F=this.D.shouldSuggestFirst();this.aa=this.element.hasAttribute("highlight-user-entry");a=this.element.ownerDocument.createElement("div");a.classList.add("i-amphtml-autocomplete-results");Ra(this)&&a.classList.add("i-amphtml-autocomplete-results-up");a.setAttribute("role","listbox");a.setAttribute("id",this.T);Na(a,!1);this.A=a;this.element.appendChild(this.A);Sa(this);return u()};function Sa(a){a.h.addEventListener("touchstart",(function(){S(a)}),{passive:!0});a.h.addEventListener("input",(function(){Ta(a)}));a.h.addEventListener("keydown",(function(b){Ua(a,b)}));a.h.addEventListener("focus",(function(){S(a).then((function(){var b=a.D.shouldShowOnFocus();Va(a,b)}))}));a.h.addEventListener("blur",(function(){Va(a,!1)}));a.A.addEventListener("mousedown",(function(b){Wa(a,b)}))}function Qa(a,b){b=la(b.textContent,(function(e){throw e}));var c=a.element.getAttribute("items")||"items",d=B(b,c);return d?D().assertArray(d):(D().warn("amp-autocomplete",'Expected key "%s" in data but found nothing. Rendering empty results.',c),[])}function T(a){var b=a.getAmpDoc(),c=a.element.getAttribute("items")||"items";Xa(a);return a.L?Ka(a.element,2,!1).then((function(d){var e=a.win,f=d.xhrUrl;if(!1!==d.fetchOpt.ampCors){var g=M(f).search,k=Object.create(null);if(g)for(var h;h=na.exec(g);){var q=oa(h[1],h[1]);h=h[2]?oa(h[2].replace(/\+/g," "),h[2]):"";k[q]=h}E(!("__amp_source_origin"in k),"Source origin is not allowed in %s",f);e=e.location.href;e=L(e);ra.cdnProxyRegex.test(L(e).origin)?(g=e.pathname.split("/"),E(Aa.has(g[1]),"Unknown path prefix in url %s",e.href),k=g[2],q="s"==k?"https://"+decodeURIComponent(g[3]):"http://"+decodeURIComponent(k),E(0<q.indexOf("."),"Expected a . in origin %s",q),g.splice(1,"s"==k?3:2),g=q+g.join("/"),k=(k=e.search)&&"?"!=k?(k=k.replace(/[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\b[^&]*/g,"").replace(/^[?&]/,""))?"?"+k:"":"",e=g+k+(e.hash||"")):e=e.href;e=M(e).origin;f=Ca(f,N("__amp_source_origin",e))}d.xhrUrl=f;e=d.xhrUrl;f=(f=d.fetchOpt)||{};g=a.win;g=g.origin||M(g.location.href).origin;e=M(e).origin;g==e&&(f.headers=f.headers||{},f.headers["AMP-Same-Origin"]="true");d.fetchOpt=f;Ia(d.fetchOpt);f=z({ampAutocompleteAttributes:{items:c,maxItems:a.M}});return a.getSsrTemplateHelper().ssr(a.element,d,null,f)})):Ja(b,a.element,{expr:c,urlReplacement:2}).catch((function(){D().warn("amp-autocomplete",'Expected key "%s" in data but found nothing. Rendering empty results.',c);return[]}))}function Xa(a){if(a.O){var b=a.j;b=Ca(a.P,N(a.O,void 0===b?"":b));a.element.setAttribute("src",b)}}P.prototype.layoutCallback=function(){this.h.setAttribute("autocomplete","off");this.element.hasAttribute("prefetch")&&S(this);return U(this,this.B,this.j)};P.prototype.mutatedAttributesCallback=function(a){var b=this,c=a.src;if(void 0===c||null===c)return u();if("string"===typeof c)return this.P=c,T(this).then((function(d){b.B=d||[];U(b,b.B,b.j)}),(function(d){Ya(b,d)}));if("object"===typeof c)return this.B=c.items||[],U(this,this.B,this.j);D().error("amp-autocomplete",'Unexpected "src" type: '+c)};function Ta(a){a.D.shouldAutocomplete(a.h)?Za(a):a.mutateElement((function(){V(a)}))}function Za(a){var b=0===a.j.length&&1===a.h.value.length;a.j=a.D.getUserInputForUpdate(a.h);(a.L||a.O?T(a):Promise.resolve(a.B)).then((function(c){a.B=c;return a.mutateElement((function(){U(a,a.B,a.j).then((function(){W(a,!0);a.F&&(a.U&&!b||$a(a,1),a.U=!1)}))}))}))}function Wa(a,b){var c=ab(a,b.target);b=bb(a,c);var d=b.selectedObject,e=b.selectedText;a.mutateElement((function(){cb(a,e,d)}))}function U(a,b,c){var d=c=void 0===c?"":c;V(a);return!b||d.length<a.ba?u():a.L?y.call(b,"html")?db(a,b,a.A,d):u():eb(a,b,d)}function eb(a,b,c){if(!b.length)return u();var d=fb(a,b,c).map((function(e){var f=e;"object"===typeof e&&(f=Object.assign({},e,{objToJson:function(){return JSON.stringify(e)}}));return f}));return db(a,d,a.A,c)}function db(a,b,c,d){var e=u();Y(a);a.V?e=a.getSsrTemplateHelper().applySsrOrCsrTemplate(a.element,b).then((function(f){(v(f)?f:[f]).forEach((function(g){g.hasAttribute("data-disabled")?g.setAttribute("aria-disabled","true"):g.hasAttribute("data-value")||D().warn("amp-autocomplete",'Expected a "data-value" or "data-disabled" attribute on the rendered template item. %s',g);g.classList.add("i-amphtml-autocomplete-item");g.setAttribute("role","option");c.appendChild(g)}))})):b.forEach((function(f){E("string"===typeof f,"%s data must provide template for non-string items. %s","amp-autocomplete",a.element);var g=c.appendChild,k=void 0===d?"":d,h=a.element.ownerDocument.createElement("div");h.classList.add("i-amphtml-autocomplete-item");h.setAttribute("role","option");h.setAttribute("data-value",f);h.setAttribute("dir","auto");h.textContent=f;var q=h.childNodes[0],n=f.toLocaleLowerCase(),m=k.toLocaleLowerCase();a.aa&&k&&k.length<=f.length&&ha(n,m)&&(m=n.indexOf(m),n=a.element.ownerDocument.createElement("span"),n.classList.add("autocomplete-partial"),n.appendChild(a.element.ownerDocument.createTextNode(f.slice(m,m+k.length))),f=q.splitText(m),f.splitText(k.length),h.replaceChild(n,f));g.call(c,h)}));return e}function fb(a,b,c){if("none"===a.C)return gb(a,b);c=c.toLocaleLowerCase();var d=a.element.getAttribute("filter-value")||"value";b=b.filter((function(e){"object"===typeof e&&(e=B(e,d));E("string"===typeof e,'%s data property "%s" must map to string type. %s',"amp-autocomplete",d,a.element);e=e.toLocaleLowerCase();switch(a.C){case"substring":return ha(e,c);case"prefix":return e.startsWith(c);case"token-prefix":return hb(e,c);case"fuzzy":return Oa(c,e);case"custom":throw Error("Filter not yet supported: %s",a.C,a.element);default:throw Error("Unexpected filter: %s",a.C,a.element)}}));return gb(a,b)}function hb(a,b){if(""===b)return!0;var c=ib(a),d=ib(b),e=jb(c),f=d[d.length-1];d.splice(d.length-1,1);a=!0;for(b=0;b<d.length;b++){var g=d[b];if(""!==g){if(!y.call(e,g)){a=!1;break}var k=Number(A(e,g));1<k?e[g]=k-1:delete e[g]}}var h=Object.keys(e);return a&&(""===f||h.some((function(q){return q.startsWith(f)})))}function ib(a){a=a.replace(/[\.]+/g,"");return a.split(/[`~(){}_|+\-;:'",\[\]\\\/ ]+/g)}function jb(a){var b=Object.create(null);a.forEach((function(c){var d=y.call(b,c)?A(b,c)+1:1;b[c]=d}));return b}function gb(a,b){a.M&&a.M<b.length&&(b=b.slice(0,a.M));return b}function W(a,b){a.h.setAttribute("aria-expanded",b);Na(a.A,b)}function Va(a,b){var c=a.h.form||null;c&&(b?c.setAttribute("autocomplete","off"):a.W?c.setAttribute("autocomplete",a.W):c.removeAttribute("autocomplete"));var d=!1;a.measureMutateElement((function(){d=Ra(a)}),(function(){b||(a.j=a.h.value,U(a,a.B,a.j),Y(a));a.A.classList.toggle("i-amphtml-autocomplete-results-up",d);W(a,b)}))}function S(a){if(a.$||!a.element.hasAttribute("src"))return u();a.$=!0;return T(a).then((function(b){a.B=b;U(a,a.B)}),(function(b){Ya(a,b)}))}function Ra(a){var b=a.ca.getHeight()||0;return a.h.getBoundingClientRect().top>b/2}function Z(a){return!a.A.hasAttribute("hidden")&&0<a.A.children.length}function ab(a,b){return null===b?null:b.classList.contains("i-amphtml-autocomplete-item")?b:ab(a,b.parentElement)}function bb(a,b){if(null===b||b.hasAttribute("data-disabled"))return{selectedObject:null,selectedText:null};var c=b.getAttribute("data-value")||b.textContent||"";a.h.value=a.D.getUserInputForUpdateWithSelection(c,a.h,a.j);a.j=a.D.getUserInputForUpdate(a.h);return{selectedObject:kb(b),selectedText:c}}function kb(a){return a.hasAttribute("data-json")?la(a.getAttribute("data-json"),(function(b){throw b})):null}function cb(a,b,c){null!==b&&(b=Object.assign({},{value:b},c&&{valueAsObject:c}),c=La(a.win,"amp-autocomplete.select",b),a.Y.trigger(a.element,"select",c,3),b=La(a.win,"change",b,{bubbles:!0}),a.h.dispatchEvent(b),V(a),W(a,!1))}function $a(a,b){if(0===b||!Z(a)||a.K)u();else{var c=-1===a.I&&0>b?b:a.I+b,d=lb(a);if(0===d.length)u();else{var e=Ma(c,d.length),f=d[e];c=f.getAttribute("data-value");a.D.displayActiveItemInInput(a.h,c,a.j);var g,k;a.measureMutateElement((function(){var h=f.offsetHeight,q=f.offsetTop,n=a.A,m=n.offsetHeight,x=n.scrollTop;g=x>q||x+m<q+h;k=0<b?q+h-m:q}),(function(){g&&(a.A.scrollTop=k);Y(a);f.classList.add("i-amphtml-autocomplete-item-active");f.setAttribute("aria-selected","true");var h=f.getAttribute("id");h||(h=a.ea+"_AMP_content_"+e,f.setAttribute("id",h));a.h.setAttribute("aria-activedescendant",h);a.I=e;a.o=f;try{a.o.focus()}catch(q){}}))}}}function lb(a){return a.A.querySelectorAll(".i-amphtml-autocomplete-item:not([data-disabled])")}function mb(a){a.D.resetInputOnWrapAround(a.j,a.h);Y(a)}function Y(a){a.o&&(a.o.classList.toggle("i-amphtml-autocomplete-item-active",!1),a.o.removeAttribute("aria-selected"),"autocomplete-selected"===a.o.getAttribute("id")&&a.o.removeAttribute("id"),a.h.removeAttribute("aria-activedescendent"),a.o=null,a.I=-1)}function V(a){a.K=!1;for(a=a.A;a.firstChild;)a.removeChild(a.firstChild)}function Ua(a,b){switch(b.key){case"ArrowDown":b.preventDefault();if(Z(a)){if(a.I===lb(a).length-1){mb(a);u();break}$a(a,1);break}a.mutateElement((function(){U(a,a.B,a.j);W(a,!0)}));break;case"ArrowUp":b.preventDefault();if(0===a.I){mb(a);u();break}$a(a,-1);break;case"Enter":var c=a.D.shouldPreventDefaultOnEnter(!!a.o);Z(a)&&c&&b.preventDefault();a.D.removeSelectionHighlighting(a.h);if(Z(a)&&a.o){var d=bb(a,a.o),e=d.selectedObject,f=d.selectedText;a.mutateElement((function(){cb(a,f,e);Y(a)}));break}a.mutateElement((function(){W(a,!1)}));break;case"Escape":a.mutateElement((function(){a.K||(b.preventDefault(),mb(a),W(a,!1))}));break;case"Tab":if(Z(a)&&a.o){b.preventDefault();d=bb(a,a.o);var g=d.selectedObject,k=d.selectedText;a.mutateElement((function(){cb(a,k,g)}));break}u();break;case"Backspace":a.U=a.F;u();break;default:u()}}function Ya(a,b){if(!a.K)if(V(a),a.getFallback())a.K=!0,a.toggleFallback(!0);else throw b}P.prototype.isLayoutSupported=function(a){return"container"==a};AMP.registerElement("amp-autocomplete",P,"amp-autocomplete,amp-autocomplete>input,amp-autocomplete>textarea{font-family:sans-serif}amp-autocomplete>input,amp-autocomplete>textarea{border-radius:4px;box-sizing:border-box}.i-amphtml-autocomplete-results{position:absolute;top:100%;width:calc(100% + 1rem);min-width:calc(2em + 2rem);max-height:40vh;margin-top:.5rem;margin-left:-.5rem;border-radius:4px;overflow-y:auto;overflow-x:hidden;background-color:#fff;box-shadow:0px 2px 4px 0px rgba(0,0,0,.5);z-index:10}.i-amphtml-autocomplete-results-up{top:auto;bottom:100%;margin-bottom:.5rem}.i-amphtml-autocomplete-item{position:relative;padding:.5rem 1rem;cursor:pointer}.i-amphtml-autocomplete-item:first-child{border-radius:4px 4px 0px 0px}.i-amphtml-autocomplete-item:nth-last-child(2){border-radius:0px 0px 4px 4px}.i-amphtml-autocomplete-item-active:not([data-disabled]),.i-amphtml-autocomplete-item:hover:not([data-disabled]){background-color:rgba(0,0,0,.15)}.i-amphtml-autocomplete-item[data-disabled]{color:rgba(0,0,0,.33)}\n/*# sourceURL=/extensions/amp-autocomplete/0.1/amp-autocomplete.css*/")}});//# sourceMappingURL=amp-autocomplete-0.1.js.map