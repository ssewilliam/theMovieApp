import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as colors from "../../colors";

export default function SearchBar({ icon, name, id, type, onChange, ...rest }) {
  return (
    <InputWrapper className="search_bar_wrapper">
      <img src={icon.src} alt={icon.alt} htmlFor={id} width="25" />
      <input
        {...{ name, type, id }}
        onChange={e => onChange(name, e.target.value)}
        placeholder={rest.placeholder}
      />
      {rest?.filterIcon?.src && (
        <input
          type="image"
          src={rest.filterIcon.src}
          alt={rest.filterIcon.alt || ""}
          className="filter"
          onClick={rest.filterIcon.onClick}
        />
      )}
    </InputWrapper>
  );
}
SearchBar.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  rest: PropTypes.object,
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid;
  color: ${colors.primaryColor};

  input {
    width: calc(100% - 35px);
    border: 0;
    outline: none;
    color: ${colors.primaryColor};
    font-size: 1.2em;
    margin-left: 10px;
    font-weight: 900;

    &::placeholder {
      opacity: 0.8;
      color: ${colors.primaryColor};
      font-weight: 300;
    }
  }
`;
