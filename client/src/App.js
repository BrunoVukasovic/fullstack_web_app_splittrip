import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { LandingPage } from "./pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  getTrips = () => {
    axios.get("/api/trips").then(res => {
      console.log(res);
      this.setState({ trips: res.data });
    });
  };

  render() {
    return (
      <Router>
        <LandingPage />
      </Router>
    );
  }
}

export default App;
