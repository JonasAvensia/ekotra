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
})({"kbuL7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a6083ebb5574557b";
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

},{}],"csIkc":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d30b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d30b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _priceFile = require("../../Lists/PriceFile");
var _value = require("../../Shared/value");
var _react = require("@glitz/react");
var _button = require("./Button");
var _h2 = require("../../Shared/Generic/H2");
var _h2Default = parcelHelpers.interopDefault(_h2);
var _core = require("@glitz/core");
function TextSection() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h2Default.default), {
                children: "Ekstol"
            }, void 0, false, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _value.Text), {
                children: "Efterfr\xe5gan p\xe5 ek och ekstolpar \xf6kar stadigt. D\xe4rf\xf6r har vi \xf6kat andelen s\xe5gad ek i produktionen. Vi erbjuder ekstolpar i alla vanliga dimensioner."
            }, void 0, false, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _value.Text), {
                children: "Alla priser nedan \xe4r exkl. moms."
            }, void 0, false, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/SmallList.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = TextSection;
function TypeTextSection() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h2Default.default), {
                children: "Samarbete f\xf6r Kompletterade Stall och Ekvirke"
            }, void 0, false, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _value.Text), {
                children: "Vi s\xf6ker en samarbetspartner f\xf6r leverans av kompletta stall, inklusive metallsektioner, skjutd\xf6rrar med mera. H\xf6r g\xe4rna av dig om du vill samarbeta med oss!"
            }, void 0, false, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _value.Text), {
                children: "Priserna \xe4r per kvm inkl moms exkl frakt."
            }, void 0, false, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/SmallList.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c1 = TypeTextSection;
function CostList({ list }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(WrapperBlock, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowHeader, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Artikelnr",
                        children: "Dimension"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Typ",
                        children: "L\xe4ngd"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Dimension",
                        children: "Pris/st"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Tr\xe4slag",
                        children: "V\xe4ssningskostnad"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            list.map((row, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Row, {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.dimension
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.length
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.pricePerUnit
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.sharpeningCost
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "src/Feature/Components/SmallList.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/SmallList.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c2 = CostList;
function PricePerLpmList({ list }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(WrapperBlock, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowHeaderTwo, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Artikelnr",
                        children: "Dimension"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Typ",
                        children: "Pris per lpm"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            list.map((row, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowTwo, {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.dimension
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.pricePerLpm
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "src/Feature/Components/SmallList.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/SmallList.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c3 = PricePerLpmList;
function TypeList({ list }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(WrapperBlock, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowHeaderTwo, {
                css: {
                    gridTemplateColumns: "1fr 1fr 1fr"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Tr\xe4slag",
                        children: "Tr\xe4slag"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Dimension",
                        children: "Dimension"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Pris per/kvm",
                        children: "Pris per/kvm"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            list.map((row, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowTwo, {
                    css: {
                        gridTemplateColumns: "1fr 1fr 1fr"
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.type
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.dimension
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.pricePerKvm || row.pricePerLpm
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        " "
                    ]
                }, index, true, {
                    fileName: "src/Feature/Components/SmallList.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/SmallList.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c4 = TypeList;
function AdditionalProductsList({ list }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(WrapperBlock, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowHeaderTwo, {
                css: {
                    gridTemplateColumns: "1fr 1fr 1fr"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Beskrivning",
                        children: "Beskrivning"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "L\xe4ngder",
                        children: "L\xe4ngder"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonCell, {
                        ariaLabel: "Pris per/kvm",
                        children: "Pris per/kvm"
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            list.map((row, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(RowTwo, {
                    css: {
                        gridTemplateColumns: "1fr 1fr 1fr"
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.description
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.lengths
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Cell, {
                            children: row.pricePerM2
                        }, void 0, false, {
                            fileName: "src/Feature/Components/SmallList.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        " "
                    ]
                }, index, true, {
                    fileName: "src/Feature/Components/SmallList.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/SmallList.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c5 = AdditionalProductsList;
function SmallList({ showType, showAdditionalProducts }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Container, {
        children: [
            showType && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TypeTextSection, {}, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TypeList, {
                        list: (0, _priceFile.ekstolp).woodProducts
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showAdditionalProducts && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(AdditionalProductsList, {
                list: (0, _priceFile.ekstolp).additionalProducts
            }, void 0, false, {
                fileName: "src/Feature/Components/SmallList.tsx",
                lineNumber: 150,
                columnNumber: 34
            }, this),
            !showType && !showAdditionalProducts && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextSection, {}, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(CostList, {
                        list: (0, _priceFile.ekstolp).dimensionsWithCosts
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(PricePerLpmList, {
                        list: (0, _priceFile.ekstolp).dimensionsWithPricePerLpm
                    }, void 0, false, {
                        fileName: "src/Feature/Components/SmallList.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/SmallList.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c6 = SmallList;
exports.default = SmallList;
const Container = (0, _react.styled)((0, _value.Block), {});
_c7 = Container;
const WrapperBlock = (0, _react.styled).div({
    display: "block",
    position: "relative",
    margin: {
        top: (0, _value.large)
    }
});
_c8 = WrapperBlock;
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
_c9 = TextContainer;
const Row = (0, _react.styled).div({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    border: {
        bottom: {
            width: "1px",
            style: "solid",
            color: (0, _value.DefaultGreen)
        }
    }
});
_c10 = Row;
const RowTwo = (0, _react.styled).div({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    border: {
        bottom: {
            width: "1px",
            style: "solid",
            color: (0, _value.DefaultGreen)
        }
    }
});
_c11 = RowTwo;
const RowHeader = (0, _react.styled)(Row, {
    fontWeight: "bold",
    backgroundColor: "#fff"
});
_c12 = RowHeader;
const RowHeaderTwo = (0, _react.styled)(RowTwo, {
    fontWeight: "bold",
    backgroundColor: "#fff"
});
_c13 = RowHeaderTwo;
const Cell = (0, _react.styled).div({
    padding: {
        y: "10px"
    }
});
_c14 = Cell;
const ButtonCell = (0, _react.styled)((0, _button.PlainButton), {
    whiteSpace: "nowrap",
    padding: {
        y: "10px"
    },
    fontWeight: "bold"
});
_c15 = ButtonCell;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
$RefreshReg$(_c, "TextSection");
$RefreshReg$(_c1, "TypeTextSection");
$RefreshReg$(_c2, "CostList");
$RefreshReg$(_c3, "PricePerLpmList");
$RefreshReg$(_c4, "TypeList");
$RefreshReg$(_c5, "AdditionalProductsList");
$RefreshReg$(_c6, "SmallList");
$RefreshReg$(_c7, "Container");
$RefreshReg$(_c8, "WrapperBlock");
$RefreshReg$(_c9, "TextContainer");
$RefreshReg$(_c10, "Row");
$RefreshReg$(_c11, "RowTwo");
$RefreshReg$(_c12, "RowHeader");
$RefreshReg$(_c13, "RowHeaderTwo");
$RefreshReg$(_c14, "Cell");
$RefreshReg$(_c15, "ButtonCell");

  $parcel$ReactRefreshHelpers$d30b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../../Lists/PriceFile":"4fJTC","../../Shared/value":"9VKej","@glitz/react":"bAXm1","./Button":"at8Gv","../../Shared/Generic/H2":"au95a","@glitz/core":"5ehrf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["kbuL7"], null, "parcelRequire34be")

//# sourceMappingURL=SawedProducts.5574557b.js.map
