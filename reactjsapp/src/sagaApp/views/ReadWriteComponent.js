import React from "react";
import { connect } from "react-redux";
import {
  getDepartments,
  saveDepartment,
  updateDepartment,
  deleteDepartment,
} from "./../actions/actions";
const ReadWriteComponent = (props) => {
  return (
    <div className="container">
      <input
        type="button"
        value="Get Data"
        onClick={props.getDepts}
        className="btn btn-primary"
      />
      <hr />
      <input
        type="button"
        value="Save Data"
        onClick={() =>
          props.postDept({
            DeptNo: 200,
            DeptName: "WareHouse",
            Location: "Mumbai",
            Capacity: 400,
          })
        }
        className="btn btn-success"
      />
      <br />
      <br />
      <input
        type="button"
        value="update Data"
        onClick={() =>
          props.putDept({
            DeptNo: 200,
            DeptName: "Inventory",
            Location: "Mumbai",
            Capacity: 600,
          })
        }
        className="btn btn-success"
      />
      <br />
      <br />
      <input
        type="button"
        value="delete Data"
        onClick={() => props.deleteDept({ DeptNo: 200 })}
        className="btn btn-danger"
      />
    </div>
  );
};

// define a mapDispatchToProps object that will map
// the action creator method to an event of the button using props

const mapDispatchToProps = {
  // prop : actual action creator
  getDepts: getDepartments, // action for GET_DEPARTMENTS
  postDept: saveDepartment, // action for ADD_DEPARTMENT
  putDept: updateDepartment, //action for UPDATE_DEPARTMENT
  deleteDept: deleteDepartment,
};

// when the click event is raise, the getDepts will be executed,
// this contains the 'getDepartments' action creator. This action creator will be executed
// the action creator returns 'GET_DEPARTMENTS' type. This will be listened by reducers and
// middleware. The Middleware will start executing and will output the output action
// i.e. GET_DEPARTMENTS_SUCCESS and this will be monitored by reducer to update the store
export default connect(null, mapDispatchToProps)(ReadWriteComponent);

//export default ReadWriteComponent;
