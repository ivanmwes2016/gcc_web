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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SermonsSection\": function() { return /* binding */ SermonsSection; }\n/* harmony export */ });\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/ivanmwesigwa/Documents/GitHub/gcc_web/components/Sermons.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SermonsWrapper = function SermonsWrapper(_ref) {\n  var SectionTitle = _ref.SectionTitle,\n      SermonTitle = _ref.SermonTitle,\n      description = _ref.description,\n      videoSrc = _ref.videoSrc;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"flex flex-col md:flex-row justify-start\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"flex flex-col w-full md:items-start md:w-3/6 md:text-left\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-2xl pb-2 font-thin px-4\",\n        children: SectionTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"text-4xl font-black px-4 py-4 text-orange-500\",\n        children: SermonTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"font-thin text-xl pb-4 px-4 \",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"hidden md:inline-block md:w-5/6\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          title: \"View all Sermons\",\n          isFontBig: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 66\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"right flex flex-col justify-center items-center md:w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"iframe\", {\n        width: \"520\",\n        height: \"345\",\n        src: videoSrc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"py-8 md:hidden\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          isTextButton: true,\n          isFontBig: true,\n          title: \"View all Sermons\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 49\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = SermonsWrapper;\nvar SermonsSection = function SermonsSection() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isError = _useState3[0],\n      setIsError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      url = _useState4[0],\n      setUrl = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var res;\n        return _Users_ivanmwesigwa_Documents_GitHub_gcc_web_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setIsError(false);\n                setIsLoading(true);\n                _context.prev = 2;\n                _context.next = 5;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default()('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC1UXAPGt8hjxZ1ZYgWqUQrw');\n\n              case 5:\n                res = _context.sent;\n                setData(res.data.items[0]);\n                _context.next = 12;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](2);\n                setIsError(true);\n\n              case 12:\n                setIsLoading(false);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[2, 9]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    var fetchURL = function fetchURL(data) {\n      try {\n        var myUrl = Object.values(data)[2];\n        console.log(myUrl.split(\"=\"));\n      } catch (err) {\n        console.log(err);\n      }\n    };\n\n    fetchData();\n    fetchURL(data);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"w-full bg-cyan-800 text-gray-200 py-6 px-6\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SermonsWrapper, {\n      SectionTitle: \"Latest Sermon\",\n      SermonTitle: Object.values(data)[0],\n      description: \"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\",\n      videoSrc: \"https://www.youtube.com/embed/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SermonsSection, \"S126UiZVh4ieee3rCeB/yxeYx5c=\");\n\n_c2 = SermonsSection;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SermonsWrapper\");\n$RefreshReg$(_c2, \"SermonsSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V2RGLGdCQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaOztBQVhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRLLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFjQSxRQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDWCxJQUFELEVBQWlCO0FBQzlCLFVBQUc7QUFFSCxZQUFJWSxLQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZCxJQUFkLEVBQW9CLENBQXBCLENBQW5CO0FBQ0FlLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFLLENBQUNLLEtBQU4sQ0FBWSxHQUFaLENBQVo7QUFFQyxPQUxELENBS0MsT0FBTUMsR0FBTixFQUFVO0FBQ1BILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaO0FBQ0g7QUFDSixLQVREOztBQVdBVixJQUFBQSxTQUFTO0FBQ1RHLElBQUFBLFFBQVEsQ0FBQ1gsSUFBRCxDQUFSO0FBQ0gsR0E1QlEsRUE0QlAsRUE1Qk8sQ0FBVDtBQXFDQSxzQkFFSTtBQUFLLGFBQVMsRUFBQyw0Q0FBZjtBQUFBLDJCQUNJLDhEQUFDLGNBQUQ7QUFDSSxrQkFBWSxFQUFDLGVBRGpCO0FBRUksaUJBQVcsRUFBRWEsTUFBTSxDQUFDQyxNQUFQLENBQWNkLElBQWQsRUFBb0IsQ0FBcEIsQ0FGakI7QUFHSSxpQkFBVyxFQUFDLHFLQUhoQjtBQUlJLGNBQVEsRUFBRTtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFnQkgsQ0E1RE07O0dBQU1EOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nlcm1vbnMudHN4PzZlODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBlbnYgfSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuaW50ZXJmYWNlIElTZXJtb25ze1xuICAgIFNlY3Rpb25UaXRsZTpzdHJpbmcsXG4gICAgU2VybW9uVGl0bGU6c3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOnN0cmluZ1xuICAgIHZpZGVvU3JjOmFueVxufVxuXG5jb25zdCBTZXJtb25zV3JhcHBlciA9KHtTZWN0aW9uVGl0bGUsIFNlcm1vblRpdGxlLCBkZXNjcmlwdGlvbiwgdmlkZW9TcmN9OklTZXJtb25zKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgey8qIEluZm9yIHNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG1kOml0ZW1zLXN0YXJ0IG1kOnctMy82IG1kOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgcGItMiBmb250LXRoaW4gcHgtNFwiPntTZWN0aW9uVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJsYWNrIHB4LTQgcHktNCB0ZXh0LW9yYW5nZS01MDBcIj57U2VybW9uVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC10aGluIHRleHQteGwgcGItNCBweC00IFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWJsb2NrIG1kOnctNS82XCI+PEJ1dHRvbkNvbXBvbmVudCBpc1RleHRCdXR0b249e3RydWV9IHRpdGxlPVwiVmlldyBhbGwgU2VybW9uc1wiIGlzRm9udEJpZz17dHJ1ZX0gLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogVmlkZW8gU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDp3LWZ1bGwnPlxuICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MjBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNDVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ZpZGVvU3JjfVxuXG5cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCBtZDpoaWRkZW5cIj48QnV0dG9uQ29tcG9uZW50IGlzVGV4dEJ1dHRvbj17dHJ1ZX0gaXNGb250QmlnPXt0cnVlfSB0aXRsZT1cIlZpZXcgYWxsIFNlcm1vbnNcIiAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+IFxuICAgIClcbn1cblxuXG5leHBvcnQgY29uc3QgU2VybW9uc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc0Vycm9yKGZhbHNlKVxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcygnaHR0cHM6Ly9hcGkucnNzMmpzb24uY29tL3YxL2FwaS5qc29uP3Jzc191cmw9aHR0cHMlM0ElMkYlMkZ3d3cueW91dHViZS5jb20lMkZmZWVkcyUyRnZpZGVvcy54bWwlM0ZjaGFubmVsX2lkJTNEVUMxVVhBUEd0OGhqeFoxWllnV3FVUXJ3JylcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlcy5kYXRhLml0ZW1zWzBdKTtcbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmV0Y2hVUkwgPSAoZGF0YTpvYmplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeXtcblxuICAgICAgICAgICAgbGV0IG15VXJsOnN0cmluZyA9IE9iamVjdC52YWx1ZXMoZGF0YSlbMl1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15VXJsLnNwbGl0KFwiPVwiKSk7XG5cbiAgICAgICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgICAgIGZldGNoVVJMKGRhdGEpXG4gICAgfSxbXSlcblxuXG5cblxuICAgXG4gICBcblxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWN5YW4tODAwIHRleHQtZ3JheS0yMDAgcHktNiBweC02XCI+XG4gICAgICAgICAgICA8U2VybW9uc1dyYXBwZXJcbiAgICAgICAgICAgICAgICBTZWN0aW9uVGl0bGU9XCJMYXRlc3QgU2VybW9uXCJcbiAgICAgICAgICAgICAgICBTZXJtb25UaXRsZT17T2JqZWN0LnZhbHVlcyhkYXRhKVswXX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNvbnRyYXJ5IHRvIHBvcHVsYXIgYmVsaWVmLCBMb3JlbSBJcHN1bSBpcyBub3Qgc2ltcGx5IHJhbmRvbSB0ZXh0LiBJdCBoYXMgcm9vdHMgaW4gYSBwaWVjZSBvZiBjbGFzc2ljYWwgTGF0aW4gbGl0ZXJhdHVyZSBmcm9tIDQ1IEJDLCBtYWtpbmcgaXQgb3ZlciAyMDAwIHllYXJzIG9sZC5cIlxuICAgICAgICAgICAgICAgIHZpZGVvU3JjPXtcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICBcblxuICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uQ29tcG9uZW50IiwiYXhpb3MiLCJTZXJtb25zV3JhcHBlciIsIlNlY3Rpb25UaXRsZSIsIlNlcm1vblRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2aWRlb1NyYyIsIlNlcm1vbnNTZWN0aW9uIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsInVybCIsInNldFVybCIsImZldGNoRGF0YSIsInJlcyIsIml0ZW1zIiwiZmV0Y2hVUkwiLCJteVVybCIsIk9iamVjdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sermons.tsx\n");

/***/ })

});