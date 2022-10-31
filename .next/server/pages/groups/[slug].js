"use strict";
(() => {
var exports = {};
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ client),
  "u": () => (/* binding */ urlFor)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: ./lib/client.tsx


const client = client_default()({
  projectId: 'dbb2n83w',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v2021-10-21',
  token: "skCw7NRyz1ybYlEhwoLqJ86LBK1qmeN3E3SepBuQU8qtoYEeWpLw74TJxChtJI6lhXILu43KhecZomhuahjrihRie2zStPFcPOuqKWbpkCyO9CUHRKylRzYfDzlk4XPhVhMb8K7HOiR7QsfZGOPQivt0vySFYswx3zj68rrwfyfYwJ0MJAMH"
});
const builder = image_url_default()(client);
const urlFor = source => builder.image(source);

/***/ }),

/***/ 775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(586);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(205);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const groups = ({
  group
}) => {
  const {
    0: details,
    1: setDetails
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mobile,
    1: setMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // onchange function

  const HandleSumbit = e => {
    e.preventDefault();
    const {
      name,
      email,
      mobile,
      message
    } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value
    };
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "flex-col flex justify-center items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: `w-full h-[20rem] bg-gray-500 flex justify-center items-center flex-col bg-[url(${(0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(group.image).toString()})] bg-cover bg-no-repeat`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        urlLink: "/",
        title: "Back Home",
        isOutline: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "text-center text-5xl font-extrabold py-[5rem]",
        children: group.title
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "w-[70%] text-center text-2xl py-7",
      children: [group.desc.map(item => item.children.map(_text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        children: _text.text
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
        className: "my-4 font-extrabold text-cyan-900",
        children: ["Register below to join the ", group.title, " group"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
        className: "my-8 flex-col flex justify-center items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
          type: "text",
          className: "  border  border-gray-500  border-solid rounded-[10px]  text-xs w-[500px] h-[40px] pl-2 my-2",
          id: "name",
          onChange: e => setName(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
          type: "text",
          className: "  border  border-gray-500  border-solid rounded-[10px]  text-xs w-[500px] h-[40px] pl-2 my-2",
          placeholder: "Email *",
          required: true,
          id: "email",
          onChange: e => setEmail(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
          type: "text",
          className: "  border  border-gray-500  border-solid rounded-[10px]  text-xs w-[500px] h-[40px] pl-2 my-2",
          placeholder: "Telephone/Mobile",
          required: true,
          id: "mobile",
          onChange: e => setMobile(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("textarea", {
          rows: 4,
          cols: 50,
          className: "  border  border-gray-500  border-solid rounded-[10px]  text-xs w-[500px] h-[200px] pl-2 my-2",
          placeholder: "Message",
          required: true,
          id: "message",
          onChange: e => setMessage(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          title: "REGISTER"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {})]
  });
};

const getStaticProps = async ({
  params: {
    slug
  }
}) => {
  const group = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(`*[_type == "groups" && slug.current == '${slug}'][0]`);
  console.log('group :>> ', group);
  return {
    props: {
      group
    }
  };
};
const getStaticPaths = async () => {
  const query = `
    *[_type == "groups"]{
        slug {
          current
        }
    }
  `;
  const groupsSlugs = await _lib_client__WEBPACK_IMPORTED_MODULE_2__/* .client.fetch */ .L.fetch(query);
  const paths = groupsSlugs.map(item => ({
    params: {
      slug: item.slug.current
    }
  })); // console.log('groupsSlugs :>> ', groupsSlugs);

  return {
    paths,
    fallback: 'blocking'
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (groups);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,586], () => (__webpack_exec__(775)));
module.exports = __webpack_exports__;

})();