"use strict";
(() => {
var exports = {};
exports.id = 339;
exports.ids = [339];
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

/***/ 3029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prismicio_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9107);
/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2640);
/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2848);
/* harmony import */ var _slices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_helpers__WEBPACK_IMPORTED_MODULE_1__, _prismicio__WEBPACK_IMPORTED_MODULE_3__]);
([_prismicio_helpers__WEBPACK_IMPORTED_MODULE_1__, _prismicio__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Page = ({ page , navigation , settings  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_prismicio_react__WEBPACK_IMPORTED_MODULE_2__.SliceZone, {
            slices: page.data.slices,
            components: _slices__WEBPACK_IMPORTED_MODULE_4__/* .components */ .wx
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
async function getStaticProps({ params , previewData  }) {
    const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_3__/* .createClient */ .eI)({
        previewData
    });
    const page = await client.getByUID("page", params.uid);
    return {
        props: {
            page
        }
    };
}
async function getStaticPaths() {
    const client = (0,_prismicio__WEBPACK_IMPORTED_MODULE_3__/* .createClient */ .eI)();
    const pages = await client.getAllByType("page");
    return {
        paths: pages.map((page)=>_prismicio_helpers__WEBPACK_IMPORTED_MODULE_1__.asLink(page, _prismicio__WEBPACK_IMPORTED_MODULE_3__/* .linkResolver */ .kG)),
        fallback: false
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
var __webpack_exports__ = __webpack_require__.X(0, [664,162,848], () => (__webpack_exec__(3029)));
module.exports = __webpack_exports__;

})();