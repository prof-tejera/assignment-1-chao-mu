import { useId } from "react";

import styled from "styled-components";

const Container = styled.div``;

const Label = styled.label`
  margin-bottom: 0.25rem;
  display: block;
`;

const InnerInput = styled.input``;

const Input = ({ label, ...args }) => {
  const id = useId();

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InnerInput {...args} id={id} />
    </Container>
  );
};

export default Input;
