import React, { useState } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  const timeHandler = () => {
    const ct = new Date().toLocaleTimeString();
    setTime(ct);
  };

  setInterval(() => {
    timeHandler();
  }, 1000);
  return (
    <div className="timer">
      <h1>{time}</h1>
      {/* <button onClick={timeHandler}>Get Time</button> */}
    </div>
  );
};

export default Time;
