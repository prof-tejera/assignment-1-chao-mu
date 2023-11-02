import { useId } from "react";

import styled from "styled-components";

const Container = styled.div``;

const Label = styled.label`
  margin-bottom: 0.25rem;
  display: block;
  font-weight: 600;
  color: #1f2937;
  font-size: 1.75rem;
`;

const Input = styled.input`
  width: 100%;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  color: #1f2937;
  border-radius: 0.375rem;
  outline: none;
  padding: 0.625rem;
  font-size: 1.5rem;
`;

const NumericInput = ({ label, setValue, ...args }) => {
  const id = useId();

  const onChange = (event) => {
    setValue(event.target.value ? Number(event.target.value) : null);
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input {...args} onChange={onChange} type="number" id={id} />
    </Container>
  );
};

export default NumericInput;
