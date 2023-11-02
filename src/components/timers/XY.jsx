// React
import { useState, useEffect } from "react";

// styled-components
import styled from "styled-components";

// Ours - Components
import TimeInput from "../generic/TimeInput";
import TimerControls from "../generic/TimerControls";
import NumericInput from "../generic/NumericInput";
import RoundsDisplay from "../generic/RoundsDisplay";
import ControlsColumn from "../generic/ControlsColumn";

// Ours - Timer
import { useTimer } from "../../utils/timer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const InputsRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const XY = () => {
  const [rounds, setRounds] = useState(1);
  const [msPerRound, setMsPerRound] = useState(0);

  const [timer, dispatch, effect] = useTimer();

  useEffect(effect);

  const setTarget = (target) => {
    dispatch({ target, type: "setTarget" });
  };

  const roundIdx = Math.floor(timer.transpired / msPerRound) || 0;
  const roundTranspired = timer.transpired - roundIdx * msPerRound;
  const currentRound = roundIdx + 1;

  return (
    <Container>
      <RoundsDisplay
        transpired={roundTranspired}
        currentRound={currentRound}
        rounds={rounds}
      />
      <ControlsColumn>
        <InputsRow>
          <TimeInput
            timeMs={msPerRound}
            setValue={(v) => {
              setMsPerRound(v);
              dispatch({ type: "setTarget", target: v * rounds });
            }}
          />
          <NumericInput
            name="rounds"
            label="Rounds"
            value={rounds}
            setValue={(v) => {
              setRounds(v);
              setTarget(msPerRound * v);
            }}
          />
        </InputsRow>
        <TimerControls dispatch={dispatch} paused={timer.paused} />
      </ControlsColumn>
    </Container>
  );
};

export default XY;
