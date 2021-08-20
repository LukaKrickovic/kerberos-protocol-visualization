import React from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Typography } from "@material-ui/core";
import CustomTooltip from "../CustomTooltip";

const Key = ({ name }) => {
  return (
    <CustomTooltip
      title={
        <Typography variant="body2">
          ie. <em>{process.env.REACT_APP_MOCK_SECRET_KEY}</em>
        </Typography>
      }
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(41,35,148,1) 0%, rgba(221,221,222,1) 0%, rgba(161,159,197,1) 0%, rgba(0,91,110,1) 100%)",
          borderRadius: "10px",
          color: "white",
          display: "inline-flex",
          padding: "2%",
          marginTop: "2%",
        }}
      >
        <VpnKeyIcon style={{ color: "white" }} />
        &nbsp;
        <Typography variant="body1">
          <b>{name}</b>
        </Typography>
      </div>
    </CustomTooltip>
  );
};

export default Key;
