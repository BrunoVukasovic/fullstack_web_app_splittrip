import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import cn from "classnames";

export default ({ children, ...rest }) => (
  <NavLink
    className={cn(styles.NavLink, "ColorLogoBlue")}
    activeClassName={cn(styles.NavLink__active, "ColorLogoBlue")}
    {...rest}
  >
    {children}
  </NavLink>
);
