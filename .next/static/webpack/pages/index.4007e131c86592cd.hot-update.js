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

/***/ "./components/events.tsx":
/*!*******************************!*\
  !*** ./components/events.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ \"./node_modules/react-elastic-carousel/dist/index.es.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/events.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"events__Container\",\n  componentId: \"sc-1e3vf0p-0\"\n})([\"width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;.groupthumb{background-image:url(\\\"\", \"\\\");overflow:hidden;border-radius:20px;background-size:cover;background-repeat:no-repeat;width:20rem;height:30rem;box-shadow:0px 0px 6px -1px rgba(0,0,0,0.5);}.inner-group-thumb{height:70%;margin-top:150px;width:100%;background:rgb(1,157,174);background:linear-gradient(0deg,rgba(1,157,174,1) 15%,rgba(1,157,174,0) 79%);}\"], function (props) {\n  return props.imageUrl;\n});\n_c = Container;\n\nvar EventItem = function EventItem(_ref) {\n  var ThumbNailTitle = _ref.ThumbNailTitle,\n      ButtonPlaceholder = _ref.ButtonPlaceholder,\n      date = _ref.date,\n      imageUrl = _ref.imageUrl;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    imageUrl: imageUrl,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"groupthumb\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \" inner-group-thumb  w-full  flex  flex-col items-center justify-center  text-white  \",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          className: \"text-2xl w-52 uppercase font-light\",\n          children: ThumbNailTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 25\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"text-sm py-4\",\n          children: date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 25\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          isTextButton: true,\n          isFontBig: true,\n          title: ButtonPlaceholder\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = EventItem;\nvar breakPoints = [{\n  width: 1,\n  itemsToShow: 1\n}, {\n  width: 550,\n  itemsToShow: 2,\n  itemsToScoll: 2\n}, {\n  width: 768,\n  itemsToShow: 3\n}, {\n  width: 1200,\n  itemsToShow: 4\n}];\n\nvar EventComponent = function EventComponent(_ref2) {\n  var type = _ref2.type,\n      onClick = _ref2.onClick,\n      isEdge = _ref2.isEdge;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"py-5 px-5 w-full flex justify-center items-center flex-col bg-gray-200\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \" py-5 font-thin text-4xl text-gray-700\",\n      children: \"Events\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      breakPoints: breakPoints,\n      children: _data__WEBPACK_IMPORTED_MODULE_2__.data.Events.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(EventItem, {\n          ThumbNailTitle: item.title,\n          date: item.date,\n          ButtonPlaceholder: item.LinkName,\n          imageUrl: item.image\n        }, item.LinkName, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isFontBig: true,\n      title: \"VIEW ALL\",\n      className: \"w-52\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = EventComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventComponent);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"EventItem\");\n$RefreshReg$(_c3, \"EventComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0F4QkQ7O01BQU1SO0FBMEJOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXZlbnRzLnRzeD85YWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IENhcm91c2VsLCB7Y29uc3RzfSBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xuaW1wb3J0IHsgQXJyb3dDaXJjbGVMZWZ0SWNvbiwgQXJyb3dDaXJjbGVSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuXG5cbmludGVyZmFjZSBJcHJvcHN7XG5cbiAgICBUaHVtYk5haWxUaXRsZTpzdHJpbmcsXG4gICAgQnV0dG9uUGxhY2Vob2xkZXI6c3RyaW5nXG4gICAgZGF0ZT86c3RyaW5nXG59XG5cbmludGVyZmFjZSBJSW1hZ2V7XG4gICAgaW1hZ2VVcmw6c3RyaW5nXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SUltYWdlPmBcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuXG5cbiAgICAuZ3JvdXB0aHVtYntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtwcm9wcyA9PiBwcm9wcy5pbWFnZVVybH1cIik7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAzMHJlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTFweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIFxuICAgIH1cbiAgICAuaW5uZXItZ3JvdXAtdGh1bWJ7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxLDE1NywxNzQpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxLDE1NywxNzQsMSkgMTUlLCByZ2JhKDEsMTU3LDE3NCwwKSA3OSUpO1xuICAgIH1cbmBcblxuY29uc3QgRXZlbnRJdGVtID0gKHtUaHVtYk5haWxUaXRsZSAsIEJ1dHRvblBsYWNlaG9sZGVyLCBkYXRlLCBpbWFnZVVybH06SXByb3BzICYgSUltYWdlKSA9PiB7XG5cblxuICAgIHJldHVybihcbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXIgaW1hZ2VVcmw9e2ltYWdlVXJsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXB0aHVtYlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBpbm5lci1ncm91cC10aHVtYiBcbiAgICAgICAgICAgICAgICAgICAgdy1mdWxsIFxuICAgICAgICAgICAgICAgICAgICBmbGV4IFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWNvbFxuICAgICAgICAgICAgICAgICAgICBpdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jZW50ZXIgXG4gICAgICAgICAgICAgICAgICAgIHRleHQtd2hpdGUgXG4gICAgICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRpdGxlICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdy01MiB1cHBlcmNhc2UgZm9udC1saWdodFwiPntUaHVtYk5haWxUaXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRGF0ZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBweS00XCI+e2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IGlzVGV4dEJ1dHRvbj17dHJ1ZX0gaXNGb250QmlnPXt0cnVlfSB0aXRsZT17QnV0dG9uUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuY29uc3QgYnJlYWtQb2ludHM6YW55ID1bXG4gICAge3dpZHRoOjEsIGl0ZW1zVG9TaG93OjF9LFxuICAgIHt3aWR0aDo1NTAsIGl0ZW1zVG9TaG93OjIsIGl0ZW1zVG9TY29sbDoyfSxcbiAgICB7d2lkdGg6NzY4LCBpdGVtc1RvU2hvdzozfSxcbiAgICB7d2lkdGg6MTIwMCwgaXRlbXNUb1Nob3c6NH0sXG5cbl1cblxuY29uc3QgRXZlbnRDb21wb25lbnQgPSAoe3R5cGUsIG9uQ2xpY2ssIGlzRWRnZX06YW55KSA9PiB7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBweC01IHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHB5LTUgZm9udC10aGluIHRleHQtNHhsIHRleHQtZ3JheS03MDBcIj5FdmVudHM8L3A+XG4gICAgICAgXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgYnJlYWtQb2ludHM9e2JyZWFrUG9pbnRzfT5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGEuRXZlbnRzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8RXZlbnRJdGVtIGtleT17aXRlbS5MaW5rTmFtZX1cbiAgICAgICAgICAgICAgICBUaHVtYk5haWxUaXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgQnV0dG9uUGxhY2Vob2xkZXIgPXtpdGVtLkxpbmtOYW1lfVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuXG4gICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50ICBpc0ZvbnRCaWcgdGl0bGU9XCJWSUVXIEFMTFwiIGNsYXNzTmFtZT1cInctNTJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q29tcG9uZW50XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJCdXR0b25Db21wb25lbnQiLCJkYXRhIiwiQ2Fyb3VzZWwiLCJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImltYWdlVXJsIiwiRXZlbnRJdGVtIiwiVGh1bWJOYWlsVGl0bGUiLCJCdXR0b25QbGFjZWhvbGRlciIsImRhdGUiLCJicmVha1BvaW50cyIsIndpZHRoIiwiaXRlbXNUb1Nob3ciLCJpdGVtc1RvU2NvbGwiLCJFdmVudENvbXBvbmVudCIsInR5cGUiLCJvbkNsaWNrIiwiaXNFZGdlIiwiRXZlbnRzIiwibWFwIiwiaXRlbSIsInRpdGxlIiwiTGlua05hbWUiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events.tsx\n");

/***/ })

});