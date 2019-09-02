import React, { Component } from "react";
import style from "./styles.module.css";
import styles from "./styles.module.css";
import axios from "axios";
import UpcomingTrips from "./UpcomingTrips";
import PastTrips from "./PastTrips";
import CanceledTrips from "./CanceledTrips";
import { Spinner, LoginRedirect, Container } from "../../components";
import { Layout } from "../../components";
import cn from "classnames";

export default class MyTrips extends Component {
  state = {
    showUpcoming: true,
    showPast: false,
    showCanceled: false,
    upcomingTrips: [],
    notReviewedPastTrips: [],
    reviewedPastTrips: [],
    canceledTrips: [],
    fetched: false
  };

  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const { email } = user;
      axios.post("/api/bookedTrips/all", { email }).then(res => {
        const bookedTrips = res.data;
        const {
          upcomingTrips,
          notReviewedPastTrips,
          reviewedPastTrips,
          canceledTrips
        } = this.state;
        // fill past, canceled and upcomning trips
        bookedTrips.forEach(bookedTrip => {
          if (bookedTrip.Past) {
            if (!bookedTrip.Reviewed) {
              notReviewedPastTrips.push(bookedTrip);
            } else {
              reviewedPastTrips.push(bookedTrip);
            }
          } else if (!bookedTrip.Past && this.isDateInPast(bookedTrip.Date)) {
            this.updatePastInBookedTripTable(bookedTrip);
            notReviewedPastTrips.push(bookedTrip);
          } else if (bookedTrip.Canceled) {
            canceledTrips.push(bookedTrip);
          } else upcomingTrips.push(bookedTrip);
        });
        this.setState({ fetched: true });
      });
    } else this.setState({ fetched: true });
  };

  cancelTrip = bookedTrip => {
    const { BookedTripID: bookedTripID } = bookedTrip;
    axios.patch("api/bookedTrips/cancel", { bookedTripID }).then(res => {
      console.log(res.data);
      this.props.history.push("/my-trips");
    });
  };

  onTabClick = e => {
    const stateElements = ["showUpcoming", "showPast", "showCanceled"];
    stateElements.forEach(element => this.setState({ [element]: false }));

    this.setState({ [e.target.value]: true });
  };

  updatePastInBookedTripTable = bookedTrip => {
    const { BookedTripID: bookedTripID } = bookedTrip;
    axios.patch("api/bookedTrips/past", { bookedTripID }).then(res => {
      console.log(res.data);
    });
  };

  isDateInPast = tripDate => {
    const date = Date.parse(tripDate);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if (date < now) return true;
    else return false;
  };

  render() {
    const {
      showUpcoming,
      showPast,
      showCanceled,
      upcomingTrips,
      notReviewedPastTrips,
      reviewedPastTrips,
      canceledTrips,
      fetched
    } = this.state;
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      user = {
        firstName: ""
      };
    }
    const { firstName } = user;
    // if logged in
    if (firstName) {
      // if bookedTrips are fetched
      if (fetched) {
        return (
          <Layout>
            <div>
              <h2>My Trips: </h2>

              <div className={cn(styles.Tab, "BackgroundColorLight")}>
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
                      bookedTrip={upcomingTrip}
                      cancelTrip={this.cancelTrip}
                      travelerName={firstName}
                      key={index}
                    ></UpcomingTrips>
                  ))}
                </Container>
              ) : null}

              {showPast ? (
                <Container className={style.PastParent}>
                  <h3>Past Trips: </h3>
                  {notReviewedPastTrips.map((pastTrip, index) => (
                    <PastTrips
                      bookedTrip={pastTrip}
                      travelerName={firstName}
                      key={index}
                    ></PastTrips>
                  ))}
                  {reviewedPastTrips.map((pastTrip, index) => (
                    <PastTrips
                      bookedTrip={pastTrip}
                      travelerName={firstName}
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
                      bookedTrip={canceledTrip}
                      travelerName={firstName}
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
        <Layout>
          <LoginRedirect>
            You must be logged in to view booked trips!
          </LoginRedirect>
        </Layout>
      );
    }
  }
}
