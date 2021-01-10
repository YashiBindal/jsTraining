// //function for GET products
// function getProducts() {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     // subscribe to the responses for success and failure
//     // success
//     xhr.onload = function () {
//       // check for Http Status as 200
//       if (xhr.status == 200) {
//         console.log(`In onload ${xhr.response}`);
//         // resolve and notify the response to client / subscriber
//         resolve(xhr.response);
//       } else {
//         // reject if there is different status code
//         reject("Some Error occurred with the status code");
//       }
//     };

//     // failure
//     xhr.onerror = function () {
//       // reject if there is different status code
//       reject("Some Error Occurred with Http Communication");
//     };

//     // initiate the request
//     xhr.open(
//       "GET",
//       "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
//     );
//     // send the request
//     xhr.send();
//   });
// }

// // subscribe to the Promise object and either get Resolve or rejected//
// getProducts()
//   .then((response) => {
//     console.log(`Received Response ${response}`);
//   })
//   .catch((error) => {
//     console.log(`Received Error ${error}`);
//   });

// //function for POST data
// function postProduct(url, data) {
//   return new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();

//     request.onload = function () {
//       if (request.status == 201) {
//         resolve(request.response);
//       } else {
//         reject(new Error(request.statusText));
//       }
//     };

//     request.onerror = function () {
//       reject(new Error("May ne Network Error"));
//     };

//     request.open("POST", url); // PUT  // DELETE
//     // define the request header
//     request.setRequestHeader("Content-Type", "application/json");
//     // pass the data as JSON string
//     request.send(JSON.stringify(data));
//   });
// }

// let prdData = {
//   ProductRowId: "",
//   ProductId: "",
//   ProductName: "",
//   CategoryName: "",
//   Manufacturer: "",
//   Description: "",
//   Price: 0,
// };

let prdData = {};

//validation using proxy
const saveClickHandler = {
  set: function (target, property, value) {
    //value = document.getElementById(property).value;
    // console.log(
    //   `${property} == "ProductName" && ${value.length} > 6 :>> `,
    //   property == "ProductName" && value.length > 6
    // );
    if (property == "ProductId" && value.length < 1) {
      document.getElementById("display").innerHTML = "Must enter a product ID";
      return false;
    }
    if (property == "ProductName" && value.length > 6) {
      document.getElementById("display").innerHTML =
        "Product name cannot exceed 30 characters";
      return false;
    }
    if (property == "Price" && (isNaN(value) || parseInt(value) < 0)) {
      document.getElementById("display").innerHTML =
        "Price must be a positive Integer";
      return false;
    }
    console.log("property :>> ", property, typeof property);
    target[property] = value;
    return true;
  },
};

prdData = new Proxy(prdData, saveClickHandler);

function onClickHandler() {
  prdData.Price = document.getElementById("Price").value;
  prdData.CategoryName = document.getElementById("CategoryName").value;
  prdData.Manufacturer = document.getElementById("Manufacturer").value;
  prdData.ProductName = document.getElementById("ProductName").value;
  prdData.ProductId = getValueById("ProductId");
  prdData.ProductRowId = document.getElementById("ProductRowId").value;
  console.log(Object.values(prdData));
}

// prdData.ProductID = "123";
// console.log(prdData.ProductID);
// console.log(prdData);

//validation using promises
// function validateForm() {
//   return new Promise((resolve, reject) => {
//     if (getValueById("ProductId").length < 1) {
//       reject("Must enter Product ID ");
//     }

//     if (getValueById("ProductName").length > 30) {
//       reject("Product Name can't more than 30 character long");
//     }
//     if (isNaN(getValueById("Price"))) {
//       reject("Product Price must be a Integer");
//     }

//     resolve();
//   });
// }

// function saveClickHandler() {
//   const promise = validateForm();

//   promise
//     .then(() => {
//       prdData["ProductRowId"] = getValueById("ProductRowId");
//       prdData["ProductId"] = getValueById("ProductId");
//       prdData["ProductName"] = getValueById("ProductName");
//       prdData["Manufacturer"] = getValueById("Manufacturer");
//       prdData["CategoryName"] = getValueById("CategoryName");
//       prdData["Description"] = getValueById("Description");
//       console.log("prdData :>> ", prdData);
//       document.getElementById("display").innerHTML = "";
//     })
//     .catch((msg) => {
//       document.getElementById("display").innerHTML = msg;
//     });
// }

function getValueById(id) {
  return document.getElementById(id).value;
}

// // let prdData = {
// //   ProductId: "Prd998",
// //   ProductName: "Pen",
// //   CategoryName: "Stationary",
// //   Manufacturer: "Reynolds",
// //   Description: "Gel-Pen",
// //   BasePrice: 40,
// // };

// // subscribe to the Promise object and either get Resolve or rejected
// postProduct(
//   "https://apiapptrainingnewapp.azurewebsites.net/api/Products",
//   prdData
// )
//   .then((resp) => {
//     console.log(`Data Created ${resp}`);
//   })
//   .catch((error) => {
//     console.log(`Data Creation failed ${error}`);
//   });

// // URL for PUT
// // <id>  is a value based on which record will be searched
// // "https://apiapptrainingnewapp.azurewebsites.net/api/Products/<id>"
// // PUT Request also accepts data in Body as JSON
// //  request.send(JSON.stringify(data));

// // URL for DELETE
// // <id>  is a value based on which record will be searched and deleted
// // "https://apiapptrainingnewapp.azurewebsites.net/api/Products/<id>"

// function putProduct(url, data) {
//   return new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();

//     request.onload = function () {
//       if (request.status == 201) {
//         resolve(request.response);
//       } else {
//         reject(new Error(request.statusText));
//       }
//     };

//     request.onerror = function () {
//       reject(new Error("May ne Network Error"));
//     };

//     request.open("PUT", url); // PUT  // DELETE
//     // define the request header
//     request.setRequestHeader("Content-Type", "application/json");
//     // pass the data as JSON string
//     request.send(JSON.stringify(data));
//   });
// }

// let prdData = {
//   ProductId: "Prd998",
//   ProductName: "Pen",
//   CategoryName: "Stationary",
//   Manufacturer: "Renolds",
//   Description: "Gel-Pen",
//   BasePrice: 40,
// };

// // subscribe to the Promise object and either get Resolve or rejected
// postProduct(
//   "https://apiapptrainingnewapp.azurewebsites.net/api/Products",
//   prdData
// )
//   .then((resp) => {
//     console.log(`Data Created ${resp}`);
//   })
//   .catch((error) => {
//     console.log(`Data Creation failed ${error}`);
//   });
