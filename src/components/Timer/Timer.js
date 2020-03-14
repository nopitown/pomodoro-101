import React from "react";
import { format } from "date-fns";

const Timer = ({ currentTime }) => {
  return (
    <div>
      <h3 className="text-center text-xl">Session</h3>
      <p className="text-center">{format(currentTime, "mm:ss")}</p>
    </div>
  );
};

export default Timer;
