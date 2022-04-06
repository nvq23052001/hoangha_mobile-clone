import React from "react";
import { Link } from "react-router-dom";
import "./404.css";
function NotFound() {
  return (
    <div className="body">
      <div className="wrapper">
        <img src="https://wallpaperaccess.com/full/3275697.jpg" alt="" />
        <h5>
          Why Bro,
          <br />
          Why did you do that....
        </h5>
        <h3 style={{ marginTop: "50px" }}>You just Hit END</h3>
        <h1>4 4</h1>
        <Link to="/">
          <i
            className="bi bi-arrow-left-circle"
            style={{ paddingRight: "10px" }}
          ></i>
          Let's Go Back
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
