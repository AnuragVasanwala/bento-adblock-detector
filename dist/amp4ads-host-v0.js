(function(){"use strict";var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var n=Array.isArray;function ba(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d);return c}function ca(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}function t(a){return a||{}}function w(a){return 1==(null==a?void 0:a.nodeType)?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function x(a){return 0<=a.indexOf("​​​")}function da(a,b,c,d){var e=void 0===c?"Assertion failed":c;if(b)return b;a&&-1==e.indexOf(a)&&(e+=a);for(var f=3,g=e.split("%s"),h=g.shift(),l=[h];g.length;){var p=arguments[f++],q=g.shift();h+=w(p)+q;l.push(p,q.trim())}f=Error(h);f.messageArray=ba(l,(function(u){return""!==u}));var r,v;null==(v=(r=self).__AMP_REPORT_ERROR)||v.call(r,f);throw f}function y(a,b,c,d,e){n(e)?a(c,e.concat([b])):a(c,(e||d)+": %s",b);return b}function z(a){var b;if(null==(b=Object.getOwnPropertyDescriptor(a,"message"))?0:b.writable)return a;var c=a.stack;b=Error(a.message);for(var d in a)b[d]=a[d];b.stack=c;return b}function A(a){for(var b=null,c="",d=m(arguments),e=d.next();!e.done;e=d.next())e=e.value,e instanceof Error&&!b?b=z(e):(c&&(c+=" "),c+=e);b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function ea(a){var b=A.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function fa(a){var b=A.apply(null,arguments);b.expected=!0;return b}function ha(a,b){try{return JSON.parse(a)}catch(c){return null==b||b(c),null}}function B(a,b,c){c=void 0===c?{}:c;var d=void 0===d?null:d;c.type=a;c.sentinel=b;return"amp-"+(d||"")+JSON.stringify(c)}function ia(a){if(!ja(a))return null;var b=a.indexOf("{");return ha(a.substr(b),(function(c){ea(Error("MESSAGING: Failed to parse message: "+a+"\n"+c.message))}))}function ja(a){return"string"==typeof a&&a.startsWith("amp-")&&-1!=a.indexOf("{")}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var C,D="Webkit webkit Moz moz ms O o".split(" ");function ka(a,b,c){if(b.startsWith("--"))return b;C||(C=Object.create(null));var d=C[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<D.length;f++){var g=D[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(C[b]=d)}return d}function la(a){var b={"pointer-events":"none"};a=a.style;for(var c in b)a.setProperty(ka(a,c),String(b[c]),"important")}function ma(a,b,c){(b=ka(a.style,b,void 0))&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}function E(a,b){for(var c in b)ma(a,c,b[c])}function F(a){return"number"==typeof a?a+"px":a}function na(a,b){for(var c=0;c<b.length;c++)ma(a,b[c],null)}function oa(a){var b=!1,c=null,d=a;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];b||(c=d.apply(self,f),b=!0,d=null);return c}}function pa(a,b){function c(g){f=null;e=a.setTimeout(d,100);b.apply(null,g)}function d(){e=0;f&&c(f)}var e=0,f=null;return function(g){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];e?f=h:c(h)}}var qa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ra(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function G(a){a=(a||self).location;a=a.originalHash||a.hash;var b=Object.create(null);if(a)for(var c;c=qa.exec(a);){var d=ra(c[1],c[1]);c=c[2]?ra(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}var H=self.AMP_CONFIG||{},sa=("string"==typeof H.cdnProxyRegex?new RegExp(H.cdnProxyRegex):H.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ta(a){if(!self.document||!self.document.head||self.location&&sa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var I={thirdParty:H.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:H.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof H.thirdPartyFrameRegex?new RegExp(H.thirdPartyFrameRegex):H.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:H.cdnUrl||ta("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:sa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:H.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:H.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:H.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:H.geoApiUrl||ta("amp-geo-api")};var J="";function K(a){a=a||self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{var c=G(a)||G(a);c=["1","actions","amp","amp4ads","amp4email"].includes(c.development)||!!a.AMP_DEV_MODE;J||(J=(null==(b=a.AMP_CONFIG)?void 0:b.v)||"012110171511011");b=a.__AMP_MODE={localDev:!1,development:c,esm:!1,test:!1,rtvVersion:J}}return b}function ua(){}function Aa(a,b){return b.reduce((function(c,d){return c+"&s[]="+encodeURIComponent(String(w(d)))}),"https://log.amp.dev/?v=012110171511011&id="+encodeURIComponent(a))}function Ba(a,b,c){var d=this,e=c=void 0===c?"":c;this.win=a;this.Y=b;this.Z=Ca(this);this.B=e;this.N=null;this.U=oa((function(){a.fetch(I.cdn+"/rtv/012110171511011/log-messages.simple.json").then((function(f){return f.json()}),ua).then((function(f){f&&(d.N=f)}))}));this.A=this.assert.bind(this)}function Ca(a){var c,b=a.win;return null!=(c=b.console)&&c.log&&0!=parseInt(G(b).log,10)?a.Y(parseInt(G(void 0).log,10),K().development):0}function L(a,b,c,d){if(c>a.Z)return!1;var f,e=a.win.console,g={};c=null!=(f=(g[1]=e.error,g[3]=e.info,g[2]=e.warn,g)[c])?f:e.log;a=n(d[0])?Da(a,d[0]):d;b="["+b+"]";"string"==typeof a[0]?a[0]=b+" "+a[0]:a.unshift(b);c.apply(e,a);return!0}k=Ba.prototype;k.fine=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];L(this,a,4,c)};k.info=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];L(this,a,3,c)};k.warn=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];L(this,a,2,c)};k.error=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!L(this,a,1,c)){c=this.createError.apply(this,c);c.name=a||c.name;var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,c)}};k.expectedError=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!L(this,a,1,c)){var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,this.createExpectedError.apply(this,c))}};k.createError=function(a){return Ea(this,A.apply(null,arguments))};k.createExpectedError=function(a){return Ea(this,fa.apply(null,arguments))};function Ea(a,b){b=z(b);a.B?b.message?-1==b.message.indexOf(a.B)&&(b.message+=a.B):b.message=a.B:x(b.message)&&(b.message=b.message.replace("​​​",""));return b}function Da(a,b){var c=b.shift();K(a.win).development&&a.U();var d;return(null==(d=a.N)?0:d[c])?[a.N[c]].concat(b):["More info at "+Aa(c,b)]}k.assert=function(a,b,c){return n(b)?this.assert.apply(this,[a].concat(Da(this,b))):da.apply(null,[this.B].concat(Array.prototype.slice.call(arguments)))};k.assertElement=function(a,b){return y(this.A,a,1==(null==a?void 0:a.nodeType),"Element expected",b)};k.assertString=function(a,b){return y(this.A,a,"string"==typeof a,"String expected",b)};k.assertNumber=function(a,b){return y(this.A,a,"number"==typeof a,"Number expected",b)};k.assertArray=function(a,b){return y(this.A,a,n(a),"Array expected",b)};k.assertBoolean=function(a,b){return y(this.A,a,!!a===a,"Boolean expected",b)};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var M=self.__AMP_LOG,N=null;function Fa(a,b){if(!N)throw Error("failed to call initLogConstructor");return new N(self,a,b)}function Ga(){M.user||(M.user=Ha());return M.user}function Ha(){return Fa((function(a,b){return b||1<=a?4:2}),"​​​")}function O(){return M.dev||(M.dev=Fa((function(a){return 3<=a?4:2<=a?3:0})))}function P(){this.S=100;this.L=this.P=0;this.C=Object.create(null)}P.prototype.has=function(a){return!!this.C[a]};P.prototype.get=function(a){var b=this.C[a];if(b)return b.access=++this.L,b.payload};P.prototype.put=function(a,b){this.has(a)||this.P++;this.C[a]={payload:b,access:this.L};if(!(this.P<=this.S)){a=this.C;var d,c=this.L+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.P--)}};new Set(["c","v","a","ad"]);var Q,Ia;function Ja(a){try{return!!a.location.href&&(a.test||!0)}catch(b){return!1}}function R(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function S(a){return R(Number(a.left),Number(a.top),Number(a.width),Number(a.height))}function Ka(a,b,c){var d=c.width/2-b.width/2-b.left+"px",e=c.height/2-b.height/2-b.top+"px",f=b.top+"px",g=c.width-(b.left+b.width)+"px",h=b.left+"px",l=c.height-(b.top+b.height)+"px",p=b.height+"px",q=b.width+"px";var r=void 0===e||null===e?"translate("+F(d)+")":"translate("+F(d)+", "+F(e)+")";E(a,{position:"fixed",top:f,right:g,left:h,bottom:l,height:p,width:q,transition:"transform 150ms ease",transform:r,margin:0})}function T(a,b,c){a.requestAnimationFrame((function(){b.measure&&b.measure(c);b.mutate&&b.mutate(c)}))}function La(a,b,c){T(a,{measure:function(d){d.viewportSize={width:a.innerWidth,height:a.innerHeight};d.rect=S(b.getBoundingClientRect())},mutate:function(d){var e=d.viewportSize,f=R(0,0,e.width,e.height);Ka(b,d.rect,d.viewportSize);la(b);setTimeout((function(){T(a,{mutate:function(){na(b,["pointer-events"]);E(b,{position:"fixed","z-index":1e3,left:0,right:0,top:0,bottom:0,width:"100vw",height:"100vh",transition:null,transform:null,margin:0,border:0});c(d.rect,f)}})}),200)}},{})}function Ma(a,b,c,d){T(a,{mutate:function(){na(b,"position z-index left right top bottom width height margin border".split(" "));c();T(a,{measure:function(){d(S(b.getBoundingClientRect()))}})}})}function U(a){this.j=a;this.J=this.M=!1;this.D=null;Na(this)}function Na(a){a.j.addEventListener("resize",(function(){return a.onWindowResize()}))}U.prototype.onWindowResize=function(){this.M&&(this.J=!0)};U.prototype.expandFrame=function(a,b){var c=this;La(this.j,a,(function(d,e){c.M=!0;c.J=!1;c.D=d;b(e)}))};U.prototype.collapseFrame=function(a,b){var c=this;Ma(this.j,a,(function(){c.M=!1;c.J||b(c.D)}),(function(d){c.D=d;c.J&&b(c.D)}))};function Oa(){this.o=null}k=Oa.prototype;k.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};k.remove=function(a){if(this.o){var b=this.o;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};k.removeAll=function(){this.o&&(this.o.length=0)};k.fire=function(a){if(this.o)for(var b=m(this.o),c=b.next();!c.done;c=b.next())c=c.value,c(a)};k.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.o)?void 0:a.length)?b:0};function V(a){this.j=a;this.I=null;var b=this.j;a=b.document;if(a.scrollingElement)a=a.scrollingElement;else{var c;if(c=a.body)b=b.navigator.userAgent,c=/WebKit/i.test(b)&&!/Edge/i.test(b);a=c?a.body:a.documentElement}this.$=a;this.K=null}V.prototype.observe=function(a,b){var c=this;if(!this.I){this.I=new Oa;var d=pa(this.j,(function(){c.K=c.getViewportRect();c.I.fire()}));this.K=this.getViewportRect();this.j.addEventListener("scroll",d,!0);this.j.addEventListener("resize",d,!0)}b({viewportRect:this.K,targetRect:this.getTargetRect(a)});return this.I.add((function(){b({viewportRect:c.K,targetRect:c.getTargetRect(a)})}))};V.prototype.getViewportRect=function(){var a=this.$,b=this.j;return R(Math.round(a.scrollLeft||b.pageXOffset),Math.round(a.scrollTop||b.pageYOffset),b.innerWidth,b.innerHeight)};V.prototype.getTargetRect=function(a){for(var b=S(a.getBoundingClientRect()),c=0,d=a.ownerDocument.defaultView;10>c&&d&&d!=this.j&&d!=this.j.top;c++,d=d.parent){var e=S(d.frameElement.getBoundingClientRect());a=b;var f=e.left,g=e.top;b=0==f&&0==g||0==a.width&&0==a.height?a:R(a.left+f,a.top+g,a.width,a.height)}return b};var Pa=["send-positions"];function W(){this.G={}}W.prototype.listen=function(a,b){a in this.G&&O().fine("InaboxMessagingHost","Overriding message callback ["+a+"]");this.G[a]=b};W.prototype.fire=function(a,b,c){return a in this.G?this.G[a].apply(b,c):!1};function Qa(a,b){var c=Ja(a.top)?a.top:a;this.F=b;this.h=Object.create(null);c.ampInaboxPositionObserver=c.ampInaboxPositionObserver||new V(c);this.O=c.ampInaboxPositionObserver;this.H=new W;c.ampInaboxFrameOverlayManager=c.ampInaboxFrameOverlayManager||new U(c);this.R=c.ampInaboxFrameOverlayManager;this.H.listen("send-positions",this.X);this.H.listen("full-overlay-frame",this.W);this.H.listen("cancel-full-overlay-frame",this.V)}k=Qa.prototype;k.processMessage=function(a){var b=ia(a.data);if(!b||!b.sentinel)return O().fine("InaboxMessagingHost","Ignored non-AMP message:",a),!1;a:{var c=b.sentinel;if(this.h[c])c=this.h[c];else{var d=this.getMeasureableFrame(a.source);if(d)for(var e=d.contentWindow,f=0;f<this.F.length;f++)for(var g=this.F[f],h=0,l=e;10>h;h++,l=l.parent){if(g.contentWindow==l){this.h[c]={iframe:g,measurableFrame:d};c=this.h[c];break a}if(l==window.top)break}c=null}}var p=c;if(!p)return O().info("InaboxMessagingHost","Ignored message from untrusted iframe:",a),!1;var q=p.iframe.dataset.ampAllowed;return-1===(q?q.split(/\s*,\s*/):Pa).indexOf(b.type)?(O().info("InaboxMessagingHost","Message type ignored:",a),!1):this.H.fire(b.type,this,[p.measurableFrame,b,a.source,a.origin])?!0:(O().warn("InaboxMessagingHost","Unprocessed AMP message:",a),!1)};k.X=function(a,b,c){var d=this.O.getViewportRect(),e=this.O.getTargetRect(a);Ra(b,c,t({viewportRect:d,targetRect:e}));this.h[b.sentinel].observeUnregisterFn=this.h[b.sentinel].observeUnregisterFn||this.O.observe(a,(function(f){return Ra(b,c,f)}));return!0};function Ra(a,b,c){O().fine("InaboxMessagingHost","Sent position data to [%s] %s",a.sentinel,c);b.postMessage(B("position",a.sentinel,c),"*")}k.W=function(a,b,c,d){this.R.expandFrame(a,(function(e){c.postMessage(B("full-overlay-frame-response",b.sentinel,t({success:!0,boxRect:e})),d)}));return!0};k.V=function(a,b,c,d){this.R.collapseFrame(a,(function(e){c.postMessage(B("cancel-full-overlay-frame-response",b.sentinel,t({success:!0,boxRect:e})),d)}));return!0};k.getMeasureableFrame=function(a){if(!a)return null;for(var b,c=0,d=a;10>c&&d!=d.top&&!Ja(d);c++,b=d,d=d.parent);if(b){c=b.parent.document.querySelectorAll("iframe");d=0;for(var e=c[d];d<c.length;d++,e=c[d])if(e.contentWindow==b)return e}return a.frameElement};k.unregisterIframe=function(a){var b=this.F.indexOf(a);-1!=b&&this.F.splice(b,1);for(var c in this.h)this.h[c].iframe==a&&(this.h[c].observeUnregisterFn&&this.h[c].observeUnregisterFn(),delete this.h[c])};var X;function Sa(){var a=Ta();return function(b){return setTimeout(b,a())}}function Ta(){var a=0;return function(){var b=Math.pow(1.5,a++);var c=b*(c||.3)*Math.random();.5<Math.random()&&(c*=-1);b+=c;return 1e3*b}}function Ua(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Va(a,"ampdoc")}function Wa(a){var b=Xa(a);b=Xa(b);b=b.isSingleDoc()?b.win:b;return Va(b,"viewer")}function Xa(a){return a.nodeType?Ua((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function Va(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}var Ya=!1;function Za(a){Ya||(Ya=!0,E(a.body,{opacity:1,visibility:"visible",animation:"none"}))}var Y=self.__AMP_ERRORS||[];self.__AMP_ERRORS=Y;function Z(a){Z=Sa();return Z(a)}function $a(a){try{return JSON.stringify(a)}catch(b){return String(a)}}function ab(a,b){try{if(a)if(void 0!==a.message)a=z(a);else{var c=a;a=Error($a(c));a.origError=c}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;if(a.messageArray){var d,e=ca(a.messageArray,(function(h){return null==(d=h)?void 0:d.tagName}));-1<e&&(a.associatedElement=a.messageArray[e])}var f=b||a.associatedElement;f&&f.classList&&(f.classList.add("i-amphtml-error"),K().development&&(f.classList.add("i-amphtml-element-error"),f.setAttribute("error-message",a.message)));if(self.console&&(x(a.message)||!a.expected)){var g=console.error||console.log;a.messageArray?g.apply(console,a.messageArray):f?g.call(console,a.message,f):g.call(console,a.message)}f&&f.T&&f.T("amp:error",a.message);bb.call(self,void 0,void 0,void 0,void 0,a)}catch(h){setTimeout((function(){throw h}))}return a}function bb(a,b,c,d,e){var f=this;!this||!this.document||e&&e.expected||Za(this.document);if(!K().development){var g=!1;try{g=cb()}catch(l){}if(!(g&&.01<Math.random())){var h=db(a,b,c,d,e,g);h&&Z((function(){try{return eb(f,h).catch((function(){}))}catch(l){}}))}}}function eb(a,b){b.pt&&.9>Math.random()?(X||(X=Promise.resolve(void 0)),a=X):a=fb(a,b).then((function(c){if(!c){var d=new XMLHttpRequest;d.open("POST",.1>Math.random()?I.betaErrorReporting:I.errorReporting,!0);d.send(JSON.stringify(b))}}));return a}function fb(a,b){a=Ua(a);if(!a.isSingleDoc())return Promise.resolve(!1);var c=a.getSingleDoc();if(!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var d=Wa(c);return d.hasCapability("errorReporter")?d.isTrustedViewer().then((function(e){if(!e)return!1;d.sendMessage("error",t({m:b.m,a:b.a,s:b.s,el:b.el,ex:b.ex,v:b.v,pt:b.pt}));return!0})):Promise.resolve(!1)}function db(a,b,c,d,e,f){var g=a;e&&(g=e.message?e.message:String(e));g||(g="Unknown error");a=g;var h=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var l=!(self&&self.window),p=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||l)if(h=!0,.001<p)return;var q=x(a);if(!(q&&.1<p)){g=Object.create(null);g.v=K().rtvVersion;g.noAmp=f?"1":"0";g.m=a.replace("​​​","");g.a=q?"1":"0";g.ex=h?"1":"0";g.dw=l?"1":"0";var r="1p";self.context&&self.context.location?(g["3p"]="1",r="3p"):K().runtime&&(r=K().runtime);g.rt=r;"inabox"===r&&(g.adid=K().a4aId);var v;f=!(null==(v=self.AMP_CONFIG)||!v.canary);g.ca=f?"1":"0";var u;v=(null==(u=self.AMP_CONFIG)?void 0:u.type)||"unknown";g.bt=v;self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(g.or=self.location.ancestorOrigins[0]);self.viewerState&&(g.vs=self.viewerState);self.parent&&self.parent!=self&&(g.iem="1");if(self.AMP&&self.AMP.viewer){var va=self.AMP.viewer.getResolvedViewerUrl(),wa=self.AMP.viewer.maybeGetMessagingOrigin();va&&(g.rvu=va);wa&&(g.mso=wa)}var xa=[];u=self.__AMP__EXPERIMENT_TOGGLES||null;for(var ya in u)xa.push(ya+"="+(u[ya]?"1":"0"));g.exps=xa.join(",");if(e){var za;g.el=(null==(za=e.associatedElement)?void 0:za.tagName)||"u";e.args&&(g.args=JSON.stringify(e.args));q||e.ignoreStack||!e.stack||(g.s=e.stack);e.message&&(e.message+=" _reported_")}else g.f=b||"",g.l=c||"",g.c=d||"";g.r=self.document?self.document.referrer:"";g.ae=Y.join(",");g.fr=self.location.originalHash||self.location.hash;"production"===g.bt&&(g.pt="1");b=a;25<=Y.length&&Y.splice(0,Y.length-25+1);Y.push(b);return g}}}function cb(){var a=self;if(!a.document)return!1;a=a.document.querySelectorAll("script[src]");for(var b=0;b<a.length;b++){var c=I.cdnProxyRegex,d=c.test,e=a[b].src.toLowerCase();if("string"==typeof e){Q||(Q=self.document.createElement("a"),Ia=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new P));var f=Q,g=Ia;if(g&&g.has(e))e=g.get(e);else{f.href=e;f.protocol||(f.href=f.href);var h={href:f.href,protocol:f.protocol,host:f.host,hostname:f.hostname,port:"0"==f.port?"":f.port,pathname:f.pathname,search:f.search,hash:f.hash,origin:null};"/"!==h.pathname[0]&&(h.pathname="/"+h.pathname);if("http:"==h.protocol&&80==h.port||"https:"==h.protocol&&443==h.port)h.port="",h.host=h.hostname;h.origin=f.origin&&"null"!=f.origin?f.origin:"data:"!=h.protocol&&h.host?h.protocol+"//"+h.host:h.href;f=h;g&&g.put(e,f);e=f}}if(!d.call(c,e.origin))return!0}return!1}new function(a){if(a.ampInaboxInitialized)O().info("inabox-host","Skip a 2nd attempt of initializing AMP inabox host.");else{a.ampInaboxInitialized=!0;N=Ba;O();Ga();self.__AMP_REPORT_ERROR=ab;a.ampInaboxIframes&&!Array.isArray(a.ampInaboxIframes)&&(O().info("inabox-host","Invalid %s. %s","ampInaboxIframes",a.ampInaboxIframes),a.ampInaboxIframes=[]);var b=new Qa(a,a.ampInaboxIframes);a.AMP=a.AMP||{};a.AMP.inaboxUnregisterIframe?O().info("inabox-host","win.AMP[inaboxUnregisterIframe] already defined}"):a.AMP.inaboxUnregisterIframe=b.unregisterIframe.bind(b);var c=a.ampInaboxPendingMessages,d=function(e){try{b.processMessage(e)}catch(f){O().error("inabox-host","Error processing inabox message",e,f)}};c&&(Array.isArray(c)?c.forEach((function(e){var f=!(!e.source||!e.source.postMessage);f||Ga().warn("inabox-host","Ignoring an inabox message. Likely the requester iframe has been removed. message.data="+JSON.stringify(e.data));f&&d(e)})):O().info("inabox-host","Invalid %s %s","ampInaboxPendingMessages",c));a.ampInaboxPendingMessages=[];a.ampInaboxPendingMessages.push=function(){};a.addEventListener("message",d.bind(b))}}(self)})();//# sourceMappingURL=amp4ads-host-v0.js.map