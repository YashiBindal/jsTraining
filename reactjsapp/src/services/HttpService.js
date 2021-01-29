import axios from "axios";

export class HttpService {
  constructor() {
    this.url = "http://localhost:9090";
  }

  //---------------CRUD for department---------------------------

  getDeptData() {
    let response = axios.get(`${this.url}/api/departments`);
    console.log("response", response);
    return response;
  }

  // getting single record based on id
  getDeptDataById(id) {
    let response = axios.get(`${this.url}/api/department/${id}`);
    return response;
  }
  postDeptData(dept) {
    let response = axios.post(`${this.url}/api/departments`, dept, {
      //  @ts-ignore
      "Content-Type": "application/json",
    });
    return response;
  }

  putDeptData(dept) {
    let response = axios.put(
      `${this.url}/api/departments/${dept.DeptNo}`,
      dept,
      {
        // @ts-ignore
        "Content-Type": "application/json",
      }
    );
    return response;
  }

  deleteDeptData(id) {
    let response = axios.delete(`${this.url}/api/departments/${id}`);
    return response;
  }

  //----------------------CRUD for Employees-------------------------------------

  getEmpData() {
    let response = axios.get(`${this.url}/api/employees`);
    return response;
  }

  // getting single record based on id
  getEmpDataById(id) {
    let response = axios.get(`${this.url}/api/employee/${id}`);
    return response;
  }
  postEmpData(emp) {
    let response = axios.post(`${this.url}/api/employees`, emp, {
      //  @ts-ignore
      "Content-Type": "application/json",
    });
    return response;
  }

  putEmpData(emp) {
    let response = axios.put(`${this.url}/api/departments/${emp.EmpNo}`, emp, {
      // @ts-ignore
      "Content-Type": "application/json",
    });
    return response;
  }

  deleteEmpData(id) {
    let response = axios.delete(`${this.url}/api/employees/${id}`);
    return response;
  }
}
