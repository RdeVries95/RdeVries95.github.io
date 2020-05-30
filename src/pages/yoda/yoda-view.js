// Architectural imports
import React, { useState, useEffect } from "react";

// Styled imports
import {
  StyledColumn,
  StyledSimpleForm,
  Response,
  StyledBackButton,
} from "./yoda-style";

// Components
import PageHeader from "../../components/constructs/page-header/page-header-view";

// Endpoints
import Yoda from "../../api/Yoda";

const YodaPage = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  let api;

  useEffect(() => {
    api = new Yoda();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await api.convertToYoda(text);
    if (result === 429) {
      setResponse("Too many requests, there have been.");
    } else {
      setResponse(result.data.contents.translated);
    }
  };

  return (
    <StyledColumn>
      <StyledBackButton />
      <PageHeader title="Convert your text to Yoda" />
      <StyledSimpleForm
        onSubmit={handleSubmit}
        onChange={(e) => {
          setText(e.target.value);
        }}
        buttonText="Convert"
        label="Enter your text"
      />
      {response ? <Response>{response}</Response> : null}
    </StyledColumn>
  );
};

export default YodaPage;
