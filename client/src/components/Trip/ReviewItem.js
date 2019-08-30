import React, { Component } from "react";
import styles from "./styles.module.css";

import StarRatingComponent from "react-star-rating-component";

export default class ReviewItem extends Component {
  render() {
    const { firstName, rating, heading, description } = this.props.review;
    return (
      <div className={styles.ReviewItem}>
        <p>{firstName}</p>
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
      </div>
    );
  }
}
