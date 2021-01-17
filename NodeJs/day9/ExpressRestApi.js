let express = require("express");
let atob = require("atob");
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
  let authValues = req.headers.authorization;
  let credValues = authValues.split(" ");
  console.log(credValues[0] + "   " + credValues[1]);
  //   console.log(credValues[1]);
  let authArr = atob(credValues[1]).split(":");
  console.log(authArr);
  let userName = authArr[0];
  let password = authArr[1];
  //   console.log(userName + "   " + password);

  //   check for authorization
  if (userName.trim() === "yashi" && password.trim() === "passWord") {
    // resp.status(200).send(Array.from(Object.values(employees)));
    resp.status(200).send(employees);
  }
  // if no match then send unAuthorized response
  else {
    resp.status(401).send(`Sorry !!! Credentials are not matched`);
  }
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
  // the EXPRESS.JS cannot by default parse the body
  // read the posted data from the client
  //destructing the request body to pull out the required properties from request body
  const { EmpNo, EmpName, DeptName } = req.body;
  if (employees[parseInt(EmpNo)]) {
    resp.status(400).send(`Error: An Employee with id ${EmpNo} already exists`);
  }
  // create an emp object
  //since the name of key and variable created from req.body are same
  // we can create the object in the below manner
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

instance.listen(9090, () => {
  console.log("REST API is listening on port 9090");
});
