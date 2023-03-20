exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 8758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sg": () => (/* binding */ Column),
  "X2": () => (/* binding */ Row)
});

// UNUSED EXPORTS: Bullet, InvisibleButton, LazyComponent, Line

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1223);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./theme/Colors.tsx
const Colors_Colors = {
    primary: "#FFB800",
    orange: "#FF7700",
    orangeDark: "#EA5C00",
    white: "#FFFFFF",
    purple: "#771DB0",
    purplelight: "#E8D8F2",
    grey: "#929292",
    yellow: "#FFC70D",
    red: "#AC2121",
    redLight: "#E64B00",
    orangeLightBorder: "#FFE295",
    orangeLight: "#FFFAE9",
    orangeGradient: "linear-gradient(90deg, #FBB800 0%, #FF7A00 100%)",
    cardGradient: "linear-gradient(180deg, #FFF1E7 0%, rgba(255, 241, 231, 0) 100%)"
};
/* harmony default export */ const theme_Colors = ((/* unused pure expression or super */ null && (Colors_Colors)));

;// CONCATENATED MODULE: ./components/common/index.jsx





// import Images from "../../assets/images";
const Row = (props)=>{
    const { children , style , ...remainingProps } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            ...style
        },
        ...remainingProps,
        children: children
    });
};
const Column = (props)=>{
    const { children , style , ...remainingProps } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ...style
        },
        ...remainingProps,
        children: children
    });
};
// const Caret: React.FC<{ expanded: boolean }> = ({ expanded }) => (
//   <img
//     src={Images.Caret}
//     style={{
//       width: "0.8rem",
//       height: "0.5rem",
//       marginLeft: "0.5rem",
//       transform: `rotate(${expanded ? "180" : "0"}deg)`,
//     }}
//     alt="caret"
//   />
// );
const Line = external_styled_components_default()("hr")`
  width: 100%;
  height: 0.5px;
  background: #d9d9d9;
  border: none;
`;
const InvisibleButton = ({ id  })=>/*#__PURE__*/ _jsx("button", {
        id: id,
        className: id,
        style: {
            display: "none"
        }
    });
const Bullet = (props)=>/*#__PURE__*/ _jsx("div", {
        style: {
            width: `${props.size}rem`,
            height: `${props.size}rem`,
            background: props.color,
            borderRadius: `${props.size / 2}rem`,
            marginTop: "0.4rem",
            marginRight: "1rem",
            ...props.style
        }
    });
const LazyComponent = ({ element  })=>/*#__PURE__*/ _jsx(Suspense, {
        fallback: /*#__PURE__*/ _jsx("div", {
            style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            },
            children: /*#__PURE__*/ _jsx(Oval, {
                height: 50,
                width: 50,
                color: Colors.orange,
                strokeWidth: 4
            })
        }),
        children: element
    });



/***/ }),

/***/ 7162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wx": () => (/* binding */ components)
});

// UNUSED EXPORTS: BlogDetailWithPoll, BlogDetails, BlogLists, CommentModal, FilterTags, Footer, HeaderBackgroundImage, Paragraph, Polling

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@prismicio/react"
var react_ = __webpack_require__(2640);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
// EXTERNAL MODULE: ./components/common/index.jsx + 1 modules
var common = __webpack_require__(8758);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: external "next-share"
var external_next_share_ = __webpack_require__(8797);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: ./slices/CommentModal/index.js




/**
 * @typedef {import("@prismicio/client").Content.CommentModalSlice} CommentModalSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CommentModalSlice>} CommentModalProps
 * @param { CommentModalProps }
 */ const CommentModal = (open, setOpen)=>{
// debugger;
// console.log(open, setOpen, "modal logs");
// return <section>{open ? "show modal" : "hide modal"}</section>;
};
/* harmony default export */ const slices_CommentModal = (CommentModal);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./slices/Footer/index.js








/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */ const FooterWrapper = external_styled_components_default()(common/* Column */.sg)`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  align-items: center;
  background: linear-gradient(
    360deg,
    #ffffff 51.78%,
    rgba(255, 255, 255, 0) 106.9%
  );
  padding-top: 1rem;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  z-index: 1000;
`;
const Footer = ({ slice  })=>{
    const [likes, setLikes] = (0,external_react_.useState)(50), [liked, setLiked] = (0,external_react_.useState)(false), [isModalVisible, setIsModalVisible] = (0,external_react_.useState)(false), [originName, setOriginName] = (0,external_react_.useState)(""), [likedImage, setLikedImage] = (0,external_react_.useState)({
        image: slice?.primary?.hearth_animation?.url,
        className: "heart_animation"
    });
    (0,external_react_.useEffect)(()=>{
        if (true) {
            setOriginName(window.location.origin);
        }
    });
    const handleLike = ()=>{
        if (liked) {
            setLikedImage({
                image: slice?.primary?.hearth_animation?.url,
                className: "heart_animation"
            });
            setLiked(false);
            setLikes(likes - 1);
        } else {
            const image = new Image();
            image.src = slice?.primary?.hearth_animation?.url;
            image.onload = ()=>{
                setLiked(true);
                setLikes(likes + 1);
            };
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (liked) {
            setTimeout(()=>{
                setLikedImage({
                    image: slice?.primary?.red_heart_icon?.url,
                    className: "heart_liked"
                });
            }, 1000);
        }
    }, [
        liked
    ]);
    const handleModal = (boolean)=>{
        setIsModalVisible(boolean);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                className: "footer_section",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                        className: "footer_like_section",
                        onClick: handleLike,
                        children: [
                            liked ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: likedImage.image,
                                className: likedImage.className,
                                alt: ""
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: slice?.primary?.like_icon?.url,
                                className: "heart_icon",
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "likes_no",
                                children: likes
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "likes",
                                children: "likes"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                        className: "footer_like_comment_section",
                        onClick: ()=>handleModal(true),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: slice?.primary?.comment_icon?.url,
                                className: "comments_icon",
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "178 comments"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.WhatsappShareButton, {
                        url: originName,
                        title: "Hello Friend, Check out this interesting blog I found on the Toondemy community!",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: slice?.primary?.share_icon?.url,
                                    className: "share_icon",
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "12 share"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(slices_CommentModal, {
                open: isModalVisible
            })
        ]
    });
};
/* harmony default export */ const slices_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./slices/BlogDetailWithPoll/index.js









// import VaccinatePoll from "../../pages/Shorts/components/VaccinatePoll";





/**
 * @typedef {import("@prismicio/client").Content.BlogDetailWithPollSlice} BlogDetailWithPollSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogDetailWithPollSlice>} BlogDetailWithPollProps
 * @param { BlogDetailWithPollProps }
 */ const BlogDetailWithPoll = ({ slice  })=>{
    const [pollVoted, setPollVoted] = (0,external_react_.useState)(false), [vote, setVote] = (0,external_react_.useState)("");
    const [activeSlideIndex, setActiveSlideIndex] = (0,external_react_.useState)(0);
    const [visitedSlideIndex, setVisitedSlideIndex] = (0,external_react_.useState)([]);
    const [autoPlayTime] = (0,external_react_.useState)(7000);
    const [commentIconClicked, setCommentIconClicked] = (0,external_react_.useState)(false);
    const onItemChanged = (index)=>{
        const element = document.querySelector(".slick-dots.slick-thumb li.slick-active");
        const ele = element;
        ele.style.backgroundPosition = "left";
        ele.style.transition = "all 7s ease-out";
        setTimeout(()=>{
            ele.style.transition = "all 0ms ease-out";
            ele.style.background = "#FFB001";
        }, autoPlayTime - 1000);
        setActiveSlideIndex(index);
    };
    const beforeChangeHandler = (currentSlide, nextSlide)=>{
        setVisitedSlideIndex([
            ...visitedSlideIndex,
            currentSlide
        ]);
        const slides = document.querySelectorAll(".slick-dots.slick-thumb li");
        const visitedSlide = slides[currentSlide];
        visitedSlide.style.transition = "all 0ms ease-out";
        visitedSlide.style.background = "#FFB001";
    };
    const handleVote = (vote)=>{
        if (!pollVoted) {
            setPollVoted(true);
            setVote(vote);
        // setVaccinatePollVoted(true);
        }
    };
    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: autoPlayTime,
        swipeToSlide: true,
        afterChange: (index)=>onItemChanged(index),
        customPaging: function(i) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    opacity: "0",
                    pointerEvents: "none"
                },
                children: i
            });
        },
        dotsClass: "slick-dots slick-thumb"
    };
    const containerRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (containerRef.current) {
            // Calculate the aspect ratio of the image
            const img = new Image();
            img.src = BlogLibraryImages.ShortImage;
            img.onload = ()=>{
                const aspectRatio = img.naturalHeight / img.naturalWidth;
                const containerWidth = containerRef.current?.offsetWidth;
                if (containerWidth) {
                    const height = containerWidth * aspectRatio;
                    console.log("height", height);
                    const element = document.querySelector(".slick-dots.slick-thumb");
                    if (element) {
                        element.style.top = `${height - 40}px`;
                    }
                }
            };
        }
        onItemChanged(0);
    }, []);
    const handleModal = (boolean)=>{
        console.log(boolean, "comment clicked");
        setCommentIconClicked(boolean);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
        style: {
            position: "relative",
            width: "100%",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: slice?.primary?.back_button?.url,
                    className: "back_button",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...Settings,
                beforeChange: beforeChangeHandler,
                children: slice.items.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            console.log(item, "items"),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: item.slider_background.url,
                                alt: item.slider_background.alt,
                                className: "shorts_img"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                className: "shorts_body_section",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                        className: "short_body_header",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: item.purple_background.url,
                                                alt: item.purple_background.alt,
                                                className: "short_body_header_img"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                                style: {
                                                    padding: "0 19px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "shorts_title",
                                                        children: item.title[0].text
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                        style: {
                                                            width: "100%",
                                                            position: "relative",
                                                            justifyContent: "flex-start",
                                                            alignItems: "center",
                                                            marginTop: "0.8rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                style: {
                                                                    alignItems: "center",
                                                                    marginRight: "25px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: item.clock_icon.url,
                                                                        alt: item.clock_icon.alt,
                                                                        style: {
                                                                            position: "relative"
                                                                        },
                                                                        className: "clock_icon_white"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "time_shorts_views_text",
                                                                        children: "5 min"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                style: {
                                                                    alignItems: "center",
                                                                    marginRight: "25px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: item.short_icon.url,
                                                                        alt: item.short_icon.alt,
                                                                        style: {
                                                                            position: "relative"
                                                                        },
                                                                        className: "shorts_icon_white"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "time_shorts_views_text",
                                                                        children: "7 shorts"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                style: {
                                                                    alignItems: "center",
                                                                    marginRight: "10px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: item.view_icon.url,
                                                                        alt: item.view_icon.alt,
                                                                        style: {
                                                                            position: "relative"
                                                                        },
                                                                        className: "views_icon_white"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "time_shorts_views_text",
                                                                        children: "121 views"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                        style: {
                                            padding: "0 19px",
                                            marginTop: "40px",
                                            paddingBottom: "150px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "shorts_subtitle",
                                                children: item.title[0].text
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "shorts_body_text",
                                                children: item.paragraph[0].text
                                            }),
                                            console.log(item.poll_question.length),
                                            item?.poll_question.length >= 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                                className: "vaccinate_poll_section",
                                                style: {
                                                    alignSelf: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ques",
                                                        children: "Question:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "shorts_subtitle",
                                                        children: item.question[0].text
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(common/* Column */.sg, {
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(common/* Row */.X2, {
                                                                    className: "poll_button",
                                                                    onClick: ()=>handleVote("Yes"),
                                                                    children: pollVoted ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                        className: "poll_button_voted",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(common/* Column */.sg, {
                                                                                className: "poll_voted poll_vote_yes",
                                                                                children: item.poll_question[0]?.text
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "vote_percentage",
                                                                                children: item.poll_answer[0]?.text
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: item.poll_question_icon.url,
                                                                                alt: item.poll_question_icon.alt
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: item.poll_question[0]?.text
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(common/* Row */.X2, {
                                                                    className: "poll_button",
                                                                    onClick: ()=>handleVote("No"),
                                                                    children: pollVoted ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                        className: "poll_button_voted",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(common/* Column */.sg, {
                                                                                className: "poll_voted poll_vote_no",
                                                                                children: item.poll_question_2[0]?.text
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "vote_percentage",
                                                                                children: item.poll_answer_2[0]?.text
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: item.poll_question_2_icon.url,
                                                                                alt: item.poll_question_2_icon.alt
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: item.poll_question_2[0]?.text
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(common/* Row */.X2, {
                                                                    className: "poll_button",
                                                                    onClick: ()=>handleVote("Not sure"),
                                                                    children: pollVoted ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                        className: "poll_button_voted",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(common/* Column */.sg, {
                                                                                className: "poll_voted poll_vote_not_sure",
                                                                                children: ""
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "poll_button_voted_not_sure",
                                                                                children: item.poll_question_3[0]?.text
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "vote_percentage",
                                                                                children: item.poll_answer_3[0]?.text
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: item.poll_question_3_icon.url,
                                                                                alt: item.poll_question_3_icon.url
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: item.poll_question_3[0]?.text
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }) : "",
                                            item?.paragraph_2.length >= 1 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "shorts_body_text",
                                                children: item.paragraph_2[0].text
                                            }) : ""
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(slices_Footer, {
                setCommentIconClicked: handleModal
            }),
            commentIconClicked ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_default()), {
                isOpen: commentIconClicked,
                style: {
                    content: {
                        width: "300px",
                        transform: "translate(-50%, -50%)",
                        border: `none`,
                        inset: "auto 50% 0",
                        borderRadius: "10px",
                        background: "white",
                        overflowX: "hidden"
                    },
                    overlay: {
                        background: "#00000099",
                        zIndex: 100,
                        overflowY: "auto"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                    className: "validate_acc_section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Comment validation"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "We take utmost care to ensure the comments are gentle & sensible. For that we check all accounts carefully."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "validate_acc_btn",
                            onClick: ()=>setOpen(false),
                            children: "Please validate my account"
                        })
                    ]
                })
            }) : ""
        ]
    });
};
/* harmony default export */ const slices_BlogDetailWithPoll = (BlogDetailWithPoll);

;// CONCATENATED MODULE: ./slices/BlogDetails/index.js




// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// import BlogSection from "../../pages/BlogLibrary-/components/BlogsSection";

// import { WhatsappShareButton } from "react-share";

/**
 * @typedef {import("@prismicio/client").Content.BlogDetailsSlice} BlogDetailsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogDetailsSlice>} BlogDetailsProps
 * @param { BlogDetailsProps }
 */ const BlogDetails = ({ slice  })=>{
    // const location = useLocation();
    // const state = location.state;
    // const navigate = useNavigate();
    const [show, setShow] = (0,external_react_.useState)(false), [commentIconClicked, setCommentIconClicked] = (0,external_react_.useState)(false), [vaccinatePollVoted, setVaccinatePollVoted] = (0,external_react_.useState)(false);
    const [activeSlideIndex, setActiveSlideIndex] = (0,external_react_.useState)(0);
    const [visitedSlideIndex, setVisitedSlideIndex] = (0,external_react_.useState)([]);
    const onItemChanged = (index)=>{
        const element = document.querySelector(".slick-dots.slick-thumb li.slick-active");
        const ele = HTMLDivElement;
        ele.style.backgroundPosition = "left bottom";
        ele.style.transition = "all 7s ease-out";
        setTimeout(()=>{
            ele.style.transition = "all 0ms ease-out";
            ele.style.background = "#FFB001";
        }, 6000);
        setActiveSlideIndex(index);
    };
    const beforeChangeHandler = (currentSlide, nextSlide)=>{
        setVisitedSlideIndex([
            ...visitedSlideIndex,
            currentSlide
        ]);
        const slides = document.querySelectorAll(".slick-dots.slick-thumb li");
        const visitedSlide = slides[currentSlide];
        visitedSlide.style.transition = "all 0ms ease-out";
        visitedSlide.style.background = "#FFB001";
    };
    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000000,
        swipeToSlide: true,
        afterChange: (index)=>onItemChanged(index),
        customPaging: function(i) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dot",
                style: {
                    opacity: 0
                },
                children: i
            });
        },
        dotsClass: "slick-dots slick-thumb"
    };
    const containerRef = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        background: "#fff",
        children: [
            console.log(JSON.stringify(slice, null, 2)),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx(common/* Column */.sg, {
                    style: {
                        position: "relative",
                        width: "100%",
                        overflowX: "hidden"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(common/* Column */.sg, {
                                style: {
                                    position: "relative",
                                    width: "100%",
                                    paddingBottom: "3rem"
                                },
                                children: slice.items?.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        ref: containerRef,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: item.sliderimage.url,
                                                alt: item.sliderimage.alt,
                                                className: "shorts_img"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                                className: "shorts_body_section",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                                        className: "short_body_header",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: item.slider_bg_image.url,
                                                                alt: item.slider_bg_image.alt,
                                                                className: "short_body_header_img"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                                                style: {
                                                                    padding: "0 19px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "shorts_title",
                                                                        children: item.slidertitle[0].text
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                        style: {
                                                                            width: "100%",
                                                                            position: "relative",
                                                                            justifyContent: "flex-start",
                                                                            alignItems: "center",
                                                                            marginTop: "0.8rem"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                                style: {
                                                                                    alignItems: "center",
                                                                                    marginRight: "25px"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: item.clockicon.url,
                                                                                        alt: item.clockicon.alt,
                                                                                        style: {
                                                                                            position: "relative"
                                                                                        },
                                                                                        className: "clock_icon_white"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "time_shorts_views_text",
                                                                                        children: "5 min"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                                style: {
                                                                                    alignItems: "center",
                                                                                    marginRight: "25px"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: item.clockicon.url,
                                                                                        alt: item.clockicon.alt,
                                                                                        style: {
                                                                                            position: "relative"
                                                                                        },
                                                                                        className: "shorts_icon_white"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "time_shorts_views_text",
                                                                                        children: "7 shorts"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                                                                style: {
                                                                                    alignItems: "center",
                                                                                    marginRight: "10px"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: item.clockicon.url,
                                                                                        alt: item.clockicon.alt,
                                                                                        style: {
                                                                                            position: "relative"
                                                                                        },
                                                                                        className: "views_icon_white"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "time_shorts_views_text",
                                                                                        children: "121 views"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                                        style: {
                                                            padding: "0 19px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "shorts_subtitle",
                                                                children: item.slidertitle[0].text
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "shorts_body_text",
                                                                children: item.blogfulldescription
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                                    style: {
                                        alignItems: "center",
                                        width: "300px",
                                        justifyContent: "space-around"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "ShortsImages.LikeIcon",
                                                    className: "like_icon",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "78 likes"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "ShortsImages.CommentsIcon",
                                                    className: "comments_icon",
                                                    alt: "",
                                                    onClick: ()=>setCommentIconClicked(true)
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "13 comments"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.WhatsappShareButton, {
                                            url: "window.location.hostname",
                                            title: "Hello Friend, Check out this interesting blog I found on the Toondemy community!",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Column */.sg, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "ShortsImages.ShareIcon",
                                                        className: "share_icon",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "share"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const slices_BlogDetails = (BlogDetails);

;// CONCATENATED MODULE: ./slices/BlogLists/index.js






// import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.BlogListsSlice} BlogListsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogListsSlice>} BlogListsProps
 * @param { BlogListsProps }
 */ const BlogLists = ({ slice  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        style: {
            padding: "20px 15px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "story_title",
                children: "blog list"
            }),
            slice?.items?.map((item, i)=>{
                // <PrismicLink key={i} field={item.blog_link}>
                //   <Link key={i} href={`/book`}>
                {
                // console.log(item.blogthumbnail.url);
                }
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common/* Row */.X2, {
                    style: {
                        marginBottom: "1rem",
                        justifyContent: "flex-start"
                    },
                    // onClick={() => handleSelectedStory(story)}
                    className: "blog_section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: item.blogthumbnail.url,
                            alt: item.blogthumbnail.alt,
                            className: "story_img"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: item.blogthumbnail.url,
                            alt: item.blogthumbnail.alt
                        })
                    ]
                }, i);
            //   </Link>
            // </PrismicLink>;
            })
        ]
    });
/* harmony default export */ const slices_BlogLists = (BlogLists);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./slices/FilterTags/index.js




/**
 * @typedef {import("@prismicio/client").Content.FilterTagsSlice} FilterTagsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FilterTagsSlice>} FilterTagsProps
 * @param { FilterTagsProps }
 */ const FilterTags = ({ slice  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "jsx-b4b2ddad15ca5b51",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "jsx-b4b2ddad15ca5b51" + " " + "title",
                children: slice.primary.title ? /*#__PURE__*/ jsx_runtime_.jsx(react_.PrismicRichText, {
                    field: slice.primary.title
                }) : /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "jsx-b4b2ddad15ca5b51",
                    children: "Template slice, update me!"
                })
            }),
            slice.primary.description ? /*#__PURE__*/ jsx_runtime_.jsx(react_.PrismicRichText, {
                field: slice.primary.description
            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "jsx-b4b2ddad15ca5b51",
                children: "start by editing this slice from inside Slice Machine!"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "b4b2ddad15ca5b51",
                children: "section.jsx-b4b2ddad15ca5b51{max-width:600px;margin:4em auto;text-align:center}.title.jsx-b4b2ddad15ca5b51{color:#8592e0}"
            })
        ]
    });
/* harmony default export */ const slices_FilterTags = (FilterTags);

;// CONCATENATED MODULE: ./slices/HeaderBackgroundImage/index.js



// import Header from "../../pages/BlogLibrary/components/Header";

/**
 * @typedef {import("@prismicio/client").Content.HeaderBackgroundImageSlice} HeaderBackgroundImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderBackgroundImageSlice>} HeaderBackgroundImageProps
 * @param { HeaderBackgroundImageProps }
 */ const HeaderBackgroundImage = ({ slice  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {});
/* harmony default export */ const slices_HeaderBackgroundImage = (HeaderBackgroundImage);

;// CONCATENATED MODULE: ./slices/Paragraph/index.js




/**
 * @typedef {import("@prismicio/client").Content.ParagraphSlice} ParagraphSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ParagraphSlice>} ParagraphProps
 * @param { ParagraphProps }
 */ const Paragraph = ({ slice  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "jsx-b4b2ddad15ca5b51",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "jsx-b4b2ddad15ca5b51" + " " + "title",
                children: slice.primary.title ? /*#__PURE__*/ jsx_runtime_.jsx(react_.PrismicRichText, {
                    field: slice.primary.title
                }) : /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "jsx-b4b2ddad15ca5b51",
                    children: "Template slice, update me!"
                })
            }),
            slice.primary.description ? /*#__PURE__*/ jsx_runtime_.jsx(react_.PrismicRichText, {
                field: slice.primary.description
            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "jsx-b4b2ddad15ca5b51",
                children: "start by editing this slice from inside Slice Machine!"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "b4b2ddad15ca5b51",
                children: "section.jsx-b4b2ddad15ca5b51{max-width:600px;margin:4em auto;text-align:center}.title.jsx-b4b2ddad15ca5b51{color:#8592e0}"
            })
        ]
    });
/* harmony default export */ const slices_Paragraph = (Paragraph);

;// CONCATENATED MODULE: ./slices/Polling/index.js


/**
 * @typedef {import("@prismicio/client").Content.PollingSlice} PollingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PollingSlice>} PollingProps
 * @param { PollingProps }
 */ const Polling = ({ slice  })=>// <section>
    //   <span className="title">
    //     {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
    //     {slice.primary.title ? (
    //       <PrismicRichText field={slice.primary.title} />
    //     ) : (
    //       <h2>Template slice, update me!</h2>
    //     )}
    //   </span>
    //   {slice.primary.description ? (
    //     <PrismicRichText field={slice.primary.description} />
    //   ) : (
    //     <p>start by editing this slice from inside Slice Machine!</p>
    //   )}
    //   <style jsx>{`
    //     section {
    //       max-width: 600px;
    //       margin: 4em auto;
    //       text-align: center;
    //     }
    //     .title {
    //       color: #8592e0;
    //     }
    //   `}</style>
    // </section>
    "";
/* harmony default export */ const slices_Polling = (Polling);

;// CONCATENATED MODULE: ./slices/index.js
// Code generated by Slice Machine. DO NOT EDIT.










const components = {
    blog_detail_with_poll: slices_BlogDetailWithPoll,
    blog_details: slices_BlogDetails,
    blog_lists: slices_BlogLists,
    comment_modal: slices_CommentModal,
    filter_tags: slices_FilterTags,
    footer: slices_Footer,
    header_background_image: slices_HeaderBackgroundImage,
    paragraph: slices_Paragraph,
    polling: slices_Polling
};


/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;