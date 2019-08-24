import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage, Register } from "./pages";
import { Login, Trip } from "./components";
import { connect } from "react-redux";
import { loginAction } from "./actions/loginAction";

class App extends Component {
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.props.saveUserToStore(user);
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/krka" component={Trip} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveUserToStore: user => {
      dispatch(loginAction(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
