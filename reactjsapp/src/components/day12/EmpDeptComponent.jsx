import React, { Component } from "react";
import { Departments, Designations } from "./../../models/constants";
import SelectComponent from "../reusableComponents/selectComponent";
import TableComponent from "../reusableComponents/tableComponent";
class EmpDeptComponent extends Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      EmpNo: "",
      EmpName: "",
      DeptName: "",
      Designation: "",
      Salary: "",
      departments: Departments, // store constant array
      designations: Designations, // store constant array
      sortKey: "",
      sortOrder: "asc",
      count: 1,
      countArr: [1, 3, 5, 10],
      employees: [
        {
          EmpNo: 101,
          EmpName: "Akash",
          DeptName: "IT",
          Designation: "Manager",
          Salary: 10000,
        },
        {
          EmpNo: 102,
          EmpName: "Mukesh",
          DeptName: "HRD",
          Designation: "Lead",
          Salary: 12000,
        },
        {
          EmpNo: 103,
          EmpName: "Abhay",
          DeptName: "SALES",
          Designation: "Manager",
          Salary: 30000,
        },
        {
          EmpNo: 104,
          EmpName: "Nandu",
          DeptName: "TRAINING",
          Designation: "Trainer",
          Salary: 17000,
        },
      ],
      tableColumnHeaders: [
        "EmpNo",
        "EmpName",
        "DeptName",
        "Designation",
        "Salary",
      ],
    };
  }
  /**
   * @param {{ target: { name: any; value: any; }; }} evt
   */
  handleValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  validateForm = () => {
    const { EmpName, EmpNo, DeptName, Designation, Salary } = this.state;
    if (!EmpName || !EmpNo || !DeptName || !Designation || !Salary)
      return false;
    return true;
  };
  clear = () => {
    this.setState({
      EmpNo: "",
      EmpName: "",
      DeptName: "",
      Designation: "",
      Salary: "",
    });
  };

  save = () => {
    let emp = {
      EmpNo: this.state.EmpNo,
      EmpName: this.state.EmpName,
      DeptName: this.state.DeptName,
      Designation: this.state.Designation,
      Salary: this.state.Salary,
    };
    this.setState((prevState) => {
      return { employees: [...prevState.employees, emp] };
    });

    this.clear();

    // console.log(`EMployees = ${JSON.stringify(this.state.employees)}`);
  };

  getSelectedDeptName = (val) => {
    console.log(`DeptName ${val}`);
    this.setState({ DeptName: val });
  };

  getSelectedDesignation = (val) => {
    console.log(`Designation ${val}`);
    this.setState({ Designation: val });
  };
  getSelectedEmp = (e) => {
    this.setState({ EmpNo: e.EmpNo });
    this.setState({ EmpName: e.EmpName });
    this.setState({ DeptName: e.DeptName });
    this.setState({ Designation: e.Designation });
    this.setState({ Salary: e.Salary });
  };
  deleteRow = (index) => {
    this.setState((prevState) => {
      // underscore is used to denote an unused argument
      const newEmpArray = prevState.employees.filter((_, i) => {
        return !(index === i);
      });
      return { employees: newEmpArray };
    });
  };
  getSortKey = (val) => {
    this.setState({ sortKey: val });
  };
  getCount = (val) => {
    this.setState({ count: val });
  };

  setSort = (e) => {
    this.setState({ sortOrder: e.target.value });
  };

  render() {
    console.log("this.state :>> ", this.state);
    return (
      <div className="container">
        <h2>The Employee Information</h2>
        <div className="form-group">
          <label>EmpNo</label>
          <input
            type="text"
            className="form-control"
            name="EmpNo"
            value={this.state.EmpNo}
            onChange={this.handleValueChange.bind(this)}
            placeholder="Enter Employee Number"
          />
        </div>
        <div className="form-group">
          <label>EmpName</label>
          <input
            type="text"
            className="form-control"
            name="EmpName"
            value={this.state.EmpName}
            onChange={this.handleValueChange.bind(this)}
            placeholder="Enter Employee Name"
          />
        </div>
        <div className="form-group">
          <label>DeptName</label>
          <SelectComponent
            value={this.state.DeptName}
            options={this.state.departments}
            onChange={this.getSelectedDeptName.bind(this)}
          ></SelectComponent>
        </div>
        <div className="form-group">
          <label>Designation</label>
          <SelectComponent
            value={this.state.Designation}
            options={this.state.designations}
            onChange={this.getSelectedDesignation.bind(this)}
          ></SelectComponent>
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            className="form-control"
            name="Salary"
            value={this.state.Salary}
            onChange={this.handleValueChange.bind(this)}
            placeholder="Enter Employee salary"
          />
        </div>
        <div className="form-group">
          <input
            type="button"
            value="Clear"
            onClick={this.clear.bind(this)}
            className="btn btn-warning"
            style={{ margin: "20px" }}
          />
          <input
            type="button"
            value="Save"
            disabled={!this.validateForm()}
            onClick={this.save.bind(this)}
            className="btn btn-success"
            style={{ margin: "20px" }}
          />
        </div>
        <hr />
        <h2>The Employee List</h2>
        <br />

        <div className="dropdown">
          <h5>Sort Table by</h5>

          <SelectComponent
            value={this.state.sortKey}
            options={this.state.tableColumnHeaders}
            onChange={this.getSortKey}
          ></SelectComponent>
          <br />
          <br />
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label
              className={`btn btn-secondary ${
                this.state.sortOrder === "asc" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="reverse"
                id="option1"
                value="asc"
                checked={this.state.sortOrder === "asc"}
                onChange={this.setSort.bind(this)}
              />
              Sort Ascending
            </label>
            <label
              className={`btn btn-secondary ${
                this.state.sortOrder === "dsc" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="reverse"
                id="option2"
                value="dsc"
                checked={this.state.sortOrder === "dsc"}
                onChange={this.setSort.bind(this)}
              />
              Sort Descending
            </label>
          </div>
        </div>
        <br />
        <br />
        <TableComponent
          TableHeaderDataSource={this.state.tableColumnHeaders}
          EmpDataSource={this.state.employees}
          SelectEmp={this.getSelectedEmp.bind(this)}
          canDelete
          isSort
          count={this.state.count}
          reverse={this.state.sortOrder === "dsc"}
          sortKey={this.state.sortKey}
          onRowDelete={this.deleteRow}
        ></TableComponent>
        <hr />
        <div class="form-inline" style={{ float: "right" }}>
          <label class="mr-sm-2">Records View Count</label>
          <SelectComponent
            value={this.state.count}
            options={this.state.countArr}
            onChange={this.getCount}
          ></SelectComponent>
        </div>
        <br />
        <br />
        <hr />
      </div>
    );
  }
}

export default EmpDeptComponent;
