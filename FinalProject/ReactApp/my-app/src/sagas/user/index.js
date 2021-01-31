import { call, put, takeLatest } from "redux-saga/effects";
import { createUser, verifyUser } from "services";

function addUser(user) {
  const response = createUser(user).then((res) => {
    // console.log("res.data", res);

    if (res.status === 200) {
      return {
        payload: res,
        type: "ADD_USER_SUCCESS",
      };
    }

    return {
      type: "ADD_USER_FAIL",
      payload: res,
    };
  });

  console.log('("response from create function`")', response);
  return response;
}

function login(cred) {
  const response = verifyUser(cred).then((res) => {
    console.log("res", res);
    if (res.status !== 200) {
      return {
        payload: res,
        type: "LOGIN_FAIL",
      };
    }

    localStorage.setItem("token", res.token);
    return {
      type: "LOGIN_SUCCESS",
      payload: res,
    };
  });

  return response;
}

function* addUserSuccess(action) {
  const newUser = action.payload;
  console.log(`new user to be created is ${JSON.stringify(newUser)}`);
  const response = yield call(addUser, newUser);

  console.log("newAction", response);
  yield put(response);
}

function* loginSuccess(action) {
  const cred = action.payload;
  console.log("cred", cred);
  const response = yield call(login, cred);
  yield put(response);
}

// ----------------------------------------------------------  //

export function* listenToUserLogin() {
  console.log("listening to user login");
  yield takeLatest("LOGIN_USER", loginSuccess);
}

export function* listenToAddUser() {
  console.log("listening to create user action");
  yield takeLatest("ADD_USER", addUserSuccess);
}
