// @ts-nocheck
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let path = require("path");

// load the sequelize modules

const { Sequelize, DataTypes, Model } = require("sequelize");

let instance = express();
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(bodyParser.json());
instance.use(
  cors({
    origin: "*", // all origins
    methods: "*", // all http methods
    allowedHeaders: "*", // all headers in HTTP request
  })
);

// define a database connection information
const sequelize = new Sequelize("Company", "root", "y@Shi144", {
  host: "localhost", // database hosting machine-name / ip address / localhost
  dialect: "mysql", // the database provider engine / service
  pool: {
    max: 5, // max 5 connection object for the current application
    min: 0, // default is no connection , it has to be requested
    idle: 10000, // connection idle time in milliseconds for timeout to wait for connection object
  },
  define: {
    timestamps: false, // suppress the timestamp i.e. used for concurrency
  },
});

const dept = require(path.join(__dirname, "./models/department.js"))(
  sequelize,
  Sequelize.DataTypes
);
const emp = require(path.join(__dirname, "./models/employee.js"))(
  sequelize,
  Sequelize.DataTypes
);

// get request
instance.get("/api/departments", (req, resp) => {
  sequelize
    .sync({
      force: false,
    })
    .then(
      () => dept.findAll() // select all records from Department table
    )
    .then((data) => {
      resp.json({
        statusCode: 200,
        rowsCount: data.length,
        response: data,
      });

      resp.end();
    })
    .catch((error) => {
      resp.status(500).send(error.message);
    });
});
instance.get("/api/employees", (req, resp) => {
  sequelize
    .sync({
      force: false,
    })
    .then(
      () => emp.findAll() // select all records from Department table
    )
    .then((data) => {
      resp.json({
        statusCode: 200,
        rowsCount: data.length,
        response: data,
      });

      resp.end();
    })
    .catch((error) => {
      resp.status(500).send(error.message);
    });
});

instance.get("/api/department/:id", (req, resp) => {
  let id = parseInt(req.params.id);
  sequelize
    .sync({
      force: false, // default is true to create a table
    })
    .then(() =>
      dept.findOne({
        where: { DeptNo: id },
      })
    )
    .then((data) => {
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});
instance.get("/api/employee/:id", (req, resp) => {
  let id = parseInt(req.params.id);
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
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});

// the post request
instance.post("/api/departments", (req, resp) => {
  // create a JS object that has same schema like Department model
  let newDept = {
    DeptNo: req.body.DeptNo,
    DeptName: req.body.DeptName,
    Location: req.body.Location,
    Capacity: req.body.Capacity,
  };

  sequelize
    .sync({ force: false })
    .then(() =>
      // create a record and return the committed record from database to API
      {
        return dept.create(newDept);
      }
    )
    .then((data) => {
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});
instance.post("/api/employees", (req, resp) => {
  // create a JS object that has same schema like Department model
  let newEmp = {
    EmpNo: req.body.EmpNo,
    EmpName: req.body.EmpName,
    Designation: req.body.Designation,
    Salary: req.body.Salary,
    DeptNo: req.body.DeptNo,
  };

  sequelize
    .sync({ force: false })
    .then(() =>
      // create a record and return the committed record from database to API
      {
        return emp.create(newEmp);
      }
    )
    .then((data) => {
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});
// update
instance.put("/api/departments/:id", (req, resp) => {
  // read the id from the URL parameter
  let id = req.params.id;
  sequelize
    .sync({ force: false })
    .then(() =>
      // logic for the update
      dept.update(
        {
          DeptName: req.body.DeptName,
          Location: req.body.Location,
          Capacity: req.body.Capacity,
        },
        { where: { DeptNo: id } }
      )
    )
    .then((data) => {
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});
instance.put("/api/employees/:id", (req, resp) => {
  // read the id from the URL parameter
  let id = req.params.id;
  sequelize
    .sync({ force: false })
    .then(() =>
      // logic for the update
      emp.update(
        {
          EmpName: req.body.EmpName,
          Designation: req.body.Designation,
          Salary: req.body.Salary,
          DeptNo: req.body.DeptNo,
        },
        { where: { EmpNo: id } }
      )
    )
    .then((data) => {
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});

// delete
instance.delete("/api/departments/:id", (req, resp) => {
  let id = parseInt(req.params.id);
  sequelize
    .sync({
      force: false, // default is true to create a table
    })
    .then(() => dept.destroy({ where: { DeptNo: id } }))
    .then((data) => {
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});
instance.delete("/api/employees/:id", (req, resp) => {
  let id = parseInt(req.params.id);
  sequelize
    .sync({
      force: false, // default is true to create a table
    })
    .then(() => emp.destroy({ where: { EmpNo: id } }))
    .then((data) => {
      resp.json({ statusCode: 200, data: data });
      resp.end();
    })
    .catch((error) => resp.send({ statusCode: 500, data: error }));
});

const { QueryTypes } = require("sequelize");
const e = require("express");
// get all Employees in a department
instance.get("/api/employeesInDept/:id", (req, resp) => {
  let dNo = parseInt(req.params.id);
  console.log("dNo :>> ", dNo);
  sequelize
    .sync({
      force: false,
    })
    .then(async () => {
      let empData = await sequelize.query(`CALL getEmployeesInDept(:dNo)`, {
        replacements: {
          dNo,
        },
        type: sequelize.QueryTypes.SELECT,
      });
      console.log("empData :>> ", empData);
      return empData;
    })
    .then((data) => {
      resp.json({
        statusCode: 200,
        rowsCount: data.length,
        response: data,
      });

      resp.end();
    })
    .catch((error) => {
      resp.status(500).send(error.message);
    });
});
///for tax calculation
instance.get("/api/tax", (req, resp) => {
  sequelize
    .sync({
      force: false,
    })
    .then(async () => {
      let tax = await sequelize.query(`CALL calculateTax()`, {
        type: sequelize.QueryTypes.SELECT,
      });
      console.log("empData :>> ", tax);
      return tax;
    })
    .then((data) => {
      resp.json({
        statusCode: 200,
        rowsCount: data.length,
        response: data,
      });

      resp.end();
    })
    .catch((error) => {
      resp.status(500).send(error.message);
    });
});

// start listening

instance.listen(9090, () => {
  console.log("REST API is listening on port 9090");
});
