import React from "react";
import styles from "./styles.module.css";

export default ({ ...rest }) => (
  <div>
    <img className={styles.mainImage} {...rest} alt="Main"></img>
  </div>
);
