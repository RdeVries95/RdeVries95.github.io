// Architectural imports
import React from "react";

// Styled imports
import { StyledRow } from "./primary-menu-style";

// Components
import Card from "../menu-card/menu-card-view";

// Endpoints

const PrimaryMenu = ({ menuItems }) => {
  return (
    <StyledRow>
      {menuItems.map((menuItem, index) => {
        return (
          <Card
            key={index}
            link={menuItem.link}
            image={menuItem.image}
            menuTitle={menuItem.menuTitle}
          />
        );
      })}
    </StyledRow>
  );
};

export default PrimaryMenu;
