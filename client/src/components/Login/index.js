import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import Container from "../Container";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "Enter your credentials",
    invalid: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    axios
      .post("/api/login", { email, password })
      .then(res => console.log(res.data));
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
          <Link to="/register">
            <button className={styles.Button}>Register</button>
          </Link>
        </div>
      </Container>
    );
  }
}

export default Login;
