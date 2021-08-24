import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import InfoIcon from "@material-ui/icons/Info";
import FastForwardIcon from "@material-ui/icons/FastForward";
import CustomTooltip from "../CustomTooltip";
import { useHistory } from "react-router-dom";

const VerticalNavBar = ({
  stepCounter,
  setStepCounter,
  openHelp,
  nextPage,
  totalSteps,
  final,
  openNavigationModal,
}) => {
  const history = useHistory();
  const nextPageLogic = () => {
    if (final) openNavigationModal();
    else history.push(nextPage);
  };
  return (
    <div
      style={{
        backgroundColor: "lavender",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "fixed",
        top: "50%",
        right: "2.5%",
        transform: "translate(0%, -50%)",
        borderRadius: "10px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <CustomTooltip
        title={<Typography variant="body1">Step before</Typography>}
      >
        <Button
          onClick={() => {
            if (stepCounter > 0) setStepCounter(stepCounter - 1);
          }}
        >
          <ArrowLeftIcon
            style={{
              color: "lightslategrey",
            }}
          />
        </Button>
      </CustomTooltip>
      <CustomTooltip title={<Typography variant="body1">Step over</Typography>}>
        <Button
          onClick={() => {
            if (stepCounter < totalSteps - 1) setStepCounter(stepCounter + 1);
          }}
        >
          <ArrowRightIcon style={{ color: "lightslategrey" }} />
        </Button>
      </CustomTooltip>
      <CustomTooltip
        title={
          <Typography variant="body1">More details about this page</Typography>
        }
      >
        <Button onClick={() => openHelp()} style={{ color: "lightslategrey" }}>
          <InfoIcon />
        </Button>
      </CustomTooltip>
      <CustomTooltip title={<Typography variant="body1">Next page</Typography>}>
        <Button
          onClick={() => nextPageLogic()}
          style={{ color: "lightslategrey" }}
        >
          <FastForwardIcon />
        </Button>
      </CustomTooltip>
      <Button style={{ color: "lightslategrey" }}>
        {stepCounter + 1}/{totalSteps}
      </Button>
    </div>
  );
};

export default VerticalNavBar;
