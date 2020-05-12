import styled from "styled-components"

import Sidebar from '../sidebar/sidebar-view'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100vw;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const StyledSidebar = styled(Sidebar)`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`