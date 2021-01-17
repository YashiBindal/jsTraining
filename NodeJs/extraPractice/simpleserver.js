let http = require("http");
let Emps = [
  {
    EmpNo: 101,
    EmName: "A",
  },
  {
    EmpNo: 102,
    EmName: "B",
  },
  {
    EmpNo: 103,
    EmName: "C",
  },
];
// 1. create a web server
// let server = http.createServer((request, response) => {
//   response.write("Hello World From Node.js! yashi here");
//   response.end();
// });

let server = http.createServer((req, resp) => {
  let headers = req.headers;
  let authObject = headers.authorization;
  console.log(authObject);

  console.log(`Current method : ${req.method}`);

  //   console.log(`Recieved on url ${req.url}`);
  resp.writeHead(200, { "Content-Type": "application/json" });
  //   resp.write(JSON.stringify(Emps));
  //console.log(req.url.split("/"));
  if (req.method === "GET") {
    let id = req.url.split("/")[1];
    //   console.log(Emps);
    if (id !== "favicon.ico" && id !== "") {
      let output = Emps.filter((e, i) => {
        return e.EmpNo == parseInt(id);
      });
      resp.write(JSON.stringify(output));
    } else {
      resp.write(JSON.stringify(Emps));
    }
    resp.end();
  }

  if (req.method === "POST") {
    let receivedData;
    req.setEncoding("utf-8");
    req
      .on("data", (d) => {
        // process the data
        // with you logic`
        console.log(`Received data from post ${d}`);
        receivedData = JSON.parse(d);
      })
      .on("end", () => {
        // data processing is done
        // and request is ended
        Emps.push(receivedData);
        resp.end(`Hay Client I received data as ${JSON.stringify(Emps)}`);
        console.log(Emps);
      });
  }

  // if (req.method === "PUT") {
  //   let receivedData;
  //   req
  //     .on("data", (d) => {
  //       // process the data
  //       // with you logic`
  //       console.log(`Received data from post ${d}`);
  //       receivedData = d;
  //       let i = 0;

  //       console.log(d["pid"]); //undefined
  //       // for (let el of receivedData) {
  //       //   console.log(el.pid);
  //       // console.log(Products[i].pid);
  //       // if (el.pid == Products[i].pid) {
  //       // }
  //       // i++;
  //       // console.log(el);
  //       // }
  //     })
  //     .on("end", () => {
  //       // data processing is done
  //       // and request is ended
  //       Products.push(receivedData);
  //       resp.end(`Hey Client I received data as ${Products}`);
  //     });
  // }
});

// 2. start listing on the port
server.listen(9087);

console.log(`The Simple Web Server Started listening on port 9087`);
