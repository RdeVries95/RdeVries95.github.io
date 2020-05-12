import React from "react"

import { Container } from './page-header-style'

const PageHeader = ({ header }) => {
  
  return (
    <Container>
        <h1>{header}</h1>
    </Container>
  )
}

export default PageHeader
