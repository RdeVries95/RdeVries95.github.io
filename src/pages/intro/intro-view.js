// Architectural imports
import React, { useState } from 'react'
import { navigate } from '@reach/router'

// Styled imports
import { IntroText, H1, P, InnerWrapper } from './intro-style'

// Components
import Wrapper from '../../components/primitives/Wrapper'
import SimpleForm from '../../components/constructs/simple-form/simple-form-view'

import { setName } from '../../tools/session-info'

// Content imports
import { PATHNAMES } from '../../config/pathnames'

const IntroPage = ({ setUser }) => {
  const [name, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName(name)
    setUser(name)
    navigate(PATHNAMES.HOME)
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <IntroText>
          <H1>Hi there!</H1>
          <P>You're here! Excellent! Welcome to my showcase app.</P>
          <P>
            Using this app I try to showcase my dev skills. Either by giving a
            demo of the code I wrote, or by amusing you while using this
            application. Take a look at what I created, and just play with it a
            bit.
          </P>
          <P>
            Please start with entering your first name in the text input field
            at the right.
          </P>
        </IntroText>
        <SimpleForm
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          handleSubmit={handleSubmit}
          label="Your name"
          btnTxt="Continue"
          id="your-name"
        />
      </InnerWrapper>
    </Wrapper>
  )
}

export default IntroPage
