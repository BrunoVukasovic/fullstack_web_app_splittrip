import React, { Component } from "react";
import {
  Layout,
  ReviewItem,
  Container,
  ButtonContainer
} from "../../components";
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
          Date: date,
          Trip: trip,
          Review: review
        } = reviewedBooking;
        const { Heading: tripName, Slug: slug } = trip;
        const { ReviewID: reviewID } = review;
        const reviewTemplate = {
          date,
          bookedTripID,
          tripName,
          slug,
          reviewID,
          rating: null,
          heading: "",
          description: ""
        };

        axios.post("api/reviews/id", { reviewID }).then(res => {
          const { Comment, Rating } = res.data;
          const { Heading, Description } = Comment;
          const { Value } = Rating;
          // reviewTemplate.reviewID = ReviewID;
          reviewTemplate.heading = Heading;
          reviewTemplate.description = Description;
          reviewTemplate.rating = Value;
          this.state.reviews.push(reviewTemplate);
          console.log(reviewTemplate);
          this.setState({ rerender: "yes" });
        });

        /*
        axios
          .all([
            (
              axios.post("/api/trips/one/id", { tripID }).then(res => {
              const { Heading, Slug } = res.data;
              reviewTemplate.tripName = Heading;
              reviewTemplate.slug = Slug;
            }),
            axios
              .post("api/reviews/id", { reviewID })
              .then(res => {
                const { Comment, Rating } = res.data;
                const { Heading, Decription } = Comment;
                const { Value } = Rating;
                // reviewTemplate.reviewID = ReviewID;
                reviewTemplate.heading = Heading;
                reviewTemplate.description = Decription;
                reviewTemplate.rating = Value;
              }))
          ])
          .then(res => {
            this.state.reviews.push(reviewTemplate);
            this.setState({ rerender: "yes" });
          });   */
      });
    });
  };

  handleDeleteProfile = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const { email } = user;

    axios.post("/api/bookedTrips/userIdNull", { email }).then(res => {
      axios.post("api/users/delete", { email }).then(res => {
        console.log(res.data);
      });
      localStorage.clear();
      this.props.history.push("/");
      window.location.reload();
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <Layout>
        <Container>
          <ButtonContainer>
            <button className={"Button"}>Update info</button>
            <button className={"Button"} onClick={this.handleDeleteProfile}>
              Delete profile
            </button>
          </ButtonContainer>
          <h2>My reviews:</h2>
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
