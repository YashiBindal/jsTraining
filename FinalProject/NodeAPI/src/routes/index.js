const express = require("express");
const { auth } = require("../controllers/auth");
const { emp } = require("../controllers/employees");
const { dept } = require("../controllers/departments");

const router = express.Router();
router.use(auth);

// get employees
router.get("/employees", emp.getEmployees);

// get employee
router.get("/employee/:id", emp.getEmployee);

// create employee
router.post("/employee", emp.createEmployee);

// update employee
router.put("/employee/:id", emp.updateEmployee);

// delete employee
router.delete("/employee/:id", emp.deleteEmployee);

//CRUD on department table

// get departments
router.get("/departments", dept.getDepartments);

// get department
router.get("/department/:id", dept.getDepartment);

// create department
router.post("/department", dept.createDepartment);

// update department
router.put("/department/:id", dept.updateDepartment);

// delete department
router.delete("/department/:id", dept.deleteDepartment);

module.exports = router;
