let client = require("./qLib");

//server information for Azure Hosted REST API

let serverOptionsGet = {
  host: "apiapptrainingnewapp.azurewebsites.net",
  path: "/api/Products",
  method: "GET",
};

//server information for post
let serverOptionsPost = {
  host: "apiapptrainingnewapp.azurewebsites.net",
  path: "/api/Products",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
// if connecting the External API on localhost

let serverOptionsLocal = {
  host: "localhost",
  path: "/api/Products",
  method: "GET",
  port: 6060,
};

// call the method from module
// initiate  Async operations
client
  .getData(serverOptionsGet)
  .then((receivedData) => {
    console.log(JSON.stringify(receivedData));
  })
  .catch((error) => {
    console.log(`Error Occured ${error}`);
  });

let products = {
  ProductId: "P-1002",
  ProductName: "laptop",
  CategoryName: "Electronics",
  Manufacturer: "Asus",
  Description: "high end laptop",
  BasePrice: "80000",
};

products = JSON.stringify(products);

client
  .postData(serverOptionsPost, products)
  .then((receivedData) => {
    console.log(JSON.stringify(receivedData));
  })
  .catch((error) => {
    console.log(`Error Occured ${error}`);
  });
