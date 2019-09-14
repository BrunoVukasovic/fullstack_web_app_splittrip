import React, { Component } from "react";
import axios from "axios";
import { Layout, ButtonContainer, MainImage } from "../";
import ContactUs from "./ContactUs";
import BookNow from "./BookNow";
import TripDescription from "./TripDescription";
import ShowReviews from "./ShowReviews";

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
      message: "",
      fetched: false
    };
  }

  componentDidMount() {
    this.getTrip();
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

  getTrip = () => {
    const { pathname } = this.props.location;
    axios.post("/api/trips/one/slug", { pathname }).then(res => {
      const { TripID, Heading, Description, Slug } = res.data;
      this.setState({
        tripID: TripID,
        heading: Heading,
        description: Description,
        slug: Slug,
        fetched: true
      });
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ fetched: false });
      this.getTrip();
    }
  }

  render() {
    const { heading, description, slug, tripID, fetched } = this.state;

    return (
      <Layout>
        <MainImage src={require(`../../images${slug}.jpg`)}></MainImage>

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

        <div className={this.state.contactUs ? "ModalBlock" : "ModalNone"}>
          <ContactUs
            heading={heading}
            handleClose={this.handleClose}
          ></ContactUs>
        </div>

        <div className={this.state.bookNow ? "ModalBlock" : "ModalNone"}>
          <BookNow
            heading={heading}
            tripID={tripID}
            handleClose={this.handleClose}
          ></BookNow>
        </div>

        <TripDescription description={description}></TripDescription>
        {fetched ? <ShowReviews tripID={tripID}></ShowReviews> : null}
      </Layout>
    );
  }
}

export default Trip;
