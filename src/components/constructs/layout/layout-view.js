import React from "react"

import { Container, Wrapper } from "./layout-style"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Layout
