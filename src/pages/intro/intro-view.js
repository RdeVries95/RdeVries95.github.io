// Architectural imports
import React, { useState } from "react";
import { navigate } from "@reach/router";

// Styled imports
import {
  StyledPageHeader,
  StyledLogoRow,
  StyledSimpleForm,
  StyledColumn,
} from "./intro-style";

// Content imports
import { PATHNAMES } from "../../config/pathnames";

const IntroPage = ({ setUser }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", name);
    setUser(name);
    navigate(PATHNAMES.HOME);
  };

  return (
    <StyledColumn>
      <StyledPageHeader
        title="Hi there, I'm Ricardo"
        subTitle="I like programming :)"
      />
      <StyledLogoRow />
      <StyledSimpleForm
        onSubmit={handleSubmit}
        onChange={(e) => {
          setName(e.target.value);
        }}
        buttonText="Enter"
        label="What's your name?"
      />
    </StyledColumn>
  );
};

export default IntroPage;
