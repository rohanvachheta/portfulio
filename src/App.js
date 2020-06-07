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
    try {
      const version = window.localStorage.getItem("version");
      console.log("App -> version", version);
      if (version && version !== 1) {
        window.confirm(`New content is available!. Click OK to refresh`);
        window.localStorage.setItem("version", 1);
        return;
      }
      window.localStorage.setItem("version", 2);
    } catch (error) {
      //
    }
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
