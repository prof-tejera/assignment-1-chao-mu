import styled from "styled-components";

import { padTime, splitTimeMs } from "../../utils/helpers.js";

const Container = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const TimeComponent = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Small = styled.div`
  font-size: 0.95rem;
`;

const TimeDisplay = ({ timeMs }) => {
  const { hours, minutes, seconds } = splitTimeMs(timeMs);

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
    </Container>
  );
};

export default TimeDisplay;
