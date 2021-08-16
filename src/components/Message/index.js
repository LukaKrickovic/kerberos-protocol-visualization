import { Button, Paper, Tooltip, Typography } from "@material-ui/core";
import React, { useState } from "react";
import encrypt from "../../helpers/encryption/aes";
import CustomTooltip from "../CustomTooltip";

const Message = ({
  encrypted = false,
  text,
  tooltipText = "No available tooltip",
}) => {
  const [currentlyEncrypted, setCurrentlyEncrypted] = useState(false);
  const [encryptedText, setEncryptedText] = useState("");
  const renderButtonText = () => (currentlyEncrypted ? "Decrypt" : "Encrypt");
  const handleEncrypt = () => {
    const isEncrypted = !currentlyEncrypted;
    setCurrentlyEncrypted(isEncrypted);
    if (encryptedText == "") {
      setEncryptedText(encrypt);
    }
  };

  const renderText = () => (currentlyEncrypted ? encryptedText : text);

  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // flexDirection: "column",
        height: "300px",
        width: "300px",
      }}
    >
      {/* <Tooltip
        title={tooltipText}
        placement="top"
        style={{ backgroundColor: "lightblue" }}
      > */}
      <CustomTooltip title={<React.Fragment>{tooltipText}</React.Fragment>}>
        <Paper elevation={3} style={{ padding: "5%" }}>
          <Typography variant="body1" style={{ overflowWrap: "break-word" }}>
            {renderText()}
          </Typography>
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
            <Typography variant="caption" style={{ opacity: "0.9" }}>
              This message is in plain text!
            </Typography>
          )}
        </Paper>
      </CustomTooltip>
      {/* </Tooltip> */}
    </div>
  );
};

export default Message;
