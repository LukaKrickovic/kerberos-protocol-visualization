import React, { useState } from "react";
import FirstMessage from "./messages/firstMessage";
import Title from "./Title";

const Basics = () => {
  const [firstMessageStarted, setFirstMessageStarted] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Title
        startFirstMessage={() => {
          setFirstMessageStarted(true);
        }}
      ></Title>
      <FirstMessage started={firstMessageStarted}></FirstMessage>
    </div>
  );
};

export default Basics;
