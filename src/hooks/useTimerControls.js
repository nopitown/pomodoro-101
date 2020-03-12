import { Machine } from "xstate";
import { useMachine } from "@xstate/react";

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

const useTimerControls = () => {
  const [state, send] = useMachine(stateTimerMachine);

  const play = () => send("START");
  const pause = () => send("PAUSE");
  const reset = () => send("RESET");

  return {
    status: state.value,
    play,
    pause,
    reset
  };
};

export default useTimerControls;
