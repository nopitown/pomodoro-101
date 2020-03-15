import React, { useEffect, useState } from "react";

import Timer from "../Timer";
import Controls from "../Controls";
import useTimerControls from "../../hooks/useTimerControls";

import styles from "./styles.module.css";

const ONE_SECOND = 1000; // milliseconds
const ONE_MINUTE = 60 * ONE_SECOND;
const DEFAULT_LENGTH = ONE_MINUTE * 25;

function App() {
  const [currentTime, setCurrentTime] = useState(DEFAULT_LENGTH);
  const { status, play, pause, reset } = useTimerControls();

  useEffect(() => {
    if (status === "started") {
      const updateTimer = setTimeout(() => {
        if (currentTime !== 0) {
          setCurrentTime(currentTime - ONE_SECOND);
        }
      }, ONE_SECOND);
      return () => clearTimeout(updateTimer);
    }

    if (status === "idle") {
      setCurrentTime(DEFAULT_LENGTH);
    }
  }, [currentTime, status]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Pomodoro Timer</h1>
      <main>
        <Timer currentTime={currentTime} />
        <Controls
          onPlay={play}
          onPause={pause}
          onReset={reset}
          status={status}
        />
      </main>
    </div>
  );
}

export default App;
