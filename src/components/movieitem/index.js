import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default function MovieItem({ movie, genres }) {
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
        <GenreList {...{ genre_ids: movie.genre_ids, genres }} />
        <div>
          <p>{movie.overview}</p>
        </div>
        <DateReleased>
          <h6>{movie.release_date}</h6>
        </DateReleased>
      </RightCont>
    </MovieItemWrapper>
  );
}
const GenreList = ({ genre_ids, genres }) => {
  return (
    <Headline wrap="wrap">
      {genre_ids.map((id) => (
        <span key={id}>{genres[id]?.name}</span>
      ))}
    </Headline>
  );
};
const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  margin: 15px 0;
`;

const LeftCont = styled.div`
  display: inline-block;
  img {
    max-height: 200px;
  }
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  flex-grow: 1;
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
