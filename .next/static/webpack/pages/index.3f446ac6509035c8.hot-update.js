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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ \"./node_modules/react-elastic-carousel/dist/index.es.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Group.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Group__Container\",\n  componentId: \"sc-1hm8a79-0\"\n})([\"width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;.groupthumb{background-image:url(\\\"\", \"\\\");overflow:hidden;border-radius:20px;background-size:120%;background-repeat:no-repeat;}.inner-group-thumb{height:34%;margin-top:150px;width:100%;}\"], function (props) {\n  return props.imageUrl;\n});\n_c = Container;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Group__Item\",\n  componentId: \"sc-1hm8a79-1\"\n})([\"display:flex;justify-content:center;align-items:center;height:250px;width:100%;background-color:#683bb7;color:#fff;margin:15px;font-size:4em;\"]);\n\nvar GroupItem = function GroupItem(_ref) {\n  var ThumbNailTitle = _ref.ThumbNailTitle,\n      ButtonPlaceholder = _ref.ButtonPlaceholder,\n      data = _ref.data,\n      imageUrl = _ref.imageUrl;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    imageUrl: imageUrl,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"groupthumb w-80 h-56\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \" inner-group-thumb  w-full  flex  items-center justify-center  text-white  bg-black  bg-opacity-60\",\n        children: ThumbNailTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isTextButton: true,\n      isFontBig: true,\n      title: ButtonPlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = GroupItem;\nvar breakPoints = [{\n  width: 1,\n  itemsToShow: 1\n}, {\n  width: 550,\n  itemsToShow: 2,\n  itemsToScoll: 2\n}, {\n  width: 768,\n  itemsToShow: 3\n}, {\n  width: 1200,\n  itemsToShow: 4\n}];\n\nvar GroupComponent = function GroupComponent(_ref2) {\n  var type = _ref2.type,\n      onClick = _ref2.onClick,\n      isEdge = _ref2.isEdge;\n\n  //Not used===\n  var myArrow = function myArrow() {\n    var pointer = type === react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__.consts.PREV ? \"\".concat(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.ArrowCircleLeftIcon) : \"\".concat(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.ArrowCircleRightIcon);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      onClick: onClick,\n      disabled: isEdge,\n      children: pointer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, _this);\n  }; //=====\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"py-5 px-5 w-full flex justify-center items-center flex-col bg-gray-200\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \" pb-5 font-thin text-3xl\",\n      children: \"Teams & Groups\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      breakPoints: breakPoints,\n      children: _data__WEBPACK_IMPORTED_MODULE_2__.data.TeamGroups.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(GroupItem, {\n          ThumbNailTitle: item.title,\n          ButtonPlaceholder: item.LinkName,\n          imageUrl: item.image\n        }, item.LinkName, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \" py-6 text-gray-700 font-bold text-3xl\",\n      children: \"Our Commitment to Racial Diversity\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \"w-3/4 font-thin text-2xl pb-4 px-4 text-gray-700\",\n      children: _data__WEBPACK_IMPORTED_MODULE_2__.data.DiversityText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isOutline: true,\n      isFontBig: true,\n      title: \"READ MORE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = GroupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupComponent);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"GroupItem\");\n$RefreshReg$(_c3, \"GroupComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBLGlCQUZxQjtBQUFBLE9BQXhCO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBZ0JJO0FBQUcsZUFBUyxFQUFDLHdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKLGVBaUJJO0FBQUcsZUFBUyxFQUFDLGtEQUFiO0FBQUEsZ0JBQWlFNUIscURBQWtCOEI7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCSixlQWtCSSw4REFBQywrQ0FBRDtBQUFpQixlQUFTLE1BQTFCO0FBQTJCLGVBQVMsTUFBcEM7QUFBcUMsV0FBSyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0FqQ0Q7O01BQU1iO0FBbUNOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JvdXAudHN4PzM1OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL2J1dHRvbidcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgQ2Fyb3VzZWwsIHtjb25zdHN9IGZyb20gJ3JlYWN0LWVsYXN0aWMtY2Fyb3VzZWwnXG5pbXBvcnQgeyBBcnJvd0NpcmNsZUxlZnRJY29uLCBBcnJvd0NpcmNsZVJpZ2h0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5cblxuaW50ZXJmYWNlIElwcm9wc3tcblxuICAgIFRodW1iTmFpbFRpdGxlOnN0cmluZyxcbiAgICBCdXR0b25QbGFjZWhvbGRlcjpzdHJpbmdcbiAgICBkYXRhPzpvYmplY3Rcbn1cblxuaW50ZXJmYWNlIElJbWFnZXtcbiAgICBpbWFnZVVybDpzdHJpbmdcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxJSW1hZ2U+YFxuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZ3JvdXB0aHVtYntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtwcm9wcyA9PiBwcm9wcy5pbWFnZVVybH1cIik7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLmlubmVyLWdyb3VwLXRodW1ie1xuICAgICAgICBoZWlnaHQ6IDM0JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbmBcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4M2JiNztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgZm9udC1zaXplOiA0ZW07XG5gXG5cbmNvbnN0IEdyb3VwSXRlbSA9ICh7VGh1bWJOYWlsVGl0bGUgLCBCdXR0b25QbGFjZWhvbGRlciwgZGF0YSwgaW1hZ2VVcmx9Oklwcm9wcyAmIElJbWFnZSkgPT4ge1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8Q29udGFpbmVyIGltYWdlVXJsPXtpbWFnZVVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwdGh1bWIgdy04MCBoLTU2XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGlubmVyLWdyb3VwLXRodW1iIFxuICAgICAgICAgICAgICAgICAgICB3LWZ1bGwgXG4gICAgICAgICAgICAgICAgICAgIGZsZXggXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNlbnRlciBcbiAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZSBcbiAgICAgICAgICAgICAgICAgICAgYmctYmxhY2sgXG4gICAgICAgICAgICAgICAgICAgIGJnLW9wYWNpdHktNjBcIj57VGh1bWJOYWlsVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IGlzVGV4dEJ1dHRvbj17dHJ1ZX0gaXNGb250QmlnPXt0cnVlfSB0aXRsZT17QnV0dG9uUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuY29uc3QgYnJlYWtQb2ludHM6YW55ID1bXG4gICAge3dpZHRoOjEsIGl0ZW1zVG9TaG93OjF9LFxuICAgIHt3aWR0aDo1NTAsIGl0ZW1zVG9TaG93OjIsIGl0ZW1zVG9TY29sbDoyfSxcbiAgICB7d2lkdGg6NzY4LCBpdGVtc1RvU2hvdzozfSxcbiAgICB7d2lkdGg6MTIwMCwgaXRlbXNUb1Nob3c6NH0sXG5cbl1cblxuY29uc3QgR3JvdXBDb21wb25lbnQgPSAoe3R5cGUsIG9uQ2xpY2ssIGlzRWRnZX06YW55KSA9PiB7XG4vL05vdCB1c2VkPT09XG4gICAgY29uc3QgbXlBcnJvdyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IHR5cGUgPT09IGNvbnN0cy5QUkVWID8gYCR7QXJyb3dDaXJjbGVMZWZ0SWNvbn1gIDpgJHtBcnJvd0NpcmNsZVJpZ2h0SWNvbn1gXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30gZGlzYWJsZWQ9e2lzRWRnZX0+e3BvaW50ZXJ9PC9idXR0b24+XG4gICAgICAgIClcblxuICAgIH1cbi8vPT09PT1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBweC01IHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHBiLTUgZm9udC10aGluIHRleHQtM3hsXCI+VGVhbXMgJiBHcm91cHM8L3A+XG4gICAgICAgXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgYnJlYWtQb2ludHM9e2JyZWFrUG9pbnRzfT5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAge2RhdGEuVGVhbUdyb3Vwcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEdyb3VwSXRlbSBrZXk9e2l0ZW0uTGlua05hbWV9XG4gICAgICAgICAgICAgICAgVGh1bWJOYWlsVGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgQnV0dG9uUGxhY2Vob2xkZXIgPXtpdGVtLkxpbmtOYW1lfVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgcHktNiB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCB0ZXh0LTN4bFwiPk91ciBDb21taXRtZW50IHRvIFJhY2lhbCBEaXZlcnNpdHk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LTMvNCBmb250LXRoaW4gdGV4dC0yeGwgcGItNCBweC00IHRleHQtZ3JheS03MDBcIj57ZGF0YS5EaXZlcnNpdHlUZXh0fTwvcD5cbiAgICAgICAgICAgIDxCdXR0b25Db21wb25lbnQgaXNPdXRsaW5lIGlzRm9udEJpZyB0aXRsZT1cIlJFQUQgTU9SRVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBDb21wb25lbnRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJ1dHRvbkNvbXBvbmVudCIsImRhdGEiLCJDYXJvdXNlbCIsImNvbnN0cyIsIkFycm93Q2lyY2xlTGVmdEljb24iLCJBcnJvd0NpcmNsZVJpZ2h0SWNvbiIsIkNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaW1hZ2VVcmwiLCJJdGVtIiwiR3JvdXBJdGVtIiwiVGh1bWJOYWlsVGl0bGUiLCJCdXR0b25QbGFjZWhvbGRlciIsImJyZWFrUG9pbnRzIiwid2lkdGgiLCJpdGVtc1RvU2hvdyIsIml0ZW1zVG9TY29sbCIsIkdyb3VwQ29tcG9uZW50IiwidHlwZSIsIm9uQ2xpY2siLCJpc0VkZ2UiLCJteUFycm93IiwicG9pbnRlciIsIlBSRVYiLCJUZWFtR3JvdXBzIiwibWFwIiwiaXRlbSIsInRpdGxlIiwiTGlua05hbWUiLCJpbWFnZSIsIkRpdmVyc2l0eVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Group.tsx\n");

/***/ })

});