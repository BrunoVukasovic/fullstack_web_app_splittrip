import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UpcomingTrips from "./UpcomingTrips";
import PastTrips from "./PastTrips";
import CanceledTrips from "./CanceledTrips";
import { Spinner, LoginRedirect, Container } from "../../components";
import { Layout } from "../../components";

class MyTrips extends Component {
  state = {
    showUpcoming: true,
    showPast: false,
    showCanceled: false,
    upcomingTrips: [],
    pastTrips: [],
    canceledTrips: [],
    fetched: false
  };

  cancelTrip = bookedTrip => {
    const { BookedTripID } = bookedTrip;
    axios.patch("api/bookedTrips/cancel", { BookedTripID }).then(res => {
      console.log(res.data);
      this.props.history.push("/my-trips");
    });
  };

  onTabClick = e => {
    const stateElements = ["showUpcoming", "showPast", "showCanceled"];
    for (let element of stateElements) {
      this.setState({ [element]: false });
    }
    console.log();
    this.setState({ [e.target.value]: true });
  };

  updatePastInBookedTripTable = bookedTrip => {
    const { BookedTripID } = bookedTrip;
    axios.patch("api/bookedTrips/past", { BookedTripID }).then(res => {
      console.log(res.data);
    });
  };

  isDateInPast = tripDate => {
    const date = Date.parse(tripDate);
    const now = Date.now();
    if (date - now < 0) return true;
    else return false;
  };

  componentDidMount = () => {
    axios.get("/api/bookedTrips").then(res => {
      console.log(res);
      const bookedTrips = res.data;
      const { upcomingTrips, pastTrips, canceledTrips } = this.state;

      // fill past, canceled and upcomning trips
      bookedTrips.map(bookedTrip => {
        if (bookedTrip.Past) {
          pastTrips.push(bookedTrip);
        }
        if (bookedTrip.Canceled) {
          canceledTrips.push(bookedTrip);
        } else {
          if (this.isDateInPast(bookedTrip.Date)) {
            this.updatePastInBookedTripTable(bookedTrip);
            pastTrips.push(bookedTrip);
          } else upcomingTrips.push(bookedTrip);
        }
      });
      this.setState({ fetched: true });
    });
  };

  handleClick = () => {};

  render() {
    const {
      showUpcoming,
      showPast,
      showCanceled,
      upcomingTrips,
      pastTrips,
      canceledTrips,
      fetched
    } = this.state;
    const user = JSON.parse(localStorage.getItem("user"));

    // if logged in
    if (user) {
      // if bookedTrips are fetched
      if (fetched) {
        return (
          <Layout>
            <button onClick={() => this.handleClick(upcomingTrips)}>
              Datumi
            </button>
            <div>
              <h2>My Trips: </h2>

              <div className={styles.Tab}>
                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"showUpcoming"}
                >
                  Upcoming
                </button>

                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"showPast"}
                >
                  Past
                </button>

                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"showCanceled"}
                >
                  Canceled
                </button>
              </div>
              {showUpcoming ? (
                <Container>
                  <h3>Upcoming Trips: </h3>
                  {upcomingTrips.map((upcomingTrip, index) => (
                    <UpcomingTrips
                      trip={upcomingTrip}
                      cancelTrip={this.cancelTrip}
                      travelerName={user.FirstName}
                      key={index}
                    ></UpcomingTrips>
                  ))}
                </Container>
              ) : null}

              {showPast ? (
                <Container>
                  <h3>Past Trips: </h3>
                  {pastTrips.map((pastTrip, index) => (
                    <PastTrips
                      trip={pastTrip}
                      travelerName={user.FirstName}
                      key={index}
                    ></PastTrips>
                  ))}
                </Container>
              ) : null}

              {showCanceled ? (
                <Container>
                  <h3>Canceled trips:</h3>
                  {canceledTrips.map((canceledTrip, index) => (
                    <CanceledTrips
                      trip={canceledTrip}
                      travelerName={user.FirstName}
                      key={index}
                    />
                  ))}
                </Container>
              ) : null}
            </div>
          </Layout>
        );
      } else {
        return (
          <Layout>
            <Spinner />
          </Layout>
        );
      }
    } else {
      return (
        <LoginRedirect>
          You must be logged in to view booked trips!
        </LoginRedirect>
      );
    }
  }
}

export default MyTrips;
