import React, { Component } from "react";
import styles from "./styles.module.css";
import {
  TripItem,
  TripItemHeading,
  TripItemDescription,
  Container
} from "../../components";
import ReviewForm from "./ReviewForm";

export default class PastTrips extends Component {
  state = {
    heading: "",
    slug: "/blur",
    reviewClicked: false
  };

  leaveAReviewClicked = () => {
    this.setState({ reviewClicked: true });
  };

  handleClose = reviewPosted => {
    this.setState({ reviewClicked: false });
    if (reviewPosted) {
      window.location.reload();
    }
  };

  componentDidMount = () => {
    const { Trip: trip } = this.props.bookedTrip;
    const { Heading: heading, Slug: slug } = trip;
    this.setState({ heading, slug });
  };

  render() {
    const { bookedTrip, travelerName } = this.props;
    const {
      Date: date,
      NumberOfPeople: numberOfPeople,
      Reviewed: reviewed
    } = bookedTrip;
    const { slug, heading } = this.state;
    return (
      <Container>
        <TripItem>
          <img
            src={require("../../images/4x3" + slug + ".jpg")}
            alt={heading}
            width="100%"
          />

          <TripItemHeading>{"Trip: " + heading}</TripItemHeading>

          <div className={styles.myTripsDiv}>
            <TripItemDescription>
              <strong>Lead Traveler Name: </strong>
              {travelerName}
              <br />
              <strong>Date: </strong>
              {date.slice(0, 10)}
              <br />
              <strong>Group size: </strong>
              {numberOfPeople}
            </TripItemDescription>
            {reviewed ? null : (
              <button className={"Button"} onClick={this.leaveAReviewClicked}>
                Leave a review!
              </button>
            )}
          </div>
        </TripItem>
        <div className={this.state.reviewClicked ? "ModalBlock" : "ModalNone"}>
          <ReviewForm
            bookedTrip={bookedTrip}
            heading={heading}
            handleClose={this.handleClose}
          ></ReviewForm>
        </div>
      </Container>
    );
  }
}
