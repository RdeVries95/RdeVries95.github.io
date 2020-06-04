import styled from "styled-components";

import Column from "../../components/primitives/column";

export const StyledColumn = styled(Column)``;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledButton = styled.button`
  :hover {
    background-color: #1db954;
  }
`;

export const P = styled.p`
    margin-top: 50px;
`;
