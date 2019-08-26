import React, { Component } from "react";
import styles from "./styles.module.css";
import { TripItem, TripItemHeading, TripDescription } from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";

export default class UpcomingTrips extends Component {
  state = {
    heading: "",
    description: "",
    slug: "/blur"
  };

  componentDidMount = () => {
    const { TripID } = this.props.trip;

    axios.post("/api/trips/one/id", { TripID }).then(res => {
      const { Heading, Description, Slug } = res.data;
      this.setState({ heading: Heading, description: Description, slug: Slug });
    });
  };

  render() {
    const { trip, travelerName } = this.props;
    const { slug, heading } = this.state;
    const tripDescriptionStyle = { fontSize: "larger" };
    return (
      <Link to={slug} key={trip.Date}>
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
              {trip.Date.slice(0, 10)}
              <br />
              <strong>Group size: </strong>
              {trip.NumberOfPeople}
            </TripDescription>
            <button className={styles.CancelButton}>Leave a review!</button>
          </div>
        </TripItem>
      </Link>
    );
  }
}
