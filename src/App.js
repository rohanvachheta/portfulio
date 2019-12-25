import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import NotFound from "./components/NoMatchFound/NotFound";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Exp/Experience";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={About} exact />

          <Route path="/exp" component={Experience} exact />

          <Route path="/Projects" component={Experience} exact />

          <Route path="/edu" component={Education} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
