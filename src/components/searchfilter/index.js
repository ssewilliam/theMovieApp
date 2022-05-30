import PropTypes from "prop-types";
import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

// import * as colors from "../../colors";
import ExpandableFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import FilterIcon from "../../images/filter-icon.png";
import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

export default function SearchFilters({ searchMovies, ...filters }) {
  const [state, setState] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const previousSearch = useRef("");
  function delaySearch(name, value) {
    setState(prev => ({ ...prev, [name]: value }));
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
          filterIcon={{
            src: FilterIcon,
            alt: "Filter icon",
            onClick: () => setShowFilters(!showFilters),
          }}
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
      <SearchFiltersCont className={`filters ${showFilters ? "visible" : ""}`}>
        <CategoryTitle>Movies</CategoryTitle>
        <ExpandableFilter title="genre(s)" filters={filters.genres} />
        <ExpandableFilter title="min. vote" filters={filters.ratings} />
        <ExpandableFilter title="language" filters={filters.languages} />
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}
SearchFilters.propTypes = {
  searchMovies: PropTypes.func,
  filters: PropTypes.object,
};

const FiltersWrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    .search_inputs_cont {
      .search_bar_wrapper:first-child {
        input.filter {
          display: block;
        }
      }
    }
  }
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 768px) {
    &.filters {
      display: none;
    }
    &.visible {
      display: block;
    }
    .search_bar_wrapper {
      display: none;
      &:first-child {
        display: flex;
      }
      .visible {
        display: block;
      }
    }
  }
  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
    input.filter {
      display: none;
      width: 25px;
    }
  }

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
