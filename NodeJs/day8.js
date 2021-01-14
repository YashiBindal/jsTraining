//1.
let http = require("http");
let fs = require("fs");

//2.
let productPage = fs.readFileSync("./AppPages/home.html");
let productArr = [];
//3.
let server = http.createServer(function (req, resp) {
  //4.
  if (req.method === "GET") {
    resp.writeHead(200, { "content-type": "text/html" });
    productArr.forEach((element) => {
      resp.write(JSON.stringify(element));
    });
    resp.end(productPage);
  }
  //5.
  if (req.method === "POST") {
    let productData = "";
    //6.
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
server.listen(4444);
console.log("Server started on  4444");
