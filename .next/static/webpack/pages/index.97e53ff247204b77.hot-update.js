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

/***/ "./components/Group.tsx":
/*!******************************!*\
  !*** ./components/Group.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ \"./node_modules/react-elastic-carousel/dist/index.es.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Group.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Group__Container\",\n  componentId: \"sc-1hm8a79-0\"\n})([\"width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;.groupthumb{background-image:url(\\\"\", \"\\\");overflow:hidden;border-radius:20px;background-size:120%;background-repeat:no-repeat;}.inner-group-thumb{height:34%;margin-top:150px;width:100%;}\"], function (props) {\n  return props.imageUrl;\n});\n_c = Container;\n\nvar GroupItem = function GroupItem(_ref) {\n  var ThumbNailTitle = _ref.ThumbNailTitle,\n      ButtonPlaceholder = _ref.ButtonPlaceholder,\n      data = _ref.data,\n      imageUrl = _ref.imageUrl;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    imageUrl: imageUrl,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"groupthumb w-80 h-56\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \" inner-group-thumb  w-full  flex  items-center justify-center  text-white  bg-black  bg-opacity-60\",\n        children: ThumbNailTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isTextButton: true,\n      isFontBig: true,\n      title: ButtonPlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = GroupItem;\nvar breakPoints = [{\n  width: 1,\n  itemsToShow: 1\n}, {\n  width: 550,\n  itemsToShow: 2,\n  itemsToScoll: 2\n}, {\n  width: 768,\n  itemsToShow: 3\n}, {\n  width: 1200,\n  itemsToShow: 3\n}];\n\nvar GroupComponent = function GroupComponent(_ref2) {\n  var type = _ref2.type,\n      onClick = _ref2.onClick,\n      isEdge = _ref2.isEdge;\n  //Not used===\n  // const myArrow = () => {\n  //     const pointer = type === consts.PREV ? `${ArrowCircleLeftIcon}` :`${ArrowCircleRightIcon}`\n  //     return(\n  //         <button onClick={onClick} disabled={isEdge}>{pointer}</button>\n  //     )\n  // }\n  //=====\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"py-5 px-5 w-full flex justify-center items-center flex-col\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \" pb-5 font-thin text-3xl\",\n      children: \"Teams & Groups\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      breakPoints: breakPoints,\n      className: \"py-6\",\n      children: _data__WEBPACK_IMPORTED_MODULE_2__.data.TeamGroups.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(GroupItem, {\n          ThumbNailTitle: item.title,\n          ButtonPlaceholder: item.LinkName,\n          imageUrl: item.image\n        }, item.LinkName, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \" py-6 text-gray-700 font-bold text-3xl\",\n      children: \"Our Commitment to Racial Diversity\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \"w-3/4 font-thin text-2xl pb-4 px-4 text-gray-700\",\n      children: _data__WEBPACK_IMPORTED_MODULE_2__.data.DiversityText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isFontBig: true,\n      title: \"READ MORE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = GroupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupComponent);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"GroupItem\");\n$RefreshReg$(_c3, \"GroupComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBM0I7QUFBNEIsV0FBSyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0FqQ0Q7O01BQU1WO0FBbUNOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JvdXAudHN4PzM1OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL2J1dHRvbidcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgQ2Fyb3VzZWwsIHtjb25zdHN9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXG5pbXBvcnQgeyBBcnJvd0NpcmNsZUxlZnRJY29uLCBBcnJvd0NpcmNsZVJpZ2h0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5cblxuaW50ZXJmYWNlIElwcm9wc3tcblxuICAgIFRodW1iTmFpbFRpdGxlOnN0cmluZyxcbiAgICBCdXR0b25QbGFjZWhvbGRlcjpzdHJpbmdcbiAgICBkYXRhPzpvYmplY3Rcbn1cblxuaW50ZXJmYWNlIElJbWFnZXtcbiAgICBpbWFnZVVybDpzdHJpbmdcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxJSW1hZ2U+YFxuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZ3JvdXB0aHVtYntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtwcm9wcyA9PiBwcm9wcy5pbWFnZVVybH1cIik7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLmlubmVyLWdyb3VwLXRodW1ie1xuICAgICAgICBoZWlnaHQ6IDM0JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbmBcblxuY29uc3QgR3JvdXBJdGVtID0gKHtUaHVtYk5haWxUaXRsZSAsIEJ1dHRvblBsYWNlaG9sZGVyLCBkYXRhLCBpbWFnZVVybH06SXByb3BzICYgSUltYWdlKSA9PiB7XG5cblxuICAgIHJldHVybihcbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXIgaW1hZ2VVcmw9e2ltYWdlVXJsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXB0aHVtYiB3LTgwIGgtNTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaW5uZXItZ3JvdXAtdGh1bWIgXG4gICAgICAgICAgICAgICAgICAgIHctZnVsbCBcbiAgICAgICAgICAgICAgICAgICAgZmxleCBcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY2VudGVyIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlIFxuICAgICAgICAgICAgICAgICAgICBiZy1ibGFjayBcbiAgICAgICAgICAgICAgICAgICAgYmctb3BhY2l0eS02MFwiPntUaHVtYk5haWxUaXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25Db21wb25lbnQgaXNUZXh0QnV0dG9uPXt0cnVlfSBpc0ZvbnRCaWc9e3RydWV9IHRpdGxlPXtCdXR0b25QbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5jb25zdCBicmVha1BvaW50czphbnkgPVtcbiAgICB7d2lkdGg6MSwgaXRlbXNUb1Nob3c6MX0sXG4gICAge3dpZHRoOjU1MCwgaXRlbXNUb1Nob3c6MiwgaXRlbXNUb1Njb2xsOjJ9LFxuICAgIHt3aWR0aDo3NjgsIGl0ZW1zVG9TaG93OjN9LFxuICAgIHt3aWR0aDoxMjAwLCBpdGVtc1RvU2hvdzozfSxcblxuXVxuXG5jb25zdCBHcm91cENvbXBvbmVudCA9ICh7dHlwZSwgb25DbGljaywgaXNFZGdlfTphbnkpID0+IHtcbi8vTm90IHVzZWQ9PT1cbiAgICAvLyBjb25zdCBteUFycm93ID0gKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBwb2ludGVyID0gdHlwZSA9PT0gY29uc3RzLlBSRVYgPyBgJHtBcnJvd0NpcmNsZUxlZnRJY29ufWAgOmAke0Fycm93Q2lyY2xlUmlnaHRJY29ufWBcbiAgICAvLyAgICAgcmV0dXJuKFxuICAgIC8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSBkaXNhYmxlZD17aXNFZGdlfT57cG9pbnRlcn08L2J1dHRvbj5cbiAgICAvLyAgICAgKVxuXG4gICAgLy8gfVxuLy89PT09PVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IHB4LTUgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgcGItNSBmb250LXRoaW4gdGV4dC0zeGxcIj5UZWFtcyAmIEdyb3VwczwvcD5cbiAgICAgICBcbiAgICAgICAgICAgIDxDYXJvdXNlbCBicmVha1BvaW50cz17YnJlYWtQb2ludHN9IGNsYXNzTmFtZT1cInB5LTZcIj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGEuVGVhbUdyb3Vwcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEdyb3VwSXRlbSBrZXk9e2l0ZW0uTGlua05hbWV9XG4gICAgICAgICAgICAgICAgVGh1bWJOYWlsVGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgQnV0dG9uUGxhY2Vob2xkZXIgPXtpdGVtLkxpbmtOYW1lfVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgcHktNiB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCB0ZXh0LTN4bFwiPk91ciBDb21taXRtZW50IHRvIFJhY2lhbCBEaXZlcnNpdHk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LTMvNCBmb250LXRoaW4gdGV4dC0yeGwgcGItNCBweC00IHRleHQtZ3JheS03MDBcIj57ZGF0YS5EaXZlcnNpdHlUZXh0fTwvcD5cbiAgICAgICAgICAgIDxCdXR0b25Db21wb25lbnQgIGlzRm9udEJpZyB0aXRsZT1cIlJFQUQgTU9SRVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBDb21wb25lbnRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJ1dHRvbkNvbXBvbmVudCIsImRhdGEiLCJDYXJvdXNlbCIsIkNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaW1hZ2VVcmwiLCJHcm91cEl0ZW0iLCJUaHVtYk5haWxUaXRsZSIsIkJ1dHRvblBsYWNlaG9sZGVyIiwiYnJlYWtQb2ludHMiLCJ3aWR0aCIsIml0ZW1zVG9TaG93IiwiaXRlbXNUb1Njb2xsIiwiR3JvdXBDb21wb25lbnQiLCJ0eXBlIiwib25DbGljayIsImlzRWRnZSIsIlRlYW1Hcm91cHMiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJMaW5rTmFtZSIsImltYWdlIiwiRGl2ZXJzaXR5VGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Group.tsx\n");

/***/ })

});