import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import NavBar from "./components/navBar/NavBar";
import NotFound from "./components/NoMatchFound/NotFound";
import AppNew from "./components/facebook/App";
import About from "./components/About/About";
import Experience from "./components/Exp/Experience";
import Education from "./components/Education/Education";
import Project from "./components/Projects/Project";
import { Workbox } from "workbox-window";

// css
// import "./App.css";
import SpringExp from "./components/LearnSpring/SpringExp";
import PivotTable from "./components/PivotTable/PivotTable";
import TestNewUI from "./components/testnew/TestNewUI";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SecoundNewUI from "./components/secoundNew/SecoundNewUI";
import ThirdNewUI from "./components/third/ThirdNewUI";
import CacheBuster from "./CacheBuster";

library.add(faEnvelope, faKey, fas);

function App() {
  console.log("version chane");

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("roah12 update version");
      navigator.serviceWorker
        .register("custom-service-worker.js")
        .then((reg) => {
          if (reg.waiting) {
            window.alert("new ver");

            // a new version is already waiting to take control
            this.newWorker = reg.waiting;
            window.confirm("new verison bro");

            /*
              code omitted: displays a snackbar to the user to manually trigger
              activation of the new SW. This will be done by calling skipWaiting()
              then reloading the page
            */
          }

          // handler for updates occuring while the app is running, either actively or in the background
          reg.onupdatefound = () => {
            this.newWorker = reg.installing;

            this.newWorker.onstatechange = () => {
              if (this.newWorker.state === "installed") {
                if (reg.active) {
                  // a version of the SW already has control over the app
                  /*
                    same code omitted
                  */
                } else {
                  // very first service worker registration, do nothing
                }
              }
            };
          };
        });
    }
    // window.confirm(`New content is available!. Click OK to refresh`);
  }, []);

  let darkModeClass = "bg-white";
  if (localStorage.getItem("darkMode")) {
    darkModeClass = " bg-dark text-white";
  }
  // return <SpringExp />;

  return (
    <div className="App">
      <div className={darkModeClass} style={{ height: "100vh" }}>
        <div className="">
          <Router>
            {/* <NavBar /> */}
            <Switch>
              <Route path="/" component={ThirdNewUI} exact />

              <Route path="/exp" component={Experience} exact />

              <Route path="/Projects" component={Project} exact />

              <Route path="/edu" component={Education} exact />
              <Route path="/pivottable" component={PivotTable} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
