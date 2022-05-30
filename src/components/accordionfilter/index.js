// import React from "react";
import { useState } from "react";
import plusIcon from "../../images/plus-icon.png";
import Checkbox from "../checkbox";

export default function AccordionFilter({ title, filters }) {
  const [state, setState] = useState([]);
  const handleChange = (name, value) => {
    if (value) return setState((prev) => [...prev, name]);
    setState((prev) => prev.filter((id) => id !== name));
  };
  return (
    <div className="accordion-filter">
      <div className="title">
        <img src={plusIcon} width="20" height="20" alt="+" /> Select {title}
      </div>
      {filters.map(({ id, name }) => {
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
