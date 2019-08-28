import React, { Component } from "react";
import styles from "../../styles/form.module.css";
import { ButtonContainer } from "../";

export default class ContactUs extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    const { heading, handleClose } = this.props;
    return (
      <div className={styles.ModalContent}>
        <span onClick={handleClose} className={styles.Close}>
          &times;
        </span>
        <h2>Contact us!</h2>
        <div>
          <div>
            <h3>Trip: {heading}</h3>

            <input
              className={styles.Input}
              type="text"
              placeholder="Your name.."
            />

            <input
              className={styles.Input}
              type="number"
              placeholder="Your phone number.."
            />

            <input
              className={styles.Input}
              type="text"
              placeholder="Your e-mail.."
            />

            <input
              className={styles.Input}
              type="text"
              placeholder="Your message.."
            />
          </div>
        </div>
        <div className={styles.SubmitCancleDiv}>
          <ButtonContainer>
            <button onClick={handleClose} className={styles.Cancle}>
              Cancle
            </button>
            <button onClick={handleClose} className={styles.Submit}>
              Submit
            </button>
          </ButtonContainer>
        </div>
      </div>
    );
  }
}
