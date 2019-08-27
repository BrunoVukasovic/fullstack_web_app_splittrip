import React, { Component } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ButtonContainer } from "../";

class BookNow extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    numberOfPeople: "",
    message: ""
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const { firstName, lastName, phone, email } = user;
      this.setState({ firstName, lastName, phone, email });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBookNowSubmit = () => {
    const { email } = this.state;
    const { date, numberOfPeople, message } = this.state;
    const { tripID } = this.props;
    const bookedTrip = {
      email,
      tripID,
      date,
      numberOfPeople,
      message
    };
    console.log(bookedTrip);
    axios.post("/api/trips/book", { bookedTrip }).then(res => {
      console.log(res);
      this.props.history.push("/my-trips");
    });
  };

  render() {
    const { firstName, lastName, phone } = this.state;
    const { heading, handleClose } = this.props;

    return (
      <div className={styles.ModalContent}>
        <span onClick={handleClose} className={styles.Close}>
          &times;
        </span>
        <div>
          <h2>Book now!</h2>
          <div>
            <h3>Trip: {heading}</h3>

            <input
              className={styles.InputText}
              type="text"
              name="firstName"
              placeholder="Your first name.."
              onChange={this.onChange}
              value={firstName}
            />

            <input
              className={styles.InputText}
              type="text"
              name="lasttName"
              placeholder="Your last name.."
              onChange={this.onChange}
              value={lastName}
            />
            <input
              className={styles.InputText}
              type="number"
              name="phone"
              placeholder="Your phone number.."
              onChange={this.onChange}
              value={phone}
            />

            <input
              className={styles.InputText}
              type="date"
              name="date"
              onChange={this.onChange}
              value={this.state.date}
            />
            <input
              className={styles.InputText}
              type="number"
              name="numberOfPeople"
              placeholder="Number of people..."
              onChange={this.onChange}
              value={this.state.numberOfPeople}
            />

            <input
              className={styles.InputText}
              type="text"
              name="message"
              placeholder="Your message.."
              onChange={this.onChange}
              value={this.state.message}
            />
          </div>
        </div>
        <ButtonContainer>
          <button onClick={handleClose} className={styles.Cancle}>
            Cancle
          </button>
          <button onClick={this.handleBookNowSubmit} className={styles.Submit}>
            Submit
          </button>
        </ButtonContainer>
      </div>
    );
  }
}

export default withRouter(BookNow);
