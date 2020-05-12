import styled from 'styled-components'

import SimpleForm from '../../components/constructs/simple-form/simple-form-view'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
`

export const StyledSimpleForm = styled(SimpleForm)`
    max-width: 250px;
    align-items: center;
`

export const FormContainer = styled.div`
    height: 100%;
    position: -webkit-sticky; /* Safari */
    position: sticky !important;
    top: 350px;
    align-items: center;
    margin: 0 30px 0 30px;
`