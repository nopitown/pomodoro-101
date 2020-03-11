import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const ONE_SECOND = 1000; // milliseconds
const ONE_MINUTE = 60 * ONE_SECOND;
const DEFAULT_LENGTH = ONE_MINUTE * 25;

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(DEFAULT_LENGTH);

  useEffect(() => {
    const updateTimer = setTimeout(() => {
      if (currentTime !== 0) {
        setCurrentTime(currentTime - ONE_SECOND);
      }
    }, ONE_SECOND);

    return () => clearTimeout(updateTimer);
  }, [currentTime]);

  return (
    <div>
      <h3>Session</h3>
      <p>{format(currentTime, "mm:ss")}</p>
    </div>
  );
};

export default Timer;
