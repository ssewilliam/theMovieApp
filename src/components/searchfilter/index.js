import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

// import * as colors from "../../colors";
import ExpandableFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

export default function SearchFilters({ searchMovies, ...filters }) {
  const [state, setState] = useState({});
  const previousSearch = useRef("");
  function delaySearch(name, value) {
    setState((prev) => ({ ...prev, [name]: value }));
    previousSearch.current = value;
    setTimeout(async () => {
      if (previousSearch.current === value) {
        const params = { ...state, [name]: value };
        await searchMovies(params.keyWord || "", params.year || "");
      }
    }, 500);
  }
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          name="keyWord"
          value={state.keyWord || ""}
          onChange={delaySearch}
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
        />
        <SearchBar
          id="year_search_input"
          type="number"
          name="year"
          onChange={delaySearch}
          value={state.year || ""}
          icon={{ src: YearIcon, alt: "Calendar icon" }}
          placeholder="Year of release"
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        <ExpandableFilter title="genre(s)" filters={filters.genres} />
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
