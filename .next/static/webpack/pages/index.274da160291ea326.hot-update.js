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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroComponent\": function() { return /* binding */ HeroComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n    background-size: cover;\\n    background-image: url('/bg-bg.jpg');\\n    width: 100%;\\n    height: 600px;\\n    top: 0;\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    \\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar Hero = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Hero;\nvar HeroComponent = function() {\n    var _this1 = _this;\n    return(// to have a main bg image/video\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hero, {\n        children: _data__WEBPACK_IMPORTED_MODULE_2__.data.Hero.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-6xl font-extrabold text-gray-300\",\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-300 text-lg w-1/2 font-bold\",\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = HeroComponent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"HeroComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFFVDtBQUU3QixJQUFNRyxJQUFJLEdBQUdGLDZEQUFVLG1CQWF0QjtBQWJLRSxLQUFBQSxJQUFJO0FBZUgsSUFBTUUsYUFBYSxHQUFHLFdBQU07O0lBQy9CLE9BQ0ksZ0NBQWdDO2tCQUNoQyw4REFBQ0YsSUFBSTtrQkFHQUQsZ0RBQWEsQ0FBQ0ssU0FBQUEsSUFBSTtpQ0FDZiw4REFBQ0gsS0FBRzs7a0NBRUEsOERBQUNJLEdBQUM7d0JBQUNDLFNBQVMsRUFBQyx1Q0FBdUM7a0NBQUVGLElBQUksQ0FBQ0csS0FBSzs7Ozs7OEJBQUs7a0NBRXJFLDhEQUFDRixHQUFDO3dCQUFDQyxTQUFTLEVBQUUsdUNBQXVDO2tDQUFFRixJQUFJLENBQUNJLFdBQVc7Ozs7OzhCQUFLOzs7Ozs7c0JBQzFFO1NBRVQsQ0FBQzs7Ozs7YUFLQyxFQUNWO0NBQ0o7QUFyQllOLE1BQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLnRzeD9lNzc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbidcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEnXG5cbmNvbnN0IEhlcm8gPSBzdHlsZWQuZGl2YFxuICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYmctYmcuanBnJyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuYFxuXG5leHBvcnQgY29uc3QgSGVyb0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvLyB0byBoYXZlIGEgbWFpbiBiZyBpbWFnZS92aWRlb1xuICAgICAgICA8SGVybyA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGEuSGVyby5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIGJpZyB0aXRsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktMzAwJz57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBzbWFsbCB0ZXh0ICovfVxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSd0ZXh0LWdyYXktMzAwIHRleHQtbGcgdy0xLzIgZm9udC1ib2xkJz57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIDwvSGVybz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJkYXRhIiwiSGVybyIsImRpdiIsIkhlcm9Db21wb25lbnQiLCJtYXAiLCJpdGVtIiwicCIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n");

/***/ })

});