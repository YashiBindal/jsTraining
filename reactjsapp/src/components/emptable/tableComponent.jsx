import React, { Component } from "react";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRowClick(emp) {
    this.props.SelectEmp(emp);
    console.log("row clicked");
  }

  handleRowDelete(e, index) {
    e.stopPropagation();
    console.log("delete clicked", index);
    this.props.onRowDelete(index);
  }
  render() {
    const {
      EmpDataSource,
      TableHeaderDataSource,
      canDelete,
      sortKey,
      isSort,
      reverse,
      count,
    } = this.props;
    const rows = EmpDataSource;
    //parseInt can also be written as +emp[sortKey]
    if (isSort) {
      if (sortKey === "EmpNo" || sortKey === "Salary") {
        rows.sort((emp1, emp2) => {
          if (reverse) return parseInt(emp2[sortKey]) - parseInt(emp1[sortKey]);

          return parseInt(emp1[sortKey]) - parseInt(emp2[sortKey]);
        });
      } else {
        rows.sort((emp1, emp2) => {
          var a = reverse
            ? emp2[sortKey]?.toString().toUpperCase()
            : emp1[sortKey]?.toString().toUpperCase(); // ignore upper and lowercase

          var b = reverse
            ? emp1[sortKey]?.toString().toUpperCase()
            : emp2[sortKey]?.toString().toUpperCase(); // ignore upper and lowercase

          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      }
    }
    return rows?.length ? (
      <table className="table table-bordered table-hover table-dark">
        <thead>
          <tr>
            {TableHeaderDataSource.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(
            (emp, index) =>
              index < count && (
                <tr key={index} onClick={() => this.handleRowClick(emp)}>
                  {TableHeaderDataSource.map((col, idx) => (
                    <td key={idx}>{emp[col]}</td>
                  ))}
                  {canDelete && (
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => this.handleRowDelete(e, index)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              )
          )}
        </tbody>
      </table>
    ) : (
      <p>No data available to show</p>
    );
  }
}
export default TableComponent;
