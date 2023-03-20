import { Suspense } from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import Colors from "./../theme/Colors";
// import Images from "../../assets/images";

const Row = (props) => {
  const { children, style, ...remainingProps } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        ...style,
      }}
      {...remainingProps}
    >
      {children}
    </div>
  );
};

const Column = (props) => {
  const { children, style, ...remainingProps } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ...style,
      }}
      {...remainingProps}
    >
      {children}
    </div>
  );
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

const Line = styled("hr")`
  width: 100%;
  height: 0.5px;
  background: #d9d9d9;
  border: none;
`;

const InvisibleButton = ({ id }) => (
  <button id={id} className={id} style={{ display: "none" }} />
);

const Bullet = (props) => (
  <div
    style={{
      width: `${props.size}rem`,
      height: `${props.size}rem`,
      background: props.color,
      borderRadius: `${props.size / 2}rem`,
      marginTop: "0.4rem",
      marginRight: "1rem",
      ...props.style,
    }}
  />
);

const LazyComponent = ({ element }) => (
  <Suspense
    fallback={
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Oval height={50} width={50} color={Colors.orange} strokeWidth={4} />
      </div>
    }
  >
    {element}
  </Suspense>
);
export { Row, Column, Line, InvisibleButton, Bullet, LazyComponent };
