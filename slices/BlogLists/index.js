import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import React from "react";
import { json } from "react-router-dom";
import { Column, Row } from "../../components/common";
// import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.BlogListsSlice} BlogListsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogListsSlice>} BlogListsProps
 * @param { BlogListsProps }
 */
const BlogLists = ({ slice }) => (
  <section style={{ padding: "20px 15px" }}>
    {/* blog list */}
    {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
    <span className="story_title">blog list</span>
    {slice?.items?.map((item, i) => {
      // <PrismicLink key={i} field={item.blog_link}>
      //   <Link key={i} href={`/book`}>
      {
        // console.log(item.blogthumbnail.url);
      }
      <Row
        key={i}
        style={{ marginBottom: "1rem", justifyContent: "flex-start" }}
        // onClick={() => handleSelectedStory(story)}
        className="blog_section"
      >
        <img
          src={item.blogthumbnail.url}
          alt={item.blogthumbnail.alt}
          className="story_img"
        />
        <img src={item.blogthumbnail.url} alt={item.blogthumbnail.alt} />
        {/* <Column>
          <span className="story_title">{item.blogtitle[0].text}</span>
          <p className="story_subtitle">{item.blogshortdescription}</p>
          <Row
            style={{
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              marginTop: "10px",
            }}
          >
            <Row
              style={{
                alignItems: "center",
                marginRight: "1.5rem",
              }}
            >
              <img
                src={item.clockicon.url}
                alt={item.clockicon.alt}
                className="clock_icon"
              />
              <span className="time_shorts">{item.time} mins</span>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <img
                src={item.shortsicon.url}
                alt={item.shortsicon.alt}
                className="shorts_icon"
              />
              <span className="time_shorts">{item.shortscount} shorts</span>
            </Row>
          </Row>
        </Column> */}
      </Row>;

      //   </Link>
      // </PrismicLink>;
    })}
  </section>
);

export default BlogLists;
