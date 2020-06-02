// Architectural imports
import React from "react";
import { navigate } from "@reach/router";

// Styled imports
import { StyledButton } from "./back-button-style";

const BackButton = () => {
  return (
    <StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
  );
};

export default BackButton;
