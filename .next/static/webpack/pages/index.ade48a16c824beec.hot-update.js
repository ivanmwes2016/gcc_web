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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SermonsSection\": function() { return /* binding */ SermonsSection; }\n/* harmony export */ });\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Sermons.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar SermonsWrapper = function SermonsWrapper(_ref) {\n  var SectionTitle = _ref.SectionTitle,\n      SermonTitle = _ref.SermonTitle,\n      description = _ref.description,\n      videoSrc = _ref.videoSrc;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row justify-start\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"flex flex-col w-full md:items-start md:w-3/6 md:text-left\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-2xl pb-2 font-thin px-4\",\n        children: SectionTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-4xl font-black px-4 py-4 text-orange-500\",\n        children: SermonTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"font-thin text-xl pb-4 px-4 \",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"hidden md:inline-block md:w-5/6\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          title: \"View all Sermons\",\n          isFontBig: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 66\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"right flex flex-col justify-center items-center md:w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"iframe\", {\n        width: \"420\",\n        height: \"345\",\n        src: videoSrc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"py-8 md:hidden\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          isFontBig: true,\n          title: \"View all Sermons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 49\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = SermonsWrapper;\nvar SermonsSection = function SermonsSection() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isError = _useState3[0],\n      setIsError = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var res;\n        return _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setIsError(false);\n                setIsLoading(true);\n                _context.prev = 2;\n                _context.next = 5;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC1UXAPGt8hjxZ1ZYgWqUQrw');\n\n              case 5:\n                res = _context.sent;\n                setData(res.data.items[0]); // console.log(res.data.items[0]);\n\n                _context.next = 12;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](2);\n                setIsError(true);\n\n              case 12:\n                setIsLoading(false);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 9]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  var myUrl = Object.values(data)[2];\n\n  var _iterator = _createForOfIteratorHelper(myUrl),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var url = _step.value;\n      console.log(url);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"w-full bg-cyan-800 text-gray-200 py-6 px-6\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SermonsWrapper, {\n      SectionTitle: \"Latest Sermon\",\n      SermonTitle: Object.values(data)[0],\n      description: \"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\",\n      videoSrc: \"#\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SermonsSection, \"6EDkcU5PbuSsesaofET2GVZ0HMs=\");\n\n_c2 = SermonsSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SermonsWrapper\");\n$RefreshReg$(_c2, \"SermonsSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEcsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQWdCQUEsSUFBQUEsU0FBUztBQUNaLEdBbEJRLEVBa0JQLEVBbEJPLENBQVQ7QUFvQkQsTUFBSUcsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsSUFBZCxFQUFvQixDQUFwQixDQUFaOztBQTFCaUMsNkNBNEJqQlMsS0E1QmlCO0FBQUE7O0FBQUE7QUE0QmpDLHdEQUFzQjtBQUFBLFVBQWJHLEdBQWE7QUFDbEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0g7QUE5QmdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUNoQyxzQkFFSTtBQUFLLGFBQVMsRUFBQyw0Q0FBZjtBQUFBLDJCQUNJLDhEQUFDLGNBQUQ7QUFDSSxrQkFBWSxFQUFDLGVBRGpCO0FBRUksaUJBQVcsRUFBRUYsTUFBTSxDQUFDQyxNQUFQLENBQWNYLElBQWQsRUFBb0IsQ0FBcEIsQ0FGakI7QUFHSSxpQkFBVyxFQUFDLHFLQUhoQjtBQUlJLGNBQVEsRUFBQztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFnQkgsQ0FqRE07O0dBQU1EOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nlcm1vbnMudHN4PzZlODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBlbnYgfSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1cmwgfSBmcm9tICdpbnNwZWN0b3InO1xuXG5pbnRlcmZhY2UgSVNlcm1vbnN7XG4gICAgU2VjdGlvblRpdGxlOnN0cmluZyxcbiAgICBTZXJtb25UaXRsZTpzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246c3RyaW5nXG4gICAgdmlkZW9TcmM6c3RyaW5nXG59XG5cbmNvbnN0IFNlcm1vbnNXcmFwcGVyID0oe1NlY3Rpb25UaXRsZSwgU2VybW9uVGl0bGUsIGRlc2NyaXB0aW9uLCB2aWRlb1NyY306SVNlcm1vbnMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICB7LyogSW5mb3Igc2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWQ6aXRlbXMtc3RhcnQgbWQ6dy0zLzYgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBwYi0yIGZvbnQtdGhpbiBweC00XCI+e1NlY3Rpb25UaXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYmxhY2sgcHgtNCBweS00IHRleHQtb3JhbmdlLTUwMFwiPntTZXJtb25UaXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXRoaW4gdGV4dC14bCBwYi00IHB4LTQgXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtYmxvY2sgbWQ6dy01LzZcIj48QnV0dG9uQ29tcG9uZW50IGlzVGV4dEJ1dHRvbj17dHJ1ZX0gdGl0bGU9XCJWaWV3IGFsbCBTZXJtb25zXCIgaXNGb250QmlnPXt0cnVlfSAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBWaWRlbyBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1kOnctZnVsbCc+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQyMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM0NVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dmlkZW9TcmN9XG5cblxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IG1kOmhpZGRlblwiPjxCdXR0b25Db21wb25lbnQgaXNUZXh0QnV0dG9uPXt0cnVlfSBpc0ZvbnRCaWc9e3RydWV9IHRpdGxlPVwiVmlldyBhbGwgU2VybW9uc1wiIC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj4gXG4gICAgKVxufVxuXG5cbmV4cG9ydCBjb25zdCBTZXJtb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldElzRXJyb3IoZmFsc2UpXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcblxuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKCdodHRwczovL2FwaS5yc3MyanNvbi5jb20vdjEvYXBpLmpzb24/cnNzX3VybD1odHRwcyUzQSUyRiUyRnd3dy55b3V0dWJlLmNvbSUyRmZlZWRzJTJGdmlkZW9zLnhtbCUzRmNoYW5uZWxfaWQlM0RVQzFVWEFQR3Q4aGp4WjFaWWdXcVVRcncnKVxuICAgICAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEuaXRlbXNbMF0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLml0ZW1zWzBdKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgc2V0SXNFcnJvcih0cnVlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSxbXSlcblxuICAgbGV0IG15VXJsID0gT2JqZWN0LnZhbHVlcyhkYXRhKVsyXVxuICAgXG4gICBmb3IgKGxldCB1cmwgb2YgbXlVcmwpe1xuICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICB9XG5cbiAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1jeWFuLTgwMCB0ZXh0LWdyYXktMjAwIHB5LTYgcHgtNlwiPlxuICAgICAgICAgICAgPFNlcm1vbnNXcmFwcGVyXG4gICAgICAgICAgICAgICAgU2VjdGlvblRpdGxlPVwiTGF0ZXN0IFNlcm1vblwiXG4gICAgICAgICAgICAgICAgU2VybW9uVGl0bGU9e09iamVjdC52YWx1ZXMoZGF0YSlbMF19XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDb250cmFyeSB0byBwb3B1bGFyIGJlbGllZiwgTG9yZW0gSXBzdW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIGluIGEgcGllY2Ugb2YgY2xhc3NpY2FsIExhdGluIGxpdGVyYXR1cmUgZnJvbSA0NSBCQywgbWFraW5nIGl0IG92ZXIgMjAwMCB5ZWFycyBvbGQuXCJcbiAgICAgICAgICAgICAgICB2aWRlb1NyYz1cIiNcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICBcblxuICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uQ29tcG9uZW50IiwiYXhpb3MiLCJTZXJtb25zV3JhcHBlciIsIlNlY3Rpb25UaXRsZSIsIlNlcm1vblRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2aWRlb1NyYyIsIlNlcm1vbnNTZWN0aW9uIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImZldGNoRGF0YSIsInJlcyIsIml0ZW1zIiwibXlVcmwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ1cmwiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sermons.tsx\n");

/***/ })

});