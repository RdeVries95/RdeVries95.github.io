// Architectural imports
import React from 'react'
import Ripples from 'react-ripples'

// Styled imports
import {
    StyledPrimaryButton
} from './primary-btn-style'

const PrimaryBtn = (props) => {
    return ( 
        <Ripples color="#fff" during={1400}>
            <StyledPrimaryButton>{props.children}</StyledPrimaryButton>
        </Ripples>
     );
}
 
export default PrimaryBtn;