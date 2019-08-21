import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { LandingPage, Register, Login } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
