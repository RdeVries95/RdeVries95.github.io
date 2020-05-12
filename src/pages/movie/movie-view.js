// Architectural imports
import React, { useState, useEffect } from 'react'

// Styled imports
import { Wrapper, MoviesContainer, StyledSimpleForm, FormContainer } from './movie-style'

// Components
import MovieCard from '../../components/constructs/movie-card/movie-card-view'

// Endpoints
import OMDB from '../../api/ODMB'

const MoviePage = () => {
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState(null)

  let api

  useEffect(() => {
    api = new OMDB()
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await api.searchMovie(title)
    setMovies(result.data.Search)
  }

  return (
    <Wrapper>
      <FormContainer>
        <StyledSimpleForm
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          handleSubmit={handleSubmit}
          label="Search for a movie"
          btnTxt="Search"
          id="a-movie"
        />
      </FormContainer>
      <MoviesContainer>
      {movies ? (
        <>
          {movies.map((movie) => {
            return (
              <MovieCard
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            )
          })}
        </>
      ) : <MovieCard poster={'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg'} title="Once Upon a Time... in Hollywood" year="2019"/>}
      </MoviesContainer>
    </Wrapper>
  )
}

export default MoviePage
