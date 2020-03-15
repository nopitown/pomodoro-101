import React from "react";

import styles from "./styles.module.css";

const ControlButton = ({ className, onClick, children }) => {
  return (
    <button className={styles.controlButton} onClick={onClick}>
      {children}
    </button>
  );
};

const Controls = ({ onPlay, onPause, onReset, status }) => {
  const handleClickPlayOrPause = () => {
    if (status === "idle" || status === "paused") {
      onPlay();
    } else {
      onPause();
    }
  };

  return (
    <div className={styles.controls}>
      <ControlButton onClick={handleClickPlayOrPause}>
        {status === "idle" || status === "paused" ? "Play" : "Pause"}
      </ControlButton>
      <ControlButton onClick={onReset}>Reset</ControlButton>
    </div>
  );
};

export default Controls;
