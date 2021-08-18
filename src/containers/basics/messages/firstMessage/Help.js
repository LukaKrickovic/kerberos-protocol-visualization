import { Paper, Typography } from "@material-ui/core";
import React from "react";

const Help = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 5%)",
        width: "50%",
      }}
    >
      <Paper style={{ padding: "10%", overflowY: "auto" }}>
        <Typography variant="h3">Explanation</Typography>
        <br />
        <Typography variant="body1">
          The first message is sent from the user to the authentication service
          in order for the user (client) to attempt at authenticating
          his/herself. The message is in plain text as no session key was
          established yet,{" "}
          <em>
            keep in mind that we do not want to exchange passwords and keys!
          </em>
        </Typography>
        <Typography variant="body1">
          If the authentication service sees the user in it's registry, the
          following two messages are sent.
        </Typography>
        <Typography variant="body1">
          The second message is encrypted with a key derived from the users
          password. Remember, <em>no password exchange happened!</em> Only the
          user can decrypt the second message, and through decrypting it the
          client obtains the TGS session key, which is used for encrypting
          messsages sent to the Ticket Granting service. Again,{" "}
          <em>no key exchange happened</em>, since the key was sent through an
          encrypted message. In order to decrypt the message, the client enters
          their password, after which kerberos adds salt to it (usually
          something like @realmname.com - a realm is the set of entities, aka
          principals, that belong to one kerberos system) and adds a kvno - a
          key version number. Then a string to key hashing function is applied
          to the salted password and out comes the usable client key!
        </Typography>
        <Typography variant="body1">
          Finally, the third message will not be decrypted yet, its sole
          purpouse is to be forwarded to the Ticket Granting service - hence the
          name "Ticket Granting Ticket". Only the TGS can read the message as it
          is encrypted using the TGS secret key. The key part of the message is
          the TGS session key which it can now use to communicate with the
          client safely.
        </Typography>
      </Paper>
    </div>
  );
};

export default Help;
