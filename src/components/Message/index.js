import { Button, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import encrypt from "../../helpers/encryption/aes";
import CustomTooltip from "../CustomTooltip";

const Message = ({
  encrypted = false,
  text,
  tooltipText = "No available tooltip",
  from,
  to,
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

  return (
    <div
      style={{
        height: "300px",
        width: "300px",
      }}
    >
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
