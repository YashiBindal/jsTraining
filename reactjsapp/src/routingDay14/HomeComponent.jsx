import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  render() {
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
            Welcome to Home page of MERN Application by Yashi
          </h2>
          <br />
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="btn btn-primary"
              value="empList"
              style={{ margin: "10px" }}
            >
              <Link to="/deptList" style={{ color: "white" }}>
                Department List
              </Link>
            </button>
            <button
              className="btn btn-primary"
              value="empList"
              style={{ margin: "10px" }}
            >
              <Link to="/empList" style={{ color: "white" }}>
                Employee List
              </Link>
            </button>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="btn btn-primary"
              value="createDept"
              style={{ margin: "10px" }}
            >
              <Link to="/createDept" style={{ color: "white" }}>
                Create New Department
              </Link>
            </button>
            <button
              className="btn btn-primary"
              value="createEmp"
              style={{ margin: "10px" }}
            >
              <Link to="/createEmp" style={{ color: "white" }}>
                Create New Employee
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
