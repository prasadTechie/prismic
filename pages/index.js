import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { BlogLists, components } from "../slices";
import Header from "./../components/Header";
import { Column, Row } from "../components/common";
import { useEffect, useState } from "react";
import Link from "next/link";

const FilterTagsArray = ["All", "Recent", "Education", "Health"];

const Home = ({ page, navigation, settings }) => {
  const [homepageData, setHomepageData] = useState();
  const [blogListData, setBlogListData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const bloglistArray = [];
  const [allData, setAllData] = useState();

  const [blogFilter, setBlogFilter] = useState("Education");
  // const navigate = useNavigate();

  useEffect(() => {
    console.log(page);
    setBlogListData(page);
  }, [page]);

  const handleFilter = (value, index) => {
    setActiveIndex(index);
    let allBlogPostData = page;
    let matchedTags = allBlogPostData.map((item, i) => {
      // console.log(item.tags);
      return item.tags.filter((tag) => {
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

  const handleSelectedStory = (story) => {
    const shorts = story.short_stories;
    // navigate("/shorts", { state: { shorts: shorts, blogFilter: blogFilter } });
  };

  return (
    <Column
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#5F1296",
        paddingBottom: "100%",
      }}
    >
      {page.map((data, index) => {
        if (data.uid === "home") {
          return <Header key={index} data={data} />;
        }
      })}

      <Row style={{ margin: "30px 0 30px" }} className={"filter_tags_wrapper"}>
        {FilterTagsArray.map((item, index) => (
          <span
            className={`unselected_blog_stories ${
              activeIndex === index ? "tag_active" : ""
            }`}
            onClick={() => handleFilter(item.toLowerCase(), index)}
          >
            {item}
          </span>
        ))}

        {/* <span
          className={"unselected_blog_stories"}
          onClick={() => handleFilter("all")}
        >
          {"All"}
        </span>
        <span
          className={"unselected_blog_stories"}
          onClick={() => handleFilter("recent")}
        >
          {"Recent"}
        </span>
        <span
          className={"unselected_blog_stories"}
          onClick={() => handleFilter("education")}
        >
          {"Education"}
        </span>
        <span
          className={"unselected_blog_stories"}
          onClick={() => handleFilter("health")}
        >
          {"Health"}
        </span> */}
      </Row>

      {blogListData.map((data, i) => {
        if (data?.uid !== "home") {
          return data?.data?.slices?.map((item, i) => (
            <Column key={i} style={{ padding: "0 1rem" }}>
              {item?.slice_type !== "footer" ? (
                <Link key={i} href={`/${data.uid}`}>
                  <Column
                    key={i}
                    style={{
                      marginBottom: "1rem",
                      justifyContent: "flex-start",
                    }}
                    // onClick={() => handleSelectedStory(story)}
                    className="blog_section"
                  >
                    <img
                      src={item?.primary?.thumbnail_image?.url}
                      alt={item?.primary?.thumbnail_image?.alt}
                      className="story_img"
                    />
                    <Row
                      style={{
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "flex-end",
                        margin: "0.5rem 0",
                      }}
                    >
                      <Row
                        style={{
                          alignItems: "center",
                          marginRight: "1.5rem",
                        }}
                      >
                        <img
                          src={item?.primary?.clock_icon?.url}
                          alt={item?.primary?.clock_icon?.alt}
                          className="clock_icon"
                        />
                        <span className="time_shorts">
                          {item?.primary?.clock_count[0]?.text} mins
                        </span>
                      </Row>
                      <Row style={{ alignItems: "center" }}>
                        <img
                          src={item?.primary?.short_icon?.url}
                          alt={item?.primary?.short_icon?.alt}
                          className="shorts_icon"
                        />
                        <span className="time_shorts">
                          {item?.primary?.short_count[0]?.text} shorts
                        </span>
                      </Row>
                    </Row>
                    <Column>
                      <span className="story_title">
                        {item?.primary?.title[0]?.text}
                      </span>
                      <p className="story_subtitle">
                        {item?.primary?.description[0]?.text}
                      </p>
                    </Column>
                  </Column>
                </Link>
              ) : (
                ""
              )}
            </Column>
          ));
        }
      })}
    </Column>
  );
};

export default Home;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getAllByTag("all");
  return {
    props: {
      page,
    },
  };
}
