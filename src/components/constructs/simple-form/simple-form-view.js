import React from 'react';

// Components
import Wrapper from '../../primitives/Wrapper'
import Input from '../input/input-view'
import PrimaryBtn from '../../primitives/buttons/primary-btn-view'

// Endpoints

const SimpleForm = ({ handleSubmit, onChange, label, id, btnTxt }) => {
  return (
    <Wrapper>
        <form onSubmit={handleSubmit}>
            <Input required onChange={onChange} label={label} id={id} type="text" />
            <PrimaryBtn>{btnTxt}</PrimaryBtn>
        </form>
    </Wrapper>
  )
}

export default SimpleForm