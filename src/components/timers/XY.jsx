// React
import { useState, useEffect } from "react";

// styled-components
import styled from "styled-components";

// Ours - Helpers
import { bindEvent } from "../../utils/helpers";

// Ours - Components
import TimeDisplay from "../generic/TimeDisplay";
import TimeInput from "../generic/TimeInput";
import VisualProgress from "../generic/VisualProgress";
import TimerControls from "../generic/TimerControls";
import NumericInput from "../generic/NumericInput";
import RoundsDisplay from "../generic/RoundsDisplay";

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

const XY = () => {
  const [rounds, setRounds] = useState(0);
  const [msPerRound, setMsPerRound] = useState(0);
  const [startedAt, setStartedAt] = useState(null);
  const [transpired, setTranspired] = useState(0);
  const [paused, setPaused] = useState(true);
  const [transpiredAtPause, setTranspiredAtPause] = useState(0);

  const target = msPerRound * rounds;

  useEffect(() => {
    // Every half second, update the clock
    const intervalId = setInterval(() => {
      if (paused) {
        return;
      }

      setTranspired(
        Math.min(transpiredAtPause + Date.now() - startedAt, target)
      );
    }, 25);

    return () => clearInterval(intervalId);
  }, [startedAt, transpiredAtPause, paused, target]);

  useEffect(() => {
    onReset();
  }, [target]);

  const onResume = () => {
    setStartedAt(Date.now());
    setPaused(false);
  };

  const onPause = () => {
    setTranspiredAtPause(transpired);
    setPaused(true);
  };

  const onReset = () => {
    setTranspired(0);
    setTranspiredAtPause(0);
    setPaused(true);
  };

  const onEnd = () => {
    setTranspired(target);
    setPaused(true);
  };

  return (
    <Container>
      <RoundsDisplay
        transpired={transpired}
        msPerRound={msPerRound}
        rounds={rounds}
      />
      <ControlsColumn>
        <InputsRow>
          <TimeInput timeMs={msPerRound} onChange={setMsPerRound} />
          <NumericInput
            name="rounds"
            label="Rounds"
            type="number"
            value={rounds}
            setValue={setRounds}
          />
        </InputsRow>
        <TimerControls
          paused={paused}
          onResume={onResume}
          onPause={onPause}
          onReset={onReset}
          onEnd={onEnd}
        />
      </ControlsColumn>
    </Container>
  );
};

export default XY;
