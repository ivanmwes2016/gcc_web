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

/***/ "./components/button.tsx":
/*!*******************************!*\
  !*** ./components/button.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/button.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"button__Button\",\n  componentId: \"sc-vorqo3-0\"\n})([\"font-weight:bold;font-size:\", \";padding:8px 0px 8px 0px;width:150px;margin-left:20px;border-radius:20px;border-width:1.5px;\", \";\", \";\"], function (props) {\n  return props.isFontBig ? '15px' : '12px';\n}, function (props) {\n  return !props.isOutline ? (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([\"background-color:#ff8400;color:white;border-color:#ff8400;transition:all 0.5s;:hover{background-color:#00b3ff;color:white;border-color:#ffcc00;transition:all 0.5s;}\"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([\"color:white;border-color:#fe6716;\"]);\n}, function (props) {\n  return props.isTextButton ? (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([\".arrow{display:inline;};color:#ff8400;padding:0;border:none;background-color:rgba(0,0,0,0);:hover{.arrow{display:inline;color:gray;transition:all 0.5s;}}\"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([\".arrow{display:none;};\"]);\n});\n_c = Button;\n\nvar ButtonComponent = function ButtonComponent(_ref) {\n  var isOutline = _ref.isOutline,\n      isTextButton = _ref.isTextButton,\n      isFontBig = _ref.isFontBig,\n      title = _ref.title;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n    isOutline: isOutline,\n    isTextButton: isTextButton,\n    title: title,\n    isFontBig: isFontBig,\n    children: [title, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ArrowCircleRightIcon, {\n        className: \" arrow w-5 h-5\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 24\n      }, _this), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 12\n  }, _this);\n};\n\n_c2 = ButtonComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonComponent);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c2, \"ButtonComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFXQSxJQUFNSSxNQUFNLEdBQUdGLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUVLLFVBQUFJLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFNBQU4sR0FBaUIsTUFBakIsR0FBeUIsTUFBN0I7QUFBQSxDQUZWLEVBVVAsVUFBQUQsS0FBSztBQUFBLFNBQUksQ0FBQ0EsS0FBSyxDQUFDRSxTQUFQLEdBRU5MLHNEQUZNLDZLQWlCTkEsc0RBakJNLHVDQUFKO0FBQUEsQ0FWRSxFQWtDTixVQUFBRyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxZQUFOLEdBRVBOLHNEQUZPLGtLQXNCUEEsc0RBdEJPLDRCQUFKO0FBQUEsQ0FsQ0MsQ0FBWjtLQUFNQzs7QUFnRU4sSUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUF1RDtBQUFBLE1BQXJERixTQUFxRCxRQUFyREEsU0FBcUQ7QUFBQSxNQUExQ0MsWUFBMEMsUUFBMUNBLFlBQTBDO0FBQUEsTUFBNUJGLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLE1BQWxCSSxLQUFrQixRQUFsQkEsS0FBa0I7QUFDM0Usc0JBQU8sOERBQUMsTUFBRDtBQUFRLGFBQVMsRUFBRUgsU0FBbkI7QUFBOEIsZ0JBQVksRUFBRUMsWUFBNUM7QUFBMEQsU0FBSyxFQUFFRSxLQUFqRTtBQUF3RSxhQUFTLEVBQUVKLFNBQW5GO0FBQUEsZUFDRkksS0FERSxvQkFDSztBQUFBLG1DQUFPLDhEQUFDLHdFQUFEO0FBQXNCLGlCQUFTLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBR0gsQ0FKRDs7TUFBTUQ7QUFPTiwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi50c3g/YzRiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7QXJyb3dDaXJjbGVSaWdodEljb259IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgaXNPdXRsaW5lPzpib29sZWFuLFxuICAgIGlzVGV4dEJ1dHRvbj86Ym9vbGVhbixcbiAgICBpc0ZvbnRCaWc/OmJvb2xlYW4sXG4gICAgdGl0bGU6c3RyaW5nLFxuICAgIHVybD86c3RyaW5nXG4gICAgXG59XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248UHJvcHM+YFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5pc0ZvbnRCaWc/ICcxNXB4JzogJzEycHgnfTtcbiAgICBwYWRkaW5nOjhweCAwcHggOHB4IDBweDtcbiAgICB3aWR0aDoxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci13aWR0aDogMS41cHg7XG5cblxuICAgJHtwcm9wcyA9PiAhcHJvcHMuaXNPdXRsaW5lP1xuICAgICAgICBcbiAgICAgICAgY3NzYFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4NDAwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiNmZjg0MDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIDpob3ZlcntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2ZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6I2ZmY2MwMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgXG4gICAgICAgIGA6XG4gICAgICAgIGNzc2BcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjojZmU2NzE2O1xuICAgICAgICAgICBcbiAgICAgICAgYFxuICAgIH07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmlzVGV4dEJ1dHRvbj9cbiAgICAgICBcbiAgICAgICAgY3NzYFxuICAgICAgICAgICAgLmFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb2xvcjogI2ZmODQwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6MCA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAgICAgOmhvdmVye1xuXG4gICAgICAgICAgICAgICAgLmFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgICAgOlxuICAgICAgICBjc3NgXG4gICAgICAgICAgICAuYXJyb3d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGBcbiAgICB9O1xuYFxuXG5jb25zdCBCdXR0b25Db21wb25lbnQgPSAoe2lzT3V0bGluZSwgaXNUZXh0QnV0dG9uLCBpc0ZvbnRCaWcsdGl0bGUgfTpQcm9wcykgPT4ge1xuICAgIHJldHVybiA8QnV0dG9uIGlzT3V0bGluZT17aXNPdXRsaW5lfSBpc1RleHRCdXR0b249e2lzVGV4dEJ1dHRvbn0gdGl0bGU9e3RpdGxlfSBpc0ZvbnRCaWc9e2lzRm9udEJpZ30+XG4gICAgICAgIHt0aXRsZX0gPHNwYW4+IDxBcnJvd0NpcmNsZVJpZ2h0SWNvbiBjbGFzc05hbWU9XCIgYXJyb3cgdy01IGgtNVwiIC8+IDwvc3Bhbj5cbiAgICAgICAgPC9CdXR0b24+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29tcG9uZW50XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnJvd0NpcmNsZVJpZ2h0SWNvbiIsInN0eWxlZCIsImNzcyIsIkJ1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwiaXNGb250QmlnIiwiaXNPdXRsaW5lIiwiaXNUZXh0QnV0dG9uIiwiQnV0dG9uQ29tcG9uZW50IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button.tsx\n");

/***/ })

});