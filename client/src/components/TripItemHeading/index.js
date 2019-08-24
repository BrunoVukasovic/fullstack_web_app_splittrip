import React from "react";
import styles from "./styles.module.css";

export default ({ children }) => (
    <h2 className={styles.TripItemHeading}> {children} </h2>
);