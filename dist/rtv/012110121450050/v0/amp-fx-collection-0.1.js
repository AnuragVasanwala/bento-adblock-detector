(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-fx-collection",ev:"0.1",l:true,f:function(AMP,_){"use strict";function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function l(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ba(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)}function m(a){for(var b=null,c="",d=l(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function n(a){var b,c;null==(c=(b=self).__AMP_REPORT_ERROR)||c.call(b,a)}function ca(a){var b=m.apply(null,arguments);setTimeout((function(){n(b);throw b}))}function da(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){ca(e)}}function ea(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];c=m.apply(null,c);c.name=a||c.name;n(c)}var p;function fa(a,b){var c=ha();a.addEventListener("amp:dom-update",(function(d){try{return b(d)}catch(g){var e,f;null==(f=(e=self).__AMP_REPORT_ERROR)||f.call(e,g);throw g}}),c?void 0:!1)}function ha(){if(void 0!==p)return p;p=!1;try{var a={get capture(){p=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return p}function ia(a){var b=!1,c=null,d=a;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];b||(c=d.apply(self,f),b=!0,d=null);return c}}function ja(a,b){function c(){d=0;var g=500-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var h=f;f=null;b.apply(null,h)}}var d=0,e=0,f=null;return function(g){for(var h=[],k=0;k<arguments.length;++k)h[k-0]=arguments[k];e=a.Date.now();f=h;d||(d=a.setTimeout(c,500))}}var q=self.AMP_CONFIG||{},ka=("string"==typeof q.cdnProxyRegex?new RegExp(q.cdnProxyRegex):q.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function r(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}q.cdnUrl||r("runtime-host");q.geoApiUrl||r("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var t=self.__AMP_LOG;function u(){throw Error("failed to call initLogConstructor")}function v(){t.user||(t.user=u());return t.user}function w(a,b,c){return v().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function la(a,b){fa(a,b)}var x="fade-in fade-in-scroll float-in-bottom float-in-top fly-in-bottom fly-in-left fly-in-right fly-in-top parallax".split(" "),y=x[0],z=x[1],ma=x[2],na=x[3],A=x[4],B=x[5],C=x[6],D=x[7],E=x[8],F={},G=(F[y]={observes:0,opacity:!0},F[z]={observes:0,opacity:!0},F[ma]={observes:1,translates:{y:!0}},F[na]={observes:1,translates:{y:!0}},F[A]={observes:0,translates:{y:!0}},F[B]={observes:0,translates:{x:!0}},F[C]={observes:0,translates:{x:!0}},F[D]={observes:0,translates:{y:!0}},F[E]={observes:0,translates:{y:!0}},F);function oa(a){return w(-1<x.indexOf(a),"Invalid amp-fx type `%s`",a)}function pa(a){a.hasAttribute("amp-fx");var b=a.getAttribute("amp-fx").trim().toLowerCase().split(/\s+/);w(b.length,"No value provided for `amp-fx` attribute");a=b.filter(oa);for(var c=0;c<a.length;c++)for(var d=a[c],e=c+1;e<a.length;e++){var f=a[e];if(d==f)var g=!1;else{g=G[d];var h=g.translates,k=G[f],Ja=k.opacity,N=k.translates;g=g.observes!==k.observes||g.opacity&&Ja||h&&N&&(h.x&&N.x||h.y&&N.y)?!1:!0}g||(v().warn("amp-fx-collection","%s preset can't be combined with %s preset as the resulting animation isn't valid.",d,f),a.splice(e--,1))}return a}var H,I="Webkit webkit Moz moz ms O o".split(" "),J={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function K(a,b,c){if(b.startsWith("--"))return b;H||(H=Object.create(null));var d=H[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<I.length;f++){var g=I[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(H[b]=d)}return d}function qa(a,b){a=a.style;for(var c in b)a.setProperty(K(a,c),String(b[c]),"important")}function L(a,b){for(var c in b){var d=a,e=b[c],f=K(d.style,c,void 0);f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}function ra(a){"display"in a&&ea("STYLE","`display` style detected. You must use toggle instead.");return a}function sa(a,b,c){var d=M(a),e=ta(d),f=ua(e),g=f[b];g||(g=f[b]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});g.ctor||(g.ctor=c,g.context=d,g.sharedInstance=!1,g.resolve&&O(e,b))}function va(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return O(a,b)}function P(a,b){var c=M(a);c=ta(c);return O(c,b)}function M(a){return a.nodeType?va((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ta(a){a=M(a);return a.isSingleDoc()?a.win:a}function O(a,b){a=ua(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ua(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Q(a){return P(a,"viewport")}function wa(a,b){return{left:0,top:0,width:a,height:b,bottom:0+b,right:0+a,x:0,y:0}}function xa(a,b){return a&&b?a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height:!1}function ya(a,b,c,d){this.element=b;this.L=d;this.fidelity=c;this.turn=0==c?Math.floor(4*Math.random()):0;this.F=null;this.A=Q(a)}ya.prototype.update=function(a){var b=this;if(!a){if(0!=this.turn){this.turn--;return}0==this.fidelity&&(this.turn=4)}var c=this.A.getSize(),d=wa(c.width,c.height);this.A.getClientRectAsync(this.element).then((function(e){var f={positionRect:e,viewportRect:d,relativePos:null},g=b.F;if(!(g&&xa(g.positionRect,f.positionRect)&&xa(g.viewportRect,f.viewportRect))){g=f.positionRect;var h=f.viewportRect;f.relativePos=g.top<h.top?"top":g.bottom>h.bottom?"bottom":"inside";h=f.viewportRect;g.top<=h.bottom&&h.top<=g.bottom&&g.left<=h.right&&h.left<=g.right?(b.F=f,b.L(f)):b.F&&(b.F=null,f.positionRect=null,b.L(f))}}))};function R(a){var b=this;this.o=a;this.O=a.win;this.h=[];this.U=va(this.O,"vsync");this.A=Q(a);this.G=[];this.H=this.J=this.I=!1;this.P=ja(this.O,(function(){b.I=!1}))}R.prototype.observe=function(a,b,c){var d=this,e=new ya(this.o,a,b,c);this.h.push(e);this.H||za(this);e.update();return function(){for(var f=0;f<d.h.length;f++)if(d.h[f]==e){d.h.splice(f,1);0==d.h.length&&Aa(d);break}}};R.prototype.unobserve=function(a){for(var b=0;b<this.h.length;b++)if(this.h[b].element==a){this.h.splice(b,1);0==this.h.length&&Aa(this);return}(t.dev||(t.dev=u())).error("POSITION_OBSERVER","cannot unobserve unobserved element")};function za(a){a.H=!0;a.G.push(a.A.onScroll((function(){a.P();a.I=!0;a.J||Ba(a)})));a.G.push(a.A.onResize((function(){a.updateAllEntries(!0)})))}function Aa(a){for(a.H=!1;a.G.length;)a.G.pop()()}R.prototype.updateAllEntries=function(a){for(var b=0;b<this.h.length;b++)this.h[b].update(a)};function Ba(a){a.updateAllEntries();a.J=!0;a.I?a.U.measure((function(){Ba(a)})):a.J=!1}function S(a,b,c){var d=a.element,e="X"==b,f=c*a.flyInDistance+(e?"vw":"vh");a.initialTrigger||(P(d,"mutator").mutateElement(d,(function(){var g=a.win.getComputedStyle(d)||J,h=e?"left":"top",k={position:"static"===g.position?"relative":g.position,visibility:"visible"};k[h]="calc("+("auto"===g[h]?"0px":g[h])+" - "+f+")";L(d,ra(k))})),a.initialTrigger=!0);L(d,{"transition-duration":a.duration,"transition-timing-function":a.easing,transform:"translate"+b+"("+f+")"})}function T(a){var b=parseFloat(a.getAttribute("data-margin-start"));b&&w(0<=b&&100>=b,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",a);return b}function U(a){return a&&a.positionRect?a.positionRect.top:null}function Ca(a,b,c){a=U(a);return!!a&&a+c*b.viewportHeight*b.flyInDistance/100<=(1-b.marginStart)*b.viewportHeight}function V(a,b,c){a=U(a);var d=void 0!==c?c:b.viewportHeight;return!!a&&a<=(1-b.marginStart)*d}var W={},Da=(W[E]={userAsserts:function(a){var b=w(a.getAttribute("data-parallax-factor"),"data-parallax-factor=<number> attribute must be provided for: %s",a);w(0<parseFloat(b),"data-parallax-factor must be a number and greater than 0 for: %s",a)},update:function(a){if((a=U(a))&&!(a>this.adjustedViewportHeight)){var b=-(parseFloat(this.factor)-1);this.offset=(this.adjustedViewportHeight-a)*b;L(this.element,{transform:"translateY("+this.offset.toFixed(0)+"px)"})}}},W[A]={userAsserts:T,update:function(a){Ca(a,this,-1)&&S(this,"Y",-1)}},W[B]={userAsserts:T,update:function(a){V(a,this)&&S(this,"X",1)}},W[C]={userAsserts:T,update:function(a){V(a,this)&&S(this,"X",-1)}},W[D]={userAsserts:T,update:function(a){Ca(a,this,1)&&S(this,"Y",1)}},W[y]={userAsserts:T,update:function(a){V(a,this)&&L(this.element,{"transition-duration":this.duration,"transition-timing-function":this.easing,opacity:1})}},W[z]={userAsserts:function(a){var b=T(a),c=parseFloat(a.getAttribute("data-margin-end"));c&&(w(0<=c&&100>=c,"data-margin-end must be a percentage value and be between 0% and 100% for: %s",a),w(c>b,"data-margin-end must be greater than data-margin-start for: %s",a))},update:function(a){var b=this.marginStart,c=this.viewportHeight;!V(a,this,this.adjustedViewportHeight)||!this.hasRepeat&&1<=this.offset||(a=U(a),this.offset=(c-a-b*c)/((this.marginEnd-b)*c),L(this.element,{opacity:this.offset}))}},W);function Ea(a){var b={linear:"cubic-bezier(0.00, 0.00, 1.00, 1.00)","ease-in-out":"cubic-bezier(0.80, 0.00, 0.20, 1.00)","ease-in":"cubic-bezier(0.80, 0.00, 0.60, 1.00)","ease-out":"cubic-bezier(0.40, 0.00, 0.40, 1.00)"};if(b[a])return b[a];w(a.startsWith("cubic-bezier"),"All custom bezier curves should be specified by following the `cubic-bezier()` function notation.");return a}function Fa(a){var b=parseFloat(a);return isNaN(b)?null:b/100}function Ga(a){switch(a){case E:return{"will-change":"transform"};case y:return{"will-change":"opacity",opacity:0};case z:return{"will-change":"opacity",opacity:0};case A:case D:case B:case C:return{"will-change":"transform"};default:return{visibility:"visible"}}}function Ha(a,b){switch(b){case y:return"1000ms";case A:case D:case B:case C:return a=Q(a).getSize().width,a=Math.min(1e3,a),480>a?a=480:1e3<a&&(a=1e3),200*(a-480)/520+400+"ms";default:return"1ms"}}function Ia(a){switch(a){case y:case C:case B:case D:case A:return{start:.05};case z:return{start:0,end:.5};default:return{start:0,end:1}}}function X(){this.j=null}X.prototype.add=function(a){var b=this;this.j||(this.j=[]);this.j.push(a);return function(){b.remove(a)}};X.prototype.remove=function(a){if(this.j){var b=this.j;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};X.prototype.removeAll=function(){this.j&&(this.j.length=0)};X.prototype.fire=function(a){if(this.j)for(var b=l(this.j),c=b.next();!c.done;c=b.next())c=c.value,c(a)};X.prototype.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.j)?void 0:a.length)?b:0};function Ka(a){var b=this;this.o=a;this.N=new X;this.S=ia((function(){return La(b)}));this.C=this.D=0;this.B=!0}Ka.prototype.observe=function(a){this.N.add(a);this.S()};function La(a){var b=Q(a.o);b.onScroll((function(){var c=b.getScrollTop();a.C=c;c=a.C-a.D;if(!a.B&&0<c||a.B&&0>c)a.D=a.C;!a.B&&36>=a.C?(Y(a,!0),a.D=a.C):!a.B&&-20>c?(Y(a,!0),a.D=a.C):a.B&&80<c&&(Y(a,!1),a.D=a.C)}))}function Y(a,b){a.B!=b&&(a.B=b,a.N.fire(b))}function Ma(a,b){return Z(b,"overflow","hidden",a)&&Z(b,"position","fixed",a)}function Na(a,b,c){var d=b.replace(/^float\-in\-([^\s]+)$/,"$1");return Z(c,d,"0px",a,"amp-fx="+b)?d:null}function Z(a,b,c,d,e){if(a[b]==c)return!0;e=e?" "+e:"";var f=Oa(d);v().warn("amp-fx","FX element must have `"+b+": "+c+"` ["+f+"]"+e+".");return!1}function Oa(a,b){b=void 0===b?0:b;var c=a.classList,d=a.id,e=a.parentElement;if(d)return"#"+d;d=a.tagName.toLowerCase();0<c.length&&(d+="."+c[0]+(1<c.length?"...":""));if(!e)return d+" (detached)";var f=e.firstElementChild,g=e.lastElementChild;if(a!=f||a!=g)a==f?d+=":first-child":a==g&&(d+=":last-child");return 0<b?d:Oa(e,b+1)+" > "+d}function Pa(a,b,c){if(!P(b,"viewer").isEmbedded()){sa(a,"fx-scroll-dispatch",Ka);var d=P(a,"fx-scroll-dispatch"),e=!0;P(b,"mutator").measureMutateElement(b,(function(){var f=a.win.getComputedStyle(b)||J,g=Na(b,c,f),h=Ma(b,f);g&&h?d.observe((function(k){Qa(b,k,g)})):e=!1}),(function(){e&&qa(b,{"will-change":"transform"})}))}}function Qa(a,b,c){var d=0;P(a,"mutator").measureMutateElement(a,(function(){if(b)d=0;else{var e=a.getBoundingClientRect().height;d="top"==c?-e:e}}),(function(){qa(a,{transition:"transform 300ms ease",transform:"translate(0, "+d+"px)"})}))}function Ra(a,b,c){var d=this;this.win=a.win;this.T=P(b,"position-observer");this.A=Q(b);this.M=P(b,"mutator");this.adjustedViewportHeight=this.viewportHeight=null;this.element=b;this.offset=0;this.R=c;Da[c].userAsserts(b);this.factor=parseFloat(b.getAttribute("data-parallax-factor"));this.marginStart=b.hasAttribute("data-margin-start")?Fa(b.getAttribute("data-margin-start")):Ia(c).start;this.marginEnd=b.hasAttribute("data-margin-end")?Fa(b.getAttribute("data-margin-end")):Ia(c).end;if(b.hasAttribute("data-easing"))var e=b.getAttribute("data-easing");else a:switch(c){case y:e="ease-in";break a;case C:case B:case D:case A:e="ease-out";break a;default:e="ease-in"}this.easing=Ea(e);this.duration=b.hasAttribute("data-duration")?b.getAttribute("data-duration"):Ha(a,c);if(b.hasAttribute("data-fly-in-distance"))a=parseFloat(b.getAttribute("data-fly-in-distance"));else a:switch(c){case A:case D:a=1e3>Q(a).getSize().width?25:33;break a;case B:case C:a=100;break a;default:a=1}this.flyInDistance=a;this.hasRepeat=b.hasAttribute("data-repeat");this.initialTrigger=!1;Sa(this).then((function(f){d.adjustedViewportHeight=f;Ta(d)}));Ua(this)}function Ta(a){a.T.observe(a.element,1,Da[a.R].update.bind(a));a.A.onResize((function(){Ua(a);Sa(a).then((function(b){a.adjustedViewportHeight=b}))}))}function Ua(a){a.M.measureElement((function(){a.viewportHeight=a.A.getHeight()}))}function Sa(a){return a.M.measureElement((function(){for(var b=a.A.getHeight(),c=0,d=a.element;d;d=d.offsetParent)c+=d.offsetTop;return c<b?c:b}))}function Va(a){var b=a.o.getRootNode().querySelectorAll("[amp-fx]");ba(b,(function(c){a.K.includes(c)||da((function(){return Wa(a,c)}))}))}function Wa(a,b){b.hasAttribute("amp-fx");a.K.includes(b);a.o.isVisible();pa(b).forEach((function(c){if(1==G[c].observes)Pa(a.o,b,c);else{var d=a.o;sa(d,"position-observer",R);new Ra(d,b,c);L(b,ra(Ga(c)))}}));a.K.push(b)}AMP.registerServiceForDoc("amp-fx-collection",(function(a){var b=this;this.o=a;this.K=[];Promise.all([a.whenReady(),a.whenFirstVisible()]).then((function(){var c=b.o.getRootNode();Va(b);la(c,(function(){return Va(b)}))}))}))}});//# sourceMappingURL=amp-fx-collection-0.1.js.map