// {
//     id: "101", name: "Yashi", deptId: "304", des: "Intern", salary: "10000"
// }

const deptMap = new Map();

deptMap.set(301, {
  id: 301,
  name: "Digital Services",
  maxCapacity: 2,
  currentEmployees: [],
});
deptMap.set(302, {
  id: 302,
  name: "CMS",
  maxCapacity: 2,
  currentEmployees: [],
});
deptMap.set(303, {
  id: 303,
  name: "DAI",
  maxCapacity: 5,
  currentEmployees: [],
});
deptMap.set(304, {
  id: 304,
  name: "Marketing",
  maxCapacity: 2,
  currentEmployees: [],
});
const EmpMap = new Map();
class Employees {
  constructor(emp) {
    this.id = emp.id;
    this.name = emp.name;
    this.desg = emp.desg;
    this.salary = emp.salary;
    this.deptId = emp.deptId;
    this.location = emp.location;
  }

  static #allEmployees = [];

  addEmployee() {
    const { id, deptId } = this;
    if (this.#validate()) {
      Employees.#allEmployees.push(id);
      EmpMap.set(id, this);
      const dept = deptMap.get(deptId);
      dept.currentEmployees.push(id);
      deptMap.set(deptId, dept);
    }
  }

  static getAllEmployees(condition, value) {
    let filterEmp = [];
    console.log("condition :>> ", condition, "for value:>>", value);
    switch (condition) {
      case "department":
        const dept = deptMap.get(value);
        dept.currentEmployees.forEach((id) => {
          filterEmp.push(EmpMap.get(id));
        });
        break;
      case "location":
        Employees.#allEmployees.forEach((id) => {
          const emp = EmpMap.get(id);
          if (emp.location.toLowerCase() == value.toLowerCase())
            filterEmp.push(emp);
        });
        break;
      case "desg":
        Employees.#allEmployees.forEach((id) => {
          const emp = EmpMap.get(id);
          if (emp.desg.toLowerCase() == value.toLowerCase())
            filterEmp.push(emp);
        });
        break;
      case "eName":
        Employees.#allEmployees.forEach((id) => {
          const emp = EmpMap.get(id);
          if (emp.name.toLowerCase() == value.toLowerCase())
            filterEmp.push(emp);
        });
        break;
      case "d&d":
        const department = deptMap.get(value.dept);
        department.currentEmployees.forEach((id) => {
          const employee = EmpMap.get(id);
          if (employee.desg.toLowerCase() == value.desg.toLowerCase())
            filterEmp.push(employee);
        });
        break;
      default:
        Employees.#allEmployees.forEach((id) => {
          filterEmp.push(EmpMap.get(id));
        });
    }
    return filterEmp;
  }

  static getMaxSalInDept(deptId) {
    const department = deptMap.get(deptId);
    let maxSalary = 0;
    let maxId;
    department.currentEmployees.forEach((empId) => {
      const employee = EmpMap.get(empId);
      if (employee.salary > maxSalary) {
        maxSalary = employee.salary;
        maxId = empId;
      }
    });
    return { maxSalary, maxId };
  }

  updateEmployee(newDetails) {
    const emp = { ...this, ...newDetails };
    this.id = emp.id;
    this.name = emp.name;
    this.desg = emp.desg;
    this.salary = emp.salary;
    this.location = emp.location;

    // EmpMap.set(this.id, this);
  }

  deleteEmployee() {
    const { id, deptId } = this;

    EmpMap.delete(id);

    const dept = deptMap.get(deptId);
    dept.currentEmployees = idFilter(dept.currentEmployees, id);

    deptMap.set(deptId, dept);
    Employees.#allEmployees = idFilter(Employees.#allEmployees, id);
  }

  #validate() {
    const { id, name, salary, deptId } = this;
    //check for -ve Employee number and -ve salary
    if (parseInt(id) < 0 || parseInt(salary) < 0) {
      console.log("\nError :cannot be less than 0\n");
      return false;
    }
    //check for unique id
    //empObj contains key of EmpMap i.e. 101,102,so on
    for (let key of EmpMap.keys()) {
      if (key == id) {
        console.log("\nError :use a uniques employee number\n");
        return false;
      }
    }
    //check for Capital Letter for 1st character of name
    let regexp = /^[A-Z]/;
    if (!regexp.test(name)) {
      console.log("\nError :First letter of name should be Capital\n");
      return false;
    }
    //check for department capacity
    let check = this.capacityCheck(deptId);
    if (!check) {
      console.log("\nError :Capacity reached\n");
      return false;
    }

    //if everything is correct
    return true;
  }

  capacityCheck(deptId) {
    const { maxCapacity, currentEmployees } = deptMap.get(deptId);
    if (maxCapacity == currentEmployees.length) return false;
    return true;
  }
}
function idFilter(inputArray, removeId) {
  return inputArray.filter(function (id) {
    return removeId !== id;
  });
}

let emp1 = new Employees({
  id: 101,
  name: "Yashi",
  desg: "Intern",
  salary: 10000,
  deptId: 302,
  location: "India",
});
let emp2 = new Employees({
  id: 102,
  name: "Yashi2",
  desg: "manager",
  salary: 10000,
  deptId: 302,
  location: "New Zealand",
});
let emp3 = new Employees({
  id: 103,
  name: "Yashi3",
  desg: "Intern",
  salary: 10000,
  deptId: 301,
  location: "india",
});
let emp4 = new Employees({
  id: 103,
  name: "Yashi3",
  desg: "Intern",
  salary: 10000,
  deptId: 301,
});
let emp5 = new Employees({
  id: 104,
  name: "Yashi3",
  desg: "Intern",
  salary: -10000,
  deptId: 301,
});
let emp6 = new Employees({
  id: 105,
  name: "yashi3",
  desg: "Intern",
  salary: 10000,
  deptId: 301,
});
let emp7 = new Employees({
  id: 106,
  name: "Yashi3",
  desg: "manager",
  salary: 50000,
  deptId: 301,
  location: "New Zealand",
});
let emp8 = new Employees({
  id: 107,
  name: "Yashi3",
  desg: "Intern",
  salary: 10000,
  deptId: 301,
  location: "India",
});

emp1.addEmployee();
emp2.addEmployee();
emp3.addEmployee();
emp4.addEmployee();
emp5.addEmployee();
emp6.addEmployee();
emp7.addEmployee();
emp8.addEmployee();

emp2.updateEmployee({ name: "Tanmay" });
// emp3.deleteEmployee();
// const employeeList = Employees.getAllEmployees();

//console.log("deptMap :>> ", deptMap);
// console.log("EmpMap :>> ", EmpMap);
// console.log("employeeList :>> ", employeeList);
console.log("department", Employees.getAllEmployees("department", 301));
console.log("location", Employees.getAllEmployees("location", "India"));
console.log("desg", Employees.getAllEmployees("desg", "intern"));
console.log("eName", Employees.getAllEmployees("eName", "yashi3"));
console.log(
  "eName",
  Employees.getAllEmployees("d&d", { dept: 301, desg: "intern" })
);
// console.log(Employees.getAllEmployees("department", 301));
console.log("max salary and employee", Employees.getMaxSalInDept(301));
