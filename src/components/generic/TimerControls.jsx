import styled from "styled-components";

import Button from "./Button";

const Container = styled.div`
  display: flex;
  gap: 0.1rem;
`;

const TimerControls = ({ onStart, onStop, onReset, onEnd }) => (
  <Container>
    <Button primary>Start</Button>
    <Button secondary>Reset</Button>
    <Button secondary>End</Button>
  </Container>
);

export default TimerControls;
