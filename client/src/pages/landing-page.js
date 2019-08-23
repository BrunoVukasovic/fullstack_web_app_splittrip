import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Layout,
  Container,
  MainImage,
  TripItem,
  TripItemHeading,
  TripItemDescription
} from "../components";
import krkaPhoto from "../images/4x3/krka.jpg";
import zipPhoto from "../images/4x3/zip.jpg";
import blueCavePhoto from "../images/4x3/blue-cave.jpg";
import raftingPhoto from "../images/4x3/rafting.jpg";
import mainImage from "../images/plitvice.jpg";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  getTrips = () => {
    axios.get("/api/trips").then(res => {
      console.log(res.data);
      this.setState({ trips: res.data });
    });
  };

  render() {
    return (
      <Layout>
        <MainImage src={mainImage} />
        <h1>Trips:</h1>
        <button onClick={this.getTrips}>Update trip list</button>
        <ul>
          {this.state.trips.map(trip => (
            <li key={trip.TripID}>{trip.Heading}</li>
          ))}
        </ul>
        <Container />
      </Layout>
    );
  }
}
export default LandingPage;
