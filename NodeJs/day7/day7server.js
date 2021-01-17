let http = require("http");

let Products = [
  {
    pid: 1,
    pName: "chips",
    CategoryName: "food",
    Price: 200,
  },
  {
    pid: 2,
    pName: "laptop",
    CategoryName: "electronics",
    Price: 70000,
  },
  {
    pid: 3,
    pName: "monitor",
    CategoryName: "electronics",
    Price: 10000,
  },
];

function categoryFilterSearch(url) {
  let filterArr = Products.filter((product) => product.CategoryName == url);
  return filterArr;
}
// console.log(filterArr);
// in filter product is element of products

// request: the object that will contain the data send by the client to server
let server = http.createServer((req, resp) => {
  // print the current request method (GET /POST /PUT /DELETE)
  // return GET for Get request (from browser)
  console.log(`Current Method = ${req.method}`);

  let headers = req.headers;
  // read the authorization values send by the client
  let authObject = headers.authorization;
  console.log(authObject);

  resp.writeHead(200, { "Content-Type": "application/json" });

  if (req.method === "GET") {
    let url = req.url.split("/")[1];
    console.log(url);
    let filterArr;
    //for url with id
    if (url !== "favicon.ico") {
      // filter Employees based on id
      console.log("inside /pid");
      let output = Products.filter((product) => product.pid == parseInt(url));
      if (output.length !== 0) {
        resp.write(JSON.stringify(output));
      }
    }
    //for other url conditions
    switch (url) {
      case "":
        resp.write("hello Users");
        break;
      case "products":
        resp.write(JSON.stringify(Products));
        break;
      case "electronics":
        console.log("inside /category");
        filterArr = categoryFilterSearch(url);
        resp.write(JSON.stringify(filterArr));
        break;
      case "food":
        console.log("inside /category");
        filterArr = categoryFilterSearch(url);
        resp.write(JSON.stringify(filterArr));
        break;
      case "fashion":
        console.log("inside /category");
        filterArr = categoryFilterSearch(url);
        resp.write(JSON.stringify(filterArr));
        break;
    }

    resp.end();
  }
  // -------------------------------------xx----------------------------------
  if (req.method === "POST") {
    let receivedData;
    req.setEncoding("utf-8");
    req
      .on("data", (d) => {
        // process the data
        // with you logic`
        console.log(`Received data from post ${d}`);
        receivedData = JSON.parse(d);
        //adding ID by auto_incrementing
        receivedData["pid"] = Products.length + 1;
        console.log(receivedData);
        Products.push(receivedData);
      })
      .on("end", () => {
        // data processing is done
        // and request is ended
        console.log(Products);
        resp.end(`Hey Client I received data as ${JSON.stringify(Products)}`);
      });
  }
});

server.listen(7070);
console.log("Started  port on 7070");
