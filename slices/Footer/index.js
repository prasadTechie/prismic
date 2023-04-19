import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Column, Row } from "../../components/common";
import { WhatsappShareButton } from "next-share";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal/lib/components/Modal";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */

const FooterWrapper = styled(Column)`
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

const Footer = ({ slice }) => {
  const [likes, setLikes] = useState(50),
    [liked, setLiked] = useState(false),
    [isModalVisible, setIsModalVisible] = useState(false),
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

  const handleModal = (boolean) => {
    console.log(boolean, "boolean value");
    setIsModalVisible(boolean);
  };

  return (
    <>
      {console.log(slice, "footer data")}
      <Row className="footer_section">
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
      </Row>

      <>
        {isModalVisible ? (
          <Modal
            isOpen={isModalVisible}
            style={{
              content: {
                width: "300px",
                transform: "translate(-50%, -50%)",
                border: `none`,
                inset: "auto 50% 0",
                borderRadius: "10px",
                background: "white",
                overflowX: "hidden",
              },
              overlay: {
                background: "#00000099",
                zIndex: 100,
                overflowY: "auto",
                // backdropFilter: "blur(1px)",
              },
            }}
          >
            <Column className="validate_acc_section">
              <img
                src={slice?.primary?.puzzle_image?.url}
                className="puzzle_heart"
                alt={slice?.primary?.puzzle_image?.alt}
              />
              <span>{slice?.primary?.title[0].text}</span>
              <p>{slice?.primary?.description[0].text}</p>
              <button
                className="validate_acc_btn"
                onClick={() => setIsModalVisible(false)}
              >
                Please validate my account
              </button>
            </Column>
          </Modal>
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default Footer;
