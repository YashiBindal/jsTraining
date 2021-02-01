import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SignUpResponseComponent = () => {
  const { user, status, message } = useSelector((state) => state.users);

  return status === 200 ? (
    <div
      className="container"
      style={{
        width: "600px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ marginTop: "100px", justifyContent: "center" }}>
        <h3>User {user.userName} created successfully</h3>
        <h4>Login to proceed</h4>
      </div>
      <hr />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to="/login" style={{ color: "white" }}>
          <button
            className="btn btn-primary"
            value="LogIn"
            style={{ margin: "10px" }}
          >
            LogIn
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="container" style={{ color: "red" }}>
      <h5>{message}</h5>
    </div>
  );
};

export default SignUpResponseComponent;
