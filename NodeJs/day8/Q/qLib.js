// logic for Promise based External calls
// 1. load q
let q = require("q");
// 2. load http
let http = require("http");

// 3. create a module that will make an external calls

module.exports = {
  //method for get
  getData: function (options) {
    let defer = q.defer();
    // console.log("defer :>> ", defer);
    let request;
    let responseObject;
    if (!options) {
      defer.reject("Server Information is not provided");
    } else {
      request = http.request(options, (response) => {
        response.on("data", (data) => {
          responseObject += data;
          console.log(`data = ${JSON.stringify(responseObject)}`);
        });
        response.on("end", () => {
          try {
            defer.resolve(responseObject);
          } catch (ex) {
            defer.reject(`Error Occurred ${ex.message}`);
          }
        });
      });
    }

    request.end();

    return defer.promise;
  },
  //----------------------------post-----------------------------
  postData: function (options, product) {
    let defer = q.defer();

    let request;
    let responseObject;
    if (!options) {
      defer.reject("Server Information is not provided");
    } else {
      request = http.request(options, (response) => {
        response.on("data", (data) => {
          responseObject += data;
          console.log(`data = ${JSON.stringify(responseObject)}`);
        });
        response.on("end", () => {
          try {
            defer.resolve(responseObject);
          } catch (ex) {
            defer.reject(`Error Occured ${ex.message}`);
          }
        });
      });
    }
    request.write(product);
    request.end();

    return defer.promise;
  },
};
