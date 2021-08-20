import { Paper, Typography } from "@material-ui/core";
import React from "react";

const Help = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 2.5%)",
        width: "50%",
      }}
    >
      <Paper style={{ padding: "10%", paddingBottom: "5%", overflowY: "auto" }}>
        <Typography variant="h3">Explanation</Typography>
        <br />
        <Typography variant="body1">
          The service ticket is forwarded from the previous step. The user
          authenticator message is there to povide user data from the client to
          the service. The service can not read this message at first, since it
          does not have the <em>Service session key</em> yet.
        </Typography>
        <Typography variant="body1">
          Once the service recieves the <em>Service ticket</em>, it decrypts the
          ticket using its secret key. Once decrypted, the service has access to
          the session key needed to continue communicating with the client.
        </Typography>
        <Typography variant="body1">
          Next up, the service performs validations, like timestamp comparisons
          (typically two minute differences are tolerated) and username
          validations and comparisons. If all the data checks out, the service
          generates the <em>Service authenticator message</em>. This message
          contains data about the service and is encrypted with the{" "}
          <em>Service session key</em>, so that the client knows it is the real
          service and not a fake one attackers may use. This is also known as{" "}
          <em>mutual authentication</em> - the client knows it is talking to the
          correct service and the service knows it is talking to the correct
          client!
        </Typography>
        <Typography variant="body1">
          The client and the service can now continue talking freely and
          securely, until the service session key expires, when either the
          entire process, or at least the last two steps of the process are
          repeated.
        </Typography>
      </Paper>
    </div>
  );
};

export default Help;
