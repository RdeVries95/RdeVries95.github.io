import styled from "styled-components";

export const T = styled.table`
  border-collapse: collapse;
  width: 900px;
`;

export const THEAD = styled.thead``;

export const TH = styled.th`
  border: 2px solid black;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: black;
  color: white;
  padding: 8px;
`;

export const TB = styled.tbody``;

export const TR = styled.tr`
  cursor: pointer;

  :hover {
    background-color: #ddd;
  }
`;

export const TD = styled.td`
  border: 2px solid black;
  padding: 8px;
`;
