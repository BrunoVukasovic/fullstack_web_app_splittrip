import React from "react";
import { Link } from "react-router-dom";
import { Container } from "..";

export default ({ children }) => (
  <Container>
    <p>{children}</p>
    <Link to="/login">
      <button className={"Button"}>Login</button>
    </Link>
  </Container>
);
