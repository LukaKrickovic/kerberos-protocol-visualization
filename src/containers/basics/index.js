import React, { useState } from "react";
import Title from "./Title";
import FirstMessage from "./messages/firstMessage";

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
      {/*{firstMessageStarted && ( */}
      <FirstMessage started={firstMessageStarted}></FirstMessage>
      {/* )} */}
    </div>
  );
};

export default Basics;
