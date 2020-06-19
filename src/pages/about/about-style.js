import styled from "styled-components";

import Column from "../../components/primitives/column";

export const StyledColumn = styled(Column)``;

export const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Description = styled.div`
  padding: 20px;
  border: 2px solid black;
  width: ${(props) => props.width};
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const P = styled.p`
  margin-top: 50px;
`;

export const Image = styled.img`
  max-width: 400px;
  object-fit: cover;
  border: 2px solid black;
`;

export const BoxingRing = styled.div`
  border: 2px solid black;
  width: 800px;
  height: 300px;
`;

export const BoxingGlove = styled.img`
  position: absolute;
`;
