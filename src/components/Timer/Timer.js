import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Timer = ({ currentTime }) => {
  return (
    <div>
      <h3>Session</h3>
      <p>{format(currentTime, "mm:ss")}</p>
    </div>
  );
};

export default Timer;
