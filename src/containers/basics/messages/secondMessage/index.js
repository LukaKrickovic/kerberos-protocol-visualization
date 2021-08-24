import { Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CustomTooltip from "../../../../components/CustomTooltip";
import Message from "../../../../components/Message";
import Help from "./Help";
import ANIMATIONS from "./animations";
import IMAGE_ROUTES from "../../../../helpers/images/imageRoutes";
import pageRoutes from "../../../../pageroutes";
import VerticalNavBar from "../../../../components/NavigationBar/VerticalNavBar";
import Key from "../../../../components/Key";

const SecondMessage = () => {
  const [isHelpOpen, setHelpOpen] = useState(false);
  const [stepCounter, setStepCounter] = useState(0);
  const [tgtVisible, setTgtVisible] = useState(true);
  const [firstMessageVisible, setFirstMessageVisible] = useState(false);
  const [secondMessageVisible, setSecondMessageVisible] = useState(false);
  const [cacheVisible, setCacheVisible] = useState(false);
  const [serviceTicketVisible, setServiceTicketVisible] = useState(false);
  const [secondResponseVisible, setSecondResponseVisible] = useState(false);

  const updateStepCounter = (value) => {
    setStepCounter(value);
    switch (value) {
      case 0:
        setTgtVisible(true);
        setFirstMessageVisible(false);
        setSecondMessageVisible(false);
        setCacheVisible(false);
        setServiceTicketVisible(false);
        setSecondResponseVisible(false);
        break;
      case 1:
        setFirstMessageVisible(true);
        setSecondMessageVisible(false);
        setCacheVisible(false);
        setServiceTicketVisible(false);
        setSecondResponseVisible(false);
        break;
      case 2:
        setSecondMessageVisible(true);
        setServiceTicketVisible(false);
        setCacheVisible(false);
        setSecondResponseVisible(false);
        break;
      case 3:
        setCacheVisible(true);
        setServiceTicketVisible(false);
        setSecondResponseVisible(false);
        break;
      case 4:
        setServiceTicketVisible(true);
        setSecondResponseVisible(false);
        break;
      default:
        setSecondResponseVisible(true);
        break;
    }
  };

  const {
    fadeIn,
    messageIntro,
    secondMessageIntro,
    tgsIntro,
    serviceTicketIntro,
    secondResponseIntro,
    cacheIntro,
  } = ANIMATIONS;

  const fadeInStyle = useSpring(fadeIn);

  const MainContainer = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "10%",
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
          <Key name="Service session key" />
        </Typography>
      </>
    );

    const ServiceTicketTooltipText =
      "This message is the service ticket, which holds the service session key and the user and service metadata.";

    const SecondResponseText = () => (
      <>
        <Typography variant="body1">
          <b>Attributes</b>
          <br />
          <b>Service name/ID</b>&nbsp;&nbsp;
          <em>ie. Message service</em>
          <br />
          <b>Timestamp</b>&nbsp;&nbsp;
          <br />
          <b>Lifetime</b>
          <br />
          <Key name="Service session key" />
        </Typography>
      </>
    );

    const SecondResponseTooltipText =
      "This message is carryig the service session key, so that the client can encrypt their messages for the requested service. This also allows the service to authenticate the user - if the session key is correct, the message will be decryptable and the user must be authenticated by the Authentication service and the TGS.";

    const AnimatedTGT = () => {
      const tgsIntroStyle = useSpring(tgsIntro);

      return (
        <animated.div style={tgsIntroStyle}>
          <Message
            text={<TGTText />}
            encrypted={true}
            tooltipText={TGTTooltipText}
            from="TGS"
            to="Client"
            encryptedWith="TGS secret key"
          />
        </animated.div>
      );
    };

    const AnimatedFirstMessage = () => {
      const messageIntroStyle = useSpring(messageIntro);

      return (
        <animated.div style={messageIntroStyle}>
          <Message
            text={<FirstMessageText />}
            encrypted={false}
            tooltipText={firstMessageTooltipText}
            from="Client"
            to="TGS"
          />
        </animated.div>
      );
    };

    const AnimatedSecondMessage = () => {
      const secondMessageIntroStyle = useSpring(secondMessageIntro);

      return (
        <animated.div style={secondMessageIntroStyle}>
          <Message
            text={<SecondMessageText />}
            encrypted={true}
            tooltipText={secondMessageTooltipText}
            from="Client"
            to="TGS"
            encryptedWith="TGS session key"
          />
        </animated.div>
      );
    };

    const AnimatedServiceTicket = () => {
      const serviceTicketIntroStyle = useSpring(serviceTicketIntro);

      return (
        <animated.div style={serviceTicketIntroStyle}>
          <Message
            text={<ServiceTicketText />}
            encrypted={true}
            tooltipText={ServiceTicketTooltipText}
            from="Client"
            to="TGS"
            encryptedWith="Service secret key"
          />
        </animated.div>
      );
    };

    const AnimatedSecondResponse = () => {
      const secondResponseIntroStyle = useSpring(secondResponseIntro);

      return (
        <animated.div style={secondResponseIntroStyle}>
          <Message
            text={<SecondResponseText />}
            encrypted={true}
            tooltipText={SecondResponseTooltipText}
            from="Client"
            to="TGS"
            encryptedWith="TGS session key"
          />
        </animated.div>
      );
    };

    const AnimatedCacheMark = () => {
      const cacheIntroStyle = useSpring(cacheIntro);
      const tooltipMessage = "This message is cached";

      return (
        <CustomTooltip
          title={
            <Typography variant="body1">
              {tooltipMessage} to prevent replay attacks.
            </Typography>
          }
        >
          <animated.div style={cacheIntroStyle}>
            <img
              src={IMAGE_ROUTES.DATABASE}
              alt={tooltipMessage}
              style={{ height: "100px" }}
            />
          </animated.div>
        </CustomTooltip>
      );
    };

    return (
      <>
        <Modal open={isHelpOpen} onClose={() => setHelpOpen(false)}>
          <Help />
        </Modal>

        <VerticalNavBar
          stepCounter={stepCounter}
          setStepCounter={updateStepCounter}
          openHelp={() => setHelpOpen(true)}
          nextPage={pageRoutes.THIRD_STEP}
          totalSteps={6}
          final={false}
        />

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
            <Typography
              variant="h4"
              style={{ color: "steelblue" }}
              gutterBottom
            >
              The client
            </Typography>
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
            <Typography
              variant="h4"
              style={{ color: "steelblue" }}
              gutterBottom
            >
              The TGS
            </Typography>
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
          {tgtVisible && <AnimatedTGT />}
          {firstMessageVisible && <AnimatedFirstMessage />}
          {secondMessageVisible && <AnimatedSecondMessage />}
          {cacheVisible && <AnimatedCacheMark />}
          {serviceTicketVisible && <AnimatedServiceTicket />}
          {secondResponseVisible && <AnimatedSecondResponse />}
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

export default SecondMessage;
