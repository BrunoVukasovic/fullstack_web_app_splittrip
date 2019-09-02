import React, { Component } from "react";
import axios from "axios";
import cn from "classnames";
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
      console.log(res.data);
      const reviews = res.data;
      reviews.forEach(review => {
        const {
          BookedTripID: bookedTripID,
          Comment: comment,
          Rating: rating
        } = review;
        const { Heading: heading, Description: description } = comment;
        const { Value: value } = rating;
        const reviewTemplate = {
          firstName: "",
          date: null,
          rating: value,
          heading,
          description
        };
        axios
          .post("api/bookedTrips/userAndDate", { bookedTripID })
          .then(res => {
            const { Date, FirstName } = res.data;
            reviewTemplate.date = Date;
            reviewTemplate.firstName = FirstName;
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

    return (
      <Container className={cn(styles.ReviewContainer, "BorderTop")}>
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
