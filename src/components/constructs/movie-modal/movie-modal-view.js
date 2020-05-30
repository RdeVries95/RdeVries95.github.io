// Architectural imports
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// Styled imports
import {
  MovieTitle,
  Description,
  StyledColumn,
  StyledButton,
  ButtonContainer,
} from "./movie-modal-style";
import "./modal-styles.css";

// Endpoints
import OMDB from "../../../api/ODMB";

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#f5f6f88f",
  },
  content: {
    position: "absolute",
    bottom: "0px",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    padding: "48px 58px",
    margin: "auto",
    maxWidth: "800px",
    border: "2px solid black",
    borderRadius: "0px",
  },
};

Modal.setAppElement("#root");

const MovieModal = ({ isOpen, setIsOpen, movieId }) => {
  const [title, setTitle] = useState();
  const [plot, setPlot] = useState();
  const [genre, setGenre] = useState();

  let api;

  useEffect(() => {
    api = new OMDB();

    async function fetchData() {
      const result = await api.getMovie(movieId);
      setTitle(result.data.Title);
      setPlot(result.data.Plot);
      setGenre(result.data.Genre);
    }

    fetchData();
  }, [movieId]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={style}
    >
      <StyledColumn>
        <MovieTitle>{title}</MovieTitle>
  <p>Genre: {genre}</p>
        <p>{plot}</p>
      </StyledColumn>
      <ButtonContainer>
        <StyledButton onClick={() => setIsOpen(false)}>Close</StyledButton>
      </ButtonContainer>
    </Modal>
  );
};

export default MovieModal;
