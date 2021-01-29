import React, { Component } from "react";
import SelectComponent from "../components/reusableComponents/selectComponent";
import { HttpService } from "../services/HttpService";
import BackHomeComponent from "./BackHomeComponent";

class CreateEmpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmpNo: 0,
      EmpName: "",
      DeptNo: 0,
      Designation: "",
      Salary: 0,
      designations: [
        "Manager",
        "Head",
        "Executive",
        "Project Lead",
        "Operator",
        "Assistant",
        "Developer",
      ],
    };
    this.httpService = new HttpService();
  }

  componentDidMount() {
    let empNo = this.props.match.params.id;
    console.log(`Received Value ${empNo}`);
    let emp = {};
    this.httpService
      .getEmpDataById(parseInt(empNo))
      .then((resp) => {
        emp = resp.data.data;
        this.setState({ EmpNo: emp.EmpNo });
        this.setState({ EmpName: emp.EmpName });
        this.setState({ DeptNo: emp.DeptNo });
        this.setState({ Designation: emp.Designation });
        this.setState({ Salary: emp.Salary });
        // console.log(JSON.stringify(emp));
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
  }

  clear = () => {
    this.setState({
      EmpNo: "",
      EmpName: "",
      DeptNo: "",
      Designation: "",
      Salary: "",
    });
  };

  update() {
    let emp = {
      EmpNo: this.state.EmpNo,
      EmpName: this.state.EmpName,
      DeptNo: this.state.DeptNo,
      Designation: this.state.Designation,
      Salary: this.state.Salary,
    };
    console.log("emp :>> ", emp);
    this.httpService
      .putEmpData(emp)
      .then((resp) => {
        console.log(JSON.stringify(resp.data));
        this.props.history.push("/empList");
      })
      .catch((error) => {
        this.setState({ errorMessage: `Error Occurred ${error.message}` });
      });
  }
  handleValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  getSelectedDesignation = (val) => {
    console.log(`Designation ${val}`);
    this.setState({ Designation: val });
  };

  render() {
    return (
      <div className="container">
        <h2>The Employee Information</h2>
        <div className="form-group">
          <label>Employee No</label>
          <input
            type="text"
            className="form-control"
            name="EmpNo"
            value={this.state.EmpNo}
            onChange={this.handleValueChange.bind(this)}
            placeholder="Enter Employee Number"
            disabled
          />
        </div>
        <div className="form-group">
          <label>Employee Name</label>
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
          <label>Department No</label>
          <input
            type="text"
            className="form-control"
            name="DeptNo"
            value={this.state.DeptNo}
            onChange={this.handleValueChange.bind(this)}
          />
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
            placeholder="Enter Employee Salary"
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
            value="update"
            onClick={this.update.bind(this)}
            className="btn btn-success"
            style={{ margin: "20px" }}
          />
        </div>
        <br />
        <div>
          <BackHomeComponent></BackHomeComponent>
        </div>
      </div>
    );
  }
}

export default CreateEmpComponent;
