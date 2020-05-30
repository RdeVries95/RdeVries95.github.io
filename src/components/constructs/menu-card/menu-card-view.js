// Architectural imports
import React from "react";
import { navigate } from "@reach/router";

// Styled imports
import { Card } from "./menu-card-style";

const MenuCard = ({ menuTitle, image, link }) => {

  const handleClick = () => {
    navigate(link);
  }

  return (
    <>
      <Card onClick={() => {handleClick()}} image={image}>{menuTitle}</Card>
    </>
  );
};

export default MenuCard;
