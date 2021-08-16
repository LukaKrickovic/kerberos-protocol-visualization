import React from "react";
import { useSpring, animated } from "react-spring";

const FirstMessage = ({ started }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const MainContainer = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "20%",
      ...fadeIn,
    };
    return (
      <animated.div style={containerStyle}>
        <img
          src={`${process.env.REACT_APP_CDN_BASE_URL}computer_ftzcnk.svg`}
          alt="client"
          style={clientStyle}
        ></img>
        <img
          src={`${process.env.REACT_APP_CDN_BASE_URL}ticket-computer_khoidw.svg`}
          alt="client"
          style={authStyle}
        ></img>
      </animated.div>
    );
  };
  return <MainContainer key={started} />;
};

const clientStyle = {
  height: "150px",
};

const authStyle = {
  height: "140px",
};

export default FirstMessage;
