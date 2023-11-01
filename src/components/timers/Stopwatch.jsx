// styled-components
import styled from "styled-components";

// Ours - Components
import TimeDisplay from "../generic/TimeDisplay";
import TimeInput from "../generic/TimeInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stopwatch = () => {
  return (
    <Container>
      <TimeDisplay timeMs={0} />
    </Container>
  );
};

export default Stopwatch;
