// read action
export const getDepartments = () => {
  console.log("get departments accessed");
  return {
    type: "GET_DEPARTMENTS",
  };
};

// write
export const saveDepartment = (department) => {
  return {
    type: "ADD_DEPARTMENT",
    payload: department,
  };
};

export const updateDepartment = (department) => {
  console.log("dept in update dept", department.DeptNo);
  return {
    type: "UPDATE_DEPARTMENT",
    payload: department,
  };
};

export const deleteDepartment = (deptNo) => {
  let id = deptNo.DeptNo;
  console.log("Id", id);
  return {
    type: "DELETE_DEPARTMENT",
    payload: id,
  };
};
