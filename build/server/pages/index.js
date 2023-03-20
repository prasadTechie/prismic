"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ enableAutoPreviews)
/* harmony export */ });
const isPrismicNextPreviewData = (previewData) => {
  return typeof previewData === "object" && "ref" in previewData;
};
const enableAutoPreviews = (config) => {
  if ("previewData" in config && config.previewData) {
    const { previewData } = config;
    if (isPrismicNextPreviewData(previewData) && previewData.ref) {
      config.client.queryContentFromRef(previewData.ref);
    }
  } else if ("req" in config && config.req) {
    config.client.enableAutoPreviewsFromReq(config.req);
  }
};

//# sourceMappingURL=enableAutoPreviews.js.map


/***/ }),

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8758);


const Header = (data)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .sg, {
                style: {
                    width: "100%",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: data?.data?.data?.slices[0]?.primary?.headerimage?.url,
                        style: {
                            width: "100%",
                            aspectRatio: "4.44"
                        },
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: data?.data?.data?.slices[0]?.primary?.cancleicon?.url,
                        className: "back_btn",
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .sg, {
                        className: "safe_kids",
                        children: " kids safe"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "header_title",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        data?.data?.data?.slices[0]?.primary?.title[0]?.text,
                        " "
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2640);
/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2848);
/* harmony import */ var _slices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7162);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7673);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8758);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio__WEBPACK_IMPORTED_MODULE_2__]);
_prismicio__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// import BlogsSection from "../components/BlogsSection";
const Home = ({ page , navigation , settings  })=>{
    const [homepageData, setHomepageData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [blogListData, setBlogListData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const bloglistArray = [];
    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [blogFilter, setBlogFilter] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("Education");
    // const navigate = useNavigate();
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        console.log(page);
        setBlogListData(page);
    }, [
        page
    ]);
    const handleFilter = (value)=>{
        debugger;
        console.log(page);
        let allBlogPostData = page;
        let matchedTags = allBlogPostData.map((item, i)=>{
            debugger;
            // console.log(item.tags);
            return item.tags.filter((tag)=>{
                if (tag === value) {
                    bloglistArray.push(item);
                // console.log(item, "matched data");
                }
            });
        });
        setBlogListData(bloglistArray);
        console.log(bloglistArray, "blog list array");
        setBlogFilter(value);
    };
    const handleSelectedStory = (story)=>{
        const shorts = story.short_stories;
    // navigate("/shorts", { state: { shorts: shorts, blogFilter: blogFilter } });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
        style: {
            width: "100%",
            position: "relative",
            backgroundColor: "#5F1296",
            paddingBottom: "100%"
        },
        children: [
            page.map((data, index)=>{
                if (data.uid === "home") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        data: data
                    }, index);
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                style: {
                    margin: "30px 0 30px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "unselected_blog_stories",
                        onClick: ()=>handleFilter("all"),
                        children: "All"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "unselected_blog_stories",
                        onClick: ()=>handleFilter("recent"),
                        children: "Recent"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "unselected_blog_stories",
                        onClick: ()=>handleFilter("education"),
                        children: "Education"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "unselected_blog_stories",
                        onClick: ()=>handleFilter("health"),
                        children: "Health"
                    })
                ]
            }),
            blogListData.map((data, i)=>{
                if (data?.uid !== "home") {
                    return data?.data?.slices?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
                            style: {
                                padding: "0 1rem"
                            },
                            children: item?.slice_type !== "footer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: `/${data.uid}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
                                    style: {
                                        marginBottom: "1rem",
                                        justifyContent: "flex-start"
                                    },
                                    // onClick={() => handleSelectedStory(story)}
                                    className: "blog_section",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: item?.primary?.thumbnail_image?.url,
                                            alt: item?.primary?.thumbnail_image?.alt,
                                            className: "story_img"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                                            style: {
                                                alignItems: "center",
                                                width: "100%",
                                                justifyContent: "flex-end",
                                                margin: "0.5rem 0"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                                                    style: {
                                                        alignItems: "center",
                                                        marginRight: "1.5rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item?.primary?.clock_icon?.url,
                                                            alt: item?.primary?.clock_icon?.alt,
                                                            className: "clock_icon"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "time_shorts",
                                                            children: [
                                                                5,
                                                                " mins"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .X2, {
                                                    style: {
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item?.primary?.short_icon?.url,
                                                            alt: item?.primary?.short_icon?.alt,
                                                            className: "shorts_icon"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "time_shorts",
                                                            children: [
                                                                4,
                                                                " shorts"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .sg, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "story_title",
                                                    children: item?.primary?.title[0]?.text
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "story_subtitle",
                                                    children: item?.primary?.description[0]?.text
                                                })
                                            ]
                                        })
                                    ]
                                }, i)
                            }, i) : ""
                        }, i));
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
async function getStaticProps({ previewData  }) {
    const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_2__/* .createClient */ .eI)({
        previewData
    });
    const page = await client.getAllByTag("all");
    return {
        props: {
            page
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2640:
/***/ ((module) => {

module.exports = require("@prismicio/react");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 4582:
/***/ ((module) => {

module.exports = import("@prismicio/client");;

/***/ }),

/***/ 9107:
/***/ ((module) => {

module.exports = import("@prismicio/helpers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,162,848], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();