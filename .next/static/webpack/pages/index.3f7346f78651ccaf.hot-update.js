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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroComponent\": function() { return /* binding */ HeroComponent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Hero.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Hero = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"Hero\",\n  componentId: \"sc-2z7q2k-0\"\n})([\"background-size:cover;background-image:url('/bg-bg.jpg');width:100%;height:600px;top:0;margin:0;padding:0;display:flex;justify-content:center;align-items:center;\"]);\n_c = Hero;\nvar HeroComponent = function HeroComponent() {\n  return (\n    /*#__PURE__*/\n    // to have a main bg image/video\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Hero, {\n      children: _data__WEBPACK_IMPORTED_MODULE_2__.data.Hero.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"flex flex-col justify-center items-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: \"text-6xl font-extrabold text-gray-300\",\n            children: item.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: \"text-gray-300 text-lg font-bold py-5 w-96 lg:w-1\",\n            children: item.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            isOutline: false,\n            title: \"WATCH US LIVE\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }, _this)]\n        }, item.title, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this)\n  );\n};\n_c2 = HeroComponent;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c2, \"HeroComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksSUFBSSxHQUFHRCx3RUFBSDtBQUFBO0FBQUE7QUFBQSx5S0FBVjtLQUFNQztBQWVDLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMvQjtBQUFBO0FBQ0k7QUFDQSxrRUFBQyxJQUFEO0FBQUEsZ0JBR0tKLGdEQUFBLENBQWMsVUFBQU0sSUFBSTtBQUFBLDRCQUNmO0FBQXNCLG1CQUFTLEVBQUMsMkNBQWhDO0FBQUEsa0NBRUk7QUFBRyxxQkFBUyxFQUFDLHVDQUFiO0FBQUEsc0JBQXNEQSxJQUFJLENBQUNDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFJSTtBQUFHLHFCQUFTLEVBQUUsa0RBQWQ7QUFBQSxzQkFBa0VELElBQUksQ0FBQ0U7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJLDhEQUFDLCtDQUFEO0FBQWlCLHFCQUFTLEVBQUUsS0FBNUI7QUFBbUMsaUJBQUssRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUEsV0FBVUYsSUFBSSxDQUFDQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFsQjtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQWtCSCxDQW5CTTtNQUFNSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8udHN4P2U3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL2J1dHRvbidcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBIZXJvID0gc3R5bGVkLmRpdmBcbiAgICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2JnLWJnLmpwZycpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbmBcblxuZXhwb3J0IGNvbnN0IEhlcm9Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gdG8gaGF2ZSBhIG1haW4gYmcgaW1hZ2UvdmlkZW9cbiAgICAgICAgPEhlcm8gPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtkYXRhLkhlcm8ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogYmlnIHRpdGxlICovfVxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtNnhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS0zMDAnPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIHNtYWxsIHRleHQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9J3RleHQtZ3JheS0zMDAgdGV4dC1sZyBmb250LWJvbGQgcHktNSB3LTk2IGxnOnctMSc+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IGlzT3V0bGluZT17ZmFsc2V9IHRpdGxlPSdXQVRDSCBVUyBMSVZFJy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgXG4gICAgICAgIDwvSGVybz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b25Db21wb25lbnQiLCJkYXRhIiwic3R5bGVkIiwiSGVybyIsImRpdiIsIkhlcm9Db21wb25lbnQiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n");

/***/ })

});