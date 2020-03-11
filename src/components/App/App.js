import React, { useEffect, useState } from "react";
import Timer from "../Timer";
import Controls from "../Controls";

const ONE_SECOND = 1000; // milliseconds
const ONE_MINUTE = 60 * ONE_SECOND;
const DEFAULT_LENGTH = ONE_MINUTE * 25;

function App() {
  const [currentTime, setCurrentTime] = useState(DEFAULT_LENGTH);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const updateTimer = setTimeout(() => {
        if (currentTime !== 0) {
          setCurrentTime(currentTime - ONE_SECOND);
        }
      }, ONE_SECOND);
      return () => clearTimeout(updateTimer);
    }
  }, [currentTime, running]);

  return (
    <main className="App">
      <h1>Pomodoro Timer</h1>
      <Timer currentTime={currentTime} />
      <Controls onPlay={() => setRunning(true)} />
    </main>
  );
}

export default App;
