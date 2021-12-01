(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-experiment",ev:"1.0",l:false,f:function(AMP,_){"use strict";function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function da(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}da(this);"function"===typeof Symbol&&Symbol("x");var q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;r=fa.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=q;var u=Array.isArray;var ia=Object.prototype,w=ia.hasOwnProperty,ja=ia.toString;function z(a){return"[object Object]"===ja.call(a)}var ka=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function la(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function ma(a){for(var b=null,c="",d=m(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function na(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];c=ma.apply(null,c);c.name=a||c.name;var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,c)}var A=self.AMP_CONFIG||{},oa=("string"==typeof A.cdnProxyRegex?new RegExp(A.cdnProxyRegex):A.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function pa(a){if(!self.document||!self.document.head||self.location&&oa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var qa={thirdParty:A.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:A.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof A.thirdPartyFrameRegex?new RegExp(A.thirdPartyFrameRegex):A.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:A.cdnUrl||pa("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:oa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:A.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:A.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:A.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:A.geoApiUrl||pa("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var B=self.__AMP_LOG;function ra(){throw Error("failed to call initLogConstructor")}function C(){B.user||(B.user=ra());return B.user}function D(a,b,c,d,e,f){return C().assert(a,b,c,d,e,f,void 0,void 0,void 0,void 0,void 0)}var E;function sa(){return E?E:E=Promise.resolve(void 0)}function ta(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}function ua(a){var b=va,c=F(a),d=G(c),e=H(d),f=e["origin-experiments"];f||(f=e["origin-experiments"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});f.ctor||(f.ctor=b,f.context=c,f.sharedInstance=!1,f.resolve&&I(d,"origin-experiments"))}function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function wa(a,b){var c=F(a);c=G(c);return I(c,b)}function K(a,b){a=G(a);var c=xa(a,b);c?b=c:(a=H(a),a[b]=ya(),b=a[b].promise);return b}function F(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function G(a){a=F(a);return a.isSingleDoc()?a.win:a}function I(a,b){za(a,b);a=H(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function xa(a,b){var c=H(a)[b];if(c){if(c.promise)return c.promise;I(a,b);return c.promise=Promise.resolve(c.obj)}return null}function H(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function za(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function ya(){var a=new ta,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function Aa(a){if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;var c,d,e,f=Object.assign({},null!=(d=a.AMP_CONFIG)?d:{},null!=(e=a.AMP_EXP)?e:JSON.parse((null==(c=a.__AMP_EXP)?void 0:c.textContent)||"{}"));for(k in f)c=f[k],"number"===typeof c&&0<=c&&1>=c&&(b[k]=Math.random()<c);var g;f=null==(g=a.AMP_CONFIG)?void 0:g["allow-doc-opt-in"];if(u(f)&&f.length&&(g=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=g.getAttribute("content").split(",");var k=m(g);for(g=k.next();!g.done;g=k.next())g=g.value,f.includes(g)&&(b[g]=!0)}g=Object;f=g.assign;k="";try{"localStorage"in a&&(k=a.localStorage.getItem("amp-experiment-toggles"))}catch(p){(B.dev||(B.dev=ra())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var h;k=(null==(h=k)?void 0:h.split(/\s*,\s*/g))||[];h=Object.create(null);k=m(k);for(c=k.next();!c.done;c=k.next())(c=c.value)&&("-"==c[0]?h[c.substr(1)]=!1:h[c]=!0);f.call(g,b,h);var l;h=null==(l=a.AMP_CONFIG)?void 0:l["allow-url-opt-in"];if(u(h)&&h.length){l=a.location.originalHash||a.location.hash;a=Object.create(null);if(l)for(;f=ka.exec(l);)g=la(f[1],f[1]),f=f[2]?la(f[2].replace(/\+/g," "),f[2]):"",a[g]=f;l=m(h);for(g=l.next();!g.done;g=l.next())h=g.value,g=a["e-"+h],"1"==g&&(b[h]=!0),"0"==g&&(b[h]=!1)}}return!!b["amp-experiment-1.0"]}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function Ba(a){return Ca(a).then((function(b){return D(b,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","userNotificationManager","amp-user-notification","amp-user-notification","amp-user-notification")}))}function Ca(a){var b=xa(G(a),"userNotificationManager");if(b)return b;var c=F(a);return c.whenExtensionsKnown().then((function(){var d=c.getExtensionVersion("amp-user-notification");return d?J(c.win,"extensions").waitForExtension("amp-user-notification",d):null})).then((function(d){return d?K(a,"userNotificationManager"):null}))}function Da(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);b[c]=d}return b}function L(a){for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=String.fromCharCode(a[c]);return b.join("")}function M(){this.K=100;this.B=this.D=0;this.A=Object.create(null)}M.prototype.has=function(a){return!!this.A[a]};M.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.B,b.payload};M.prototype.put=function(a,b){this.has(a)||this.D++;this.A[a]={payload:b,access:this.B};if(!(this.D<=this.K)){a=this.A;var d,c=this.B+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.D--)}};var N,Fa,Ea=new Set(["c","v","a","ad"]);function O(a){return"string"==typeof a?Ga(a):a}function Ga(a){N||(N=self.document.createElement("a"),Fa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new M));var b=N,c=Fa;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}var Ha={alg:"RS256",e:"AQAB",ext:!0,key_ops:["verify"],kty:"RSA",n:"uAGSMYKze8Fit508UaGHz1eZowfX4YsA0lmyi-65xQfjF7nMo61c4Iz4erdqgRp-ov662yVPquhPmTxgB-nzNcTPrj15Jo05Js78Q9hS2hrPIjKMlzcKSYQN_08QieWKOSmVbLSv_-4n9Ms5ta8nRs4pwc_2nX5n7m5B5GH4VerGbqIWIn9FRNYMShBRQ9TCHpb6BIUTwUn6iwmJLenq0A1xhGrQ9rswGC1QJhjotkeReKXZDLLWaFr0uRw-IyvRa5RiiEGntgOvcbvamM5TnbKavc2rxvg2TWTCNQnb7lWSAzldJA_yAOYet_MjnHMyj2srUdbQSDCk8kPWWuafiQ"};function va(a){this.G=a;this.o=J(a.win,"crypto");a=a.getHeadNode();a=F(a);a=G(a);this.F=za(a,"url")?I(a,"url"):null;this.L=new P(this.o,this.F);this.C=null}va.prototype.getExperiments=function(a,b){a=void 0===a?!1:a;b=void 0===b?Ha:b;var c=a,d=b;if(!this.o.isPkcsAvailable())return C().error("OriginExperiments","Crypto is unavailable."),Promise.resolve([]);if(!this.C||c)this.C=Ia(this,d);return this.C};function Ia(a,b){var c=a.G.getHeadNode().querySelectorAll('meta[name="amp-experiment-token"]');if(0==c.length)return sa();var d=a.G.win;return J(d,"crypto").importPkcsKey(b).then((function(e){for(var f=[],g=0;g<c.length;g++){var k=c[g],h=k.getAttribute("content");h?(k=a.L.verifyToken(h,d.location,e).catch((function(l){C().error("OriginExperiments","Failed to verify experiment token:",l)})),f.push(k)):C().error("OriginExperiments","Missing content for experiment token: ",k)}return Promise.all(f)}))}function P(a,b){this.o=a;this.F=b}P.prototype.generateKeys=function(){var a=Object.assign({},{modulusLength:2048,publicExponent:Uint8Array.of(1,0,1)},this.o.pkcsAlgo);return this.o.subtle.generateKey(a,!0,["sign","verify"])};P.prototype.generateToken=function(a,b,c){b=Da(JSON.stringify(b));var d=Ja(a,b);return this.o.subtle.sign(this.o.pkcsAlgo,c,d).then((function(e){e=new Uint8Array(e);e=L(d)+L(e);return btoa(e)}))};P.prototype.verifyToken=function(a,b,c){var d=this;return new Promise((function(e){var f=0,g=Da(atob(a)),k=g[f];if(0!==k)throw Error("Unrecognized token version: "+k);f+=1;k=new DataView(g.buffer).getUint32(f);f+=4;if(k>g.length-f)throw Error("Unexpected config length: "+k);var h=g.subarray(f,f+k);f+=k;k=g.subarray(0,f);f=g.subarray(f);e(d.o.verifyPkcs(c,f,k).then((function(l){if(!l)throw Error("Failed to verify token signature.");var p=L(h),v=JSON.parse(p),y=d.F.parse(v.origin).origin;var n=b;n=O(n);if(qa.cdnProxyRegex.test(O(n).origin)){var x=n.pathname.split("/");D(Ea.has(x[1]),"Unknown path prefix in url %s",n.href);var t=x[2],aa="s"==t?"https://"+decodeURIComponent(x[3]):"http://"+decodeURIComponent(t);D(0<aa.indexOf("."),"Expected a . in origin %s",aa);x.splice(1,"s"==t?3:2);x=aa+x.join("/");t=(t=n.search)&&"?"!=t?(t=t.replace(/[?&](amp_(js[^&=]*|gsa|r|kit)|usqp)\b[^&]*/g,"").replace(/^[?&]/,""))?"?"+t:"":"";n=x+t+(n.hash||"")}else n=n.href;n=Ga(n).origin;if(y!==n)throw Error("Config origin ("+y+") does not match window ("+n+").");n=v.experiment;if(v.expiration>=Date.now())return n;throw Error('Experiment "'+n+'" has expired.')})))}))};function Ja(a,b){var c=new Uint8Array(b.length+5);c[0]=a;new DataView(c.buffer).setUint32(1,b.length,!1);c.set(b,5);return c}var Ka=["attributes","characterData","childList"];function La(a){var b=JSON.stringify(a);D(void 0!==a.value&&"string"===typeof a.value,"Mutation %s must have a value.",b);D(void 0!==a.attributeName&&"string"===typeof a.attributeName,"Mutation %s must have a attributeName.",b)}function Q(a,b){this.h=a;this.j=b;La(this.h)}Q.prototype.parseAndValidate=function(){return this.h.value.match(/(^|\\W)i-amphtml-/)?!1:!0};Q.prototype.mutate=function(){var a=this;this.j.forEach((function(b){b.setAttribute(a.h.attributeName,a.h.value)}))};Q.prototype.toString=function(){return JSON.stringify(this.h)};var R,Ma="Webkit webkit Moz moz ms O o".split(" ");var Na=/\S/,S=/.*/,Oa={color:S,"background-color":S,visibility:/^hidden$/,display:/^none$/,position:/^(static|relative|absolute|initial|inherit)$/,"font-size":S,"background-image":S,"border-width":S,"border-style":S,"border-color":S},Pa={width:S,height:S};function T(a,b){this.h=a;this.j=b;this.I={};this.H=!1;La(this.h)}T.prototype.parseAndValidate=function(){var a=this.h.value;if(a.match(/(!\s*important|<)/))return!1;for(var b=0;b<this.j.length;b++){var c=this.j[b].tagName;if(c.startsWith("AMP-")&&"AMP-STICKY-AD-TOP-PADDING"!=c&&"AMP-BODY"!=c){this.H=!0;break}}var d=a.split(";");for(a=0;a<d.length;a++)if(Na.test(d[a])){var e=d[a].split(":");if(2!=e.length)return!1;b=e[0].trim();c=e[1].trim();if(!(!this.H&&w.call(Pa,b)&&c.match(Pa[b])||w.call(Oa,b)&&c.match(Oa[b])))return C().error("amp-experiment/style","Unsupported style mutation property: %s, value: %s",b,c),!1;this.I[b]=c}return!0};T.prototype.mutate=function(){var a=this;this.j.forEach((function(b){var c=a.I;"display"in c&&na("STYLE","`display` style detected. You must use toggle instead.");for(var d in c){var e=b,f=c[d];var g=e.style;var k=d;if(k.startsWith("--"))g=k;else{R||(R=Object.create(null));var h=R[k];if(!h){h=k;if(void 0===g[k]){var l=k;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var p=0;p<Ma.length;p++){var v=Ma[p]+l;if(void 0!==g[v]){l=v;break b}}l=""}void 0!==g[l]&&(h=l)}R[k]=h}g=h}g&&(g.startsWith("--")?e.style.setProperty(g,f):e.style[g]=f)}}))};T.prototype.toString=function(){return JSON.stringify(this.h)};var Qa=["AMP-IMG","AMP-IFRAME","A"];function U(a,b){this.h=a;this.j=b;La(this.h)}U.prototype.parseAndValidate=function(){for(var a=0;a<this.j.length;a++)if(0>Qa.indexOf(this.j[a].tagName))return!1;try{var b=this.h.value,c=this.h.target;a="attributes mutation";a=void 0===a?"source":a;D(null!=b,"%s %s must be available",c,a);var d=b;d=O(d);var e;if(!(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)){var f=d.hostname,g=f.length-10;e=0<=g&&f.indexOf(".localhost",g)==g}D(e||/^\/\//.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',c,a,b)}catch(k){return C().error("amp-experiment attribute-mutation-default-url",k.message),!1}return!0};U.prototype.mutate=function(){var a=this;this.j.forEach((function(b){var c=a.h.attributeName,d=a.h.value;b.setAttribute(c,d);if("function"===typeof b.mutatedAttributesCallback){var e=Object.create(null);e[c]=d;b.mutatedAttributesCallback(e)}}))};U.prototype.toString=function(){return JSON.stringify(this.h)};function V(a,b){this.h=a;this.j=b;a=this.h;b=JSON.stringify(a);D(void 0!==a.value&&"string"===typeof a.value,"Mutation %s must have a value.",b)}V.prototype.parseAndValidate=function(){return!0};V.prototype.mutate=function(){var a=this;this.j.forEach((function(b){b.textContent=a.h.value}))};V.prototype.toString=function(){return JSON.stringify(this.h)};function Ra(a,b,c){var d=Sa(b,c);return a.whenReady().then((function(){var e=[],f=0;d.forEach((function(h){D(z(h),"Mutation %s must be an object.",JSON.stringify(h));D(void 0!==h.type&&"string"===typeof h.type,"Mutation %s must have a type.",JSON.stringify(h));D(0<=Ka.indexOf(h.type),"Mutation %s must have a valid type.",JSON.stringify(h));D(void 0!==h.target&&"string"===typeof h.target,"Mutation %s must have a target.",JSON.stringify(h));var l=a.win.document;var p=h.target;D(!p.match(/(^|\\W)i-amphtml-/),"target %s cannot select i-amphtml-",p);l=l.querySelectorAll(p);D(0<l.length,"No element on the document matches the selector, %s .",h.target);l=l?Array.prototype.slice.call(l):[];f+=l.length;e.push({mutationRecord:h,elements:l})}));if(70<f){var g="Max number of mutations for the total applied experiments exceeded: "+f+" > 70";C().error("amp-experiment apply-experiment",g);throw Error(g)}var k=Ta(e);k.forEach((function(h){D(h.parseAndValidate(),"Mutation %s has an an unsupported value.",h.toString())}));k.forEach((function(h){h.mutate()}))}))}function Sa(a,b){var d,c=[];for(d in b){var e=b[d];e&&(c=c.concat(a[d].variants[e].mutations))}return c}function Ta(a){var b=[];a.forEach((function(c){var d=c.elements,e=c.mutationRecord,f=void 0;if("characterData"===e.type)f=new V(e,d);else if("attributes"===e.type)if("style"===e.attributeName)f=new T(e,d);else if("href"===e.attributeName||"src"===e.attributeName)f=new U(e,d);else if("class"===e.attributeName)f=new Q(e,d);else throw Error("Mutation "+JSON.stringify(e)+" has an unsupported attributeName.");else C().error("amp-experiment apply-experiment","childList mutations not supported in the current experiment state."),f={parseAndValidate:function(){return!0},mutate:function(){}};b.push(f)}));return b}var Ua=/^[\w-]+$/;function W(a){this.ampdoc=a;this.J=new ta}W.prototype.init=function(a){var b=this;a.then((function(c){return b.J.resolve(c)}))};W.prototype.getVariants=function(){return this.J.promise};W.prototype.whenReady=function(){return this.getVariants()};function Va(a,b,c){Wa(b);Xa(b,c);var d=a.getParam("amp-x-"+b);if(d&&w.call(c.variants,d))return Promise.resolve(d);var e=!1!==c.sticky,f=c.cidScope||"amp-experiment",g=Promise.resolve(!0);if(e&&c.consentNotificationId){var k=a.getHeadNode();g=Ba(k).then((function(h){return h.getNotification(c.consentNotificationId)})).then((function(h){D(h,"Notification not found: "+c.consentNotificationId);return h.isDismissed()}))}return g.then((function(h){return h?Ya(a,c.group||b,e?f:null).then((function(l){for(var p=0,v=c.variants,y=Object.keys(v).sort(),n=0;n<y.length;n++)if(p+=v[y[n]].weight,l<p)return y[n];return null})):null}))}function Xa(a,b){var c=b.variants;D(z(c)&&0<Object.keys(c).length,"Missing variants object from experiment.");b.group&&Wa(b.group);var e,d=0;for(e in c)if(w.call(c,e)){Wa(e);var f=c[e];b=f;var g=a,k=e;D(z(b),g+".variants."+k+" must be an object.");D(void 0!==b.weight&&"number"===typeof b.weight,g+".variants."+k+" must have a number weight.");var h=b.weight;D(0<h&&100>h,"Invalid weight percentage %s. "+g+".variants."+k+" Has to be greater than 0 and less than 100",h);D(b.mutations&&u(b.mutations),g+".variants."+k+" must have a mutations array.");d+=f.weight}D(100>=d.toFixed(6),"Total percentage is bigger than 100: "+d)}function Ya(a,b,c){if(!c)return Promise.resolve(100*a.win.Math.random());var d=K(a,"cid").then((function(e){return e.get({scope:c,createCookieIfNotPresent:!0},sa())}));return Promise.all([d,J(a.win,"crypto")]).then((function(e){return e[1].uniform(b+":"+e[0])})).then((function(e){return 100*e}))}function Wa(a){D(Ua.test(a),"Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].",a)}function X(){return AMP.BaseElement.apply(this,arguments)||this}var Y=AMP.BaseElement;X.prototype=ca(Y.prototype);X.prototype.constructor=X;if(ha)ha(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Za=Object.getOwnPropertyDescriptor(Y,Z);Za&&Object.defineProperty(X,Z,Za)}else X[Z]=Y[Z];X.M=Y.prototype;X.prerenderAllowed=function(){return!0};X.prototype.isLayoutSupported=function(a){return"nodisplay"==a||"container"==a};X.prototype.isBuildRenderBlocking=function(){return!0};X.prototype.buildCallback=function(){var a=this,b=[K(this.getAmpDoc(),"variant"),$a(this)];return Promise.all(b).then((function(c){var d=c[0],e=c[1],f={};try{if(f=ab(a),e){var g=a.getAmpDoc();wa(g,"viewer");if(null!=g.getParam("amp-x-disable-all-experiments"))d.init(Promise.resolve(bb(f)));else{var k=Object.create(null),h=Object.keys(f).map((function(l){return Va(g,l,f[l]).then((function(p){k[l]=p}))}));return Promise.all(h).then((function(){var l=a.getAmpDoc(),p=Ra(l,f,k).then((function(){return k}));d.init(p);return p})).catch((function(l){d.init(Promise.resolve(bb(f)));throw l}))}}else C().error("amp-experiment","Experiment amp-experiment-1.0 is not enabled."),d.init(Promise.resolve(bb(f)))}catch(l){throw d.init(Promise.resolve({})),l}}))};function ab(a){a=a.element.children;D(1==a.length&&"SCRIPT"==a[0].tagName&&"APPLICATION/JSON"==a[0].getAttribute("type").toUpperCase(),'<amp-experiment> should contain exactly one <script type="application/json"> child.');return JSON.parse(a[0].textContent)}function bb(a){var b=Object.create(null);Object.keys(a).map((function(c){b[c]=null}));return b}function $a(a){if(Aa(a.win))return Promise.resolve(!0);ua(a.getAmpDoc());return wa(a.element,"origin-experiments").getExperiments().then((function(b){return b&&b.includes("amp-experiment-1.0")}))}AMP.registerServiceForDoc("variant",W);AMP.registerElement("amp-experiment",X)}});//# sourceMappingURL=amp-experiment-1.0.js.map