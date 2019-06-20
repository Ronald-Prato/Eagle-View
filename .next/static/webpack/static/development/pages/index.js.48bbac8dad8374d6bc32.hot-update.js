webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _store_useGlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/useGlobalState */ "./store/useGlobalState.js");
/* harmony import */ var _styles_Table_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Table.css */ "./styles/Table.css");
/* harmony import */ var _styles_Table_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Table_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");






var _jsxFileName = "/mnt/c/Users/multi/Desktop/Develop/React/Woombat/eagle-view/components/Table.js";







var SingleTable = function SingleTable() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_7__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      showTable = _useState2[0],
      setShowingTable = _useState2[1];

  var columns = [];
  var rows = [];
  var data = {};
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(state.data[state.option_to_load]).map(function (x) {
              columns.push({
                title: x,
                dataIndex: x.toLowerCase()
              });
            });

            _context.next = 3;
            return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(state.data[state.option_to_load]).map(function (x) {
              rows.push(x);
            });

          case 3:
            _context.next = 5;
            return columns.shift();

          case 5:
            _context.next = 7;
            return rows.shift();

          case 7:
            _context.next = 9;
            return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(columns.length).keys()).map(function (i) {
              data[columns[i]['dataIndex']] = rows[i];
            });

          case 9:
            _context.next = 11;
            return console.log(data);

          case 11:
            _context.next = 13;
            return setShowingTable(true);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, showTable ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Table"], {
    columns: columns,
    dataSource: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleTable);

/***/ })

})
//# sourceMappingURL=index.js.48bbac8dad8374d6bc32.hot-update.js.map