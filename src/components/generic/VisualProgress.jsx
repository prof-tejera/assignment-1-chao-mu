import styled from "styled-components";

const Outer = styled.div`
  display: flex;
  flex-grow: 1;
  border: 0.2rem solid black;
`;

const Inner = styled.div`
  background-color: black;
`;

const VisualProgress = ({ progress }) => {
  const flexBasis = Math.floor(progress * 100) + "%";

  return (
    <Outer>
      <Inner style={{ flexBasis }} />
    </Outer>
  );
};

export default VisualProgress;
