import styled from "styled-components";

import Button from "./Button";

const Container = styled.div`
  display: flex;
  gap: 0.1rem;
`;

const TimerControls = ({ dispatch, paused }) => (
  <Container>
    {paused ? (
      <Button primary onClick={() => dispatch({ type: "resume" })}>
        Start
      </Button>
    ) : (
      <Button primary onClick={() => dispatch({ type: "pause" })}>
        Pause
      </Button>
    )}
    <Button secondary onClick={() => dispatch({ type: "reset" })}>
      Reset
    </Button>
    <Button secondary onClick={() => dispatch({ type: "end" })}>
      End
    </Button>
  </Container>
);

export default TimerControls;
