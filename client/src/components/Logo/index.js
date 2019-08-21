import React from "react";
import styles from "./styles.module.css";
import logoPNG from "./images/Logo 298x298.png";
import { Link } from "react-router-dom";

export default () => (
  <Link to="/">
    <img className={styles.Logo} src={logoPNG} alt="Logo" />
  </Link>
);
