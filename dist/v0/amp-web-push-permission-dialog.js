(function(){"use strict";var f;function g(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}return function(){throw Error("Cannot find global object")}()}var k=g(this);
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */var l=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function m(a,b,c,d,e){return e?e:b?"�":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a}var n=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}var r=self.AMP_CONFIG||{},t=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function v(a){if(self.document&&self.document.head&&(!self.location||!t.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}r.cdnUrl||v("runtime-host");r.geoApiUrl||v("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){var a;if(!(a=w.dev))throw Error("failed to call initLogConstructor");return a}function y(){this.O=100;this.G=this.K=0;this.C=Object.create(null)}y.prototype.has=function(a){return!!this.C[a]};y.prototype.get=function(a){var b=this.C[a];if(b)return b.access=++this.G,b.payload};y.prototype.put=function(a,b){this.has(a)||this.K++;this.C[a]={payload:b,access:this.G};if(!(this.K<=this.O)){a=this.C;var d,c=this.G+1;for(d in a){var e=a[d].access;if(e<c){c=e;var h=d}}void 0!==h&&(delete a[h],this.K--)}};new Set(["c","v","a","ad"]);var z,A;function B(a){z||(z=self.document.createElement("a"),A=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new y));var b=z,c=A;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function C(a){a||(a={debug:!1,windowContext:window});this.B={};this.A={};this.o=a.debug;this.D=this.P=this.R=!1;this.F=this.I=this.J=this.j=this.H=null;this.h=a.windowContext||window}f=C.prototype;f.listen=function(a){var b=this;return new Promise((function(c,d){b.D?d(Error("Already connected.")):b.R?d(Error("Already listening for connections.")):Array.isArray(a)?(b.J=b.T.bind(b,a,c,d),b.h.addEventListener("message",b.J),b.o&&x().fine("amp-web-push","Listening for a connection message...")):d(Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",a))})).then((function(){b.send(C.Topics.CONNECT_HANDSHAKE,null);b.D=!0}))};f.T=function(a,b,c,d){var e=d.data,h=d.origin,H=d.ports;this.o&&x().fine("amp-web-push","Window message for listen() connection received:",e);a:{var p=B(h).origin;for(var u=0;u<a.length;u++)if(B(a[u]).origin===p){p=!0;break a}p=!1}p?e&&e.topic===C.Topics.CONNECT_HANDSHAKE?(x().fine("amp-web-push","Received expected connection handshake message:",e),this.h.removeEventListener("message",this.J),this.j=H[0],this.F=this.M.bind(this),this.j.addEventListener("message",this.F,!1),this.j.start(),b()):x().fine("amp-web-push","Discarding connection message because it did not contain our expected handshake:",e):x().fine("amp-web-push","Discarding connection message from "+h+" because it isn't an allowed origin:",e," (allowed  origins are)",a)};f.connect=function(a,b){var c=this;return new Promise((function(d,e){a||e(Error("Provide a valid Window context to connect to."));b||e(Error("Provide an expected origin for the remote Window or provide the wildcard *."));c.D?e(Error("Already connected.")):c.P?e(Error("Already connecting.")):(c.H=new MessageChannel,c.j=c.H.port1,c.I=c.S.bind(c,c.j,b,d),c.j.addEventListener("message",c.I),c.j.start(),a.postMessage({topic:C.Topics.CONNECT_HANDSHAKE},"*"===b?"*":B(b).origin,[c.H.port2]),x().fine("amp-web-push","Opening channel to "+b+"..."))}))};f.S=function(a,b,c){this.D=!0;this.o&&x().fine("amp-web-push","Messenger channel to "+b+" established.");a.removeEventListener("message",this.I);this.F=this.M.bind(this);a.addEventListener("message",this.F,!1);c()};f.M=function(a){a=a.data;if(this.B[a.id]&&a.isReply){var b=this.B[a.id];delete this.B[a.id];var c=b.promiseResolver;b.message=a.data;this.o&&x().fine("amp-web-push","Received reply for topic '%s': %s",a.topic,a.data);c([a.data,this.N.bind(this,a.id,b.topic)])}else{var d=this.A[a.topic];if(d){this.o&&x().fine("amp-web-push","Received new message for topic '"+a.topic+"': "+a.data);for(var e=0;e<d.length;e++)(0,d[e])(a.data,this.N.bind(this,a.id,a.topic))}}};f.on=function(a,b){this.A[a]?this.A[a].push(b):this.A[a]=[b]};f.off=function(a,b){if(b){var c=this.A[a].indexOf(b);-1!==c&&this.A[a].splice(c,1)}else this.A[a]&&delete this.A[a]};f.N=function(a,b,c){var d=this,e={id:a,topic:b,data:c,isReply:!0};this.j.postMessage(e);return new Promise((function(h){d.B[e.id]={message:c,topic:b,promiseResolver:h}}))};f.send=function(a,b){var c=this,d={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:a,data:b};this.o&&x().fine("amp-web-push","Sending %s: %s",a,b);this.j.postMessage(d);return new Promise((function(e){c.B[d.id]={message:b,topic:a,promiseResolver:e}}))};k.Object.defineProperties(C,{Topics:{configurable:!0,enumerable:!0,get:function(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}}});function D(){var a={debug:!1};this.o=a&&a.debug;this.h=a.windowContext||window;this.L=new C({debug:this.o,windowContext:this.h})}f=D.prototype;f.isCurrentDialogPopup=function(){return!!this.h.opener&&this.h.opener!==this.h};f.requestNotificationPermission=function(){var a=this;return new Promise((function(b,c){try{a.h.Notification.requestPermission((function(d){return b(d)}))}catch(d){c(d)}}))};f.run=function(){E(this);F(this);for(var a=this.h.document.querySelectorAll("[permission]"),b=0;b<a.length;b++)G(a[b],!1);a=this.h.document;b=a.querySelector;var c=String(this.h.Notification.permission).replace(l,m);(a=b.call(a,"[permission="+c+"]"))&&G(a,!0);a=this.h.document.querySelector("#preload");b=this.h.document.querySelector("#postload");a&&b&&(G(a,!1),G(b,!0));"denied"!==this.h.Notification.permission?I(this):J(this)};function E(a){var b=a.h.document.querySelector("#close");b&&b.addEventListener("click",(function(){a.closeDialog()}))}f.closeDialog=function(){if(this.isCurrentDialogPopup())this.h.close();else{var a=(this.h.fakeLocation||this.h.location).search,b=Object.create(null);if(a)for(var c;c=n.exec(a);){var d=q(c[1],c[1]);c=c[2]?q(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}if(!b["return"])throw Error("Missing required parameter.");var e=q(b["return"]);this.redirectToUrl(e)}};function J(a){navigator.permissions.query({name:"notifications"}).then((function(b){b.onchange=function(){F(a);switch(a.h.Notification.permission){case"default":case"granted":I(a)}}}))}function F(a){a.h.localStorage.setItem("amp-web-push-notification-permission",a.h.Notification.permission)}function G(a,b){a&&(b?a.classList.remove("invisible"):a.classList.add("invisible"))}function I(a){a.requestNotificationPermission().then((function(b){F(a);if(a.isCurrentDialogPopup())return a.L.connect(opener,"*"),a.L.send(C.Topics.NOTIFICATION_PERMISSION_STATE,b).then((function(c){(c=c[0])&&c.closeFrame&&a.closeDialog()}));a.closeDialog()}))}f.redirectToUrl=function(a){var b=B(a);!b||"http:"!==b.protocol&&"https:"!==b.protocol||(this.h.location.href=a)};window._ampWebPushPermissionDialog=new D;window._ampWebPushPermissionDialog.run()})();//# sourceMappingURL=amp-web-push-permission-dialog.js.map