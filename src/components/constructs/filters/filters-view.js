import React from "react";

import { StyledColumn } from "./filters-style";

import CustomCheckbox from "../custom-checkbox/custom-checkbox-view";

const Filters = ({ addOrDelete, filters, objectKey, filterTitle }) => {
  return (
    <StyledColumn>
      <h3>{filterTitle}</h3>
      {filters.map((checkbox, index) => {
        return (
          <CustomCheckbox
            key={index}
            addOrDelete={addOrDelete}
            label={checkbox[objectKey]}
            objectKey={objectKey}
          />
        );
      })}
    </StyledColumn>
  );
};

export default Filters;
