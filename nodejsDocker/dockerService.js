let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let instance = express();
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(bodyParser.json());
//CORS for communication with external domain api
instance.use(
  cors({
    origin: "*", // all origins
    methods: "*", // all http methods
    allowedHeaders: "*", // all headers in HTTP request
  })
);

// sample database
let employees = {
  101: { EmpNo: 101, EmpName: "Mahesh", DeptName: "IT" },
  102: { EmpNo: 102, EmpName: "Vikram", DeptName: "HRD" },
  103: { EmpNo: 103, EmpName: "Suprotim", DeptName: "SALES" },
};

// create REST APIs

// get request
instance.get("/api/employees", (req, resp) => {
  resp.status(200).send(employees);
});

instance.get("/api/employees/:id", (req, resp) => {
  // read the URL parameter
  let EmpNo = req.params.id;
  if (!employees[parseInt(EmpNo)]) {
    resp
      .status(400)
      .send(`Error: An Employee with id ${EmpNo} does not exists`);
  }
  resp.status(200).send(employees[EmpNo]);
});

// the post request
instance.post("/api/employees", (req, resp) => {
  //destructing the request body to pull out the required properties from request body
  const { EmpNo, EmpName, DeptName } = req.body;
  if (employees[parseInt(EmpNo)]) {
    resp.status(400).send(`Error: An Employee with id ${EmpNo} already exists`);
  }

  let emp = {
    EmpNo,
    EmpName,
    DeptName,
  };
  console.log(JSON.stringify(emp));

  employees[EmpNo] = emp;
  // send the response (success or fail)
  resp.status(200).send(employees);
});

// the put request

instance.put("/api/employees", (req, resp) => {
  // read the id from header
  // let id = req.params.id;

  // check if the id matches with EmpNo from request body
  const { EmpNo, EmpName, DeptName } = req.body;
  if (!employees[parseInt(EmpNo)]) {
    resp
      .status(400)
      .send(`Error: An Employee with id ${EmpNo} does not exists`);
  }
  let emp = {
    EmpNo,
    EmpName,
    DeptName,
  };
  console.log(JSON.stringify(emp));

  employees[EmpNo] = emp;
  // send the response (success or fail)
  resp.status(200).send(employees);
});

// the delete request

instance.delete("/api/employees/:id", (req, resp) => {
  // read the id from header
  let EmpNo = parseInt(req.params.id);
  // check record from employees object
  if (!employees[EmpNo]) {
    resp
      .status(400)
      .send(`Error: An Employee with id ${EmpNo} does not exists`);
  }
  // if found, then delete
  delete employees[EmpNo];
  resp
    .status(200)
    .send(`Employee with id no ${EmpNo} was deleted successfully`);
});

instance.listen(9093, () => {
  console.log("REST API is listening on port 9093");
});
