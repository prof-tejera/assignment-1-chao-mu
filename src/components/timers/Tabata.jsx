// React
import { useState, useEffect } from "react";

// styled-components
import styled from "styled-components";

// Ours - Components
import TimeInput from "../generic/TimeInput";
import TimerControls from "../generic/TimerControls";
import NumericInput from "../generic/NumericInput";
import RoundsDisplay from "../generic/RoundsDisplay";

// Ours - Timer
import { useTimer } from "../../utils/timer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ControlsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Tabata = () => {
  const [rounds, setRounds] = useState(1);
  const [msPerWork, setMsPerWork] = useState(0);
  const [msPerRest, setMsPerRest] = useState(0);

  const [timer, dispatch, effect] = useTimer();

  useEffect(effect);

  const setTarget = (target) => {
    dispatch({ target, type: "setTarget" });
  };

  const msPerRound = msPerWork + msPerRest;
  const completedRoundsExact = timer.transpired / msPerRound || 0;
  const completedRounds = Math.floor(completedRoundsExact);
  const roundRemainder = (completedRoundsExact - completedRounds) * msPerRound;

  const completedWorkRounds =
    roundRemainder > msPerWork ? completedRounds + 1 : completedRounds;
  const completedRestRounds = completedRounds;

  return (
    <Container>
      {roundRemainder < msPerWork ? (
        <RoundsDisplay
          header="Working"
          transpired={msPerWork - Math.min(roundRemainder, msPerWork)}
          currentRound={completedWorkRounds}
          rounds={rounds}
        />
      ) : (
        <RoundsDisplay
          header="Resting"
          transpired={msPerRest - Math.max(0, roundRemainder - msPerWork)}
          currentRound={completedRestRounds + 1}
          rounds={rounds}
        />
      )}

      <ControlsColumn>
        <InputsGroup>
          <TimeInput
            timeMs={msPerWork}
            setValue={(v) => {
              setMsPerWork(v);
              setTarget((v + msPerRest) * rounds);
            }}
          />
          <TimeInput
            timeMs={msPerRest}
            setValue={(v) => {
              setMsPerRest(v);
              setTarget((msPerWork + v) * rounds);
            }}
          />
          <NumericInput
            name="rounds"
            label="Rounds"
            value={rounds}
            setValue={(v) => {
              setRounds(v);
              setTarget((msPerWork + msPerRest) * v);
            }}
          />
        </InputsGroup>
        <TimerControls dispatch={dispatch} paused={timer.paused} />
      </ControlsColumn>
    </Container>
  );
};

export default Tabata;
