import styled from "styled-components";

import SimpleForm from "../../components/constructs/simple-form/simple-form-view";
import { Card } from "../../components/primitives/card/card-style";

import { QuoteAltLeft } from "@styled-icons/boxicons-solid/QuoteAltLeft";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";

export const YodaImg = styled.img`
  width: 600px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  margin-left: -50px;
`;

export const YodaContainer = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  margin-top: 80px;
`;

export const TranslationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const StyledSimpleForm = styled(SimpleForm)``;

export const StyledTextOutput = styled.div`
  margin-top: 30px;
`;

export const QuoteLeft = styled(QuoteAltLeft)`
  width: 30px;
`;

export const QuoteRight = styled(QuoteAltRight)`
  width: 30px;
`;
