import { Fab, Modal, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import CustomTooltip from "../../../../components/CustomTooltip";
import Message from "../../../../components/Message";
import Help from "./Help";
import IMAGE_ROUTES from "../../../../helpers/images/imageRoutes";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useHistory } from "react-router-dom";
import pageRoutes from "../../../../pageroutes";

const FirstMessage = ({ started }) => {
  const history = useHistory();
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

  const response2TooltipText = `This is the Ticket granting ticket! It provides the Ticket Granting service with the session key it needs to communicate with the client securely.`;

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
        <CustomTooltip
          title={<Typography variant="body1">Second step</Typography>}
        >
          <Fab
            color="primary"
            style={actionButtonStyle}
            onClick={() => history.push(pageRoutes.SECOND_STEP)}
          >
            <ArrowForwardIosTwoToneIcon />
          </Fab>
        </CustomTooltip>
        <CustomTooltip
          title={
            <Typography variant="body1">
              More information about this step
            </Typography>
          }
        >
          <Fab
            color="secondary"
            style={helpActionButtonStyle}
            onClick={() => setHelpOpen(true)}
          >
            <InfoOutlinedIcon style={{ height: "50%" }} />
          </Fab>
        </CustomTooltip>
        <div style={containerStyle}>
          <animated.div style={fadeIn}>
            <CustomTooltip
              title={<Typography variant="body1">The client</Typography>}
            >
              <img
                src={IMAGE_ROUTES.CLIENT}
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
                src={IMAGE_ROUTES.AUTHENTICATION}
                alt="Authentication service"
                style={authStyle}
                ref={authenticationServiceImage}
              ></img>
            </CustomTooltip>
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

const actionButtonStyle = {
  position: "fixed",
  bottom: "10%",
  right: "10%",
};

const helpActionButtonStyle = {
  position: "fixed",
  bottom: "10%",
  right: "5%",
};

export default FirstMessage;
