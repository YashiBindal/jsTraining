import { HttpService } from "./../../services/HttpService";

import { takeLatest, call, put, all } from "redux-saga/effects";

function getDepartments() {
  let serv = new HttpService();
  // access a method from the service
  // and get the response as promise aka subscribe to promise
  const response = serv.getDeptData().then((result) => result.data);
  console.log(`In getDepartments ${response}`);
  // return a response from the this method as resolve of the promise
  return Promise.resolve(response);
}

function saveDepartment(dept) {
  let serv = new HttpService();
  const response = serv.postDeptData(dept).then((result) => result.data);
  return Promise.resolve(response);
}
function updateDepartment(dept) {
  let serv = new HttpService();
  //   let id = dept.DeptNo;
  const response = serv.putDeptData(dept).then((result) => result.data);
  console.log("response form updateDepartment function", response);
  return Promise.resolve(response);
}
function deleteDepartment(deptNo) {
  let serv = new HttpService();
  const response = serv.deleteDeptData(deptNo).then((result) => result.data);
  console.log('("response from delete function`")', response);
  return Promise.resolve(response);
}

// 2. the possible output action that will contains the RESPONSE (if any or error)

function* fetchDepartmentsGenerator() {
  console.log("Processing the GET_DEPARTMENTS and waiting for Response");
  // subscribe to the promise resolve and yield data from the collection
  // if any
  const response = yield call(getDepartments);
  console.log(`After the yield call response \n ${response}`);
  // dispatch the output action
  yield put({
    type: "GET_DEPARTMENTS_SUCCESS",
    departments: response.response || { error: "ERROR_OCCURRED" },
  });
}

// 1. the generator method that will be used to listened to the dispatched
// action from any view under the <Provider> that is subscribed to the store
// in this case we will listed to GET_DEPARTMENTS action

function* listenToGetDepartmentsDispatchedAction() {
  console.log("Listening to GET_DEPARTMENTS Action");
  // the dispatched action and link it with the possible output action
  yield takeLatest("GET_DEPARTMENTS", fetchDepartmentsGenerator);
}

// 4. the function for dispatching output action for ADD_DEPARTMENT as ADD_DEPARTMENT_SUCCESS
// action is the parameter that represents the return type from the dispatched action
function* saveDepartmentSuccess(action) {
  // read the payload from the action
  const postedData = action.payload;
  console.log(
    `Data Received from UI for posting = ${JSON.stringify(postedData)}`
  );
  // call the method to post data
  const response = yield call(saveDepartment, postedData);
  // yield the output action
  yield put({
    type: "ADD_DEPARTMENT_SUCCESS",
    department: response,
  });
}

// 3. the function for handling ADD_DEPARTMENT action

function* listenToAddDepartmentDispatchAction() {
  // the second parameter is the worker action that will be
  // dispatching the response action
  // it is of the type worker:(action:Action<any>)
  // this means the action that is dispatched along with the
  // returned payload i.e. saveDepartment() {return {type:ADD_DEPARTMENT, payload:department}}
  // here action is {type:ADD_DEPARTMENT, payload:department} object
  yield takeLatest("ADD_DEPARTMENT", saveDepartmentSuccess);
}

//6.function for dispatching output action for UPDATE action
function* updateDepartmentSuccess(action) {
  const updatedData = action.payload;
  console.log(`Data received for updating is = ${JSON.stringify(updatedData)}`);
  const resp = yield call(updateDepartment, updatedData);
  yield put({
    type: "UPDATE_DEPARTMENT_SUCCESS",
    department: resp,
  });
}

//5.function for handling Update department action
function* listenToUpdateDepartmentDispatchAction() {
  yield takeLatest("UPDATE_DEPARTMENT", updateDepartmentSuccess);
}

//8. function for dispatching output action for DELETE action
function* deleteDepartmentSuccess(action) {
  const deleteData = action.payload;
  console.log(`data deleted is= ${JSON.stringify(deleteData)}`);
  const resp = yield call(deleteDepartment, deleteData);
  yield put({
    type: "DELETE_DEPARTMENT_SUCCESS",
    department: resp,
  });
}
//7.function for handling Delete action
function* listenToDeleteDepartmentDispatchAction() {
  yield takeLatest("DELETE_DEPARTMENT", deleteDepartmentSuccess);
}

// last step
// create a root saga object that will combine all
// request and response saga generators. This root saga
// object will be loaded on store at application level
// so that dispatched actions will be listed

export default function* rootSaga() {
  console.log("1. Root Saga is initialized");
  yield all([
    listenToGetDepartmentsDispatchedAction(),
    listenToAddDepartmentDispatchAction(),
    listenToUpdateDepartmentDispatchAction(),
    listenToDeleteDepartmentDispatchAction(),
  ]);
}
