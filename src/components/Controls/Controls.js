import React from "react";

const Controls = ({ onPlay, onReset }) => {
  return (
    <div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
