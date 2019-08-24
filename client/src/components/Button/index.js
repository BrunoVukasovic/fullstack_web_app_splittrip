import React, { Component } from "react";
import styles from "./styles.module.css";
import Modal from "./Modal";
import { Redirect } from "react-router-dom";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, book: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    if (this.props.children === "Contact Us") {
      this.setState({ clicked: true });
    } else if (this.props.children === "Book Now") {
      this.setState({ book: true });
    }
  }

  handleSubmit() {
    this.setState({ clicked: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className={styles.Button}>
          {this.props.children}
        </button>

        <div
          className={this.state.clicked ? styles.ModalBlock : styles.ModalNone}
        >
          <div className={styles.ModalContent}>
            <span onClick={this.handleSubmit} className={styles.Close}>
              &times;
            </span>
            <h2>{this.props.children}</h2>
            <Modal type={this.props.children} trip={this.props.trip} />
            <div className={styles.SubmitCancleDiv}>
              <button onClick={this.handleSubmit} className={styles.Cancle}>
                Cancle
              </button>
              <button onClick={this.handleSubmit} className={styles.Submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        {this.state.book ? (
          <Redirect
            to={{
              pathname: "/book-now",
              state: {
                tripName: this.props.trip,
                slug: window.location.pathname
              }
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default Button;

/*
export default ({ children }) => (
  <button className={styles.Button}>{children}</button>
);
*/
