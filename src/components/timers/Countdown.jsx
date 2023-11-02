// React
import { useEffect } from "react";

// styled-components
import styled from "styled-components";

// Ours - Components
import TimeDisplay from "../generic/TimeDisplay";
import TimeInput from "../generic/TimeInput";
import VisualProgress from "../generic/VisualProgress";
import TimerControls from "../generic/TimerControls";

// Ours - Timer
import { useTimer } from "../../utils/timer";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const ControlsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const ProgressColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
`;

const Countdown = ({ reverse = false }) => {
  const [timer, dispatch, effect] = useTimer();

  useEffect(effect);

  const displayedTime = reverse
    ? timer.transpired
    : timer.target - timer.transpired;

  let displayedProgress =
    timer.target > 0 ? timer.transpired / timer.target : 0;
  if (!reverse) {
    displayedProgress = 1 - displayedProgress;
  }

  return (
    <Container>
      <ControlsColumn>
        <TimeInput
          column
          timeMs={timer.target}
          setValue={(target) => dispatch({ target, type: "setTarget" })}
        />
        <TimerControls paused={timer.paused} dispatch={dispatch} />
      </ControlsColumn>
      <ProgressColumn>
        <TimeDisplay timeMs={displayedTime} />
        <VisualProgress column progress={displayedProgress} />
      </ProgressColumn>
    </Container>
  );
};

export default Countdown;
