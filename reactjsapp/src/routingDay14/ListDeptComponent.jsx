import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableComponent from "../components/reusableComponents/tableComponent";
import { HttpService } from "../services/HttpService";
import BackHomeComponent from "./BackHomeComponent";

class ListDeptComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
    };
    this.httpService = new HttpService();
  }
  componentDidMount() {
    console.log("inside cdm");

    this.httpService
      .getDeptData()
      .then((resp) => {
        // resp = Array.from(resp);
        console.log("resp :>> ", resp);
        this.setState((prevState) => {
          return {
            departments: [...prevState.departments, ...resp.data.response],
          };
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: `Error Occurred ${error.message}` });
      });
  }

  render() {
    return this.state.departments?.length ? (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <TableComponent
          dataSource={this.state.departments}
          canDelete
        ></TableComponent>
        <button
          className="btn btn-primary"
          value="createDept"
          style={{ margin: "10px" }}
        >
          <Link to="/createDept" style={{ color: "white" }}>
            Create New Department
          </Link>
        </button>
        <BackHomeComponent></BackHomeComponent>
      </div>
    ) : (
      <h5>No records Found</h5>
    );
  }
}

export default ListDeptComponent;
