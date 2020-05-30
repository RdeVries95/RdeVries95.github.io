import React, { useEffect, useRef } from "react";

import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledPrimaryButton,
} from "./simple-form-style";

const SimpleForm = ({ onSubmit, label, buttonText, onChange }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  })

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput onChange={onChange} ref={inputEl} required></StyledInput>
      <StyledPrimaryButton type="submit">{buttonText}</StyledPrimaryButton>
    </StyledForm>
  );
};

export default SimpleForm;
