import React, { useEffect } from "react";
import { Table } from "Components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, getEmployees, setEditEmployee } from "actions";

export const ViewEmployees = () => {
  const dispatch = useDispatch();
  const { employeeArray } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return employeeArray?.length ? (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <h3 style={{ marginTop: "20px" }}>Employees List</h3>
      <Table
        canDelete={true}
        canEdit={true}
        rows={employeeArray}
        onEditClick={(emp) => {
          dispatch(setEditEmployee(emp));
        }}
        onDeleteClick={(empNo) => {
          dispatch(deleteEmployee(empNo));
        }}
      />
      <Link to="/createEmp" style={{ color: "white" }}>
        <button
          className="btn btn-primary"
          value="createEmp"
          style={{ margin: "10px" }}
        >
          Create New Employee
        </button>
      </Link>
      <Link to="/homePage" style={{ color: "white" }}>
        <button
          className="btn btn-primary"
          value="Home"
          style={{ margin: "10px" }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  ) : (
    <h5>No records Found</h5>
  );
};

export default ViewEmployees;
