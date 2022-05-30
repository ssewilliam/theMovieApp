import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as colors from "../../colors";

export default function MovieItem({ movie, ...rest }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </LeftCont>
      <RightCont>
        <Headline wrap="nowrap">
          <Title>{movie.title}</Title>
          <AverageVote>{movie.vote_average}</AverageVote>
        </Headline>
        <GenreList {...{ ...rest, genre_ids: movie.genre_ids }} />
        <div className={movie.overview?.length > 372 ? "movie-overview" : ""}>
          <p>{movie.overview}</p>
        </div>
        <DateReleased>
          <h6>{movie.release_date}</h6>
        </DateReleased>
      </RightCont>
    </MovieItemWrapper>
  );
}
MovieItem.propTypes = {
  movie: PropTypes.object,
  resr: PropTypes.object,
};
const GenreList = ({ genre_ids, genres }) => {
  return (
    <Headline wrap="wrap">
      {genre_ids.map(id => (
        <span key={id}>{genres[id]?.name}</span>
      ))}
    </Headline>
  );
};
GenreList.propTypes = {
  genre_ids: PropTypes.array,
  genres: PropTypes.any,
};
const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  margin: 15px 0;
  &:first-child {
    margin: 0;
  }
  @media only screen and (max-width: 425px) {
    display: block;
  }
`;

const LeftCont = styled.div`
  display: inline-block;
  @media only screen and (max-width: 425px) {
    img {
      max-height: unset !important;
      width: 100%;
      margin-bottom: 20px;
    }
  }
  img {
    max-height: 260px;
  }
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  flex-grow: 1;
  @media only screen and (max-width: 425px) {
    padding-left: 0;
  }
  .movie-overview {
    p {
      mask-image: linear-gradient(black, transparent);
      -webkit-mask-image: linear-gradient(black, transparent);
      height: 100px;
      &:hover {
        height: auto;
        mask-image: unset;
        -webkit-mask-image: unset;
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.4em;
  margin-top: 0;
`;

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ wrap }) => wrap};
  span {
    padding-left: 5px;
    padding-right: 5px;
    border-left: 2px solid ${colors.primaryColor};
    font-size: 0.8em;
    margin-bottom: 3px;
    &:first-child {
      padding-left: 0;
      border: none;
    }
  }
`;

const DateReleased = styled.div`
  display: flex;
  margin-top: auto;
  h6 {
    margin: 0;
    color: ${colors.primaryColor};
  }
`;

const AverageVote = styled.div`
  margin-left: auto;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: ${colors.lightBackground};
  height: 30px;
  min-width: 30px;
  background-color: ${colors.primaryColor};
`;
