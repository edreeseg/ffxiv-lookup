import React from "react";
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components";

const StyledTopBar = styled.header`
  height: 40px;
  background: #808080;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Links = styled.nav`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: #eee;
  }

  .active {
    font-weight: bold;
    font-size: 1.7rem;
  }
`;

const TopBar = props => (
  <StyledTopBar>
    <Link to="/">XIV LOOKUP!</Link>
    <Links>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/character">My Character</NavLink>
    </Links>
  </StyledTopBar>
);

export default TopBar;
