import styled from "styled-components";

import Button from "./Button";

const Container = styled.div`
  display: flex;
  gap: 0.1rem;
`;

const TimerControls = ({
  dispatch,
  paused,
  onResume,
  onPause,
  onReset,
  onEnd,
}) => {
  if (!onResume) {
    onResume = () => dispatch({ type: "resume" });
  }

  if (!onPause) {
    onPause = () => dispatch({ type: "pause" });
  }

  if (!onReset) {
    onReset = () => dispatch({ type: "reset" });
  }

  if (!onEnd) {
    onEnd = () => dispatch({ type: "end" });
  }

  return (
    <Container>
      {paused ? (
        <Button primary onClick={onResume}>
          Start
        </Button>
      ) : (
        <Button primary onClick={onPause}>
          Pause
        </Button>
      )}
      <Button secondary onClick={onReset}>
        Reset
      </Button>
      <Button secondary onClick={onEnd}>
        End
      </Button>
    </Container>
  );
};

export default TimerControls;
