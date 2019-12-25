import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/exp">
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Projects">
                Projects
              </NavLink>
            </li>
          </ul>
          <span class="navbar-text">Rohan Vachheta</span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
