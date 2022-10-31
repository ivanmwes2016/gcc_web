"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "button__Button",
  componentId: "sc-vorqo3-0"
})(["font-weight:bold;font-size:", ";padding:8px 0px 8px 0px;width:150px;margin-left:20px;border-radius:20px;border-width:1.5px;", ";", ";"], props => props.isFontBig ? '15px' : '12px', props => !props.isOutline ? (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background-color:#ff8400;color:white;border-color:#ff8400;transition:all 0.5s;:hover{background-color:#ffcc00;color:white;border-color:#ffcc00;transition:all 0.5s;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["color:white;border-color:#fe6716;"]), props => props.isTextButton ? (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([".arrow{display:inline;};color:#ff8400;padding:0;border:none;background-color:rgba(0,0,0,0);:hover{.arrow{display:inline;color:gray;font-size:small;background-color:rgba(0,0,0,0);transition:0.5s;}}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([".arrow{display:none;};"]));

const ButtonComponent = ({
  isOutline,
  isTextButton,
  isFontBig,
  title,
  urlLink
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Button, {
    isOutline: isOutline,
    isTextButton: isTextButton,
    title: title,
    isFontBig: isFontBig,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `${urlLink}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
        children: [title, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.ArrowCircleRightIcon, {
            className: " arrow w-5 h-5"
          }), " "]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonComponent);

/***/ })

};
;