let http = require("http");
let fs = require("fs");

let productArr = [];

let server = http.createServer(function (req, resp) {
  console.log(req.url);

  let path = "./AppPages/";
  switch (req.url) {
    case "/":
      path += "home.html";
      break;
    case "/get":
      path += "getProducts.html";
      break;
    default:
      path += "error.html";
      break;
  }

  let productPage = fs.readFileSync("path");

  if (req.method === "GET" && req.url == "/") {
    resp.writeHead(200, { "content-type": "text/html" });
    resp.end(productPage);
  } else if (req.method === "GET" && req.url == "/get") {
    resp.writeHead(200, { "content-type": "text/html" });
    productArr.forEach((element) => {
      resp.write(JSON.stringify(element));
    });
    resp.end(productPage);
  } else {
    resp.writeHead(404, { "content-type": "text/html" });
    resp.end(productPage);
  }
  //-----------------------------------------xx---------------------------------------------------
  if (req.method === "POST") {
    let productData = "";

    req
      .on("data", function (prd) {
        productData += prd;
        // console.log(productData);
        let prodElementArr = productData.split("&");
        // console.log(prodElementArr);

        //converting array to object
        // let productObj = JSON.stringify(Object.assign({}, prodElementArr));

        //converting array to JSON object
        var productObj = {};
        prodElementArr.forEach((prod) => {
          let arr = prod.split("=");
          console.log(arr);
          productObj[arr[0]] = arr[1];
        });
        productArr.push(productObj);
        // console.log(productArr);
        console.log(productArr);
      })
      .on("end", function () {
        console.log("The received data is " + productData.toString());
        resp.end("Data received  from you is " + productData.toString());
      });
  }
});
server.listen(5555);
console.log("Server started on  5555");
