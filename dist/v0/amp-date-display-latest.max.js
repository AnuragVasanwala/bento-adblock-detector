(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-date-display",ev:"0.1",l:true,f:(function(AMP,_){
(function() {
  // src/core/constants/amp-events.js
  var AmpEvents = {
    DOM_UPDATE: "amp:dom-update",
    FORM_DIRTINESS_CHANGE: "amp:form-dirtiness-change",
    FORM_VALUE_CHANGE: "amp:form-value-change",
    VISIBILITY_CHANGE: "amp:visibilitychange",
    ATTACHED: "amp:attached",
    STUBBED: "amp:stubbed",
    LOAD_START: "amp:load-start",
    LOAD_END: "amp:load-end",
    ERROR: "amp:error",
    SIZE_CHANGED: "amp:size-changed",
    UNLOAD: "amp:unload"
  };

  // src/core/mode/prod.js
  function isProd() {
    return false;
  }

  // src/core/mode/minified.js
  function isMinified() {
    return false;
  }

  // src/core/mode/esm.js
  function isEsm() {
    var _self$__AMP_MODE$esm, _self, _self$__AMP_MODE;
    if (isProd()) {
      return false;
    }
    return (_self$__AMP_MODE$esm = (_self = self) == null ? void 0 : (_self$__AMP_MODE = _self.__AMP_MODE) == null ? void 0 : _self$__AMP_MODE.esm) != null ? _self$__AMP_MODE$esm : false;
  }

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;

  // src/core/types/array.js
  var isArray = Array.isArray;

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

  // src/core/types/string/index.js
  function toUpperCase(_match, character) {
    return character.toUpperCase();
  }
  function dashToCamelCase(name) {
    return name.replace(/-([a-z])/g, toUpperCase);
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";

  // src/core/dom/index.js
  function waitForChild(parent, checkFunc, callback) {
    if (checkFunc(parent)) {
      callback();
      return;
    }
    var win = getWin(parent);
    if (isEsm() || win.MutationObserver) {
      var observer = new win.MutationObserver(function() {
        if (checkFunc(parent)) {
          observer.disconnect();
          callback();
        }
      });
      observer.observe(parent, {
        childList: true
      });
    } else {
      var interval = win.setInterval(function() {
        if (checkFunc(parent)) {
          win.clearInterval(interval);
          callback();
        }
      }, 5);
    }
  }
  function waitForBodyOpen(doc, callback) {
    waitForChild(doc.documentElement, function() {
      return !!doc.body;
    }, callback);
  }
  function waitForBodyOpenPromise(doc) {
    return new Promise(function(resolve) {
      return waitForBodyOpen(doc, resolve);
    });
  }
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // src/core/dom/layout/index.js
  var Layout = {
    NODISPLAY: "nodisplay",
    FIXED: "fixed",
    FIXED_HEIGHT: "fixed-height",
    RESPONSIVE: "responsive",
    CONTAINER: "container",
    FILL: "fill",
    FLEX_ITEM: "flex-item",
    FLUID: "fluid",
    INTRINSIC: "intrinsic"
  };
  function isLayoutSizeDefined(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
  }

  // src/config.js
  var env = self.AMP_CONFIG || {};
  var thirdPartyFrameRegex = (typeof env["thirdPartyFrameRegex"] == "string" ? new RegExp(env["thirdPartyFrameRegex"]) : env["thirdPartyFrameRegex"]) || /^d-\d+\.ampproject\.net$/;
  var cdnProxyRegex = (typeof env["cdnProxyRegex"] == "string" ? new RegExp(env["cdnProxyRegex"]) : env["cdnProxyRegex"]) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
  function getMetaUrl(name) {
    if (!self.document || !self.document.head) {
      return null;
    }
    if (self.location && cdnProxyRegex.test(self.location.origin)) {
      return null;
    }
    var metaEl = self.document.head.querySelector('meta[name="' + name + '"]');
    return metaEl && metaEl.getAttribute("content") || null;
  }
  var urls = {
    thirdParty: env["thirdPartyUrl"] || "https://3p.ampproject.net",
    thirdPartyFrameHost: env["thirdPartyFrameHost"] || "ampproject.net",
    thirdPartyFrameRegex: thirdPartyFrameRegex,
    cdn: env["cdnUrl"] || getMetaUrl("runtime-host") || "https://cdn.ampproject.org",
    cdnProxyRegex: cdnProxyRegex,
    localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
    errorReporting: env["errorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
    betaErrorReporting: env["betaErrorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
    localDev: env["localDev"] || false,
    trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
    geoApi: env["geoApiUrl"] || getMetaUrl("amp-geo-api")
  };

  // src/service/extension-script.js
  function parseExtensionUrl(scriptUrl) {
    if (!scriptUrl) {
      return null;
    }
    var matches2 = scriptUrl.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
    var extensionId = matches2 ? matches2[2] : void 0;
    var extensionVersion = matches2 ? matches2[3] : void 0;
    if (!extensionId || !extensionVersion) {
      return null;
    }
    return {
      extensionId: extensionId,
      extensionVersion: extensionVersion
    };
  }
  function extensionScriptsInNode(head) {
    if (!head) {
      return [];
    }
    var list = head.querySelectorAll("script[custom-element],script[custom-template]");
    var scripts = [];
    for (var i = 0; i < list.length; i++) {
      var script = list[i];
      var extensionId = script.getAttribute("custom-element") || script.getAttribute("custom-template");
      var urlParts = parseExtensionUrl(script.src);
      if (extensionId && urlParts) {
        scripts.push({
          script: script,
          extensionId: extensionId,
          extensionVersion: urlParts.extensionVersion
        });
      }
    }
    return scripts;
  }
  function extensionScriptInNode(win, id, version2) {
    return extensionScriptsInNode(win.document.head).some(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
      return id == extensionId && version2 == extensionVersion;
    });
  }

  // src/utils/log.js
  var LogLevel = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;
  var logConstructor = null;
  function callLogConstructor(levelFunc, opt_suffix) {
    if (!logConstructor) {
      throw new Error("failed to call initLogConstructor");
    }
    return new logConstructor(self, levelFunc, opt_suffix);
  }
  function user(opt_element) {
    if (!logs.user) {
      logs.user = getUserLogger(USER_ERROR_SENTINEL);
    }
    if (isFromEmbed(logs.user.win, opt_element)) {
      return logs.userForEmbed || (logs.userForEmbed = getUserLogger(USER_ERROR_EMBED_SENTINEL));
    }
    return logs.user;
  }
  function getUserLogger(suffix) {
    return callLogConstructor(function(logNum, development) {
      return development || logNum >= 1 ? LogLevel.FINE : LogLevel.WARN;
    }, suffix);
  }
  function dev() {
    return logs.dev || (logs.dev = callLogConstructor(function(logNum) {
      return logNum >= 3 ? LogLevel.FINE : logNum >= 2 ? LogLevel.INFO : LogLevel.OFF;
    }));
  }
  function isFromEmbed(win, opt_element) {
    return opt_element && opt_element.ownerDocument.defaultView != win;
  }
  function devAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTrueish;
    }
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
    return dev().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/data-structures/promise.js
  var Deferred = function Deferred2() {
    var _this = this;
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };

  // src/service-helpers.js
  function getService(win, id) {
    win = getTopWindow(win);
    return getServiceInternal(win, id);
  }
  function getServiceInEmbedWin(win, id) {
    return getServiceInternal(win, id);
  }
  function getServicePromise(win, id) {
    return getServicePromiseInternal(win, id);
  }
  function getExistingServiceOrNull(win, id) {
    win = getTopWindow(win);
    if (isServiceRegistered(win, id)) {
      return getServiceInternal(win, id);
    } else {
      return null;
    }
  }
  function getServicePromiseOrNull(win, id) {
    return getServicePromiseOrNullInternal(win, id);
  }
  function getServiceForDoc(elementOrAmpDoc, id) {
    var ampdoc = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc);
    return getServiceInternal(holder, id);
  }
  function getServiceForDocOrNull(elementOrAmpDoc, id) {
    var ampdoc = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc);
    if (isServiceRegistered(holder, id)) {
      return getServiceInternal(holder, id);
    } else {
      return null;
    }
  }
  function getServicePromiseForDoc(elementOrAmpDoc, id) {
    return getServicePromiseInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getServicePromiseOrNullForDoc(elementOrAmpDoc, id) {
    return getServicePromiseOrNullInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
  }
  function getAmpdoc(nodeOrDoc) {
    if (nodeOrDoc.nodeType) {
      var win = getWin(nodeOrDoc);
      return getAmpdocService(win).getAmpDoc(nodeOrDoc);
    }
    return nodeOrDoc;
  }
  function getAmpdocServiceHolder(nodeOrDoc) {
    var ampdoc = getAmpdoc(nodeOrDoc);
    return ampdoc.isSingleDoc() ? ampdoc.win : ampdoc;
  }
  function getAmpdocService(win) {
    return getService(win, "ampdoc");
  }
  function getServiceInternal(holder, id) {
    devAssert2(isServiceRegistered(holder, id), "Expected service " + id + " to be registered");
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      devAssert2(s.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert2(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      devAssert2(s.obj, "Service " + id + " constructed to null.");
      s.context = null;
      if (s.resolve) {
        s.resolve(s.obj);
      }
    }
    return s.obj;
  }
  function getServicePromiseInternal(holder, id) {
    var cached = getServicePromiseOrNullInternal(holder, id);
    if (cached) {
      return cached;
    }
    var services = getServices(holder);
    services[id] = emptyServiceHolderWithPromise();
    return services[id].promise;
  }
  function getServicePromiseOrNullInternal(holder, id) {
    var services = getServices(holder);
    var s = services[id];
    if (s) {
      if (s.promise) {
        return s.promise;
      } else {
        getServiceInternal(holder, id);
        return s.promise = Promise.resolve(s.obj);
      }
    }
    return null;
  }
  function getServices(holder) {
    var services = holder.__AMP_SERVICES;
    if (!services) {
      services = holder.__AMP_SERVICES = {};
    }
    return services;
  }
  function isServiceRegistered(holder, id) {
    var service = holder.__AMP_SERVICES && holder.__AMP_SERVICES[id];
    return !!(service && service.ctor);
  }
  function emptyServiceHolderWithPromise() {
    var deferred = new Deferred();
    var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
    promise.catch(function() {
    });
    return {
      obj: null,
      promise: promise,
      resolve: resolve,
      reject: reject,
      context: null,
      ctor: null
    };
  }

  // src/element-service.js
  function getElementServiceIfAvailable(win, id, extension, version2, opt_element) {
    var s = getServicePromiseOrNull(win, id);
    if (s) {
      return s;
    }
    return getElementServicePromiseOrNull(win, id, extension, version2, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service) {
      return assertService(service, id, extension);
    });
  }
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s = getServicePromiseOrNullForDoc(element, id);
    if (s) {
      return s;
    }
    var ampdoc = getAmpdoc(element);
    return ampdoc.whenExtensionsKnown().then(function() {
      var version2 = ampdoc.getExtensionVersion(extension);
      if (!version2) {
        return null;
      }
      var extensions = getService(ampdoc.win, "extensions");
      return extensions.waitForExtension(extension, version2);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNullForDoc(element, id);
      }
      return getServicePromiseForDoc(element, id);
    });
  }
  function getElementServiceIfAvailableForDocInEmbedScope(element, id, extension) {
    var s = getServiceForDocOrNull(element, id);
    if (s) {
      return Promise.resolve(s);
    }
    return getElementServiceIfAvailableForDoc(element, id, extension);
  }
  function assertService(service, id, extension) {
    return userAssert2(service, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", id, extension, extension, extension);
  }
  function getElementServicePromiseOrNull(win, id, extension, version2, opt_element) {
    return waitForBodyOpenPromise(win.document).then(function() {
      var extensions = getService(win, "extensions");
      if (!extensionScriptInNode(extensions.win, extension, version2)) {
        return null;
      }
      return extensions.waitForExtension(extension, version2);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNull(win, id);
      }
      return getServicePromise(win, id);
    });
  }

  // src/service/index.js
  var Services = /* @__PURE__ */ function() {
    function Services2() {
    }
    Services2.accessServiceForDoc = function accessServiceForDoc(element) {
      return getElementServiceForDoc(element, "access", "amp-access");
    };
    Services2.accessServiceForDocOrNull = function accessServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "access", "amp-access");
    };
    Services2.subscriptionsServiceForDoc = function subscriptionsServiceForDoc(element) {
      return getElementServiceForDoc(element, "subscriptions", "amp-subscriptions");
    };
    Services2.subscriptionsServiceForDocOrNull = function subscriptionsServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "subscriptions", "amp-subscriptions");
    };
    Services2.actionServiceForDoc = function actionServiceForDoc(element) {
      return getServiceForDocOrNull(element, "action");
    };
    Services2.standardActionsForDoc = function standardActionsForDoc(element) {
      return getServiceForDocOrNull(element, "standard-actions");
    };
    Services2.activityForDoc = function activityForDoc(element) {
      return getElementServiceForDoc(element, "activity", "amp-analytics");
    };
    Services2.ampdocServiceFor = function ampdocServiceFor(window) {
      return getService(window, "ampdoc");
    };
    Services2.ampdoc = function ampdoc(nodeOrAmpDoc) {
      return getAmpdoc(nodeOrAmpDoc);
    };
    Services2.analyticsForDoc = function analyticsForDoc(element, loadAnalytics) {
      if (loadAnalytics === void 0) {
        loadAnalytics = false;
      }
      if (loadAnalytics) {
        var ampdoc = getAmpdoc(element);
        Services2.extensionsFor(ampdoc.win).installExtensionForDoc(ampdoc, "amp-analytics");
      }
      return getElementServiceForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
    };
    Services2.analyticsForDocOrNull = function analyticsForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
    };
    Services2.batchedXhrFor = function batchedXhrFor(window) {
      return getService(window, "batched-xhr");
    };
    Services2.bindForDocOrNull = function bindForDocOrNull(element) {
      return getElementServiceIfAvailableForDocInEmbedScope(element, "bind", "amp-bind");
    };
    Services2.scriptForDocOrNull = function scriptForDocOrNull(element) {
      return getElementServiceIfAvailableForDocInEmbedScope(element, "amp-script", "amp-script");
    };
    Services2.cidForDoc = function cidForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "cid");
    };
    Services2.navigationForDoc = function navigationForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "navigation");
    };
    Services2.loaderServiceForDoc = function loaderServiceForDoc(element) {
      return getElementServiceForDoc(element, "loader", "amp-loader");
    };
    Services2.standaloneServiceForDoc = function standaloneServiceForDoc(element) {
      return getElementServiceForDoc(element, "standalone", "amp-standalone");
    };
    Services2.cryptoFor = function cryptoFor(window) {
      return getService(window, "crypto");
    };
    Services2.documentInfoForDoc = function documentInfoForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "documentInfo").get();
    };
    Services2.extensionsFor = function extensionsFor(window) {
      return getService(window, "extensions");
    };
    Services2.formSubmitForDoc = function formSubmitForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "form-submit-service");
    };
    Services2.hiddenObserverForDoc = function hiddenObserverForDoc(element) {
      return getServiceForDocOrNull(element, "hidden-observer");
    };
    Services2.historyForDoc = function historyForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "history");
    };
    Services2.inputFor = function inputFor(win) {
      return getService(win, "input");
    };
    Services2.inputmaskServiceForDocOrNull = function inputmaskServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "inputmask", "amp-inputmask");
    };
    Services2.loadingIndicatorOrNull = function loadingIndicatorOrNull(elementOrAmpDoc) {
      return getServiceForDocOrNull(elementOrAmpDoc, "loadingIndicator");
    };
    Services2.nextPageServiceForDoc = function nextPageServiceForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "next-page");
    };
    Services2.mutatorForDoc = function mutatorForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "mutator");
    };
    Services2.ownersForDoc = function ownersForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "owners");
    };
    Services2.performanceFor = function performanceFor(window) {
      return getService(window, "performance");
    };
    Services2.performanceForOrNull = function performanceForOrNull(window) {
      return getExistingServiceOrNull(window, "performance");
    };
    Services2.platformFor = function platformFor(window) {
      return getService(window, "platform");
    };
    Services2.positionObserverForDoc = function positionObserverForDoc(element) {
      return getServiceForDoc(element, "position-observer");
    };
    Services2.preconnectFor = function preconnectFor(window) {
      return getService(window, "preconnect");
    };
    Services2.resourcesForDoc = function resourcesForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "resources");
    };
    Services2.resourcesPromiseForDoc = function resourcesPromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "resources");
    };
    Services2.storyVariableServiceForOrNull = function storyVariableServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-variable", "amp-story", "1.0");
    };
    Services2.storyVariableService = function storyVariableService(win) {
      return getExistingServiceOrNull(win, "story-variable");
    };
    Services2.storyStoreServiceForOrNull = function storyStoreServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-store", "amp-story", "1.0");
    };
    Services2.storyStoreService = function storyStoreService(win) {
      return getExistingServiceOrNull(win, "story-store");
    };
    Services2.storyMediaQueryService = function storyMediaQueryService(win) {
      return getExistingServiceOrNull(win, "story-media-query");
    };
    Services2.storyRequestServiceForOrNull = function storyRequestServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-request", "amp-story", "1.0");
    };
    Services2.storyRequestService = function storyRequestService(win) {
      return getExistingServiceOrNull(win, "story-request");
    };
    Services2.mediaPerformanceMetricsService = function mediaPerformanceMetricsService(win) {
      return getExistingServiceOrNull(win, "media-performance-metrics");
    };
    Services2.localizationServiceForOrNull = function localizationServiceForOrNull(el) {
      return getServicePromiseForDoc(el, "localization");
    };
    Services2.localizationForDoc = function localizationForDoc(element) {
      return getServiceForDocOrNull(element, "localization");
    };
    Services2.storyAnalyticsServiceForOrNull = function storyAnalyticsServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-analytics", "amp-story", "1.0", true);
    };
    Services2.storyAnalyticsService = function storyAnalyticsService(win) {
      return getExistingServiceOrNull(win, "story-analytics");
    };
    Services2.webAnimationServiceFor = function webAnimationServiceFor(element) {
      return getElementServiceForDoc(element, "web-animation", "amp-animation");
    };
    Services2.realTimeConfigForDoc = function realTimeConfigForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "real-time-config");
    };
    Services2.storageForDoc = function storageForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "storage");
    };
    Services2.storageForTopLevelDoc = function storageForTopLevelDoc(elementOrAmpDoc) {
      var thisAmpdoc = Services2.ampdoc(elementOrAmpDoc);
      var ampdocService = Services2.ampdocServiceFor(thisAmpdoc.win);
      var topAmpdoc = ampdocService.isSingleDoc() ? ampdocService.getSingleDoc() : null;
      var ampdoc = topAmpdoc && topAmpdoc.win == thisAmpdoc.win ? topAmpdoc : thisAmpdoc;
      return getServicePromiseForDoc(ampdoc, "storage");
    };
    Services2.templatesForDoc = function templatesForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "templates");
    };
    Services2.timerFor = function timerFor(window) {
      return getServiceInEmbedWin(window, "timer");
    };
    Services2.urlReplacementsForDoc = function urlReplacementsForDoc(element) {
      return getServiceForDocOrNull(element, "url-replace");
    };
    Services2.userNotificationManagerForDoc = function userNotificationManagerForDoc(element) {
      return getElementServiceForDoc(element, "userNotificationManager", "amp-user-notification");
    };
    Services2.consentPolicyServiceForDocOrNull = function consentPolicyServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "consentPolicyManager", "amp-consent");
    };
    Services2.geoForDocOrNull = function geoForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "geo", "amp-geo", true);
    };
    Services2.urlForDoc = function urlForDoc(element) {
      return getServiceForDocOrNull(element, "url");
    };
    Services2.variantsForDocOrNull = function variantsForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "variant", "amp-experiment", true);
    };
    Services2.videoManagerForDoc = function videoManagerForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "video-manager");
    };
    Services2.viewerForDoc = function viewerForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "viewer");
    };
    Services2.viewerPromiseForDoc = function viewerPromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "viewer");
    };
    Services2.vsyncFor = function vsyncFor(window) {
      return getService(window, "vsync");
    };
    Services2.viewportForDoc = function viewportForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "viewport");
    };
    Services2.xhrFor = function xhrFor(window) {
      return getService(window, "xhr");
    };
    Services2.cacheUrlServicePromiseForDoc = function cacheUrlServicePromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "cache-url");
    };
    return Services2;
  }();

  // src/utils/event-helper.js
  function createCustomEvent(win, type, detail, opt_eventInit) {
    var eventInit = {
      detail: detail
    };
    Object.assign(eventInit, opt_eventInit);
    if (isEsm() || typeof win.CustomEvent == "function") {
      return new win.CustomEvent(type, eventInit);
    } else {
      var e = win.document.createEvent("CustomEvent");
      e.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
      return e;
    }
  }

  // extensions/amp-date-display/format.js
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function getTimeZoneName(date, locale, options, format) {
    var _Intl;
    if (format === void 0) {
      format = "long";
    }
    if (!((_Intl = Intl) != null && _Intl.DateTimeFormat)) {
      return "";
    }
    var formatter = new Intl.DateTimeFormat(locale, {
      timeZone: options == null ? void 0 : options.timeZone,
      timeZoneName: format
    });
    var parts = (formatter.formatToParts == null ? void 0 : formatter.formatToParts(date)) || [];
    for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      if (part.type === "timeZoneName") {
        return part.value;
      }
    }
    return "";
  }

  // extensions/amp-date-display/0.1/amp-date-display.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG = "amp-date-display";
  var DEFAULT_LOCALE = "en";
  var DEFAULT_OFFSET_SECONDS = 0;
  var DEFAULT_DATETIME_OPTIONS = {
    "year": "numeric",
    "month": "short",
    "day": "numeric",
    "hour": "numeric",
    "minute": "numeric"
  };
  var AmpDateDisplay = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpDateDisplay2, _AMP$BaseElement);
    var _super = _createSuper(AmpDateDisplay2);
    function AmpDateDisplay2(element) {
      var _this;
      _this = _super.call(this, element);
      _this.boundRendered_ = _this.rendered_.bind(_assertThisInitialized(_this));
      _this.datetime_ = "";
      _this.timestampSeconds_ = 0;
      _this.timestampMiliseconds_ = 0;
      _this.displayIn_ = "";
      _this.offsetSeconds_ = 0;
      _this.locale_ = "";
      _this.localeOptions_ = null;
      _this.templates_ = null;
      _this.container_ = null;
      return _this;
    }
    var _proto = AmpDateDisplay2.prototype;
    _proto.buildCallback = function buildCallback() {
      this.templates_ = Services.templatesForDoc(this.element);
      this.container_ = this.element.ownerDocument.createElement("div");
      this.element.appendChild(devAssert2(this.container_));
      this.datetime_ = this.element.getAttribute("datetime") || "";
      this.timestampSeconds_ = Number(this.element.getAttribute("timestamp-seconds"));
      this.timestampMiliseconds_ = Number(this.element.getAttribute("timestamp-ms"));
      this.displayIn_ = this.element.getAttribute("display-in") || "";
      this.offsetSeconds_ = Number(this.element.getAttribute("offset-seconds")) || DEFAULT_OFFSET_SECONDS;
      this.locale_ = this.element.getAttribute("locale") || DEFAULT_LOCALE;
      this.localeOptions_ = this.parseLocaleOptionsAttrs_(this.element, "data-options-");
      var data = this.getDataForTemplate_();
      this.templates_.findAndRenderTemplate(this.element, data).then(this.boundRendered_);
    };
    _proto.isLayoutSupported = function isLayoutSupported(layout) {
      return isLayoutSizeDefined(layout);
    };
    _proto.getDataForTemplate_ = function getDataForTemplate_() {
      var Date = this.win.Date;
      var epoch = this.getEpoch_();
      var offset = this.offsetSeconds_ * 1e3;
      var date = new Date(epoch + offset);
      var inUTC = this.displayIn_.toLowerCase() === "utc";
      var basicData = inUTC ? this.getVariablesInUTC_(date, this.locale_, this.localeOptions_) : this.getVariablesInLocal_(date, this.locale_, this.localeOptions_);
      return this.enhanceBasicVariables_(basicData);
    };
    _proto.getEpoch_ = function getEpoch_() {
      var Date = this.win.Date;
      var epoch;
      if (this.datetime_.toLowerCase() === "now") {
        epoch = Date.now();
      } else if (this.datetime_) {
        epoch = Date.parse(this.datetime_);
        userAssert2(!isNaN(epoch), "Invalid date: %s", this.datetime_);
      } else if (this.timestampMiliseconds_) {
        epoch = this.timestampMiliseconds_;
      } else if (this.timestampSeconds_) {
        epoch = this.timestampSeconds_ * 1e3;
      }
      userAssert2(epoch !== void 0, "One of datetime, timestamp-ms, or timestamp-seconds is required");
      return epoch;
    };
    _proto.matchesAttrPrefix_ = function matchesAttrPrefix_(attributeName, attributePrefix) {
      return attributeName !== null && attributePrefix !== void 0 && attributeName.startsWith(attributePrefix) && attributeName !== attributePrefix;
    };
    _proto.parseLocaleOptionsAttrs_ = function parseLocaleOptionsAttrs_(element, attrPrefix) {
      var currObj = {};
      var objContains = false;
      var attrs = element.attributes;
      for (var i = 0; i < attrs.length; i++) {
        var attrib = attrs[i];
        if (this.matchesAttrPrefix_(attrib.name, attrPrefix)) {
          currObj[dashToCamelCase(attrib.name.slice(attrPrefix.length))] = attrib.value;
          objContains = true;
        }
      }
      if (objContains) {
        return currObj;
      }
    };
    _proto.getLocaleString_ = function getLocaleString_(date, locale, localeOptions) {
      try {
        return date.toLocaleString(locale, localeOptions);
      } catch (e) {
        user().error(TAG, "localeOptions", e);
      }
    };
    _proto.getVariablesInLocal_ = function getVariablesInLocal_(date, locale, localeOptions) {
      if (localeOptions === void 0) {
        localeOptions = DEFAULT_DATETIME_OPTIONS;
      }
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        monthName: date.toLocaleDateString(locale, {
          month: "long"
        }),
        monthNameShort: date.toLocaleDateString(locale, {
          month: "short"
        }),
        day: date.getDate(),
        dayName: date.toLocaleDateString(locale, {
          weekday: "long"
        }),
        dayNameShort: date.toLocaleDateString(locale, {
          weekday: "short"
        }),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        iso: date.toISOString(),
        localeString: this.getLocaleString_(date, locale, localeOptions),
        timeZoneName: getTimeZoneName(date, locale, localeOptions),
        timeZoneNameShort: getTimeZoneName(date, locale, localeOptions, "short")
      };
    };
    _proto.getVariablesInUTC_ = function getVariablesInUTC_(date, locale, localeOptions) {
      if (localeOptions === void 0) {
        localeOptions = DEFAULT_DATETIME_OPTIONS;
      }
      var localeOptionsInUTC = _extends({}, localeOptions, {
        timeZone: "UTC"
      });
      return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        monthName: date.toLocaleDateString(locale, {
          month: "long",
          timeZone: "UTC"
        }),
        monthNameShort: date.toLocaleDateString(locale, {
          month: "short",
          timeZone: "UTC"
        }),
        day: date.getUTCDate(),
        dayName: date.toLocaleDateString(locale, {
          weekday: "long",
          timeZone: "UTC"
        }),
        dayNameShort: date.toLocaleDateString(locale, {
          weekday: "short",
          timeZone: "UTC"
        }),
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
        iso: date.toISOString(),
        localeString: this.getLocaleString_(date, locale, localeOptionsInUTC),
        timeZoneName: getTimeZoneName(date, locale, localeOptionsInUTC),
        timeZoneNameShort: getTimeZoneName(date, locale, localeOptionsInUTC, "short")
      };
    };
    _proto.enhanceBasicVariables_ = function enhanceBasicVariables_(data) {
      var hour12 = data.hour % 12 || 12;
      return _extends({}, data, {
        yearTwoDigit: this.padStart_(data.year % 100),
        monthTwoDigit: this.padStart_(data.month),
        dayTwoDigit: this.padStart_(data.day),
        hourTwoDigit: this.padStart_(data.hour),
        hour12: hour12,
        hour12TwoDigit: this.padStart_(hour12),
        minuteTwoDigit: this.padStart_(data.minute),
        secondTwoDigit: this.padStart_(data.second),
        dayPeriod: data.hour < 12 ? "am" : "pm"
      });
    };
    _proto.padStart_ = function padStart_(input) {
      if (input > 9) {
        return input.toString();
      }
      return "0" + input;
    };
    _proto.rendered_ = function rendered_(element) {
      var _this2 = this;
      this.mutateElement(function() {
        removeChildren(dev().assertElement(_this2.container_));
        _this2.container_.appendChild(element);
        var event = createCustomEvent(_this2.win, AmpEvents.DOM_UPDATE, null, {
          bubbles: true
        });
        _this2.element.dispatchEvent(event);
      });
    };
    return AmpDateDisplay2;
  }(AMP.BaseElement);
  AMP.registerElement(TAG, AmpDateDisplay);
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-date-display-0.1.max.js.map
