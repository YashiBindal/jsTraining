import { call, put, takeLatest } from "redux-saga/effects";
import { createDept, deleteDept, getDepts, updateDept } from "services";

function getDepartments() {
  const response = getDepts().then((res) => {
    if (res.status === 200) {
      return {
        payload: res,
        type: "GET_DEPARTMENTS_SUCCESS",
      };
    }

    return {
      type: "GET_DEPARTMENTS_FAIL",
      payload: res,
    };
  });

  console.log(`In getDepartments ${response}`);
  return response;
}

function saveDepartment(dept) {
  const response = createDept(dept).then((res) => {
    if (res.status === 200) {
      return {
        payload: res,
        type: "ADD_DEPARTMENT_SUCCESS",
      };
    }

    return {
      type: "ADD_DEPARTMENT_FAIL",
      payload: res,
    };
  });

  console.log(`In addDepartments ${response}`);
  return response;
}

function updateDepartment(dept) {
  const response = updateDept(dept).then((res) => {
    if (res.status === 200) {
      return {
        payload: res,
        type: "UPDATE_DEPARTMENT_SUCCESS",
      };
    }

    return {
      type: "UPDATE_DEPARTMENT_FAIL",
      payload: res,
    };
  });

  console.log("response form updateDepartment function", response);
  return response;
}

function deleteDepartment(deptNo) {
  const response = deleteDept(deptNo).then((res) => {
    if (res.status === 200) {
      return {
        payload: res,
        type: "DELETE_DEPARTMENT_SUCCESS",
      };
    }

    return {
      type: "DELETE_DEPARTMENT_FAIL",
      payload: res,
    };
  });

  console.log('("response from delete function`")', response);
  return response;
}

// ------------------------------------------------------------------//

function* fetchDepartmentsGenerator() {
  console.log("Processing the GET_DEPARTMENTS and waiting for Response");
  const response = yield call(getDepartments);
  console.log(`After the yield call response \n ${response}`);
  yield put(response);
}

function* saveDepartmentSuccess(action) {
  const postedData = action.payload;
  console.log(
    `Data Received from UI for posting = ${JSON.stringify(postedData)}`
  );

  const response = yield call(saveDepartment, postedData);

  yield put(response);
}

function* updateDepartmentSuccess(action) {
  const updatedData = action.payload;
  console.log(`Data received for updating is = ${JSON.stringify(updatedData)}`);
  const response = yield call(updateDepartment, updatedData);

  yield put(response);
}

function* deleteDepartmentSuccess(action) {
  const deleteData = action.payload;
  console.log(`data deleted is= ${JSON.stringify(deleteData)}`);
  const response = yield call(deleteDepartment, deleteData);

  yield put(response);
}

// ----------------------------------------------------------  //

export function* listenToAddDepartment() {
  yield takeLatest("ADD_DEPARTMENT", saveDepartmentSuccess);
}

export function* listenToDeleteDepartment() {
  yield takeLatest("DELETE_DEPARTMENT", deleteDepartmentSuccess);
}

export function* listenToUpdateDepartment() {
  yield takeLatest("UPDATE_DEPARTMENT", updateDepartmentSuccess);
}

export function* listenToGetDepartments() {
  console.log("Listening to GET_DEPARTMENTS Action");
  yield takeLatest("GET_DEPARTMENTS", fetchDepartmentsGenerator);
}
