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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/data.tsx\");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ \"./node_modules/react-elastic-carousel/dist/index.es.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Group.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Group__Container\",\n  componentId: \"sc-1hm8a79-0\"\n})([\".groupthumb{background-image:url(\\\"\", \"\\\");overflow:hidden;border-radius:20px;background-size:120%;background-repeat:no-repeat;}.inner-group-thumb{height:34%;margin-top:150px;}\"], function (props) {\n  return props.imageUrl;\n});\n_c = Container;\n\nvar GroupThumbnail = function GroupThumbnail(_ref) {\n  var ThumbNailTitle = _ref.ThumbNailTitle,\n      ButtonPlaceholder = _ref.ButtonPlaceholder,\n      data = _ref.data,\n      imageUrl = _ref.imageUrl;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    imageUrl: imageUrl,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"groupthumb  mx-4\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \" inner-group-thumb  w-100%  flex  items-center justify-center  text-white  bg-black  bg-opacity-60\",\n        children: ThumbNailTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isTextButton: true,\n      isFontBig: true,\n      title: ButtonPlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = GroupThumbnail;\nvar breakPoints = [{\n  width: 1,\n  itemsToShow: 1\n}, {\n  width: 550,\n  itemsToShow: 2,\n  itemsToScoll: 2\n}, {\n  width: 768,\n  itemsToShow: 3\n}, {\n  width: 1200,\n  itemsToShow: 4\n}];\n\nvar GroupComponent = function GroupComponent() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    data: _data__WEBPACK_IMPORTED_MODULE_2__.data\n  }),\n      state = _useState[0],\n      setstate = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"py-5\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: \"text-2xl pb-2 font-thin\",\n      children: \"Teams & Groups\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      breakPoints: breakPoints,\n      children: state.data.TeamGroups.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(GroupThumbnail, {\n          ThumbNailTitle: item.title,\n          ButtonPlaceholder: item.LinkName,\n          imageUrl: item.image\n        }, item.LinkName, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(GroupComponent, \"DAa1rcmTKfsxRWrqDwiV5+bh/CQ=\");\n\n_c3 = GroupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupComponent);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"GroupThumbnail\");\n$RefreshReg$(_c3, \"GroupComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyb3VwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFjQSxJQUFNTSxTQUFTLEdBQUdKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHlMQUVrQixVQUFBTSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxRQUFWO0FBQUEsQ0FGdkIsQ0FBZjtLQUFNSDs7QUFnQk4sSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUEwRTtBQUFBLE1BQXhFQyxjQUF3RSxRQUF4RUEsY0FBd0U7QUFBQSxNQUF2REMsaUJBQXVELFFBQXZEQSxpQkFBdUQ7QUFBQSxNQUFwQ1IsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJLLFFBQThCLFFBQTlCQSxRQUE4QjtBQUc3RixzQkFFSSw4REFBQyxTQUFEO0FBQVcsWUFBUSxFQUFFQSxRQUFyQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0k7QUFDSSxpQkFBUyxFQUFDLG9HQURkO0FBQUEsa0JBUW9CRTtBQVJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBWVEsOERBQUMsK0NBQUQ7QUFBaUIsa0JBQVksRUFBRSxJQUEvQjtBQUFxQyxlQUFTLEVBQUUsSUFBaEQ7QUFBc0QsV0FBSyxFQUFFQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFpQkgsQ0FwQkQ7O01BQU1GO0FBc0JOLElBQU1HLFdBQWUsR0FBRSxDQUNuQjtBQUFDQyxFQUFBQSxLQUFLLEVBQUMsQ0FBUDtBQUFVQyxFQUFBQSxXQUFXLEVBQUM7QUFBdEIsQ0FEbUIsRUFFbkI7QUFBQ0QsRUFBQUEsS0FBSyxFQUFDLEdBQVA7QUFBWUMsRUFBQUEsV0FBVyxFQUFDLENBQXhCO0FBQTJCQyxFQUFBQSxZQUFZLEVBQUM7QUFBeEMsQ0FGbUIsRUFHbkI7QUFBQ0YsRUFBQUEsS0FBSyxFQUFDLEdBQVA7QUFBWUMsRUFBQUEsV0FBVyxFQUFDO0FBQXhCLENBSG1CLEVBSW5CO0FBQUNELEVBQUFBLEtBQUssRUFBQyxJQUFQO0FBQWFDLEVBQUFBLFdBQVcsRUFBQztBQUF6QixDQUptQixDQUF2Qjs7QUFRQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFFekIsa0JBQTBCaEIsK0NBQVEsQ0FBQztBQUMvQkcsSUFBQUEsSUFBSSxFQUFDQSx1Q0FBSUE7QUFEc0IsR0FBRCxDQUFsQztBQUFBLE1BQU9jLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQVVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0ksOERBQUMsOERBQUQ7QUFBVSxpQkFBVyxFQUFFTixXQUF2QjtBQUFBLGdCQUVDSyxLQUFLLENBQUNkLElBQU4sQ0FBV2dCLFVBQVgsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUFDLElBQUk7QUFBQSw0QkFFM0IsOERBQUMsY0FBRDtBQUNBLHdCQUFjLEVBQUVBLElBQUksQ0FBQ0MsS0FEckI7QUFFQSwyQkFBaUIsRUFBR0QsSUFBSSxDQUFDRSxRQUZ6QjtBQUdBLGtCQUFRLEVBQUVGLElBQUksQ0FBQ0c7QUFIZixXQUFxQkgsSUFBSSxDQUFDRSxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUYyQjtBQUFBLE9BQTlCO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBaENEOztHQUFNUDs7TUFBQUE7QUFrQ04sK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hcm91cC50c3g/MzU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4vYnV0dG9uJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1lbGFzdGljLWNhcm91c2VsJ1xuXG5cbmludGVyZmFjZSBJcHJvcHN7XG5cbiAgICBUaHVtYk5haWxUaXRsZTpzdHJpbmcsXG4gICAgQnV0dG9uUGxhY2Vob2xkZXI6c3RyaW5nXG4gICAgZGF0YT86b2JqZWN0XG59XG5cbmludGVyZmFjZSBJSW1hZ2V7XG4gICAgaW1hZ2VVcmw6c3RyaW5nXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SUltYWdlPmBcbiAgICAuZ3JvdXB0aHVtYntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtwcm9wcyA9PiBwcm9wcy5pbWFnZVVybH1cIik7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLmlubmVyLWdyb3VwLXRodW1ie1xuICAgICAgICBoZWlnaHQ6IDM0JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgfVxuYFxuXG5cblxuY29uc3QgR3JvdXBUaHVtYm5haWwgPSAoe1RodW1iTmFpbFRpdGxlICwgQnV0dG9uUGxhY2Vob2xkZXIsIGRhdGEsIGltYWdlVXJsfTpJcHJvcHMgJiBJSW1hZ2UpID0+IHtcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICBcbiAgICAgICAgPENvbnRhaW5lciBpbWFnZVVybD17aW1hZ2VVcmx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHRodW1iICBteC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGlubmVyLWdyb3VwLXRodW1iIFxuICAgICAgICAgICAgICAgICAgICB3LTEwMCUgXG4gICAgICAgICAgICAgICAgICAgIGZsZXggXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNlbnRlciBcbiAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZSBcbiAgICAgICAgICAgICAgICAgICAgYmctYmxhY2sgXG4gICAgICAgICAgICAgICAgICAgIGJnLW9wYWNpdHktNjBcIj57VGh1bWJOYWlsVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IGlzVGV4dEJ1dHRvbj17dHJ1ZX0gaXNGb250QmlnPXt0cnVlfSB0aXRsZT17QnV0dG9uUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuY29uc3QgYnJlYWtQb2ludHM6YW55ID1bXG4gICAge3dpZHRoOjEsIGl0ZW1zVG9TaG93OjF9LFxuICAgIHt3aWR0aDo1NTAsIGl0ZW1zVG9TaG93OjIsIGl0ZW1zVG9TY29sbDoyfSxcbiAgICB7d2lkdGg6NzY4LCBpdGVtc1RvU2hvdzozfSxcbiAgICB7d2lkdGg6MTIwMCwgaXRlbXNUb1Nob3c6NH0sXG5cbl1cblxuY29uc3QgR3JvdXBDb21wb25lbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZGF0YTpkYXRhXG4gICAgfSlcblxuICAgIFxuXG5cblxuXG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgcGItMiBmb250LXRoaW5cIj5UZWFtcyAmIEdyb3VwczwvcD5cbiAgICAgICBcbiAgICAgICAgICAgIDxDYXJvdXNlbCBicmVha1BvaW50cz17YnJlYWtQb2ludHN9PlxuXG4gICAgICAgICAgICB7c3RhdGUuZGF0YS5UZWFtR3JvdXBzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8R3JvdXBUaHVtYm5haWwga2V5PXtpdGVtLkxpbmtOYW1lfVxuICAgICAgICAgICAgICAgIFRodW1iTmFpbFRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIEJ1dHRvblBsYWNlaG9sZGVyID17aXRlbS5MaW5rTmFtZX1cbiAgICAgICAgICAgICAgICBpbWFnZVVybD17aXRlbS5pbWFnZX1cbiAgICBcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cENvbXBvbmVudFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJCdXR0b25Db21wb25lbnQiLCJkYXRhIiwiQ2Fyb3VzZWwiLCJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImltYWdlVXJsIiwiR3JvdXBUaHVtYm5haWwiLCJUaHVtYk5haWxUaXRsZSIsIkJ1dHRvblBsYWNlaG9sZGVyIiwiYnJlYWtQb2ludHMiLCJ3aWR0aCIsIml0ZW1zVG9TaG93IiwiaXRlbXNUb1Njb2xsIiwiR3JvdXBDb21wb25lbnQiLCJzdGF0ZSIsInNldHN0YXRlIiwiVGVhbUdyb3VwcyIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsIkxpbmtOYW1lIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Group.tsx\n");

/***/ })

});