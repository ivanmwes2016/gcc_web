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

/***/ "./components/CardOne.tsx":
/*!********************************!*\
  !*** ./components/CardOne.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardContainer\": function() { return /* binding */ CardContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        '\\n    padding-left: 20px;\\n    padding-right: 20px;\\n    display: grid;\\n    grid-template-columns: 1.1fr 0.4fr 1.5fr;\\n    grid-template-rows: 0.6fr 1.8fr 0.5fr;\\n    gap: 0px 0px;\\n    grid-template-areas: \\n    \"image image title\"\\n    \"image image description\"\\n    \"image image button\";\\n\\n    .image{\\n        grid-area: \"image\";\\n    }\\n\\n    .title{\\n        grid-area:\"title\"\\n    }\\n\\n    .description{\\n        grid-area:\\'description\\'\\n    }\\n\\n    .button{\\n        grid-area:\\'button\\';\\n    }\\n'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\nvar CardContainer = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapper\",\n        children: _data__WEBPACK_IMPORTED_MODULE_2__.data.CardOne.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"image\",\n                        children: item.image\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"descrition\",\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button\",\n                        children: \"Click Here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_c = CardContainer;\nvar _c;\n$RefreshReg$(_c, \"CardContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRPbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDVDtBQUc3QixJQUFNRyxTQUFTLEdBQUdGLDZEQUFVLG1CQTJCM0I7QUFHTSxJQUFNSSxhQUFhLEdBQUcsV0FBTTs7SUFDL0IscUJBRUksOERBQUNELEtBQUc7UUFBQ0UsU0FBUyxFQUFDLFNBQVM7a0JBQ25CSixtREFBZ0IsQ0FBQ08sU0FBQUEsSUFBSTtpQ0FDbEIsOERBQUNMLEtBQUc7O2tDQUNBLDhEQUFDQSxLQUFHO3dCQUFDRSxTQUFTLEVBQUMsT0FBTztrQ0FBRUcsSUFBSSxDQUFDQyxLQUFLOzs7Ozs4QkFBTztrQ0FDekMsOERBQUNOLEtBQUc7d0JBQUNFLFNBQVMsRUFBQyxPQUFPO2tDQUFFRyxJQUFJLENBQUNFLEtBQUs7Ozs7OzhCQUFPO2tDQUN6Qyw4REFBQ1AsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLFlBQVk7a0NBQUVHLElBQUksQ0FBQ0csV0FBVzs7Ozs7OEJBQU87a0NBQ3BELDhEQUFDUixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsUUFBUTtrQ0FBQyxZQUFVOzs7Ozs4QkFBTTs7Ozs7O3NCQUN0QztTQUNULENBQUM7Ozs7O2FBQ0EsQ0FFVDtDQUNKO0FBZllELEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkT25lLnRzeD9kMTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhJ1xuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMWZyIDAuNGZyIDEuNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgMS44ZnIgMC41ZnI7XG4gICAgZ2FwOiAwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwiaW1hZ2UgaW1hZ2UgdGl0bGVcIlxuICAgIFwiaW1hZ2UgaW1hZ2UgZGVzY3JpcHRpb25cIlxuICAgIFwiaW1hZ2UgaW1hZ2UgYnV0dG9uXCI7XG5cbiAgICAuaW1hZ2V7XG4gICAgICAgIGdyaWQtYXJlYTogXCJpbWFnZVwiO1xuICAgIH1cblxuICAgIC50aXRsZXtcbiAgICAgICAgZ3JpZC1hcmVhOlwidGl0bGVcIlxuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgZ3JpZC1hcmVhOidkZXNjcmlwdGlvbidcbiAgICB9XG5cbiAgICAuYnV0dG9ue1xuICAgICAgICBncmlkLWFyZWE6J2J1dHRvbic7XG4gICAgfVxuYFxuXG5cbmV4cG9ydCBjb25zdCBDYXJkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICB7ZGF0YS5DYXJkT25lLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+e2l0ZW0uaW1hZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcml0aW9uXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Q2xpY2sgSGVyZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJkYXRhIiwiQ29udGFpbmVyIiwiZGl2IiwiQ2FyZENvbnRhaW5lciIsImNsYXNzTmFtZSIsIkNhcmRPbmUiLCJtYXAiLCJpdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CardOne.tsx\n");

/***/ })

});