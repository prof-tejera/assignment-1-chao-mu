import styled from "styled-components";

import { padTime, splitTimeMs } from "../../utils/helpers.js";

const Container = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const TimeComponent = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 3rem;
`;

const Small = styled.div`
  font-size: 2rem;
`;

const TimeDisplay = ({ timeMs }) => {
  const { hours, minutes, seconds, ms } = splitTimeMs(timeMs);

  return (
    <Container>
      <TimeComponent>
        {padTime(hours)}
        <Small>h</Small>
      </TimeComponent>
      <TimeComponent>
        {padTime(minutes)}
        <Small>m</Small>
      </TimeComponent>
      <TimeComponent>
        {padTime(seconds)}
        <Small>s</Small>
      </TimeComponent>
      <TimeComponent>
        {padTime(ms, 3)}
        <Small>ms</Small>
      </TimeComponent>
    </Container>
  );
};

export default TimeDisplay;
