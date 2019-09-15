import React, { Component } from "react";
import {
  Layout,
  ReviewItem,
  Container,
  ButtonContainer
} from "../../components";
import axios from "axios";

import { logoutAction } from "../../actions/logoutAction";
import { connect } from "react-redux";

class MyProfile extends Component {
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
          Id: bookedTripID,
          Date: date,
          Trip: trip,
          Review: review
        } = reviewedBooking;
        console.log(reviewedBooking);
        const { Heading: tripName, Slug: slug } = trip;
        const { Id: reviewID } = review;
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
          reviewTemplate.heading = Heading;
          reviewTemplate.description = Description;
          reviewTemplate.rating = Value;
          this.state.reviews.push(reviewTemplate);
          this.setState({ rerender: "yes" });
        });
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
      this.props.removeUserFromStore();
      localStorage.clear();
      this.props.history.push("/");
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <Layout>
        <Container>
          <ButtonContainer>
            <button className={"Cancle"} onClick={this.handleDeleteProfile}>
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

const mapStateToProp = state => {
  return {
    isAuthenticated: state.isLoggedReducer.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeUserFromStore: () => {
      dispatch(logoutAction());
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(MyProfile);
