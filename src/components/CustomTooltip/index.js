import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default CustomTooltip;