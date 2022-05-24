"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Footer.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar FooterHolder = function FooterHolder(_ref) {\n  var title = _ref.title,\n      desc = _ref.desc,\n      btnDesc = _ref.btnDesc;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"flex-col flex items-center justify-around w-52\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      className: \"font-black text-2xl\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      className: \"text-center\",\n      children: desc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isOutline: false,\n      title: btnDesc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = FooterHolder;\nvar Footer = function Footer() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"flex flex-row flex-wrap\",\n    children: _data__WEBPACK_IMPORTED_MODULE_2__.data.FooterData.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(FooterHolder, {\n        title: item.title,\n        desc: item.description,\n        btnDesc: item.buttonDesc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }, _this);\n};\n_c2 = Footer;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FooterHolder\");\n$RefreshReg$(_c2, \"Footer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBVUEsSUFBTUcsWUFBWSxHQUFFLFNBQWRBLFlBQWMsT0FBbUM7QUFBQSxNQUFqQ0MsS0FBaUMsUUFBakNBLEtBQWlDO0FBQUEsTUFBMUJDLElBQTBCLFFBQTFCQSxJQUEwQjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFDbkQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyxxQkFBYjtBQUFBLGdCQUFvQ0Y7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBLGdCQUE0QkM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0ksOERBQUMsK0NBQUQ7QUFBaUIsZUFBUyxFQUFFLEtBQTVCO0FBQW1DLFdBQUssRUFBRUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FURDs7S0FBTUg7QUFXQyxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3hCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsY0FDS0wsc0RBQUEsQ0FBb0IsVUFBQVEsSUFBSTtBQUFBLDBCQUNyQiw4REFBQyxZQUFEO0FBQ0ksYUFBSyxFQUFFQSxJQUFJLENBQUNOLEtBRGhCO0FBRUksWUFBSSxFQUFFTSxJQUFJLENBQUNDLFdBRmY7QUFHSSxlQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURxQjtBQUFBLEtBQXhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUgsQ0FkTTtNQUFNTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci50c3g/YTc5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tICdyZWFkbGluZSdcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhJ1xuXG5pbnRlcmZhY2UgSXByb3Bze1xuICAgIHRpdGxlOnN0cmluZyxcbiAgICBkZXNjOnN0cmluZyxcbiAgICBidG5EZXNjOmFueXxzdHJpbmdcbiAgICBidG5Vcmw/OnN0cmluZ1xuICAgIFxufVxuXG5jb25zdCBGb290ZXJIb2xkZXIgPSh7dGl0bGUsIGRlc2MsIGJ0bkRlc2N9Oklwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCB3LTUyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtMnhsXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2Rlc2N9PC9wPlxuICAgICAgICAgICAgPEJ1dHRvbkNvbXBvbmVudCBpc091dGxpbmU9e2ZhbHNlfSB0aXRsZT17YnRuRGVzY30gLz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAge2RhdGEuRm9vdGVyRGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvb3RlckhvbGRlciBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGRlc2M9e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGJ0bkRlc2M9e2l0ZW0uYnV0dG9uRGVzY31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b25Db21wb25lbnQiLCJkYXRhIiwiRm9vdGVySG9sZGVyIiwidGl0bGUiLCJkZXNjIiwiYnRuRGVzYyIsIkZvb3RlciIsIkZvb3RlckRhdGEiLCJtYXAiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJidXR0b25EZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer.tsx\n");

/***/ })

});