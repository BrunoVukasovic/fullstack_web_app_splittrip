import React, { Component } from "react";
import styles from "./styles.module.css";
import {
  TripItem,
  TripItemHeading,
  TripItemDescription
} from "../../components";
import { Link } from "react-router-dom";

export default class UpcomingTrips extends Component {
  state = {
    heading: "",
    slug: "/blur"
  };

  componentDidMount = () => {
    const { Trip: trip } = this.props.bookedTrip;
    const { Heading: heading, Slug: slug } = trip;
    this.setState({ heading, slug });
  };

  render() {
    const { bookedTrip, travelerName } = this.props;
    const { Date: date, NumberOfPeople: numberOfPeople } = bookedTrip;
    const { slug, heading } = this.state;
    const tripDescriptionStyle = { fontSize: "larger" };
    return (
      <Link to={slug}>
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
            <h2 className={styles.CanceledNote}>Canceled</h2>
          </div>
        </TripItem>
      </Link>
    );
  }
}
