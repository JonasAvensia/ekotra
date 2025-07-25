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
})({"3RogA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "80326a02ea772fba";
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

},{}],"4IVZq":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$54ca = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$54ca.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("@glitz/react");
var _core = require("@glitz/core");
var _value = require("../../Shared/value");
var _reactRouterDom = require("react-router-dom");
var _woodDummyJpg = require("../../Assets/wood-dummy.jpg");
var _woodDummyJpgDefault = parcelHelpers.interopDefault(_woodDummyJpg);
var _h3 = require("../../Shared/Generic/H3");
var _h3Default = parcelHelpers.interopDefault(_h3);
var _button = require("./Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _lazyLoadImage = require("./LazyLoadImage");
var _lazyLoadImageDefault = parcelHelpers.interopDefault(_lazyLoadImage);
var _sawedProducts1Jpg = require("../../Assets/sawed-products-1.jpg");
var _sawedProducts1JpgDefault = parcelHelpers.interopDefault(_sawedProducts1Jpg);
var _horseBoxJpg = require("../../Assets/products/horse-box.jpg");
var _horseBoxJpgDefault = parcelHelpers.interopDefault(_horseBoxJpg);
var _limfogAlmJpg = require("../../Assets/products/limfog-alm.jpg");
var _limfogAlmJpgDefault = parcelHelpers.interopDefault(_limfogAlmJpg);
function CardLinks() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Container, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Column, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        to: "/produkter/sagade-produkter",
                        "aria-label": "l\xe4s mer om s\xe5gade produkter",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledImage, {
                            src: (0, _sawedProducts1JpgDefault.default),
                            alt: "S\xe5gade produkter image"
                        }, void 0, false, {
                            fileName: "src/Feature/Components/CardLinks.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _react.styled).Div, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h3Default.default), {
                                        children: "S\xe5gade Produkter"
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Text, {
                                        children: "Vi erbjuder s\xe5gat l\xf6vtr\xe4 fr\xe5n de flesta svenska tr\xe4slag och i de flesta dimensioner."
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonContainer, {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledButton, {
                                    ariaLabel: "L\xe4s mer om s\xe5gade produkter",
                                    children: "L\xe4s mer"
                                }, void 0, false, {
                                    fileName: "src/Feature/Components/CardLinks.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/CardLinks.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Column, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        to: "/produkter/hyvlade-produkter",
                        "aria-label": "L\xe4s mer om hyvlade produkter",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledImage, {
                            src: (0, _woodDummyJpgDefault.default),
                            alt: "image of hyvlade produkter"
                        }, void 0, false, {
                            fileName: "src/Feature/Components/CardLinks.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _react.styled).Div, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h3Default.default), {
                                        children: "Hyvlade Produkter"
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Text, {
                                        children: "Med v\xe5rt nya hyvleri kan vi nu f\xf6r\xe4dla r\xe5varor fr\xe5n stock till f\xe4rdiga produkter som golv och lister. Vi erbjuder \xe4ven paneler i olika l\xf6vtr\xe4slag och utf\xf6randen."
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonContainer, {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledButton, {
                                    ariaLabel: "L\xe4s mer om hyvlade produkter",
                                    children: "L\xe4s mer"
                                }, void 0, false, {
                                    fileName: "src/Feature/Components/CardLinks.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/CardLinks.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Column, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        to: "/produkter/special-produkter",
                        "aria-label": "L\xe4s mer om special produkter",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledImage, {
                            src: (0, _horseBoxJpgDefault.default),
                            alt: "Image of Special produkter"
                        }, void 0, false, {
                            fileName: "src/Feature/Components/CardLinks.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _react.styled).Div, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h3Default.default), {
                                        children: "Special Produkter"
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Text, {
                                        children: "Vi s\xe5gar virke upp till 7 meter l\xe5ngt och med dimensioner upp till 400\xd7400 mm samt tillverkar specialbest\xe4llda paneler och lister efter kundens \xf6nskem\xe5l."
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonContainer, {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledButton, {
                                    ariaLabel: "L\xe4s mer",
                                    "aria-label": "L\xe4s mer om special produkter",
                                    children: "L\xe4s mer"
                                }, void 0, false, {
                                    fileName: "src/Feature/Components/CardLinks.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/CardLinks.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Column, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                        to: "/produkter/limfog",
                        "aria-label": "L\xe4s mer om limfog",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledImage, {
                            src: (0, _limfogAlmJpgDefault.default),
                            alt: "dummy"
                        }, void 0, false, {
                            fileName: "src/Feature/Components/CardLinks.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TextContainer, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _react.styled).Div, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h3Default.default), {
                                        children: "Limfog"
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Text, {
                                        children: "Vi erbjuder skr\xe4ddarsydda l\xf6sningar som hyllplan, bordsskivor och b\xe4nkskivor i kundanpassade m\xe5tt, f\xe4rdigputsade och med m\xf6jlighet till ytbehandling."
                                    }, void 0, false, {
                                        fileName: "src/Feature/Components/CardLinks.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(ButtonContainer, {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledButton, {
                                    to: "/produkter/limfog",
                                    ariaLabel: "L\xe4s mer om limfog",
                                    children: "L\xe4s mer"
                                }, void 0, false, {
                                    fileName: "src/Feature/Components/CardLinks.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "src/Feature/Components/CardLinks.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Feature/Components/CardLinks.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Feature/Components/CardLinks.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/CardLinks.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CardLinks;
exports.default = CardLinks;
const Container = (0, _react.styled)((0, _value.Block), {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    ...(0, _core.media)({
        minWidth: "1025px"
    }, {
        gridTemplateColumns: "1fr 1fr 1fr 1fr"
    })
});
_c1 = Container;
const Column = (0, _react.styled).div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff"
});
_c2 = Column;
const StyledImage = (0, _react.styled)((0, _lazyLoadImageDefault.default), {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "8px"
});
_c3 = StyledImage;
const TextContainer = (0, _react.styled).div({
    display: "flex",
    flexDirection: "column",
    flex: {
        grow: 1
    },
    justifyContent: "space-between",
    padding: {
        top: (0, _value.small)
    }
});
_c4 = TextContainer;
const Text = (0, _react.styled).span({
    margin: {
        top: (0, _value.small)
    }
});
_c5 = Text;
const ButtonContainer = (0, _react.styled).div({
    width: "100%",
    textAlign: "left",
    margin: {
        top: (0, _value.large)
    }
});
_c6 = ButtonContainer;
const StyledButton = (0, _react.styled)((0, _buttonDefault.default), {
    width: "100%"
});
_c7 = StyledButton;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "CardLinks");
$RefreshReg$(_c1, "Container");
$RefreshReg$(_c2, "Column");
$RefreshReg$(_c3, "StyledImage");
$RefreshReg$(_c4, "TextContainer");
$RefreshReg$(_c5, "Text");
$RefreshReg$(_c6, "ButtonContainer");
$RefreshReg$(_c7, "StyledButton");

  $parcel$ReactRefreshHelpers$54ca.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@glitz/react":"bAXm1","@glitz/core":"5ehrf","../../Shared/value":"9VKej","react-router-dom":"9xmpe","../../Assets/wood-dummy.jpg":"7pkP5","../../Shared/Generic/H3":"iGEMB","./Button":"at8Gv","./LazyLoadImage":"6qRec","../../Assets/sawed-products-1.jpg":"5i2va","../../Assets/products/horse-box.jpg":"5UYqN","../../Assets/products/limfog-alm.jpg":"kEh86","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7pkP5":[function(require,module,exports) {
module.exports = require("51282c12f10e646d").getBundleURL("b0o8h") + "wood-dummy.7930ec0e.jpg" + "?" + Date.now();

},{"51282c12f10e646d":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5i2va":[function(require,module,exports) {
module.exports = require("1dc1eb2983c7cb35").getBundleURL("b0o8h") + "sawed-products-1.e900d10c.jpg" + "?" + Date.now();

},{"1dc1eb2983c7cb35":"lgJ39"}],"5UYqN":[function(require,module,exports) {
module.exports = require("c93bb92e4eff8bd6").getBundleURL("b0o8h") + "horse-box.6b4108c3.jpg" + "?" + Date.now();

},{"c93bb92e4eff8bd6":"lgJ39"}],"kEh86":[function(require,module,exports) {
module.exports = require("b1bb73a84bb0e4a2").getBundleURL("b0o8h") + "limfog-alm.964d5e46.jpg" + "?" + Date.now();

},{"b1bb73a84bb0e4a2":"lgJ39"}],"5S2tu":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$9fc2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9fc2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("@glitz/react");
var _value = require("../../Shared/value");
var _h2 = require("../../Shared/Generic/H2");
var _h2Default = parcelHelpers.interopDefault(_h2);
var _core = require("@glitz/core");
var _typography = require("../../Shared/typography");
const TextList = ()=>{
    const products = [
        "Bastupanel i AL/ASP",
        "Bastulave i olika dimensioner",
        "Dekorpaneler i al, alm, ask, asp och ek m.m",
        "Utv\xe4ndiga arkitektpaneler",
        "Alla typer av listverk",
        "Ekstolpe",
        "Ektrall"
    ];
    const woods = [
        "AL",
        "ALM",
        "ASK",
        "ASP",
        "BJ\xd6RK",
        "EK",
        "Samt mindre partier av udda tr\xe4slag som Lind, S\xe4lg och K\xf6rsb\xe4r.",
        "\xc4ven Gran och Fur i mindre skala."
    ];
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _value.Block), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Container, {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Section, {
                    title: "Vad vi erbjuder",
                    items: products
                }, void 0, false, {
                    fileName: "src/Feature/Components/TextList.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Section, {
                    title: "Tr\xe4slag vi \xe4lskar att jobba med",
                    items: woods
                }, void 0, false, {
                    fileName: "src/Feature/Components/TextList.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/Feature/Components/TextList.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/Feature/Components/TextList.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, undefined);
};
_c = TextList;
const Section = ({ title, items })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Wrapper, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TitleWrapper, {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _h2Default.default), {
                    children: title
                }, void 0, false, {
                    fileName: "src/Feature/Components/TextList.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "src/Feature/Components/TextList.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, undefined),
            items.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Text, {
                    children: item
                }, index, false, {
                    fileName: "src/Feature/Components/TextList.tsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, undefined))
        ]
    }, void 0, true, {
        fileName: "src/Feature/Components/TextList.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, undefined);
_c1 = Section;
exports.default = TextList;
const Container = (0, _react.styled).div({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    ...(0, _core.media)({
        minWidth: "1025px"
    }, {
        gridTemplateColumns: "1fr 1fr"
    }),
    padding: {
        bottom: (0, _value.medium)
    }
});
_c2 = Container;
const Wrapper = (0, _react.styled).ul({
    display: "flex",
    flexDirection: "column"
});
_c3 = Wrapper;
const TitleWrapper = (0, _react.styled).div({
    marginBottom: (0, _value.large),
    border: {
        bottom: {
            width: "1px",
            style: "solid",
            color: (0, _value.DefaultGreen)
        }
    }
});
_c4 = TitleWrapper;
const Text = (0, _react.styled).li({
    fontSize: (0, _typography.gamma),
    fontWeight: "700",
    margin: {
        left: (0, _value.large),
        bottom: (0, _value.small)
    }
});
_c5 = Text;
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "TextList");
$RefreshReg$(_c1, "Section");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "Wrapper");
$RefreshReg$(_c4, "TitleWrapper");
$RefreshReg$(_c5, "Text");

  $parcel$ReactRefreshHelpers$9fc2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@glitz/react":"bAXm1","../../Shared/value":"9VKej","../../Shared/Generic/H2":"au95a","@glitz/core":"5ehrf","../../Shared/typography":"iZltJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["3RogA"], null, "parcelRequire34be")

//# sourceMappingURL=HomePage.ea772fba.js.map
