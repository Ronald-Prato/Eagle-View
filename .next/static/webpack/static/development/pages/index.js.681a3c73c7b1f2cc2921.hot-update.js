webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var _store_useGlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/useGlobalState */ "./store/useGlobalState.js");
/* harmony import */ var _styles_Table_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Table.css */ "./styles/Table.css");
/* harmony import */ var _styles_Table_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Table_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/mnt/c/Users/multi/Desktop/Develop/React/Woombat/eagle-view/components/Table.js";






var columns = [];
var subdata = {};
var data = [];

var SingleTable = function SingleTable(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showTable = _useState2[0],
      setShowingTable = _useState2[1]; // useEffect(async () => {
  //     const Data = state.data[state.option_to_load]
  //     Object.keys(Data).map(x => { columns.push({ title: x, dataIndex: x.toLowerCase() }) })
  //     await columns.shift()
  //     await columns.map(x => {
  //         subdata[x.dataIndex] = Data[x.title]
  //     })
  //     await Object.assign(subdata, { key: '1' })
  //     await data.push(subdata)
  //     await console.log("columns => ", columns)
  //     await console.log(data)
  //     await setShowingTable(true)
  // }, {})


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "table-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    className: "table",
    columns: state.columns,
    dataSource: state.table_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleTable);

/***/ })

})
//# sourceMappingURL=index.js.681a3c73c7b1f2cc2921.hot-update.js.map