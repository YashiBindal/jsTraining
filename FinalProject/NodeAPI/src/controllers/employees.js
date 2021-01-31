const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

// define a database connection information
const sequelize = new Sequelize("Company", "root", "y@Shi144", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
});

const emp = require(path.join(__dirname, "../models/employee"))(
  sequelize,
  DataTypes
);

const dept = require(path.join(__dirname, "../models/department"))(
  sequelize,
  DataTypes
);

// read
const getEmployees = async (req, resp) => {
  sequelize
    .sync({
      force: false,
    })
    .then(
      () => emp.findAll() // select all records from Department table
    )
    .then((data) => {
      resp.json({
        status: 200,
        rowsCount: data.length,
        response: data,
      });

      resp.end();
    })
    .catch((error) => {
      resp.status(500).send(error.message);
    });
};

// read
const getEmployee = async (req, resp) => {
  const id = parseInt(req.params.id);
  sequelize
    .sync({
      force: false, // default is true to create a table
    })
    .then(() =>
      emp.findOne({
        where: { EmpNo: id },
      })
    )
    .then((data) => {
      resp.json({ status: 200, response: data });
      resp.end();
    })
    .catch((error) =>
      resp.send({ status: 500, response: error.errors[0].message })
    );
};

// create
const createEmployee = async (req, resp) => {
  // create a JS object that has same schema like Department model
  const newEmp = {
    EmpNo: req.body.EmpNo,
    EmpName: req.body.EmpName,
    Designation: req.body.Designation,
    Salary: req.body.Salary,
    DeptNo: req.body.DeptNo,
  };
  console.log("newEmp", newEmp);
  sequelize
    .sync({ force: false })
    .then(() =>
      dept.findOne({
        where: { DeptNo: newEmp.DeptNo },
      })
    )
    .then((data) =>
      // create a record and return the committed record from database to API
      {
        console.log("data to check emp", data);
        if (data) return emp.create(newEmp);
        else
          resp.status(400).json({
            status: 400,
            response: "DeptNo not found, check departments first",
          });
      }
    )
    .then((data) => {
      resp.json({ status: 200, response: data });
      console.log("data", data);
      resp.end();
    })
    .catch((error) =>
      resp.send({ status: 500, response: error.errors[0].message })
    );
};

// update
const updateEmployee = async (req, resp) => {
  // read the id from the URL parameter
  const { id } = req.params;
  const { EmpName, Designation, Salary, DeptNo } = req.body;
  const newEmp = {
    EmpName,
    Designation,
    Salary,
    DeptNo,
  };
  sequelize
    .sync({ force: false })
    .then(() =>
      // logic for the update
      emp.update(newEmp, { where: { EmpNo: id } })
    )
    .then((data) => {
      if (data[0]) resp.json({ status: 200, response: newEmp });
      else resp.status(400).json({ status: 400, response: "Id not found" });
      resp.end();
    })
    .catch((error) =>
      resp.send({ status: 500, response: error.errors[0].message })
    );
};

// delete
const deleteEmployee = async (req, resp) => {
  const { id } = req.params;
  sequelize
    .sync({
      force: false, // default is true to create a table
    })
    .then(() => emp.destroy({ where: { EmpNo: id } }))
    .then((data) => {
      if (data) resp.json({ status: 200, response: "deleted successfully" });
      else resp.status(400).json({ status: 400, response: "Id not found" });
      resp.end();
    })
    .catch((error) =>
      resp.send({ status: 500, response: error.errors[0].message })
    );
};

const employees = {
  getEmployee,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};

// module.exports = employees;
module.exports.emp = employees;
module.exports.default = employees;
