import styled from "styled-components";

import { padTime, splitTimeMs } from "../../utils/helpers.js";

const Container = styled.div`
  display: flex;
  gap: 0.1rem;
`;

const TimeComponent = styled.div``;

const Separator = () => <div>:</div>;

const TimeDisplay = ({ timeMs }) => {
  const { hours, minutes, seconds } = splitTimeMs(timeMs);

  return (
    <Container>
      <TimeComponent>{padTime(hours)}</TimeComponent>
      <Separator />
      <TimeComponent>{padTime(minutes)}</TimeComponent>
      <Separator />
      <TimeComponent>{padTime(seconds)}</TimeComponent>
    </Container>
  );
};

export default TimeDisplay;
