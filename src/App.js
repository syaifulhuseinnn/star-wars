import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import People from "./pages/people";
import PeopleDetails from "./pages/people_details";
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
        <Route exact path="/people/:id">
          <PeopleDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
