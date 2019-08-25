import React from "react";
import Layout from "../Layout";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default ({ children }) => (
  <Layout>
    <p>{children}</p>
    <Link to="/login">
      <button className={styles.LoginButton}>Login</button>
    </Link>
  </Layout>
);
