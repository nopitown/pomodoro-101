import React, { useEffect, useState } from "react";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";

import Timer from "../Timer";
import Controls from "../Controls";

const ONE_SECOND = 1000; // milliseconds
const ONE_MINUTE = 60 * ONE_SECOND;
const DEFAULT_LENGTH = ONE_MINUTE * 25;

const stateTimerMachine = Machine({
  id: "timer",
  initial: "idle",
  states: {
    idle: {
      on: {
        START: "started"
      }
    },
    started: {
      on: { PAUSE: "paused", RESET: "idle" }
    },
    paused: {
      on: { START: "started", RESET: "idle" }
    }
  }
});
function App() {
  const [currentTime, setCurrentTime] = useState(DEFAULT_LENGTH);
  const [state, send] = useMachine(stateTimerMachine);

  useEffect(() => {
    if (state.value === "started") {
      const updateTimer = setTimeout(() => {
        if (currentTime !== 0) {
          setCurrentTime(currentTime - ONE_SECOND);
        }
      }, ONE_SECOND);
      return () => clearTimeout(updateTimer);
    }

    if (state.value === "idle") {
      setCurrentTime(DEFAULT_LENGTH);
    }
  }, [currentTime, state]);

  return (
    <main className="App">
      <h1>Pomodoro Timer</h1>
      <Timer currentTime={currentTime} />
      <Controls
        onPlay={() => send("START")}
        onPause={() => send("PAUSE")}
        onReset={() => send("RESET")}
        status={state.value}
      />
    </main>
  );
}

export default App;
