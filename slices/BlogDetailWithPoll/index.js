import React, { useEffect, useRef, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Column, Row } from "../../components/common";
import { json } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import VaccinatePoll from "../../pages/Shorts/components/VaccinatePoll";
import { WhatsappShareButton } from "next-share";
import Modal from "react-modal";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.BlogDetailWithPollSlice} BlogDetailWithPollSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogDetailWithPollSlice>} BlogDetailWithPollProps
 * @param { BlogDetailWithPollProps }
 */
const BlogDetailWithPoll = ({ slice }) => {
  const [pollVoted, setPollVoted] = useState(false),
    [vote, setVote] = useState("");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [visitedSlideIndex, setVisitedSlideIndex] = useState([]);
  const [autoPlayTime] = useState(7000);

  const [commentIconClicked, setCommentIconClicked] = useState(false);

  const onItemChanged = (index) => {
    const element = document.querySelector(
      ".slick-dots.slick-thumb li.slick-active"
    );
    const ele = element;
    ele.style.backgroundPosition = "left";
    ele.style.transition = "all 7s ease-out";
    setTimeout(() => {
      ele.style.transition = "all 0ms ease-out";
      ele.style.background = "#FFB001";
    }, autoPlayTime - 1000);
    setActiveSlideIndex(index);
  };

  const beforeChangeHandler = (currentSlide, nextSlide) => {
    setVisitedSlideIndex([...visitedSlideIndex, currentSlide]);
    const slides = document.querySelectorAll(".slick-dots.slick-thumb li");
    const visitedSlide = slides[currentSlide];
    visitedSlide.style.transition = "all 0ms ease-out";
    visitedSlide.style.background = "#FFB001";
  };

  const handleVote = (vote) => {
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
    autoplay: true,
    autoplaySpeed: autoPlayTime,
    swipeToSlide: true,

    afterChange: (index) => onItemChanged(index),
    customPaging: function (i) {
      return <div style={{ opacity: "0", pointerEvents: "none" }}>{i}</div>;
    },
    dotsClass: "slick-dots slick-thumb",
  };

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the aspect ratio of the image
      const img = new Image();
      img.src = BlogLibraryImages.ShortImage;
      img.onload = () => {
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

  const handleModal = (boolean) => {
    console.log(boolean, "comment clicked");
    setCommentIconClicked(boolean);
  };

  return (
    <Column
      style={{ position: "relative", width: "100%", overflowX: "hidden" }}
    >
      <Link href={"/"}>
        <img
          src={slice?.primary?.back_button?.url}
          className="back_button"
          alt=""
        />
      </Link>
      <Slider {...Settings} beforeChange={beforeChangeHandler}>
        {slice.items.map((item, i) => (
          <div key={i}>
            <img
              src={item.slider_background.url}
              alt={item.slider_background.alt}
              className="shorts_img"
            />
            <Column className="shorts_body_section">
              <Column className="short_body_header">
                <img
                  src={item.purple_background.url}
                  alt={item.purple_background.alt}
                  className="short_body_header_img"
                />
                <Column style={{ padding: "0 19px" }}>
                  <span className="shorts_title">{item.title[0].text}</span>
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
                        src={item.clock_icon.url}
                        alt={item.clock_icon.alt}
                        style={{ position: "relative" }}
                        className="clock_icon_white"
                      />
                      <span className="time_shorts_views_text">5 min</span>
                    </Row>
                    <Row
                      style={{
                        alignItems: "center",
                        marginRight: "25px",
                      }}
                    >
                      <img
                        src={item.short_icon.url}
                        alt={item.short_icon.alt}
                        style={{ position: "relative" }}
                        className="shorts_icon_white"
                      />
                      <span className="time_shorts_views_text">7 shorts</span>
                    </Row>
                    <Row
                      style={{
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={item.view_icon.url}
                        alt={item.view_icon.alt}
                        style={{ position: "relative" }}
                        className="views_icon_white"
                      />
                      <span className="time_shorts_views_text">121 views</span>
                    </Row>
                  </Row>
                </Column>
              </Column>
              <Column
                style={{
                  padding: "0 19px",
                  marginTop: "50px",
                  paddingBottom: "150px",
                }}
              >
                {/* <span className="shorts_subtitle">{item.title[0].text}</span> */}
                <p className="shorts_body_text">{item.paragraph[0].text}</p>
                {console.log(item.poll_question.length)}
                {item?.poll_question.length >= 1 ? (
                  <Column
                    className="vaccinate_poll_section"
                    style={{ alignSelf: "center" }}
                  >
                    <span className="ques">Question:</span>
                    <span className="shorts_subtitle">
                      {item.question[0].text}
                    </span>

                    <Column style={{ width: "100%" }}>
                      <>
                        <Row
                          className="poll_button"
                          onClick={() => handleVote("Yes")}
                        >
                          {pollVoted ? (
                            <Row className="poll_button_voted">
                              <Column className="poll_voted poll_vote_yes">
                                {item.poll_question[0]?.text}
                              </Column>
                              <span className="vote_percentage">
                                {item.poll_answer[0]?.text}
                              </span>
                            </Row>
                          ) : (
                            <>
                              <img
                                src={item.poll_question_icon.url}
                                alt={item.poll_question_icon.alt}
                              />{" "}
                              <span>{item.poll_question[0]?.text}</span>
                            </>
                          )}
                        </Row>
                        <Row
                          className="poll_button"
                          onClick={() => handleVote("No")}
                        >
                          {pollVoted ? (
                            <Row className="poll_button_voted">
                              <Column className="poll_voted poll_vote_no">
                                {item.poll_question_2[0]?.text}
                              </Column>
                              <span className="vote_percentage">
                                {item.poll_answer_2[0]?.text}
                              </span>
                            </Row>
                          ) : (
                            <>
                              <img
                                src={item.poll_question_2_icon.url}
                                alt={item.poll_question_2_icon.alt}
                              />{" "}
                              <span>{item.poll_question_2[0]?.text}</span>
                            </>
                          )}
                        </Row>
                        <Row
                          className="poll_button"
                          onClick={() => handleVote("Not sure")}
                        >
                          {pollVoted ? (
                            <Row className="poll_button_voted">
                              <Column className="poll_voted poll_vote_not_sure">
                                {""}
                              </Column>
                              <span className="poll_button_voted_not_sure">
                                {item.poll_question_3[0]?.text}
                              </span>
                              <span className="vote_percentage">
                                {item.poll_answer_3[0]?.text}
                              </span>
                            </Row>
                          ) : (
                            <>
                              <img
                                src={item.poll_question_3_icon.url}
                                alt={item.poll_question_3_icon.url}
                              />{" "}
                              <span>{item.poll_question_3[0]?.text}</span>
                            </>
                          )}
                        </Row>
                      </>
                    </Column>
                  </Column>
                ) : (
                  ""
                )}
                {item?.paragraph_2.length >= 1 ? (
                  <p className="shorts_body_text">{item.paragraph_2[0].text}</p>
                ) : (
                  ""
                )}
              </Column>
            </Column>
          </div>
        ))}
      </Slider>
    </Column>
  );
};

export default BlogDetailWithPoll;
