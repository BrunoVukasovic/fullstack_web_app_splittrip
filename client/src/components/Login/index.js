import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import Container from "../Container";

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
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios.post("/api/login", { email, password }).then(res => {
      console.log(res.data);
      if (res.data == email) {
        console.log("KURAC RADI");
        console.log(this.props);
        this.props.history.push("/register");
      }
    });
  };

  render() {
    return (
      <Container>
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
    );
  }
}

export default withRouter(Login);
