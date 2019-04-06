((typeof self !== 'undefined' ? self : this)["webpackJsonpv_invoice"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpv_invoice"] || []).push([[4],{

/***/ "ae6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"495576dd-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Subtable.vue?vue&type=template&id=45b2d79a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex mb-5"},[_c('div',{staticClass:"flex-1"},[_vm._v("\n    "+_vm._s(_vm.LegalInfos)+"\n  ")]),_c('div',{staticClass:"flex-1"},[_c('table',{staticClass:"table w-full text-right"},[_c('tbody',[_c('tr',[_c('td',[_vm._v("Total")]),_c('td',[_vm._v(_vm._s(_vm._f("currency")(_vm.total,'€', 0, { symbolOnLeft: false })))])]),_c('tr',[_c('td',[_vm._v("Déjà réglé")]),_c('td',[_vm._v(_vm._s(_vm._f("currency")(_vm.devis.alreadypaid,'€', 0, { symbolOnLeft: false })))])]),_c('tr',[_c('td',[_vm._v("Net à payer")]),_c('td',[_vm._v(_vm._s(_vm._f("currency")(_vm.toPay,'€', 0, { symbolOnLeft: false })))])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Subtable.vue?vue&type=template&id=45b2d79a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Subtable.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Subtablevue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/Subtable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Subtablevue_type_script_lang_js_ = (Subtablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Subtable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Subtablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Subtable = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=v-invoice.umd.4.js.map