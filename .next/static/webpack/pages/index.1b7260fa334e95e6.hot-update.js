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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SermonsSection\": function() { return /* binding */ SermonsSection; }\n/* harmony export */ });\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Sermons.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SermonsWrapper = function SermonsWrapper(_ref) {\n  var SectionTitle = _ref.SectionTitle,\n      SermonTitle = _ref.SermonTitle,\n      description = _ref.description,\n      videoSrc = _ref.videoSrc;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row justify-start\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"flex flex-col w-full md:items-start md:w-3/6 md:text-left\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-2xl pb-2 font-thin px-4\",\n        children: SectionTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-4xl font-black px-4 py-4 text-orange-500\",\n        children: SermonTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"font-thin text-xl pb-4 px-4 \",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"hidden md:inline-block md:w-5/6\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          title: \"View all Sermons\",\n          isFontBig: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 66\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"right flex flex-col justify-center items-center md:w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"iframe\", {\n        width: \"420\",\n        height: \"345\",\n        src: videoSrc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"py-8 md:hidden\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          isFontBig: true,\n          title: \"View all Sermons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 49\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = SermonsWrapper;\nvar SermonsSection = function SermonsSection() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isError = _useState3[0],\n      setIsError = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var res;\n        return _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setIsError(false);\n                setIsLoading(true);\n                _context.prev = 2;\n                _context.next = 5;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC1UXAPGt8hjxZ1ZYgWqUQrw');\n\n              case 5:\n                res = _context.sent;\n                setData(res.data.items[0]); // console.log(res.data.items[0]);\n\n                _context.next = 12;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](2);\n                setIsError(true);\n\n              case 12:\n                setIsLoading(false);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 9]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  var myUrl = Object.values(data)[2];\n\n  for (var url in myUrl) {\n    console.log(myUrl[0]);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"w-full bg-cyan-800 text-gray-200 py-6 px-6\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SermonsWrapper, {\n      SectionTitle: \"Latest Sermon\",\n      SermonTitle: Object.values(data)[0],\n      description: \"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\",\n      videoSrc: \"#\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SermonsSection, \"6EDkcU5PbuSsesaofET2GVZ0HMs=\");\n\n_c2 = SermonsSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SermonsWrapper\");\n$RefreshReg$(_c2, \"SermonsSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUEsT0FBSDs7QUFBQSxzQkFBVEcsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQWdCQUEsSUFBQUEsU0FBUztBQUNaLEdBbEJRLEVBa0JQLEVBbEJPLENBQVQ7QUFvQkQsTUFBSUcsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsSUFBZCxFQUFvQixDQUFwQixDQUFaOztBQUVBLE9BQUssSUFBSVksR0FBVCxJQUFnQkgsS0FBaEIsRUFBc0I7QUFDbEJJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFLLENBQUMsQ0FBRCxDQUFqQjtBQUNIOztBQUdBLHNCQUVJO0FBQUssYUFBUyxFQUFDLDRDQUFmO0FBQUEsMkJBQ0ksOERBQUMsY0FBRDtBQUNJLGtCQUFZLEVBQUMsZUFEakI7QUFFSSxpQkFBVyxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsSUFBZCxFQUFvQixDQUFwQixDQUZqQjtBQUdJLGlCQUFXLEVBQUMscUtBSGhCO0FBSUksY0FBUSxFQUFDO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQWdCSCxDQWpETTs7R0FBTUQ7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VybW9ucy50c3g/NmU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGVudiB9IGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL2J1dHRvbidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVybCB9IGZyb20gJ2luc3BlY3Rvcic7XG5cbmludGVyZmFjZSBJU2VybW9uc3tcbiAgICBTZWN0aW9uVGl0bGU6c3RyaW5nLFxuICAgIFNlcm1vblRpdGxlOnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmdcbiAgICB2aWRlb1NyYzpzdHJpbmdcbn1cblxuY29uc3QgU2VybW9uc1dyYXBwZXIgPSh7U2VjdGlvblRpdGxlLCBTZXJtb25UaXRsZSwgZGVzY3JpcHRpb24sIHZpZGVvU3JjfTpJU2VybW9ucykgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgIHsvKiBJbmZvciBzZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtZDppdGVtcy1zdGFydCBtZDp3LTMvNiBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIHBiLTIgZm9udC10aGluIHB4LTRcIj57U2VjdGlvblRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ibGFjayBweC00IHB5LTQgdGV4dC1vcmFuZ2UtNTAwXCI+e1Nlcm1vblRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtdGhpbiB0ZXh0LXhsIHBiLTQgcHgtNCBcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1ibG9jayBtZDp3LTUvNlwiPjxCdXR0b25Db21wb25lbnQgaXNUZXh0QnV0dG9uPXt0cnVlfSB0aXRsZT1cIlZpZXcgYWxsIFNlcm1vbnNcIiBpc0ZvbnRCaWc9e3RydWV9IC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFZpZGVvIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6dy1mdWxsJz5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDIwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzQ1XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt2aWRlb1NyY31cblxuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggbWQ6aGlkZGVuXCI+PEJ1dHRvbkNvbXBvbmVudCBpc1RleHRCdXR0b249e3RydWV9IGlzRm9udEJpZz17dHJ1ZX0gdGl0bGU9XCJWaWV3IGFsbCBTZXJtb25zXCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PiBcbiAgICApXG59XG5cblxuZXhwb3J0IGNvbnN0IFNlcm1vbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNFcnJvcihmYWxzZSlcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoJ2h0dHBzOi8vYXBpLnJzczJqc29uLmNvbS92MS9hcGkuanNvbj9yc3NfdXJsPWh0dHBzJTNBJTJGJTJGd3d3LnlvdXR1YmUuY29tJTJGZmVlZHMlMkZ2aWRlb3MueG1sJTNGY2hhbm5lbF9pZCUzRFVDMVVYQVBHdDhoanhaMVpZZ1dxVVFydycpXG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXMuZGF0YS5pdGVtc1swXSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEuaXRlbXNbMF0pO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICBzZXRJc0Vycm9yKHRydWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LFtdKVxuXG4gICBsZXQgbXlVcmwgPSBPYmplY3QudmFsdWVzKGRhdGEpWzJdXG4gICBcbiAgIGZvciAobGV0IHVybCBpbiBteVVybCl7XG4gICAgICAgY29uc29sZS5sb2cobXlVcmxbMF0pO1xuICAgfVxuXG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctY3lhbi04MDAgdGV4dC1ncmF5LTIwMCBweS02IHB4LTZcIj5cbiAgICAgICAgICAgIDxTZXJtb25zV3JhcHBlclxuICAgICAgICAgICAgICAgIFNlY3Rpb25UaXRsZT1cIkxhdGVzdCBTZXJtb25cIlxuICAgICAgICAgICAgICAgIFNlcm1vblRpdGxlPXtPYmplY3QudmFsdWVzKGRhdGEpWzBdfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnMgb2xkLlwiXG4gICAgICAgICAgICAgICAgdmlkZW9TcmM9XCIjXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgXG5cbiAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbkNvbXBvbmVudCIsImF4aW9zIiwiU2VybW9uc1dyYXBwZXIiLCJTZWN0aW9uVGl0bGUiLCJTZXJtb25UaXRsZSIsImRlc2NyaXB0aW9uIiwidmlkZW9TcmMiLCJTZXJtb25zU2VjdGlvbiIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJmZXRjaERhdGEiLCJyZXMiLCJpdGVtcyIsIm15VXJsIiwiT2JqZWN0IiwidmFsdWVzIiwidXJsIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sermons.tsx\n");

/***/ })

});