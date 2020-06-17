import styled from "styled-components";

import boxingGlove from "../../../assets/images/boxing-glove.ico";

export const Ring = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid black;
  width: 300px;
  height: 300px;
  cursor: url(${boxingGlove}) 30 15, auto;
`;

export const Counter = styled.div`
  border: 2px solid black;
  width: 100px;
  margin: 0 10px 10px 0;
  padding: 5px;
  cursor: ${props => props.state ? "pointer" : "auto"};
`;

export const Opponent = styled.img`
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: ${(props) => props.margin};
  width: 40px;
  display: ${(props) => (props.margin ? "initial" : "none")};
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  align-items: center;
`;
