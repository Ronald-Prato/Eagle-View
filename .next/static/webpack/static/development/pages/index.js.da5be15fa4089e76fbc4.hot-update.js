webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SlideOptions.js":
/*!************************************!*\
  !*** ./components/SlideOptions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_SlideOptions_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SlideOptions.css */ "./styles/SlideOptions.css");
/* harmony import */ var _styles_SlideOptions_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SlideOptions_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/c/Users/multi/Desktop/Develop/React/Woombat/eagle-view/components/SlideOptions.js";



 // CSS Import 


var SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;
var env_names = [];

for (var i = 1; i < 16; i++) {
  env_names.push("Ambiente ".concat(i));
}

var SlideOptions = function SlideOptions() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_context__WEBPACK_IMPORTED_MODULE_1__["default"]),
      state = _useContext.state,
      actions = _useContext.actions;

  var options = ['Descripcion', 'Conexiones', 'Fuente', 'Campos'];

  var handleClick = function handleClick() {
    return console.log("E");
  };

  var createTable = function createTable(param) {
    return function () {
      console.log(param);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-options-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, env_names.map(function (x, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
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
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, {
      key: "sub".concat(i + 1),
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "cloud-server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, x)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, options.map(function (y, j) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100%'
        },
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-option-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: createTable({
          y: y
        }),
        key: j,
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, y)));
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SlideOptions);

/***/ })

})
//# sourceMappingURL=index.js.da5be15fa4089e76fbc4.hot-update.js.map