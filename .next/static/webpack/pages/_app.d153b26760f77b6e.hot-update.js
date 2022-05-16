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

/***/ "./components/HeaderComponent.tsx":
/*!****************************************!*\
  !*** ./components/HeaderComponent.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderComponent\": function() { return /* binding */ HeaderComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    position: sticky;\\n    top: 0;\\n    width: 100%;\\n    background-color: rgb(229 231 235);\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    height: 90px;\\n    padding-left: 20px;\\n    padding-right: 20px;\\n\\n    .title{\\n        font-size: 18px;\\n        width: 30%;\\n        font-weight: bold;\\n        color: #464646;\\n        \\n    }\\n\\n    ul{\\n        \\n        /* flex-direction: row; */\\n        width: 83%;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n\\n    li{\\n        display: flex;\\n        justify-content: center;\\n        list-style: none;\\n        margin: 20px;\\n        align-items: center;\\n        font-size: 12px;\\n        height: 90px;\\n        color: #606060;\\n\\n        :hover{\\n            border-bottom-width: 2px;\\n            border-bottom-color: #019dae ;\\n            height: 90px;\\n        }\\n    }\\n\\n    a{\\n        color: #019dae;\\n        font-weight: bold;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NavHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = NavHeader;\nvar HeaderComponent = function(param) {\n    var title = param.title;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), state = ref[0], setstate = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavHeader, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-20 h-20\",\n                src: \"/LOGO_GCM.png\"\n            }, void 0, false, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"title hidden lg:inline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"hidden lg:flex\",\n                children: _data__WEBPACK_IMPORTED_MODULE_2__.data.MenuItems.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: item.icon\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, _this1)\n                        ]\n                    }, item.name, true, {\n                        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {\n                className: \"w-10 h-10 inline lg:hidden stroke-1 stroke-sky-900 \"\n            }, void 0, false, {\n                fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, _this);\n} // export const HeaderComponent = () => {\n //     console.log(data.MenuItems);\n //     return (\n //         <nav className='flex  flex-row w-full h-20 bg-gray-200 items-center'>\n //             <h2>GREAT COMMISION</h2>\n //             <ul className='flex flex-row w-10/12 justify-center items-center list-none'>\n //                 {data.MenuItems.map( item => (\n //                     <li  className='flex-3 justify-center list-none items-center mr-6 ml-6 text-xs  hover:border-b-2 h-20 pt-3 border-b-cyan-800 '>\n //                         <div>{item.icon}</div>\n //                         <a className='cursor-pointer'>{item.name}</a>\n //                         </li>\n //                 ))}\n //             </ul>\n //         </nav>\n //     )\n // }\n;\n_s(HeaderComponent, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c1 = HeaderComponent;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavHeader\");\n$RefreshReg$(_c1, \"HeaderComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDUztBQUNhOztBQUluRCxJQUFNSyxTQUFTLEdBQUdGLDZEQUFVLG1CQWtEM0I7QUFsREtFLEtBQUFBLFNBQVM7QUF5RFIsSUFBTUUsZUFBZSxHQUFHLGdCQUFtQjtRQUFqQkMsS0FBSyxTQUFMQSxLQUFLOzs7SUFFbEMsSUFBMEJQLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFsRTVDLEtBa0VnQixHQUFjQSxHQUFjLEdBQTVCLEVBbEVoQixRQWtFMEIsR0FBSUEsR0FBYyxHQUFsQjtJQUV0QixxQkFDSSw4REFBQ0ksU0FBUzs7MEJBQ04sOERBQUNNLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXO2dCQUFDQyxHQUFHLEVBQUMsZUFBZTs7Ozs7cUJBQUc7MEJBQ2pELDhEQUFDQyxJQUFFO2dCQUFDRixTQUFTLEVBQUMsd0JBQXdCOzBCQUFFSixLQUFLOzs7OztxQkFBTTswQkFFbkQsOERBQUNPLElBQUU7Z0JBQUNILFNBQVMsRUFBQyxnQkFBZ0I7MEJBQ3pCVixxREFBa0IsQ0FBRWdCLFNBQUFBLElBQUk7eUNBQ3JCLDhEQUFDQyxJQUFFOzswQ0FDQyw4REFBQ2IsS0FBRzswQ0FBRVksSUFBSSxDQUFDRSxJQUFJOzs7OztzQ0FBTzswQ0FDdEIsOERBQUNDLEdBQUM7MENBQUVILElBQUksQ0FBQ0ksSUFBSTs7Ozs7c0NBQUs7O3VCQUZiSixJQUFJLENBQUNJLElBQUk7Ozs7OEJBR2I7aUJBQ1IsQ0FBQzs7Ozs7cUJBQ0Q7MEJBTUwsOERBQUNsQiw4REFBUTtnQkFBQ1EsU0FBUyxFQUFDLHFEQUFxRDs7Ozs7cUJBQUc7Ozs7OzthQUdwRSxDQUNmO0NBQ0osQ0FNRCx5Q0FBeUM7Q0FDekMsbUNBQW1DO0NBQ25DLGVBQWU7Q0FDZixnRkFBZ0Y7Q0FDaEYsdUNBQXVDO0NBQ3ZDLDJGQUEyRjtDQUMzRixpREFBaUQ7Q0FDakQsc0pBQXNKO0NBQ3RKLGlEQUFpRDtDQUNqRCx3RUFBd0U7Q0FDeEUsZ0NBQWdDO0NBQ2hDLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FFcEIsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixJQUFJO0FBdEJIO0dBM0JZTCxlQUFlO0FBQWZBLE1BQUFBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQudHN4PzRmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IE1lbnVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24nXG5cblxuY29uc3QgTmF2SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5IDIzMSAyMzUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdWx7XG4gICAgICAgIFxuICAgICAgICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xuICAgICAgICB3aWR0aDogODMlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBsaXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIGNvbG9yOiAjNjA2MDYwO1xuXG4gICAgICAgIDpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMTlkYWUgO1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXtcbiAgICAgICAgY29sb3I6ICMwMTlkYWU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuYFxuXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgdGl0bGU6U3RyaW5nXG59XG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICh7dGl0bGV9OlByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SGVhZGVyPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3ctMjAgaC0yMCcgc3JjPScvTE9HT19HQ00ucG5nJyAvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUgaGlkZGVuIGxnOmlubGluZSc+e3RpdGxlfTwvaDI+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2hpZGRlbiBsZzpmbGV4Jz5cbiAgICAgICAgICAgICAgICB7ZGF0YS5NZW51SXRlbXMubWFwKCBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uaWNvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgey8qIDxCdXR0b25Db21wb25lbnQgdGl0bGU9eydHSVZFJ30gaXNQcmltYXJ5PXtmYWxzZX0gLz5cblxuICAgICAgICAgICAgPEJ1dHRvbkNvbXBvbmVudCB0aXRsZT17J0NPTlRBQ1QnfSBpc1ByaW1hcnk9e3RydWV9IC8+ICovfVxuXG4gICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPSd3LTEwIGgtMTAgaW5saW5lIGxnOmhpZGRlbiBzdHJva2UtMSBzdHJva2Utc2t5LTkwMCAnIC8+XG5cbiAgICAgICBcbiAgICAgICAgPC9OYXZIZWFkZXI+XG4gICAgKVxufVxuXG5cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBIZWFkZXJDb21wb25lbnQgPSAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YS5NZW51SXRlbXMpO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4ICBmbGV4LXJvdyB3LWZ1bGwgaC0yMCBiZy1ncmF5LTIwMCBpdGVtcy1jZW50ZXInPlxuLy8gICAgICAgICAgICAgPGgyPkdSRUFUIENPTU1JU0lPTjwvaDI+XG4vLyAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHctMTAvMTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxpc3Qtbm9uZSc+XG4vLyAgICAgICAgICAgICAgICAge2RhdGEuTWVudUl0ZW1zLm1hcCggaXRlbSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3NOYW1lPSdmbGV4LTMganVzdGlmeS1jZW50ZXIgbGlzdC1ub25lIGl0ZW1zLWNlbnRlciBtci02IG1sLTYgdGV4dC14cyAgaG92ZXI6Ym9yZGVyLWItMiBoLTIwIHB0LTMgYm9yZGVyLWItY3lhbi04MDAgJz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uaWNvbn08L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInPntpdGVtLm5hbWV9PC9hPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgXG4vLyAgICAgICAgIDwvbmF2PlxuLy8gICAgIClcbi8vIH1cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJkYXRhIiwic3R5bGVkIiwiTWVudUljb24iLCJOYXZIZWFkZXIiLCJkaXYiLCJIZWFkZXJDb21wb25lbnQiLCJ0aXRsZSIsInN0YXRlIiwic2V0c3RhdGUiLCJpbWciLCJjbGFzc05hbWUiLCJzcmMiLCJoMiIsInVsIiwiTWVudUl0ZW1zIiwibWFwIiwiaXRlbSIsImxpIiwiaWNvbiIsImEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeaderComponent.tsx\n");

/***/ })

});