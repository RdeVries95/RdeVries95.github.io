import styled from 'styled-components'

import Select from "../select/select-view";

export const Form = styled.form`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 75%;
`

export const StyledSelect = styled(Select)`
    margin: 0 25px 0 25px;
`