// Architectural imports
import React from "react";

// Styled imports
import { SelectWrapper, Label } from "./select-style";

// Components

// Endpoints

const Select = ({ label, id, options }) => {
  return (
    <SelectWrapper>
      <Label for={id}>{label}</Label>
      <select name={id} id={id}>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </SelectWrapper>
  );
};

export default Select;
