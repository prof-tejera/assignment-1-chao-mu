import { useState, useEffect } from "react";

import { splitTimeMs, joinTimeMs, bindTimeInput } from "../../utils/helpers";

import styled from "styled-components";

import Input from "./Input";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

const TimeInput = ({ onChange }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const bindTimeInput = (setValue) => (event) => {
    const value = Number(event.target.value);
    setValue(value);
  };

  useEffect(() => {
    const timeMs = joinTimeMs({
      hours,
      minutes,
      seconds,
    });
    onChange && onChange(timeMs);
  }, [onChange, hours, minutes, seconds]);

  return (
    <Container>
      <Input
        id="hours"
        label="Hours"
        type="number"
        value={hours}
        onChange={bindTimeInput(setHours)}
      />
      <Input
        id="minutes"
        label="Minutes"
        type="number"
        value={minutes}
        onChange={bindTimeInput(setMinutes)}
      />
      <Input
        id="seconds"
        label="Seconds"
        type="number"
        value={seconds}
        onChange={bindTimeInput(setSeconds)}
      />
    </Container>
  );
};

export default TimeInput;
