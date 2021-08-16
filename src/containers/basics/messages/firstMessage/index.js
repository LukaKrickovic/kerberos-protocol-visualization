import { Typography } from "@material-ui/core";
import React from "react";
import { useSpring, animated } from "react-spring";

const FirstMessage = ({ started }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const messageIntro = useSpring({
    from: { opacity: 0, height: "0", width: "0", marginLeft: "-50%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: "0",
    },
    // config: { duration: 2000 },
  });

  const FirstMessageText = () => (
    <>
      <Typography variant="body1">
        <b>Attributes</b>
        <br />
        <b>Username/ID</b>&nbsp;&nbsp;
        <em>ie. LukaKrickovic</em>
        <br />
        <b>Service name/ID</b>&nbsp;&nbsp;
        <em>ie. Message service</em>
        <br />
        <b>User IP address</b>&nbsp;&nbsp;
        <em>can be null/one/many</em>
        <br />
        <b>Requested lifetime of TGT</b>
      </Typography>
    </>
  );

  const messageTooltipText = `The client sends this message to authenticate itself.`;

  const MainContainer = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "20%",
    };

    return (
      <div style={containerStyle}>
        <animated.div style={fadeIn}>
          <img
            src={`${process.env.REACT_APP_CDN_BASE_URL}computer_ftzcnk.svg`}
            alt="client"
            style={clientStyle}
          ></img>
        </animated.div>
        <animated.div style={messageIntro}>
          <Message
            text={<FirstMessageText />}
            encrypted={false}
            tooltipText={messageTooltipText}
            from="Client"
            to="Authentication service"
          />
        </animated.div>
        <animated.div>
          <img
            src={`${process.env.REACT_APP_CDN_BASE_URL}ticket-computer_khoidw.svg`}
            alt="client"
            style={authStyle}
          ></img>
        </animated.div>
      </div>
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
