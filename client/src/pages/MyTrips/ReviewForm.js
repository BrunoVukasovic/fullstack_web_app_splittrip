import React, { Component } from "react";
import styles from "../../styles/form.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ButtonContainer } from "../../components";
import StarRatingComponent from "react-star-rating-component";

class ReviewForm extends Component {
  state = {
    rating: 5,
    heading: "",
    description: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  ratingChanged = newRating => {
    this.setState({ rating: newRating });
    console.log(this.state.rating);
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

    axios.post("/api/reviews/new", { review }).then(res => console.log(res));
    axios
      .patch("api/bookedTrips/newReview", { bookedTripID })
      .then(res => console.log(res));
    const reviewed = true;
    this.props.handleClose(reviewed);
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
            <StarRatingComponent
              className={styles.Rating}
              name="rating"
              starCount={5}
              onStarClick={this.ratingChanged}
              emptyStarColor={"var(--color-primary)"}
              starColor={"var(--color-logo-blue)"}
            />
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
