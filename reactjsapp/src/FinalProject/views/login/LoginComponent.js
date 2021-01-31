import React, { useState } from "react";
import { createUser } from "../../actions/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const LoginComponent = (props) => {
  const [user, userInfo] = useState({
    userName: "",
    password: "",
  });
  return (
    <div className="container">
      <h3>User Information</h3>
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          value={user.userName}
          onChange={(evt) =>
            userInfo({ ...user, userName: parseInt(evt.target.value) })
          }
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          className="form-control"
          name="password"
          value={user.password}
          onChange={(evt) =>
            userInfo({ ...user, password: parseInt(evt.target.value) })
          }
        />
      </div>
      {/* <div className="form-group">
        <input
          type="button"
          value="Clear"
          onClick={clear}
          className="btn btn-warning"
          style={{ margin: "20px" }}
        />
        <Link to="/signUpResponse">
          <input
            type="button"
            value="Save"
            onClick={() => props.addUser(user)}
            className="btn btn-success"
            style={{ margin: "20px" }}
          />
        </Link>
      </div> */}
    </div>
  );
};
// const mapDispatchToProps = {
//   addUser: createUser,
// };

// export default connect(null, mapDispatchToProps)(LoginComponent);
export default LoginComponent;
