import React, { Component } from "react";
import styles from "./styles.module.css";
import { Layout, ReviewItem, Container } from "../components";
import axios from "axios";

export default class MyReviews extends Component {
  state = {
    reviews: [],
    rerender: ""
  };
  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const { email } = user;
    axios.post("api/bookedTrips/reviewed", { email }).then(res => {
      const reviewedBookings = res.data;
      reviewedBookings.forEach(reviewedBooking => {
        const {
          BookedTripID: bookedTripID,
          TripID: tripID,
          Date: date
        } = reviewedBooking;
        const reviewTemplate = {
          date,
          bookedTripID,
          tripName: "",
          rating: null,
          heading: "",
          description: "",
          slug: "",
          reviewID: null
        };

        axios
          .all([
            (axios.post("/api/trips/one/id", { tripID }).then(res => {
              const { Heading, Slug } = res.data;
              reviewTemplate.tripName = Heading;
              reviewTemplate.slug = Slug;
            }),
            axios
              .post("api/reviews/one/bookedTripId", { bookedTripID })
              .then(res => {
                const { Comment, Rating, ReviewID } = res.data;
                const { Heading, Decription } = Comment;
                const { Value } = Rating;
                reviewTemplate.reviewID = ReviewID;
                reviewTemplate.heading = Heading;
                reviewTemplate.description = Decription;
                reviewTemplate.rating = Value;
              }))
          ])
          .then(res => {
            this.state.reviews.push(reviewTemplate);
            this.setState({ rerender: "yes" });
          });
      });
    });
  };

  handleDelete = (reviewID, bookedTripID) => {
    axios.post("api/reviews/delete", { reviewID }).then(res => {
      console.log(res.data);
    });
    axios.patch("api/bookedTrips/reviewDeleted", { bookedTripID }).then(res => {
      console.log(res);
    });
  };
  render() {
    const { reviews } = this.state;
    return (
      <Layout>
        <Container>
          {reviews.map((review, index) => (
            <Container className={"BackgroundColorLight"} key={index}>
              <ReviewItem
                review={review}
                handleDelete={this.handleDelete}
              ></ReviewItem>
            </Container>
          ))}
        </Container>
      </Layout>
    );
  }
}
