import React, { Component } from "react";
import styles from "../../styles/form.module.css";
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
    message: "",
    errorMessage: ""
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

  isFormFilled = () => {
    const { firstName, date, numberOfPeople, phone } = this.state;
    if (firstName.length === 0) {
      this.setState({ errorMessage: "Please, enter your first name." });
      return false;
    } else if (phone.length === 0) {
      this.setState({ errorMessage: "Please, enter a contact number." });
      return false;
    } else if (date.length === 0) {
      this.setState({ errorMessage: "Please, pick a date." });
      return false;
    } else if (numberOfPeople.length === 0) {
      this.setState({
        errorMessage: "Please, enter how many people are coming"
      });
      return false;
    } else return true;
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

    if (this.isFormFilled()) {
      axios.post("/api/bookedTrips/new", { bookedTrip }).then(res => {
        this.props.history.push("/my-trips");
      });
    }
  };

  render() {
    const { firstName, lastName, phone, errorMessage } = this.state;
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
            <label className={styles.ErrorInput}>{errorMessage}</label>
            <input
              className={styles.Input}
              type="text"
              name="firstName"
              placeholder="Your first name.."
              onChange={this.onChange}
              value={firstName}
            />

            <input
              className={styles.Input}
              type="text"
              name="lastName"
              placeholder="Your last name.."
              onChange={this.onChange}
              value={lastName}
            />
            <input
              className={styles.Input}
              type="number"
              name="phone"
              placeholder="Your phone number.."
              onChange={this.onChange}
              value={phone}
            />

            <input
              className={styles.Input}
              type="date"
              name="date"
              onChange={this.onChange}
              value={this.state.date}
            />
            <input
              className={styles.Input}
              type="number"
              name="numberOfPeople"
              placeholder="Number of people..."
              onChange={this.onChange}
              value={this.state.numberOfPeople}
            />

            <input
              className={styles.Input}
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
