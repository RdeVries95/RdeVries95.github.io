import React, { useState } from "react";

import Checkbox from "../../primitives/checkbox";

import { StyledRow, StyledLabel } from "./custom-checkbox-style";

const CustomCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledRow>
      <StyledLabel>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>{label}</span>
      </StyledLabel>
    </StyledRow>
  );
};

export default CustomCheckbox;
