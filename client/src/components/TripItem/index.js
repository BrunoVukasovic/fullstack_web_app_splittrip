import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
export default ({ children }) => (
  <div className={cn(styles.TripItem, "BackgroundColorLight")}>{children}</div>
);
