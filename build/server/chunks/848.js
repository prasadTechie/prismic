"use strict";
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 2848:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AF": () => (/* binding */ repositoryName),
/* harmony export */   "eI": () => (/* binding */ createClient),
/* harmony export */   "kG": () => (/* binding */ linkResolver)
/* harmony export */ });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4582);
/* harmony import */ var _prismicio_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9107);
/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5596);
/* harmony import */ var _sm_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__, _prismicio_helpers__WEBPACK_IMPORTED_MODULE_1__]);
([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__, _prismicio_helpers__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const repositoryName = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.getRepositoryName(_sm_json__WEBPACK_IMPORTED_MODULE_2__/* .apiEndpoint */ ._d);
// Update the Link Resolver to match your project's route structure
function linkResolver(doc) {
    switch(doc.type){
        case "homepage":
            return "/";
        case "page":
            return `/${doc.uid}`;
        default:
            return null;
    }
}
const createClient = (config = {})=>{
    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(_sm_json__WEBPACK_IMPORTED_MODULE_2__/* .apiEndpoint */ ._d, config);
    _prismicio_next__WEBPACK_IMPORTED_MODULE_3__/* .enableAutoPreviews */ .L({
        client,
        previewData: config.previewData,
        req: config.req
    });
    return client;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 125:
/***/ ((module) => {

module.exports = JSON.parse('{"_d":"https://creativegalileoblog.prismic.io/api/v2"}');

/***/ })

};
;