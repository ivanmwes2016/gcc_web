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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SermonsSection\": function() { return /* binding */ SermonsSection; }\n/* harmony export */ });\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Sermons.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SermonsWrapper = function SermonsWrapper(_ref) {\n  var SectionTitle = _ref.SectionTitle,\n      SermonTitle = _ref.SermonTitle,\n      description = _ref.description,\n      videoSrc = _ref.videoSrc;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row justify-start\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"flex flex-col w-full md:items-start md:w-3/6 md:text-left\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-2xl pb-2 font-thin px-4\",\n        children: SectionTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-4xl font-black px-4 py-4 text-orange-500\",\n        children: SermonTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"font-thin text-xl pb-4 px-4 \",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"hidden md:inline-block md:w-5/6\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          title: \"View all Sermons\",\n          isFontBig: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 66\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"right flex flex-col justify-center items-center md:w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"iframe\", {\n        width: \"520\",\n        height: \"345\",\n        src: videoSrc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"py-8 md:hidden\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          isFontBig: true,\n          title: \"View all Sermons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 49\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = SermonsWrapper;\nvar SermonsSection = function SermonsSection() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isError = _useState3[0],\n      setIsError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      url = _useState4[0],\n      setUrl = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var res;\n        return _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setIsError(false);\n                setIsLoading(true);\n                _context.prev = 2;\n                _context.next = 5;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1UXAPGt8hjxZ1ZYgWqUQrw&key=AIzaSyAfU2lXuOZnoR8a5y1fq_0LK4LAIx44res&id&order=date&maxResults=12');\n\n              case 5:\n                res = _context.sent;\n                setUrl(res.data.items[0][\"id\"]);\n                setTitle(res.data.items[0][\"snippet\"]);\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](2);\n                setIsError(true);\n\n              case 13:\n                setIsLoading(false);\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 10]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  console.log(data[\"videoId\"]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"w-full bg-cyan-800 text-gray-200 py-6 px-6\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SermonsWrapper, {\n      SectionTitle: \"Latest Sermon\",\n      SermonTitle: title[\"title\"],\n      description: \"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\",\n      videoSrc: \"https://www.youtube.com/embed/\" + url[\"videoId\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SermonsSection, \"XNnZT1QpxxFTjXdrwOaVSj3GepA=\");\n\n_c2 = SermonsSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SermonsWrapper\");\n$RefreshReg$(_c2, \"SermonsSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQWYsRUFBa0IsU0FBbEIsQ0FBRCxDQUFSO0FBUFU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTVk4sZ0JBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7O0FBVFU7QUFZZEYsZ0JBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7O0FBWmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEssU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQWNBQSxJQUFBQSxTQUFTO0FBRVosR0FqQlEsRUFpQlAsRUFqQk8sQ0FBVDtBQW1CQUksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQyxTQUFELENBQWhCO0FBTUEsc0JBRUk7QUFBSyxhQUFTLEVBQUMsNENBQWY7QUFBQSwyQkFFSSw4REFBQyxjQUFEO0FBQ0ksa0JBQVksRUFBQyxlQURqQjtBQUVJLGlCQUFXLEVBQUVWLEtBQUssQ0FBQyxPQUFELENBRnRCO0FBR0ksaUJBQVcsRUFBQyxxS0FIaEI7QUFJSSxjQUFRLEVBQUUsbUNBQWtDTSxHQUFHLENBQUMsU0FBRDtBQUpuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBaUJILENBaERNOztHQUFNUDs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXJtb25zLnRzeD82ZTgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgZW52IH0gZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4vYnV0dG9uJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmludGVyZmFjZSBJU2VybW9uc3tcbiAgICBTZWN0aW9uVGl0bGU6c3RyaW5nLFxuICAgIFNlcm1vblRpdGxlOnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmdcbiAgICB2aWRlb1NyYzphbnlcbn1cblxuY29uc3QgU2VybW9uc1dyYXBwZXIgPSh7U2VjdGlvblRpdGxlLCBTZXJtb25UaXRsZSwgZGVzY3JpcHRpb24sIHZpZGVvU3JjfTpJU2VybW9ucykgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgIHsvKiBJbmZvciBzZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtZDppdGVtcy1zdGFydCBtZDp3LTMvNiBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIHBiLTIgZm9udC10aGluIHB4LTRcIj57U2VjdGlvblRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ibGFjayBweC00IHB5LTQgdGV4dC1vcmFuZ2UtNTAwXCI+e1Nlcm1vblRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtdGhpbiB0ZXh0LXhsIHBiLTQgcHgtNCBcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1ibG9jayBtZDp3LTUvNlwiPjxCdXR0b25Db21wb25lbnQgaXNUZXh0QnV0dG9uPXt0cnVlfSB0aXRsZT1cIlZpZXcgYWxsIFNlcm1vbnNcIiBpc0ZvbnRCaWc9e3RydWV9IC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFZpZGVvIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6dy1mdWxsJz5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTIwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzQ1XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt2aWRlb1NyY31cblxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggbWQ6aGlkZGVuXCI+PEJ1dHRvbkNvbXBvbmVudCBpc1RleHRCdXR0b249e3RydWV9IGlzRm9udEJpZz17dHJ1ZX0gdGl0bGU9XCJWaWV3IGFsbCBTZXJtb25zXCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PiBcbiAgICApXG59XG5cblxuZXhwb3J0IGNvbnN0IFNlcm1vbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8YW55PihbXSlcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlPGFueT4oXCJcIilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldElzRXJyb3IoZmFsc2UpXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcblxuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKCdodHRwczovL3lvdXR1YmUuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/cGFydD1zbmlwcGV0JmNoYW5uZWxJZD1VQzFVWEFQR3Q4aGp4WjFaWWdXcVVRcncma2V5PUFJemFTeUFmVTJsWHVPWm5vUjhhNXkxZnFfMExLNExBSXg0NHJlcyZpZCZvcmRlcj1kYXRlJm1heFJlc3VsdHM9MTInKVxuICAgICAgICAgICAgICAgIHNldFVybChyZXMuZGF0YS5pdGVtc1swXVtcImlkXCJdKVxuICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlcy5kYXRhLml0ZW1zWzBdW1wic25pcHBldFwiXSlcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9ICAgIFxuICAgICAgICBmZXRjaERhdGEoKVxuICAgXG4gICAgfSxbXSlcblxuICAgIGNvbnNvbGUubG9nKGRhdGFbXCJ2aWRlb0lkXCJdKTtcbiAgICBcblxuXG4gICAgXG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctY3lhbi04MDAgdGV4dC1ncmF5LTIwMCBweS02IHB4LTZcIj5cblxuICAgICAgICAgICAgPFNlcm1vbnNXcmFwcGVyXG4gICAgICAgICAgICAgICAgU2VjdGlvblRpdGxlPVwiTGF0ZXN0IFNlcm1vblwiXG4gICAgICAgICAgICAgICAgU2VybW9uVGl0bGU9e3RpdGxlW1widGl0bGVcIl19XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFycyBvbGQuXCJcbiAgICAgICAgICAgICAgICB2aWRlb1NyYz17XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIisgdXJsW1widmlkZW9JZFwiXX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgXG5cbiAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbkNvbXBvbmVudCIsImF4aW9zIiwiU2VybW9uc1dyYXBwZXIiLCJTZWN0aW9uVGl0bGUiLCJTZXJtb25UaXRsZSIsImRlc2NyaXB0aW9uIiwidmlkZW9TcmMiLCJTZXJtb25zU2VjdGlvbiIsInRpdGxlIiwic2V0VGl0bGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsInVybCIsInNldFVybCIsImZldGNoRGF0YSIsInJlcyIsImRhdGEiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sermons.tsx\n");

/***/ })

});