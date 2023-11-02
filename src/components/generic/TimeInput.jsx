import { useState, useEffect } from "react";

import { splitTimeMs, joinTimeMs, bindTimeInput } from "../../utils/helpers";

import styled from "styled-components";

import NumericInput from "./NumericInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

const Header = styled.div`
  font-size: 1.15rem;
`;

const TimeInput = ({ setValue, header, column = false }) => {
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

    // eslint will complain about not adding setValue,
    // but adding setValue will cause an infinite
    // loop as it appears different each time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, seconds]);

  const inputGroupStyle = {
    flexDirection: column ? "column" : "row",
  };

  return (
    <Container>
      {header && <Header>{header}</Header>}
      <InputGroup style={inputGroupStyle}>
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
      </InputGroup>
    </Container>
  );
};

export default TimeInput;
