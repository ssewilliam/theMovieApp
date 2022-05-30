import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import { AppContext } from "../../app";

export default function SideNavBar() {
  const { open, toggleSidebar } = useContext(AppContext);
  /* TODO: Write the necessary functions to open and close the sidebar */
  const handleClick = () => {
    if (!open) return null;
    toggleSidebar();
  };
  return (
    <SideNavBarCont className={open ? "visible" : ""}>
      {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
      {/* The sidebar should slide in from left */}
      <SideNavHeader>
        Wesley
        {open && (
          <img
            src={Arrow}
            role="presentation"
            onClick={toggleSidebar}
            alt="Arrow pointing left"
          />
        )}
      </SideNavHeader>
      <SideNavMainLink to="/discover" onClick={handleClick} exact>
        Discover
        <img src={SearchWhite} alt="Magnifying glass" />
      </SideNavMainLink>
      <SideNavSectionTitle>
        <HeaderText>Watched</HeaderText>
      </SideNavSectionTitle>
      <NavLink to="/watched/movies" onClick={handleClick}>
        Movies
      </NavLink>
      <NavLink to="/watched/tv-shows" onClick={handleClick}>
        Tv Shows
      </NavLink>
      <SideNavSectionTitle>
        <HeaderText>Saved</HeaderText>
      </SideNavSectionTitle>
      <NavLink to="/saved/movies" onClick={handleClick}>
        Movies
      </NavLink>
      <NavLink to="/saved/tv-shows" onClick={handleClick}>
        Tv Shows
      </NavLink>
    </SideNavBarCont>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  color: white;
  transition: 0.3s ease;
  background-color: ${colors.sideNavBar};
  @media only screen and (max-width: 1024px) {
    transform: translateX(-100%);
  }
  &.visible {
    transform: translateX(0%);
    box-shadow: 0.5px 0 2px #001e2d;
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  img {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;
