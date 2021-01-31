// read action
export const getEmployees = () => {
  console.log("get Employees accessed");
  return {
    type: "GET_EMPLOYEES",
  };
};

// write
export const saveEmployee = (employee) => {
  console.log("employee in saveEmployee action", employee);
  return {
    type: "ADD_EMPLOYEE",
    payload: employee,
  };
};

export const updateEmployee = (employee) => {
  console.log("employee in update dept", employee.DeptNo);
  return {
    type: "UPDATE_EMPLOYEE",
    payload: employee,
  };
};

export const deleteEmployee = (empNo) => {
  let id = empNo;
  console.log("Id", id);
  return {
    type: "DELETE_EMPLOYEE",
    payload: id,
  };
};
export const setLoadingState = (loadingState) => {
  return {
    type: "SET_LOADING_STATE",
    payload: loadingState,
  };
};
export const setEditState = (editState) => {
  return {
    type: "SET_EDIT_STATE",
    payload: editState,
  };
};
export const setEditEmployee = (emp) => {
  return {
    type: "SET_EDIT_EMPLOYEE",
    payload: emp,
  };
};
