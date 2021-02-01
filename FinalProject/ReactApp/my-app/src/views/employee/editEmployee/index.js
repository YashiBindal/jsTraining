import { setEditState, updateEmployee } from "actions";
import { EmployeeForm } from "Components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export const EditEmployee = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { editState, message, editEmployee } = useSelector(
    (state) => state.employees
  );

  const onSave = (emp) => {
    dispatch(updateEmployee(emp));
  };

  useEffect(() => {
    if (editState === "edited") {
      history.push("/emps");
      return () => {
        dispatch(setEditState(""));
      };
    }
  }, [editState, history, dispatch]);

  return (
    <div className="container">
      <EmployeeForm onSave={onSave} editEmp={editEmployee} />
      {editState === "failed" && (
        <div className="container">DB error: {message}</div>
      )}
      <Link to="/homePage" style={{ color: "white" }}>
        <button
          className="btn btn-primary"
          value="createEmp"
          style={{ margin: "10px" }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default EditEmployee;
