import { Column } from "./common";

const Header = (data) => {
  return (
    <>
      <Column style={{ width: "100%", position: "relative" }}>
        <img
          src={data?.data?.data?.slices[0]?.primary?.headerimage?.url}
          style={{ width: "100%", aspectRatio: "4.44" }}
          alt=""
        />

        <img
          src={data?.data?.data?.slices[0]?.primary?.cancleicon?.url}
          className="back_btn"
          alt=""
        />
        <Column className="safe_kids"> kids safe</Column>
      </Column>
      <span className="header_title">
        <p>{data?.data?.data?.slices[0]?.primary?.title[0]?.text} </p>
      </span>
    </>
  );
};

export default Header;
