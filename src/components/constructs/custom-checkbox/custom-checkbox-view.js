import React, { useState } from "react";

import Checkbox from "../../primitives/checkbox";

import { StyledRow, StyledLabel } from "./custom-checkbox-style";

const CustomCheckbox = ({ label, addOrDelete, objectKey }) => {
  const [checked, setChecked] = useState(false);

  const determineUpdateOrDelete = (e) => {
    const value = label.split(' ').join('_');

    if (checked) {
      addOrDelete("delete", value, objectKey);
      setChecked(e.target.checked);
    } else {
      addOrDelete("add", value, objectKey);
      setChecked(e.target.checked);
    }
  };

  return (
    <StyledRow>
      <StyledLabel>
        <Checkbox
          checked={checked}
          onChange={(e) => determineUpdateOrDelete(e)}
        />
        <span>{label}</span>
      </StyledLabel>
    </StyledRow>
  );
};

export default CustomCheckbox;
