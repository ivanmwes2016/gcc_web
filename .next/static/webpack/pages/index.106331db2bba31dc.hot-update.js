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

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroComponent\": function() { return /* binding */ HeroComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    background-attachment: fixed;\\n    background-size: cover;\\n    background-image: url('/bg-bg.jpg');\\n    width: 100%;\\n    height: 500px;\\n    \\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar Hero = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Hero;\nvar HeroComponent = function() {\n    var _this1 = _this;\n    return(// to have a main bg image/video\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hero, {\n        children: [\n            _data__WEBPACK_IMPORTED_MODULE_2__.data.Hero.map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.description\n                        }, void 0, false, {\n                            fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this1);\n            }),\n            \"hello\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = HeroComponent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"HeroComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFFVDtBQUU3QixJQUFNRyxJQUFJLEdBQUdGLDZEQUFVLG1CQU90QjtBQVBLRSxLQUFBQSxJQUFJO0FBU0gsSUFBTUUsYUFBYSxHQUFHLFdBQU07O0lBQy9CLE9BQ0ksZ0NBQWdDO2tCQUNoQyw4REFBQ0YsSUFBSTs7WUFHQUQsZ0RBQWEsQ0FBQ0ssU0FBQUEsSUFBSTtxQ0FDZiw4REFBQ0gsS0FBRzs7c0NBQ0EsOERBQUNJLEdBQUM7c0NBQUVELElBQUksQ0FBQ0UsS0FBSzs7Ozs7a0NBQUs7c0NBQ25CLDhEQUFDRCxHQUFDO3NDQUFFRCxJQUFJLENBQUNHLFdBQVc7Ozs7O2tDQUFLOzs7Ozs7MEJBQ3ZCO2FBRVQsQ0FBQztZQUdnQixPQUV0Qjs7Ozs7O2FBQU8sRUFDVjtDQUNKO0FBbkJZTCxNQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby50c3g/ZTc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhJ1xuXG5jb25zdCBIZXJvID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYmctYmcuanBnJyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBcbmBcblxuZXhwb3J0IGNvbnN0IEhlcm9Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gdG8gaGF2ZSBhIG1haW4gYmcgaW1hZ2UvdmlkZW9cbiAgICAgICAgPEhlcm8gPlxuICAgICAgICAgICAgey8qIGJpZyB0aXRsZSAqL31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGEuSGVyby5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICB7Lyogc21hbGwgdGV4dCAqL31cbiAgICAgICAgICAgIGhlbGxvXG4gICAgICAgIDwvSGVybz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJkYXRhIiwiSGVybyIsImRpdiIsIkhlcm9Db21wb25lbnQiLCJtYXAiLCJpdGVtIiwicCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n");

/***/ })

});