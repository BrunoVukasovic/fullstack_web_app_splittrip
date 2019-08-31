import React, { Component } from "react";
import styles from "./styles.module.css";

import StarRatingComponent from "react-star-rating-component";

export default class ReviewItem extends Component {
  getMonthNameFromNumber = number => {
    switch (number) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "";
    }
  };
  render() {
    const {
      firstName,
      rating,
      heading,
      description,
      date,
      tripName,
      reviewID,
      bookedTripID
    } = this.props.review;
    const { handleDelete } = this.props;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const name = firstName ? firstName : tripName;

    return (
      <div className={styles.ReviewItem}>
        <p>{name + ", " + this.getMonthNameFromNumber(month) + " " + year}</p>
        <StarRatingComponent
          className={styles.RatingStar}
          name="rating"
          value={rating}
          starCount={5}
          editing={false}
          emptyStarColor={"var(--color-primary)"}
          starColor={"var(--color-logo-blue)"}
        />
        <h3>{heading}</h3>
        <p>{description}</p>
        {handleDelete ? (
          <button
            className={"ButtonSmall"}
            onClick={() => handleDelete(reviewID, bookedTripID)}
          >
            Delete Review
          </button>
        ) : null}
      </div>
    );
  }
}
