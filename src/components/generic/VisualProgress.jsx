import styled from "styled-components";

const Outer = styled.div`
  display: flex;
  flex-grow: 1;
  border: 0.2rem solid black;
`;

const Inner = styled.div`
  background-color: rgb(133, 226, 31);
`;

const VisualProgress = ({ progress, column = false }) => {
  const flexBasis = Math.floor(progress * 100) + "%";

  const flexDirection = column ? "column-reverse" : "row";

  return (
    <Outer style={{ flexDirection }}>
      <Inner style={{ flexBasis }} />
    </Outer>
  );
};

export default VisualProgress;
