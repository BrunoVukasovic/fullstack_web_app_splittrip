import React, { Component } from "react";
import axios from "axios";
import { Container, ReviewItem } from "../";
import styles from "./styles.module.css";

export default class ShowReviews extends Component {
  state = {
    reviews: [],
    rerender: ""
  };
  componentDidMount = () => {
    const { tripID } = this.props;

    axios.post("api/reviews/trip", { tripID }).then(res => {
      const reviews = res.data;

      reviews.forEach(review => {
        const {
          BookedTripID: bookedTripID,
          CommentID: commentID,
          RatingID: ratingID
        } = review;

        const reviewTemplate = {
          firstName: "",
          date: null,
          rating: null,
          heading: "",
          decription: ""
        };

        axios
          .all([
            axios
              .post("api/bookedTrips/userAndDate", { bookedTripID })
              .then(res => {
                const { Date, FirstName } = res.data;
                reviewTemplate.date = Date;
                reviewTemplate.firstName = FirstName;
              }),
            axios.post("api/comments/one", { commentID }).then(res => {
              const { Heading, Description } = res.data;
              reviewTemplate.heading = Heading;
              reviewTemplate.description = Description;
            }),
            axios.post("api/reviews/rating", { ratingID }).then(res => {
              reviewTemplate.rating = res.data.Value;
              console.log(reviewTemplate.rating);
            })
          ])
          .then(res => {
            const { reviews } = this.state;
            reviews.push(reviewTemplate);
            this.setState({ rerender: "yes" });
          });
      });
    });
  };
  render() {
    const { reviews } = this.state;
    let head = "";
    if (reviews.length === 1) {
      head = "Review: ";
    } else head = "Reviews: ";

    console.log(this.state);
    return (
      <Container className={styles.ReviewContainer}>
        <div className={styles.LeftReviewPanel}>
          <h2>{reviews.length + " " + head}</h2>
        </div>
        <div className={styles.RightReviewPanel}>
          {reviews.map((review, index) => (
            <Container className={"BackgroundColorLight"} key={index}>
              <ReviewItem review={review} />
            </Container>
          ))}
        </div>
      </Container>
    );
  }
}
