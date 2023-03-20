import React from "react";
import { PrismicRichText } from "@prismicio/react";
// import Header from "../../pages/BlogLibrary/components/Header";
import { json } from "react-router-dom";

/**
 * @typedef {import("@prismicio/client").Content.HeaderBackgroundImageSlice} HeaderBackgroundImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderBackgroundImageSlice>} HeaderBackgroundImageProps
 * @param { HeaderBackgroundImageProps }
 */
const HeaderBackgroundImage = ({ slice }) => (
  <section>
    {/* <Header data={slice} /> */}
    {/* {JSON.stringify(slice, null, 2)} */}
  </section>
);

export default HeaderBackgroundImage;
