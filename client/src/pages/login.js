import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles/form.module.css";
import { Container, Layout } from "../components";
import { loginAction } from "../actions/loginAction";
import { logoutAction } from "../actions/logoutAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
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

  Login = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios
      .post("/api/login", { email, password })
      .then(res => {
        console.log(res.data);
        const {
          FirstName: firstName,
          LastName: lastName,
          Phone: phone,
          Email: email
        } = res.data;
        const user = {
          firstName,
          lastName,
          phone,
          email
        };
        this.props.saveUserToStore(user);
        localStorage.setItem("user", JSON.stringify(user));
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ errorMessage: "Wrong email or password" });
        console.log(error);
      });
  };

  render() {
    const { isAuthenticated } = this.props.isLogged;
    const { errorMessage } = this.state;

    return (
      <Layout>
        {isAuthenticated ? (
          <button className={"Button"} onClick={() => this.LogOut()}>
            Logout
          </button>
        ) : (
          <Container>
            <form className={styles.LoginForm} onSubmit={this.Login}>
              <label className={styles.ErrorInput}>{errorMessage}</label>

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

              <input type="submit" className={"Button"} value={"Login"} />
            </form>

            <div className={styles.Register}>
              <label className={styles.Label}>Dont't have an account?</label>
              <Link to="/register">
                <button className={"Button"}>Register</button>
              </Link>
            </div>
          </Container>
        )}
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
