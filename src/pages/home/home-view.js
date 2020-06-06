// Architectural imports
import React, { useState, useContext, useEffect } from "react";

// Styled imports
import { StyledColumn, StyledPageHeader } from "./home-style";

// Components
import PrimaryMenu from "../../components/constructs/primary-menu/primary-menu-view";

// Content
import { menuItems } from "./menu-items";

// Tools/configs
import UserContext from "../../config/user-context";

const HomePage = () => {
  const [visit] = useState(sessionStorage.getItem("visit"))
  const user = useContext(UserContext);

  useEffect(() => {
    sessionStorage.setItem("visit", visit + 1);
  }, [visit]);

  return (
    <StyledColumn>
      <StyledPageHeader
        title={
          visit < 1 ? `Nice to meet you, ${user}` : `What's next, ${user}?`
        }
        subTitle="What would you like to do?"
      />
      <PrimaryMenu menuItems={menuItems} />
    </StyledColumn>
  );
};

export default HomePage;
