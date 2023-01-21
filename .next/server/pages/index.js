"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/button.tsx
var components_button = __webpack_require__(586);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/client.tsx + 2 modules
var client = __webpack_require__(205);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CardOne.tsx






const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "CardOne__Wrapper",
  componentId: "sc-1kz4tcc-0"
})(["width:100%;"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "CardOne__Container",
  componentId: "sc-1kz4tcc-1"
})(["padding-left:20px;padding-right:20px;width:410px;height:150;display:flex;flex-direction:row;box-shadow:0px 2px 3px 1px rgba(0,0,0,0.2);.InfoContainter{width:250px;display:flex;flex-direction:column;justify-content:space-between;}.title{color:#555555;font-size:18px;font-weight:900;padding-left:1rem;}.descrition{color:#555555;font-size:14px;}.infoCard{transform:scale(1,1);transition:transform 0.5s ease;cursor:pointer;&:hover{transform:scale(1.1,1.1);background-color:red;}}"]);

const Card = ({
  infoCardData
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    className: "py-3 rounded-xl m-3 flex flex-row i tems-center cursor-pointer  transform  transition-all duration-500 ease-out delay-75 hover:scale-110 hover:bg-gray-200 ",
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: (0,client/* urlFor */.u)(infoCardData.image).toString(),
      className: "w-40 h-32"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "InfoContainter",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "title",
        children: infoCardData.title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "descrition px-4",
        children: infoCardData.descr
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "button",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
          title: infoCardData.button,
          isTextButton: true,
          urlLink: `/about/${infoCardData.slug.current}`
        })
      })]
    })]
  }, infoCardData._id);
};

/* harmony default export */ const CardOne = (Card);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(143);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/events.tsx








const events_Container = external_styled_components_default().div.withConfig({
  displayName: "events__Container",
  componentId: "sc-1e3vf0p-0"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;.groupthumb{background-image:url(\"", "\");cursor:pointer;overflow:hidden;border-radius:20px;background-size:cover;background-repeat:no-repeat;width:20rem;height:30rem;box-shadow:0px 0px 6px -1px rgba(0,0,0,0.5);transform:scale(1,1);transition:transform 0.5s ease;&:hover{transform:scale(1.1,1.1);}}.inner-group-thumb{height:70%;margin-top:150px;width:100%;background:rgb(2,41,82);background:linear-gradient(0deg,rgb(2,41,82) 15%,rgba(1,157,174,0) 79%);}"], props => props.imageUrl);
const EventItem = ({
  ThumbNailTitle,
  ButtonPlaceholder,
  date,
  StartTime,
  EndTime,
  imageUrl
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    href: '#',
    children: /*#__PURE__*/jsx_runtime_.jsx(events_Container, {
      imageUrl: (0,client/* urlFor */.u)(imageUrl).toString(),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "groupthumb",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: " inner-group-thumb  w-full  flex  flex-col items-center justify-center  text-white  ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-2xl w-52 uppercase font-extrabold text-center",
            children: ThumbNailTitle
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-sm py-4 flex flex-row",
            children: [/*#__PURE__*/jsx_runtime_.jsx(solid_.CalendarIcon, {
              className: "w-5 h-5 mx-2"
            }), date]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-sm py-4",
            children: [StartTime, " to ", EndTime]
          }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
            isTextButton: true,
            isFontBig: true,
            title: ButtonPlaceholder
          })]
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/Group.tsx






const Group_Container = external_styled_components_default().div.withConfig({
  displayName: "Group__Container",
  componentId: "sc-1hm8a79-0"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;.groupthumb{background-image:url(\"", "\");background-size:contain;overflow:hidden;border-radius:20px;background-size:120%;background-repeat:no-repeat;}.inner-group-thumb{height:34%;margin-top:150px;width:100%;}"], props => props.imageUrl);
const GroupCard = ({
  groupCardData
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Group_Container, {
    imageUrl: (0,client/* urlFor */.u)(groupCardData.image).toString(),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "groupthumb w-80 h-56",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: " inner-group-thumb  w-full  flex  items-center justify-center  text-white  bg-black  bg-opacity-60",
        children: groupCardData.title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
      isTextButton: true,
      isFontBig: true,
      title: groupCardData.buttonText,
      urlLink: `/groups/${groupCardData.slug.current}`
    })]
  });
};
;// CONCATENATED MODULE: ./components/Hero.tsx






const Hero = external_styled_components_default().div.withConfig({
  displayName: "Hero",
  componentId: "sc-2z7q2k-0"
})(["width:100%;height:600px;top:0;margin:0;padding:0;display:flex;justify-content:center;align-items:center;"]);
const HeroComponent = ({
  heroBanner
}) => {
  return (
    /*#__PURE__*/
    // to have a main bg image/video
    jsx_runtime_.jsx(Hero, {
      style: {
        backgroundImage: `url(${(0,client/* urlFor */.u)(heroBanner.mainImage).toString()})`,
        backgroundSize: "cover"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-6xl font-extrabold text-gray-300",
          children: heroBanner.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-gray-300 text-lg font-bold py-5 w-96 lg:w-4/6",
          children: heroBanner.description
        }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
          isOutline: false,
          title: heroBanner.ButtonName,
          urlLink: heroBanner.urlLink
        })]
      })
    })
  );
};
// EXTERNAL MODULE: ./components/data.tsx
var data = __webpack_require__(944);
;// CONCATENATED MODULE: ./components/prayer.tsx






const PrayerContainer = external_styled_components_default().div.withConfig({
  displayName: "prayer__PrayerContainer",
  componentId: "sc-1wcd6yg-0"
})(["background-color:#002237;width:100%;color:white;"]);

const PrayerRequest = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(PrayerContainer, {
    className: "py-5",
    children: data/* data.PrayerText.map */.a.PrayerText.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-col flex justify-center items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: " py-5 font-black text-4xl",
        children: item.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "py-5 w-3/4 font-thin text-2xl",
        children: item.description
      }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
        isFontBig: true,
        title: "Prayer Request"
      })]
    }))
  });
};

/* harmony default export */ const prayer = (PrayerRequest);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./components/Sermons.tsx






const SermonsWrapper = ({
  SectionTitle,
  SermonTitle,
  description,
  videoSrc,
  isSmallSrn
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col md:flex-row justify-start",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full md:items-start md:w-3/6 md:text-left",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-3xl pb-2 font-thin px-4",
        children: SectionTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-4xl font-black px-4 py-4 text-orange-500",
        children: SermonTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "font-thin text-xl pb-4 px-4 ",
        children: description
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "hidden md:inline-block md:w-5/6",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
          isTextButton: true,
          title: "View all Sermons",
          isFontBig: true
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "right flex flex-col justify-center items-center md:w-full md:h-[472px]",
      children: [/*#__PURE__*/jsx_runtime_.jsx("iframe", {
        width: "520",
        height: "345",
        src: videoSrc
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-8 md:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
          isTextButton: true,
          isFontBig: true,
          title: "View all Sermons"
        })
      })]
    })]
  });
};

const SermonsSection = () => {
  const {
    0: title,
    1: setTitle
  } = (0,external_react_.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: isError,
    1: setIsError
  } = (0,external_react_.useState)(false);
  const {
    0: url,
    1: setUrl
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      const ChannelID = "UC1UXAPGt8hjxZ1ZYgWqUQrw";
      const Key = "AIzaSyAfU2lXuOZnoR8a5y1fq_0LK4LAIx44res";

      try {
        const res = await external_axios_default()(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${ChannelID}&key=${Key}&id&order=date&maxResults=12`);
        setUrl(res.data.items[0]["id"]);
        setTitle(res.data.items[0]["snippet"]);
      } catch (err) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []); // console.log(data["videoId"]);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-full h-[472px] flex-1 items-center bg-color text-gray-200 py-8 px-6",
    children: /*#__PURE__*/jsx_runtime_.jsx(SermonsWrapper, {
      SectionTitle: "Latest Sermon",
      SermonTitle: title["title"],
      description: title["description"],
      videoSrc: "https://www.youtube.com/embed/" + url["videoId"]
    })
  });
};
;// CONCATENATED MODULE: external "react-elastic-carousel"
const external_react_elastic_carousel_namespaceObject = require("react-elastic-carousel");
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.tsx













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
}];

const Home = ({
  bannerData,
  summaryData,
  groupsData,
  eventsData
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex min-h-screen flex-col items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeroComponent, {
      heroBanner: bannerData.length && bannerData[0]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full flex flex-row justify-center py-3",
      children: summaryData === null || summaryData === void 0 ? void 0 : summaryData.map(item => /*#__PURE__*/jsx_runtime_.jsx(CardOne, {
        infoCardData: item
      }, item._id))
    }), /*#__PURE__*/jsx_runtime_.jsx(SermonsSection, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "py-5 px-5 w-full flex justify-center items-center flex-col",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: " pb-5 font-thin text-3xl",
        children: "Teams & Groups"
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_elastic_carousel_default()), {
        breakPoints: breakPoints,
        isRTL: true,
        className: "py-6",
        children: groupsData === null || groupsData === void 0 ? void 0 : groupsData.map(groupItem => /*#__PURE__*/jsx_runtime_.jsx(GroupCard, {
          groupCardData: groupItem
        }, groupItem))
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: " py-6 text-gray-700 font-bold text-3xl",
        children: "Our Commitment to Racial Diversity"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "w-3/4 font-thin text-2xl pb-4 px-4 text-gray-700",
        children: data/* data.DiversityText */.a.DiversityText
      }), /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
        isFontBig: true,
        title: "READ MORE"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "py-5 px-5 w-full flex justify-center items-center flex-col bg-gray-200",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: " py-5 font-thin text-4xl text-gray-700",
        children: "Events"
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_elastic_carousel_default()), {
        breakPoints: breakPoints,
        isRTL: true,
        className: "py-6",
        children: eventsData === null || eventsData === void 0 ? void 0 : eventsData.map(item => /*#__PURE__*/jsx_runtime_.jsx(EventItem, {
          ThumbNailTitle: item.EventTitle,
          ButtonPlaceholder: item.buttonText,
          date: item.EventDate,
          StartTime: item.time1,
          EndTime: item.time2,
          imageUrl: item.image
        }, item.slug))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(prayer, {})]
  });
}; //Get data


const getServerSideProps = async pageContext => {
  const bannerData = await client/* client.fetch */.L.fetch(`*[_type == "Hero"]`);
  const summaryData = await client/* client.fetch */.L.fetch(`*[_type == "summaryStrip"]`);
  const groupsData = await client/* client.fetch */.L.fetch(`*[_type == "groups"]`);
  const eventsData = await client/* client.fetch */.L.fetch(`*[_type == "event"]`);
  return {
    props: {
      bannerData,
      summaryData,
      groupsData,
      eventsData
    }
  };
};
/* harmony default export */ const pages = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [922,664,586,292], () => (__webpack_exec__(95)));
module.exports = __webpack_exports__;

})();