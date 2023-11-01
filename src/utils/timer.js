import { useReducer } from "react";

const initialState = {
  startedAt: null,
  transpired: 0,
  paused: true,
  target: 0,
  transpiredAtPause: 0,
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case "resume": {
      return {
        ...state,
        startedAt: Date.now(),
        paused: false,
      };
    }
    case "pause": {
      return {
        ...state,
        transpiredAtPause: state.transpired,
        paused: true,
      };
    }
    case "reset": {
      return { ...initialState };
    }
    case "end": {
      return {
        ...state,
        transpired: state.target,
      };
    }
    case "setTarget": {
      return {
        ...initialState,
        target: action.target,
      };
    }
    case "tick": {
      if (state.paused) {
        return state;
      }

      return {
        ...state,
        transpired: Math.min(
          state.target,
          state.transpiredAtPause + Date.now() - state.startedAt
        ),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const useTimer = () => useReducer(timerReducer, initialState);
