// Architectural imports
import React, { useState, useEffect } from "react";

// Styled imports
import { BoxingRing, StyledRow, Description, P, Image } from "./about-style";

// Components
import PageHeader from "../../components/constructs/page-header/page-header-view";
import BackButton from "../../components/constructs/back-button/back-button-view";

// Content
import aboutImage from "../../assets/images/about-image.jpg";

const AboutPage = () => {
  useEffect(() => {});

  return (
    <>
      <PageHeader title="Let me tell you who I am" />
      <BackButton />
      <StyledRow>
        <Image src={aboutImage} />
        <Description>
        <p>My name is Ricardo, and I like programming web applications. I started using Google Tag Manager, and slowly worked my way to frontend development where I prefer ReactJS.</p>
        <p>I'm constantly trying to learn new things. I've started working on a Laravel backend application, and in my day to day job I'm working with ReactJS.</p>
        <p>One of the biggest lessons I'm learning every time I start a new project is that there's a lot that I don't know. There's almost always a better, more elegant, or maybe a smarter way to handle my code. But that's what makes it so much fun ;)</p>
        </Description>
      </StyledRow>
      <StyledRow>
        <BoxingRing>

        </BoxingRing>
      </StyledRow>
    </>
  );
};

export default AboutPage;
