import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export default ({ className, children }) => (
  <div className={classNames(className, styles.Container)}>{children}</div>
);
