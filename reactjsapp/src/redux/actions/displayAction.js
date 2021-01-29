const displayEmployee = (currentEmp) => {
  //   emp.EmpName = emp.EmpName.toUpperCase();
  console.log(
    `In an showEmployee action creator ${JSON.stringify(currentEmp)}`
  );
  return {
    type: "SHOW_EMPLOYEE", // the output action
    currentEmp, // the data of the output action
  };
};
export default displayEmployee;
