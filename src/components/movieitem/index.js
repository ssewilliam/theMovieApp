import React from "react";
import styled from 'styled-components';

export default function MovieItem ({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
      </RightCont>
    </MovieItemWrapper>
  )
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`

const LeftCont = styled.div`
  display: inline-block;
`

const RightCont = styled.div`
  display: inline-block;
`

const Title = styled.h2`
  font-size: 1.4;
`;