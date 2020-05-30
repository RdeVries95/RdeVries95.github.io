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

// Endpoints

const HomePage = () => {
  const [firstTime, setFirstTime] = useState(false);
  const user = useContext(UserContext);

  const getTitle = () => {
    if (firstTime) {
      return `Nice to meet you, ${user}`;
    } else {
      return `What's next, ${user}?`;
    }
  };

  const setVisits = () => {
    let visits = sessionStorage.getItem("visited");
    sessionStorage.setItem("visited", visits + 1);
    if (visits <= 1) setFirstTime(true);
  };

  useEffect(() => {
    setVisits();
  }, []);

  return (
    <StyledColumn>
      <StyledPageHeader
        title={getTitle()}
        subTitle="What would you like to do?"
      />
      <PrimaryMenu menuItems={menuItems} />
    </StyledColumn>
  );
};

export default HomePage;
