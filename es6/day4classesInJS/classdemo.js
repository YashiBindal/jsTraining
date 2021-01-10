console.log("connected to html");

class MyClass {
  constructor() {
    this.EmpMap = new Map();
    this.DeptMap = new Map();
    this.counterD1 = 0;
    this.counterD2 = 0;
    this.counterD3 = 0;
    this.counterD4 = 0;
  }

  addDepartment(deptNo, deptName, deptLocation, deptCapacity) {
    let key = deptNo;
    let deptObj = {
      dNo: deptNo,
      dName: deptName,
      dLocation: deptLocation,
      dCapacity: deptCapacity,
    };
    this.DeptMap.set(key, deptObj);
  }

  addEmp(empNo, empName, empDeptNo, empDsg, empSal) {
    if (this.#validate(empNo, empName, empDeptNo, empSal)) {
      let key = empNo;
      let empObj = {
        eNo: empNo,
        eName: empName,
        eDept: empDeptNo,
        eDsg: empDsg,
        eSal: empSal,
      };
      this.EmpMap.set(key, empObj);
      this.incrementCounter(empDeptNo);
    }
  }

  incrementCounter(deptId) {
    // console.log("deptid :>> ", deptid);
    //console.log("this :>> ", this);
    if (deptId == "301") {
      this.counterD1++;
    }
    if (deptId == "302") {
      this.counterD2++;
    }
    if (deptId == "303") {
      this.counterD3++;
    }
    if (deptId == "304") {
      this.counterD4++;
    }
  }

  //validate function
  #validate(eNo, eName, eDept, eSal) {
    //check for -ve Employee number and -ve salary
    if (parseInt(eNo) < 0 || parseInt(eSal) < 0) {
      console.log("cannot be less than 0");
      return false;
    }
    //check for unique id
    //empObj contains key of EmpMap i.e. 101,102,so on
    for (let empObj of this.EmpMap.keys()) {
      if (empObj == eNo) {
        console.log("use a uniques employee number");
        return false;
      }
    }
    //check for Capital Letter for 1st character of name
    let regexp = /^[A-Z]/;
    if (!regexp.test(eName)) {
      console.log("First letter of name should be Capital");
      return false;
    }
    //check for department capacity
    let check = this.capacityCheck(eDept);
    if (!check) {
      console.log("Capacity reached");
      return false;
    }

    //if everything is correct
    return true;
  }

  capacityCheck(deptNo) {
    if (deptNo == "301" && this.counterD1 == 10) return false;
    else if (deptNo == "302" && this.counterD2 == 6) return false;
    else if (deptNo == "303" && this.counterD3 == 4) return false;
    else if (deptNo == "304" && this.counterD4 == 2) return false;
    else return true;
  }
}

let obj = new MyClass();
obj.addDepartment("301", "Digital Services", "India", "10");
obj.addDepartment("302", "Cloud Managed Services", "Singapore", "6");
obj.addDepartment("303", "DAI", "Australia", "4");
obj.addDepartment("304", "Marketing", "Canada", "2");
// console.log("DeptMap of class:>> ", obj.DeptMap);
// console.log("obj :>> ", obj);

obj.addEmp("101", "Yashi", "304", "Intern", "10000");
console.log("obj.counterD4   :>> ", obj.counterD4);
// console.log("EmpMap of class:>> ", obj.EmpMap);
obj.addEmp("-1", "Jay", "304", "Intern", "10000");
// console.log("EmpMap of class:>> ", obj.EmpMap);
obj.addEmp("102", "Priyanshu", "304", "Intern", "10000");
console.log("obj.counterD4 :>> ", obj.counterD4);
obj.addEmp("101", "Farhan", "303", "Intern", "10000");
// console.log("EmpMap of class:>> ", obj.EmpMap);
obj.addEmp("104", "Kshitij", "304", "Intern", "10000");
obj.addEmp("105", "anushri", "304", "Intern", "10000");
console.log("obj.counterD4 :>> ", obj.counterD4);
console.log("EmpMap of class:>> ", obj.EmpMap);
