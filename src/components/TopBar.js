import React from "react";
import { NavLink, Link } from "react-router-dom";

const TopBar = props => (
  <header className="top-bar">
    <Link to="/">XIV LOOKUP!</Link>
    <nav className="top-bar-links">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink exact to="/character">
        My Character
      </NavLink>
    </nav>
  </header>
);

export default TopBar;
