import React from "react";
import { connect } from "react-redux";
const ListDataComponent = ({ departments }) =>
  departments ? (
    <div className="container">
      <h2>List of Departments</h2>
      {JSON.stringify(departments)}
    </div>
  ) : null;

// subscribe to the state and read data from it it
// in this case read all departments
const mapStateToProps = (state) => ({
  // props: the data received from 'store'
  departments: state.departments,
});
// the connect() method will execute the subscription on store to read the data
export default connect(mapStateToProps, null)(ListDataComponent);

// export default ListDataComponent;
