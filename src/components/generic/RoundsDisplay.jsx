// styled-components
import styled from "styled-components";

import TimeDisplay from "../generic/TimeDisplay";

const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  align-items: center;
`;

const RoundCounter = styled.div``;

const Finished = styled.div`
  font-weight: 800;
`;

const InProgress = styled.div``;

const RoundsDisplay = ({ transpired, msPerRound, rounds }) => {
  const roundIdx = Math.floor(transpired / msPerRound);
  const roundTranspired = transpired - roundIdx * msPerRound;

  const currentRound = roundIdx + 1;

  return (
    <Container>
      <RoundCounter>
        {currentRound > rounds ? (
          <Finished>Finished all {rounds} rounds</Finished>
        ) : (
          <InProgress>
            Round {roundIdx + 1} of {rounds}{" "}
          </InProgress>
        )}
      </RoundCounter>
      <TimeDisplay timeMs={roundTranspired} />
    </Container>
  );
};

export default RoundsDisplay;
