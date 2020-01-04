import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  let darkModeClass = "navbar-light bg-light";
  if (localStorage.getItem("darkMode")) {
    darkModeClass = "navbar-dark bg-dark";
  }

  const handleSwithChange = event => {
    if (event.target.checked) {
      window.localStorage.setItem("darkMode", true);
    } else {
      window.localStorage.clear();
    }
    window.location.reload();
  };

  // const IsCheckedDarkMode=

  return (
    <div className="mb-5">
      <nav className={`navbar navbar-expand-lg ${darkModeClass}`}>
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

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="/exp">
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Projects">
                Projects
              </NavLink>
            </li>
          </ul>

          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onChange={handleSwithChange}
              checked={!!localStorage.getItem("darkMode")}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Dark Mode
            </label>
          </div>
          <a>
            <span className="navbar-text">Rohan Vachheta</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
