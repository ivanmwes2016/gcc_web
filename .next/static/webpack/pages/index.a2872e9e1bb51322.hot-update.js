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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    padding-left: 20px;\\n    padding-right: 20px;\\n    width: 450px;\\n    height: 150;\\n    display: flex;\\n    flex-direction: row;\\n\\n    .InfoContainter{\\n        width: 250px;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-between;\\n    }\\n\\n    .title{\\n        color: #555555;\\n        font-size: 18px;\\n        font-weight: 900;\\n    }\\n\\n    .descrition{\\n        color: #555555;\\n        font-size:14px;\\n    \\n    }\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Wrapper;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = Container;\nvar CardContainer = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n        className: \"py-6\",\n        children: _data__WEBPACK_IMPORTED_MODULE_3__.data.CardOne.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.image,\n                        alt: item.alt,\n                        className: \"w-40 h-40\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"InfoContainter\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"title\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"descrition px-4\",\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"button\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    title: item.LinkName,\n                                    isTextButton: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 50\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, _this1)\n                ]\n            }, item.title, true, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/CardOne.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, _this);\n};\n_c2 = CardContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardContainer);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"CardContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRPbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBQ1Q7QUFDUztBQUUvQixJQUFNSSxPQUFPLEdBQUdELDZEQUFVLG1CQUtoQztBQUxZQyxLQUFBQSxPQUFPO0FBUXBCLElBQU1FLFNBQVMsR0FBR0gsNkRBQVUsb0JBMkIzQjtBQTNCS0csTUFBQUEsU0FBUztBQTZCZixJQUFNQyxhQUFhLEdBQUcsV0FBTTs7SUFDeEIscUJBRUksOERBQUNILE9BQU87UUFBQ0ksU0FBUyxFQUFDLE1BQU07a0JBRXBCTixtREFBZ0IsQ0FBQ1MsU0FBQUEsSUFBSTtpQ0FDbEIsOERBQUNMLFNBQVM7O2tDQUNOLDhEQUFDTSxLQUFHO3dCQUFDQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBSzt3QkFBRUMsR0FBRyxFQUFFSixJQUFJLENBQUNJLEdBQUc7d0JBQUVQLFNBQVMsRUFBQyxXQUFXOzs7Ozs4QkFBRTtrQ0FDNUQsOERBQUNILEtBQUc7d0JBQUNHLFNBQVMsRUFBQyxnQkFBZ0I7OzBDQUMzQiw4REFBQ0gsS0FBRztnQ0FBQ0csU0FBUyxFQUFDLE9BQU87MENBQUVHLElBQUksQ0FBQ0ssS0FBSzs7Ozs7c0NBQU87MENBQ3pDLDhEQUFDWCxLQUFHO2dDQUFDRyxTQUFTLEVBQUMsaUJBQWlCOzBDQUFFRyxJQUFJLENBQUNNLFdBQVc7Ozs7O3NDQUFPOzBDQUN6RCw4REFBQ1osS0FBRztnQ0FBQ0csU0FBUyxFQUFDLFFBQVE7MENBQUUsNEVBQUNQLCtDQUFlO29DQUFDZSxLQUFLLEVBQUVMLElBQUksQ0FBQ08sUUFBUTtvQ0FBRUMsWUFBWSxFQUFFLElBQUk7Ozs7OzBDQUFHOzs7OztzQ0FBTTs7Ozs7OzhCQUN6Rjs7ZUFOTVIsSUFBSSxDQUFDSyxLQUFLOzs7O3NCQU9kO1NBQ2YsQ0FBQzs7Ozs7YUFDSSxDQUViO0NBQ0o7QUFsQktULE1BQUFBLGFBQWE7QUFtQmxCLCtEQUFlQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZE9uZS50c3g/ZDEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4vYnV0dG9uJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiAxNTA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLkluZm9Db250YWludGVye1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAudGl0bGV7XG4gICAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgLmRlc2NyaXRpb257XG4gICAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICBcbiAgICB9XG5cbmBcblxuY29uc3QgQ2FyZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT1cInB5LTZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGEuQ2FyZE9uZS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLmFsdH0gY2xhc3NOYW1lPVwidy00MCBoLTQwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9Db250YWludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXRpb24gcHgtNFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiA+PEJ1dHRvbkNvbXBvbmVudCB0aXRsZT17aXRlbS5MaW5rTmFtZX0gaXNUZXh0QnV0dG9uPXt0cnVlfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgXG4gICAgKVxufVxuIGV4cG9ydCBkZWZhdWx0IENhcmRDb250YWluZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b25Db21wb25lbnQiLCJkYXRhIiwic3R5bGVkIiwiV3JhcHBlciIsImRpdiIsIkNvbnRhaW5lciIsIkNhcmRDb250YWluZXIiLCJjbGFzc05hbWUiLCJDYXJkT25lIiwibWFwIiwiaXRlbSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmtOYW1lIiwiaXNUZXh0QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CardOne.tsx\n");

/***/ })

});