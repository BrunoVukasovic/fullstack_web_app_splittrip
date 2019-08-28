import React, { Component } from "react";
import styles from "./styles.module.css";
import {
  TripItem,
  TripItemHeading,
  TripDescription,
  Container
} from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";
import ContactUs from "../../components/Trip/ContactUs";

export default class PastTrips extends Component {
  state = {
    heading: "",
    description: "",
    slug: "/blur",
    reviewClicked: false
  };

  leaveAReviewClicked = () => {
    this.setState({ reviewClicked: true });
  };

  componentDidMount = () => {
    const { TripID } = this.props.bookedTrip;

    axios.post("/api/trips/one/id", { TripID }).then(res => {
      const { Heading, Description, Slug } = res.data;
      this.setState({ heading: Heading, description: Description, slug: Slug });
    });
  };

  render() {
    const { bookedTrip, travelerName } = this.props;
    const { Date: date, NumberOfPeople: numberOfPeople } = bookedTrip;
    const { slug, heading, reviewClicked } = this.state;
    const tripDescriptionStyle = { fontSize: "larger" };
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
            <TripDescription style={tripDescriptionStyle}>
              <strong>Lead Traveler Name: </strong>
              {travelerName}
              <br />
              <strong>Date: </strong>
              {date.slice(0, 10)}
              <br />
              <strong>Group size: </strong>
              {numberOfPeople}
            </TripDescription>
            <button className={"Button"} onClick={this.leaveAReviewClicked}>
              Leave a review!
            </button>
          </div>
        </TripItem>
        <div className={this.state.reviewClicked ? "ModalBlock" : "ModalNone"}>
          <p>djaksjasldajskdasjkasd</p>
        </div>
      </Container>
    );
  }
}
