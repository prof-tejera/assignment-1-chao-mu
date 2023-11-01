import { useId } from "react";

import styled from "styled-components";

const Container = styled.div``;

const Label = styled.label`
  margin-bottom: 0.25rem;
  display: block;
`;

const Input = styled.input``;

const NumericInput = ({ label, value, setValue, ...args }) => {
  const id = useId();

  const onChange = (event) => {
    setValue(Number(event.target.value || 0));
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input {...args} onChange={onChange} type="number" id={id} />
    </Container>
  );
};

export default NumericInput;
