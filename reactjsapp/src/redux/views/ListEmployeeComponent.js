import React from "react";
import { useDispatch, useSelector } from "react-redux";
import displayEmployee from "./../actions/displayAction";
import { empListSelector } from "./../reducers/reducer";

const ListEmployeesComponent = () => {
  let dispatch = useDispatch();

  const employeeList = useSelector(empListSelector);

  const display = (emp) => {
    dispatch(displayEmployee(emp));
  };

  if (employeeList === undefined || employeeList.length === 0) {
    return (
      <div>
        <strong>No Employees to Show in List</strong>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2>List of Employees</h2>
        <table className="table table-bordered table-hover table-dark">
          <thead>
            <tr>
              <td>EmpNo</td>
              <td>EmpName</td>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((emp, index) => (
              <tr key={index} onClick={() => display(emp)}>
                <td>{emp.EmpNo}</td>
                <td>{emp.EmpName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListEmployeesComponent;
