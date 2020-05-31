import React from "react";

import { StyledColumn } from "./filters-style";

import CustomCheckbox from "../custom-checkbox/custom-checkbox-view"

const Filters = ({ filters, handleFilter, objectKey }) => {
  return (
    <StyledColumn>
      {filters.map((filter) => {
        return (
          <CustomCheckbox onClick={() => {handleFilter(filter[objectKey], objectKey)}} label={filter.strCategory}/>
        );
      })}
    </StyledColumn>
  );
};

export default Filters;
