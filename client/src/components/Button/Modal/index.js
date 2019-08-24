import React, { Component } from "react";
import styles from "./styles.module.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    // Contact Us button
    if (this.props.type === "Contact Us" || this.props.type === "Contact us") {
      return (
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
      );
    }
    // Book Now button
    else {
      return (
        <div>
          {/* <h3>Trip: {this.props.trip}</h3>

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

          <input className={styles.InputText} type="date" />

          <input
            className={styles.InputText}
            type="text"
            placeholder="Your message.."
          />*/}
        </div>
      );
    }
  }
}

export default Modal;
