import { useState, useEffect } from "react";

import { splitTimeMs, joinTimeMs, bindEvent } from "../../utils/helpers";

import styled from "styled-components";

import Input from "./Input";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

const TimeInput = ({ timeMs, onChange }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updates = splitTimeMs(timeMs);

    setHours(updates.hours);
    setMinutes(updates.minutes);
    setSeconds(updates.seconds);
  }, [timeMs]);

  const setTime = () => {
    onChange && onChange(joinTimeMs({ hours, minutes, seconds }));
  };

  return (
    <Container>
      <Input
        id="hours"
        label="Hours"
        type="number"
        min="0"
        max="99"
        value={hours}
        onChange={bindEvent(setHours)}
      />
      <Input
        id="minutes"
        label="Minutes"
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={bindEvent(setMinutes)}
      />
      <Input
        id="seconds"
        label="Seconds"
        type="number"
        min="0"
        max="59"
        value={seconds}
        onChange={bindEvent(setSeconds)}
      />
      <Button onClick={() => setTime()}>Set</Button>
    </Container>
  );
};

export default TimeInput;
