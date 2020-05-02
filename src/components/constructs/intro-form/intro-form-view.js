import React from 'react';

// Components
import Wrapper from '../../primitives/Wrapper'
import Input from '../input/input-view'
import PrimaryBtn from '../../primitives/buttons/primary-btn-view'

// Endpoints

const IntroForm = ({ handleSubmit, onChange }) => {
  return (
    <Wrapper>
        <form onSubmit={handleSubmit}>
            <Input required onChange={onChange} label="Your name" id="user-name" type="text" />
            <PrimaryBtn>Continue</PrimaryBtn>
        </form>
    </Wrapper>
  )
}

export default IntroForm