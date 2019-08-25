import React from "react";
import styles from "./styles.module.css";

export default ({ children, ...rest }) => (
  <div className={styles.TripDescription}>
    <p {...rest}>{children}</p>
  </div>
);
