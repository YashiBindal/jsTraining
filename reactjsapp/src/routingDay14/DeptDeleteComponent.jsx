import React, { Component } from "react";
import { HttpService } from "../services/HttpService";
import { Link } from "react-router-dom";

class DeptDeleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getId: "",
    };
    this.httpService = new HttpService();
  }

  componentDidMount() {
    this.setState({ getId: this.props.match.params.id });
    console.log(`Received Value ${this.state.getId}`);
  }

  deleteRecord() {
    console.log("this.props.match.params.id :>> ", this.props.match.params.id);
    let id = parseInt(this.state.getId);
    this.httpService
      .deleteDeptData(id)
      .then((resp) => {
        console.log("DeletedData" + JSON.stringify(resp.data));
        this.props.history.push("/deptList");
      })
      .catch((error) => {
        console.log(`Error in Delete ${error}`);
      });
  }

  render() {
    return (
      <div
        className="container"
        style={{
          width: "600px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <h1>Delete Account</h1>
        <p>Are you sure you want to delete your account?</p>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            style={{ margin: "50px" }}
          >
            <Link to="/deptList" style={{ color: "white" }}>
              Cancel
            </Link>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ margin: "50px" }}
            onClick={this.deleteRecord}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default DeptDeleteComponent;
