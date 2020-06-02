import styled from "styled-components";

import Column from "../../../components/primitives/column"
import Row from "../../../components/primitives/row"

export const StyledColumn = styled(Column)`
`;

export const RecipeCard = styled(Row)`
    border: 2px solid black;
    padding: 20px;
    width: 800px;
`;

export const RecipeImage = styled.img`
    width: 200px;
`

export const UL = styled.ul`
    width: 100%;
`

export const P = styled.p`
    padding: 0;
    margin: 0;
`