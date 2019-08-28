import React, { Component } from "react";
import styles from "../../styles/form.module.css";
import StarsRating from "stars-rating";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ButtonContainer } from "../../components";

class ReviewForm extends Component {
  state = {
    rating: "",
    heading: "",
    description: ""
  };

  componentDidMount() {}

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleReviewSubmit = () => {
    const { rating, heading, description } = this.state;
    const {
      BookedTripID: bookedTripID,
      TripID: tripID
    } = this.props.bookedTrip;
    const review = {
      bookedTripID,
      tripID,
      rating,
      heading,
      description
    };
    console.log(review);
    axios.post("/api/reviews", { review }).then(res => {
      console.log(res);
      this.props.history.push("/my-trips");
    });
  };

  render() {
    const { heading, handleClose } = this.props;

    return (
      <div className={styles.ModalContent}>
        <span onClick={handleClose} className={styles.Close}>
          &times;
        </span>
        <div>
          <h2>Thank you for sharing your experience!</h2>
          <div>
            <h3>Trip: {heading}</h3>
            <StarsRating count={5}></StarsRating>
            <input
              className={styles.Input}
              type="text"
              name="heading"
              placeholder="Title of your review..."
              onChange={this.onChange}
            />

            <input
              className={styles.Input}
              type="text"
              name="description"
              placeholder="Please, provide more detailed description"
              onChange={this.onChange}
            />
          </div>
          <ButtonContainer>
            <button onClick={handleClose} className={styles.Cancle}>
              Cancle
            </button>
            <button onClick={this.handleReviewSubmit} className={styles.Submit}>
              Submit
            </button>
          </ButtonContainer>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
