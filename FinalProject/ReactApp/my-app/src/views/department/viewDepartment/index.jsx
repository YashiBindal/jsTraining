import React, { useEffect } from "react";
import { Table } from "Components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDepartments } from "actions";

export const ViewDepartments = () => {
  const dispatch = useDispatch();
  const { departmentArray } = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  return departmentArray?.length ? (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <h3 style={{ marginTop: "20px" }}>Departments List</h3>
      <Table rows={departmentArray} canEdit={false} canDelete={false} />
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

export default ViewDepartments;
