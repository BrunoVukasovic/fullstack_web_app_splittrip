import React from "react";
import spinner from "./gif/spinner.gif";
export default () => (
  <div>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </div>
);
