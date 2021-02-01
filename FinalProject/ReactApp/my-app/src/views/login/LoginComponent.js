import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { login } from "actions";
import { useDispatch, useSelector } from "react-redux";

const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [showMsg, setShowMsg] = useState(false);

  const { authenticated, message, successLogin } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (authenticated) {
      history.push("/homePage");
    }
  }, [authenticated, history]);

  const clear = () => {
    setUser({
      userName: "",
      password: "",
    });
    setShowMsg(false);
  };

  return (
    <div className="container">
      {!successLogin ? (
        <div>
          <h3>User Information</h3>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={user.userName}
              onChange={(evt) =>
                setUser({ ...user, userName: evt.target.value })
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
                setUser({ ...user, password: evt.target.value })
              }
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
              value="Submit"
              onClick={() => {
                dispatch(login(user));
                setShowMsg(true);
              }}
              className="btn btn-success"
              style={{ margin: "20px" }}
            />
          </div>
        </div>
      ) : (
        <div>
          {showMsg && (
            <div className="container" style={{ color: "red" }}>
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
