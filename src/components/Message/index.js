import { Button, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import encrypt from "../../helpers/encryption/aes";
import CustomTooltip from "../CustomTooltip";
import LockIcon from "@material-ui/icons/Lock";
import Lock from "@material-ui/icons/Lock";

const Message = ({
  encrypted = false,
  text,
  tooltipText = "No available tooltip",
  from,
  to,
  encryptedWith,
}) => {
  const [currentlyEncrypted, setCurrentlyEncrypted] = useState(false);
  const [encryptedText, setEncryptedText] = useState("");
  const renderButtonText = () => (currentlyEncrypted ? "Decrypt" : "Encrypt");
  const handleEncrypt = () => {
    const isEncrypted = !currentlyEncrypted;
    setCurrentlyEncrypted(isEncrypted);
    if (encryptedText === "") {
      setEncryptedText(encrypt);
    }
  };

  const renderText = () =>
    currentlyEncrypted ? (
      <Typography variant="body1" style={{ overflowWrap: "break-word" }}>
        <b>{encryptedText}</b>
      </Typography>
    ) : (
      text
    );

  const renderFromTo = () => `From: ${from}, To: ${to}`;

  const renderLockDiv = () => (encrypted ? "flex" : "none");

  return (
    <div
      style={{
        height: "300px",
        width: "300px",
      }}
    >
      <CustomTooltip
        title={
          <Typography variant="body1">
            This message was encrypted using the <u>{encryptedWith}</u>
          </Typography>
        }
        placement="top"
      >
        <div
          style={{
            // background: "rgb(41,35,148)",
            background:
              "linear-gradient(90deg, rgba(41,35,148,1) 0%, rgba(221,221,222,1) 0%, rgba(161,159,197,1) 0%, rgba(0,91,110,1) 100%)",
            width: "100%",
            height: "10%",
            borderRadius: "5px",
            display: renderLockDiv(),
            justifyContent: "center",
          }}
        >
          <Lock
            style={{ color: "white", marginTop: "auto", marginBottom: "auto" }}
          />{" "}
          &nbsp;
          <Typography
            variant="body1"
            style={{ color: "white", marginTop: "auto", marginBottom: "auto" }}
          >
            <b>{encryptedWith}</b>
          </Typography>
        </div>
      </CustomTooltip>
      <CustomTooltip
        title={
          <React.Fragment>
            <Typography variant="body1">{tooltipText}</Typography>
          </React.Fragment>
        }
      >
        <Paper elevation={3} style={{ padding: "5%" }}>
          <Typography
            variant="caption"
            style={{ color: "steelblue" }}
            gutterBottom
          >
            {renderFromTo()}
          </Typography>
          {renderText()}

          <br />
          {encrypted ? (
            <Button
              variant="text"
              style={{ color: "steelblue" }}
              onClick={() => {
                handleEncrypt();
              }}
            >
              {renderButtonText()}
            </Button>
          ) : (
            <Typography
              variant="caption"
              style={{ opacity: "0.9", color: "steelblue" }}
            >
              This message is in plain text!
            </Typography>
          )}
        </Paper>
      </CustomTooltip>
    </div>
  );
};

export default Message;
