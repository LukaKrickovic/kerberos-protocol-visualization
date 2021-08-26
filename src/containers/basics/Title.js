import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Typography } from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";

const Title = ({ startFirstMessage }) => {
  const [started, setStarted] = useState(true);
  const { t, i18n } = useTranslation();

  const title = () => (
    <Trans i18nKey="firstPage.title">Kerberos protocol visualization</Trans>
  );
  const AnimatedTitle = () => {
    const titleSpring = useSpring({
      from: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      },
      to: {
        position: "absolute",
        left: "50%",
        top: "5%",
        transform: "translate(-50%, 0%)",
        textAlign: "center",
        color: "steelblue",
      },
      config: {
        // duration: 300,
      },
    });

    return (
      <animated.div style={titleSpring}>
        <Typography variant="h2">
          {/* <Trans>{title}</Trans> */}
          {title()}
        </Typography>
      </animated.div>
    );
  };

  const AnimatedButton = () => {
    return (
      <Button
        variant="text"
        style={{
          position: "absolute",
          left: "50%",
          top: "70%",
          transform: "translate(-50%, 50%)",
          color: "steelblue",
        }}
        onClick={() => {
          setStarted(true);
          startFirstMessage();
        }}
      >
        Start
      </Button>
    );
  };

  const renderTitle = () => {
    return started ? (
      <AnimatedTitle key={started} />
    ) : (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          textAlign: "center",
          transform: "translate(-50%, 0%)",
        }}
      >
        <Typography variant="h2">{title()}</Typography>
        <div style={{ marginTop: "10%" }}>
          <AnimatedButton key={started} />
        </div>
      </div>
    );
  };

  return renderTitle();
};

export default Title;
