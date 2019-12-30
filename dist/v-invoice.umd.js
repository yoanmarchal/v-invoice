(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-invoice"] = factory();
	else
		root["v-invoice"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "v-invoice.umd." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpv_invoice"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpv_invoice"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0418":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=37e2f4b1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex mb-5 py-2"},[_c('From',{attrs:{"from":_vm.from}}),_c('Infos',{attrs:{"devis":_vm.devis}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=37e2f4b1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: ['devis', 'from'],
  components: {
    From: function From() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "2978"));
    },
    Infos: function Infos() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "37fe"));
    }
  }
});
// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "2978":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/From.vue?vue&type=template&id=5dbd0064&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-1"},[(_vm.from.logo !== null)?_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.from.logo}}):_vm._e(),_c('p',[_c('strong',[_vm._v(_vm._s(_vm.from.title))])]),_c('address',[_c('p',[_vm._v(_vm._s(_vm.from.road))]),_c('span',[_vm._v(_vm._s(_vm.from.poststalcode))]),_c('span',[_vm._v(_vm._s(_vm.from.city))])]),_c('p',[_vm._v("SIRET : "+_vm._s(_vm.from.siret))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/From.vue?vue&type=template&id=5dbd0064&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/From.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Fromvue_type_script_lang_js_ = ({
  props: ['from']
});
// CONCATENATED MODULE: ./src/components/From.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Fromvue_type_script_lang_js_ = (Fromvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/From.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Fromvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var From = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "37fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Infos.vue?vue&type=template&id=55d78606&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',[_c('span',[_vm._v("Facture ")]),_c('span',[_vm._v("N°")]),_c('span',[_vm._v("FC"+_vm._s(_vm.devis.id))])]),_c('p',[_c('span',[_vm._v("Date: ")]),_c('span',[_vm._v(_vm._s(_vm._f("date")(_vm.devis.date)))])]),_c('p',[_c('span',[_vm._v("Code Client: ")]),_c('span',[_vm._v("CL")]),_c('span',[_vm._v(_vm._s(_vm.devis.client.id))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Infos.vue?vue&type=template&id=55d78606&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Infos.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Infosvue_type_script_lang_js_ = ({
  name: 'infos',
  props: ['devis']
});
// CONCATENATED MODULE: ./src/components/Infos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Infosvue_type_script_lang_js_ = (Infosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Infos.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Infosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Infos = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3845":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/To.vue?vue&type=template&id=e78d905c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-end mb-5"},[_c('div',[_c('strong',[_vm._v(_vm._s(_vm.devis.client.title))]),_c('address',[_c('p',[_vm._v(_vm._s(_vm.devis.client.road))]),_c('span',[_vm._v(_vm._s(_vm.devis.client.postalcode))]),_c('span',[_vm._v(_vm._s(_vm.devis.client.city))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/To.vue?vue&type=template&id=e78d905c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/To.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tovue_type_script_lang_js_ = ({
  name: 'to',
  props: ['devis']
});
// CONCATENATED MODULE: ./src/components/To.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tovue_type_script_lang_js_ = (Tovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/To.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var To = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "43b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Title.vue?vue&type=template&id=0c568034&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{staticClass:"mb-5"},[_vm._v(_vm._s(_vm.title))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Title.vue?vue&type=template&id=0c568034&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Title.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  name: 'title',
  props: ['title']
});
// CONCATENATED MODULE: ./src/components/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Title.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Title = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5c2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TableProducts.vue?vue&type=template&id=5f227dfd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table w-full text-right mb-5"},[_vm._m(0),_c('tbody',_vm._l((_vm.products),function(item){return _c('tr',{key:item.id},[_c('td',{staticClass:"py-1"},[_vm._v(_vm._s(item.id))]),_c('td',{staticClass:"py-1"},[_vm._v(_vm._s(item.title))]),_c('td',{staticClass:"py-1"},[_vm._v(_vm._s(item.quantity))]),_c('td',{staticClass:"py-1"},[_vm._v(_vm._s(_vm._f("currency")(item.price)))]),_c('td',{staticClass:"py-1"},[_vm._v(_vm._s(_vm._f("currency")(item.price * item.quantity)))])])}),0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',{staticClass:"border-black border-b"},[_c('tr',[_c('th',{staticClass:"py-1"},[_vm._v("Ref")]),_c('th',{staticClass:"py-1"},[_vm._v("Description")]),_c('th',{staticClass:"py-1"},[_vm._v("Quantité")]),_c('th',{staticClass:"py-1"},[_vm._v("Prix")]),_c('th',{staticClass:"py-1"},[_vm._v("Total")])])])}]


// CONCATENATED MODULE: ./src/components/TableProducts.vue?vue&type=template&id=5f227dfd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TableProducts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TableProductsvue_type_script_lang_js_ = ({
  props: ['products']
});
// CONCATENATED MODULE: ./src/components/TableProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TableProductsvue_type_script_lang_js_ = (TableProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/TableProducts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TableProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableProducts = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "691e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentMode.vue?vue&type=template&id=cd95e606&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"mb-5"},[_vm._v("Mode de paiement : "+_vm._s(_vm.paymentmode))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PaymentMode.vue?vue&type=template&id=cd95e606&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentMode.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var PaymentModevue_type_script_lang_js_ = ({
  props: ['paymentmode']
});
// CONCATENATED MODULE: ./src/components/PaymentMode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PaymentModevue_type_script_lang_js_ = (PaymentModevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/PaymentMode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PaymentModevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PaymentMode = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header["default"]; });
__webpack_require__.d(components_namespaceObject, "Invoice", function() { return Invoice; });
__webpack_require__.d(components_namespaceObject, "From", function() { return From["default"]; });
__webpack_require__.d(components_namespaceObject, "To", function() { return To["default"]; });
__webpack_require__.d(components_namespaceObject, "Infos", function() { return Infos["default"]; });
__webpack_require__.d(components_namespaceObject, "Title", function() { return Title["default"]; });
__webpack_require__.d(components_namespaceObject, "PaymentMode", function() { return PaymentMode["default"]; });
__webpack_require__.d(components_namespaceObject, "TableProducts", function() { return TableProducts["default"]; });
__webpack_require__.d(components_namespaceObject, "TotalTable", function() { return TotalTable; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer["default"]; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/components/Header.vue + 4 modules
var Header = __webpack_require__("0418");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Invoice.vue?vue&type=template&id=b7e8566e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container  mx-auto"},[_c('Header',{attrs:{"devis":_vm.devis,"from":_vm.from}}),_c('To',{attrs:{"devis":_vm.devis}}),_c('Title',{attrs:{"title":_vm.title}}),_c('PaymentMode',{attrs:{"paymentmode":_vm.config.title}}),_c('TableProducts',{attrs:{"products":_vm.products}}),_c('SubTable',{attrs:{"devis":_vm.devis,"products":_vm.products,"LegalInfos":_vm.config.LegalInfos}}),_c('Footer',{attrs:{"content":_vm.config.footerContent}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Invoice.vue?vue&type=template&id=b7e8566e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Invoice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Invoicevue_type_script_lang_js_ = ({
  name: 'Invoice',
  components: {
    'Header': function Header() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "0418"));
    },
    'Footer': function Footer() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "fd2d"));
    },
    'To': function To() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "3845"));
    },
    'Title': function Title() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "43b3"));
    },
    'PaymentMode': function PaymentMode() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "691e"));
    },
    'TableProducts': function TableProducts() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "5c2c"));
    },
    'SubTable': function SubTable() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "ae6e"));
    }
  },
  props: ['devis', 'config', 'products', 'from'],
  computed: {
    title: function title() {
      return this.config.title;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Invoice.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Invoicevue_type_script_lang_js_ = (Invoicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Invoice.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Invoicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Invoice = (component.exports);
// EXTERNAL MODULE: ./src/components/From.vue + 4 modules
var From = __webpack_require__("2978");

// EXTERNAL MODULE: ./src/components/To.vue + 4 modules
var To = __webpack_require__("3845");

// EXTERNAL MODULE: ./src/components/Infos.vue + 4 modules
var Infos = __webpack_require__("37fe");

// EXTERNAL MODULE: ./src/components/Title.vue + 4 modules
var Title = __webpack_require__("43b3");

// EXTERNAL MODULE: ./src/components/PaymentMode.vue + 4 modules
var PaymentMode = __webpack_require__("691e");

// EXTERNAL MODULE: ./src/components/TableProducts.vue + 4 modules
var TableProducts = __webpack_require__("5c2c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TotalTable.vue?vue&type=template&id=2c3fbfa1&
var TotalTablevue_type_template_id_2c3fbfa1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex mb-5"},[_c('div',{staticClass:"flex-1"},[_vm._v(" "+_vm._s(_vm.LegalInfos)+" ")]),_c('div',{staticClass:"flex-1"},[_c('table',{staticClass:"table w-full text-right"},[_c('tbody',[_c('tr',[_c('td',[_vm._v("Total")]),_c('td',[_vm._v(_vm._s(_vm._f("currency")(_vm.total)))])]),_c('tr',[_c('td',[_vm._v("Déjà réglé")]),_c('td',[_vm._v(_vm._s(_vm._f("currency")(_vm.devis.alreadypaid)))])]),_c('tr',[_c('td',[_vm._v("Net à payer")]),_c('td',[_vm._v(_vm._s(_vm._f("currency")(_vm.toPay)))])])])])])])}
var TotalTablevue_type_template_id_2c3fbfa1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TotalTable.vue?vue&type=template&id=2c3fbfa1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TotalTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TotalTablevue_type_script_lang_js_ = ({
  props: ['devis', 'LegalInfos'],
  computed: {
    total: function total() {
      return this.devis.products.map(function (product) {
        return product.price * product.quantity;
      }).reduce(function (sum, elem) {
        return sum + elem;
      });
    },
    toPay: function toPay() {
      return this.total - this.devis.alreadypaid;
    }
  }
});
// CONCATENATED MODULE: ./src/components/TotalTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TotalTablevue_type_script_lang_js_ = (TotalTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TotalTable.vue





/* normalize component */

var TotalTable_component = Object(componentNormalizer["a" /* default */])(
  components_TotalTablevue_type_script_lang_js_,
  TotalTablevue_type_template_id_2c3fbfa1_render,
  TotalTablevue_type_template_id_2c3fbfa1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TotalTable = (TotalTable_component.exports);
// EXTERNAL MODULE: ./src/components/Footer.vue + 4 modules
var Footer = __webpack_require__("fd2d");

// CONCATENATED MODULE: ./src/components/index.js











// CONCATENATED MODULE: ./src/install.js


var install_install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var key in components_namespaceObject) {
    var _key = options.prefix ? options.prefix + key : key;

    Vue.component(_key, components_namespaceObject[key]);
  }
}; // auto install


if (typeof window !== 'undefined' && window.Vue) {
  install_install(window.Vue);
}


// CONCATENATED MODULE: ./src/index.js


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "Header", function() { return Header["default"]; });
/* concated harmony reexport Invoice */__webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
/* concated harmony reexport From */__webpack_require__.d(__webpack_exports__, "From", function() { return From["default"]; });
/* concated harmony reexport To */__webpack_require__.d(__webpack_exports__, "To", function() { return To["default"]; });
/* concated harmony reexport Infos */__webpack_require__.d(__webpack_exports__, "Infos", function() { return Infos["default"]; });
/* concated harmony reexport Title */__webpack_require__.d(__webpack_exports__, "Title", function() { return Title["default"]; });
/* concated harmony reexport PaymentMode */__webpack_require__.d(__webpack_exports__, "PaymentMode", function() { return PaymentMode["default"]; });
/* concated harmony reexport TableProducts */__webpack_require__.d(__webpack_exports__, "TableProducts", function() { return TableProducts["default"]; });
/* concated harmony reexport TotalTable */__webpack_require__.d(__webpack_exports__, "TotalTable", function() { return TotalTable; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer["default"]; });
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return install_install; });




/***/ }),

/***/ "fd2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"48c4c585-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=template&id=ca34a840&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('small',[_vm._v(_vm._s(_vm.content))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=template&id=ca34a840&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  props: ['content']
});
// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ })

/******/ });
});
//# sourceMappingURL=v-invoice.umd.js.map