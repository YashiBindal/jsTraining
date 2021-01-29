import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableComponent from "../components/reusableComponents/tableComponent";
import { HttpService } from "../services/HttpService";
import BackHomeComponent from "./BackHomeComponent";

class ListEmpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.httpService = new HttpService();
  }
  componentDidMount() {
    this.httpService
      .getEmpData()
      .then((resp) => {
        this.setState((prevState) => {
          return {
            employees: [...prevState.employees, ...resp.data.response],
          };
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: `Error Occurred ${error.message}` });
      });
  }

  render() {
    return this.state.employees?.length ? (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <TableComponent
          dataSource={this.state.employees}
          canDelete
        ></TableComponent>
        <button
          className="btn btn-primary"
          value="createEmp"
          style={{ margin: "10px" }}
        >
          <Link to="/createEmp" style={{ color: "white" }}>
            Create New Employee
          </Link>
        </button>
        <BackHomeComponent></BackHomeComponent>
      </div>
    ) : (
      <h5>No records Found</h5>
    );
  }
}

export default ListEmpComponent;
