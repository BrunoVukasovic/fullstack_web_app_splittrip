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
    axios.get("/api/trips/all").then(res => {
      console.log(res.data);
      this.setState({ trips: res.data });
    });
  };

  render() {
    return (
      <Layout>
        <MainImage src={mainImage} />
        <ul>
          {this.state.trips.map(trip => (
            <li key={trip.TripID}>{trip.Heading}</li>
          ))}
        </ul>

        <Link to="/krka">
          <TripItem>
            <img src={krkaPhoto} alt="Krka" width="100%" />
            <TripItemHeading>Krka Waterfalls</TripItemHeading>
            <TripItemDescription>
              Our program includes a fascinating tour of an authentically
              restored ensemble of stone small houses, experience the rich
              diversity of flora and fauna there.
            </TripItemDescription>
          </TripItem>
        </Link>

        <Link to="/zip">
          <TripItem>
            <img src={zipPhoto} alt="Zip line" width="100%" />
            <TripItemHeading>Zip line</TripItemHeading>
            <TripItemDescription>
              Zipline is an adrenaline entertainment where guests descend
              through the canyon down the steel wire rope, secured with a belt.
              Adventure also includes training and a short walk in nature.
            </TripItemDescription>
          </TripItem>
        </Link>

        <Link to="/blue-cave">
          <TripItem>
            <img src={blueCavePhoto} alt="Blue Cave" width="100%" />
            <TripItemHeading>Blue Cave</TripItemHeading>
            <TripItemDescription>
              Our program includes a fascinating tour of an authentically
              restored ensemble of stone small houses, experience the rich
              diversity of flora and fauna there.
            </TripItemDescription>
          </TripItem>
        </Link>

        <Link to="/rafting">
          <TripItem>
            <img src={raftingPhoto} alt="Rafting" width="100%" />
            <TripItemHeading>Rafting</TripItemHeading>
            <TripItemDescription>
              Our program includes a fascinating tour of an authentically
              restored ensemble of stone small houses, experience the rich
              diversity of flora and fauna there.
            </TripItemDescription>
          </TripItem>
        </Link>

        <Container />
      </Layout>
    );
  }
}
export default LandingPage;
