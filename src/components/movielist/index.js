import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MovieItem from "../movieitem";

export default function MovieList({ movies, genres: genreOptions }) {
  let genres = [...genreOptions].map(genre => ({ [genre.id]: genre }));
  genres = Object.assign({}, ...genres);
  return (
    <MoviesWrapper>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} genres={genres} />
      ))}
    </MoviesWrapper>
  );
}
MovieList.propTypes = {
  movies: PropTypes.array,
  genres: PropTypes.array,
};

const MoviesWrapper = styled.div`
  position: relative;
`;
