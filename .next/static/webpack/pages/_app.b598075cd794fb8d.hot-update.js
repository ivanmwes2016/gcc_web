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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderComponent\": function() { return /* binding */ HeaderComponent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NavHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"HeaderComponent__NavHeader\",\n  componentId: \"sc-ikp3b8-0\"\n})([\"position:sticky;top:0;width:100%;background-color:rgb(229 231 235);display:flex;justify-content:space-between;align-items:center;height:90px;padding-left:20px;padding-right:20px;.title{font-size:18px;width:30%;font-weight:bold;color:#464646;}ul{width:83%;justify-content:center;align-items:center;}li{display:flex;justify-content:center;list-style:none;margin:20px;align-items:center;font-size:12px;height:90px;color:#606060;:hover{border-bottom-width:2px;border-bottom-color:#019dae;height:90px;}}a{color:#019dae;font-weight:bold;}\"]);\n_c = NavHeader;\nvar HeaderComponent = function HeaderComponent(_ref) {\n  _s();\n\n  var title = _ref.title;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      state = _useState[0],\n      setstate = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(NavHeader, {\n    className: \"hidden\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n      className: \"w-20 h-20\",\n      src: \"/LOGO_GCM.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      className: \"title hidden lg:inline\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"hidden lg:flex\",\n      children: _data__WEBPACK_IMPORTED_MODULE_1__.data.MenuItems.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            children: item.icon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 25\n          }, _this)]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: 'GIVE',\n      isOutline: false\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: 'CONTACT',\n      isOutline: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.MenuIcon, {\n      className: \"w-10 h-10 inline lg:hidden stroke-1 stroke-sky-900 \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 9\n  }, _this);\n}; // export const HeaderComponent = () => {\n//     console.log(data.MenuItems);\n//     return (\n//         <nav className='flex  flex-row w-full h-20 bg-gray-200 items-center'>\n//             <h2>GREAT COMMISION</h2>\n//             <ul className='flex flex-row w-10/12 justify-center items-center list-none'>\n//                 {data.MenuItems.map( item => (\n//                     <li  className='flex-3 justify-center list-none items-center mr-6 ml-6 text-xs  hover:border-b-2 h-20 pt-3 border-b-cyan-800 '>\n//                         <div>{item.icon}</div>\n//                         <a className='cursor-pointer'>{item.name}</a>\n//                         </li>\n//                 ))}\n//             </ul>\n//         </nav>\n//     )\n// }\n\n_s(HeaderComponent, \"WjDf4dodzP4H7+E0mY7Vof135iY=\");\n\n_c2 = HeaderComponent;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavHeader\");\n$RefreshReg$(_c2, \"HeaderComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTU0sU0FBUyxHQUFHRCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw0aEJBQWY7S0FBTUM7QUF5REMsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFtQjtBQUFBOztBQUFBLE1BQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7O0FBRTlDLGtCQUEwQlIsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQUEsTUFBT1MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsc0JBQ0ksOERBQUMsU0FBRDtBQUFXLGFBQVMsRUFBQyxRQUFyQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLHdCQUFkO0FBQUEsZ0JBQXdDRjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFJSTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUFBLGdCQUNLUCxxREFBQSxDQUFvQixVQUFBWSxJQUFJO0FBQUEsNEJBQ3JCO0FBQUEsa0NBQ0k7QUFBQSxzQkFBTUEsSUFBSSxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLHNCQUFJRCxJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBLFdBQVNGLElBQUksQ0FBQ0UsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBYUksOERBQUMsK0NBQUQ7QUFBaUIsV0FBSyxFQUFFLE1BQXhCO0FBQWdDLGVBQVMsRUFBRTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkosZUFlSSw4REFBQywrQ0FBRDtBQUFpQixXQUFLLEVBQUUsU0FBeEI7QUFBbUMsZUFBUyxFQUFFO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSixlQWlCSSw4REFBQyw4REFBRDtBQUFVLGVBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBM0JNLEVBaUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztHQWpEYVI7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50LnRzeD80ZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IE1lbnVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL2J1dHRvbidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cblxuXG5jb25zdCBOYXZIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjkgMjMxIDIzNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1bHtcbiAgICAgICAgXG4gICAgICAgIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXG4gICAgICAgIHdpZHRoOiA4MyU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIGxpe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgY29sb3I6ICM2MDYwNjA7XG5cbiAgICAgICAgOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAxOWRhZSA7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhe1xuICAgICAgICBjb2xvcjogIzAxOWRhZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG5gXG5cbmludGVyZmFjZSBQcm9wc3tcbiAgICB0aXRsZTpTdHJpbmdcbn1cblxuXG5leHBvcnQgY29uc3QgSGVhZGVyQ29tcG9uZW50ID0gKHt0aXRsZX06UHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlU3RhdGUobnVsbClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZIZWFkZXIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy0yMCBoLTIwJyBzcmM9Jy9MT0dPX0dDTS5wbmcnIC8+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSBoaWRkZW4gbGc6aW5saW5lJz57dGl0bGV9PC9oMj5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0naGlkZGVuIGxnOmZsZXgnPlxuICAgICAgICAgICAgICAgIHtkYXRhLk1lbnVJdGVtcy5tYXAoIGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5pY29ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0ubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IHRpdGxlPXsnR0lWRSd9IGlzT3V0bGluZT17ZmFsc2V9IC8+XG5cbiAgICAgICAgICAgIDxCdXR0b25Db21wb25lbnQgdGl0bGU9eydDT05UQUNUJ30gaXNPdXRsaW5lPXt0cnVlfSAvPlxuXG4gICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPSd3LTEwIGgtMTAgaW5saW5lIGxnOmhpZGRlbiBzdHJva2UtMSBzdHJva2Utc2t5LTkwMCAnIC8+XG5cbiAgICAgICBcbiAgICAgICAgPC9OYXZIZWFkZXI+XG4gICAgKVxufVxuXG5cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBIZWFkZXJDb21wb25lbnQgPSAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YS5NZW51SXRlbXMpO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4ICBmbGV4LXJvdyB3LWZ1bGwgaC0yMCBiZy1ncmF5LTIwMCBpdGVtcy1jZW50ZXInPlxuLy8gICAgICAgICAgICAgPGgyPkdSRUFUIENPTU1JU0lPTjwvaDI+XG4vLyAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHctMTAvMTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxpc3Qtbm9uZSc+XG4vLyAgICAgICAgICAgICAgICAge2RhdGEuTWVudUl0ZW1zLm1hcCggaXRlbSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3NOYW1lPSdmbGV4LTMganVzdGlmeS1jZW50ZXIgbGlzdC1ub25lIGl0ZW1zLWNlbnRlciBtci02IG1sLTYgdGV4dC14cyAgaG92ZXI6Ym9yZGVyLWItMiBoLTIwIHB0LTMgYm9yZGVyLWItY3lhbi04MDAgJz5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0uaWNvbn08L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInPntpdGVtLm5hbWV9PC9hPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgXG4vLyAgICAgICAgIDwvbmF2PlxuLy8gICAgIClcbi8vIH1cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJkYXRhIiwiTWVudUljb24iLCJCdXR0b25Db21wb25lbnQiLCJzdHlsZWQiLCJOYXZIZWFkZXIiLCJkaXYiLCJIZWFkZXJDb21wb25lbnQiLCJ0aXRsZSIsInN0YXRlIiwic2V0c3RhdGUiLCJNZW51SXRlbXMiLCJtYXAiLCJpdGVtIiwiaWNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeaderComponent.tsx\n");

/***/ })

});