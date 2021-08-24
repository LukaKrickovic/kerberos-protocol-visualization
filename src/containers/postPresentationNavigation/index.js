import React from "react";
import { useHistory } from "react-router-dom";
import NavigationCard from "../../components/NavigationCard";
import IMAGE_ROUTES from "../../helpers/images/imageRoutes";
import pageRoutes from "../../pageroutes";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { Paper, Typography } from "@material-ui/core";

const PostPresentationNavigation = () => {
  const history = useHistory();

  const fadeInStyle = useSpring({
    from: { opacity: 0, marginTop: "0%" },
    to: {
      opacity: 1,
      marginTop: "2%",
    },
    config: { duration: 500 },
  });

  const restartTooltipText = "Restart the visualization from the first step.";
  const homeTooltipText = "Go back to the home screen.";

  return (
    <Paper
      style={{
        backgroundColor: "ghostwhite",
        width: "70%",
        position: "absolute",
        left: "50%",
        top: "10%",
        height: "80%",
        transform: "translate(-50%, 0)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <animated.div style={fadeInStyle}>
          <NavigationCard
            title="Restart visualization"
            navigateTo={pageRoutes.START}
            history={history}
            tooltipText={restartTooltipText}
            cardMediaSource={IMAGE_ROUTES.RESTART_VISUALIZATION}
          />
        </animated.div>
        <animated.div style={fadeInStyle}>
          <NavigationCard
            title="Home"
            navigateTo={pageRoutes.HOME}
            history={history}
            tooltipText={homeTooltipText}
            cardMediaSource={IMAGE_ROUTES.HOME}
          />
        </animated.div>
      </div>
      <Typography
        variant="h3"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 100%)",
        }}
      >
        Where to next?
      </Typography>
    </Paper>
  );
};

export default PostPresentationNavigation;
