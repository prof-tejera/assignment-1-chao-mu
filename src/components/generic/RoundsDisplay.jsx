// styled-components
import styled from "styled-components";

import TimeDisplay from "../generic/TimeDisplay";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  border: solid;
  padding: 0.5rem;
`;

const InProgress = styled.div`
  font-size: 3rem;
`;

const ProgressGroup = styled.div``;

const RoundHeader = styled.div`
  font-weight: 700;
  font-size: 3rem;
`;

const RoundsDisplay = ({ transpired, currentRound, rounds, header }) => {
  return (
    <Container>
      <RoundHeader>{header}</RoundHeader>
      <ProgressGroup>
        <InProgress>
          Round {Math.min(rounds, currentRound)} of {rounds}{" "}
        </InProgress>
        <TimeDisplay timeMs={transpired} />
      </ProgressGroup>
    </Container>
  );
};

export default RoundsDisplay;
