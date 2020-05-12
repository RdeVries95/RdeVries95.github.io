// Architectural imports
import React, { useState, useEffect } from "react";

import image from "../../assets/images/yoda.png";

// Styled imports
import {
  YodaContainer,
  TranslationContainer,
  StyledSimpleForm,
  StyledTextOutput,
  YodaImg,
  QuoteRight,
  QuoteLeft,
} from "./yoda-style";

// Components
import Wrapper from "../../components/primitives/Wrapper";

// Endpoints
import Yoda from "../../api/Yoda";

const YodaPage = () => {
  const [yodaText, setYodaText] = useState("");
  const [normalText, setNormalText] = useState("");

  let api;

  useEffect(() => {
    api = new Yoda();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await api.convertToYoda(normalText);
    if (result === 429) {
        setYodaText("Too many requests, there have been.");
    } else {
        setYodaText(result.data.contents.translated);
    }
  };

  return (
    <Wrapper>
      <YodaContainer>
        <TranslationContainer>
          <StyledSimpleForm
            label="Let your speak be Yoda"
            btnTxt="Translate"
            onChange={(e) => {
              setNormalText(e.target.value);
            }}
            handleSubmit={handleSubmit}
            id="yoda-text"
          />
          <StyledTextOutput>
            <QuoteLeft />
            <h3>{yodaText ? yodaText : "..."}</h3>
            <QuoteRight />
          </StyledTextOutput>
        </TranslationContainer>
        <YodaImg src={image} />
      </YodaContainer>
    </Wrapper>
  );
};

export default YodaPage;
