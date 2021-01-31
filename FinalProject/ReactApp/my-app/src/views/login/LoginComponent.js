import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "actions";
import { useDispatch } from "react-redux";

const LoginComponent = (props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const clear = () =>
    setUser({
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
          onChange={(evt) => setUser({ ...user, userName: evt.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          className="form-control"
          name="password"
          value={user.password}
          onChange={(evt) => setUser({ ...user, password: evt.target.value })}
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
        <Link to="/homePage">
          <input
            type="button"
            value="Save"
            onClick={() => dispatch(login(user))}
            className="btn btn-success"
            style={{ margin: "20px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
