// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2yb8k":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c7d56e5fae6772f7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"eIucm":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$e9db = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e9db.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _hero = require("../Feature/Components/Hero");
var _heroDefault = parcelHelpers.interopDefault(_hero);
var _priceList = require("../Feature/Components/PriceList");
var _priceListDefault = parcelHelpers.interopDefault(_priceList);
var _heroLumberJpg = require("../Assets/HeroLumber.jpg");
var _heroLumberJpgDefault = parcelHelpers.interopDefault(_heroLumberJpg);
var _imageAndText = require("../Feature/Components/ImageAndText");
var _imageAndTextDefault = parcelHelpers.interopDefault(_imageAndText);
var _h3 = require("../Shared/Generic/H3");
var _h3Default = parcelHelpers.interopDefault(_h3);
var _react = require("@glitz/react");
var _shippingPng = require("../Assets/shipping.png");
var _shippingPngDefault = parcelHelpers.interopDefault(_shippingPng);
function PriceListPage() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _heroDefault.default), {
                src: (0, _heroLumberJpgDefault.default),
                alt: "Hero image oak",
                title: "Prislista",
                description: "Kontakta oss om ni vill ha Pris p\xe5 s\xe5gat virke okant och kantat"
            }, void 0, false, {
                fileName: "src/Pages/PriceListPage.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _priceListDefault.default), {}, void 0, false, {
                fileName: "src/Pages/PriceListPage.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _imageAndTextDefault.default), {
                src: (0, _shippingPngDefault.default),
                title: "Frakt",
                textFirst: true,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h3Default.default), {
                        children: "Vi har ett avtal med DHL som levererar virket direkt till d\xf6rren \xf6ver hela Sverige."
                    }, void 0, false, {
                        fileName: "src/Pages/PriceListPage.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _react.styled).P, {
                        children: "Fraktkostnaden till Stockholm ligger p\xe5 cirka 600-1200 kronor inklusive moms."
                    }, void 0, false, {
                        fileName: "src/Pages/PriceListPage.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _react.styled).P, {
                        children: "Om m\xf6jligt rekommenderar vi att du h\xe4mtar virket sj\xe4lv. D\xe5 f\xe5r du en inblick i produktionsprocessen och kan f\xf6lja hur din panel tillverkas, fr\xe5n stock till f\xe4rdig panel."
                    }, void 0, false, {
                        fileName: "src/Pages/PriceListPage.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Pages/PriceListPage.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = PriceListPage;
exports.default = PriceListPage;
var _c;
$RefreshReg$(_c, "PriceListPage");

  $parcel$ReactRefreshHelpers$e9db.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../Feature/Components/Hero":"8WNwH","../Feature/Components/PriceList":"4ayDn","../Assets/HeroLumber.jpg":"dvrm6","../Feature/Components/ImageAndText":"8HWo8","../Shared/Generic/H3":"iGEMB","@glitz/react":"bAXm1","../Assets/shipping.png":"dV22j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8WNwH":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$bb69 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$bb69.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("@glitz/react");
var _h1 = require("../../Shared/Generic/H1");
var _h1Default = parcelHelpers.interopDefault(_h1);
var _value = require("../../Shared/value");
var _h3 = require("../../Shared/Generic/H3");
var _h3Default = parcelHelpers.interopDefault(_h3);
var _lazyLoadImage = require("./LazyLoadImage");
var _lazyLoadImageDefault = parcelHelpers.interopDefault(_lazyLoadImage);
var _button = require("./Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _core = require("@glitz/core");
var _react1 = require("react");
function Hero(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(HeroContainer, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextOverlay, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h1Default.default), {
                                children: props.title
                            }, void 0, false, {
                                fileName: "src/Feature/Components/Hero.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledH3, {
                                children: props.description
                            }, void 0, false, {
                                fileName: "src/Feature/Components/Hero.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Feature/Components/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledButton, {
                        ariaLabel: "kontakta oss",
                        to: "/kontakt",
                        children: "Kontakta oss"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/Hero.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/Hero.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ImageContainer, {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Image, {
                    src: props.src,
                    alt: props.alt
                }, void 0, false, {
                    fileName: "src/Feature/Components/Hero.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Feature/Components/Hero.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledBlock, {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h1Default.default), {
                            children: props.title
                        }, void 0, false, {
                            fileName: "src/Feature/Components/Hero.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledH3, {
                            children: props.description
                        }, void 0, false, {
                            fileName: "src/Feature/Components/Hero.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Feature/Components/Hero.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Feature/Components/Hero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/Hero.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Hero;
exports.default = /*#__PURE__*/ _c1 = (0, _react1.memo)(Hero);
const HeroContainer = (0, _react.styled).div({
    position: "relative",
    overflow: "hidden"
});
_c2 = HeroContainer;
const TextContainer = (0, _react.styled).div();
_c3 = TextContainer;
const StyledBlock = (0, _react.styled)((0, _value.Block), {
    display: "none",
    ...(0, _core.media)({
        maxWidth: "1025px"
    }, {
        display: "block"
    })
});
_c4 = StyledBlock;
const TextOverlay = (0, _react.styled).div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    flexWrap: "wrap",
    padding: {
        x: (0, _value.large),
        bottom: (0, _value.huge)
    },
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    textAlign: "left",
    color: "#fff",
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(185.28deg,transparent,rgba(0,0,0,.05) 57.61%,rgba(0,0,0,.9) 99.95%,rgba(0,0,0,.5) 100%,rgba(0,0,0,.5) 0),linear-gradient(180.33deg,transparent,transparent 55.61%,rgba(0,0,0,.9) 99.95%,rgba(0,0,0,.5) 100%,rgba(0,0,0,.5) 0)",
    ...(0, _core.media)({
        maxWidth: "1025px"
    }, {
        display: "none"
    })
});
_c5 = TextOverlay;
const StyledButton = (0, _react.styled)((0, _buttonDefault.default), {
    backgroundColor: "#fff",
    color: "black",
    ":hover": {
        backgroundColor: "#f0f0f0 "
    },
    ...(0, _core.media)({
        maxWidth: "1025px"
    }, {
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "end",
        margin: {
            top: (0, _value.medium),
            x: 0,
            bottom: 0
        }
    })
});
_c6 = StyledButton;
const StyledH3 = (0, _react.styled)((0, _h3Default.default), {
    fontStyle: "italic"
});
_c7 = StyledH3;
const ImageContainer = (0, _react.styled).div({
    position: "relative",
    width: "100%",
    height: "500px",
    overflow: "hidden",
    ...(0, _core.media)({
        maxWidth: "760px"
    }, {
        height: "300px"
    })
});
_c8 = ImageContainer;
const Image = (0, _react.styled)((0, _lazyLoadImageDefault.default), {
    width: "100%",
    height: "100%",
    objectFit: "cover"
});
_c9 = Image;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
$RefreshReg$(_c, "Hero");
$RefreshReg$(_c1, "%default%");
$RefreshReg$(_c2, "HeroContainer");
$RefreshReg$(_c3, "TextContainer");
$RefreshReg$(_c4, "StyledBlock");
$RefreshReg$(_c5, "TextOverlay");
$RefreshReg$(_c6, "StyledButton");
$RefreshReg$(_c7, "StyledH3");
$RefreshReg$(_c8, "ImageContainer");
$RefreshReg$(_c9, "Image");

  $parcel$ReactRefreshHelpers$bb69.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@glitz/react":"bAXm1","../../Shared/Generic/H1":"fmZc4","../../Shared/value":"9VKej","../../Shared/Generic/H3":"iGEMB","./LazyLoadImage":"6qRec","./Button":"at8Gv","@glitz/core":"5ehrf","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"fmZc4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headingReset", ()=>headingReset);
parcelHelpers.export(exports, "h1Styled", ()=>h1Styled);
var _react = require("@glitz/react");
var _typography = require("../typography");
var _value = require("../value");
var _core = require("@glitz/core");
const headingReset = (0, _react.styled)({
    fontSize: "unset",
    fontWeight: "unset",
    marginBottom: 0
});
const h1Styled = (0, _react.styled)({
    fontWeight: "700",
    fontSize: (0, _typography.alpha),
    margin: {
        bottom: (0, _value.moderate)
    },
    ...(0, _core.media)({
        maxWidth: "760px"
    }, {
        fontSize: (0, _typography.beta)
    })
});
exports.default = h1Styled((0, _react.styled).H1);

},{"@glitz/react":"bAXm1","../typography":"iZltJ","../value":"9VKej","@glitz/core":"5ehrf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ayDn":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$57cd = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$57cd.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _priceFile = require("../../Lists/PriceFile");
var _value = require("../../Shared/value");
var _react1 = require("@glitz/react");
var _core = require("@glitz/core");
var _button = require("./Button");
var _s = $RefreshSig$();
function PriceList() {
    _s();
    const [list, setList] = (0, _react.useState)((0, _priceFile.list));
    const [sortConfig, setSortConfig] = (0, _react.useState)({
        key: "typ",
        order: "asc"
    });
    const sortList = (key)=>{
        let order = "asc";
        if (sortConfig.key === key && sortConfig.order === "asc") order = "desc";
        const sortedList = [
            ...list
        ].sort((a, b)=>{
            let aValue = a[key];
            let bValue = b[key];
            // Convert price to number for comparison
            if (key === "pris") {
                aValue = parseFloat(aValue.replace(/[^0-9.-]+/g, ""));
                bValue = parseFloat(bValue.replace(/[^0-9.-]+/g, ""));
            }
            if (aValue < bValue) return order === "asc" ? -1 : 1;
            if (aValue > bValue) return order === "asc" ? 1 : -1;
            return 0;
        });
        setList(sortedList);
        setSortConfig({
            key,
            order
        });
    };
    const getSortIndicator = (key)=>{
        if (sortConfig.key === key) return sortConfig.order === "asc" ? "\u2191" : "\u2193";
        return "";
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Container, {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Wrapper, {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowHeader, {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                            ariaLabel: "Artikelnr",
                            onClick: ()=>sortList("artikelnr"),
                            css: {
                                cursor: "pointer"
                            },
                            children: [
                                "Artikelnr ",
                                getSortIndicator("artikelnr")
                            ]
                        }, void 0, true, {
                            fileName: "src/Feature/Components/PriceList.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                            ariaLabel: "Typ",
                            onClick: ()=>sortList("typ"),
                            css: {
                                cursor: "pointer"
                            },
                            children: [
                                "Typ ",
                                getSortIndicator("typ")
                            ]
                        }, void 0, true, {
                            fileName: "src/Feature/Components/PriceList.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                            ariaLabel: "Dimension",
                            onClick: ()=>sortList("dimension"),
                            css: {
                                cursor: "pointer"
                            },
                            children: [
                                "Dimension ",
                                getSortIndicator("dimension")
                            ]
                        }, void 0, true, {
                            fileName: "src/Feature/Components/PriceList.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                            ariaLabel: "Tr\xe4slag",
                            onClick: ()=>sortList("traslag"),
                            css: {
                                cursor: "pointer"
                            },
                            children: [
                                "Tr\xe4slag ",
                                getSortIndicator("traslag")
                            ]
                        }, void 0, true, {
                            fileName: "src/Feature/Components/PriceList.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                            ariaLabel: "Enhet",
                            onClick: ()=>sortList("enhet"),
                            css: {
                                cursor: "pointer"
                            },
                            children: [
                                "Enhet ",
                                getSortIndicator("enhet")
                            ]
                        }, void 0, true, {
                            fileName: "src/Feature/Components/PriceList.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                            ariaLabel: "Pris inkl/moms",
                            onClick: ()=>sortList("pris"),
                            css: {
                                cursor: "pointer"
                            },
                            children: [
                                "Pris inkl/moms ",
                                getSortIndicator("pris")
                            ]
                        }, void 0, true, {
                            fileName: "src/Feature/Components/PriceList.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                            ariaLabel: "Anm\xe4rkning",
                            onClick: ()=>sortList("anmarkning"),
                            css: {
                                cursor: "pointer"
                            },
                            children: [
                                "Anm\xe4rkning ",
                                getSortIndicator("anmarkning")
                            ]
                        }, void 0, true, {
                            fileName: "src/Feature/Components/PriceList.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Feature/Components/PriceList.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                list.map((row, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Row, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                                children: row.artikelnr
                            }, void 0, false, {
                                fileName: "src/Feature/Components/PriceList.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                                children: row.typ
                            }, void 0, false, {
                                fileName: "src/Feature/Components/PriceList.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                                children: row.dimension
                            }, void 0, false, {
                                fileName: "src/Feature/Components/PriceList.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                                children: row.traslag
                            }, void 0, false, {
                                fileName: "src/Feature/Components/PriceList.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                                children: row.enhet
                            }, void 0, false, {
                                fileName: "src/Feature/Components/PriceList.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                                children: row.pris
                            }, void 0, false, {
                                fileName: "src/Feature/Components/PriceList.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                                children: row.anmarkning
                            }, void 0, false, {
                                fileName: "src/Feature/Components/PriceList.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "src/Feature/Components/PriceList.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "src/Feature/Components/PriceList.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/Feature/Components/PriceList.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(PriceList, "VscPItBIttnZWRH8oNmDWCnGbOs=");
_c = PriceList;
exports.default = PriceList;
const Container = (0, _react1.styled)((0, _value.Block), {
    display: "block",
    width: "100%",
    overflowX: "auto",
    ...(0, _core.media)({
        minWidth: "1025px"
    }, {
        overflowX: "unset"
    })
});
_c1 = Container;
const Wrapper = (0, _react1.styled).div({
    display: "block",
    minWidth: "1000px",
    position: "relative"
});
_c2 = Wrapper;
const Row = (0, _react1.styled).div({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr 1fr 1fr 1fr",
    border: {
        bottom: {
            width: "1px",
            style: "solid",
            color: (0, _value.DefaultGreen)
        }
    }
});
_c3 = Row;
const RowHeader = (0, _react1.styled)(Row, {
    fontWeight: "bold",
    ...(0, _core.media)({
        minWidth: "1025px"
    }, {
        position: "sticky"
    }),
    top: "137px",
    backgroundColor: "#fff"
});
_c4 = RowHeader;
const Cell = (0, _react1.styled).div({
    padding: {
        y: "10px"
    }
});
_c5 = Cell;
const ButtonCell = (0, _react1.styled)((0, _button.PlainButton), {
    whiteSpace: "nowrap",
    padding: {
        y: "10px"
    }
});
_c6 = ButtonCell;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "PriceList");
$RefreshReg$(_c1, "Container");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "Row");
$RefreshReg$(_c4, "RowHeader");
$RefreshReg$(_c5, "Cell");
$RefreshReg$(_c6, "ButtonCell");

  $parcel$ReactRefreshHelpers$57cd.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../../Lists/PriceFile":"4fJTC","../../Shared/value":"9VKej","@glitz/react":"bAXm1","@glitz/core":"5ehrf","./Button":"at8Gv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4fJTC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ekstolp", ()=>ekstolp);
parcelHelpers.export(exports, "list", ()=>list);
const ekstolp = {
    dimensionsWithCosts: [
        {
            dimension: "50*50 mm",
            length: "1.7-1.9 m",
            pricePerUnit: "38",
            sharpeningCost: "6"
        },
        {
            dimension: "63*63 mm",
            length: "1.7-1.9 m",
            pricePerUnit: "65",
            sharpeningCost: "8"
        },
        {
            dimension: "75*75 mm",
            length: "1.7-1.9 m",
            pricePerUnit: "95",
            sharpeningCost: "12"
        }
    ],
    woodProducts: [
        {
            type: "Svensk Ek",
            dimension: "42*120/145 mm",
            pricePerKvm: "560 kr",
            unit: "kvm"
        },
        {
            type: "Svensk EK",
            dimension: "34*120/145 mm",
            pricePerKvm: "410 kr",
            unit: "kvm"
        },
        {
            type: "Stolpe Svensk Ek",
            dimension: "95*95 mm",
            pricePerLpm: "90 kr",
            unit: "lpm"
        },
        {
            type: "Stolpe Svensk Ek",
            dimension: "120*120 mm",
            pricePerLpm: "195 kr",
            unit: "lpm"
        }
    ],
    dimensionsWithPricePerLpm: [
        {
            dimension: "100*100 mm",
            pricePerLpm: "110"
        },
        {
            dimension: "125*125 mm",
            pricePerLpm: "129"
        },
        {
            dimension: "150*150 mm",
            pricePerLpm: "175"
        },
        {
            dimension: "175*175 mm",
            pricePerLpm: "220"
        },
        {
            dimension: "200*200 mm",
            pricePerLpm: "280"
        }
    ],
    additionalProducts: [
        {
            description: "Ek 19*120",
            lengths: "Fallande",
            pricePerM2: "850 kr"
        },
        {
            description: "Ask 19*110",
            lengths: "Fallande",
            pricePerM2: "750 kr"
        },
        {
            description: "AL 22*135",
            lengths: "Fallande",
            pricePerM2: "750 kr"
        }
    ]
};
const list = [
    {
        artikelnr: "7501",
        typ: "Bastupanel Softline",
        dimension: "15*63",
        traslag: "AL",
        enhet: "Lpm",
        pris: "25",
        anmarkning: ""
    },
    {
        artikelnr: "7502",
        typ: "Bastupanel Softline",
        dimension: "15*90",
        traslag: "AL",
        enhet: "Lpm",
        pris: "39",
        anmarkning: ""
    },
    {
        artikelnr: "7503",
        typ: "Bastupanel Liggande",
        dimension: "16*83",
        traslag: "AL",
        enhet: "Lpm",
        pris: "37,5",
        anmarkning: ""
    },
    {
        artikelnr: "7504",
        typ: "Bastupanel Faspanel",
        dimension: "15*63",
        traslag: "AL",
        enhet: "Lpm",
        pris: "25",
        anmarkning: ""
    },
    {
        artikelnr: "7505",
        typ: "Bastupanel Natur",
        dimension: "15*95",
        traslag: "AL",
        enhet: "Lpm",
        pris: "29",
        anmarkning: "Sluts\xe5ld"
    },
    {
        artikelnr: "7506",
        typ: "Bastu Panel Exklusiv (Big Hill)",
        dimension: "21*95",
        traslag: "AL",
        enhet: "Lpm",
        pris: "62",
        anmarkning: ""
    },
    {
        artikelnr: "8001",
        typ: "Bastulav",
        dimension: "22*63",
        traslag: "AL",
        enhet: "Lpm",
        pris: "39",
        anmarkning: ""
    },
    {
        artikelnr: "8002",
        typ: "Bastulav",
        dimension: "22*90",
        traslag: "AL",
        enhet: "Lpm",
        pris: "65",
        anmarkning: ""
    },
    {
        artikelnr: "8003",
        typ: "Bastulav",
        dimension: "22*45",
        traslag: "AL",
        enhet: "Lpm",
        pris: "32",
        anmarkning: ""
    },
    {
        artikelnr: "8004",
        typ: "Bastulav",
        dimension: "22*63",
        traslag: "AL",
        enhet: "Lpm",
        pris: "39",
        anmarkning: ""
    },
    {
        artikelnr: "8005",
        typ: "Bastulav",
        dimension: "22*120",
        traslag: "AL",
        enhet: "Lpm",
        pris: "78",
        anmarkning: ""
    },
    {
        artikelnr: "7509",
        typ: "Taklist Antik",
        dimension: "22*65",
        traslag: "AL",
        enhet: "Lpm",
        pris: "45",
        anmarkning: ""
    },
    {
        artikelnr: "7510",
        typ: "Taklist Antik (se bildark)",
        dimension: "22*65",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "55",
        anmarkning: ""
    },
    {
        artikelnr: "7511",
        typ: "Taklist Antik",
        dimension: "22*65",
        traslag: "Bj\xf6rk",
        enhet: "Lpm",
        pris: "45",
        anmarkning: ""
    },
    {
        artikelnr: "7512",
        typ: "Taklist Antik",
        dimension: "22*65",
        traslag: "Fur",
        enhet: "Lpm",
        pris: "32",
        anmarkning: ""
    },
    {
        artikelnr: "7513",
        typ: "Taklist Funkis",
        dimension: "38*63",
        traslag: "AL",
        enhet: "Lpm",
        pris: "55",
        anmarkning: ""
    },
    {
        artikelnr: "7514",
        typ: "Taklist Funkis",
        dimension: "38*63",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "65",
        anmarkning: ""
    },
    {
        artikelnr: "7515",
        typ: "Taklist Funkis",
        dimension: "38*63",
        traslag: "Bj\xf6rk",
        enhet: "Lpm",
        pris: "55",
        anmarkning: ""
    },
    {
        artikelnr: "7516",
        typ: "Taklist Funkis",
        dimension: "38*63",
        traslag: "Fur",
        enhet: "Lpm",
        pris: "42",
        anmarkning: ""
    },
    {
        artikelnr: "7601",
        typ: "Foder/Sl\xe4t",
        dimension: "12*63",
        traslag: "EK",
        enhet: "Lpm",
        pris: "37",
        anmarkning: ""
    },
    {
        artikelnr: "7602",
        typ: "Golvlist/Sl\xe4t",
        dimension: "12*63",
        traslag: "EK",
        enhet: "Lpm",
        pris: "37",
        anmarkning: ""
    },
    {
        artikelnr: "7603",
        typ: "Foder/Sl\xe4t",
        dimension: "14*90",
        traslag: "EK",
        enhet: "Lpm",
        pris: "65",
        anmarkning: ""
    },
    {
        artikelnr: "7604",
        typ: "Golvlist/Sl\xe4t",
        dimension: "14*90",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "65",
        anmarkning: ""
    },
    {
        artikelnr: "7605",
        typ: "Planhyvlat",
        dimension: "21*70",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "45",
        anmarkning: ""
    },
    {
        artikelnr: "7606",
        typ: "Planhyvlat",
        dimension: "21*90",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "70",
        anmarkning: ""
    },
    {
        artikelnr: "7607",
        typ: "Planhyvlat",
        dimension: "21*120",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "85",
        anmarkning: ""
    },
    {
        artikelnr: "7607",
        typ: "Taklist",
        dimension: "21*68",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "58",
        anmarkning: ""
    },
    {
        artikelnr: "7608",
        typ: "Arkitekt panel (B-Sund)",
        dimension: "16*90",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "56",
        anmarkning: ""
    },
    {
        artikelnr: "7609",
        typ: "P\xe4rlspont Ek",
        dimension: "15*70",
        traslag: "Ek",
        enhet: "Kvm",
        pris: "750",
        anmarkning: ""
    },
    {
        artikelnr: "7630",
        typ: "Sl\xe4tpanel",
        dimension: "15*90",
        traslag: "Ek",
        enhet: "Lmp",
        pris: "39",
        anmarkning: ""
    },
    {
        artikelnr: "7610",
        typ: "Trall",
        dimension: "22*95",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "37",
        anmarkning: ""
    },
    {
        artikelnr: "7611",
        typ: "Trall",
        dimension: "22*120",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "48",
        anmarkning: ""
    },
    {
        artikelnr: "7612",
        typ: "Trall",
        dimension: "28*120",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "62",
        anmarkning: ""
    },
    {
        artikelnr: "7613",
        typ: "Trall",
        dimension: "28*145",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "89",
        anmarkning: ""
    },
    {
        artikelnr: "7701",
        typ: "Ekpanel Utv",
        dimension: "22*120",
        traslag: "Ek",
        enhet: "Lpm",
        pris: "56",
        anmarkning: "Valfriprofil"
    },
    {
        artikelnr: "7701",
        typ: "Arkitektpanel Utv",
        dimension: "21*120",
        traslag: "Asp",
        enhet: "lpm",
        pris: "38",
        anmarkning: ""
    },
    {
        artikelnr: "7702",
        typ: "Bastulav",
        dimension: "22*70",
        traslag: "Asp",
        enhet: "lpm",
        pris: "37",
        anmarkning: ""
    },
    {
        artikelnr: "7703",
        typ: "Bastulav",
        dimension: "22*45",
        traslag: "Asp",
        enhet: "lpm",
        pris: "28",
        anmarkning: ""
    },
    {
        artikelnr: "7801",
        typ: "Golvlist 1800-tal profil",
        dimension: "21*145",
        traslag: "EK",
        enhet: "lpm",
        pris: "145",
        anmarkning: ""
    },
    {
        artikelnr: "7802",
        typ: "Golvlist 1800-tal",
        dimension: "21*145",
        traslag: "Ask",
        enhet: "lpm",
        pris: "110",
        anmarkning: ""
    },
    {
        artikelnr: "7803",
        typ: "Golvlist 1800-tal",
        dimension: "21*145",
        traslag: "Fur",
        enhet: "lpm",
        pris: "65",
        anmarkning: ""
    },
    {
        artikelnr: "7804",
        typ: "Foder 1800-tal",
        dimension: "21*120",
        traslag: "Ek",
        enhet: "lpm",
        pris: "110",
        anmarkning: ""
    },
    {
        artikelnr: "7805",
        typ: "Foder 1800-tal",
        dimension: "21*120",
        traslag: "Ask",
        enhet: "lpm",
        pris: "105",
        anmarkning: ""
    },
    {
        artikelnr: "7806",
        typ: "Foder 1800-tal",
        dimension: "21*120",
        traslag: "Fur",
        enhet: "lpm",
        pris: "65",
        anmarkning: ""
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvrm6":[function(require,module,exports) {
module.exports = require("98263926c5078f7e").getBundleURL("h9I1V") + "HeroLumber.96783100.jpg" + "?" + Date.now();

},{"98263926c5078f7e":"lgJ39"}],"8HWo8":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$bbae = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$bbae.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("@glitz/react");
var _core = require("@glitz/core");
var _h2 = require("../../Shared/Generic/H2");
var _h2Default = parcelHelpers.interopDefault(_h2);
var _value = require("../../Shared/value");
var _lazyLoadImage = require("./LazyLoadImage");
var _lazyLoadImageDefault = parcelHelpers.interopDefault(_lazyLoadImage);
function ImageAndText({ title, src, children, textFirst }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Container, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ImageContainer, {
                className: "image",
                css: {
                    height: "auto",
                    ...!textFirst ? {
                        ...(0, _core.media)({
                            minWidth: "1025px"
                        }, {
                            order: 1
                        })
                    } : {
                        ...(0, _core.media)({
                            minWidth: "1025px"
                        }, {
                            order: 2
                        })
                    }
                },
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Image, {
                    src: src,
                    alt: "oak image"
                }, void 0, false, {
                    fileName: "src/Feature/Components/ImageAndText.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Feature/Components/ImageAndText.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                className: "text",
                css: {
                    height: "auto",
                    ...!textFirst ? {
                        ...(0, _core.media)({
                            minWidth: "1025px"
                        }, {
                            order: 2
                        })
                    } : {
                        ...(0, _core.media)({
                            minWidth: "1025px"
                        }, {
                            order: 1
                        })
                    }
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h2Default.default), {
                        children: title
                    }, void 0, false, {
                        fileName: "src/Feature/Components/ImageAndText.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextList, {
                        children: children
                    }, void 0, false, {
                        fileName: "src/Feature/Components/ImageAndText.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/ImageAndText.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/ImageAndText.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ImageAndText;
exports.default = ImageAndText;
const Container = (0, _react.styled)((0, _value.Block), {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    borderRadius: "10px",
    ...(0, _core.media)({
        minWidth: "1025px"
    }, {
        gridTemplateColumns: "1fr 1fr"
    })
});
_c1 = Container;
const TextContainer = (0, _react.styled).div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: {
        xy: (0, _value.large)
    },
    order: 2,
    ...(0, _core.media)({
        maxWidth: "1025px"
    }, {
        padding: {
            xy: 0
        }
    })
});
_c2 = TextContainer;
const ImageContainer = (0, _react.styled).div({
    width: "100%",
    height: "100%",
    maxHeight: "500px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    order: 1
});
_c3 = ImageContainer;
const Image = (0, _react.styled)((0, _lazyLoadImageDefault.default), {
    width: "100%",
    height: "100%",
    objectFit: "cover"
});
_c4 = Image;
const TextList = (0, _react.styled).div({
    display: "flex",
    flexDirection: "column",
    gap: "10px"
});
_c5 = TextList;
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "ImageAndText");
$RefreshReg$(_c1, "Container");
$RefreshReg$(_c2, "TextContainer");
$RefreshReg$(_c3, "ImageContainer");
$RefreshReg$(_c4, "Image");
$RefreshReg$(_c5, "TextList");

  $parcel$ReactRefreshHelpers$bbae.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@glitz/react":"bAXm1","@glitz/core":"5ehrf","../../Shared/Generic/H2":"au95a","../../Shared/value":"9VKej","./LazyLoadImage":"6qRec","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"dV22j":[function(require,module,exports) {
module.exports = require("da86353186c10839").getBundleURL("h9I1V") + "shipping.7cc68795.png" + "?" + Date.now();

},{"da86353186c10839":"lgJ39"}]},["2yb8k","1xC6H"], null, "parcelRequire34be")

//# sourceMappingURL=PriceListPage.ae6772f7.js.map
