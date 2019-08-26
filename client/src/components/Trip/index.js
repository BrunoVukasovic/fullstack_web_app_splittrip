import React, { Component } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import axios from "axios";
import { Layout, ButtonContainer, MainImage } from "../";
import ContactUs from "./ContactUs";

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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleContactClick = () => {
    this.setState({ contactUs: true });
  };

  handleBookNowClick = () => {
    this.setState({ bookNow: true });
  };

  handleClose = () => {
    this.setState({ contactUs: false, bookNow: false });
  };

  handleBookNowSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { UserID: userID } = user;
    const { tripID, date, numberOfPeople, message } = this.state;
    const bookedTrip = {
      userID,
      tripID,
      date,
      numberOfPeople,
      message
    };
    console.log(bookedTrip);
    axios.post("/api/trips/book", { bookedTrip }).then(res => {
      console.log(res);
    });
  };

  render() {
    const { heading, description, slug } = this.state;
    const { firstName, lastName, phone } = this.props.user;
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      user = {
        FirstName: "",
        LastName: "",
        Phone: ""
      };
    }
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
          <div className={styles.ModalContent}>
            <span onClick={this.handleClose} className={styles.Close}>
              &times;
            </span>
            <h2>Contact us: {heading}</h2>
            <ContactUs></ContactUs>
            <div className={styles.SubmitCancleDiv}>
              <ButtonContainer>
                <button onClick={this.handleClose} className={styles.Cancle}>
                  Cancle
                </button>
                <button
                  onClick={this.handleContactSubmit}
                  className={styles.Submit}
                >
                  Submit
                </button>
              </ButtonContainer>
            </div>
          </div>
        </div>

        <div
          className={this.state.bookNow ? styles.ModalBlock : styles.ModalNone}
        >
          <div className={styles.ModalContent}>
            <span onClick={this.handleClose} className={styles.Close}>
              &times;
            </span>
            <div>
              <h2>Book now!</h2>
              <div>
                <h3>Trip: {heading}</h3>

                <input
                  className={styles.InputText}
                  type="text"
                  placeholder="Your first name.."
                  onChange={this.onChange}
                  value={firstName}
                />

                <input
                  className={styles.InputText}
                  type="text"
                  placeholder="Your last name.."
                  onChange={this.onChange}
                  value={lastName}
                />
                <input
                  className={styles.InputText}
                  type="number"
                  placeholder="Your phone number.."
                  onChange={this.onChange}
                  value={phone}
                />

                <input
                  className={styles.InputText}
                  type="date"
                  name="date"
                  onChange={this.onChange}
                  value={this.state.date}
                />
                <input
                  className={styles.InputText}
                  type="number"
                  name="numberOfPeople"
                  placeholder="Number of people..."
                  onChange={this.onChange}
                  value={this.state.numberOfPeople}
                />

                <input
                  className={styles.InputText}
                  type="text"
                  name="message"
                  placeholder="Your message.."
                  onChange={this.onChange}
                  value={this.state.message}
                />
              </div>
            </div>
            <ButtonContainer>
              <button onClick={this.handleClose} className={styles.Cancle}>
                Cancle
              </button>
              <button
                onClick={this.handleBookNowSubmit}
                className={styles.Submit}
              >
                Submit
              </button>
            </ButtonContainer>
          </div>
        </div>

        <div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.isLoggedReducer.user
  };
};
export default connect(mapStateToProps)(Trip);
