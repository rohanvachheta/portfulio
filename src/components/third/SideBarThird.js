import React from "react";

import PropTypes from "prop-types";

import "./style.scss";

const SideBarThird = (props) => {
  return (
    <div className="p-4  sidebar" style={{ height: "100vh" }}>
      <div>
        <div className="pb-5 logo">Logo</div>
        <div className="side-menu-items mt-2">
          <nav class="nav flex-column" style={{ alignItems: "normal" }}>
            <a class="nav-link active" href="#">
              Active
            </a>
            <a class="nav-link" href="#">
              Link
            </a>
            <a class="nav-link" href="#">
              Link
            </a>
            <a class="nav-link " href="#">
              Disabled
            </a>
            <a class="nav-link active" href="#">
              Active
            </a>
            <a class="nav-link" href="#">
              Link
            </a>
            <a class="nav-link" href="#">
              Link
            </a>
            <a class="nav-link " href="#">
              Disabled
            </a>
          </nav>
        </div>

        <div class="footer">
          <a class="nav-link active" href="#">
            logout
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

SideBarThird.propTypes = {
  //
};

export default SideBarThird;
