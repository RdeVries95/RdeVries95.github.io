import React from "react";

import Row from "../../primitives/row";

import {
  StyledCSS3,
  StyledHTML5,
  StyledJS,
  StyledreactJs,
  StyledStyledComponents,
  StyledSASS,
} from "./logo-row-style";

const LogoRow = () => {
  return (
    <Row>
      <StyledHTML5 />
      <StyledCSS3 />
      <StyledJS />
      <StyledreactJs />
      <StyledStyledComponents />
      <StyledSASS />
    </Row>
  );
};

export default LogoRow;
