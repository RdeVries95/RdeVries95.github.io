// Architectural imports
import React from "react";

// Styled imports
import { StyledGrid } from "./primary-menu-style";

// Components
import Card from "../menu-card/menu-card-view";

// Endpoints

const PrimaryMenu = ({ menuItems }) => {
  return (
    <StyledGrid>
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
    </StyledGrid>
  );
};

export default PrimaryMenu;
