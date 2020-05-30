import React from "react";

import { H1, P, StyledColumn } from "./page-header-style"

const PageHeader = ({ title, subTitle }) => {
  return (
    <StyledColumn>
      <H1>{title}</H1>
      <P>{subTitle}</P>
    </StyledColumn>
  );
};

export default PageHeader;
