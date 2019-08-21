import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default ({ children, ...rest }) => (
  <NavLink
    className={styles.NavLink}
    activeClassName={styles.NavLink__active}
    {...rest}
  >
    {children}
  </NavLink>
);
