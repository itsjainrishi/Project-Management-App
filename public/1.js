(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/activity/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _show_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue */ "./resources/js/modules/activity/show.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Activitycard: _show_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["selectedProject"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/activity/show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
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
  props: {
    activity: {
      type: Object
    }
  },
  computed: {
    keys: function keys() {
      return Object.keys(this.activity.changes['after']);
    },
    changesCount: function changesCount() {
      return this.keys.length;
    },
    changedKey: function changedKey() {
      return this.keys[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/partials/Form.js */ "./resources/js/components/partials/Form.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['selectedProject', 'editProjectModalActive'])),
  data: function data() {
    return {
      projecteditform: new _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: '',
        description: ''
      }),
      formloading: false
    };
  },
  methods: {
    closemodaledit: function closemodaledit() {
      this.$store.dispatch('CLOSE_EDIT_PROJECT_MODAL');
    },
    editProject: function editProject() {
      var _this = this;

      this.formloading = true;
      this.projecteditform.submit('put', '/api/projects/' + this.selectedProject.slug).then(function (data) {
        _this.$store.dispatch('UPDATE_SELECTED_PROJECT', data);

        _this.formloading = false;

        _this.$store.dispatch('CLOSE_EDIT_PROJECT_MODAL');

        toastr.success('Project updated');
      })["catch"](function (err) {
        toastr.error('Something went wrong');
        _this.formloading = false;
      });
    }
  },
  mounted: function mounted() {
    this.projecteditform.title = this.selectedProject.title;
    this.projecteditform.description = this.selectedProject.description;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/selectedproject.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/partials/Form.js */ "./resources/js/components/partials/Form.js");
/* harmony import */ var _tasks_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/index.vue */ "./resources/js/modules/tasks/index.vue");
/* harmony import */ var _activity_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../activity/index.vue */ "./resources/js/modules/activity/index.vue");
/* harmony import */ var _projects_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/edit */ "./resources/js/modules/projects/edit.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      membermodalActive: false,
      inviteUserform: new _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        email: ''
      }),
      isActive: {}
    };
  },
  components: {
    TasksComponent: _tasks_index_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ActivitiesComponent: _activity_index_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Projectedit: _projects_edit__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["selectedProject"])),
  methods: {
    showmodalMember: function showmodalMember() {
      this.membermodalActive = true;
    },
    closemodalMember: function closemodalMember() {
      this.membermodalActive = false;
    },
    showeditProject: function showeditProject() {
      this.$store.dispatch('OPEN_EDIT_PROJECT_MODAL');
    },
    inviteUser: function inviteUser() {
      var _this = this;

      this.inviteUserform.submit('post', '/api/projects/' + this.selectedProject.slug + '/invitations').then(function (data) {
        _this.$store.dispatch('UPDATE_SELECTED_PROJECT', data);

        toastr.success('User now has access to the project');
      })["catch"](function (err) {
        toastr.error('Something went wrong');
      });
    },
    switchTab: function switchTab(event) {
      var tabindex = event.currentTarget.getAttribute('data-index');

      for (var i = 0; i < 4; i++) {
        this.$set(this.isActive, 'tab' + i, false);
      }

      this.$set(this.isActive, 'tab' + tabindex, true);
    }
  },
  mounted: function mounted() {
    for (var i = 1; i < 4; i++) {
      this.$set(this.isActive, 'tab' + i, false);
    }

    this.$set(this.isActive, 'tab0', true);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/partials/Form.js */ "./resources/js/components/partials/Form.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['selectedProject', 'createTaskModalActive'])),
  data: function data() {
    return {
      taskcreateform: new _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: '',
        body: ''
      }),
      formloading: false
    };
  },
  methods: {
    closemodalcreate: function closemodalcreate() {
      this.$store.dispatch('CLOSE_CREATE_TASK_MODAL');
    },
    createTask: function createTask() {
      var _this = this;

      this.formloading = true;
      this.taskcreateform.submit('post', '/api/projects/' + this.selectedProject.slug + '/tasks').then(function (data) {
        _this.$store.dispatch('UPDATE_SELECTED_PROJECT', data);

        toastr.success('Task added');
        _this.formloading = false;

        _this.$store.dispatch('CLOSE_CREATE_TASK_MODAL');
      })["catch"](function (error) {
        toastr.error('Could not add Task');
        _this.formloading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/partials/Form.js */ "./resources/js/components/partials/Form.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['selectedProject', 'selectedTask', 'editTaskModalActive'])),
  data: function data() {
    return {
      taskeditform: new _components_partials_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: '',
        body: '',
        completed: false
      }),
      formloading: false
    };
  },
  methods: {
    closemodaledit: function closemodaledit() {
      this.$store.dispatch('CLOSE_EDIT_TASK_MODAL');
    },
    changeStatus: function changeStatus() {
      this.taskeditform.completed = !this.taskeditform.completed;
    },
    editTask: function editTask() {
      var _this = this;

      this.formloading = true;
      this.taskeditform.submit('put', '/api/projects/' + this.selectedProject.slug + '/tasks/' + this.selectedTask.slug).then(function (data) {
        _this.$store.dispatch('UPDATE_SELECTED_PROJECT', data);

        _this.formloading = false;

        _this.$store.dispatch('CLOSE_EDIT_TASK_MODAL');

        toastr.success('Task updated');
      })["catch"](function (err) {
        toastr.error('Something went wrong');
        _this.formloading = false;
      });
    }
  },
  watch: {
    selectedTask: function selectedTask() {
      this.taskeditform.title = this.selectedTask.title;
      this.taskeditform.body = this.selectedTask.body;
      this.taskeditform.completed = this.selectedTask.completed;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _tasks_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/create */ "./resources/js/modules/tasks/create.vue");
/* harmony import */ var _tasks_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/show */ "./resources/js/modules/tasks/show.vue");
/* harmony import */ var _tasks_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/edit */ "./resources/js/modules/tasks/edit.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["selectedProject"])),
  components: {
    Taskcreate: _tasks_create__WEBPACK_IMPORTED_MODULE_1__["default"],
    Taskshow: _tasks_show__WEBPACK_IMPORTED_MODULE_2__["default"],
    Taskedit: _tasks_edit__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    showTask: function showTask(event) {
      var taskslug = event.currentTarget.getAttribute('data-slug');
      var selected = this.selectedProject.tasks.find(function (_ref) {
        var slug = _ref.slug;
        return slug === taskslug;
      });
      this.$store.dispatch('SET_SELECTED_TASK', selected);
    },
    showcreateTask: function showcreateTask(event) {
      this.$store.dispatch('OPEN_CREATE_TASK_MODAL');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['selectedProject', 'selectedTask', 'showTaskModalActive'])),
  methods: {
    closemodalshow: function closemodalshow() {
      this.$store.dispatch('CLOSE_SHOW_TASK_MODAL');
    },
    deleteTask: function deleteTask() {
      var _this = this;

      var index = this.selectedProject.tasks.findIndex(function (_ref) {
        var slug = _ref.slug;
        return slug === _this.selectedTask.slug;
      });
      axios["delete"]('/api/projects/' + this.selectedProject.slug + '/tasks/' + this.selectedTask.slug).then(function (res) {
        _this.$store.dispatch('DELETE_SELECTED_TASK', index);

        _this.$store.dispatch('CLOSE_SHOW_TASK_MODAL');

        toastr.success('Task Deleted');
      })["catch"](function (error) {
        toastr.success('Can not Delete task');
      });
    },
    editselectedTask: function editselectedTask() {
      this.$store.dispatch('OPEN_EDIT_TASK_MODAL');
      this.$store.dispatch('CLOSE_SHOW_TASK_MODAL');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card[data-v-7c652b67] {\n  background-color: #edf2f7;\n  border-radius: 0.25rem;\n}\n.card-content p[data-v-7c652b67] {\n  display: inline-block;\n  margin-bottom: 0;\n}\n.time[data-v-7c652b67] {\n  font-size: 0.8rem;\n  float: right;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-project-modal .modal-content[data-v-439332e9] {\n  padding: 1rem;\n  background-color: white;\n  border-radius: 0.25rem;\n  display: block;\n  overflow: auto;\n}\n.edit-project-modal .modal-content .field[data-v-439332e9] {\n  padding: 1rem;\n  margin-bottom: 0;\n}\n.edit-project-modal .modal-content .field input[data-v-439332e9], .edit-project-modal .modal-content .field textarea[data-v-439332e9] {\n  background-color: #edf2f7;\n  border-color: #edf2f7;\n}\n.edit-project-modal .modal-content .field input[data-v-439332e9]:hover, .edit-project-modal .modal-content .field input[data-v-439332e9]:focus, .edit-project-modal .modal-content .field textarea[data-v-439332e9]:hover, .edit-project-modal .modal-content .field textarea[data-v-439332e9]:focus {\n  border-color: #edf2f7;\n  box-shadow: none;\n}\n.edit-project-modal .modal-content .project-status[data-v-439332e9] {\n  padding: 1rem;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n.edit-project-modal .modal-content .project-status .column[data-v-439332e9] {\n  text-align: center;\n}\n.edit-project-modal .modal-content footer[data-v-439332e9] {\n  margin-top: 3rem;\n  padding: 1.5rem;\n  background-color: #edf2f7;\n  margin: 3rem -1rem -1rem -1rem;\n}\n.edit-project-modal .modal-content footer .content p[data-v-439332e9] {\n  display: flex;\n  justify-content: space-between;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero-body[data-v-1ad1e3e2] {\n  text-align: center;\n}\n.edit-project-btn[data-v-1ad1e3e2] {\n  margin-bottom: 1.5rem;\n}\n.members[data-v-1ad1e3e2] {\n  flex-wrap: wrap;\n}\n.members a[data-v-1ad1e3e2] {\n  margin-left: 0.25rem;\n}\n.add-member[data-v-1ad1e3e2] {\n  width: 2rem;\n  height: 2rem;\n  padding: 0.5rem;\n  margin-right: 0.25rem;\n}\n.member-image[data-v-1ad1e3e2] {\n  height: 2rem;\n  width: 2rem;\n}\n.content figure[data-v-1ad1e3e2] {\n  margin: 0;\n}\n.tabs .fa-icon[data-v-1ad1e3e2] {\n  font-size: 1.5rem;\n}\n.tabs .fa-icon-text[data-v-1ad1e3e2] {\n  font-size: 0.75rem;\n}\n.tabs li.is-active .fa-icon[data-v-1ad1e3e2] {\n  color: #8800ff;\n}\n.tabs li.is-active .fa-icon-text[data-v-1ad1e3e2] {\n  color: #8800ff;\n}\n.tabs li.is-active a[data-v-1ad1e3e2] {\n  border-bottom-color: #8800ff;\n}\n.activity.tab-content[data-v-1ad1e3e2] {\n  padding: 2rem;\n}\nbutton.create-task[data-v-1ad1e3e2] {\n  padding: 1.25rem 1rem;\n  margin: 1rem 0;\n}\n.modal-content[data-v-1ad1e3e2] {\n  text-align: center;\n  padding-top: 2rem;\n  background-color: white;\n  border-radius: 0.25rem;\n  display: block;\n  overflow: auto;\n}\n.invite-email[data-v-1ad1e3e2] {\n  width: 80%;\n  display: block;\n  margin: auto;\n  background-color: #edf2f7;\n  border-color: #edf2f7;\n}\n.invite-email[data-v-1ad1e3e2]:hover, .invite-email[data-v-1ad1e3e2]:focus {\n  border-color: #edf2f7;\n}\n.invite-modal-footer[data-v-1ad1e3e2] {\n  margin-top: 3rem;\n  padding: 1.5rem;\n  width: 100%;\n  background-color: #edf2f7;\n}\n.invite-modal-footer .content p[data-v-1ad1e3e2] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (min-width: 768px) {\n.tabs[data-v-1ad1e3e2] {\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n.activity.tab-content[data-v-1ad1e3e2] {\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-task-modal .modal-content {\n  padding: 1rem;\n  background-color: white;\n  border-radius: 0.25rem;\n  display: block;\n  overflow: auto;\n}\n.create-task-modal .modal-content .field {\n  padding: 1rem;\n  margin-bottom: 0;\n}\n.create-task-modal .modal-content .field input, .create-task-modal .modal-content .field textarea {\n  background-color: #edf2f7;\n  border-color: #edf2f7;\n}\n.create-task-modal .modal-content .field input:hover, .create-task-modal .modal-content .field input:focus, .create-task-modal .modal-content .field textarea:hover, .create-task-modal .modal-content .field textarea:focus {\n  border-color: #edf2f7;\n  box-shadow: none;\n}\n.create-task-modal .modal-content footer {\n  padding: 1.5rem;\n  background-color: #edf2f7;\n  margin: 3rem 1rem -1rem 1rem;\n}\n.create-task-modal .modal-content footer .content p {\n  display: flex;\n  justify-content: space-between;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch[data-v-fe4f261e] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.switch input[data-v-fe4f261e] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[data-v-fe4f261e] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #cccccc;\n  transition: 0.4s;\n}\n.slider[data-v-fe4f261e]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider[data-v-fe4f261e] {\n  background-color: #8800ff;\n}\ninput:focus + .slider[data-v-fe4f261e] {\n  box-shadow: 0 0 1px #8800ff;\n}\ninput:checked + .slider[data-v-fe4f261e]:before {\n  transform: translateX(26px);\n}\n.slider.round[data-v-fe4f261e] {\n  border-radius: 34px;\n}\n.slider.round[data-v-fe4f261e]:before {\n  border-radius: 50%;\n}\n.edit-task-modal .modal-content[data-v-fe4f261e] {\n  padding: 1rem;\n  background-color: white;\n  border-radius: 0.25rem;\n  display: block;\n  overflow: auto;\n}\n.edit-task-modal .modal-content .field[data-v-fe4f261e] {\n  padding: 1rem;\n  margin-bottom: 0;\n}\n.edit-task-modal .modal-content .field input[data-v-fe4f261e], .edit-task-modal .modal-content .field textarea[data-v-fe4f261e] {\n  background-color: #edf2f7;\n  border-color: #edf2f7;\n}\n.edit-task-modal .modal-content .field input[data-v-fe4f261e]:hover, .edit-task-modal .modal-content .field input[data-v-fe4f261e]:focus, .edit-task-modal .modal-content .field textarea[data-v-fe4f261e]:hover, .edit-task-modal .modal-content .field textarea[data-v-fe4f261e]:focus {\n  border-color: #edf2f7;\n  box-shadow: none;\n}\n.edit-task-modal .modal-content .task-status[data-v-fe4f261e] {\n  padding: 1rem;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n.edit-task-modal .modal-content .task-status .column[data-v-fe4f261e] {\n  text-align: center;\n}\n.edit-task-modal .modal-content footer[data-v-fe4f261e] {\n  margin-top: 3rem;\n  padding: 1.5rem;\n  background-color: #edf2f7;\n  margin: 3rem -1rem -1rem -1rem;\n}\n.edit-task-modal .modal-content footer .content p[data-v-fe4f261e] {\n  display: flex;\n  justify-content: space-between;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-task-btn[data-v-48262a0a] {\n  margin-bottom: 1.5rem;\n}\n.tile.is-ancestor[data-v-48262a0a] {\n  flex-wrap: wrap;\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n.tile.is-child.box[data-v-48262a0a] {\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n}\n.tile.is-child.box .title[data-v-48262a0a] {\n  font-size: 1rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n}\n.tile.is-child.box .content[data-v-48262a0a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3rem;\n}\n.task-status[data-v-48262a0a] {\n  font-size: 0.75rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-task-modal .modal-content {\n  text-align: center;\n  background-color: white;\n  border-radius: 0.25rem;\n  display: block;\n  overflow: auto;\n}\n.show-task-modal .task-title {\n  font-size: 1.5rem;\n  padding: 2rem;\n  background-color: #edf2f7;\n}\n.show-task-modal .task-body {\n  margin: 1rem 0;\n  padding: 1rem;\n}\n.show-task-modal .task-body .title {\n  font-size: 1em;\n}\n.show-task-modal .task-status {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em 2em;\n}\n.show-task-modal .show-task-modal-footer {\n  padding: 1rem 2rem;\n  margin-top: 3rem;\n  background-color: #edf2f7;\n}\n.show-task-modal .show-task-modal-footer .content p {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/index.vue?vue&type=template&id=54314858&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/activity/index.vue?vue&type=template&id=54314858& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "columns activities is-multiline" },
    _vm._l(_vm.selectedProject.activity, function(activity) {
      return _c(
        "div",
        { staticClass: "column is-full" },
        [_c("Activitycard", { attrs: { activity: activity } })],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=template&id=7c652b67&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/activity/show.vue?vue&type=template&id=7c652b67&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-content" }, [
      _vm.activity.description === "created_task"
        ? _c("p", [
            _vm._v(
              " " +
                _vm._s(_vm.activity.user.name) +
                ' created "' +
                _vm._s(_vm.activity.subject.title) +
                '".'
            )
          ])
        : _vm.activity.description === "created_project"
        ? _c("p", [
            _vm._v(
              " " + _vm._s(_vm.activity.user.name) + " created the project."
            )
          ])
        : _vm.activity.description === "completed_task"
        ? _c("p", [
            _vm._v(
              " " +
                _vm._s(_vm.activity.user.name) +
                ' completed "' +
                _vm._s(_vm.activity.subject.title) +
                '".'
            )
          ])
        : _vm.activity.description === "incompleted_task"
        ? _c("p", [
            _vm._v(
              " " +
                _vm._s(_vm.activity.user.name) +
                ' incompleted "' +
                _vm._s(_vm.activity.subject.title) +
                '".'
            )
          ])
        : _vm.activity.description === "updated_project" &&
          _vm.changesCount === 1
        ? _c("p", [
            _vm._v(
              " " +
                _vm._s(_vm.activity.user.name) +
                " updated the " +
                _vm._s(_vm.changedKey) +
                " of the project."
            )
          ])
        : _vm.activity.description === "updated_project"
        ? _c("p", [
            _vm._v(
              " " + _vm._s(_vm.activity.user.name) + " updated the project."
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("p", { staticClass: "time" }, [
        _vm._v(_vm._s(_vm._f("day")(_vm.activity.created_at)))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=template&id=439332e9&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/edit.vue?vue&type=template&id=439332e9&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      class: [
        "modal",
        "edit-project-modal",
        { "is-active": _vm.editProjectModalActive }
      ]
    },
    [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "outside-click",
              rawName: "v-outside-click",
              value: {
                exclude: [this.$parent.$refs.editprojectbtn],
                handler: "closemodaledit"
              },
              expression:
                "{ exclude: [this.$parent.$refs.editprojectbtn] , handler: 'closemodaledit'}"
            }
          ],
          staticClass: "modal-content"
        },
        [
          _c(
            "form",
            {
              ref: "projecteditform",
              attrs: { role: "form", method: "PUT", action: "#" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editProject($event)
                },
                keydown: function($event) {
                  return _vm.projecteditform.errors.clear($event.target.name)
                }
              }
            },
            [
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Title")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.projecteditform.title,
                        expression: "projecteditform.title"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "text", name: "title" },
                    domProps: { value: _vm.projecteditform.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.projecteditform,
                          "title",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.projecteditform.errors.has("title")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.projecteditform.errors.get("title")
                        )
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Description")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.projecteditform.description,
                        expression: "projecteditform.description"
                      }
                    ],
                    staticClass: "textarea",
                    attrs: { name: "description", type: "text" },
                    domProps: { value: _vm.projecteditform.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.projecteditform,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.projecteditform.errors.has("description")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.projecteditform.errors.get("description")
                        )
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "footer",
                { staticClass: "footer edit-project-modal-footer" },
                [
                  _c("div", { staticClass: "content footer-content" }, [
                    _c("p", [
                      _c(
                        "button",
                        {
                          staticClass: "button edit-project-modal-cancel",
                          attrs: { type: "button", "aria-label": "close" },
                          on: { click: _vm.closemodaledit }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "button edit-project-modal-submit is-primary",
                          attrs: {
                            type: "submit",
                            disabled:
                              _vm.projecteditform.errors.any() ||
                              _vm.formloading
                          }
                        },
                        [_vm._v("Done")]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/projects/selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("section", { staticClass: "hero" }, [
        _c("div", { staticClass: "hero-body" }, [
          _c("div", { staticClass: "container" }, [
            _c("h3", { staticClass: "title" }, [
              _vm._v(
                "\n\t\t\t\t\t" +
                  _vm._s(_vm.selectedProject.title) +
                  "\n\t\t\t\t"
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n\t\t\t\t\t" +
                  _vm._s(_vm.selectedProject.description) +
                  "\n\t\t\t\t"
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-wrap edit-project-btn" }, [
              _c("div", { staticClass: "w-full" }, [
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "button",
                    {
                      ref: "editprojectbtn",
                      staticClass: "button edit-project shadow is-primary",
                      on: { click: _vm.showeditProject }
                    },
                    [_vm._v("Edit Project")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "members flex justify-center" },
              [
                _vm.$can("manage", _vm.selectedProject)
                  ? _c(
                      "span",
                      {
                        staticClass:
                          "add-member color-primary bg-white shadow flex full-rounded justify-center cursor-pointer",
                        on: { click: _vm.showmodalMember }
                      },
                      [_c("font-awesome-icon", { attrs: { icon: "plus" } })],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.selectedProject.members, function(member) {
                  return _c("a", { staticClass: "cursor-pointer" }, [
                    _vm._m(0, true)
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("Projectedit"),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [
            "modal",
            "invite-modal",
            { "is-active": _vm.membermodalActive }
          ]
        },
        [
          _c("div", { staticClass: "modal-background" }),
          _vm._v(" "),
          _c("div", { staticClass: "modal-content" }, [
            _c("p", { staticClass: "subtitle" }, [_vm._v("ADD MEMBER")]),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: {
                  role: "form",
                  method: "POST",
                  action: "/api/projects/project-slug/invitations"
                },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.inviteUser($event)
                  },
                  keydown: function($event) {
                    return _vm.inviteUserform.errors.clear("email")
                  }
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inviteUserform.email,
                      expression: "inviteUserform.email"
                    }
                  ],
                  staticClass: "input invite-email is-shadowless",
                  attrs: {
                    type: "email",
                    placeholder: "Email Address",
                    required: "required"
                  },
                  domProps: { value: _vm.inviteUserform.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inviteUserform, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.inviteUserform.errors.has("email")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.inviteUserform.errors.get("email")
                        )
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("footer", { staticClass: "footer invite-modal-footer" }, [
                  _c("div", { staticClass: "content footer-content" }, [
                    _c("p", [
                      _c(
                        "button",
                        {
                          staticClass: "button invite-modal-cancel",
                          attrs: { type: "button", "aria-label": "close" },
                          on: { click: _vm.closemodalMember }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "button invite-modal-submit is-primary",
                          attrs: {
                            type: "submit",
                            disabled: _vm.inviteUserform.errors.any(),
                            "aria-label": "close"
                          }
                        },
                        [_vm._v("Invite")]
                      )
                    ])
                  ])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tabs is-fullwidth shadow mrl-2" }, [
        _c("ul", [
          _c(
            "li",
            {
              class: [{ "is-active": _vm.isActive.tab0 }],
              attrs: { "data-index": "0" },
              on: { click: _vm.switchTab }
            },
            [
              _c("a", { staticClass: "flex flex-column" }, [
                _c(
                  "span",
                  { staticClass: "fa-icon" },
                  [_c("font-awesome-icon", { attrs: { icon: "tasks" } })],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "fa-icon-text" }, [_vm._v("Tasks")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              class: [{ "is-active": _vm.isActive.tab1 }],
              attrs: { "data-index": "1" },
              on: { click: _vm.switchTab }
            },
            [
              _c("a", { staticClass: "flex flex-column" }, [
                _c(
                  "span",
                  { staticClass: "fa-icon" },
                  [_c("font-awesome-icon", { attrs: { icon: "bolt" } })],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "fa-icon-text" }, [
                  _vm._v("Activities")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              class: [{ "is-active": _vm.isActive.tab2 }],
              attrs: { "data-index": "2" },
              on: { click: _vm.switchTab }
            },
            [
              _c("a", { staticClass: "flex flex-column" }, [
                _c(
                  "span",
                  { staticClass: "fa-icon" },
                  [_c("font-awesome-icon", { attrs: { icon: "tasks" } })],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "fa-icon-text" }, [_vm._v("Tasks")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              class: [{ "is-active": _vm.isActive.tab3 }],
              attrs: { "data-index": "3" },
              on: { click: _vm.switchTab }
            },
            [
              _c("a", { staticClass: "flex flex-column" }, [
                _c(
                  "span",
                  { staticClass: "fa-icon" },
                  [_c("font-awesome-icon", { attrs: { icon: "tasks" } })],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "fa-icon-text" }, [_vm._v("Tasks")])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.isActive.tab0
        ? _c(
            "div",
            { staticClass: "tasks tab-content" },
            [_c("TasksComponent")],
            1
          )
        : _vm.isActive.tab1
        ? _c(
            "div",
            { staticClass: "activity tab-content bg-white shadow" },
            [_c("ActivitiesComponent")],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "member-image" }, [
      _c("figure", { staticClass: "image is-32x32" }, [
        _c("img", {
          staticClass: "full-rounded",
          attrs: { src: "/images/user.jpg" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=template&id=6d3681ba&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/create.vue?vue&type=template&id=6d3681ba& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      class: [
        "modal",
        "create-task-modal",
        { "is-active": _vm.createTaskModalActive }
      ]
    },
    [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "outside-click",
              rawName: "v-outside-click",
              value: {
                exclude: [this.$parent.$refs.createtaskbtn],
                handler: "closemodalcreate"
              },
              expression:
                "{ exclude: [this.$parent.$refs.createtaskbtn] , handler: 'closemodalcreate'}"
            }
          ],
          staticClass: "modal-content"
        },
        [
          _c(
            "form",
            {
              ref: "taskcreateform",
              attrs: { role: "form", method: "POST", action: "#" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.createTask($event)
                },
                keydown: function($event) {
                  return _vm.taskcreateform.errors.clear($event.target.name)
                }
              }
            },
            [
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Title")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.taskcreateform.title,
                        expression: "taskcreateform.title"
                      }
                    ],
                    staticClass: "input",
                    attrs: {
                      type: "text",
                      name: "title",
                      placeholder: "New Task"
                    },
                    domProps: { value: _vm.taskcreateform.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.taskcreateform,
                          "title",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.taskcreateform.errors.has("title")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.taskcreateform.errors.get("title")
                        )
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Description")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.taskcreateform.body,
                        expression: "taskcreateform.body"
                      }
                    ],
                    staticClass: "textarea",
                    attrs: { name: "body", type: "text" },
                    domProps: { value: _vm.taskcreateform.body },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.taskcreateform,
                          "body",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.taskcreateform.errors.has("body")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.taskcreateform.errors.get("body")
                        )
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "footer create-task-modal-footer" }, [
                _c("div", { staticClass: "content footer-content" }, [
                  _c("p", [
                    _c(
                      "button",
                      {
                        staticClass: "button create-task-modal-cancel",
                        attrs: { type: "button", "aria-label": "close" },
                        on: { click: _vm.closemodalcreate }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "button create-task-modal-submit is-primary",
                        attrs: {
                          type: "submit",
                          disabled:
                            _vm.taskcreateform.errors.any() || _vm.formloading
                        }
                      },
                      [_vm._v("Create")]
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=template&id=fe4f261e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/edit.vue?vue&type=template&id=fe4f261e&scoped=true& ***!
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
  return _c(
    "div",
    {
      class: [
        "modal",
        "edit-task-modal",
        { "is-active": _vm.editTaskModalActive }
      ]
    },
    [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "outside-click",
              rawName: "v-outside-click",
              value: {
                exclude: [this.$parent.$children[1].$refs.edittaskbtn],
                handler: "closemodaledit"
              },
              expression:
                "{ exclude: [this.$parent.$children[1].$refs.edittaskbtn] , handler: 'closemodaledit'}"
            }
          ],
          staticClass: "modal-content"
        },
        [
          _c(
            "form",
            {
              ref: "taskeditform",
              attrs: { role: "form", method: "PUT", action: "#" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editTask($event)
                },
                keydown: function($event) {
                  return _vm.taskeditform.errors.clear($event.target.name)
                }
              }
            },
            [
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Title")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.taskeditform.title,
                        expression: "taskeditform.title"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "text", name: "title" },
                    domProps: { value: _vm.taskeditform.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.taskeditform, "title", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.taskeditform.errors.has("title")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(
                          _vm.taskeditform.errors.get("title")
                        )
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", { staticClass: "label" }, [_vm._v("Description")]),
                _vm._v(" "),
                _c("div", { staticClass: "control" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.taskeditform.body,
                        expression: "taskeditform.body"
                      }
                    ],
                    staticClass: "textarea",
                    attrs: { name: "body", type: "text" },
                    domProps: { value: _vm.taskeditform.body },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.taskeditform, "body", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.taskeditform.errors.has("body")
                  ? _c("span", {
                      staticClass: "help is-danger",
                      domProps: {
                        textContent: _vm._s(_vm.taskeditform.errors.get("body"))
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "task-status columns" }, [
                _c("div", { staticClass: "column" }, [
                  _c("div", { staticClass: "heading" }, [_vm._v("Status")]),
                  _vm._v(" "),
                  _vm.taskeditform.completed
                    ? _c("p", [_vm._v("Completed")])
                    : _c("p", [_vm._v("Pending")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column" }, [
                  _c("div", { staticClass: "heading" }, [
                    _vm._v("Change Status")
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "switch" }, [
                    _c("input", {
                      attrs: { type: "checkbox" },
                      domProps: { checked: _vm.taskeditform.completed },
                      on: {
                        change: function($event) {
                          return _vm.changeStatus()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "slider round" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "footer edit-task-modal-footer" }, [
                _c("div", { staticClass: "content footer-content" }, [
                  _c("p", [
                    _c(
                      "button",
                      {
                        staticClass: "button edit-task-modal-cancel",
                        attrs: { type: "button", "aria-label": "close" },
                        on: { click: _vm.closemodaledit }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "button edit-task-modal-submit is-primary",
                        attrs: {
                          type: "submit",
                          disabled:
                            _vm.taskeditform.errors.any() || _vm.formloading
                        }
                      },
                      [_vm._v("Done")]
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=template&id=48262a0a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/index.vue?vue&type=template&id=48262a0a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "flex flex-wrap create-task-btn" }, [
        _c("div", { staticClass: "w-full" }, [
          _c("div", { staticClass: "text-center" }, [
            _c(
              "button",
              {
                ref: "createtaskbtn",
                staticClass: "button create-task shadow is-primary",
                on: { click: _vm.showcreateTask }
              },
              [_vm._v("Create Task")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.selectedProject.tasks.length
        ? _c(
            "div",
            { ref: "showtaskbtn", staticClass: "tile is-ancestor" },
            _vm._l(_vm.selectedProject.tasks, function(task, i) {
              return _c(
                "div",
                {
                  key: task.slug,
                  staticClass: "tile is-parent is-3",
                  attrs: { "data-slug": task.slug },
                  on: { click: _vm.showTask }
                },
                [
                  _c("div", { staticClass: "tile is-child box" }, [
                    task.completed
                      ? _c(
                          "span",
                          { staticClass: "task-status color-primary" },
                          [_vm._v("Completed")]
                        )
                      : _c(
                          "span",
                          { staticClass: "task-status color-primary" },
                          [_vm._v("Pending")]
                        ),
                    _vm._v(" "),
                    _c("p", { staticClass: "title" }, [
                      _vm._v(_vm._s(task.title))
                    ])
                  ])
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("Taskcreate"),
      _vm._v(" "),
      _c("Taskshow"),
      _vm._v(" "),
      _c("Taskedit")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=template&id=0d292864&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/tasks/show.vue?vue&type=template&id=0d292864& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      class: [
        "modal",
        "show-task-modal",
        { "is-active": _vm.showTaskModalActive }
      ]
    },
    [
      _c("div", { staticClass: "modal-background" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "outside-click",
              rawName: "v-outside-click",
              value: {
                exclude: [this.$parent.$refs.showtaskbtn],
                handler: "closemodalshow"
              },
              expression:
                "{ exclude: [this.$parent.$refs.showtaskbtn] , handler: 'closemodalshow'}"
            }
          ],
          staticClass: "modal-content"
        },
        [
          _c("div", { staticClass: "task-title" }, [
            _c("p", [_vm._v(_vm._s(_vm.selectedTask.title))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "task-body" }, [
            _c("p", { staticClass: "title" }, [_vm._v("Details")]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.selectedTask.body))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "task-status" }, [
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "heading" }, [_vm._v("Status")]),
              _vm._v(" "),
              _vm.selectedTask.completed
                ? _c("p", [_vm._v("Completed")])
                : _c("p", [_vm._v("Pending")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "heading" }, [_vm._v("Priority")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.selectedTask.priority))])
            ])
          ]),
          _vm._v(" "),
          _c("footer", { staticClass: "footer show-task-modal-footer" }, [
            _c("div", { staticClass: "content footer-content" }, [
              _c("p", [
                _c(
                  "button",
                  {
                    ref: "edittaskbtn",
                    staticClass: "button edit-task is-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.editselectedTask }
                  },
                  [_vm._v("Edit")]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "modal-close is-large",
        attrs: { "aria-label": "close" },
        on: { click: _vm.closemodalshow }
      })
    ]
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/modules/activity/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/modules/activity/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_54314858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=54314858& */ "./resources/js/modules/activity/index.vue?vue&type=template&id=54314858&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/modules/activity/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_54314858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_54314858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/activity/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/activity/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/modules/activity/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/activity/index.vue?vue&type=template&id=54314858&":
/*!********************************************************************************!*\
  !*** ./resources/js/modules/activity/index.vue?vue&type=template&id=54314858& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_54314858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=54314858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/index.vue?vue&type=template&id=54314858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_54314858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_54314858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/activity/show.vue":
/*!************************************************!*\
  !*** ./resources/js/modules/activity/show.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_7c652b67_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=7c652b67&scoped=true& */ "./resources/js/modules/activity/show.vue?vue&type=template&id=7c652b67&scoped=true&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/modules/activity/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _show_vue_vue_type_style_index_0_id_7c652b67_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true& */ "./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_7c652b67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_7c652b67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c652b67",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/activity/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/activity/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/modules/activity/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_7c652b67_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=style&index=0&id=7c652b67&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_7c652b67_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_7c652b67_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_7c652b67_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_7c652b67_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_7c652b67_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/activity/show.vue?vue&type=template&id=7c652b67&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/activity/show.vue?vue&type=template&id=7c652b67&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_7c652b67_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=7c652b67&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/activity/show.vue?vue&type=template&id=7c652b67&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_7c652b67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_7c652b67_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/projects/edit.vue":
/*!************************************************!*\
  !*** ./resources/js/modules/projects/edit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_439332e9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=439332e9&scoped=true& */ "./resources/js/modules/projects/edit.vue?vue&type=template&id=439332e9&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/modules/projects/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_id_439332e9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true& */ "./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_439332e9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_439332e9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "439332e9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/projects/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/projects/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/modules/projects/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_439332e9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=style&index=0&id=439332e9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_439332e9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_439332e9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_439332e9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_439332e9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_439332e9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/projects/edit.vue?vue&type=template&id=439332e9&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/projects/edit.vue?vue&type=template&id=439332e9&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_439332e9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=439332e9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/edit.vue?vue&type=template&id=439332e9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_439332e9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_439332e9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/projects/selectedproject.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/projects/selectedproject.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectedproject_vue_vue_type_template_id_1ad1e3e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true& */ "./resources/js/modules/projects/selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true&");
/* harmony import */ var _selectedproject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedproject.vue?vue&type=script&lang=js& */ "./resources/js/modules/projects/selectedproject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _selectedproject_vue_vue_type_style_index_0_id_1ad1e3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true& */ "./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _selectedproject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _selectedproject_vue_vue_type_template_id_1ad1e3e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _selectedproject_vue_vue_type_template_id_1ad1e3e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ad1e3e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/projects/selectedproject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/projects/selectedproject.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/projects/selectedproject.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedproject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_style_index_0_id_1ad1e3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=style&index=0&id=1ad1e3e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_style_index_0_id_1ad1e3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_style_index_0_id_1ad1e3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_style_index_0_id_1ad1e3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_style_index_0_id_1ad1e3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_style_index_0_id_1ad1e3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/projects/selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/projects/selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_template_id_1ad1e3e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/projects/selectedproject.vue?vue&type=template&id=1ad1e3e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_template_id_1ad1e3e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedproject_vue_vue_type_template_id_1ad1e3e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/tasks/create.vue":
/*!***********************************************!*\
  !*** ./resources/js/modules/tasks/create.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_6d3681ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=6d3681ba& */ "./resources/js/modules/tasks/create.vue?vue&type=template&id=6d3681ba&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/modules/tasks/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_6d3681ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_6d3681ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/tasks/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/tasks/create.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/modules/tasks/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/tasks/create.vue?vue&type=template&id=6d3681ba&":
/*!******************************************************************************!*\
  !*** ./resources/js/modules/tasks/create.vue?vue&type=template&id=6d3681ba& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6d3681ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=6d3681ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/create.vue?vue&type=template&id=6d3681ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6d3681ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6d3681ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/tasks/edit.vue":
/*!*********************************************!*\
  !*** ./resources/js/modules/tasks/edit.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_fe4f261e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=fe4f261e&scoped=true& */ "./resources/js/modules/tasks/edit.vue?vue&type=template&id=fe4f261e&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/modules/tasks/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_id_fe4f261e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true& */ "./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_fe4f261e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_fe4f261e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fe4f261e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/tasks/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/tasks/edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/modules/tasks/edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_fe4f261e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=style&index=0&id=fe4f261e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_fe4f261e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_fe4f261e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_fe4f261e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_fe4f261e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_fe4f261e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/tasks/edit.vue?vue&type=template&id=fe4f261e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/modules/tasks/edit.vue?vue&type=template&id=fe4f261e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_fe4f261e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=fe4f261e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/edit.vue?vue&type=template&id=fe4f261e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_fe4f261e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_fe4f261e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/tasks/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/modules/tasks/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_48262a0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=48262a0a&scoped=true& */ "./resources/js/modules/tasks/index.vue?vue&type=template&id=48262a0a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/modules/tasks/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_48262a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true& */ "./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_48262a0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_48262a0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48262a0a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/tasks/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/tasks/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/tasks/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48262a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=style&index=0&id=48262a0a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48262a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48262a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48262a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48262a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48262a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/tasks/index.vue?vue&type=template&id=48262a0a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/tasks/index.vue?vue&type=template&id=48262a0a&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48262a0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=48262a0a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/index.vue?vue&type=template&id=48262a0a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48262a0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48262a0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/tasks/show.vue":
/*!*********************************************!*\
  !*** ./resources/js/modules/tasks/show.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_0d292864___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=0d292864& */ "./resources/js/modules/tasks/show.vue?vue&type=template&id=0d292864&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/modules/tasks/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _show_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_0d292864___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_0d292864___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/tasks/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/tasks/show.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/modules/tasks/show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/tasks/show.vue?vue&type=template&id=0d292864&":
/*!****************************************************************************!*\
  !*** ./resources/js/modules/tasks/show.vue?vue&type=template&id=0d292864& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_0d292864___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=0d292864& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/tasks/show.vue?vue&type=template&id=0d292864&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_0d292864___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_0d292864___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);