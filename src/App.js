import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import People from "./pages/people";
import "./styles/css/style.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
