console.log("connected to html");
// let productIds = [101, 102, 103, 104, 105, 106];
let productMap = new Map();

productMap.set("101", {
  id: "101",
  manufacturer: "Asus",
  name: "Desktop",
  category: "ECT",
  price: "10000",
});
productMap.set("102", {
  id: "102",
  manufacturer: "Asus",
  name: "Laptop",
  category: "ECT",
  price: "20000",
});
productMap.set("103", {
  id: "103",
  manufacturer: "tata",
  name: "Iron",
  category: "ECL",
  price: "5000",
});
productMap.set("104", {
  id: "104",
  manufacturer: "bajaj",
  name: "Mixer",
  category: "ECL",
  price: "6000",
});
productMap.set("105", {
  id: "105",
  manufacturer: "parle",
  name: "Biscuits",
  category: "FOD",
  price: "10",
});
productMap.set("106", {
  id: "106",
  manufacturer: "pepsico",
  name: "Lays",
  category: "FOD",
  price: "30",
});

//array of selected data object properties to display in table
let headers = [
  { key: "id", heading: "Product Id" },
  { key: "name", heading: "Product Name" },
  { key: "category", heading: "Product Category" },
  { key: "price", heading: "Product Price" },
  { key: "manufacturer", heading: "Product Manufacturer" },
];
//script for table headers and select options
//Using header array object .keys for option values and .heading to assign header name and select options to display
let options = "";
let headRow = "";
for (let header of headers) {
  options += `<option value="${header.key}">${header.heading}</option>`;
  headRow += `<th >${header.heading}</th>`;
}

// console.log("document :>> ", document);
document.getElementById("properties").innerHTML = options;

document.getElementById("thead").innerHTML = ` <tr>${headRow}</tr>`;

//script for displaying table rows using map

// Method 1
// for (id of productIds) {
//   console.log("productMap.get(id) :>> ", productMap.get(id));
// }

// Method 2
let tr = "";
productMap.forEach(function (product, key) {
  // console.log("value :>> ", product);
  tr += createRow(product);
});
document.getElementById("tbody").innerHTML = tr;

//change event listener for input
document.getElementById("attribute").addEventListener("change", function () {
  //getting user input value from input field
  let input = document.getElementById("attribute").value;
  console.log("input :>> ", input.toLowerCase());
  // getting user choice from select menu
  let choice = document.getElementById("properties").value;
  console.log("choice :>> ", choice);

  filterProduct(input, choice);
});
// -----------------------------------------------------------------------------------------
// support functions

function filterProduct(input, options) {
  let filteredRows = "";
  // console.log("input :>> ", input);
  if (options == "id") {
    let product = productMap.get(input);
    filteredRows += createRow(product);
  } else {
    filteredRows = filter(options, input);
  }

  document.getElementById("tbody").innerHTML = filteredRows;
}

function filter(option, input) {
  let filteredRows = "";
  productMap.forEach(function (product) {
    // console.log("product.name :>> ", product.name);
    if (product[option]?.toLowerCase() == input?.toLowerCase()) {
      filteredRows += createRow(product);
    }
  });
  return filteredRows;
}

//value in foreach gives us product object
function createRow(product) {
  if (!product) return "";

  let cols = "";
  //iterate over headers array to get header
  for (let header of headers) {
    //using header.key to get value from product object to create columns
    cols += `<td>${product[header.key]}</td>`;
  }
  return `<tr>${cols}</tr>`;
}

// -------------------------------------------xx------------------------------------
//code to sort according to option selected

document.getElementById("sort").addEventListener("click", () => {
  let choice = document.getElementById("properties").value;
  let sortedRows = "";
  sortRows(choice, false).forEach((product) => {
    sortedRows += createRow(product);
  });

  document.getElementById("tbody").innerHTML = sortedRows;
});

document.getElementById("reverse").addEventListener("click", () => {
  let choice = document.getElementById("properties").value;
  let sortedRows = "";
  sortRows(choice, true).forEach((product) => {
    sortedRows += createRow(product);
  });

  document.getElementById("tbody").innerHTML = sortedRows;
});

function sortRows(choice, reverse) {
  console.log("productMap.values() :>> ", productMap.values());
  let productArr = Array.from(productMap.values());
  if (choice == "id" || choice == "price") {
    productArr.sort((productA, productB) => {
      if (reverse) return productB[choice] - productA[choice];

      return productA[choice] - productB[choice];
    });
  } else {
    productArr.sort((productA, productB) => {
      var a = reverse
        ? productB[choice]?.toUpperCase()
        : productA[choice]?.toUpperCase(); // ignore upper and lowercase

      var b = reverse
        ? productA[choice]?.toUpperCase()
        : productB[choice]?.toUpperCase(); // ignore upper and lowercase

      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
  return productArr;
}
