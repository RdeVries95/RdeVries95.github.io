// Architectural imports
import React, { useState, useEffect, useRef } from "react";

// Styled imports
import {
  StyledColumn,
  StyledSimpleForm,
  Poster,
  StyledBackButton,
  PosterContainer,
} from "./movie-style";

// Components
import PageHeader from "../../components/constructs/page-header/page-header-view";
import MovieModal from "../../components/constructs/movie-modal/movie-modal-view";

// Endpoints
import OMDB from "../../api/ODMB";

const MoviePage = () => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);

  let api = useRef(null);

  useEffect(() => {
    api.current = new OMDB();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await api.current.searchMovie(search);
    setResponse(result.data.Search);
  };

  const handleClick = async (id) => {
    setMovieId(id);
    setIsOpen(true);
  };

  return (
    <StyledColumn>
      <StyledBackButton />
      <PageHeader title="Search for a movie" />
      <StyledSimpleForm
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        buttonText="Search"
      />
      {response ? (
        <PosterContainer>
          {response.map((poster, index) => {
            if (poster.Poster !== "N/A") {
              return (
                <Poster
                  key={index}
                  src={poster.Poster}
                  onClick={() => handleClick(poster.imdbID)}
                />
              );
            }
            return null;
          })}
        </PosterContainer>
      ) : null}
      <MovieModal isOpen={isOpen} setIsOpen={setIsOpen} movieId={movieId} />
    </StyledColumn>
  );
};

export default MoviePage;
