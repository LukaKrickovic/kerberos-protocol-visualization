import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import InfoIcon from "@material-ui/icons/Info";
import CustomTooltip from "../CustomTooltip";

const NavigationBar = ({ stepCounter, setStepCounter, openHelp }) => {
  return (
    <div
      style={{
        backgroundColor: "lavender",
        display: "inline-flex",
        justifyContent: "center",
        width: "18%",
        position: "fixed",
        bottom: "5%",
        left: "50%",
        transform: "translate(-50%, 0)",
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
            setStepCounter(stepCounter - 1);
          }}
          disabled={() => stepCounter < 0}
        >
          <ArrowLeftIcon style={{ color: "lightslategrey" }} />
        </Button>
      </CustomTooltip>
      <CustomTooltip title={<Typography variant="body1">Step over</Typography>}>
        <Button
          onClick={() => {
            setStepCounter(stepCounter + 1);
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
    </div>
  );
};

export default NavigationBar;
