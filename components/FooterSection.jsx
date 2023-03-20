import { Column, Row } from "./common";
import styled from "styled-components";
import { WhatsappShareButton } from "react-share";
import { useState, useEffect } from "react";

const Footer = styled(Column)`
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

const FooterSection = ({ slice }, handleModal) => {
  console.log({ slice }, handleModal);
  const [likes, setLikes] = useState(50),
    [liked, setLiked] = useState(false),
    [originName, setOriginName] = useState(""),
    [likedImage, setLikedImage] = useState({
      image: slice?.primary?.hearth_animation?.url,
      className: "heart_animation",
    });

  useEffect(() => {
    if (typeof window !== undefined) {
      setOriginName(window.location.origin);
    }
  });

  const handleLike = () => {
    if (liked) {
      setLikedImage({
        image: slice?.primary?.hearth_animation?.url,
        className: "heart_animation",
      });
      setLiked(false);
      setLikes(likes - 1);
    } else {
      const image = new Image();
      image.src = slice?.primary?.hearth_animation?.url;
      image.onload = () => {
        setLiked(true);
        setLikes(likes + 1);
      };
    }
  };

  useEffect(() => {
    if (liked) {
      setTimeout(() => {
        setLikedImage({
          image: slice?.primary?.red_heart_icon?.url,
          className: "heart_liked",
        });
      }, 1000);
    }
  }, [liked]);

  // const handleModalClose = (value) => {
  //   setCommentIconClicked(value);
  // };

  return (
    <>
      {/* <Row className="footer_section">
        <Row className="footer_like_section" onClick={handleLike}>
          {liked ? (
            <img
              src={likedImage.image}
              className={likedImage.className}
              alt=""
            />
          ) : (
            <img
              src={slice?.primary?.like_icon?.url}
              className="heart_icon"
              alt=""
            />
          )}
          <span className="likes_no">{likes}</span>{" "}
          <span className="likes">likes</span>
        </Row>
        <Row
          className="footer_like_comment_section"
          onClick={() => handleModal(true)}
        >
          <img
            src={slice?.primary?.comment_icon?.url}
            className="comments_icon"
            alt=""
          />
          <span>178 comments</span>
        </Row>
        <WhatsappShareButton
          url={originName}
          title="Hello Friend, Check out this interesting blog I found on the Toondemy community!"
        >
          <Row>
            <img
              src={slice?.primary?.share_icon?.url}
              className="share_icon"
              alt=""
            />
            <span>12 share</span>
          </Row>
        </WhatsappShareButton>
      </Row> */}
    </>
  );
};

export default FooterSection;
