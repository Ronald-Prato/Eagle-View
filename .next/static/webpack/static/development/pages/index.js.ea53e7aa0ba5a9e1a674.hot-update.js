webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SlideOptions.js":
/*!************************************!*\
  !*** ./components/SlideOptions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_SlideOptions_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/SlideOptions.css */ "./styles/SlideOptions.css");
/* harmony import */ var _styles_SlideOptions_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_SlideOptions_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/mnt/c/Users/multi/Desktop/Develop/React/Woombat/eagle-view/components/SlideOptions.js";



 // CSS Import 


var SubMenu = antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].SubMenu;
var env_names = [];

for (var i = 1; i < 16; i++) {
  env_names.push("Ambiente ".concat(i));
}

var SlideOptions = function SlideOptions() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_8__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var options = ['Descripcion', 'Conexiones', 'Fuente', 'Campos'];

  var handleClick = function handleClick() {
    return console.log("E");
  };

  var createTable = function createTable(param) {
    return (
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var option, columns, subdata, data, Data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                option = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(param);
                columns = [];
                subdata = {};
                data = [];

                if (!(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(param).toString() === options[0])) {
                  _context.next = 17;
                  break;
                }

                Data = state.data[option];

                _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(Data).map(function (x) {
                  columns.push({
                    title: x,
                    dataIndex: x.toLowerCase()
                  });
                });

                _context.next = 9;
                return columns.shift();

              case 9:
                _context.next = 11;
                return columns.map(function (x) {
                  subdata[x.dataIndex] = Data[x.title];
                });

              case 11:
                _context.next = 13;
                return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(subdata, {
                  key: '1'
                });

              case 13:
                _context.next = 15;
                return data.push(subdata);

              case 15:
                _context.next = 17;
                return actions({
                  type: 'set-new-state',
                  payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
                    columns: columns,
                    table_data: data
                  })
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))
    );
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "slide-options-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, env_names.map(function (x, i) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
      onClick: handleClick,
      style: {
        width: 256
      },
      defaultSelectedKeys: ['1'] //defaultOpenKeys={['sub1']}
      ,
      mode: "inline",
      selectable: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: "sub".concat(i + 1),
      title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "cloud-server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, x)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, options.map(function (y, j) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: '100%'
        },
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "button-option-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: createTable(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, y, i)),
        key: j,
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, y)));
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SlideOptions);

/***/ })

})
//# sourceMappingURL=index.js.ea53e7aa0ba5a9e1a674.hot-update.js.map