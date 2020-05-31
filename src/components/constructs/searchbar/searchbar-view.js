import React, { useEffect, useRef } from "react";

import {
  StyledForm,
  StyledInput,
  StyledPrimaryButton,
} from "./searchbar-style";

const SearchBar = ({ onSubmit, buttonText, onChange }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  })

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput type="text" onChange={onChange} ref={inputEl} required></StyledInput>
      <StyledPrimaryButton type="submit">{buttonText}</StyledPrimaryButton>
    </StyledForm>
  );
};

export default SearchBar;
