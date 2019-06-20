webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/useGlobalState.js":
/*!*********************************!*\
  !*** ./store/useGlobalState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var State = {
  data: [],
  option_to_load: null
};

var useGlobalState = function useGlobalState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(State),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var actions = function actions(action) {
    var type = action.type,
        payload = action.payload;

    switch (type) {
      case "set-state":
        {
          return setState(payload);
        }

      case "check-state":
        {
          console.log(state);
        }

      default:
        return state;
    }
  };

  return {
    state: state,
    actions: actions
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useGlobalState);

/***/ })

})
//# sourceMappingURL=index.js.004fe6444207fdda9248.hot-update.js.map