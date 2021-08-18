import { Fab, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CustomTooltip from "../../../../components/CustomTooltip";
import Message from "../../../../components/Message";
import Help from "./Help";
import ANIMATIONS from "./animations";
import IMAGE_ROUTES from "../../../../helpers/images/imageRoutes";
import { useHistory } from "react-router-dom";
import pageRoutes from "../../../../pageroutes";
import ArrowForwardIosTwoTone from "@material-ui/icons/ArrowForwardIosTwoTone";
import ArrowBackIosTwoTone from "@material-ui/icons/ArrowBackIosTwoTone";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const SecondMessage = () => {
  const [isHelpOpen, setHelpOpen] = useState(false);
  const history = useHistory();

  const {
    fadeIn,
    messageIntro,
    secondMessageIntro,
    tgsIntro,
    serviceTicketIntro,
  } = ANIMATIONS;

  const fadeInStyle = useSpring(fadeIn);
  const messageIntroStyle = useSpring(messageIntro);
  const secondMessageIntroStyle = useSpring(secondMessageIntro);
  const tgsIntroStyle = useSpring(tgsIntro);
  const serviceTicketIntroStyle = useSpring(serviceTicketIntro);

  const MainContainer = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "20%",
    };

    const FirstMessageText = () => (
      <>
        <Typography variant="body1">
          <b>Attributes</b>
          <br />
          <b>Service name/ID</b>&nbsp;&nbsp;
          <em>ie. Message service</em>
          <br />
          <b>Requested lifetime for the ticket</b>&nbsp;&nbsp;
        </Typography>
      </>
    );

    const firstMessageTooltipText =
      "This message is sent to declare which service the client needs a ticket for.";

    const SecondMessageText = () => (
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
          <b>Timestamp</b>&nbsp;&nbsp;
        </Typography>
      </>
    );

    const secondMessageTooltipText =
      "This message is an authenticator, so the TGS knows which client the service is communicating with. This message is encrypted with the TGS session key supplied to the user in the previous step.";

    const TGTText = () => (
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

    const TGTTooltipText =
      "This message is the Ticket Granting Ticket the client recieved from the authentication service in the previous step.";

    const ServiceTicketText = () => (
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
          <br />
          <b>Timestamp</b>&nbsp;&nbsp;
          <br />
          <b>User IP address</b>&nbsp;&nbsp;
          <em>can be null/one/many</em>
          <br />
          <b>Lifetime of the Service Ticket</b>
          <br />
          <VpnKeyIcon style={{ color: "steelblue" }} />
          &nbsp;
          <b>Service session key</b>
        </Typography>
      </>
    );

    const ServiceTicketTooltipText =
      "This message is the Ticket Granting Ticket the client recieved from the authentication service in the previous step.";

    return (
      <>
        <Modal open={isHelpOpen} onClose={() => setHelpOpen(false)}>
          <Help />
        </Modal>
        <CustomTooltip
          title={<Typography variant="body1">Third step</Typography>}
        >
          <Fab
            color="primary"
            style={actionButtonStyle}
            onClick={() => history.push(pageRoutes.SECOND_STEP)}
          >
            <ArrowForwardIosTwoTone />
          </Fab>
        </CustomTooltip>
        <CustomTooltip title={<Typography variant="body1">Start</Typography>}>
          <Fab
            color="primary"
            style={backActionButtonStyle}
            onClick={() => history.push(pageRoutes.START)}
          >
            <ArrowBackIosTwoTone />
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
            <InfoOutlined style={{ height: "50%" }} />
          </Fab>
        </CustomTooltip>
        <div>
          <Typography
            variant="h2"
            style={{
              position: "absolute",
              left: "50%",
              top: "5%",
              transform: "translate(-50%, 0%)",
              textAlign: "center",
              color: "steelblue",
            }}
          >
            The second step
          </Typography>
        </div>
        <div style={containerStyle}>
          <animated.div style={fadeInStyle}>
            <CustomTooltip
              title={<Typography variant="body1">The client</Typography>}
            >
              <img
                src={IMAGE_ROUTES.CLIENT}
                alt="client"
                style={clientStyle}
              ></img>
            </CustomTooltip>
          </animated.div>
          <animated.div style={fadeInStyle}>
            <CustomTooltip
              title={
                <Typography variant="body1">
                  The ticket granting service
                </Typography>
              }
            >
              <img
                src={IMAGE_ROUTES.TICKET_OFFICE}
                alt="The ticket granting service"
                style={authStyle}
              ></img>
            </CustomTooltip>
          </animated.div>
        </div>
        <div
          style={{
            backgroundColor: "ghostwhite",
            height: "800px",
            width: "100%",
            marginTop: "5%",
            marginBottom: "10%",
            paddingTop: "5%",
          }}
        >
          <animated.div style={tgsIntroStyle}>
            <Message
              text={<TGTText />}
              encrypted={true}
              tooltipText={TGTTooltipText}
              from="TGS"
              to="Client"
            />
          </animated.div>
          <animated.div style={messageIntroStyle}>
            <Message
              text={<FirstMessageText />}
              encrypted={false}
              tooltipText={firstMessageTooltipText}
              from="Client"
              to="TGS"
            />
          </animated.div>
          <animated.div style={secondMessageIntroStyle}>
            <Message
              text={<SecondMessageText />}
              encrypted={true}
              tooltipText={secondMessageTooltipText}
              from="Client"
              to="TGS"
            />
          </animated.div>
          <animated.div style={serviceTicketIntroStyle}>
            <Message
              text={<ServiceTicketText />}
              encrypted={true}
              tooltipText={ServiceTicketTooltipText}
              from="Client"
              to="TGS"
            />
          </animated.div>

          {/* <animated.div style={response1Intro}>
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
          </animated.div> */}
        </div>
      </>
    );
  };
  return <MainContainer />;
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
  right: "7.5%",
};

const backActionButtonStyle = {
  position: "fixed",
  bottom: "10%",
  right: "12.5%",
};

const helpActionButtonStyle = {
  position: "fixed",
  bottom: "10%",
  right: "2.5%",
};

export default SecondMessage;
