import { useState, useEffect } from "react";

import { splitTimeMs, joinTimeMs, bindTimeInput } from "../../utils/helpers";

import styled from "styled-components";

import NumericInput from "./NumericInput";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

const TimeInput = ({ setValue, column = false }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timeMs = joinTimeMs({
      hours,
      minutes,
      seconds,
    });

    setValue && setValue(timeMs);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, seconds]);

  const containerStyle = {
    flexDirection: column ? "column" : "row",
  };

  return (
    <Container style={containerStyle}>
      <NumericInput
        name="hours"
        label="Hours"
        value={hours}
        setValue={setHours}
      />
      <NumericInput
        name="minutes"
        label="Minutes"
        type="number"
        value={minutes}
        setValue={setMinutes}
      />
      <NumericInput
        name="seconds"
        label="Seconds"
        type="number"
        value={seconds}
        setValue={setSeconds}
      />
    </Container>
  );
};

export default TimeInput;
