import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import NavigationCard from "../../components/NavigationCard";
import IMAGE_ROUTES from "../../helpers/images/imageRoutes";
import pageRoutes from "../../pageroutes";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";

const LandingPage = () => {
  const fadeInPeriod = 1000;
  const history = useHistory();
  const startTooltipText = "Start the visualization.";
  const fadeInStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: fadeInPeriod,
  });

  return (
    <div>
      <Typography
        variant="h3"
        style={{
          position: "absolute",
          left: "50%",
          top: "5%",
          transform: "translate(-50%, 0)",
        }}
      >
        Kerberos Protocol Visualization
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10%",
        }}
      >
        <animated.div style={fadeInStyle}>
          <NavigationCard
            title="Start visualization"
            navigateTo={pageRoutes.START}
            history={history}
            tooltipText={startTooltipText}
            cardMediaSource={IMAGE_ROUTES.START_VISUALIZATION}
          />
        </animated.div>
      </div>
    </div>
  );
};

export default LandingPage;
