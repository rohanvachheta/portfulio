import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import NavBar from "./components/navBar/NavBar";
import NotFound from "./components/NoMatchFound/NotFound";
import AppNew from "./components/facebook/App";
import About from "./components/About/About";
import Experience from "./components/Exp/Experience";
import Education from "./components/Education/Education";
import Project from "./components/Projects/Project";

// css
import "./App.css";
import SpringExp from "./components/LearnSpring/SpringExp";
import PivotTable from "./components/PivotTable/PivotTable";

function App() {
  let darkModeClass = "bg-white";
  if (localStorage.getItem("darkMode")) {
    darkModeClass = " bg-dark text-white";
  }
  // return <SpringExp />;

  return (
    <div className={darkModeClass} style={{ height: "100vh" }}>
      <div className="">
        <Router>
          {/* <NavBar /> */}
          <Switch>
            <Route path="/" component={AppNew} exact />

            <Route path="/exp" component={Experience} exact />

            <Route path="/Projects" component={Project} exact />

            <Route path="/edu" component={Education} exact />
            <Route path="/pivottable" component={PivotTable} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
