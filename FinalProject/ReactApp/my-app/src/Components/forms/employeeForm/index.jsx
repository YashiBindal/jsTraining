import React, { useState, useEffect } from "react";

export const EmployeeForm = ({ onSave, editEmp }) => {
  const [empNo, setEmpNo] = useState("");
  const [empName, setEmpName] = useState("");
  const [deptNo, setDeptNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (editEmp) {
      setEmpNo(editEmp.EmpNo);
      setDeptNo(editEmp.DeptNo);
      setSalary(editEmp.Salary);
      setEmpName(editEmp.EmpName);
      setDesignation(editEmp.Designation);
      setEditMode(true);
    }
  }, [editEmp]);

  const clear = () => {
    !editMode && setEmpNo("");
    setDeptNo("");
    setSalary("");
    setEmpName("");
    setDesignation("");
  };

  const save = () => {
    onSave({
      EmpNo: empNo,
      DeptNo: deptNo,
      Salary: salary,
      EmpName: empName,
      Designation: designation,
    });
  };

  return (
    <div className="container">
      <h2>The Employee Information</h2>
      <div className="form-group">
        <label>Employee ID</label>
        <input
          type="text"
          className="form-control"
          name="EmpNo"
          value={empNo}
          onChange={(e) => setEmpNo(e.target.value)}
          disabled={editMode}
          placeholder="Enter Employee Number"
        />
      </div>
      <div className="form-group">
        <label>Employee Name</label>
        <input
          type="text"
          className="form-control"
          name="EmpName"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
          placeholder="Enter Employee Name"
        />
      </div>
      <div className="form-group">
        <label>Department No</label>
        <input
          type="text"
          className="form-control"
          name="DeptNo"
          value={deptNo}
          onChange={(e) => setDeptNo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Designation</label>
        <input
          type="text"
          className="form-control"
          name="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input
          type="text"
          className="form-control"
          name="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter Employee Salary"
        />
      </div>
      <div className="form-group">
        <input
          type="button"
          value="Clear"
          onClick={clear}
          className="btn btn-warning"
          style={{ margin: "20px" }}
        />
        <input
          type="button"
          value="Save"
          onClick={save}
          className="btn btn-success"
          style={{ margin: "20px" }}
        />
      </div>
    </div>
  );
};

export default EmployeeForm;
