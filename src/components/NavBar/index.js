import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/detailes/1">About</NavLink>
    </div>
  );
}

export { NavBar };
