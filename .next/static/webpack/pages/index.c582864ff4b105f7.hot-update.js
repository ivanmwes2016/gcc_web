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

/***/ "./components/Sermons.tsx":
/*!********************************!*\
  !*** ./components/Sermons.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SermonsSection\": function() { return /* binding */ SermonsSection; }\n/* harmony export */ });\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Sermons.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SermonsWrapper = function SermonsWrapper(_ref) {\n  var SectionTitle = _ref.SectionTitle,\n      SermonTitle = _ref.SermonTitle,\n      description = _ref.description,\n      videoSrc = _ref.videoSrc,\n      isSmallSrn = _ref.isSmallSrn;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row justify-start\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"flex flex-col w-full md:items-start md:w-3/6 md:text-left\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-2xl pb-2 font-thin px-4\",\n        children: SectionTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-4xl font-black px-4 py-4 text-orange-500\",\n        children: SermonTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"font-thin text-xl pb-4 px-4 \",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"hidden md:inline-block md:w-5/6\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          title: \"View all Sermons\",\n          isFontBig: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 66\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"right flex flex-col justify-center items-center md:w-full md:h-[472px]\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"iframe\", {\n        width: \"520\",\n        height: \"345\",\n        src: videoSrc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"py-8 md:hidden\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          isFontBig: true,\n          title: \"View all Sermons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 49\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = SermonsWrapper;\nvar SermonsSection = function SermonsSection() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isError = _useState3[0],\n      setIsError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      url = _useState4[0],\n      setUrl = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var ChannelID, Key, res;\n        return _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setIsError(false);\n                setIsLoading(true);\n                ChannelID = \"UC1UXAPGt8hjxZ1ZYgWqUQrw\";\n                Key = \"AIzaSyAfU2lXuOZnoR8a5y1fq_0LK4LAIx44res\";\n                _context.prev = 4;\n                _context.next = 7;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default()(\"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=\".concat(ChannelID, \"&key=\").concat(Key, \"&id&order=date&maxResults=12\"));\n\n              case 7:\n                res = _context.sent;\n                setUrl(res.data.items[0][\"id\"]);\n                setTitle(res.data.items[0][\"snippet\"]);\n                _context.next = 15;\n                break;\n\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](4);\n                setIsError(true);\n\n              case 15:\n                setIsLoading(false);\n\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[4, 12]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []); // console.log(data[\"videoId\"]);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"w-full h-[472px] flex-1 items-center bg-color text-gray-200 py-8 px-6\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SermonsWrapper, {\n      SectionTitle: \"Latest Sermon\",\n      SermonTitle: title[\"title\"],\n      description: title[\"description\"],\n      videoSrc: \"https://www.youtube.com/embed/\" + url[\"videoId\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SermonsSection, \"XNnZT1QpxxFTjXdrwOaVSj3GepA=\");\n\n_c2 = SermonsSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SermonsWrapper\");\n$RefreshReg$(_c2, \"SermonsSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlcm1vbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTs7O0FBV0EsSUFBTUssY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixPQUE2RTtBQUFBLE1BQTNFQyxZQUEyRSxRQUEzRUEsWUFBMkU7QUFBQSxNQUE3REMsV0FBNkQsUUFBN0RBLFdBQTZEO0FBQUEsTUFBaERDLFdBQWdELFFBQWhEQSxXQUFnRDtBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQy9GLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUMsMkRBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSxrQkFBK0NKO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssaUJBQVMsRUFBQywrQ0FBZjtBQUFBLGtCQUFnRUM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBRyxpQkFBUyxFQUFDLDhCQUFiO0FBQUEsa0JBQTZDQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSwrQkFBaUQsOERBQUMsK0NBQUQ7QUFBaUIsc0JBQVksRUFBRSxJQUEvQjtBQUFxQyxlQUFLLEVBQUMsa0JBQTNDO0FBQThELG1CQUFTLEVBQUU7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFVSTtBQUFLLGVBQVMsRUFBQyx3RUFBZjtBQUFBLDhCQUNJO0FBQ0ksYUFBSyxFQUFDLEtBRFY7QUFFSSxjQUFNLEVBQUMsS0FGWDtBQUdJLFdBQUcsRUFBRUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFZSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFBZ0MsOERBQUMsK0NBQUQ7QUFBaUIsc0JBQVksRUFBRSxJQUEvQjtBQUFxQyxtQkFBUyxFQUFFLElBQWhEO0FBQXNELGVBQUssRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRCSCxDQTdCRDs7S0FBTUo7QUFnQ0MsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQ2hDLGtCQUEwQlYsK0NBQVEsQ0FBTSxFQUFOLENBQWxDO0FBQUEsTUFBT1csS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDWiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPYSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE4QmQsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT2UsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBc0JoQiwrQ0FBUSxDQUFNLEVBQU4sQ0FBOUI7QUFBQSxNQUFPaUIsR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBSUFqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWixRQUFNa0IsU0FBUztBQUFBLHVWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkSCxnQkFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRixnQkFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUVNTSxnQkFBQUEsU0FKUSxHQUlJQywwQkFKSjtBQUtSRyxnQkFBQUEsR0FMUSxHQUtGSCx5Q0FMRTtBQUFBO0FBQUE7QUFBQSx1QkFTUWxCLDRDQUFLLG1GQUE0RWlCLFNBQTVFLGtCQUE2RkksR0FBN0Ysa0NBVGI7O0FBQUE7QUFTSkUsZ0JBQUFBLEdBVEk7QUFVVlIsZ0JBQUFBLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDQyxJQUFKLENBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLElBQWxCLENBQUQsQ0FBTjtBQUNBaEIsZ0JBQUFBLFFBQVEsQ0FBQ2MsR0FBRyxDQUFDQyxJQUFKLENBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLFNBQWxCLENBQUQsQ0FBUjtBQVhVO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYVZaLGdCQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWOztBQWJVO0FBZ0JkRixnQkFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjs7QUFoQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEssU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQWtCQUEsSUFBQUEsU0FBUztBQUVaLEdBckJRLEVBcUJQLEVBckJPLENBQVQsQ0FSZ0MsQ0ErQmhDOztBQUVBLHNCQUVJO0FBQUssYUFBUyxFQUFDLHVFQUFmO0FBQUEsMkJBRUksOERBQUMsY0FBRDtBQUNJLGtCQUFZLEVBQUMsZUFEakI7QUFFSSxpQkFBVyxFQUFFUixLQUFLLENBQUMsT0FBRCxDQUZ0QjtBQUdJLGlCQUFXLEVBQUVBLEtBQUssQ0FBQyxhQUFELENBSHRCO0FBSUksY0FBUSxFQUFFLG1DQUFrQ00sR0FBRyxDQUFDLFNBQUQ7QUFKbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQWFILENBOUNNOztHQUFNUDs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXJtb25zLnRzeD82ZTgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4vYnV0dG9uJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmludGVyZmFjZSBJU2VybW9uc3tcbiAgICBTZWN0aW9uVGl0bGU6c3RyaW5nLFxuICAgIFNlcm1vblRpdGxlOnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmdcbiAgICB2aWRlb1NyYzphbnlcbiAgICBpc1NtYWxsU3JuPzpib29sZWFuXG59XG5cbmNvbnN0IFNlcm1vbnNXcmFwcGVyID0oe1NlY3Rpb25UaXRsZSwgU2VybW9uVGl0bGUsIGRlc2NyaXB0aW9uLCB2aWRlb1NyYywgaXNTbWFsbFNybn06SVNlcm1vbnMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICB7LyogSW5mb3Igc2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWQ6aXRlbXMtc3RhcnQgbWQ6dy0zLzYgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBwYi0yIGZvbnQtdGhpbiBweC00XCI+e1NlY3Rpb25UaXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYmxhY2sgcHgtNCBweS00IHRleHQtb3JhbmdlLTUwMFwiPntTZXJtb25UaXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXRoaW4gdGV4dC14bCBwYi00IHB4LTQgXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtYmxvY2sgbWQ6dy01LzZcIj48QnV0dG9uQ29tcG9uZW50IGlzVGV4dEJ1dHRvbj17dHJ1ZX0gdGl0bGU9XCJWaWV3IGFsbCBTZXJtb25zXCIgaXNGb250QmlnPXt0cnVlfSAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBWaWRlbyBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1kOnctZnVsbCBtZDpoLVs0NzJweF0nPlxuICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MjBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNDVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ZpZGVvU3JjfVxuICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggbWQ6aGlkZGVuXCI+PEJ1dHRvbkNvbXBvbmVudCBpc1RleHRCdXR0b249e3RydWV9IGlzRm9udEJpZz17dHJ1ZX0gdGl0bGU9XCJWaWV3IGFsbCBTZXJtb25zXCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PiBcbiAgICApXG59XG5cblxuZXhwb3J0IGNvbnN0IFNlcm1vbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8YW55PihbXSlcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlPGFueT4oXCJcIilcblxuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNFcnJvcihmYWxzZSlcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4gICAgICAgICAgICBjb25zdCBDaGFubmVsSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DaGFubmVsSWRcbiAgICAgICAgICAgIGNvbnN0IEtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1lfS0VZXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGBodHRwczovL3lvdXR1YmUuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/cGFydD1zbmlwcGV0JmNoYW5uZWxJZD0ke0NoYW5uZWxJRH0ma2V5PSR7S2V5fSZpZCZvcmRlcj1kYXRlJm1heFJlc3VsdHM9MTJgKVxuICAgICAgICAgICAgICAgIHNldFVybChyZXMuZGF0YS5pdGVtc1swXVtcImlkXCJdKVxuICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlcy5kYXRhLml0ZW1zWzBdW1wic25pcHBldFwiXSlcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9ICAgIFxuICAgICAgICBmZXRjaERhdGEoKVxuICAgXG4gICAgfSxbXSlcblxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbXCJ2aWRlb0lkXCJdKTtcbiAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs0NzJweF0gZmxleC0xIGl0ZW1zLWNlbnRlciBiZy1jb2xvciB0ZXh0LWdyYXktMjAwIHB5LTggcHgtNlwiPlxuXG4gICAgICAgICAgICA8U2VybW9uc1dyYXBwZXJcbiAgICAgICAgICAgICAgICBTZWN0aW9uVGl0bGU9XCJMYXRlc3QgU2VybW9uXCJcbiAgICAgICAgICAgICAgICBTZXJtb25UaXRsZT17dGl0bGVbXCJ0aXRsZVwiXX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGl0bGVbXCJkZXNjcmlwdGlvblwiXX1cbiAgICAgICAgICAgICAgICB2aWRlb1NyYz17XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIisgdXJsW1widmlkZW9JZFwiXX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b25Db21wb25lbnQiLCJheGlvcyIsIlNlcm1vbnNXcmFwcGVyIiwiU2VjdGlvblRpdGxlIiwiU2VybW9uVGl0bGUiLCJkZXNjcmlwdGlvbiIsInZpZGVvU3JjIiwiaXNTbWFsbFNybiIsIlNlcm1vbnNTZWN0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwidXJsIiwic2V0VXJsIiwiZmV0Y2hEYXRhIiwiQ2hhbm5lbElEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NoYW5uZWxJZCIsIktleSIsIk5FWFRfUFVCTElDX1lfS0VZIiwicmVzIiwiZGF0YSIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sermons.tsx\n");

/***/ })

});