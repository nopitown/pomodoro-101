import React from "react";

const Controls = ({ onPlay, onPause, onReset, status }) => {
  const handleClickPlayOrPause = () => {
    if (status === "idle" || status === "paused") {
      onPlay();
    } else {
      onPause();
    }
  };

  return (
    <div>
      <button onClick={handleClickPlayOrPause}>
        {status === "idle" || status === "paused" ? "Play" : "Pause"}
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
