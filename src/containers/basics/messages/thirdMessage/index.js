import { Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import CustomTooltip from "../../../../components/CustomTooltip";
import Key from "../../../../components/Key";
import Message from "../../../../components/Message";
import VerticalNavBar from "../../../../components/NavigationBar/VerticalNavBar";
import IMAGE_ROUTES from "../../../../helpers/images/imageRoutes";
import pageRoutes from "../../../../pageroutes";
import ANIMATIONS from "./animations";
import Help from "./Help";

const ThirdMessage = () => {
  const [isHelpOpen, setHelpOpen] = useState(false);
  const [stepCounter, setStepCounter] = useState(0);
  const [serviceTicketVisible, setServiceTicketVisible] = useState(true);
  const [userAuthenticatorVisible, setUserAuthenticatorVisible] =
    useState(false);
  const [serviceAuthenticatorVisible, setServiceAuthenticatorVisible] =
    useState(false);

  const updateStepCounter = (value) => {
    setStepCounter(value);
    switch (value) {
      case 0:
        setServiceTicketVisible(true);
        setUserAuthenticatorVisible(false);
        setServiceAuthenticatorVisible(false);
        break;
      case 1:
        setUserAuthenticatorVisible(true);
        setServiceAuthenticatorVisible(false);
        break;
      default:
        setServiceAuthenticatorVisible(true);
        break;
    }
  };
  const {
    fadeIn,
    serviceTicketIntro,
    userAuthenticatorIntro,
    serviceAuthenticatorIntro,
  } = ANIMATIONS;

  const fadeInStyle = useSpring(fadeIn);

  const MainContainer = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "10%",
    };

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

    const AnimatedServiceTicket = () => {
      const serviceTicketIntroStyle = useSpring(serviceTicketIntro);

      return (
        <animated.div style={serviceTicketIntroStyle}>
          <Message
            text={<ServiceTicketText />}
            encrypted={true}
            tooltipText={ServiceTicketTooltipText}
            from="Client"
            to="Service"
            encryptedWith="Service secret key"
          />
        </animated.div>
      );
    };

    const UserAuthenticatorText = () => (
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

    const UserAuthenticatorTooltipText =
      "This message is the user authenticator, which is used by the service to recognize which user is connecting to it (similar to subjects in JWTs).";

    const AnimatedUserAuthenticator = () => {
      const userAuthenticatorIntroStyle = useSpring(userAuthenticatorIntro);

      return (
        <animated.div style={userAuthenticatorIntroStyle}>
          <Message
            text={<UserAuthenticatorText />}
            encrypted={true}
            tooltipText={UserAuthenticatorTooltipText}
            from="Client"
            to="Service"
            encryptedWith="Service session key"
          />
        </animated.div>
      );
    };

    const ServiceAuthenticatorText = () => (
      <>
        <Typography variant="body1">
          <b>Attributes</b>
          <br />
          <b>Service name/ID</b>&nbsp;&nbsp;
          <em>ie. Message serviceStyle</em>
          <br />
          <b>Timestamp</b>&nbsp;&nbsp;
        </Typography>
      </>
    );

    const ServiceAuthenticatorTooltipText =
      "This message is the service authenticator, used to authenticate the service to the user, thus providing all important mutual authentication.";

    const AnimatedServiceAuthenticator = () => {
      const serviceAuthenticatorIntroStyle = useSpring(
        serviceAuthenticatorIntro
      );

      return (
        <animated.div style={serviceAuthenticatorIntroStyle}>
          <Message
            text={<ServiceAuthenticatorText />}
            encrypted={true}
            tooltipText={ServiceAuthenticatorTooltipText}
            from="Service"
            to="Client"
            encryptedWith="Service session key"
          />
        </animated.div>
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
          nextPage={pageRoutes.SECOND_STEP}
          totalSteps={3}
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
            The third step
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
              &nbsp;Service
            </Typography>
            <CustomTooltip
              title={<Typography variant="body1">The service</Typography>}
            >
              <img
                src={IMAGE_ROUTES.SERVER}
                alt="The service the client attempted to connect to"
                style={serviceStyle}
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
          {serviceTicketVisible && <AnimatedServiceTicket />}
          {userAuthenticatorVisible && <AnimatedUserAuthenticator />}
          {serviceAuthenticatorVisible && <AnimatedServiceAuthenticator />}
        </div>
      </>
    );
  };
  return <MainContainer />;
};

const clientStyle = {
  height: "150px",
};

const serviceStyle = {
  height: "140px",
};

export default ThirdMessage;
