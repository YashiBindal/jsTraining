import React, { Component } from "react";
import { HttpService } from "../services/HttpService";
import SelectComponent from "../components/reusableComponents/selectComponent";
import BackHomeComponent from "./BackHomeComponent";
class EditDepartmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DeptNo: 0,
      DeptName: "",
      Location: "",
      Capacity: 0,
      deptHeaders: [
        "IT",
        "Marketing",
        "Sales",
        "HRD",
        "Maintenance",
        "Training",
        "Admin",
        "Accounts",
      ],
    };
    this.httpService = new HttpService();
  }
  handleChanges(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  getSelectedDeptName = (val) => {
    console.log(`DeptName ${val}`);
    this.setState({ DeptName: val });
  };
  // subscribe to the route parameters
  componentDidMount() {
    let deptNo = this.props.match.params.id;
    console.log(`Received Value ${deptNo}`);
    let dept = {};
    this.httpService
      .getDeptDataById(parseInt(deptNo))
      .then((resp) => {
        dept = resp.data.data;
        this.setState({ DeptNo: dept.DeptNo });
        this.setState({ DeptName: dept.DeptName });
        this.setState({ Location: dept.Location });
        this.setState({ Capacity: dept.Capacity });
        console.log(JSON.stringify(dept));
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
  }

  update() {
    // update the record
    let dept = {
      DeptNo: this.state.DeptNo,
      DeptName: this.state.DeptName,
      Location: this.state.Location,
      Capacity: this.state.Capacity,
    };
    console.log("dept :>> ", dept);
    this.httpService
      .putDeptData(dept)
      .then((resp) => {
        console.log("updatedData" + JSON.stringify(resp.data));
        this.props.history.push("/deptList");
      })
      .catch((error) => {
        this.setState({ errorMessage: `Error Occurred ${error.message}` });
      });
  }

  clear() {
    this.setState({ DeptNo: 0 });
    this.setState({ DeptName: "" });
    this.setState({ Location: "" });
    this.setState({ Capacity: 0 });
  }
  render() {
    return (
      <div className="container">
        <h2>Create</h2>
        <div className="form-group">
          <label>DeptNo</label>
          <input
            type="text"
            className="form-control"
            name="DeptNo"
            value={this.state.DeptNo}
            onChange={this.handleChanges.bind(this)}
            disabled
          />
        </div>
        <div className="form-group">
          <label>DeptName</label>
          <SelectComponent
            value={this.state.DeptName}
            options={this.state.deptHeaders}
            onChange={this.getSelectedDeptName.bind(this)}
          ></SelectComponent>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            name="Location"
            value={this.state.Location}
            onChange={this.handleChanges.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Capacity</label>
          <input
            type="text"
            className="form-control"
            name="Capacity"
            value={this.state.Capacity}
            onChange={this.handleChanges.bind(this)}
          />
        </div>
        <input
          type="button"
          value="Clear"
          style={{ margin: "10px" }}
          onClick={this.clear.bind(this)}
          className="btn btn-warning"
        />
        <input
          type="button"
          value="update"
          onClick={this.update.bind(this)}
          className="btn btn-success"
        />
        <br />
        <div>
          <BackHomeComponent></BackHomeComponent>
        </div>
      </div>
    );
  }
}

export default EditDepartmentComponent;
