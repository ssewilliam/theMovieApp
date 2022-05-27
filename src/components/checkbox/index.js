import React from "react";
import styled from 'styled-components';


export default function Checkbox ({ id, name, checked, label, onChange }) {
  // TODO: Style the component and checkmark to look like the mockup provided
  return (
    <CheckboxCont>
      <input type="checkbox" id={id} name={name} checked={checked} onChange={e => onChange(e.target.checked)}></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  )

}

const CheckboxCont = styled.div`
  position: relative;
`