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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        '\\n    padding-left: 20px;\\n    padding-right: 20px;\\n    width: 315px;\\n    height: 150;\\n    display: grid;\\n    grid-template-columns: 1.1fr 0.4fr 1.5fr;\\n    grid-template-rows: 0.6fr 1.8fr 0.5fr;\\n    gap: 0px 0px;\\n    grid-template-areas: \\n    \"image image title\"\\n    \"image image description\"\\n    \"image image button\";\\n\\n    .image{\\n        grid-area: \"image\";\\n    }\\n\\n    .title{\\n        grid-area:\"title\"\\n    }\\n\\n    .description{\\n        grid-area:\\'description\\'\\n    }\\n\\n    .button{\\n        grid-area:\\'button\\';\\n    }\\n'\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Wrapper;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = Container;\nvar CardContainer = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n        className: \"py-6\",\n        children: _data__WEBPACK_IMPORTED_MODULE_3__.data.CardOne.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.image,\n                        alt: item.alt,\n                        className: \"w-40 h-40\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"descrition\",\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Iam the button\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 46\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: item.title,\n                        isTextButton: true\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, _this);\n};\n_c2 = CardContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardContainer);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"CardContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRPbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBQ0E7QUFDVDtBQUV0QixJQUFNSSxPQUFPLEdBQUdILDZEQUFVLG1CQUloQztBQUpZRyxLQUFBQSxPQUFPO0FBT3BCLElBQU1FLFNBQVMsR0FBR0wsNkRBQVUsb0JBNkIzQjtBQTdCS0ssTUFBQUEsU0FBUztBQWlDZixJQUFNQyxhQUFhLEdBQUcsV0FBTTs7SUFDeEIscUJBRUksOERBQUNILE9BQU87UUFBQ0ksU0FBUyxFQUFDLE1BQU07a0JBRXBCTCxtREFBZ0IsQ0FBQ1EsU0FBQUEsSUFBSTtpQ0FDbEIsOERBQUNMLFNBQVM7O2tDQUNOLDhEQUFDTSxLQUFHO3dCQUFDQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBSzt3QkFBRUMsR0FBRyxFQUFFSixJQUFJLENBQUNJLEdBQUc7d0JBQUVQLFNBQVMsRUFBQyxXQUFXOzs7Ozs4QkFBRTtrQ0FDNUQsOERBQUNILEtBQUc7d0JBQUNHLFNBQVMsRUFBQyxPQUFPO2tDQUFFRyxJQUFJLENBQUNLLEtBQUs7Ozs7OzhCQUFPO2tDQUN6Qyw4REFBQ1gsS0FBRzt3QkFBQ0csU0FBUyxFQUFDLFlBQVk7a0NBQUVHLElBQUksQ0FBQ00sV0FBVzs7Ozs7OEJBQU87a0NBQ3BELDhEQUFDWixLQUFHO3dCQUFDRyxTQUFTLEVBQUMsUUFBUTtrQ0FBRSw0RUFBQ1UsUUFBTTtzQ0FBQyxnQkFBYzs7Ozs7a0NBQVM7Ozs7OzhCQUFNO2tDQUM5RCw4REFBQ2hCLCtDQUFlO3dCQUFDYyxLQUFLLEVBQUVMLElBQUksQ0FBQ0ssS0FBSzt3QkFBRUcsWUFBWSxFQUFFLElBQUk7Ozs7OzhCQUFHOzs7Ozs7c0JBQ2pEO1NBQ2YsQ0FBQzs7Ozs7YUFDSSxDQUViO0NBQ0o7QUFqQktaLE1BQUFBLGFBQWE7QUFrQmxCLCtEQUFlQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZE9uZS50c3g/ZDEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL2J1dHRvbidcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMzE1cHg7XG4gICAgaGVpZ2h0OiAxNTA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMWZyIDAuNGZyIDEuNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgMS44ZnIgMC41ZnI7XG4gICAgZ2FwOiAwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwiaW1hZ2UgaW1hZ2UgdGl0bGVcIlxuICAgIFwiaW1hZ2UgaW1hZ2UgZGVzY3JpcHRpb25cIlxuICAgIFwiaW1hZ2UgaW1hZ2UgYnV0dG9uXCI7XG5cbiAgICAuaW1hZ2V7XG4gICAgICAgIGdyaWQtYXJlYTogXCJpbWFnZVwiO1xuICAgIH1cblxuICAgIC50aXRsZXtcbiAgICAgICAgZ3JpZC1hcmVhOlwidGl0bGVcIlxuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgZ3JpZC1hcmVhOidkZXNjcmlwdGlvbidcbiAgICB9XG5cbiAgICAuYnV0dG9ue1xuICAgICAgICBncmlkLWFyZWE6J2J1dHRvbic7XG4gICAgfVxuYFxuXG5cblxuY29uc3QgQ2FyZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT1cInB5LTZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGEuQ2FyZE9uZS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS5hbHR9IGNsYXNzTmFtZT1cInctNDAgaC00MFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXRpb25cIj57aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiA+PGJ1dHRvbj5JYW0gdGhlIGJ1dHRvbjwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IHRpdGxlPXtpdGVtLnRpdGxlfSBpc1RleHRCdXR0b249e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIFxuICAgIClcbn1cbiBleHBvcnQgZGVmYXVsdCBDYXJkQ29udGFpbmVyIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQnV0dG9uQ29tcG9uZW50IiwiZGF0YSIsIldyYXBwZXIiLCJkaXYiLCJDb250YWluZXIiLCJDYXJkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiQ2FyZE9uZSIsIm1hcCIsIml0ZW0iLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJpc1RleHRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CardOne.tsx\n");

/***/ })

});