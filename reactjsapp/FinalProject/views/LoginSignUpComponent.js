import React from "react";
import { Link } from "react-router-dom";

const LoginSignUpComponent = () => {
  return (
    <div
      className="container"
      style={{
        width: "600px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ marginTop: "100px" }}>
        <h2 style={{ margin: "0px 35px" }}>
          Welcome to Home page of MERN Application.
        </h2>
        <h5>
          To proceed further ,login if already a user and signup if new user
        </h5>
        <br />
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/login" style={{ color: "white" }}>
            <button
              className="btn btn-primary"
              value="LogIn"
              style={{ margin: "10px" }}
            ></button>
          </Link>
          <Link to="/signup" style={{ color: "white" }}>
            <button
              className="btn btn-primary"
              value="SignUp"
              style={{ margin: "10px" }}
            ></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpComponent;
