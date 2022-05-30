import React, { useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";

// import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import menuIcon from "../../images/hamburger-icon.png";
import { AppContext } from "../../app";

export default function Discover() {
  const { open, toggleSidebar } = useContext(AppContext);
  const [state, setState] = useState({
    keyword: "",
    year: 0,
    results: [],
    totalCount: 0,
    genreOptions: [],
    ratingOptions: [
      { id: 7.5, name: 7.5 },
      { id: 8, name: 8 },
      { id: 8.5, name: 8.5 },
      { id: 9, name: 9 },
      { id: 9.5, name: 9.5 },
      { id: 10, name: 10 },
    ],
    languageOptions: [
      { id: "GR", name: "Greek" },
      { id: "EN", name: "English" },
      { id: "RU", name: "Russian" },
      { id: "PO", name: "Polish" },
    ],
  });

  useEffect(() => {
    (async function () {
      const { results, total_results: totalCount } =
        await fetcher.getMovieDetails("movie/popular");
      setState(prev => ({ ...prev, results, totalCount }));
      const { genres: genreOptions } = await fetcher.getMovieDetails(
        "genre/movie/list"
      );
      setState(prev => ({ ...prev, genreOptions }));
    })();
  }, []);

  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs
  const { genreOptions, languageOptions, ratingOptions, totalCount, results } =
    state;

  const searchMovies = async (query, year, filters = "") => {
    const path = query ? "search/movie" : "discover/movie";
    const { results, total_results: totalCount } =
      await fetcher.getMovieDetails(path, `&query=${query}&year=${year}`);
    setState(prev => ({ ...prev, results, totalCount }));
  };
  return (
    <DiscoverWrapper>
      {open && <Overlay onClick={toggleSidebar} />}
      <Header>
        <MobilePageTitle>
          <input
            alt="menu"
            type="image"
            src={menuIcon}
            arial-lable="menu"
            onClick={toggleSidebar}
          />
          Discover
        </MobilePageTitle>
      </Header>
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount className="only-desktop">
        <span>{totalCount || "No"} movies</span>
      </TotalCount>
      <MoviesWrapper>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => searchMovies(keyword, year)}
          />
          <TotalCount className="only-mobile">
            <span>{totalCount || "No"} movies</span>
          </TotalCount>
        </MovieFilters>
        <MovieResults>
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>
      </MoviesWrapper>
    </DiscoverWrapper>
  );
}
const hide = css`
  display: none;
`;
const DiscoverWrapper = styled.main`
  padding: 35px 45px;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 1024px) {
    padding-top: 0;
  }
`;
const Header = styled.div`
  width: 100%;
  top: 0;
  position fixed;
  padding-top: 25px;
  padding-bottom: 20px;
  background-color: #f6f7f9;
  z-index: 1;
  @media only screen and (min-width: 1025px) {
    ${hide}
  }
`;
const MoviesWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Overlay = styled.div`
  top: -160px;
  bottom: 0;
  width: 100%;
  position: absolute;
  background: rgb(185 170 170 / 23%);
  z-index: 8;
`;

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
  @media only screen and (max-width: 1024) {
    margin-top: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-top: 7.25rem;
  }
`;

const MobilePageTitle = styled.h1`
  ${hide}
  margin-top: 0px;
  input {
    width: 2.5rem;
    margin-right: 1.2rem;
  }
  @media only screen and (max-width: 1024px) {
    display: flex;
    margin: 0;
  }
`;

const TotalCount = styled.div`
  display: block;
  &.only-mobile,
  &.only-desktop {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    &.only-desktop {
      ${hide}
    }
    &.only-mobile {
      padding-top: 45px;
      margin-bottom: 0;
    }
  }
  @media only screen and (min-width: 769px) {
    &.only-mobile {
      ${hide}
    }
  }
  @media only screen and (max-width: 1024px) {
    &.only-desktop {
      margin-top: 7.25rem;
    }
  }
`;
