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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Group.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Group__Container\",\n  componentId: \"sc-1hm8a79-0\"\n})([\".groupthumb{background-image:url(\\\"\", \"\\\");overflow:hidden;border-radius:20px;background-size:120%;background-repeat:no-repeat}\"], function (props) {\n  return props.imageUrl;\n});\n_c = Container;\n\nvar GroupThumbnail = function GroupThumbnail(_ref) {\n  var ThumbNailTitle = _ref.ThumbNailTitle,\n      ButtonPlaceholder = _ref.ButtonPlaceholder,\n      data = _ref.data,\n      imageUrl = _ref.imageUrl;\n  // const [display, setDisplay] = useState<boolean>(false)\n  // const [width, setWidth] = useState<number>(600)\n  var settings = {\n    dots: true,\n    infinite: false,\n    speed: 500,\n    slidesToshow: 3,\n    slidesToScroll: 1\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    imageUrl: imageUrl,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"groupthumb w-80 h-56\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"w-44 text-black\",\n        children: ThumbNailTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      isTextButton: true,\n      isFontBig: true,\n      title: ButtonPlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = GroupThumbnail;\n\nvar GroupComponent = function GroupComponent() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"py-5\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: \"text-2xl pb-2 font-thin px-4\",\n      children: \"Teams & Groups\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GroupThumbnail, {\n      ThumbNailTitle: \"Tile is Hear\",\n      ButtonPlaceholder: \"I am Button\",\n      imageUrl: \"/bg-bg.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = GroupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupComponent);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"GroupThumbnail\");\n$RefreshReg$(_c3, \"GroupComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyb3VwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQWFBLElBQU1HLFNBQVMsR0FBR0Ysd0VBQUg7QUFBQTtBQUFBO0FBQUEsd0lBRWtCLFVBQUFJLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxDQUZ2QixDQUFmO0tBQU1IOztBQVdOLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBMEU7QUFBQSxNQUF4RUMsY0FBd0UsUUFBeEVBLGNBQXdFO0FBQUEsTUFBdkRDLGlCQUF1RCxRQUF2REEsaUJBQXVEO0FBQUEsTUFBcENDLElBQW9DLFFBQXBDQSxJQUFvQztBQUFBLE1BQTlCSixRQUE4QixRQUE5QkEsUUFBOEI7QUFFN0Y7QUFDQTtBQUVBLE1BQU1LLFFBQVksR0FBRTtBQUNoQkMsSUFBQUEsSUFBSSxFQUFDLElBRFc7QUFFaEJDLElBQUFBLFFBQVEsRUFBQyxLQUZPO0FBR2hCQyxJQUFBQSxLQUFLLEVBQUMsR0FIVTtBQUloQkMsSUFBQUEsWUFBWSxFQUFDLENBSkc7QUFLaEJDLElBQUFBLGNBQWMsRUFBQztBQUxDLEdBQXBCO0FBUUEsc0JBRUksOERBQUMsU0FBRDtBQUFXLFlBQVEsRUFBRVYsUUFBckI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtCQUFrQ0U7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlRLDhEQUFDLCtDQUFEO0FBQWlCLGtCQUFZLEVBQUUsSUFBL0I7QUFBcUMsZUFBUyxFQUFFLElBQWhEO0FBQXNELFdBQUssRUFBRUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBU0gsQ0F0QkQ7O01BQU1GOztBQXdCTixJQUFNVSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSw4REFBQyxjQUFEO0FBQ0ksb0JBQWMsRUFBQyxjQURuQjtBQUVJLHVCQUFpQixFQUFFLGFBRnZCO0FBR0ksY0FBUSxFQUFDO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0FYRDs7TUFBTUE7QUFhTiwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dyb3VwLnRzeD8zNThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi9idXR0b24nXG5cbmludGVyZmFjZSBJcHJvcHN7XG5cbiAgICBUaHVtYk5haWxUaXRsZTpzdHJpbmcsXG4gICAgQnV0dG9uUGxhY2Vob2xkZXI6c3RyaW5nXG4gICAgZGF0YT86b2JqZWN0XG59XG5cbmludGVyZmFjZSBJSW1hZ2V7XG4gICAgaW1hZ2VVcmw6c3RyaW5nXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SUltYWdlPmBcbiAgICAuZ3JvdXB0aHVtYntcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtwcm9wcyA9PiBwcm9wcy5pbWFnZVVybH1cIik7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxuICAgICAgICBcbiAgICB9XG5gXG5cbmNvbnN0IEdyb3VwVGh1bWJuYWlsID0gKHtUaHVtYk5haWxUaXRsZSAsIEJ1dHRvblBsYWNlaG9sZGVyLCBkYXRhLCBpbWFnZVVybH06SXByb3BzICYgSUltYWdlKSA9PiB7XG5cbiAgICAvLyBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgICAvLyBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oNjAwKVxuXG4gICAgY29uc3Qgc2V0dGluZ3M6YW55ID17XG4gICAgICAgIGRvdHM6dHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6ZmFsc2UsXG4gICAgICAgIHNwZWVkOjUwMCxcbiAgICAgICAgc2xpZGVzVG9zaG93OjMsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOjFcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8Q29udGFpbmVyIGltYWdlVXJsPXtpbWFnZVVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwdGh1bWIgdy04MCBoLTU2XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ0IHRleHQtYmxhY2tcIj57VGh1bWJOYWlsVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IGlzVGV4dEJ1dHRvbj17dHJ1ZX0gaXNGb250QmlnPXt0cnVlfSB0aXRsZT17QnV0dG9uUGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuY29uc3QgR3JvdXBDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBwYi0yIGZvbnQtdGhpbiBweC00XCI+VGVhbXMgJiBHcm91cHM8L3A+XG4gICAgICAgICAgICA8R3JvdXBUaHVtYm5haWxcbiAgICAgICAgICAgICAgICBUaHVtYk5haWxUaXRsZT1cIlRpbGUgaXMgSGVhclwiXG4gICAgICAgICAgICAgICAgQnV0dG9uUGxhY2Vob2xkZXIgPVwiSSBhbSBCdXR0b25cIlxuICAgICAgICAgICAgICAgIGltYWdlVXJsPVwiL2JnLWJnLmpwZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwQ29tcG9uZW50XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJCdXR0b25Db21wb25lbnQiLCJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImltYWdlVXJsIiwiR3JvdXBUaHVtYm5haWwiLCJUaHVtYk5haWxUaXRsZSIsIkJ1dHRvblBsYWNlaG9sZGVyIiwiZGF0YSIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb3Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIkdyb3VwQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Group.tsx\n");

/***/ })

});