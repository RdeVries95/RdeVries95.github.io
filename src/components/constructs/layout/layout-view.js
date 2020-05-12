import React, { useContext, useEffect, useState } from "react";

import { Container, Wrapper, StyledSidebar } from "./layout-style";

import UserContext from "../../../config/user-context";

import { menuItems } from "../sidebar/content";

import { PATHNAMES } from "../../../config/pathnames";
import PageHeader from "../page-header/page-header-view";

const Layout = ({ children, location }) => {
  let user = useContext(UserContext);

  const [title, setTitle] = useState("");

  const header = () => {
    switch (location) {
      case PATHNAMES.HOME:
        return "Home";
      case PATHNAMES.YODA:
        return "Yoda";
      case PATHNAMES.MOVIE:
        return "Movies";
      case PATHNAMES.COCKTAIL:
        return "Cocktails";
      case PATHNAMES.SANDBOX:
        return "Sandbox";
      default:
        return "Unset";
    }
  };

  useEffect(() => {
    setTitle(header());
  },[location, header]);

  return (
    <Wrapper>
      {user ? <StyledSidebar items={menuItems} /> : null}
      <Container>
        {user ? <PageHeader header={title} /> : null}
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
