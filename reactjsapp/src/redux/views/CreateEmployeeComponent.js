import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentEmpSelector } from "../reducers/reducer";
import addEmployee from "./../actions/action";

const CreateEmployeeComponent = (props) => {
  let dispatch = useDispatch();
  //const arr = useState({
  //     arr[0]     arr[1]
  const [employee, updateEmployee] = useState({
    EmpNo: 0,
    EmpName: "",
    DeptName: "",
    Designation: "",
  });

  let currentEmp = useSelector(currentEmpSelector);

  React.useEffect(() => {
    updateEmployee(currentEmp);
  }, [currentEmp]);

  const save = () => {
    // emit a props with the employee state from the component
    // so that it can be listener by the immediate parent
    // of this component
    // props.AddEmployeeAction(employee);
    dispatch(addEmployee(employee));
  };

  const clear = () => {
    updateEmployee({ EmpNo: 0, EmpName: "", DeptName: "", Designation: "" });
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>EmpNo</label>
        <input
          type="text"
          className="form-control"
          value={employee.EmpNo}
          onChange={(evt) =>
            updateEmployee({ ...employee, EmpNo: parseInt(evt.target.value) })
          }
        />
      </div>
      <div className="form-group">
        <label>EmpName</label>
        <input
          type="text"
          className="form-control"
          value={employee.EmpName}
          onChange={(evt) =>
            updateEmployee({ ...employee, EmpName: evt.target.value })
          }
        />
      </div>
      <div className="form-group">
        <input
          type="button"
          value="Clear"
          onClick={clear}
          className="btn btn-warning"
        />
        <input
          type="button"
          value="Save"
          onClick={save}
          className="btn btn-success"
        />
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
