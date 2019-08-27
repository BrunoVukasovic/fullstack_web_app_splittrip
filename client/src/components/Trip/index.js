import React, { Component } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Layout, ButtonContainer, MainImage } from "../";
import ContactUs from "./ContactUs";
import BookNow from "./BookNow";
import TripDescription from "./TripDescription";

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripID: null,
      heading: "",
      description: "",
      slug: "/blur",
      contactUs: false,
      bookNow: false,
      date: "",
      numberOfPeople: "",
      phone: "",
      message: ""
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;

    axios.post("/api/trips/one", { pathname }).then(res => {
      const { TripID, Heading, Description, Slug } = res.data;
      this.setState({
        tripID: TripID,
        heading: Heading,
        description: Description,
        slug: Slug
      });
    });
  }

  handleContactClick = () => {
    this.setState({ contactUs: true });
  };

  handleBookNowClick = () => {
    this.setState({ bookNow: true });
  };

  handleClose = () => {
    this.setState({ contactUs: false, bookNow: false });
  };

  render() {
    const { heading, description, slug, tripID } = this.state;

    return (
      <Layout>
        <MainImage src={require("../../images" + slug + ".jpg")}></MainImage>

        <ButtonContainer>
          <button
            onClick={() => this.handleContactClick()}
            className={"Button"}
          >
            Contact us!
          </button>
          <button
            onClick={() => this.handleBookNowClick()}
            className={"Button"}
          >
            Book now!
          </button>
        </ButtonContainer>

        <h2>{heading}</h2>

        <div
          className={
            this.state.contactUs ? styles.ModalBlock : styles.ModalNone
          }
        >
          <ContactUs
            heading={heading}
            handleClose={this.handleClose}
          ></ContactUs>
        </div>

        <div
          className={this.state.bookNow ? styles.ModalBlock : styles.ModalNone}
        >
          <BookNow
            heading={heading}
            tripID={tripID}
            handleClose={this.handleClose}
          ></BookNow>
        </div>

        <TripDescription description={description}></TripDescription>
      </Layout>
    );
  }
}

export default Trip;
