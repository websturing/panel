(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts-vue */ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_vue__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      page: {
        isLoading: true
      },
      url: {
        assets: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/images"
      },
      berita: [],
      chartOptions: {
        chart: {
          type: "column"
        },
        xAxis: {
          categories: []
        },
        series: [{
          data: []
        }]
      }
    };
  },
  created: function created() {
    this.getpermohonan();
  },
  computed: {
    topBerita: function topBerita() {
      if (this.berita.length == 0) return;
      return this.berita.reduce(function (a, b) {
        return Number(a.dibaca) > Number(b.dibaca) ? a : b;
      });
    }
  },
  methods: {
    getpermohonan: function getpermohonan() {
      var _this = this;

      this.page.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/Masterberita", {
        type: "RangeDate"
      }).then(function (r) {
        _this.berita = r.data;
        _this.page.isLoading = false; // this.chartOptions.series = r.data;

        var berita = _this.berita.slice(0, 30);

        for (var i = 0; i < berita.length; i++) {
          _this.chartOptions.series[0].data.push({
            name: _this.berita[i].judul,
            y: _this.berita[i].dibaca
          });

          _this.chartOptions.xAxis.categories.push(_this.berita[i].judul);
        }
      });
    }
  },
  components: {
    highcharts: highcharts_vue__WEBPACK_IMPORTED_MODULE_1__["Chart"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mg-t-120" }, [
    _c(
      "div",
      { staticClass: "br-pagebody" },
      [
        _c(
          "el-row",
          { staticClass: "pd-5", attrs: { gutter: 10 } },
          [
            _c(
              "el-col",
              { staticClass: "mg-b-20", attrs: { md: 24 } },
              [
                _c(
                  "el-row",
                  { attrs: { gutter: 10 } },
                  [
                    _c(
                      "el-col",
                      { attrs: { md: 8 } },
                      [
                        _c(
                          "el-card",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.page.isLoading,
                                expression: "page.isLoading"
                              }
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "pd-5 d-flex align-items-center" },
                              [
                                _c("ion-icon", {
                                  staticClass: "tx-50 tx-primary",
                                  attrs: { name: "layers-outline" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mg-l-20" }, [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                                    },
                                    [_vm._v("BERITA TERPOPULER")]
                                  ),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                        },
                                        [_vm._v(_vm._s(_vm.topBerita.dibaca))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "tx-11 tx-roboto tx-primary"
                                        },
                                        [_vm._v(_vm._s(_vm.topBerita.judul))]
                                      )
                                    : _vm._e()
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { md: 8 } },
                      [
                        _c(
                          "el-card",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.page.isLoading,
                                expression: "page.isLoading"
                              }
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "pd-5 d-flex align-items-center" },
                              [
                                _c("ion-icon", {
                                  staticClass: "tx-50 tx-primary",
                                  attrs: { name: "document-text-outline" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mg-l-20" }, [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                                    },
                                    [_vm._v("BERITA TERPOPULER")]
                                  ),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                        },
                                        [_vm._v(_vm._s(_vm.topBerita.dibaca))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "tx-11 tx-roboto tx-primary"
                                        },
                                        [_vm._v(_vm._s(_vm.topBerita.judul))]
                                      )
                                    : _vm._e()
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { md: 8 } },
                      [
                        _c(
                          "el-card",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.page.isLoading,
                                expression: "page.isLoading"
                              }
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "pd-5 d-flex align-items-center" },
                              [
                                _c("ion-icon", {
                                  staticClass: "tx-50 tx-primary",
                                  attrs: { name: "layers-outline" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mg-l-20" }, [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                                    },
                                    [_vm._v("BERITA TERPOPULER")]
                                  ),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                        },
                                        [_vm._v(_vm._s(_vm.topBerita.dibaca))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "tx-11 tx-roboto tx-primary"
                                        },
                                        [_vm._v(_vm._s(_vm.topBerita.judul))]
                                      )
                                    : _vm._e()
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  { staticClass: "mg-t-20" },
                  [
                    _c(
                      "el-card",
                      [
                        _c("pre", [_vm._v(_vm._s(_vm.chartOptions))]),
                        _vm._v(" "),
                        _c("highcharts", {
                          attrs: { options: _vm.chartOptions }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=96ac3b44& */ "./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=96ac3b44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);