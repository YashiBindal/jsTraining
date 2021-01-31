const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const authRouts = require("./routes");
const { userAuth } = require("./controllers/userAuth");

const instance = express();
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(bodyParser.json());
instance.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
  })
);

instance.post("/signup", userAuth.createUser);
instance.post("/login", userAuth.verifyUser);

instance.use("/api", authRouts);
// start listening
instance.listen(9090, () => {
  console.log("REST API is listening on port 9090");
});

/* 
  //for tax calculation
  instance.get("/api/tax", (req, resp) => {
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
 */

/*  
// get all Employees in a department
instance.get("/api/employeesInDept/:id", (req, resp) => {
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
        statusCode: 200,
        rowsCount: data.length,
        response: data,
      });

      resp.end();
    })
    .catch((error) => {
      resp.status(500).send(error.message);
    });
}); */
