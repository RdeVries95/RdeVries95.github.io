// Architectural imports
import React from "react";

// Styled imports
import { Form, StyledSelect } from "./searchbar-style";

// Components
import Input from "../input/input-view";
import PrimaryBtn from "../../primitives/buttons/primary-btn-view";
import Row from '../../primitives/row'

// Endpoints

const Searchbar = ({ searchOptions, filters, onSubmit }) => {
  return (
    <Row>
      <Form onSubmit={onSubmit}>
        <StyledSelect
          options={searchOptions}
          label="Search by..."
          id="cocktail-primary"
        />
        <Input />
        <StyledSelect
          options={filters}
          label="Filter by..."
          id="cocktail-secondary"
        />
        <PrimaryBtn>Search</PrimaryBtn>
      </Form>
    </Row>
  );
};

export default Searchbar;
