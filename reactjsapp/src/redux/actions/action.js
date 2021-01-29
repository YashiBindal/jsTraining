const addEmployee = (employee) => {
  // some synchronous logic here
  employee.EmpName = employee.EmpName.toUpperCase();
  // console.log(`In an addEmployee action creator ${JSON.stringify(employee)}`);
  return {
    type: "ADD_EMPLOYEE", // the output action
    employee, // the data of the output action
  };
};

export default addEmployee;
