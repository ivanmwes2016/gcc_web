"use strict";
(() => {
var exports = {};
exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GroupComponent": () => (/* binding */ GroupComponent),
  "default": () => (/* binding */ groups),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/data.tsx
var data = __webpack_require__(944);
;// CONCATENATED MODULE: ./data/data.json
const data_namespaceObject = JSON.parse('[{"TeamGroups":[{"slug":"relationships-marriage","title":"Relationship & Marriage","image":"/bg-bg.jpg","LinkName":"View Posts"},{"slug":"register","title":"Register or Volunteer","image":"/bg-bg.jpg","LinkName":"Volunteer"},{"slug":"music-ministry","title":"Music Ministry","image":"/bg-bg.jpg","LinkName":"Read More"},{"slug":"youth-ministry","title":"Youth Ministry","image":"/bg-bg.jpg","LinkName":"Read More"},{"slug":"womens-ministry","title":"Women\'s Ministry","image":"/bg-bg.jpg","LinkName":"Read More"},{"slug":"mens-ministry","title":"Men\'s Ministry","image":"/bg-bg.jpg","LinkName":"Read More"}]},{"DiversityText":"Great Commission Church is a globally diverse church which is committed to racial equality and justice for all. Our mission is to find greatness in people and empower them to prosper, through proclaiming the Good news of Jesus Christ which has immediate and eternal implications for human flourishing."},{"Events":[{"slug":"great-annual-conference","title":"Greats Annual Conference","image":"/bg-bg.jpg","date":"03 JULY 2022","LinkName":"View Event"},{"slug":"tmp","title":"Taking your Market Place","image":"/bg-bg.jpg","date":"03 JULY 2022","LinkName":"View Event"},{"slug":"worship-night","title":"Worship Night","image":"/bg-bg.jpg","date":"04 JULY 2022","LinkName":"View Event"},{"slug":"night-of-encounter","title":"Night of Encounter","image":"/bg-bg.jpg","date":"03 AUGUST 2022","LinkName":"View Event"},{"slug":"praise-rally","title":"Praise Rally","image":"/bg-bg.jpg","date":"03 MAY 2022","LinkName":"View Event"},{"slug":"great-annual-conference2","title":"Greats Annual Conference2333","image":"/bg-bg.jpg","date":"03 JULY 2022","LinkName":"View Event"}]},{"PrayerText":[{"title":"Need a Prayer?","description":"There are times when life is overwhelming when all we have is questions. In those moments hope can feel away. The great thing is that prayer shifts our perspective towards the One God who stands ready to listen. No matter what you\'re facing, we\'d love to pray with you.","url":"#"}]}]');
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/groups.tsx

 // import ButtonComponent from './button'





const Container = external_styled_components_default().div.withConfig({
  displayName: "groups__Container",
  componentId: "sc-1lkads8-0"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;.groupthumb{background-image:url(\"", "\");overflow:hidden;border-radius:20px;background-size:120%;background-repeat:no-repeat;}.inner-group-thumb{height:34%;margin-top:150px;width:100%;}"], props => props.imageUrl);

const GroupCard = ({
  ThumbNailTitle,
  ButtonPlaceholder,
  data,
  imageUrl,
  Link
}) => {
  return /*#__PURE__*/_jsx(Container, {
    imageUrl: imageUrl,
    children: /*#__PURE__*/_jsx("div", {
      className: "groupthumb w-80 h-56",
      children: /*#__PURE__*/_jsx("div", {
        className: " inner-group-thumb  w-full  flex  items-center justify-center  text-white  bg-black  bg-opacity-60",
        children: ThumbNailTitle
      })
    })
  });
};

const breakPoints = [{
  width: 1,
  itemsToShow: 1
}, {
  width: 550,
  itemsToShow: 2,
  itemsToScoll: 2
}, {
  width: 768,
  itemsToShow: 3
}, {
  width: 1200,
  itemsToShow: 3
}]; // Implementing SSG

const getStaticProps = async () => {
  return {
    props: {
      mainData: data_namespaceObject
    }
  };
};
const GroupComponent = ({
  props
}) => {
  console.log("props", props);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-5 px-5 w-full flex justify-center items-center flex-col",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: " pb-5 font-thin text-3xl",
      children: "Teams & Groups"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: " py-6 text-gray-700 font-bold text-3xl",
      children: "Our Commitment to Racial Diversity"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "w-3/4 font-thin text-2xl pb-4 px-4 text-gray-700",
      children: data/* data.DiversityText */.a.DiversityText
    })]
  });
};
/* harmony default export */ const groups = (GroupComponent);

/***/ }),

/***/ 768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

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
var __webpack_exports__ = __webpack_require__.X(0, [292], () => (__webpack_exec__(509)));
module.exports = __webpack_exports__;

})();