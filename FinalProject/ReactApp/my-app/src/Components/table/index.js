import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

export const Table = ({
  rows,
  canDelete = true,
  onEditClick,
  onDeleteClick,
}) => {
  const headers = useMemo(() => rows.length && Object.keys(rows[0]), [rows]);
  const rowAccessor = useMemo(() => rows.length && Object.keys(rows[0])[0], [
    rows,
  ]);
  console.log("headers", headers);
  console.log("rowAccessor", rowAccessor);
  const history = useHistory();
  const handleEditClick = (row) => {
    onEditClick(row);
    history.push("/editEmp");
  };

  const handleRowDelete = (row) => {
    onDeleteClick(row);
    history.push("/emps");
  };

  return (
    rows.length && (
      <table
        className="table table-bordered table-hover table-dark"
        style={{ marginTop: "50px" }}
      >
        <thead>
          <tr>
            {headers.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {headers.map((col, idx) => (
                <td key={idx}>{row[col]}</td>
              ))}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRowDelete(row[rowAccessor])}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditClick(row)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};
export default Table;
