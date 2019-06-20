webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/views/MainScreen.js":
/*!****************************************!*\
  !*** ./components/views/MainScreen.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/context */ "./store/context.js");
/* harmony import */ var _styles_MainScreen_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/MainScreen.css */ "./styles/MainScreen.css");
/* harmony import */ var _styles_MainScreen_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_MainScreen_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Table */ "./components/Table.js");
/* harmony import */ var _SlideOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SlideOptions */ "./components/SlideOptions.js");

var _jsxFileName = "/mnt/c/Users/multi/Desktop/Develop/React/Woombat/eagle-view/components/views/MainScreen.js";



 // Import Components  




var MainScreen = function MainScreen() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currentId = _useState2[0],
      showId = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "main-screen-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SlideOptions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    option: state.option_to_load,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainScreen);

/***/ })

})
//# sourceMappingURL=index.js.0ee5a1ecfd7358e2d01b.hot-update.js.map