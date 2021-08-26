import { Modal, Typography } from "@material-ui/core";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import Key from "../../../../components/Key";
import ANIMATIONS from "./animations";
import Message from "../../../../components/Message";
import Help from "./Help";
import VerticalNavBar from "../../../../components/NavigationBar/VerticalNavBar";
import pageRoutes from "../../../../pageroutes";
import CustomTooltip from "../../../../components/CustomTooltip";
import IMAGE_ROUTES from "../../../../helpers/images/imageRoutes";
import LanguageSelect from "../../../../components/LanguageSelect";

const FirstMessage = () => {
  const [firstMessageVisible, setFirstMessageVisible] = useState(true);
  const [firstResponseVisible, setFirstResponseVisible] = useState(false);
  const [tgtVisible, setTgtVisible] = useState(false);
  const [stepCounter, setStepCounter] = useState(0);
  const [isHelpOpen, setHelpOpen] = useState(false);

  const updateStepCounter = (value) => {
    setStepCounter(value);
    switch (value) {
      case 0:
        setFirstMessageVisible(true);
        setFirstResponseVisible(false);
        setTgtVisible(false);
        break;
      case 1:
        setFirstResponseVisible(true);
        setTgtVisible(false);
        break;
      default:
        setTgtVisible(true);
        break;
    }
  };

  const { fadeIn, firstMessageIntro, firstResponseIntro, tgtIntro } =
    ANIMATIONS;

  const fadeInStyle = useSpring(fadeIn);

  const MainContainer = () => {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: "15%",
    };
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

    const firstMessageTooltipText = `The client sends this message to authenticate itself.`;

    const FirstResponseText = () => (
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
          <Key name="TGS session key" />
        </Typography>
      </>
    );

    const FirstResponseTooltipText = `Only the client can read this message as it's encrypted using a key derived from the clients password.`;

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

    const TGTTooltipText = `This is the Ticket granting ticket! It provides the Ticket Granting service with the session key it needs to communicate with the client securely.`;

    const AnimatedFirstMessage = () => {
      const firstMessageIntroStyle = useSpring(firstMessageIntro);

      return (
        <animated.div style={firstMessageIntroStyle}>
          <Message
            text={<FirstMessageText />}
            encrypted={false}
            tooltipText={firstMessageTooltipText}
            from="Client"
            to="Authentication service"
          />
        </animated.div>
      );
    };

    const AnimatedFirstResponse = () => {
      const firstResponseIntroStyle = useSpring(firstResponseIntro);

      return (
        <animated.div style={firstResponseIntroStyle}>
          <Message
            text={<FirstResponseText />}
            encrypted={true}
            tooltipText={FirstResponseTooltipText}
            to="Client"
            from="Authentication service"
            encryptedWith="Client password derived key"
          />
        </animated.div>
      );
    };

    const AnimatedTGT = () => {
      const tgtIntroStyle = useSpring(tgtIntro);

      return (
        <animated.div style={tgtIntroStyle}>
          <Message
            text={<TGTText />}
            encrypted={true}
            tooltipText={TGTTooltipText}
            to="Client"
            from="Authentication service"
            encryptedWith="TGS secret key"
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
          final={false}
        />
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
              Auth service
            </Typography>
            <CustomTooltip
              title={
                <Typography variant="body1">
                  The authentication service
                </Typography>
              }
            >
              <img
                src={IMAGE_ROUTES.AUTHENTICATION}
                alt="The authentication service"
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
          {firstMessageVisible && <AnimatedFirstMessage />}
          {firstResponseVisible && <AnimatedFirstResponse />}
          {tgtVisible && <AnimatedTGT />}
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

export default FirstMessage;
