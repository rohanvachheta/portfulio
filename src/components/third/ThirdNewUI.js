/* eslint-disable no-script-url */
import React, { useState } from "react";
import ClearCache from "react-clear-cache";
import { Spring } from "react-spring/renderprops";

import PropTypes from "prop-types";
import SideBarThird from "./SideBarThird";
import "../navBar/NavBar.css";

const ThirdNewUI = (props) => {
  const [stractched, setstractched] = useState(false);

  return (
    <div class="container-fluid" style={props}>
      <div className="row">
        <Spring
          from={{
            width: stractched ? "300px" : "100px",
          }}
          to={{
            width: stractched ? "100px" : "300px",
          }}
        >
          {(props) => (
            <div
              className={`stracted ${stractched && "ready_to_big"}`}
              style={props}
            >
              <ClearCache>
                {({ isLatestVersion, emptyCacheStorage }) => {
                  console.log("ThirdNewUI -> isLatestVersion", isLatestVersion);
                  return (
                    <div>
                      {!isLatestVersion && (
                        <p>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              emptyCacheStorage();
                            }}
                          >
                            Update version
                          </a>
                        </p>
                      )}
                    </div>
                  );
                }}
              </ClearCache>
              <SideBarThird />
            </div>
          )}
        </Spring>
        <div className="col-lg-10">
          <a href="javaScript:;" onClick={() => setstractched(!stractched)}>
            stract
          </a>
        </div>
      </div>
    </div>
  );
};

ThirdNewUI.propTypes = {
  //
};

export default ThirdNewUI;
