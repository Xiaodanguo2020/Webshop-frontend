import "./style.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbarcontainer() {
  return (
    <div className="navbar-container">
      <div className="nav-and-search-bar">
        <div className="nav-links">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/shop">
            Shop
          </NavLink>
          <NavLink className="nav-item" to="/details">
            Products
          </NavLink>
          <NavLink className="nav-item" to="/detailes/1">
            About
          </NavLink>
        </div>
        <input className="search-bar"></input>
      </div>
      <div className="icons"></div>
    </div>
  );
}

export { Navbarcontainer };
