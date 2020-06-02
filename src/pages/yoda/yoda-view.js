// Architectural imports
import React, { useState, useEffect, useRef } from "react";

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

  let api = useRef(null);

  useEffect(() => {
    api.current = new Yoda();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const count = text.split(' ').length;
    console.log(count)
    if (count > 1) {
      const result = await api.current.convertToYoda(text);
      if (result === 429) {
        setResponse("Too many requests, there have been.");
      } else {
        setResponse(result.data.contents.translated);
      }
    } else {
      setResponse("You should enter more words.");
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
        label="Enter a sentence"
      />
      {response ? <Response>{response}</Response> : null}
    </StyledColumn>
  );
};

export default YodaPage;
