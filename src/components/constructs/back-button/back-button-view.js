// Architectural imports
import React from "react";
import { navigate } from "@reach/router";

// Styled imports
import { StyledButton } from "./back-button-style";

// Tools/configs
import { PATHNAMES } from "../../../config/pathnames";

const BackButton = () => {
  return (
    <StyledButton onClick={() => navigate(PATHNAMES.HOME)}>Back</StyledButton>
  );
};

export default BackButton;
