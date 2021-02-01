import React from "react";
import { Link } from "react-router-dom";

export const HomeComponent = () => {
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
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: "30px 35px" }}>Welcome to home page.</h2>

          <h5>Choose an action from the below options</h5>
          <Link to="/emps" style={{ color: "white" }}>
            <button
              className="btn btn-primary"
              value="empList"
              style={{ margin: "10px" }}
            >
              View Employees
            </button>
          </Link>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/createEmp" style={{ color: "white" }}>
            <button
              className="btn btn-primary"
              value="createEmp"
              style={{ margin: "10px" }}
            >
              Create New Employee
            </button>
          </Link>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/depts" style={{ color: "white" }}>
            <button
              className="btn btn-primary"
              value="createEmp"
              style={{ margin: "10px" }}
            >
              View Departments
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
