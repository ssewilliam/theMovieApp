import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default function Checkbox({ id, name, label, onChange, ...rest }) {
  // TODO: Style the component and checkmark to look like the mockup provided
  return (
    <CheckboxCont className={rest.className}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={rest.checked}
        onChange={e => onChange(name, e.target.checked)}
      />
      <label htmlFor={id} className="checkmark"></label>
      <span>{label}</span>
    </CheckboxCont>
  );
}
Checkbox.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  label: PropTypes.any,
  onChange: PropTypes.func,
  rest: PropTypes.object,
};

const CheckboxCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  input {
    display: none;
  }

  .checkmark {
    height: 15px;
    width: 15px;
    margin-left: 0;
    border-radius: 3px;
    border: 1px solid ${colors.fontColor};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid ${colors.primaryColor};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input:checked ~ .checkmark {
    background-color: ${colors.lightBackground};
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  span {
    margin-left: 10px;
  }
`;
