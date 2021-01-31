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

const dept = require(path.join(__dirname, "../models/department"))(
  sequelize,
  DataTypes
);

//CRUD on department table

const getDepartments = async (req, resp) => {
  sequelize
    .sync({
      force: false,
    })
    // select all records from Department table
    .then(() => dept.findAll())
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

const getDepartment = async (req, resp) => {
  const id = parseInt(req.params.id);
  // default is true to create a table
  sequelize
    .sync({
      force: false,
    })
    .then(() =>
      dept.findOne({
        where: { DeptNo: id },
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

const createDepartment = async (req, resp) => {
  const newDept = {
    DeptNo: req.body.DeptNo,
    DeptName: req.body.DeptName,
    Location: req.body.Location,
    Capacity: req.body.Capacity,
  };

  sequelize
    .sync({ force: false })
    .then(() => {
      return dept.create(newDept);
    })
    .then((data) => {
      console.log("data", data);
      resp.json({ status: 200, response: data });
      resp.end();
    })
    .catch((error) => {
      console.log("error from server", JSON.stringify(error));
      resp.send({ status: 500, response: error.errors[0].message });
    });
};

const updateDepartment = async (req, resp) => {
  const { id } = req.params;
  const { DeptName, Location, Capacity } = req.body;

  const newDept = {
    DeptName,
    Location,
    Capacity,
  };

  sequelize
    .sync({ force: false })
    .then(() => {
      return dept.update(newDept, { where: { DeptNo: id } });
    })
    .then((data) => {
      if (data[0]) resp.json({ status: 200, response: newDept });
      else resp.status(400).json({ status: 400, response: "Id not found" });
      resp.end();
    })
    .catch((error) =>
      resp.send({
        status: 500,
        response: `${error.errors[0].message} , Update Failed`,
      })
    );
};

const deleteDepartment = async (req, resp) => {
  const { id } = req.params;

  sequelize
    .sync({
      force: false, // default is true to create a table
    })
    .then(() => dept.destroy({ where: { DeptNo: id } }))
    .then((data) => {
      console.log("data", data);

      if (data) resp.json({ status: 200, response: "Deleted Successfully" });
      else resp.status(400).json({ status: 400, response: "Id not found" });

      resp.end();
    })
    .catch((error) =>
      resp.send({ status: 500, response: error.errors[0].message })
    );
};

const department = {
  getDepartment,
  getDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};

module.exports.dept = department;
module.exports.default = department;

/* 
// get all Employees in a department

const getEmployeesByDeptId = (req, resp) => {
  const dNo = parseInt(req.params.id);
  console.log("dNo :>> ", dNo);
  sequelize
    .sync({
      force: false,
    })
    .then(async () => {
      const empData = await sequelize.query(`CALL getEmployeesInDept(:dNo)`, {
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
        status: 200,
        rowsCount: data.length,
        response: data,
      });

      resp.end();
    })
    .catch((error) => {
      resp.status(500).send(error.message);
    });
}; */

/*
//for tax calculation
 const calculateTax = (req, resp) => {
  sequelize
    .sync({
      force: false,
    })
    .then(async () => {
      const tax = await sequelize.query(`CALL calculateTax()`, {
        type: sequelize.QueryTypes.SELECT,
      });
      console.log("empData :>> ", tax);
      return tax;
    })
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
}; */
