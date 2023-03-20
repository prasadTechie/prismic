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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices */ \"./slices/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common */ \"./components/common/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FilterTagsArray = [\n    \"All\",\n    \"Recent\",\n    \"Education\",\n    \"Health\"\n];\nconst Home = (param)=>{\n    let { page , navigation , settings  } = param;\n    _s();\n    const [homepageData, setHomepageData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [blogListData, setBlogListData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [tagActive, setTagActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const bloglistArray = [];\n    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [blogFilter, setBlogFilter] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"Education\");\n    // const navigate = useNavigate();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(page);\n        setBlogListData(page);\n    }, [\n        page\n    ]);\n    const handleFilter = (value)=>{\n        debugger;\n        setTagActive(true);\n        console.log(page);\n        let allBlogPostData = page;\n        let matchedTags = allBlogPostData.map((item, i)=>{\n            debugger;\n            // console.log(item.tags);\n            return item.tags.filter((tag)=>{\n                if (tag === value) {\n                    bloglistArray.push(item);\n                // console.log(item, \"matched data\");\n                }\n            });\n        });\n        setBlogListData(bloglistArray);\n        console.log(bloglistArray, \"blog list array\");\n        setBlogFilter(value);\n    };\n    const handleSelectedStory = (story)=>{\n        const shorts = story.short_stories;\n    // navigate(\"/shorts\", { state: { shorts: shorts, blogFilter: blogFilter } });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Column, {\n        style: {\n            width: \"100%\",\n            position: \"relative\",\n            backgroundColor: \"#5F1296\",\n            paddingBottom: \"100%\"\n        },\n        children: [\n            page.map((data, index)=>{\n                if (data.uid === \"home\") {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        data: data\n                    }, index, false, {\n                        fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 18\n                    }, undefined);\n                }\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                style: {\n                    margin: \"30px 0 30px\"\n                },\n                className: \"filter_tags_wrapper\",\n                children: FilterTagsArray.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: tagActive ? \"selected_blog_stories\" : \"unselected_blog_stories\",\n                        onClick: ()=>handleFilter(item.toLowerCase()),\n                        children: item\n                    }, void 0, false, {\n                        fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            blogListData.map((data, i)=>{\n                if ((data === null || data === void 0 ? void 0 : data.uid) !== \"home\") {\n                    var _data_data, _data_data_slices;\n                    return data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : (_data_data_slices = _data_data.slices) === null || _data_data_slices === void 0 ? void 0 : _data_data_slices.map((item, i)=>{\n                        var _item_primary, _item_primary_thumbnail_image, _item_primary1, _item_primary_thumbnail_image1, _item_primary2, _item_primary_clock_icon, _item_primary3, _item_primary_clock_icon1, _item_primary4, _item_primary_short_icon, _item_primary5, _item_primary_short_icon1, _item_primary_title_, _item_primary6, _item_primary_description_, _item_primary7;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                            style: {\n                                padding: \"0 1rem\"\n                            },\n                            children: (item === null || item === void 0 ? void 0 : item.slice_type) !== \"footer\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/\".concat(data.uid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                    style: {\n                                        marginBottom: \"1rem\",\n                                        justifyContent: \"flex-start\"\n                                    },\n                                    // onClick={() => handleSelectedStory(story)}\n                                    className: \"blog_section\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: item === null || item === void 0 ? void 0 : (_item_primary = item.primary) === null || _item_primary === void 0 ? void 0 : (_item_primary_thumbnail_image = _item_primary.thumbnail_image) === null || _item_primary_thumbnail_image === void 0 ? void 0 : _item_primary_thumbnail_image.url,\n                                            alt: item === null || item === void 0 ? void 0 : (_item_primary1 = item.primary) === null || _item_primary1 === void 0 ? void 0 : (_item_primary_thumbnail_image1 = _item_primary1.thumbnail_image) === null || _item_primary_thumbnail_image1 === void 0 ? void 0 : _item_primary_thumbnail_image1.alt,\n                                            className: \"story_img\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                                            style: {\n                                                alignItems: \"center\",\n                                                width: \"100%\",\n                                                justifyContent: \"flex-end\",\n                                                margin: \"0.5rem 0\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                                                    style: {\n                                                        alignItems: \"center\",\n                                                        marginRight: \"1.5rem\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: item === null || item === void 0 ? void 0 : (_item_primary2 = item.primary) === null || _item_primary2 === void 0 ? void 0 : (_item_primary_clock_icon = _item_primary2.clock_icon) === null || _item_primary_clock_icon === void 0 ? void 0 : _item_primary_clock_icon.url,\n                                                            alt: item === null || item === void 0 ? void 0 : (_item_primary3 = item.primary) === null || _item_primary3 === void 0 ? void 0 : (_item_primary_clock_icon1 = _item_primary3.clock_icon) === null || _item_primary_clock_icon1 === void 0 ? void 0 : _item_primary_clock_icon1.alt,\n                                                            className: \"clock_icon\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                            lineNumber: 139,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"time_shorts\",\n                                                            children: [\n                                                                5,\n                                                                \" mins\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                            lineNumber: 144,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                    lineNumber: 133,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                                                    style: {\n                                                        alignItems: \"center\"\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: item === null || item === void 0 ? void 0 : (_item_primary4 = item.primary) === null || _item_primary4 === void 0 ? void 0 : (_item_primary_short_icon = _item_primary4.short_icon) === null || _item_primary_short_icon === void 0 ? void 0 : _item_primary_short_icon.url,\n                                                            alt: item === null || item === void 0 ? void 0 : (_item_primary5 = item.primary) === null || _item_primary5 === void 0 ? void 0 : (_item_primary_short_icon1 = _item_primary5.short_icon) === null || _item_primary_short_icon1 === void 0 ? void 0 : _item_primary_short_icon1.alt,\n                                                            className: \"shorts_icon\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                            lineNumber: 147,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"time_shorts\",\n                                                            children: [\n                                                                4,\n                                                                \" shorts\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                            lineNumber: 152,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                    lineNumber: 146,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.Column, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"story_title\",\n                                                    children: (_item_primary_title_ = item === null || item === void 0 ? void 0 : (_item_primary6 = item.primary) === null || _item_primary6 === void 0 ? void 0 : _item_primary6.title[0]) === null || _item_primary_title_ === void 0 ? void 0 : _item_primary_title_.text\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                    lineNumber: 156,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"story_subtitle\",\n                                                    children: (_item_primary_description_ = item === null || item === void 0 ? void 0 : (_item_primary7 = item.primary) === null || _item_primary7 === void 0 ? void 0 : _item_primary7.description[0]) === null || _item_primary_description_ === void 0 ? void 0 : _item_primary_description_.text\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                                    lineNumber: 159,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                            lineNumber: 155,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, i, true, {\n                                    fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, i, false, {\n                                fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined) : \"\"\n                        }, i, false, {\n                            fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, undefined);\n                    });\n                }\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prasad/Projects/cg_blog/pages/index.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"pbw50H6A5gPdnQNw76vCVNEbRuo=\");\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFFSztBQUNOO0FBQ087QUFDUDtBQUNmO0FBRTdCLE1BQU1TLGtCQUFrQjtJQUFDO0lBQU87SUFBVTtJQUFhO0NBQVM7QUFFaEUsTUFBTUMsT0FBTyxTQUFvQztRQUFuQyxFQUFFQyxLQUFJLEVBQUVDLFdBQVUsRUFBRUMsU0FBUSxFQUFFOztJQUMxQyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUE7SUFDaEQsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNYSxnQkFBZ0IsRUFBRTtJQUN4QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBO0lBRXRDLE1BQU0sQ0FBQ2dCLFlBQVlDLGNBQWMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzdDLGtDQUFrQztJQUVsQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkbUIsUUFBUUMsR0FBRyxDQUFDZjtRQUNaTSxnQkFBZ0JOO0lBQ2xCLEdBQUc7UUFBQ0E7S0FBSztJQUVULE1BQU1nQixlQUFlLENBQUNDLFFBQVU7UUFDOUIsUUFBUztRQUNUVCxhQUFhLElBQUk7UUFDakJNLFFBQVFDLEdBQUcsQ0FBQ2Y7UUFDWixJQUFJa0Isa0JBQWtCbEI7UUFDdEIsSUFBSW1CLGNBQWNELGdCQUFnQkUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQU07WUFDakQsUUFBUztZQUNULDBCQUEwQjtZQUMxQixPQUFPRCxLQUFLRSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxNQUFRO2dCQUMvQixJQUFJQSxRQUFRUixPQUFPO29CQUNqQlIsY0FBY2lCLElBQUksQ0FBQ0w7Z0JBQ25CLHFDQUFxQztnQkFDdkMsQ0FBQztZQUNIO1FBQ0Y7UUFFQWYsZ0JBQWdCRztRQUNoQkssUUFBUUMsR0FBRyxDQUFDTixlQUFlO1FBQzNCSSxjQUFjSTtJQUNoQjtJQUVBLE1BQU1VLHNCQUFzQixDQUFDQyxRQUFVO1FBQ3JDLE1BQU1DLFNBQVNELE1BQU1FLGFBQWE7SUFDbEMsOEVBQThFO0lBQ2hGO0lBRUEscUJBQ0UsOERBQUNyQyxzREFBTUE7UUFDTHNDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLGlCQUFpQjtZQUNqQkMsZUFBZTtRQUNqQjs7WUFFQ25DLEtBQUtvQixHQUFHLENBQUMsQ0FBQ2dCLE1BQU1DLFFBQVU7Z0JBQ3pCLElBQUlELEtBQUtFLEdBQUcsS0FBSyxRQUFRO29CQUN2QixxQkFBTyw4REFBQzlDLDBEQUFNQTt3QkFBYTRDLE1BQU1BO3VCQUFiQzs7Ozs7Z0JBQ3RCLENBQUM7WUFDSDswQkFFQSw4REFBQzNDLG1EQUFHQTtnQkFBQ3FDLE9BQU87b0JBQUVRLFFBQVE7Z0JBQWM7Z0JBQUdDLFdBQVc7MEJBQy9DMUMsZ0JBQWdCc0IsR0FBRyxDQUFDLENBQUNDLHFCQUNwQiw4REFBQ29CO3dCQUNDRCxXQUNFakMsWUFBWSwwQkFBMEIseUJBQXlCO3dCQUVqRW1DLFNBQVMsSUFBTTFCLGFBQWFLLEtBQUtzQixXQUFXO2tDQUUzQ3RCOzs7Ozs7Ozs7OztZQThCTmhCLGFBQWFlLEdBQUcsQ0FBQyxDQUFDZ0IsTUFBTWQsSUFBTTtnQkFDN0IsSUFBSWMsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRSxHQUFHLE1BQUssUUFBUTt3QkFDakJGO29CQUFQLE9BQU9BLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsS0FBTUEsSUFBSSxjQUFWQSx3QkFBQUEsS0FBQUEsSUFBQUEscUJBQUFBLFdBQVlRLG1EQUFaUixLQUFBQSxJQUFBQSxrQkFBb0JoQixJQUFJLENBQUNDLE1BQU1DOzRCQWNyQkQsOENBQ0FBLGdEQWtCSUEsMENBQ0FBLDJDQU9BQSwwQ0FDQUEsMkNBUU5BLHNCQUFBQSxnQkFHQUEsNEJBQUFBO3NDQXBEYixxRUFBQzVCLHNEQUFNQTs0QkFBU3NDLE9BQU87Z0NBQUVjLFNBQVM7NEJBQVM7c0NBQ3hDeEIsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNeUIsVUFBVSxNQUFLLHlCQUNwQiw4REFBQ2pELGtEQUFJQTtnQ0FBU2tELE1BQU0sSUFBYSxPQUFUWCxLQUFLRSxHQUFHOzBDQUM5Qiw0RUFBQzdDLHNEQUFNQTtvQ0FFTHNDLE9BQU87d0NBQ0xpQixjQUFjO3dDQUNkQyxnQkFBZ0I7b0NBQ2xCO29DQUNBLDZDQUE2QztvQ0FDN0NULFdBQVU7O3NEQUVWLDhEQUFDVTs0Q0FDQ0MsS0FBSzlCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsZ0JBQUFBLEtBQU0rQixPQUFPLGNBQWIvQiwyQkFBQUEsS0FBQUEsSUFBQUEsaUNBQUFBLGNBQWVnQyx3RUFBZmhDLEtBQUFBLGtDQUFnQ2lDLEdBQW5COzRDQUNsQkMsS0FBS2xDLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsaUJBQUFBLEtBQU0rQixPQUFPLGNBQWIvQiw0QkFBQUEsS0FBQUEsSUFBQUEsa0NBQUFBLGVBQWVnQyx5RUFBZmhDLEtBQUFBLG1DQUFnQ2tDLEdBQW5COzRDQUNsQmYsV0FBVTs7Ozs7O3NEQUVaLDhEQUFDOUMsbURBQUdBOzRDQUNGcUMsT0FBTztnREFDTHlCLFlBQVk7Z0RBQ1p4QixPQUFPO2dEQUNQaUIsZ0JBQWdCO2dEQUNoQlYsUUFBUTs0Q0FDVjs7OERBRUEsOERBQUM3QyxtREFBR0E7b0RBQ0ZxQyxPQUFPO3dEQUNMeUIsWUFBWTt3REFDWkMsYUFBYTtvREFDZjs7c0VBRUEsOERBQUNQOzREQUNDQyxLQUFLOUIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsS0FBTStCLE9BQU8sY0FBYi9CLDRCQUFBQSxLQUFBQSxJQUFBQSw0QkFBQUEsZUFBZXFDLDhEQUFmckMsS0FBQUEsNkJBQTJCaUMsR0FBZDs0REFDbEJDLEtBQUtsQyxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxLQUFNK0IsT0FBTyxjQUFiL0IsNEJBQUFBLEtBQUFBLElBQUFBLDZCQUFBQSxlQUFlcUMsK0RBQWZyQyxLQUFBQSw4QkFBMkJrQyxHQUFkOzREQUNsQmYsV0FBVTs7Ozs7O3NFQUVaLDhEQUFDQzs0REFBS0QsV0FBVTs7Z0VBQWU7Z0VBQUU7Ozs7Ozs7Ozs7Ozs7OERBRW5DLDhEQUFDOUMsbURBQUdBO29EQUFDcUMsT0FBTzt3REFBRXlCLFlBQVk7b0RBQVM7O3NFQUNqQyw4REFBQ047NERBQ0NDLEtBQUs5QixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxLQUFNK0IsT0FBTyxjQUFiL0IsNEJBQUFBLEtBQUFBLElBQUFBLDRCQUFBQSxlQUFlc0MsOERBQWZ0QyxLQUFBQSw2QkFBMkJpQyxHQUFkOzREQUNsQkMsS0FBS2xDLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsaUJBQUFBLEtBQU0rQixPQUFPLGNBQWIvQiw0QkFBQUEsS0FBQUEsSUFBQUEsNkJBQUFBLGVBQWVzQywrREFBZnRDLEtBQUFBLDhCQUEyQmtDLEdBQWQ7NERBQ2xCZixXQUFVOzs7Ozs7c0VBRVosOERBQUNDOzREQUFLRCxXQUFVOztnRUFBZTtnRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHckMsOERBQUMvQyxzREFBTUE7OzhEQUNMLDhEQUFDZ0Q7b0RBQUtELFdBQVU7OERBQ2JuQixDQUFBQSx1QkFBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxpQkFBQUEsS0FBTStCLE9BQU8sY0FBYi9CLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFldUMsS0FBSyxDQUFDLEVBQUUsY0FBdkJ2QyxrQ0FBQUEsS0FBQUEsSUFBQUEscUJBQXlCd0MsSUFBSTs7Ozs7OzhEQUVoQyw4REFBQ0M7b0RBQUV0QixXQUFVOzhEQUNWbkIsQ0FBQUEsNkJBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsaUJBQUFBLEtBQU0rQixPQUFPLGNBQWIvQiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZTBDLFdBQVcsQ0FBQyxFQUFFLGNBQTdCMUMsd0NBQUFBLEtBQUFBLElBQUFBLDJCQUErQndDLElBQUk7Ozs7Ozs7Ozs7Ozs7bUNBaERuQ3ZDOzs7OzsrQkFGRUE7Ozs7NENBd0RYLEVBQ0Q7MkJBM0RVQTs7Ozs7O2dCQThEakIsQ0FBQztZQUNIOzs7Ozs7O0FBR047R0FuS012QjtLQUFBQTs7QUFxS04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGljZVpvbmUgfSBmcm9tIFwiQHByaXNtaWNpby9yZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIi4uL3ByaXNtaWNpb1wiO1xuaW1wb3J0IHsgQmxvZ0xpc3RzLCBjb21wb25lbnRzIH0gZnJvbSBcIi4uL3NsaWNlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgQ29sdW1uLCBSb3cgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRmlsdGVyVGFnc0FycmF5ID0gW1wiQWxsXCIsIFwiUmVjZW50XCIsIFwiRWR1Y2F0aW9uXCIsIFwiSGVhbHRoXCJdO1xuXG5jb25zdCBIb21lID0gKHsgcGFnZSwgbmF2aWdhdGlvbiwgc2V0dGluZ3MgfSkgPT4ge1xuICBjb25zdCBbaG9tZXBhZ2VEYXRhLCBzZXRIb21lcGFnZURhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Jsb2dMaXN0RGF0YSwgc2V0QmxvZ0xpc3REYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RhZ0FjdGl2ZSwgc2V0VGFnQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYmxvZ2xpc3RBcnJheSA9IFtdO1xuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsRGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtibG9nRmlsdGVyLCBzZXRCbG9nRmlsdGVyXSA9IHVzZVN0YXRlKFwiRWR1Y2F0aW9uXCIpO1xuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYWdlKTtcbiAgICBzZXRCbG9nTGlzdERhdGEocGFnZSk7XG4gIH0sIFtwYWdlXSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKHZhbHVlKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgc2V0VGFnQWN0aXZlKHRydWUpO1xuICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgIGxldCBhbGxCbG9nUG9zdERhdGEgPSBwYWdlO1xuICAgIGxldCBtYXRjaGVkVGFncyA9IGFsbEJsb2dQb3N0RGF0YS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlbS50YWdzKTtcbiAgICAgIHJldHVybiBpdGVtLnRhZ3MuZmlsdGVyKCh0YWcpID0+IHtcbiAgICAgICAgaWYgKHRhZyA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBibG9nbGlzdEFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSwgXCJtYXRjaGVkIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0QmxvZ0xpc3REYXRhKGJsb2dsaXN0QXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKGJsb2dsaXN0QXJyYXksIFwiYmxvZyBsaXN0IGFycmF5XCIpO1xuICAgIHNldEJsb2dGaWx0ZXIodmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGVkU3RvcnkgPSAoc3RvcnkpID0+IHtcbiAgICBjb25zdCBzaG9ydHMgPSBzdG9yeS5zaG9ydF9zdG9yaWVzO1xuICAgIC8vIG5hdmlnYXRlKFwiL3Nob3J0c1wiLCB7IHN0YXRlOiB7IHNob3J0czogc2hvcnRzLCBibG9nRmlsdGVyOiBibG9nRmlsdGVyIH0gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sdW1uXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNUYxMjk2XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTAwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cGFnZS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnVpZCA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgICByZXR1cm4gPEhlYWRlciBrZXk9e2luZGV4fSBkYXRhPXtkYXRhfSAvPjtcbiAgICAgICAgfVxuICAgICAgfSl9XG5cbiAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luOiBcIjMwcHggMCAzMHB4XCIgfX0gY2xhc3NOYW1lPXtcImZpbHRlcl90YWdzX3dyYXBwZXJcIn0+XG4gICAgICAgIHtGaWx0ZXJUYWdzQXJyYXkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIHRhZ0FjdGl2ZSA/IFwic2VsZWN0ZWRfYmxvZ19zdG9yaWVzXCIgOiBcInVuc2VsZWN0ZWRfYmxvZ19zdG9yaWVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlcihpdGVtLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgey8qIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtcInVuc2VsZWN0ZWRfYmxvZ19zdG9yaWVzXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyKFwiYWxsXCIpfVxuICAgICAgICA+XG4gICAgICAgICAge1wiQWxsXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e1widW5zZWxlY3RlZF9ibG9nX3N0b3JpZXNcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXIoXCJyZWNlbnRcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7XCJSZWNlbnRcIn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17XCJ1bnNlbGVjdGVkX2Jsb2dfc3Rvcmllc1wifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlcihcImVkdWNhdGlvblwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtcIkVkdWNhdGlvblwifVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtcInVuc2VsZWN0ZWRfYmxvZ19zdG9yaWVzXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyKFwiaGVhbHRoXCIpfVxuICAgICAgICA+XG4gICAgICAgICAge1wiSGVhbHRoXCJ9XG4gICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICA8L1Jvdz5cblxuICAgICAge2Jsb2dMaXN0RGF0YS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgaWYgKGRhdGE/LnVpZCAhPT0gXCJob21lXCIpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YT8uZGF0YT8uc2xpY2VzPy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxDb2x1bW4ga2V5PXtpfSBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMXJlbVwiIH19PlxuICAgICAgICAgICAgICB7aXRlbT8uc2xpY2VfdHlwZSAhPT0gXCJmb290ZXJcIiA/IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvJHtkYXRhLnVpZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RlZFN0b3J5KHN0b3J5KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvZ19zZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbT8ucHJpbWFyeT8udGh1bWJuYWlsX2ltYWdlPy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtPy5wcmltYXJ5Py50aHVtYm5haWxfaW1hZ2U/LmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdG9yeV9pbWdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Um93XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbSAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbT8ucHJpbWFyeT8uY2xvY2tfaWNvbj8udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0/LnByaW1hcnk/LmNsb2NrX2ljb24/LmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvY2tfaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZV9zaG9ydHNcIj57NX0gbWluczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbT8ucHJpbWFyeT8uc2hvcnRfaWNvbj8udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0/LnByaW1hcnk/LnNob3J0X2ljb24/LmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcnRzX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVfc2hvcnRzXCI+ezR9IHNob3J0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RvcnlfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5wcmltYXJ5Py50aXRsZVswXT8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Rvcnlfc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5wcmltYXJ5Py5kZXNjcmlwdGlvblswXT8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICkpO1xuICAgICAgICB9XG4gICAgICB9KX1cbiAgICA8L0NvbHVtbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXdEYXRhIH0pIHtcbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHsgcHJldmlld0RhdGEgfSk7XG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZ2V0QWxsQnlUYWcoXCJhbGxcIik7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBhZ2UsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJTbGljZVpvbmUiLCJCbG9nTGlzdHMiLCJjb21wb25lbnRzIiwiSGVhZGVyIiwiQ29sdW1uIiwiUm93IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiRmlsdGVyVGFnc0FycmF5IiwiSG9tZSIsInBhZ2UiLCJuYXZpZ2F0aW9uIiwic2V0dGluZ3MiLCJob21lcGFnZURhdGEiLCJzZXRIb21lcGFnZURhdGEiLCJibG9nTGlzdERhdGEiLCJzZXRCbG9nTGlzdERhdGEiLCJ0YWdBY3RpdmUiLCJzZXRUYWdBY3RpdmUiLCJibG9nbGlzdEFycmF5IiwiYWxsRGF0YSIsInNldEFsbERhdGEiLCJibG9nRmlsdGVyIiwic2V0QmxvZ0ZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGaWx0ZXIiLCJ2YWx1ZSIsImFsbEJsb2dQb3N0RGF0YSIsIm1hdGNoZWRUYWdzIiwibWFwIiwiaXRlbSIsImkiLCJ0YWdzIiwiZmlsdGVyIiwidGFnIiwicHVzaCIsImhhbmRsZVNlbGVjdGVkU3RvcnkiLCJzdG9yeSIsInNob3J0cyIsInNob3J0X3N0b3JpZXMiLCJzdHlsZSIsIndpZHRoIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nQm90dG9tIiwiZGF0YSIsImluZGV4IiwidWlkIiwibWFyZ2luIiwiY2xhc3NOYW1lIiwic3BhbiIsIm9uQ2xpY2siLCJ0b0xvd2VyQ2FzZSIsInNsaWNlcyIsInBhZGRpbmciLCJzbGljZV90eXBlIiwiaHJlZiIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiaW1nIiwic3JjIiwicHJpbWFyeSIsInRodW1ibmFpbF9pbWFnZSIsInVybCIsImFsdCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImNsb2NrX2ljb24iLCJzaG9ydF9pY29uIiwidGl0bGUiLCJ0ZXh0IiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});