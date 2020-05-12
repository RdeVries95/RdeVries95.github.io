import styled from "styled-components"

import { Card } from '../../primitives/card/card-style'

export const Poster = styled.img`
  height: 500px;
  max-width: 475px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center
  
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledCard = styled(Card)`
  padding: 15px;
  margin: 15px 15px 15px 15px;
  width: 400px;
`

export const H3 = styled.h3`
  margin: 20px 0;
`