import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import plusIcon from "../../images/plus-icon.png";
import MinusIcon from "../../images/minus-icon.png";
import Checkbox from "../checkbox";

export default function AccordionFilter({ title, filters }) {
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(false);
  const handleChange = (name, value) => {
    if (value) return setState(prev => [...prev, name]);
    setState(prev => prev.filter(id => id !== name));
  };
  return (
    <div className="accordion-filter">
      <div className="title">
        <input
          src={!open ? plusIcon : MinusIcon}
          onClick={() => setOpen(!open)}
          type="image"
          height="20"
          width="20"
          alt="+"
        />{" "}
        Select {title}
      </div>
      {open &&
        filters.map(({ id, name }) => {
          return (
            <Checkbox
              id={id}
              name={id}
              label={name}
              key={id || name}
              className="checkbox"
              checked={state.includes(id)}
              onChange={handleChange}
            />
          );
        })}
    </div>
  );
}
AccordionFilter.propTypes = {
  title: PropTypes.string,
  filters: PropTypes.array,
};
