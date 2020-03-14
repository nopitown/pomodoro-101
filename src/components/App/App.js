import React, { useEffect, useState } from "react";

import Timer from "../Timer";
import Controls from "../Controls";
import useTimerControls from "../../hooks/useTimerControls";

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
    <div className="flex flex-col items-center">
      <main className="max-w-screen-sm">
        <h1 className="text-3xl mb-1 text-center">Pomodoro Timer</h1>
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
