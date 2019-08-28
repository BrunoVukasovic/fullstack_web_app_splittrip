import React, { Component } from "react";
import axios from "axios";
import { Container } from "../";

export default class ShowReviews extends Component {
  state = {
    reviews: [],
    firstName: "",
    date: null,
    rating: null,
    heading: "",
    decription: ""
  };
  componentDidMount = () => {
    const { tripID } = this.props;

    axios.post("api/reviews/trip", { tripID }).then(res => {
      const reviews = res.data;

      reviews.forEach(review => {
        const { BookedTripID, CommentID, Rating } = review;

        axios
          .all([
            axios
              .post("api/bookedTrips/UserAndDate", { BookedTripID })
              .then(res => {
                const { Date, FirstName } = res.data;
                this.setState({ date: Date, firstName: FirstName });
              }),
            axios.post("api/comments/one", { CommentID }).then(res => {
              const { Heading, Description } = res.data;
              this.setState({ heading: Heading, description: Description });
            })
          ])
          .then(res => {
            const {
              reviews,
              firstName,
              date,
              rating,
              heading,
              description
            } = this.state;
            const reviewTemplate = {
              firstName,
              date,
              rating,
              heading,
              description
            };
            reviews.push(reviewTemplate);
          });
      });
    });
  };
  render() {
    return (
      <Container>
        <div></div>
        <div></div>
      </Container>
    );
  }
}
