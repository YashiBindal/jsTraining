import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeForm } from "Components";
import { saveEmployee, setLoadingState } from "actions";
import { useHistory, Link } from "react-router-dom";

export const CreateEmployee = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loadingState, message } = useSelector((state) => state.employees);

  const onSave = (emp) => {
    dispatch(saveEmployee(emp));
  };

  useEffect(() => {
    if (loadingState === "created") {
      history.push("/emps");
      return () => {
        dispatch(setLoadingState(""));
      };
    }
  }, [loadingState, history, dispatch]);

  return (
    <div className="container">
      <EmployeeForm onSave={onSave} />
      {loadingState === "failed" && (
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

export default CreateEmployee;
