import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UpcomingTrips from "./UpcomingTrips";
import PastTrips from "./PastTrips";
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
      // fill past, canceled and upcomning trips
      bookedTrips.map(bookedTrip => {
        if (bookedTrip.Past) {
          pastTrips.push(bookedTrip);
        }
        if (bookedTrip.Canceled) {
          canceledTrips.push(bookedTrip);
        } else {
          if (this.isDateInPast(bookedTrip.Date)){ 
            updatePastInBookedTripTable(bookedTrip);
            pastTrips.push(bookedTrip)
          }
          else upcomingTrips.push(bookedTrip);
        }
      });
    });
  };

  updatePastInBookedTripTable(bookedTrip){
    axios.patch("...")
  }

  isDateInPast = tripDate => {
    const date = Date.parse(tripDate);
    const now = Date.now();
    if (date - now < 0) return true;
    else return false;
  };

  handleClick = upcomingTrips => {
    console.log(upcomingTrips[2].Date);
    var d = Date.parse("2019-08-25");
    console.log("d: " + d);
    var now = Date.now();
    console.log("now: " + now);
    let razlika = d - now;
    console.log("razlika " + razlika);
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
                  {upcomingTrips.map(upcomingTrip => {
                    <UpcomingTrips
                      trip={upcomingTrip}
                      cancelTrip={this.cancelTrip}
                      travelerName={user.FirstName}
                      key={upcomingTrip.BookedTripID}
                    ></UpcomingTrips>;
                  })}
                </Container>
              ) : null}

              {showpast ? (
                <Container>
                <h3>Upcoming Trips: </h3>
                {pastTrips.map(pastTrip => {
                  <PastTrips
                    trip={pastTrip}
                    travelerName={user.FirstName}
                    key={upcomingTrip.BookedTripID}
                  ></PastTrips>;
                })}
              </Container>
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
