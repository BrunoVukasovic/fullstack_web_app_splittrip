import React, { Component } from "react";
import styles from "../styles/form.module.css";
import axios from "axios";
import { Layout } from "../components";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      firstName: "",
      lastName: "",
      phone: "",
      invalid: false,
      errors: []
    };
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    const {
      email,
      password,
      password2,
      firstName,
      lastName,
      phone
    } = this.state;
    const user = {
      email,
      password,
      password2,
      firstName,
      lastName,
      phone
    };
    axios.post("/api/register", { user }).then(res => {
      let { errors } = res.data;
      if (errors) {
        console.log(errors);
        this.setState({ errors, invalid: true });
        window.scrollTo(0, 0);
      } else {
        console.log(res.data);
        this.props.history.push("/login");
      }
    });
  };

  render() {
    let { errors, invalid } = this.state;
    return (
      <Layout>
        <h1>Register:</h1>

        <form onSubmit={this.handleSubmit} className={styles.LoginForm}>
          {invalid ? (
            <p className={styles.ErrorInput}>{errors[0].message}</p>
          ) : null}
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
            autoFocus
            type="text"
            name="password"
            className={styles.Input}
            placeholder="Your password..."
            onChange={this.onChange}
            value={this.state.password}
          />
          <input
            autoFocus
            type="text"
            name="password2"
            className={styles.Input}
            placeholder="Repeat password..."
            onChange={this.onChange}
            value={this.state.password2}
          />
          <input
            autoFocus
            type="text"
            name="firstName"
            className={styles.Input}
            placeholder="Your first name"
            onChange={this.onChange}
            value={this.state.firstName}
          />
          <input
            autoFocus
            type="text"
            name="lastName"
            className={styles.Input}
            placeholder="Your last name"
            onChange={this.onChange}
            value={this.state.lastName}
          />
          <input
            autoFocus
            type="text"
            name="phone"
            className={styles.Input}
            placeholder="Your phone"
            onChange={this.onChange}
            value={this.state.phone}
          />
          <input type="submit" className={"Button"} value={"Register"} />
        </form>
      </Layout>
    );
  }
}
export default Register;
