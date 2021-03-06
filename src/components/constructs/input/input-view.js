// Architectural imports
import React from "react";

// Styled imports
import { Label, InputWrapper } from "./input-style";

const Input = ({ placeholder, label, type, id, value, onChange, required }) => {
  return (
    <InputWrapper>
      {label ? <Label for={id}>{label}</Label> : null}
      <input
        required={required}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
      ></input>
    </InputWrapper>
  );
};

export default Input;
