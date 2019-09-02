import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Layout,
  MainImage,
  TripItem,
  TripItemHeading,
  TripItemDescription,
  Container
} from "../components";
export default class Category extends Component {
  state = {
    trips: [],
    fetched: false
  };

  componentDidMount = () => {
    this.getTrips();
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.getTrips();
    }
  }

  getTrips = () => {
    const { pathname } = this.props.location;
    let categoryID = null;
    switch (pathname) {
      case "/land-tours":
        categoryID = 1;
        break;
      case "/sea-tours":
        categoryID = 2;
        break;
      case "/adventures":
        categoryID = 3;
        break;
      default:
        break;
    }
    this.setState({ fetched: false });
    axios.get(`/api/trips/category/${categoryID}`).then(res => {
      this.setState({ trips: [] });
      const trips = res.data;
      trips.forEach(trip => {
        this.state.trips.push(trip);
      });
      this.setState({ fetched: true });
    });
  };

  render() {
    const { trips, fetched } = this.state;
    return (
      <Layout>
        {fetched ? (
          <Container>
            <MainImage src={require("../images" + trips[0].Slug + ".jpg")} />

            {trips.map((trip, index) => (
              <Link to={trip.Slug} key={index}>
                <TripItem>
                  <img
                    src={require("../images/4x3" + trip.Slug + ".jpg")}
                    alt={trip.Heading}
                    width="100%"
                  />
                  <TripItemHeading>{trip.Heading}</TripItemHeading>
                  <TripItemDescription>
                    {trip.Description.replace(/<[^>]*>?/gm, "").slice(0, 450) +
                      "..."}
                  </TripItemDescription>
                </TripItem>
              </Link>
            ))}
          </Container>
        ) : null}
      </Layout>
    );
  }
}
