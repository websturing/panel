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
      paging: {
        list: 0,
        end: 10,
        search: null,
        size: 10,
        page: 1
      },
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
    handleSizeChange: function handleSizeChange(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.paging.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;
      this.paging.list = newstart;
      this.paging.end = newend;
      console.log("current page: ".concat(val));
    },
    getpermohonan: function getpermohonan() {
      var _this = this;

      this.page.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/Masterberita", {
        type: "RangeDate"
      }).then(function (r) {
        _this.berita = r.data;
        _this.page.isLoading = false; // this.chartOptions.series = r.data;

        var berita = _this.berita.slice(0, 10);

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.numbering {\n  border-radius: 8px;\n  background-color: #1bc5bd;\n  text-align: center;\n  height: 100%;\n  font-size: 25px;\n  font-weight: bold;\n  color: #c9f7f5;\n}\n.table-custom {\n  width: 100%;\n  padding: 20px;\n}\n.table-custom td {\n  padding: 5px 5px 5px 5px;\n}\n.table-custom th {\n  padding: 15px;\n  background-color: #f3f6f9;\n  border-radius: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
                                    [
                                      _vm._v(
                                        "\n                    BERITA TERPOPULER\n                  "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.topBerita.dibaca) +
                                              "\n                  "
                                          )
                                        ]
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
                                    [
                                      _vm._v(
                                        "\n                    BERITA TERPOPULER\n                  "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.topBerita.dibaca) +
                                              "\n                  "
                                          )
                                        ]
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
                                    [
                                      _vm._v(
                                        "\n                    BERITA TERPOPULER\n                  "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.topBerita
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.topBerita.dibaca) +
                                              "\n                  "
                                          )
                                        ]
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
                  { staticClass: "mg-t-20", attrs: { gutter: 10 } },
                  [
                    _c(
                      "el-col",
                      { attrs: { md: 18 } },
                      [
                        _c(
                          "el-card",
                          {
                            staticStyle: {
                              "border-radius": "8px",
                              padding: "20px"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex align-items-center justify-content-between mg-b-30"
                              },
                              [
                                _c("div", [
                                  _c(
                                    "h6",
                                    {
                                      staticClass:
                                        "tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                                    },
                                    [
                                      _vm._v(
                                        "\n                    DATA BERITA YANG DI PUBLISH\n                  "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "mg-b-0 tx-gray-600" },
                                    [
                                      _vm._v(
                                        "\n                    jumlah data " +
                                          _vm._s(_vm.berita.length) +
                                          "\n                  "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "wd-230" },
                                  [
                                    _c("el-input", {
                                      attrs: {
                                        placeholder: "Cari Data Permohonan ...",
                                        "prefix-icon": "el-icon-search"
                                      },
                                      model: {
                                        value: _vm.paging.search,
                                        callback: function($$v) {
                                          _vm.$set(_vm.paging, "search", $$v)
                                        },
                                        expression: "paging.search"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table-custom table-valign-middle mg-b-0 table-hover"
                              },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", [_vm._v("Judul Berita")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("dibaca")]),
                                    _vm._v(" "),
                                    _c("th")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(
                                    _vm.berita.slice(
                                      _vm.paging.list,
                                      _vm.paging.end
                                    ),
                                    function(i, Index) {
                                      return _c("tr", { key: Index }, [
                                        _c(
                                          "td",
                                          { staticClass: "pd-l-0-force" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tx-13 tx-bold mg-b-0"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(Index + 1) +
                                                    ".    " +
                                                    _vm._s(i.judul) +
                                                    "\n                      "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "pd-l-0-force" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "tx-13 tx-bold mg-b-0"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(i.dibaca) +
                                                    "\n                      "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "pd-l-0-force" },
                                          [
                                            _c(
                                              "el-tooltip",
                                              {
                                                attrs: {
                                                  content:
                                                    "Publish / unPublish Berita",
                                                  placement: "top"
                                                }
                                              },
                                              [
                                                _c("el-switch", {
                                                  attrs: {
                                                    "active-color": "#13ce66",
                                                    "inactive-color": "#ff4949",
                                                    "active-value": "true",
                                                    "inactive-value": "false"
                                                  },
                                                  model: {
                                                    value: i.publish,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        i,
                                                        "publish",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "i.publish"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("el-button", {
                                              attrs: {
                                                size: "small",
                                                type: "text",
                                                icon: "el-icon-delete-solid"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("el-button", {
                                              attrs: {
                                                size: "large",
                                                icon: "el-icon-open",
                                                type: "text"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ])
                                    }
                                  ),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "el-row",
                              { attrs: { justify: "end", type: "flex" } },
                              [
                                _c(
                                  "el-col",
                                  { attrs: { md: 10 } },
                                  [
                                    _c("el-pagination", {
                                      staticStyle: { float: "right" },
                                      attrs: {
                                        background: "",
                                        "current-page": _vm.paging.page,
                                        "page-size": _vm.paging.size,
                                        "page-count": _vm.paging.pagecount,
                                        layout: "total, prev, pager, next",
                                        total: _vm.berita.length
                                      },
                                      on: {
                                        "size-change": _vm.handleSizeChange,
                                        "current-change":
                                          _vm.handleCurrentChange,
                                        "update:currentPage": function($event) {
                                          return _vm.$set(
                                            _vm.paging,
                                            "page",
                                            $event
                                          )
                                        },
                                        "update:current-page": function(
                                          $event
                                        ) {
                                          return _vm.$set(
                                            _vm.paging,
                                            "page",
                                            $event
                                          )
                                        }
                                      }
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
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { md: 6 } },
                      [
                        _c(
                          "el-card",
                          {
                            staticStyle: {
                              "border-radius": "8px",
                              background: "#c9f7f5"
                            }
                          },
                          [
                            _c(
                              "h6",
                              {
                                staticClass:
                                  "tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1 mg-b-20"
                              },
                              [
                                _vm._v(
                                  "\n                TERPOPULER MINGGU INI\n              "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(4, function(i) {
                              return _c(
                                "div",
                                {
                                  key: i,
                                  staticClass:
                                    "d-flex align-items-center mg-b-20"
                                },
                                [
                                  _c("div", { staticClass: "wd-40" }, [
                                    _c("div", { staticClass: "numbering" }, [
                                      _vm._v("1")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mg-l-15" }, [
                                    _c("div", { staticClass: "tx-inverse" }, [
                                      _vm._v("Katherine Lumaad")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "tx-12" }, [
                                      _vm._v("klumaad@themepixels.me")
                                    ])
                                  ])
                                ]
                              )
                            })
                          ],
                          2
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
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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