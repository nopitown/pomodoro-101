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

  return {
    send,
    status: state.value
  };
};

export default useTimerControls;
