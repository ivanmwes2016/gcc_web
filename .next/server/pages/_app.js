"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/button.tsx
var components_button = __webpack_require__(586);
// EXTERNAL MODULE: ./components/data.tsx
var data = __webpack_require__(944);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.tsx






const FooterHolder = ({
  title,
  desc,
  btnDesc
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "md:flex-col md:flex md:items-center md:justify-between  md:w-64 md:h-72 sm: hidden",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "font-black text-xl text-center py-6 text-gray-700",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-center text-gray-600",
      children: desc
    }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
      isOutline: false,
      title: btnDesc
    })]
  });
};

const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "md:w-full md:flex-wrap md:flex md:justify-between md:px-56 md:py-8",
    children: [data/* data.FooterData.map */.a.FooterData.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "py-3",
      children: /*#__PURE__*/jsx_runtime_.jsx(FooterHolder, {
        title: item.title,
        desc: item.description,
        btnDesc: item.buttonDesc
      })
    }, item.title)), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: " text-gray-500 text-sm w-full flex justify-center items-center pt-5",
      children: "Designed and Coded by Ivan Mwesigwa | 07951192016 "
    })]
  });
};
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(768);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/HeaderComponent.tsx








const NavHeader = external_styled_components_default().div.withConfig({
  displayName: "HeaderComponent__NavHeader",
  componentId: "sc-ikp3b8-0"
})(["position:sticky;top:0;width:100%;background-color:#1b2128;height:90px;padding-left:20px;padding-right:20px;z-index:1;.title{font-size:18px;width:30%;font-weight:bold;color:#e6e6e6;}ul{width:83%;justify-content:center;align-items:center;}li{display:flex;justify-content:center;list-style:none;margin:20px;align-items:center;font-size:12px;height:90px;color:#e6e6e6;:hover{border-bottom-width:4px;border-bottom-color:#019dae;color:#019dae;cursor:pointer;a{color:#019dae;}transition:all 0.5s;}a{color:#e6e6e6;font-weight:bold;transition:all 0.5s;}transition:all 0.5s;}"]);
const HeaderComponent = ({
  title
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavHeader, {
    className: "flex justify-between space-x-8 items-center lg:flex ",
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "w-20 h-20",
      src: "/LOGO_GCM.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "title hidden lg:inline",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "hidden lg:flex",
      children: data/* data.MenuItems.map */.a.MenuItems.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: item.icon
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: `/${encodeURIComponent(item.slug)}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: item.name
          })
        })]
      }, item.name))
    }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
      title: 'GIVE',
      isOutline: false
    }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
      title: 'CONTACT',
      isOutline: true
    }), /*#__PURE__*/jsx_runtime_.jsx(outline_.MenuIcon, {
      className: "w-10 h-10 inline lg:hidden stroke-1 stroke-slate-100 "
    })]
  });
};
;// CONCATENATED MODULE: ./components/layout.tsx







const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "p-[0px]",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Great Commission Church"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("header", {
      children: /*#__PURE__*/jsx_runtime_.jsx(HeaderComponent, {
        title: "GREAT COMMISSION CHURCH"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Footer, {})
    })]
  });
};

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 570:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,292,586], () => (__webpack_exec__(380)));
module.exports = __webpack_exports__;

})();