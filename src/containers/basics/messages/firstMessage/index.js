import { Button, Modal, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import CustomTooltip from "../../../../components/CustomTooltip";
import Message from "../../../../components/Message";
import Help from "./Help";

const FirstMessage = ({ started }) => {
  const clientImage = useRef(null);
  const authenticationServiceImage = useRef(null);
  const [isHelpOpen, setHelpOpen] = useState(false);

  const getResponseLeftMargin = () =>
    clientImage.current
      ? clientImage.current.getBoundingClientRect().left
      : "20%";

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
      marginLeft: "60%",
    },
  });
  const response1Intro = useSpring({
    from: { opacity: 0, height: "0", width: "0", marginLeft: "100%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: getResponseLeftMargin(),
    },
    delay: 1000,
  });
  const response2Intro = useSpring({
    from: { opacity: 0, height: "0", width: "0", marginLeft: "100%" },
    to: {
      opacity: 1,
      height: "wrap-content",
      width: "wrap-content",
      marginLeft: getResponseLeftMargin(),
      marginTop: "20%",
    },
    delay: 1000,
  });

  const FirstMessageText = () => (
    <>
      <Typography variant="body1">
        <b>Attributes</b>
        <br />
        <b>Username/ID</b>&nbsp;&nbsp;
        <a
          href="https://github.com/LukaKrickovic"
          style={{ textDecoration: "none", color: "black" }}
        >
          <em>ie. LukaKrickovic</em>
        </a>
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

  const Response1Text = () => (
    <>
      <Typography variant="body1">
        <b>Attributes</b>
        <br />
        <b>TGS name/ID</b>
        <br />
        <b>Timestamp</b>
        <br />
        <b>Lifetime</b>&nbsp;&nbsp;
        <em>Same as the TicketGrantingTicket</em>
        <br />
        <b>Ticket Granting Server (TGS) session key</b>
      </Typography>
    </>
  );

  const response1TooltipText = `Only the client can read this message as it's encrypted using a key derived from the clients password.`;

  const Response2Text = () => (
    <>
      <Typography variant="body1">
        <b>Attributes</b>
        <br />
        <b>Username/ID</b>&nbsp;&nbsp;
        <a
          href="https://github.com/LukaKrickovic"
          style={{ textDecoration: "none", color: "black" }}
        >
          <em>ie. LukaKrickovic</em>
        </a>
        <br />
        <b>TGS name/ID</b>&nbsp;&nbsp;
        <br />
        <b>Timestamp</b>&nbsp;&nbsp;
        <br />
        <b>User IP address</b>&nbsp;&nbsp;
        <em>can be null/one/many</em>
        <br />
        <b>Lifetime of TGT</b>
      </Typography>
    </>
  );

  const response2TooltipText = `This message provides the Ticket Granting service with the session key it needs to communicate with the client securely.`;

  const MainContainer = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "20%",
    };

    return (
      <>
        <Modal open={isHelpOpen} onClose={() => setHelpOpen(false)}>
          <Help />
        </Modal>
        <div style={containerStyle}>
          <animated.div style={fadeIn}>
            <CustomTooltip
              title={<Typography variant="body1">The client</Typography>}
            >
              <img
                src={`${process.env.REACT_APP_CDN_BASE_URL}computer_ftzcnk.svg`}
                alt="client"
                style={clientStyle}
                ref={clientImage}
              ></img>
            </CustomTooltip>
          </animated.div>
          <animated.div>
            <CustomTooltip
              title={
                <Typography variant="body1">
                  The authentication service
                </Typography>
              }
            >
              <img
                src={`${process.env.REACT_APP_CDN_BASE_URL}ticket-computer_khoidw.svg`}
                alt="client"
                style={authStyle}
                ref={authenticationServiceImage}
              ></img>
            </CustomTooltip>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setHelpOpen(!isHelpOpen);
              }}
            >
              Help
            </Button>
          </animated.div>
        </div>
        <div
          style={{
            backgroundColor: "ghostwhite",
            height: "100%",
            marginTop: "5%",
            marginBottom: "10%",
            paddingTop: "5%",
          }}
        >
          <animated.div style={messageIntro}>
            <Message
              text={<FirstMessageText />}
              encrypted={false}
              tooltipText={messageTooltipText}
              from="Client"
              to="Authentication service"
            />
          </animated.div>

          <animated.div style={response1Intro}>
            <Message
              text={<Response1Text />}
              encrypted={true}
              tooltipText={response1TooltipText}
              from="Authentication service"
              to="Client"
            />
          </animated.div>
          <animated.div style={response2Intro}>
            <Message
              text={<Response2Text />}
              encrypted={true}
              tooltipText={response2TooltipText}
              from="Authentication service"
              to="Client"
            />
          </animated.div>
        </div>
      </>
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
