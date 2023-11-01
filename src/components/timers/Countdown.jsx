// React
import { useState, useEffect } from "react";

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
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const VisualProgressWrapper = styled.div`
  display: flex;
  width: 10rem;
  height: 2rem;
`;

const ProgressRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ControlsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Countdown = () => {
  const [timer, dispatch] = useTimer();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 20);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <Container>
      <ProgressRow>
        <TimeDisplay timeMs={timer.target - timer.transpired} />
        <VisualProgressWrapper>
          <VisualProgress progress={timer.transpired / timer.target} />
        </VisualProgressWrapper>
      </ProgressRow>
      <ControlsColumn>
        <TimeInput
          timeMs={timer.target}
          setValue={(target) => dispatch({ target, type: "setTarget" })}
        />
        <TimerControls paused={timer.paused} dispatch={dispatch} />
      </ControlsColumn>
    </Container>
  );
};

export default Countdown;
