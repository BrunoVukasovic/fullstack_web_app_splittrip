import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./styles.module.css";
import Container from "../Container";
import Layout from "../Layout";
import { loginAction } from "../../actions/loginAction";
import { logoutAction } from "../../actions/logoutAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "Enter your credentials",
      success: false,
      invalid: false
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  LogOut = () => {
    axios.get("/api/login/logout").then(res => {
      console.log(res);
      this.props.removeUserFromStore();
      localStorage.clear();
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios.post("/api/login", { email, password }).then(res => {
      console.log(res);
      const { FirstName: firstName, LastName: lastName, Phone: phone } = res.data
      if (res.data.Email == email) {
        const user = {
          firstName,
          lastName,
          phone
        }
        this.props.saveUserToStore(res.data);
        localStorage.setItem("user", JSON.stringify(user));
        this.props.history.push("/register");
      } else {
        this.setState({invalid: true})
        // ispisi poruku o gresci
      }
    });
  };

  handleClick = () => {
    this.props.changeBoolean();
  };

  render() {
    return (
      <Layout>
        <Container>
          {this.props.isLogged ? <h2>Ulogiran</h2> : <h2>Nije logiran</h2>}
          <button onClick={this.handleClick}>REDUX</button>
          <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
            <label className={styles.Label}>{this.state.message}</label>

            <input
              autoFocus
              type="text"
              name="email"
              className={styles.Input}
              placeholder="Your email address"
              onChange={this.onChange}
              value={this.state.email}
            />

            <input
              type="password"
              name="password"
              className={styles.Input}
              placeholder="Your password"
              onChange={this.onChange}
              value={this.state.password}
            />

            <input type="submit" className={styles.Button} value={"Login"} />
          </form>

          <div className={styles.Register}>
            <label className={styles.Label}>Dont't have an account?</label>

            <button className={styles.Button} onClick={() => this.LogOut()}>
              Logout
            </button>
          </div>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProp = state => {
  return {
    isLogged: state.isLoggedReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeBoolean: () => {
      dispatch(loginAction());
    },
    saveUserToStore: user => {
      dispatch(loginAction(user));
    },
    removeUserFromStore: () => {
      dispatch(logoutAction());
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);
