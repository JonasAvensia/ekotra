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
})({"aRpp4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "500559f50b242f48";
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

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"bDJ6V":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$abb1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$abb1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _hero = require("../../Feature/Components/Hero");
var _heroDefault = parcelHelpers.interopDefault(_hero);
var _lits = require("../../Feature/Components/Lits");
var _litsDefault = parcelHelpers.interopDefault(_lits);
var _products = require("../../Lists/Products");
var _productsDefault = parcelHelpers.interopDefault(_products);
var _treesJpg = require("../../Assets/trees.jpg");
var _treesJpgDefault = parcelHelpers.interopDefault(_treesJpg);
var _smallList = require("../../Feature/Components/SmallList");
var _smallListDefault = parcelHelpers.interopDefault(_smallList);
var _s = $RefreshSig$();
function PlanedProducts() {
    _s();
    const { Panels, Strips, Floors } = (0, _productsDefault.default)();
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _heroDefault.default), {
                src: (0, _treesJpgDefault.default),
                alt: "Hero image Hyvlade produkter.",
                title: "Hyvlade Produkter",
                description: "Massiva tr\xe4golv, lister och paneler i svenska l\xf6vtr\xe4slag \u2013 specialtillverkat efter dina \xf6nskem\xe5l"
            }, void 0, false, {
                fileName: "src/Pages/Productpage/PlanedProducts.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _litsDefault.default), {
                title: "Golv",
                description: "Ett golv \xe4r inte bara ett golv \u2013 det \xe4r en m\xf6bel. Massiva tr\xe4golv i svenskt l\xf6vtr\xe4 \xe4r unika: varje tilja har sin egen karakt\xe4r. K\xe4nslan av att g\xe5 barfota p\xe5 ett riktigt tr\xe4golv \xe4r n\xe5got helt annat. Genom att vara med i hela f\xf6r\xe4dlingsprocessen kan vi ursprungsgarantera ditt golv.V\xe5ra golv \xe4r best\xe4llningsvara. Leveranstid meddelas vid offert.",
                list: Floors
            }, void 0, false, {
                fileName: "src/Pages/Productpage/PlanedProducts.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _smallListDefault.default), {
                showAdditionalProducts: true
            }, void 0, false, {
                fileName: "src/Pages/Productpage/PlanedProducts.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _litsDefault.default), {
                title: "Paneler",
                description: "Vi specialtillverkar paneler enligt kundens \xf6nskem\xe5l. Vi rekommenderar bastupanel i al, vilket ger en varm och gemytlig k\xe4nsla och har liknande egenskaper som asp. Vi hj\xe4lper dig g\xe4rna att f\xf6rverkliga dina egna id\xe9er kring panel och utformning",
                list: Panels
            }, void 0, false, {
                fileName: "src/Pages/Productpage/PlanedProducts.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _litsDefault.default), {
                title: "Lister",
                description: "Vi erbjuder lister och foder i alla m\xf6jliga former och dimensioner. F\xf6rutom v\xe5ra standardlister kan vi \xe4ven tillverka specialbest\xe4llda varianter helt enligt dina \xf6nskem\xe5l. Vid renovering av \xe4ldre hus kan vi reproducera gamla profiler \u2013 skicka g\xe4rna en bit av den befintliga listen eller fodret till oss f\xf6r ett kostnadsf\xf6rslag",
                list: Strips
            }, void 0, false, {
                fileName: "src/Pages/Productpage/PlanedProducts.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PlanedProducts, "1IF2aFp+VdY4MbD6At/pshWHFs8=", false, function() {
    return [
        (0, _productsDefault.default)
    ];
});
_c = PlanedProducts;
exports.default = PlanedProducts;
var _c;
$RefreshReg$(_c, "PlanedProducts");

  $parcel$ReactRefreshHelpers$abb1.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../../Feature/Components/Hero":"8WNwH","../../Feature/Components/Lits":"kNxh3","../../Lists/Products":"3XYD0","../../Assets/trees.jpg":"64wxQ","../../Feature/Components/SmallList":"csIkc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8WNwH":[function(require,module,exports) {
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

},{"@glitz/react":"bAXm1","../typography":"iZltJ","../value":"9VKej","@glitz/core":"5ehrf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNxh3":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$877f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$877f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("@glitz/react");
var _h2 = require("../../Shared/Generic/H2");
var _h2Default = parcelHelpers.interopDefault(_h2);
var _value = require("../../Shared/value");
var _core = require("@glitz/core");
var _productCard = require("./ProductCard");
var _productCardDefault = parcelHelpers.interopDefault(_productCard);
function List(props) {
    const { title, description, list } = props;
    const numColumns = list.length > 3 ? 4 : list.length;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ListContainer, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h2Default.default), {
                        children: title
                    }, void 0, false, {
                        fileName: "src/Feature/Components/Lits.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Text, {
                        children: description
                    }, void 0, false, {
                        fileName: "src/Feature/Components/Lits.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/Lits.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ListWrapper, {
                css: {
                    ...(0, _core.media)({
                        minWidth: "1025px"
                    }, {
                        gridTemplateColumns: `repeat(${numColumns}, 1fr)`
                    })
                },
                children: list.map((data)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Column, {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _productCardDefault.default), {
                            item: data,
                            numColumns: numColumns
                        }, void 0, false, {
                            fileName: "src/Feature/Components/Lits.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, data.name, false, {
                        fileName: "src/Feature/Components/Lits.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "src/Feature/Components/Lits.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/Lits.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = List;
exports.default = List;
const ListContainer = (0, _react.styled)((0, _value.Block));
_c1 = ListContainer;
const TextContainer = (0, _react.styled).div({
    display: "flex",
    flexDirection: "column",
    gap: (0, _value.small),
    width: "100%",
    ...(0, _core.media)({
        minWidth: "1025px"
    }, {
        width: "calc(50% - 20px)"
    })
});
_c2 = TextContainer;
const Text = (0, _react.styled).p({});
_c3 = Text;
const ListWrapper = (0, _react.styled).div({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: (0, _value.large),
    margin: {
        top: (0, _value.large)
    }
});
_c4 = ListWrapper;
const Column = (0, _react.styled).div({
    width: "100%",
    backgroundColor: "#fff"
});
_c5 = Column;
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "List");
$RefreshReg$(_c1, "ListContainer");
$RefreshReg$(_c2, "TextContainer");
$RefreshReg$(_c3, "Text");
$RefreshReg$(_c4, "ListWrapper");
$RefreshReg$(_c5, "Column");

  $parcel$ReactRefreshHelpers$877f.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@glitz/react":"bAXm1","../../Shared/Generic/H2":"au95a","../../Shared/value":"9VKej","@glitz/core":"5ehrf","./ProductCard":"iOO2a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iOO2a":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$6f7e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$6f7e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("@glitz/react");
var _value = require("../../Shared/value");
var _lazyLoadImage = require("./LazyLoadImage");
var _lazyLoadImageDefault = parcelHelpers.interopDefault(_lazyLoadImage);
var _h4 = require("../../Shared/Generic/H4");
var _h4Default = parcelHelpers.interopDefault(_h4);
var _core = require("@glitz/core");
function ProductCard({ item, numColumns }) {
    const height = numColumns === 1 ? "400px" : numColumns === 2 ? "400px" : numColumns === 3 ? "260px" : "224px";
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Container, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledLink, {
                href: item.image,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledImage, {
                    src: item.image,
                    alt: item.name,
                    css: {
                        height: "220px",
                        ...(0, _core.media)({
                            minWidth: "1025px"
                        }, {
                            height: height
                        })
                    }
                }, void 0, false, {
                    fileName: "src/Feature/Components/ProductCard.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Feature/Components/ProductCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(DescriptionContainer, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h4Default.default), {
                        children: item.name
                    }, void 0, false, {
                        fileName: "src/Feature/Components/ProductCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Text, {
                        children: item.description
                    }, void 0, false, {
                        fileName: "src/Feature/Components/ProductCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Price, {
                        children: item.price
                    }, void 0, false, {
                        fileName: "src/Feature/Components/ProductCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/ProductCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/ProductCard.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ProductCard;
exports.default = ProductCard;
const Container = (0, _react.styled).div({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: {
        xy: (0, _value.small)
    },
    border: {
        xy: {
            style: "solid",
            width: "1px",
            color: "#E6E6E6"
        }
    },
    borderRadius: "4px"
});
_c1 = Container;
const StyledLink = (0, _react.styled).a({
    textDecoration: "none"
});
_c2 = StyledLink;
const StyledImage = (0, _react.styled)((0, _lazyLoadImageDefault.default), {
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px"
});
_c3 = StyledImage;
const DescriptionContainer = (0, _react.styled).div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: {
        grow: 1
    }
});
_c4 = DescriptionContainer;
const Text = (0, _react.styled).p({
    margin: {
        top: (0, _value.small),
        bottom: (0, _value.large)
    }
});
_c5 = Text;
const Price = (0, _react.styled).p({
    fontWeight: "bold"
});
_c6 = Price;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "ProductCard");
$RefreshReg$(_c1, "Container");
$RefreshReg$(_c2, "StyledLink");
$RefreshReg$(_c3, "StyledImage");
$RefreshReg$(_c4, "DescriptionContainer");
$RefreshReg$(_c5, "Text");
$RefreshReg$(_c6, "Price");

  $parcel$ReactRefreshHelpers$6f7e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@glitz/react":"bAXm1","../../Shared/value":"9VKej","./LazyLoadImage":"6qRec","../../Shared/Generic/H4":"36gb2","@glitz/core":"5ehrf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"36gb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headingReset", ()=>headingReset);
parcelHelpers.export(exports, "h4Styled", ()=>h4Styled);
var _react = require("@glitz/react");
var _typography = require("../typography");
const headingReset = (0, _react.styled)({
    fontSize: "unset",
    fontWeight: "unset",
    marginBottom: 0
});
const h4Styled = (0, _react.styled)({
    fontWeight: "700",
    fontSize: (0, _typography.delta)
});
exports.default = h4Styled((0, _react.styled).H4);

},{"@glitz/react":"bAXm1","../typography":"iZltJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XYD0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _alpanelJpg = require("../Assets/products/Alpanel.jpg"); // Importing the image
var _alpanelJpgDefault = parcelHelpers.interopDefault(_alpanelJpg);
var _bastuJpg = require("../Assets/products/Bastu.jpg");
var _bastuJpgDefault = parcelHelpers.interopDefault(_bastuJpg);
var _ekpanel1Jpg = require("../Assets/products/Ekpanel1.jpg");
var _ekpanel1JpgDefault = parcelHelpers.interopDefault(_ekpanel1Jpg);
var _altanekJpg = require("../Assets/products/Altanek.jpg");
var _altanekJpgDefault = parcelHelpers.interopDefault(_altanekJpg);
var _algolv2Jpg = require("../Assets/products/algolv2.jpg");
var _algolv2JpgDefault = parcelHelpers.interopDefault(_algolv2Jpg);
var _ekgolvJpg = require("../Assets/products/Ekgolv.jpg");
var _ekgolvJpgDefault = parcelHelpers.interopDefault(_ekgolvJpg);
var _algolvJpg = require("../Assets/products/Algolv.jpg");
var _algolvJpgDefault = parcelHelpers.interopDefault(_algolvJpg);
var _ekpanelparllangJpg = require("../Assets/products/Ekpanelparllang.jpg");
var _ekpanelparllangJpgDefault = parcelHelpers.interopDefault(_ekpanelparllangJpg);
var _extrembreddTrallJpg = require("../Assets/products/ExtrembreddTrall.jpg");
var _extrembreddTrallJpgDefault = parcelHelpers.interopDefault(_extrembreddTrallJpg);
var _smygJpg = require("../Assets/products/Smyg.jpg");
var _smygJpgDefault = parcelHelpers.interopDefault(_smygJpg);
var _vhus1Jpg = require("../Assets/products/VHus1.jpg");
var _vhus1JpgDefault = parcelHelpers.interopDefault(_vhus1Jpg);
var _fasPanelJpg = require("../Assets/products/fas-panel.jpg");
var _fasPanelJpgDefault = parcelHelpers.interopDefault(_fasPanelJpg);
var _taklistAlJpg = require("../Assets/products/TaklistAl.jpg");
var _taklistAlJpgDefault = parcelHelpers.interopDefault(_taklistAlJpg);
var _askfoderJpg = require("../Assets/products/Askfoder.jpg");
var _askfoderJpgDefault = parcelHelpers.interopDefault(_askfoderJpg);
var _taklistEkJpg = require("../Assets/products/TaklistEk.jpg");
var _taklistEkJpgDefault = parcelHelpers.interopDefault(_taklistEkJpg);
var _golvEkListJpg = require("../Assets/products/GolvEkList.jpg");
var _golvEkListJpgDefault = parcelHelpers.interopDefault(_golvEkListJpg);
const Floors = [
    {
        name: "Massivt Ek golv",
        description: "Ek 19*205 (t\xe4ckande 195 m.m).",
        price: "Se tabell f\xf6r pris per kvm inkl moms",
        image: (0, _ekgolvJpgDefault.default)
    },
    {
        name: "Algolv",
        description: "Al passar inte i utrymmen med h\xe5rt slitage, men fungerar utm\xe4rkt i t.ex. sovrum. Det \xe4r ett mjukt tr\xe4slag \u2013 likt furu.",
        price: "Se tabell f\xf6r pris per kvm inkl moms",
        image: (0, _algolvJpgDefault.default)
    }
];
const Strips = [
    {
        name: "Taklist Al 19*67",
        description: "Vacker taklist som passar till Bastupanel i Al.",
        price: "45 kr lpm inkl moms",
        image: (0, _taklistAlJpgDefault.default)
    },
    {
        name: "Askfoder 22*120",
        description: "Ett 1800-tals foder med sitt ursprung i sk\xe5ne.",
        price: "87 kr lpm inkl moms",
        image: (0, _askfoderJpgDefault.default)
    },
    {
        name: "Smyg och Foder i Ek",
        description: "Smyg 16*195. Foder 12*62 ",
        price: "Smyg: 186 kr lpm. Foder: 36kr lmp ink moms",
        image: (0, _smygJpgDefault.default)
    },
    {
        name: "Taklist Ek",
        description: "Taklist 22*67",
        price: "56 kr lpm inkl moms",
        image: (0, _taklistEkJpgDefault.default)
    },
    {
        name: "Golvlist 22*145 Ek",
        description: "Ett vackert 1800tals foder h\xe4r i massiv Ek",
        price: "148 kr lpm inkl moms",
        image: (0, _golvEkListJpgDefault.default)
    }
];
const Panels = [
    {
        name: "Bastupanel 15*70(63) Obehandlad",
        description: "(svensk al i naturkvalitet) Varm och gemytlig med egenskaper som l\xe4mpar sig i bastumil\xf6.",
        price: "enl \xf6k",
        image: (0, _fasPanelJpgDefault.default)
    },
    {
        name: "Fas Panel 15*70(63) Obehandlad",
        description: "(svensk al i naturkvalitet) Vacker panel som l\xe4mpar sig f\xf6r b\xe5de Bastu och vanliga utrymme",
        price: "enl \xf6k",
        image: (0, _fasPanelJpgDefault.default)
    },
    {
        name: "Alpanel 15*95",
        description: "Kvistfri alpanel, kapad efter \xf6nskem\xe5l",
        price: "39 kr/lpm inkl moms",
        image: (0, _fasPanelJpgDefault.default)
    }
];
const products = [
    {
        name: "Alpanel 15*90 (Bangsund)",
        description: "Panel f\xf6r liggande montering i naturkvalitet.",
        price: "29 kr/lpm inkl moms",
        image: (0, _alpanelJpgDefault.default)
    },
    {
        name: "Bastupanel softline 15*95",
        description: "Den klassiska profilen. Naturkvalitet",
        price: "29 kr/lpm inkl moms",
        image: (0, _bastuJpgDefault.default)
    },
    {
        name: "Ekpanel 15*90 (Bandsund liggande montering)",
        description: "Panel som ger ett exklusivt intryck.",
        price: "56 kr/lpm inkl moms",
        image: (0, _ekpanel1JpgDefault.default)
    },
    {
        name: "Ektrall 28*120 Rustik",
        description: "Svensk ek med rustikt utseende.",
        price: "42 kr/lpm inkl moms",
        image: (0, _altanekJpgDefault.default)
    },
    {
        name: "Massivt algolv 26*150",
        description: "Trevlig f\xe4rg som ger en varm och ombonad k\xe4nsla.",
        price: "795 kr/m2 inkl moms",
        image: (0, _algolv2JpgDefault.default)
    },
    {
        name: "Golvet med stort G Ek 21*205",
        description: "Unika golv efter best\xe4llning",
        price: "enl \xf6k",
        image: (0, _ekgolvJpgDefault.default)
    },
    {
        name: "P\xe4rlspont i ek 15*68",
        description: "Fin panel med mycket djup.",
        price: "46 kr/lpm inkl moms",
        image: (0, _ekpanelparllangJpgDefault.default)
    },
    {
        name: "Ektrall 28*195",
        description: "En extrem tilja av massiv ek.",
        price: "enl \xf6k",
        image: (0, _extrembreddTrallJpgDefault.default)
    },
    {
        name: "Smyg 16*205 och Foder 14*63",
        description: "Fin inramning/salning av f\xf6nster.",
        price: "smyg: 155 kr/lpm foder: 37 kr/lpm inkl moms",
        image: (0, _smygJpgDefault.default)
    },
    {
        name: "Utv\xe4ndig ekpanel 21*145",
        description: "Panelen som ger utsidan det exklusiva intrycket.",
        price: "64 kr/lpm inkl moms",
        image: (0, _vhus1JpgDefault.default)
    }
];
const useProductsList = ()=>{
    return {
        products,
        Panels,
        Strips,
        Floors
    };
};
exports.default = useProductsList;

},{"../Assets/products/Alpanel.jpg":"kFewl","../Assets/products/Bastu.jpg":"b6kNj","../Assets/products/Ekpanel1.jpg":"bwq4W","../Assets/products/Altanek.jpg":"28zdb","../Assets/products/algolv2.jpg":"1Bhiv","../Assets/products/Ekgolv.jpg":"9wLFh","../Assets/products/Algolv.jpg":"fczfL","../Assets/products/Ekpanelparllang.jpg":"4ywaa","../Assets/products/ExtrembreddTrall.jpg":"1DqYb","../Assets/products/Smyg.jpg":"cvcTJ","../Assets/products/VHus1.jpg":"gkQHV","../Assets/products/fas-panel.jpg":"7ajap","../Assets/products/TaklistAl.jpg":"gGvDv","../Assets/products/Askfoder.jpg":"2keSn","../Assets/products/TaklistEk.jpg":"i5dnF","../Assets/products/GolvEkList.jpg":"jJg2H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kFewl":[function(require,module,exports) {
module.exports = require("af506b990b210c90").getBundleURL("6RWRt") + "Alpanel.7e119411.jpg" + "?" + Date.now();

},{"af506b990b210c90":"lgJ39"}],"b6kNj":[function(require,module,exports) {
module.exports = require("cb30ea609c3e6ee2").getBundleURL("6RWRt") + "Bastu.0193208e.jpg" + "?" + Date.now();

},{"cb30ea609c3e6ee2":"lgJ39"}],"bwq4W":[function(require,module,exports) {
module.exports = require("86f5b4da1bd3318c").getBundleURL("6RWRt") + "Ekpanel1.5389ad71.jpg" + "?" + Date.now();

},{"86f5b4da1bd3318c":"lgJ39"}],"28zdb":[function(require,module,exports) {
module.exports = require("67a88618d050e619").getBundleURL("6RWRt") + "Altanek.2a4a77b7.jpg" + "?" + Date.now();

},{"67a88618d050e619":"lgJ39"}],"1Bhiv":[function(require,module,exports) {
module.exports = require("8e67c4888dc9ed32").getBundleURL("6RWRt") + "algolv2.ce602fe6.jpg" + "?" + Date.now();

},{"8e67c4888dc9ed32":"lgJ39"}],"9wLFh":[function(require,module,exports) {
module.exports = require("9d649c95b2a43c7").getBundleURL("6RWRt") + "Ekgolv.7df42050.jpg" + "?" + Date.now();

},{"9d649c95b2a43c7":"lgJ39"}],"fczfL":[function(require,module,exports) {
module.exports = require("c1bc921f8e8365e3").getBundleURL("6RWRt") + "Algolv.9bbb0776.jpg" + "?" + Date.now();

},{"c1bc921f8e8365e3":"lgJ39"}],"4ywaa":[function(require,module,exports) {
module.exports = require("d7ee6b282d28a4cf").getBundleURL("6RWRt") + "Ekpanelparllang.2386a05e.jpg" + "?" + Date.now();

},{"d7ee6b282d28a4cf":"lgJ39"}],"1DqYb":[function(require,module,exports) {
module.exports = require("a011ee5257495cdf").getBundleURL("6RWRt") + "ExtrembreddTrall.03ac065f.jpg" + "?" + Date.now();

},{"a011ee5257495cdf":"lgJ39"}],"cvcTJ":[function(require,module,exports) {
module.exports = require("de29516d9d1265d8").getBundleURL("6RWRt") + "Smyg.8baec269.jpg" + "?" + Date.now();

},{"de29516d9d1265d8":"lgJ39"}],"gkQHV":[function(require,module,exports) {
module.exports = require("c575f3b591512a48").getBundleURL("6RWRt") + "VHus1.1303cfba.jpg" + "?" + Date.now();

},{"c575f3b591512a48":"lgJ39"}],"7ajap":[function(require,module,exports) {
module.exports = require("83e85c588a27cc89").getBundleURL("6RWRt") + "fas-panel.b0ed544d.jpg" + "?" + Date.now();

},{"83e85c588a27cc89":"lgJ39"}],"gGvDv":[function(require,module,exports) {
module.exports = require("799de857a12f3c09").getBundleURL("6RWRt") + "TaklistAl.a3cc509c.jpg" + "?" + Date.now();

},{"799de857a12f3c09":"lgJ39"}],"2keSn":[function(require,module,exports) {
module.exports = require("87eb730fd60b8dba").getBundleURL("6RWRt") + "Askfoder.abb044af.jpg" + "?" + Date.now();

},{"87eb730fd60b8dba":"lgJ39"}],"i5dnF":[function(require,module,exports) {
module.exports = require("6e02ee324a7a7d1d").getBundleURL("6RWRt") + "TaklistEk.b1b23a36.jpg" + "?" + Date.now();

},{"6e02ee324a7a7d1d":"lgJ39"}],"jJg2H":[function(require,module,exports) {
module.exports = require("a5e24462404c35a2").getBundleURL("6RWRt") + "GolvEkList.4ae5ea24.jpg" + "?" + Date.now();

},{"a5e24462404c35a2":"lgJ39"}],"64wxQ":[function(require,module,exports) {
module.exports = require("be6e9bb1ecced89b").getBundleURL("6RWRt") + "trees.338dee64.jpg" + "?" + Date.now();

},{"be6e9bb1ecced89b":"lgJ39"}],"4fJTC":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aRpp4","1xC6H"], null, "parcelRequire34be")

//# sourceMappingURL=PlanedProducts.0b242f48.js.map
