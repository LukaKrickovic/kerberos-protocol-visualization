import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "ghostwhite",
        color: "lightslategrey",
        position: "absolute",
        //   bottom: "0%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1">
        <a
          href="https://github.com/LukaKrickovic"
          style={{ color: "lightslategrey", textDecoration: "none" }}
        >
          Luka Kričković
        </a>
        , 2021. Images provided by &nbsp;
        <a
          href="https://www.flaticon.com/"
          style={{ color: "lightslategrey", textDecoration: "none" }}
        >
          flaticon.com
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
