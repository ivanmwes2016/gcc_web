"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/prayer.tsx":
/*!*******************************!*\
  !*** ./components/prayer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/prayer.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar PrayerContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"prayer__PrayerContainer\",\n  componentId: \"sc-1wcd6yg-0\"\n})([\"background-color:#002237;width:100%;color:white;\"]);\n_c = PrayerContainer;\n\nvar PrayerRequest = function PrayerRequest() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(PrayerContainer, {\n    className: \"py-5\",\n    children: _data__WEBPACK_IMPORTED_MODULE_2__.data.PrayerText.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          className: \" py-5 font-black text-4xl\",\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          className: \"py-5 w-52\",\n          children: item.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          isFontBig: true,\n          title: \"Prayer Request\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = PrayerRequest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrayerRequest);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PrayerContainer\");\n$RefreshReg$(_c2, \"PrayerRequest\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ByYXllci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxlQUFlLEdBQUdILHdFQUFIO0FBQUE7QUFBQTtBQUFBLHdEQUFyQjtLQUFNRzs7QUFXTixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsc0JBQ0ksOERBQUMsZUFBRDtBQUFpQixhQUFTLEVBQUMsTUFBM0I7QUFBQSxjQUNLSCxzREFBQSxDQUFvQixVQUFDTSxJQUFEO0FBQUEsMEJBQ2pCO0FBQUEsZ0NBRUk7QUFBRyxtQkFBUyxFQUFDLDJCQUFiO0FBQUEsb0JBQTBDQSxJQUFJLENBQUNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFHLG1CQUFTLEVBQUMsV0FBYjtBQUFBLG9CQUEwQkQsSUFBSSxDQUFDRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUksOERBQUMsK0NBQUQ7QUFBa0IsbUJBQVMsTUFBM0I7QUFBNEIsZUFBSyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQWhCRDs7TUFBTUw7QUFrQk4sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcmF5ZXIudHN4Pzg3YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhJ1xuXG5jb25zdCBQcmF5ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIyMzc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG5gXG5cbmludGVyZmFjZSBJcHJvcHN7XG5cbn1cblxuY29uc3QgUHJheWVyUmVxdWVzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJheWVyQ29udGFpbmVyIGNsYXNzTmFtZT1cInB5LTVcIj5cbiAgICAgICAgICAgIHtkYXRhLlByYXllclRleHQubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgcHktNSBmb250LWJsYWNrIHRleHQtNHhsXCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS01IHctNTJcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Db21wb25lbnQgIGlzRm9udEJpZyB0aXRsZT1cIlByYXllciBSZXF1ZXN0XCIgLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvUHJheWVyQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJheWVyUmVxdWVzdFxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQnV0dG9uQ29tcG9uZW50IiwiZGF0YSIsIlByYXllckNvbnRhaW5lciIsImRpdiIsIlByYXllclJlcXVlc3QiLCJQcmF5ZXJUZXh0IiwibWFwIiwiaXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/prayer.tsx\n");

/***/ })

});