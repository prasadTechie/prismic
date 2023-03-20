import { Column, Row } from "./common";
import BlogLibraryImages from "./";

const BlogsSection = ({ blogFilter, handleSelectedStory }) => {
  return (
    <>
      {blogFilter.blog_stories.map((story, i) => (
        <Row
          key={story.title}
          style={{ marginBottom: "1rem", justifyContent: "flex-start" }}
          onClick={() => handleSelectedStory(story)}
        >
          <img src={story.image} className="story_img" alt="" />
          <Column>
            <span className="story_title">{story.title}</span>
            <Row
              style={{
                alignItems: "center",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <Row
                style={{
                  alignItems: "center",
                  marginRight: "1.5rem",
                }}
              >
                <img
                  src={BlogLibraryImages.ClockIcon}
                  className="clock_icon"
                  alt=""
                />
                <span>{story.time} mins</span>
              </Row>
              <Row style={{ alignItems: "center" }}>
                <img
                  src={BlogLibraryImages.ShortsIcon}
                  className="shorts_icon"
                  alt=""
                />
                <span>{story.shorts} shorts</span>
              </Row>
            </Row>
          </Column>
        </Row>
      ))}
    </>
  );
};

export default BlogsSection;
