import styled from "styled-components"
import List from '@material-ui/core/List'
import { Link } from "@reach/router"

export const StyledList = styled(List)`
    z-index: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    color: white;
    width: 225px;
    position: -webkit-sticky; /* Safari */
    position: sticky !important;
    top: 0;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export const H3 = styled.h3`
    padding: 0 20px 10px 16px;
    margin: 0;
`