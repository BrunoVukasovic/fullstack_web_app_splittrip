import React, { Component } from "react";
import styles from "./styles.module.css";

export default class ContactUs extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Trip: {this.props.trip}</h3>

          <input
            className={styles.InputText}
            type="text"
            placeholder="Your name.."
          />

          <input
            className={styles.InputText}
            type="number"
            placeholder="Your phone number.."
          />

          <input
            className={styles.InputText}
            type="text"
            placeholder="Your e-mail.."
          />

          <input
            className={styles.InputText}
            type="text"
            placeholder="Your message.."
          />
        </div>
      </div>
    );
  }
}
