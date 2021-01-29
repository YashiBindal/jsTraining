import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeaders: Object.keys(this.props.dataSource[0]),
      showUpdateForm: false,
      updateId: Object.keys(this.props.dataSource[0])[0],
    };
  }

  // handleRowClick(emp) {
  //   this.setState({showUpdateForm:true});
  //   console.log("Edit clicked");
  // }

  handleRowDelete(e, index) {
    e.stopPropagation();
    console.log("delete clicked", index);
    this.props.rowDelete(index);
  }
  render() {
    return (
      <table
        className="table table-bordered table-hover table-dark"
        style={{ marginTop: "50px" }}
      >
        <thead>
          <tr>
            {this.state.tableHeaders.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.dataSource.map((objElement, index) => (
            <tr key={index}>
              {this.state.tableHeaders.map((col, idx) => (
                <td key={idx}>{objElement[col]}</td>
              ))}
              {this.props.canDelete && (
                <td>
                  <button className="btn btn-danger">
                    <Link
                      to={`/delete${this.state.updateId}/${
                        objElement[this.state.updateId]
                      }`}
                      style={{ color: "white" }}
                    >
                      Delete
                    </Link>
                  </button>
                </td>
              )}
              <td>
                <button className="btn btn-warning">
                  <Link
                    to={`/edit${this.state.updateId}/${
                      objElement[this.state.updateId]
                    }`}
                    style={{ color: "black" }}
                  >
                    Edit
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default TableComponent;

// class DeleteComponent extends Component {
//   render() {
//     return <div></div>;
//   }
// }
