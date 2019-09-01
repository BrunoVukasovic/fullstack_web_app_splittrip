import React, { Component } from "react";
import styles from "./styles.module.css";
import { TripItem, TripItemHeading, TripDescription } from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";

export default class UpcomingTrips extends Component {
  state = {
    heading: "",
    slug: "/blur"
  };

  componentDidMount = () => {
    const { Trip: trip } = this.props.bookedTrip;
    const { Heading: heading, Slug: slug } = trip;
    this.setState({ heading, slug });
    /*
    axios.post("/api/trips/one/id", { tripID }).then(res => {
      const { Heading, Description, Slug } = res.data;
      this.setState({ heading: Heading, description: Description, slug: Slug });
    });
  */
  };

  render() {
    const { bookedTrip, travelerName } = this.props;
    const { Date: date, NumberOfPeople: numberOfPeople } = bookedTrip;
    const { heading, slug } = this.state;
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
            <button
              onClick={() => this.props.cancelTrip(bookedTrip)}
              className={styles.CancelButton}
            >
              Cancel
            </button>
          </div>
        </TripItem>
      </Link>
    );
  }
}
