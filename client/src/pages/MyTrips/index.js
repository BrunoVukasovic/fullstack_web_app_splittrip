import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UpcomingTrips from "./UpcomingTrips";
// import CanceledTrips from "./UpcomingTrips";
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
      // this.props.history.push("/my-trips");
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

  componentDidMount = () => {
    axios.get("/api/bookedTrips").then(res => {
      console.log(res);
      const bookedTrips = res.data;
      const { upcomingTrips, pastTrips, canceledTrips } = this.state;
      this.setState({ fetched: true });
      bookedTrips.map(bookedTrip => {
        if (bookedTrip.Past) {
          pastTrips.push(bookedTrip);
        }
        if (bookedTrip.Canceled) {
          canceledTrips.push(bookedTrip);
        } else upcomingTrips.push(bookedTrip);
      });
    });
  };

  render() {
    const {
      showUpcoming,
      showpast,
      showCanceled,
      upcomingTrips,
      pastTrips,
      canceledTrips,
      fetched
    } = this.state;
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("show: " + showUpcoming);

    // if logged in
    if (user) {
      // if bookedTrips are fetched
      if (fetched) {
        return (
          <Layout>
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
                  {upcomingTrips.map(upcomingTrip => (
                    <UpcomingTrips
                      trip={upcomingTrip}
                      cancelTrip={this.cancelTrip}
                      travelerName={user.FirstName}
                      key={upcomingTrip.BookedTripID}
                    ></UpcomingTrips>
                  ))}
                </Container>
              ) : null}

              {showpast ? (
                <div>
                  <h3>Past trips:</h3>
                  <p>You did not went on any trip with us yet...</p>
                </div>
              ) : null}

              {showCanceled ? (
                <Container>
                  <h3>Canceled trips:</h3>
                  {/* canceledTrips.map(canceledTrip => (
                    <Link to={canceledTrip.slug} key={canceledTrip.id}>
                      <CanceledTrips canceledTrips={canceledTrip} />
                    </Link>
                  )) */}
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
