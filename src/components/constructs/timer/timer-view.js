import React, { useState, useEffect } from "react";

import { Counter } from "./timer-style.js";

const Timer = ({ seconds }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    setTime(seconds);
  }, [seconds]);

  return <Counter>Time: {time}</Counter>;
};

export default Timer;
