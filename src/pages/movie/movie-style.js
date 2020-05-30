import styled from "styled-components";

import Column from "../../components/primitives/column";
import Row from "../../components/primitives/row";
import SimpleForm from "../../components/constructs/simple-form/simple-form-view";
import BackButton from "../../components/constructs/back-button/back-button-view";

export const StyledColumn = styled(Column)``;

export const StyledRow = styled(Row)``;

export const StyledBackButton = styled(BackButton)``;

export const StyledSimpleForm = styled(SimpleForm)``;

export const MovieTitle = styled.h2``;

export const Description = styled.p``;

export const Poster = styled.img`
  width: 450px;
  object-fit: cover;
  cursor: pointer;
`;

export const PosterContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 450px 450px;
  margin-top: 100px;
`;
