// Architectural imports
import React from "react";

// Styled imports
import { Poster, InnerCard, StyledCard, H3 } from "./movie-card-style";

const MovieCard = ({ poster, title, year }) => {
  return (
    <StyledCard>
      <InnerCard>
        <Poster src={poster} />
          <H3>{title}</H3>
          <p>{year}</p>
      </InnerCard>
    </StyledCard>
  );
};

export default MovieCard;
