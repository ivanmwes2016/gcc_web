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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        '\\n    padding-left: 20px;\\n    padding-right: 20px;\\n    width: 315px;\\n    height: 150;\\n    display: grid;\\n    grid-template-columns: 1.1fr 0.4fr 1.5fr;\\n    grid-template-rows: 0.6fr 1.8fr 0.5fr;\\n    gap: 0px 0px;\\n    grid-template-areas: \\n    \"image image title\"\\n    \"image image description\"\\n    \"image image button\";\\n\\n    .image{\\n        grid-area: \"image\";\\n    }\\n\\n    .title{\\n        grid-area:\"title\"\\n    }\\n\\n    .description{\\n        grid-area:\\'description\\'\\n    }\\n\\n    .button{\\n        grid-area:\\'button\\';\\n    }\\n'\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Wrapper;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = Container;\nvar CardContainer = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n        className: \"py-6\",\n        children: _data__WEBPACK_IMPORTED_MODULE_2__.data.CardOne.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.image,\n                        alt: item.alt,\n                        className: \"w-40 h-40\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"descrition\",\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Hello\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, _this);\n};\n_c2 = CardContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardContainer);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"CardContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRPbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFFVDtBQUV0QixJQUFNRyxPQUFPLEdBQUdGLDZEQUFVLG1CQUloQztBQUpZRSxLQUFBQSxPQUFPO0FBT3BCLElBQU1FLFNBQVMsR0FBR0osNkRBQVUsb0JBNkIzQjtBQTdCS0ksTUFBQUEsU0FBUztBQWlDZixJQUFNQyxhQUFhLEdBQUcsV0FBTTs7SUFDeEIscUJBRUksOERBQUNILE9BQU87UUFBQ0ksU0FBUyxFQUFDLE1BQU07a0JBRXBCTCxtREFBZ0IsQ0FBQ1EsU0FBQUEsSUFBSTtpQ0FDbEIsOERBQUNMLFNBQVM7O2tDQUNOLDhEQUFDTSxLQUFHO3dCQUFDQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBSzt3QkFBRUMsR0FBRyxFQUFFSixJQUFJLENBQUNJLEdBQUc7d0JBQUVQLFNBQVMsRUFBQyxXQUFXOzs7Ozs4QkFBRTtrQ0FDNUQsOERBQUNILEtBQUc7d0JBQUNHLFNBQVMsRUFBQyxPQUFPO2tDQUFFRyxJQUFJLENBQUNLLEtBQUs7Ozs7OzhCQUFPO2tDQUN6Qyw4REFBQ1gsS0FBRzt3QkFBQ0csU0FBUyxFQUFDLFlBQVk7a0NBQUVHLElBQUksQ0FBQ00sV0FBVzs7Ozs7OEJBQU87a0NBQ3BELDhEQUFDQyxRQUFNO2tDQUFDLE9BQUs7Ozs7OzhCQUFTOzs7Ozs7c0JBRWQ7U0FDZixDQUFDOzs7OzthQUNJLENBRWI7Q0FDSjtBQWpCS1gsTUFBQUEsYUFBYTtBQWtCbEIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkT25lLnRzeD9kMTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4vYnV0dG9uJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSdcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbmBcblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAzMTVweDtcbiAgICBoZWlnaHQ6IDE1MDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4xZnIgMC40ZnIgMS41ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciAxLjhmciAwLjVmcjtcbiAgICBnYXA6IDBweCAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJpbWFnZSBpbWFnZSB0aXRsZVwiXG4gICAgXCJpbWFnZSBpbWFnZSBkZXNjcmlwdGlvblwiXG4gICAgXCJpbWFnZSBpbWFnZSBidXR0b25cIjtcblxuICAgIC5pbWFnZXtcbiAgICAgICAgZ3JpZC1hcmVhOiBcImltYWdlXCI7XG4gICAgfVxuXG4gICAgLnRpdGxle1xuICAgICAgICBncmlkLWFyZWE6XCJ0aXRsZVwiXG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICBncmlkLWFyZWE6J2Rlc2NyaXB0aW9uJ1xuICAgIH1cblxuICAgIC5idXR0b257XG4gICAgICAgIGdyaWQtYXJlYTonYnV0dG9uJztcbiAgICB9XG5gXG5cblxuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPVwicHktNlwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7ZGF0YS5DYXJkT25lLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLmFsdH0gY2xhc3NOYW1lPVwidy00MCBoLTQwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpdGlvblwiPntpdGVtLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkhlbGxvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uQ29tcG9uZW50IHRpdGxlPXtpdGVtLnRpdGxlfSBpc091dGxpbmU9e3RydWV9Lz4gKi99XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICBcbiAgICApXG59XG4gZXhwb3J0IGRlZmF1bHQgQ2FyZENvbnRhaW5lciJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImRhdGEiLCJXcmFwcGVyIiwiZGl2IiwiQ29udGFpbmVyIiwiQ2FyZENvbnRhaW5lciIsImNsYXNzTmFtZSIsIkNhcmRPbmUiLCJtYXAiLCJpdGVtIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CardOne.tsx\n");

/***/ })

});