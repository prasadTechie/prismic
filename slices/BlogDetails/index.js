import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider, { Settings } from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import { PrismicRichText } from "@prismicio/react";
// import BlogSection from "../../pages/BlogLibrary-/components/BlogsSection";
import { Column, Row } from "../../components/common";
// import { WhatsappShareButton } from "react-share";
import { WhatsappShareButton } from "next-share";

/**
 * @typedef {import("@prismicio/client").Content.BlogDetailsSlice} BlogDetailsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogDetailsSlice>} BlogDetailsProps
 * @param { BlogDetailsProps }
 */
const BlogDetails = ({ slice }) => {
  // const location = useLocation();
  // const state = location.state;
  // const navigate = useNavigate();
  const [show, setShow] = useState(false),
    [commentIconClicked, setCommentIconClicked] = useState(false),
    [vaccinatePollVoted, setVaccinatePollVoted] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [visitedSlideIndex, setVisitedSlideIndex] = useState([]);

  const onItemChanged = (index) => {
    const element = document.querySelector(
      ".slick-dots.slick-thumb li.slick-active"
    );
    const ele = HTMLDivElement;
    ele.style.backgroundPosition = "left bottom";
    ele.style.transition = "all 7s ease-out";
    setTimeout(() => {
      ele.style.transition = "all 0ms ease-out";
      ele.style.background = "#FFB001";
    }, 6000);
    setActiveSlideIndex(index);
  };
  const beforeChangeHandler = (currentSlide, nextSlide) => {
    setVisitedSlideIndex([...visitedSlideIndex, currentSlide]);
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
    afterChange: (index) => onItemChanged(index),
    customPaging: function (i) {
      return (
        <div className="dot" style={{ opacity: 0 }}>
          {i}
        </div>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  };

  const containerRef = useRef(null);

  return (
    <section background="#fff">
      {console.log(JSON.stringify(slice, null, 2))}
      <div className="container">
        <Column
          style={{ position: "relative", width: "100%", overflowX: "hidden" }}
        >
          {/* <img
            src={e.back_icon.url}
            alt={e.back_icon.alt}
            className="back_button"
            onClick={() => navigate("/")}
          /> */}
          {/* {!commentIconClicked ? ( */}
          <>
            <Column
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "3rem",
              }}
            >
              {/* <Slider {...settings} beforeChange={beforeChangeHandler}> */}
              {slice.items?.map((item, i) => (
                <div key={i} ref={containerRef}>
                  <img
                    src={item.sliderimage.url}
                    alt={item.sliderimage.alt}
                    className="shorts_img"
                  />
                  <Column className="shorts_body_section">
                    <Column className="short_body_header">
                      <img
                        src={item.slider_bg_image.url}
                        alt={item.slider_bg_image.alt}
                        className="short_body_header_img"
                      />
                      <Column style={{ padding: "0 19px" }}>
                        <span className="shorts_title">
                          {item.slidertitle[0].text}
                        </span>
                        <Row
                          style={{
                            width: "100%",
                            position: "relative",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginTop: "0.8rem",
                          }}
                        >
                          <Row
                            style={{
                              alignItems: "center",
                              marginRight: "25px",
                            }}
                          >
                            <img
                              src={item.clockicon.url}
                              alt={item.clockicon.alt}
                              style={{ position: "relative" }}
                              className="clock_icon_white"
                            />
                            <span className="time_shorts_views_text">
                              5 min
                            </span>
                          </Row>
                          <Row
                            style={{
                              alignItems: "center",
                              marginRight: "25px",
                            }}
                          >
                            <img
                              src={item.clockicon.url}
                              alt={item.clockicon.alt}
                              style={{ position: "relative" }}
                              className="shorts_icon_white"
                            />
                            <span className="time_shorts_views_text">
                              7 shorts
                            </span>
                          </Row>
                          <Row
                            style={{
                              alignItems: "center",
                              marginRight: "10px",
                            }}
                          >
                            <img
                              src={item.clockicon.url}
                              alt={item.clockicon.alt}
                              style={{ position: "relative" }}
                              className="views_icon_white"
                            />
                            <span className="time_shorts_views_text">
                              121 views
                            </span>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                    <Column style={{ padding: "0 19px" }}>
                      <span className="shorts_subtitle">
                        {item.slidertitle[0].text}
                      </span>
                      <p className="shorts_body_text">
                        {item.blogfulldescription}
                      </p>
                      {/* <VaccinatePoll
                      vaccinatePollVoted={vaccinatePollVoted}
                      setVaccinatePollVoted={setVaccinatePollVoted}
                    /> */}
                    </Column>
                  </Column>
                </div>
              ))}
              {/* <ParticipatePoll /> */}
              {/* <SimilarBlogs blogFilter={state.blogFilter} /> */}
              {/* </Slider> */}
            </Column>
            <div>
              <Row
                style={{
                  alignItems: "center",
                  width: "300px",
                  justifyContent: "space-around",
                }}
              >
                <Column>
                  <img
                    src={"ShortsImages.LikeIcon"}
                    className="like_icon"
                    alt=""
                  />
                  <span>78 likes</span>
                </Column>
                <Column>
                  <img
                    src={"ShortsImages.CommentsIcon"}
                    className="comments_icon"
                    alt=""
                    onClick={() => setCommentIconClicked(true)}
                  />
                  <span>13 comments</span>
                </Column>
                <WhatsappShareButton
                  url={"window.location.hostname"}
                  title="Hello Friend, Check out this interesting blog I found on the Toondemy community!"
                >
                  <Column>
                    <img
                      src={"ShortsImages.ShareIcon"}
                      className="share_icon"
                      alt=""
                      // onClick={whatsappShare}
                    />
                    <span>share</span>
                  </Column>
                </WhatsappShareButton>
              </Row>
            </div>
          </>
          {/* ) : (
      // <LazyComponent element={<ValidateAccount />} />
      ''
    )} */}
        </Column>
      </div>
    </section>
  );
};

export default BlogDetails;
