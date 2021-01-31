import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addUser } from "actions";
import SignUpResponseComponent from "./SignUpResponse";

const SignUpComponent = (props) => {
  const [user, userInfo] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [showMsg, setShowMsg] = useState(false);
  const success = useSelector((state) => state.success);

  const clear = () => {
    setShowMsg(false);
    userInfo({ userName: "", password: "", email: "" });
  };

  return (
    <div className="container">
      {!success && (
        <div>
          <h3>User Information</h3>
          <div className="form-group">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={user.userName}
              onChange={(evt) =>
                userInfo({ ...user, userName: evt.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={(evt) =>
                userInfo({ ...user, password: evt.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={(evt) => userInfo({ ...user, email: evt.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="button"
              value="Clear"
              onClick={clear}
              className="btn btn-warning"
              style={{ margin: "20px" }}
            />

            <input
              type="button"
              value="Save"
              onClick={() => {
                setShowMsg(true);
                props.addUser(user);
              }}
              className="btn btn-success"
              style={{ margin: "20px" }}
            />
          </div>
        </div>
      )}
      <div>{showMsg && <SignUpResponseComponent />}</div>
    </div>
  );
};
const mapDispatchToProps = {
  addUser: addUser,
};

export default connect(null, mapDispatchToProps)(SignUpComponent);
