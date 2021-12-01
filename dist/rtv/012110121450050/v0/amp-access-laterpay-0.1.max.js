(self.AMP=self.AMP||[]).push({m:0,v:"2110121450047",n:"amp-access-laterpay",ev:"0.1",l:false,f:(function(AMP,_){
(function() {
  // src/core/mode/prod.js
  function isProd() {
    return false;
  }

  // src/core/mode/test.js
  function isTest(opt_win) {
    var _win$AMP_CONFIG;
    if (isProd()) {
      return false;
    }
    var win = opt_win || self;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.test || win.__AMP_TEST || win["__karma__"]);
  }

  // src/core/mode/local-dev.js
  function isLocalDev(opt_win) {
    var _self$AMP_CONFIG;
    if (isProd()) {
      return false;
    }
    return !!((_self$AMP_CONFIG = self.AMP_CONFIG) != null && _self$AMP_CONFIG.localDev) || isTest(opt_win);
  }

  // src/core/mode/minified.js
  function isMinified() {
    return false;
  }

  // src/core/mode/version.js
  function version() {
    return "2110121450047";
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
  function map(opt_initial) {
    var obj = Object.create(null);
    if (opt_initial) {
      Object.assign(obj, opt_initial);
    }
    return obj;
  }
  function dict(opt_initial) {
    return opt_initial || {};
  }

  // src/core/types/array.js
  var isArray = Array.isArray;

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
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
  function insertAfterOrAtStart(root, element, after) {
    if (after === void 0) {
      after = null;
    }
    if (!after) {
      insertAtStart(root, element);
      return;
    }
    var before = after.nextSibling;
    root.insertBefore(element, before);
  }
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
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

  // src/core/types/string/url.js
  var QUERY_STRING_REGEX = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
  function tryDecodeUriComponent(component, fallback) {
    if (fallback === void 0) {
      fallback = "";
    }
    try {
      return decodeURIComponent(component);
    } catch (e) {
      return fallback;
    }
  }
  function parseQueryString(queryString) {
    var params = map();
    if (!queryString) {
      return params;
    }
    var match;
    while (match = QUERY_STRING_REGEX.exec(queryString)) {
      var name = tryDecodeUriComponent(match[1], match[1]);
      var value = match[2] ? tryDecodeUriComponent(match[2].replace(/\+/g, " "), match[2]) : "";
      params[name] = value;
    }
    return params;
  }
  function getHashParams(opt_win) {
    var _ref = opt_win || self, location = _ref.location;
    return parseQueryString(location["originalHash"] || location.hash);
  }

  // src/mode.js
  var rtvVersion = "";
  function getMode(opt_win) {
    var win = opt_win || self;
    if (win.__AMP_MODE) {
      return win.__AMP_MODE;
    }
    return win.__AMP_MODE = getMode_(win);
  }
  function getMode_(win) {
    var hashParams = getHashParams(win);
    return {
      localDev: isLocalDev(win),
      development: isModeDevelopment(win, hashParams),
      esm: isEsm(),
      test: isTest(win),
      rtvVersion: getRtvVersion(win)
    };
  }
  function getRtvVersion(win) {
    if (!rtvVersion || isTest(win)) {
      var _win$AMP_CONFIG;
      rtvVersion = ((_win$AMP_CONFIG = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG.v) || "01" + version();
    }
    return rtvVersion;
  }
  function isModeDevelopment(win, opt_hashParams) {
    var devModes = ["1", "actions", "amp", "amp4ads", "amp4email"];
    var devParam = opt_hashParams || getHashParams(win);
    return devModes.includes(devParam["development"]) || !!win.AMP_DEV_MODE;
  }

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
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/data-structures/promise.js
  var resolved;
  function resolvedPromise() {
    if (resolved) {
      return resolved;
    }
    resolved = Promise.resolve(void 0);
    return resolved;
  }
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
    return userAssert(service, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", id, extension, extension, extension);
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

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
    var localElement = element;
    var localListener = listener;
    var wrapped = function wrapped2(event) {
      try {
        return localListener(event);
      } catch (e) {
        self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(e);
        throw e;
      }
    };
    var optsSupported2 = detectEvtListenerOptsSupport();
    var capture = !!(opt_evtListenerOpts != null && opt_evtListenerOpts.capture);
    localElement.addEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
    return function() {
      var _localElement;
      (_localElement = localElement) == null ? void 0 : _localElement.removeEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
      localListener = null;
      localElement = null;
      wrapped = null;
    };
  }
  function detectEvtListenerOptsSupport() {
    if (optsSupported !== void 0) {
      return optsSupported;
    }
    optsSupported = false;
    try {
      var options = {
        get capture() {
          optsSupported = true;
        }
      };
      self.addEventListener("test-options", null, options);
      self.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return optsSupported;
  }

  // src/utils/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }

  // build/amp-access-laterpay-0.1.css.js
  var CSS2 = ".amp-access-laterpay{position:relative}@media (min-width:420px){.amp-access-laterpay{width:420px}}.amp-access-laterpay ul{width:100%;padding:0;margin:0 0 40px}.amp-access-laterpay li{list-style:none;display:-ms-flexbox;display:flex;margin-bottom:20px}.amp-access-laterpay label{display:-ms-flexbox;display:flex;padding-right:10px}.amp-access-laterpay input{width:20px}.amp-access-laterpay-container{padding:16px 24px 16px 16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;border-radius:12px;box-shadow:0 0 10px -1px rgba(0,0,0,.25)}.amp-access-laterpay-sandbox{width:112%;padding:15px 10px;background-color:#f2902a;color:#fff;font-weight:700;text-align:center}.amp-access-laterpay-badge{text-align:center;color:#999}.amp-access-laterpay-badge a{color:#8db444}.amp-access-laterpay-header{font-size:1.2em;margin-bottom:40px}.amp-access-laterpay-metadata{width:92%}.amp-access-laterpay-title{font-size:1.1em;margin:0;padding:0}.amp-access-laterpay-description{font-size:0.9em;margin:0;padding:0}.amp-access-laterpay-price-container{margin-top:0;margin-left:auto}.amp-access-laterpay-price{font-size:1.5em}.amp-access-laterpay-currency{font-size:0.7em}.amp-access-laterpay-purchase-button{font-size:1.1em;padding:0.5em 0.8em;background-color:#8db444;border-radius:4px;border:0;color:#fff;width:70%}.amp-access-laterpay-already-purchased-link-container{font-size:0.9em}\n/*# sourceURL=/extensions/amp-access-laterpay/0.1/amp-access-laterpay.css*/";

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc, cssText, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText), opt_isRuntimeCss || false, opt_ext || null);
    if (cb) {
      var rootNode = ampdoc.getRootNode();
      if (styleLoaded(rootNode, style)) {
        cb(style);
        return style;
      }
      var interval = setInterval(function() {
        if (styleLoaded(rootNode, style)) {
          clearInterval(interval);
          cb(style);
        }
      }, 4);
    }
    return style;
  }
  function insertStyleElement(cssRoot, cssText, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.textContent !== cssText) {
          existing.textContent = cssText;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText;
    var afterElement = null;
    if (isRuntimeCss) {
      style.setAttribute("amp-runtime", "");
    } else if (isExtCss) {
      style.setAttribute("amp-extension", ext || "");
      afterElement = dev().assertElement(getExistingStyleElement(cssRoot, styleMap, "amp-runtime"));
    } else {
      if (ext) {
        style.setAttribute(ext, "");
      }
      afterElement = cssRoot.lastChild;
    }
    insertAfterOrAtStart(cssRoot, style, afterElement);
    if (key) {
      styleMap[key] = style;
    }
    return style;
  }
  function getExistingStyleElement(cssRoot, styleMap, key) {
    if (styleMap[key]) {
      return styleMap[key];
    }
    var existing = cssRoot.querySelector("style[" + key + "]");
    if (existing) {
      styleMap[key] = existing;
      return existing;
    }
    return null;
  }
  function maybeTransform(cssRoot, cssText) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText) : cssText;
  }
  function styleLoaded(doc, style) {
    var sheets = doc.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.ownerNode == style) {
        return true;
      }
    }
    return false;
  }

  // extensions/amp-access-laterpay/0.1/laterpay-impl.js
  var TAG = "amp-access-laterpay";
  var CONFIG_URLS = {
    live: {
      eu: "https://connector.laterpay.net",
      us: "https://connector.uselaterpay.com"
    },
    sandbox: {
      eu: "https://connector.sandbox.laterpaytest.net",
      us: "https://connector.sandbox.uselaterpaytest.com"
    }
  };
  var DEFAULT_REGION = "eu";
  var CONFIG_BASE_PATH = "/api/v1/public/amp?article_url=CANONICAL_URL&amp_reader_id=READER_ID&return_url=RETURN_URL";
  var AUTHORIZATION_TIMEOUT = 3e3;
  var DEFAULT_MESSAGES = {
    premiumContentTitle: "Buy only this article",
    payLaterButton: "Buy Now, Pay Later",
    payNowButton: "Buy Now",
    defaultButton: "Buy Now",
    alreadyPurchasedLink: "I already bought this",
    sandbox: "Site in test mode. No payment required."
  };
  var LaterpayVendor = /* @__PURE__ */ function() {
    function LaterpayVendor2(accessService, accessSource) {
      this.ampdoc = accessService.ampdoc;
      this.accessSource_ = accessSource;
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.laterpayConfig_ = this.accessSource_.getAdapterConfig();
      this.purchaseConfig_ = null;
      this.purchaseButtonListener_ = null;
      this.alreadyPurchasedListener_ = null;
      this.purchaseOptionListeners_ = [];
      this.containerEmpty_ = true;
      this.innerContainer_ = null;
      this.selectedPurchaseOption_ = null;
      this.purchaseButton_ = null;
      this.currentLocale_ = this.laterpayConfig_["locale"] || "en";
      this.i18n_ = Object.assign(dict(), DEFAULT_MESSAGES, this.laterpayConfig_["localeMessages"] || dict());
      this.purchaseConfigBaseUrl_ = this.getConfigUrl_() + CONFIG_BASE_PATH;
      var articleId = this.laterpayConfig_["articleId"];
      if (articleId) {
        this.purchaseConfigBaseUrl_ += "&article_id=" + encodeURIComponent(articleId);
      }
      this.timer_ = Services.timerFor(this.ampdoc.win);
      this.vsync_ = Services.vsyncFor(this.ampdoc.win);
      this.xhr_ = Services.xhrFor(this.ampdoc.win);
      installStylesForDoc(this.ampdoc, CSS2, function() {
      }, false, TAG);
    }
    var _proto = LaterpayVendor2.prototype;
    _proto.getConfigUrl_ = function getConfigUrl_() {
      var region = this.laterpayConfig_["region"] || DEFAULT_REGION;
      if ((getMode().localDev || getMode().development) && this.laterpayConfig_["configUrl"]) {
        return this.laterpayConfig_["configUrl"];
      } else if (this.laterpayConfig_["sandbox"]) {
        return CONFIG_URLS.sandbox[region];
      } else {
        return CONFIG_URLS.live[region];
      }
    };
    _proto.authorize = function authorize() {
      var _this = this;
      return this.getPurchaseConfig_().then(function(response) {
        if (response.status === 204) {
          throw user().createError("No merchant domains have been matched for this article, or no paid content configurations are setup.");
        }
        if (_this.laterpayConfig_["scrollToTopAfterAuth"]) {
          _this.vsync_.mutate(function() {
            return _this.viewport_.setScrollTop(0);
          });
        }
        _this.emptyContainer_();
        return {
          access: response.access
        };
      }, function(err) {
        if (!err || !err.response) {
          throw err;
        }
        var response = err.response;
        if (response.status !== 402) {
          throw err;
        }
        return response.json().catch(function() {
          return void 0;
        }).then(function(responseJson) {
          _this.purchaseConfig_ = responseJson;
          _this.emptyContainer_().then(_this.renderPurchaseOverlay_.bind(_this));
          return {
            access: false
          };
        });
      });
    };
    _proto.getPurchaseConfig_ = function getPurchaseConfig_() {
      var _this2 = this;
      var url = this.purchaseConfigBaseUrl_ + "&article_title=" + encodeURIComponent(this.getArticleTitle_());
      var urlPromise = this.accessSource_.buildUrl(url, false);
      return urlPromise.then(function(url2) {
        return _this2.accessSource_.getLoginUrl(url2);
      }).then(function(url2) {
        dev().info(TAG, "Authorization URL: ", url2);
        return _this2.timer_.timeoutPromise(AUTHORIZATION_TIMEOUT, _this2.xhr_.fetchJson(url2, {
          credentials: "include"
        })).then(function(res) {
          return res.json();
        });
      });
    };
    _proto.createElement_ = function createElement_(name) {
      return this.ampdoc.win.document.createElement(name);
    };
    _proto.getArticleTitle_ = function getArticleTitle_() {
      var title = this.ampdoc.getRootNode().querySelector(this.laterpayConfig_["articleTitleSelector"]);
      userAssert(title, "No article title element found with selector %s", this.laterpayConfig_["articleTitleSelector"]);
      return title.textContent.trim();
    };
    _proto.getContainer_ = function getContainer_() {
      var id = TAG + "-dialog";
      var dialogContainer = this.ampdoc.getElementById(id);
      return user().assertElement(dialogContainer, "No element found with id " + id);
    };
    _proto.emptyContainer_ = function emptyContainer_() {
      var _this3 = this;
      if (this.containerEmpty_) {
        return resolvedPromise();
      }
      var unlistener;
      while (unlistener = this.purchaseOptionListeners_.shift()) {
        unlistener();
      }
      if (this.purchaseButtonListener_) {
        this.purchaseButtonListener_();
        this.purchaseButtonListener_ = null;
      }
      if (this.alreadyPurchasedListener_) {
        this.alreadyPurchasedListener_();
        this.alreadyPurchasedListener_ = null;
      }
      return this.vsync_.mutatePromise(function() {
        _this3.containerEmpty_ = true;
        _this3.innerContainer_ = null;
        removeChildren(_this3.getContainer_());
      });
    };
    _proto.renderPurchaseOverlay_ = function renderPurchaseOverlay_() {
      var _this4 = this;
      var dialogContainer = this.getContainer_();
      this.innerContainer_ = this.createElement_("div");
      this.innerContainer_.className = TAG + "-container";
      if (this.laterpayConfig_["sandbox"]) {
        this.renderTextBlock_("sandbox");
      }
      this.renderTextBlock_("header");
      var listContainer = this.createElement_("ul");
      this.purchaseConfig_["premiumcontent"]["title"] = this.i18n_["premiumContentTitle"];
      this.purchaseConfig_["premiumcontent"]["description"] = this.getArticleTitle_();
      listContainer.appendChild(this.createPurchaseOption_(this.purchaseConfig_["premiumcontent"]));
      this.purchaseConfig_["timepasses"].forEach(function(timepass) {
        listContainer.appendChild(_this4.createPurchaseOption_(timepass));
      });
      this.purchaseConfig_["subscriptions"].forEach(function(subscription) {
        listContainer.appendChild(_this4.createPurchaseOption_(subscription));
      });
      var purchaseButton = this.createElement_("button");
      purchaseButton.className = TAG + "-purchase-button";
      purchaseButton.textContent = this.i18n_["defaultButton"];
      this.purchaseButton_ = purchaseButton;
      this.purchaseButtonListener_ = listen(purchaseButton, "click", function(ev) {
        var value = _this4.selectedPurchaseOption_.value;
        var purchaseType = _this4.selectedPurchaseOption_.dataset["purchaseType"];
        _this4.handlePurchase_(ev, value, purchaseType);
      });
      this.innerContainer_.appendChild(listContainer);
      this.innerContainer_.appendChild(purchaseButton);
      this.innerContainer_.appendChild(this.createAlreadyPurchasedLink_(this.purchaseConfig_["apl"]));
      this.renderTextBlock_("footer");
      dialogContainer.appendChild(this.innerContainer_);
      dialogContainer.appendChild(this.createLaterpayBadge_());
      this.containerEmpty_ = false;
      this.preselectFirstOption_(dev().assertElement(listContainer.firstElementChild));
    };
    _proto.preselectFirstOption_ = function preselectFirstOption_(firstOption) {
      var firstInput = firstOption.querySelector('input[type="radio"]');
      firstInput.checked = true;
      this.selectPurchaseOption_(firstInput);
    };
    _proto.renderTextBlock_ = function renderTextBlock_(area) {
      if (this.i18n_[area]) {
        var el = this.createElement_("p");
        el.className = TAG + "-" + area;
        el.textContent = this.i18n_[area];
        this.innerContainer_.appendChild(el);
      }
    };
    _proto.createLaterpayBadge_ = function createLaterpayBadge_() {
      var a = this.createElement_("a");
      a.href = "https://laterpay.net";
      a.target = "_blank";
      a.textContent = "LaterPay";
      var el = this.createElement_("p");
      el.className = TAG + "-badge";
      el.textContent = "Powered by ";
      el.appendChild(a);
      return el;
    };
    _proto.createPurchaseOption_ = function createPurchaseOption_(option) {
      var li = this.createElement_("li");
      var control = this.createElement_("label");
      control.for = option["title"];
      control.appendChild(this.createRadioControl_(option));
      var metadataContainer = this.createElement_("div");
      metadataContainer.className = TAG + "-metadata";
      var title = this.createElement_("span");
      title.className = TAG + "-title";
      title.textContent = option["title"];
      metadataContainer.appendChild(title);
      var description = this.createElement_("p");
      description.className = TAG + "-description";
      description.textContent = option["description"];
      metadataContainer.appendChild(description);
      control.appendChild(metadataContainer);
      li.appendChild(control);
      li.appendChild(this.createPrice_(option["price"]));
      return li;
    };
    _proto.createRadioControl_ = function createRadioControl_(option) {
      var radio = this.createElement_("input");
      radio.name = "purchaseOption";
      radio.type = "radio";
      radio.id = option["title"];
      radio.value = option["purchase_url"];
      var purchaseType = option["purchase_type"] === "ppu" ? "payLater" : "payNow";
      var purchaseActionLabel = this.i18n_[purchaseType + "Button"];
      radio.setAttribute("data-purchase-action-label", purchaseActionLabel);
      radio.setAttribute("data-purchase-type", purchaseType);
      this.purchaseOptionListeners_.push(listen(radio, "change", this.handlePurchaseOptionSelection_.bind(this)));
      return radio;
    };
    _proto.createPrice_ = function createPrice_(price) {
      var currency = Object.keys(price)[0];
      var formattedPrice = this.formatPrice_(price[currency]);
      var valueEl = this.createElement_("span");
      valueEl.className = TAG + "-price";
      valueEl.textContent = formattedPrice;
      var currencyEl = this.createElement_("sup");
      currencyEl.className = TAG + "-currency";
      currencyEl.textContent = currency;
      var priceEl = this.createElement_("p");
      priceEl.className = TAG + "-price-container";
      priceEl.appendChild(valueEl);
      priceEl.appendChild(currencyEl);
      return priceEl;
    };
    _proto.formatPrice_ = function formatPrice_(priceValue) {
      var value = priceValue / 100;
      var props = {
        style: "decimal",
        minimumFractionDigits: 0
      };
      return value.toLocaleString(this.currentLocale_, props);
    };
    _proto.createAlreadyPurchasedLink_ = function createAlreadyPurchasedLink_(href) {
      var _this5 = this;
      var p = this.createElement_("p");
      p.className = TAG + "-already-purchased-link-container";
      var a = this.createElement_("a");
      a.href = href;
      a.textContent = this.i18n_["alreadyPurchasedLink"];
      this.alreadyPurchasedListener_ = listen(a, "click", function(ev) {
        _this5.handlePurchase_(ev, href, "alreadyPurchased");
      });
      p.appendChild(a);
      return p;
    };
    _proto.handlePurchaseOptionSelection_ = function handlePurchaseOptionSelection_(ev) {
      ev.preventDefault();
      this.selectPurchaseOption_(dev().assertElement(ev.target));
    };
    _proto.selectPurchaseOption_ = function selectPurchaseOption_(target) {
      var selectedOptionClassname = TAG + "-selected";
      var prevPurchaseOption = this.selectedPurchaseOption_;
      var purchaseActionLabel = target.dataset["purchaseActionLabel"];
      if (prevPurchaseOption && prevPurchaseOption.classList.contains(selectedOptionClassname)) {
        prevPurchaseOption.classList.remove(selectedOptionClassname);
      }
      this.selectedPurchaseOption_ = target;
      this.selectedPurchaseOption_.classList.add(selectedOptionClassname);
      this.purchaseButton_.textContent = purchaseActionLabel;
    };
    _proto.handlePurchase_ = function handlePurchase_(ev, purchaseUrl, purchaseType) {
      var _this6 = this;
      ev.preventDefault();
      var urlPromise = this.accessSource_.buildUrl(purchaseUrl, false);
      return urlPromise.then(function(url) {
        dev().fine(TAG, "Authorization URL: ", url);
        _this6.accessSource_.loginWithUrl(url, purchaseType);
      });
    };
    _proto.pingback = function pingback() {
      return resolvedPromise();
    };
    return LaterpayVendor2;
  }();

  // extensions/amp-access-laterpay/0.1/amp-access-laterpay.js
  AMP.registerServiceForDoc("laterpay", function(ampdoc) {
    var element = ampdoc.getHeadNode();
    return Services.accessServiceForDoc(element).then(function(accessService) {
      var source = accessService.getVendorSource("laterpay");
      var vendor = new LaterpayVendor(accessService, source);
      var adapter = source.getAdapter();
      adapter.registerVendor(vendor);
      return vendor;
    });
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-access-laterpay-0.1.max.js.map
