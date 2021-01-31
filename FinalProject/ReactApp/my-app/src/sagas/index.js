import { all } from "redux-saga/effects";
import {
  listenToAddDepartment,
  listenToDeleteDepartment,
  listenToGetDepartments,
  listenToUpdateDepartment,
} from "./department";
import {
  listenToAddEmployee,
  listenToDeleteEmployee,
  listenToGetEmployees,
  listenToUpdateEmployee,
} from "./employee";
import { listenToAddUser, listenToUserLogin } from "./user";

export default function* rootSaga() {
  console.log("1. Root Saga is initialized");
  yield all([
    listenToUserLogin(),
    listenToAddUser(),
    listenToGetDepartments(),
    listenToAddDepartment(),
    listenToUpdateDepartment(),
    listenToDeleteDepartment(),
    listenToGetEmployees(),
    listenToAddEmployee(),
    listenToUpdateEmployee(),
    listenToDeleteEmployee(),
  ]);
}
