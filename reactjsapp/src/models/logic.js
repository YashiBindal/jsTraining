export class Logic {
  constructor() {
    this.employees = [
      {
        EmpNo: 101,
        EmpName: "Akash",
        DeptName: "IT",
        Designation: "Manager",
        Salary: 10000,
      },
      {
        EmpNo: 102,
        EmpName: "Mukesh",
        DeptName: "HRD",
        Designation: "Lead",
        Salary: 12000,
      },
      {
        EmpNo: 103,
        EmpName: "Abhay",
        DeptName: "SALES",
        Designation: "Manager",
        Salary: 30000,
      },
      {
        EmpNo: 104,
        EmpName: "Nandu",
        DeptName: "TRAINING",
        Designation: "Trainer",
        Salary: 17000,
      },
    ];
  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(emp) {
    this.employees.push(emp);
    return this.employees;
  }
}
