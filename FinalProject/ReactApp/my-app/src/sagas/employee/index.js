import { call, put, takeLatest } from "redux-saga/effects";
import { getEmps, createEmp, updateEmp, deleteEmp } from "services";

function getEmployees() {
  const response = getEmps().then((res) => {
    if (res.status === 200) {
      return {
        payload: res,
        type: "GET_EMPLOYEES_SUCCESS",
      };
    }

    return {
      type: "GET_EMPLOYEES_FAIL",
      payload: res,
    };
  });

  console.log(`In getEmployees ${response}`);
  return response;
}

function saveEmployee(emp) {
  const response = createEmp(emp).then((res) => {
    console.log("res", res);

    if (res.status === 200) {
      return {
        payload: res,
        type: "ADD_EMPLOYEE_SUCCESS",
      };
    }

    return {
      type: "ADD_EMPLOYEE_FAIL",
      payload: res,
    };
  });

  console.log(`In addEmployee ${response}`);
  return response;
}

function updateEmployee(emp) {
  const response = updateEmp(emp).then((res) => {
    if (res.status === 200) {
      return {
        payload: res,
        type: "UPDATE_EMPLOYEE_SUCCESS",
      };
    }

    return {
      type: "UPDATE_EMPLOYEE_FAIL",
      payload: res,
    };
  });

  console.log("response form updateEmployee function", response);
  return response;
}

function deleteEmployee(empNo) {
  const response = deleteEmp(empNo).then((res) => {
    if (res.status === 200) {
      return {
        payload: { res, empNo },
        type: "DELETE_EMPLOYEE_SUCCESS",
      };
    }

    return {
      type: "DELETE_EMPLOYEE_FAIL",
      payload: res,
    };
  });

  console.log('("response from delete employee function`")', response);
  return response;
}

// ------------------------------------------------------------------//

function* fetchEmployeesGenerator() {
  console.log("Processing the GET_EMPLOYEES and waiting for Response");

  const response = yield call(getEmployees);

  console.log(`After the yield call response \n ${response}`);

  yield put(response);
}

function* saveEmployeeSuccess(action) {
  const postedData = action.payload;
  console.log(
    `Data Received from UI for posting = ${JSON.stringify(postedData)}`
  );

  const response = yield call(saveEmployee, postedData);

  yield put(response);
}

function* updateEmployeeSuccess(action) {
  const updatedData = action.payload;
  console.log(`Data received for updating is = ${JSON.stringify(updatedData)}`);
  const response = yield call(updateEmployee, updatedData);
  yield put(response);
}

function* deleteEmployeeSuccess(action) {
  const deleteData = action.payload;
  console.log(`data deleted is= ${JSON.stringify(deleteData)}`);
  const response = yield call(deleteEmployee, deleteData);
  yield put(response);
}

// ----------------------------------------------------------  //

export function* listenToAddEmployee() {
  yield takeLatest("ADD_EMPLOYEE", saveEmployeeSuccess);
}

export function* listenToDeleteEmployee() {
  yield takeLatest("DELETE_EMPLOYEE", deleteEmployeeSuccess);
}

export function* listenToUpdateEmployee() {
  yield takeLatest("UPDATE_EMPLOYEE", updateEmployeeSuccess);
}

export function* listenToGetEmployees() {
  console.log("Listening to GET_EMPLOYEES Action");
  yield takeLatest("GET_EMPLOYEES", fetchEmployeesGenerator);
}
