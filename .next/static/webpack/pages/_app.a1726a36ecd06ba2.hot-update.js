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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderComponent\": function() { return /* binding */ HeaderComponent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/HeaderComponent.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NavHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"HeaderComponent__NavHeader\",\n  componentId: \"sc-ikp3b8-0\"\n})([\"position:sticky;top:0;width:100%;background-color:#1b2128;height:90px;padding-left:20px;padding-right:20px;z-index:1;.title{font-size:18px;width:30%;font-weight:bold;color:#e6e6e6;}ul{width:83%;justify-content:center;align-items:center;}li{display:flex;justify-content:center;list-style:none;margin:20px;align-items:center;font-size:12px;height:90px;color:#e6e6e6;:hover{border-bottom-width:4px;border-bottom-color:#019dae;color:#019dae;cursor:pointer;a{color:#019dae;}transition:all 0.5s;}a{color:#e6e6e6;font-weight:bold;}}\"]);\n_c = NavHeader;\nvar HeaderComponent = function HeaderComponent(_ref) {\n  _s();\n\n  var title = _ref.title;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      state = _useState[0],\n      setstate = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(NavHeader, {\n    className: \"flex justify-between space-x-8 items-center lg:flex \",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n      className: \"w-20 h-20\",\n      src: \"/LOGO_GCM.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      className: \"title hidden lg:inline\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"hidden lg:flex\",\n      children: _data__WEBPACK_IMPORTED_MODULE_1__.data.MenuItems.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            children: item.icon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, _this)]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: 'GIVE',\n      isOutline: false\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: 'CONTACT',\n      isOutline: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.MenuIcon, {\n      className: \"w-10 h-10 inline lg:hidden stroke-1 stroke-slate-100 \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }, _this);\n}; // export const HeaderComponent = () => {\n//     console.log(data.MenuItems);\n//     return (\n//         <nav className='flex  flex-row w-full h-20 bg-gray-200 items-center'>\n//             <h2>GREAT COMMISION</h2>\n//             <ul className='flex flex-row w-10/12 justify-center items-center list-none'>\n//                 {data.MenuItems.map( item => (\n//                     <li  className='flex-3 justify-center list-none items-center mr-6 ml-6 text-xs  hover:border-b-2 h-20 pt-3 border-b-cyan-800 '>\n//                         <div>{item.icon}</div>\n//                         <a className='cursor-pointer'>{item.name}</a>\n//                         </li>\n//                 ))}\n//             </ul>\n//         </nav>\n//     )\n// }\n\n_s(HeaderComponent, \"WjDf4dodzP4H7+E0mY7Vof135iY=\");\n\n_c2 = HeaderComponent;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavHeader\");\n$RefreshReg$(_c2, \"HeaderComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTU0sU0FBUyxHQUFHRCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxxaEJBQWY7S0FBTUM7QUFvRUMsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFtQjtBQUFBOztBQUFBLE1BQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7O0FBRTlDLGtCQUEwQlIsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQUEsTUFBT1MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsc0JBQ0ksOERBQUMsU0FBRDtBQUFXLGFBQVMsRUFBQyxzREFBckI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLFNBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBQyx3QkFBZDtBQUFBLGdCQUF3Q0Y7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBSUk7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBQSxnQkFDS1AscURBQUEsQ0FBb0IsVUFBQVksSUFBSTtBQUFBLDRCQUNyQjtBQUFBLGtDQUNJO0FBQUEsc0JBQU1BLElBQUksQ0FBQ0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxzQkFBSUQsSUFBSSxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxXQUFTRixJQUFJLENBQUNFLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEcUI7QUFBQSxPQUF4QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQWFJLDhEQUFDLCtDQUFEO0FBQWlCLFdBQUssRUFBRSxNQUF4QjtBQUFnQyxlQUFTLEVBQUU7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKLGVBZUksOERBQUMsK0NBQUQ7QUFBaUIsV0FBSyxFQUFFLFNBQXhCO0FBQW1DLGVBQVMsRUFBRTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkosZUFpQkksOERBQUMsOERBQUQ7QUFBVSxlQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQTNCTSxFQWlDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7R0FqRGFSOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC50c3g/NGZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyBNZW51SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5cblxuY29uc3QgTmF2SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyMTI4O1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6MTtcblxuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNlNmU2ZTY7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVse1xuICAgICAgICBcbiAgICAgICAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cbiAgICAgICAgd2lkdGg6IDgzJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgbGl7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBjb2xvcjogI2U2ZTZlNjtcbiAgICAgICAgXG4gICAgICAgIDpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMTlkYWUgO1xuICAgICAgICAgICAgLyogaGVpZ2h0OiA5MHB4OyAqL1xuICAgICAgICAgICAgY29sb3I6ICMwMTlkYWU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjojMDE5ZGFlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiAjZTZlNmU2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxuYFxuXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgdGl0bGU6U3RyaW5nXG59XG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICh7dGl0bGV9OlByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SGVhZGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtOCBpdGVtcy1jZW50ZXIgbGc6ZmxleCBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd3LTIwIGgtMjAnIHNyYz0nL0xPR09fR0NNLnBuZycgLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlIGhpZGRlbiBsZzppbmxpbmUnPnt0aXRsZX08L2gyPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdoaWRkZW4gbGc6ZmxleCc+XG4gICAgICAgICAgICAgICAge2RhdGEuTWVudUl0ZW1zLm1hcCggaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLmljb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxCdXR0b25Db21wb25lbnQgdGl0bGU9eydHSVZFJ30gaXNPdXRsaW5lPXtmYWxzZX0gLz5cblxuICAgICAgICAgICAgPEJ1dHRvbkNvbXBvbmVudCB0aXRsZT17J0NPTlRBQ1QnfSBpc091dGxpbmU9e3RydWV9IC8+XG5cbiAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9J3ctMTAgaC0xMCBpbmxpbmUgbGc6aGlkZGVuIHN0cm9rZS0xIHN0cm9rZS1zbGF0ZS0xMDAgJyAvPlxuXG4gICAgICAgXG4gICAgICAgIDwvTmF2SGVhZGVyPlxuICAgIClcbn1cblxuXG5cblxuXG4vLyBleHBvcnQgY29uc3QgSGVhZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEuTWVudUl0ZW1zKTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCAgZmxleC1yb3cgdy1mdWxsIGgtMjAgYmctZ3JheS0yMDAgaXRlbXMtY2VudGVyJz5cbi8vICAgICAgICAgICAgIDxoMj5HUkVBVCBDT01NSVNJT048L2gyPlxuLy8gICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyB3LTEwLzEyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsaXN0LW5vbmUnPlxuLy8gICAgICAgICAgICAgICAgIHtkYXRhLk1lbnVJdGVtcy5tYXAoIGl0ZW0gPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICA8bGkgIGNsYXNzTmFtZT0nZmxleC0zIGp1c3RpZnktY2VudGVyIGxpc3Qtbm9uZSBpdGVtcy1jZW50ZXIgbXItNiBtbC02IHRleHQteHMgIGhvdmVyOmJvcmRlci1iLTIgaC0yMCBwdC0zIGJvcmRlci1iLWN5YW4tODAwICc+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLmljb259PC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJz57aXRlbS5uYW1lfTwvYT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICA8L3VsPlxuICAgICAgIFxuLy8gICAgICAgICA8L25hdj5cbi8vICAgICApXG4vLyB9XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZGF0YSIsIk1lbnVJY29uIiwiQnV0dG9uQ29tcG9uZW50Iiwic3R5bGVkIiwiTmF2SGVhZGVyIiwiZGl2IiwiSGVhZGVyQ29tcG9uZW50IiwidGl0bGUiLCJzdGF0ZSIsInNldHN0YXRlIiwiTWVudUl0ZW1zIiwibWFwIiwiaXRlbSIsImljb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeaderComponent.tsx\n");

/***/ })

});