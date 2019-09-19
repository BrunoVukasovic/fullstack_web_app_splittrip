import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  Layout,
  ReviewItem,
  Container,
  ButtonContainer
} from "../../components";
import { logoutAction } from "../../actions/logoutAction";

class MyProfile extends Component {
  state = {
    reviews: [],
    rerender: ""
  };

  componentDidMount = () => {
    axios.get("api/bookedTrips/reviewed").then(res => {
      const reviewedBookings = res.data;
      reviewedBookings.forEach(reviewedBooking => {
        const {
          Id: bookedTripID,
          Date: date,
          Trip: trip,
          Review: review
        } = reviewedBooking;
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
    axios.get("/api/bookedTrips/userIdNull").then(res => {
      axios.get("api/users/delete").then(res => {
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
