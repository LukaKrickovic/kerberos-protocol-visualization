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
          The first message is a simple plain text request, containing the
          service name or ID and the requested ticket lifetime, so that kerberos
          knows which keys to use going forward.
        </Typography>
        <Typography variant="body1">
          Once the ticket granting service recieves the three messages, first it
          checks the internal service registry to find if the client is
          attempting to acces a legitimate service. If so, the TGS grabs their
          secret key for later encryption. Afterwards, the{" "}
          <em>Ticket granting ticket</em> is decrypted using the{" "}
          <em>TGS secret key</em>, so now the TGS can encrypt and send messages
          back to the user.
        </Typography>
        <Typography variant="body1">
          Next up, the TGS validates the data recieved (ie. the usernames and
          timestamps). If all the data proves to be correct, the TGS stores the
          user authenticator message in its cache, which is a key step in
          protecting against replay attacks.
        </Typography>
        <Typography variant="body1">
          Once the TGS has everything wrapped up on its end, it creates two new
          messages. The first one contains metadata on the service the user is
          attempting to acces (the service name or id, the timestamp and the
          lifetime of the connection). The second message is also known as the{" "}
          <em>Service ticket</em>, as it provides the service with the
          information neccessary for further communication with the client. The
          key part to both messages is the <em>Service session key</em>,
          generated randomly. The first message is meant for the client and is
          encrypted with the <em>TGS session key</em> (which the client already
          has), while the second message can only be read by the service the
          client wants to access. This means that the service ticket is
          encrypted using the <em>Service secret key</em>.
        </Typography>
      </Paper>
    </div>
  );
};

export default Help;
