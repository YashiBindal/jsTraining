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
    if (property == "ProductRowId" && value.length < 1) {
      document.getElementById("display").innerHTML =
        "Must enter a product Row ID";
      return false;
    }
    if (property == "ProductName" && (value.length < 1 || value.length > 10)) {
      document.getElementById("display").innerHTML =
        "Product name is Must and should not exceed 30 characters";
      return false;
    }
    if (
      property == "Price" &&
      (isNaN(value) || parseInt(value) < 0 || value.length < 1)
    ) {
      document.getElementById("display").innerHTML =
        "Price must be a positive Integer";
      return false;
    }
    //console.log("property :>> ", property, typeof property);
    target[property] = value;
    return true;
  },
};

prdData = new Proxy(prdData, saveClickHandler);

function onClickHandler() {
  prdData.Price = document.getElementById("Price").value;
  prdData.Description = document.getElementById("Description").value;
  prdData.CategoryName = document.getElementById("CategoryName").value;
  prdData.Manufacturer = document.getElementById("Manufacturer").value;
  prdData.ProductName = document.getElementById("ProductName").value;
  prdData.ProductId = document.getElementById("ProductId").value;
  prdData.ProductRowId = document.getElementById("ProductRowId").value;
  console.log(prdData);

  if (Object.values(prdData).length < 7) {
    document.getElementById("post").disabled = true;
    document.getElementById("put").disabled = true;
    document.getElementById("get").disabled = true;
    document.getElementById("delete").disabled = true;
  } else {
    document.getElementById("display").innerHTML = "";
    document.getElementById("post").disabled = false;
    document.getElementById("put").disabled = false;
    document.getElementById("get").disabled = false;
    document.getElementById("delete").disabled = false;
  }
}
//--------------------------------------xx-----------------------------------------------------
//function for GET products
function getProducts() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    // subscribe to the responses for success and failure
    // success
    xhr.onload = function () {
      // check for Http Status as 200
      if (xhr.status == 200) {
        // console.log(`In onload ${xhr.response}`);
        // resolve and notify the response to client / subscriber
        resolve(xhr.response);
      } else {
        // reject if there is different status code
        reject("Some Error occurred with the status code");
      }
    };
    // failure
    xhr.onerror = function () {
      // reject if there is different status code
      reject("Some Error Occurred with Http Communication");
    };

    // initiate the request
    xhr.open(
      "GET",
      "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
    );
    // send the request
    xhr.send();
  });
}

// subscribe to the Promise object and either get Resolve or rejected//
document.getElementById("get").addEventListener("click", function () {
  console.log("Inside get event listener");
  getProducts()
    .then((response) => {
      console.log(`Received Response ${response}`);
    })
    .catch((error) => {
      console.log(`Received Error ${error}`);
    });
});

//---------------------------------------------xx----------------------------------------

//function for POST data
function postProduct(url, data) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (request.status == 201) {
        resolve(request.response);
      } else {
        reject(new Error(request.statusText));
      }
    };

    request.onerror = function () {
      reject(new Error("May be Network Error"));
    };

    request.open("POST", url); // PUT  // DELETE
    // define the request header
    request.setRequestHeader("Content-Type", "application/json");
    // pass the data as JSON string
    request.send(JSON.stringify(data));
  });
}

document.getElementById("post").addEventListener("click", function () {
  console.log("Inside post event listener");
  postProduct(
    "https://apiapptrainingnewapp.azurewebsites.net/api/Products",
    prdData
  )
    .then((resp) => {
      console.log(`Data Created ${resp}`);
    })
    .catch((error) => {
      console.log(`Data Creation failed ${error}`);
    });
});

// URL for PUT
// <id>  is a value based on which record will be searched
// "https://apiapptrainingnewapp.azurewebsites.net/api/Products/<id>"
// PUT Request also accepts data in Body as JSON
//  request.send(JSON.stringify(data));

// URL for DELETE
// <id>  is a value based on which record will be searched and deleted
// "https://apiapptrainingnewapp.azurewebsites.net/api/Products/<id>"

// ------------------------------------------xx--------------------------------------------------

function putProduct(url, data) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (request.status == 204) {
        resolve(request.response);
      } else {
        reject(new Error(request.statusText));
      }
    };

    request.onerror = function () {
      reject(new Error("May be Network Error"));
    };

    request.open("PUT", url); // PUT  // DELETE
    // define the request header
    request.setRequestHeader("Content-Type", "application/json");
    // pass the data as JSON string
    request.send(JSON.stringify(data));
  });
}

//subscribe to the Promise object and either get Resolve or rejected function
document.getElementById("put").addEventListener("click", function () {
  console.log("Inside put event listener");
  putProduct(
    "https://apiapptrainingnewapp.azurewebsites.net/api/Products" +
      `/${prdData.ProductRowId}`,
    prdData
  )
    .then((resp) => {
      console.log(`Data Updated ${resp}`);
    })
    .catch((error) => {
      console.log(`Data Updation failed ${error}`);
    });
});

//-----------------------------------------------------xx--------------------------------------------
function deleteProduct(url, data) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(new Error(request.statusText));
      }
    };

    request.onerror = function () {
      reject(new Error("May ne Network Error"));
    };

    request.open("DELETE", url); // PUT  // DELETE
    // define the request header
    request.setRequestHeader("Content-Type", "application/json");
    // pass the data as JSON string
    request.send(JSON.stringify(data));
  });
}

//subscribe to the Promise object and either get Resolve or rejected function
document.getElementById("delete").addEventListener("click", function () {
  console.log("Inside delete event listener");
  deleteProduct(
    "https://apiapptrainingnewapp.azurewebsites.net/api/Products" +
      `/${prdData.ProductRowId}`,
    prdData
  )
    .then((resp) => {
      console.log(`Data deleted ${resp}`);
    })
    .catch((error) => {
      console.log(`Data deletion failed ${error}`);
    });
});

//-------------------------------------------------extra-----------------------------------------
// validation using promises
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

// function getValueById(id) {
//   return document.getElementById(id).value;
// }
