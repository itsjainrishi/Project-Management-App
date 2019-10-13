(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/User/auth/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/User/auth/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/partials/Form.js */ "./resources/js/components/partials/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      regform: new _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      formloading: false
    };
  },
  methods: {
    registerSubmit: function registerSubmit() {
      var _this = this;

      this.formloading = true;
      this.regform.submit('post', '/api/register').then(function (data) {
        toastr.success('A verification mail has been sent to your email. Verify your email address to continue');
        _this.formloading = false;
      })["catch"](function (error) {
        toastr.error('Something went wrong');
        _this.formloading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/User/auth/register.vue?vue&type=template&id=9c6dece8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/User/auth/register.vue?vue&type=template&id=9c6dece8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "columns is-marginless is-centered" }, [
    _c("div", { staticClass: "column is-5" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-content" }, [
          _c(
            "form",
            {
              ref: "regform",
              staticClass: "register-form",
              attrs: { method: "POST", action: "/api/register" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.registerSubmit($event)
                },
                keydown: function($event) {
                  return _vm.regform.errors.clear($event.target.name)
                }
              }
            },
            [
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Name")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.regform.name,
                        expression: "regform.name"
                      }
                    ],
                    staticClass: "input",
                    attrs: {
                      type: "text",
                      name: "name",
                      required: "",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.regform.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.regform, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.regform.errors.has("name")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.regform.errors.get("name"))
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Email")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.regform.email,
                        expression: "regform.email"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "email", name: "email", required: "" },
                    domProps: { value: _vm.regform.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.regform, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.regform.errors.has("email")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.regform.errors.get("email"))
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Password")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.regform.password,
                        expression: "regform.password"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "password", name: "password", required: "" },
                    domProps: { value: _vm.regform.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.regform, "password", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.regform.errors.has("password")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.regform.errors.get("password"))
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [
                  _vm._v("Confirm Password")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.regform.password_confirmation,
                        expression: "regform.password_confirmation"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "password", name: "password", required: "" },
                    domProps: { value: _vm.regform.password_confirmation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.regform,
                          "password_confirmation",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("div", { staticClass: "control" }, [
                  _c(
                    "button",
                    {
                      class: [
                        "button is-primary",
                        { "is-loading": _vm.formloading }
                      ],
                      attrs: { disabled: _vm.regform.errors.any() }
                    },
                    [_vm._v("SIGN UP")]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [_vm._v("Register")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/partials/Errors.js":
/*!****************************************************!*\
  !*** ./resources/js/components/partials/Errors.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }

      return '';
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        if (this.errors) {
          delete this.errors[field];
        }

        return;
      }

      this.errrors = {};
    }
  }, {
    key: "has",
    value: function has(field) {
      if (this.errors) {
        return this.errors.hasOwnProperty(field);
      }

      return null;
    }
  }, {
    key: "any",
    value: function any() {
      if (this.errors) {
        return Object.keys(this.errors).length > 0;
      }

      return null;
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/components/partials/Form.js":
/*!**************************************************!*\
  !*** ./resources/js/components/partials/Form.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors.js */ "./resources/js/components/partials/Errors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Form =
/*#__PURE__*/
function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;
    delete this.originalData.headers;

    for (var field in data) {
      this[field] = data[field];
    }

    this.errors = new _Errors_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Form, [{
    key: "data",
    value: function data() {
      var data = Object.assign({}, this);
      delete data.originalData;
      delete data.errors;
      delete data.headers;
      return data;
    }
  }, {
    key: "config",
    value: function config() {
      if (this['headers'] && this['headers'] === 'multipart/form-data') {
        var config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        return config;
      }

      return null;
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = '';
      }

      this.errors.clear();
    }
  }, {
    key: "setFormData",
    value: function setFormData(data) {
      var formdata = new FormData();

      for (var field in data) {
        formdata.append(field, data[field]);
      }

      delete formdata.images;

      for (var i = 0; i < data.images.length; i++) {
        formdata.append('images[]', data.images[i]);
      }

      return formdata;
    }
  }, {
    key: "submit",
    value: function submit(type, url) {
      var _this = this;

      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var config = {};
      var data = this.data();

      if (this['headers'] && this['headers'] === 'multipart/form-data') {
        config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        data = this.setFormData(data);

        if (type === 'put') {
          data.append('_method', 'PUT');
          type = 'post';
        }
      }

      config = {
        handlerEnabled: handler
      };
      return new Promise(function (resolve, reject) {
        axios[type](url, data, config).then(function (response) {
          _this.onSuccess(response.data);

          resolve(response.data);
        })["catch"](function (error) {
          _this.onFail(error.response.data.errors);

          reject(error.response.data);
        });
      });
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      this.reset();
    }
  }, {
    key: "onFail",
    value: function onFail(errors) {
      this.errors.record(errors);
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./resources/js/modules/User/auth/register.vue":
/*!*****************************************************!*\
  !*** ./resources/js/modules/User/auth/register.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_9c6dece8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=9c6dece8& */ "./resources/js/modules/User/auth/register.vue?vue&type=template&id=9c6dece8&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/modules/User/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_9c6dece8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_9c6dece8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/User/auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/User/auth/register.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/modules/User/auth/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/User/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/User/auth/register.vue?vue&type=template&id=9c6dece8&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/User/auth/register.vue?vue&type=template&id=9c6dece8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_9c6dece8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=9c6dece8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/User/auth/register.vue?vue&type=template&id=9c6dece8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_9c6dece8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_9c6dece8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);