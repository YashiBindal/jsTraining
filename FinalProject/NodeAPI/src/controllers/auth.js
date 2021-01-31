const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./userAuth");
const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    await jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.status(403).send({
          response: "Authentication failed, Token is invalid , try again",
          status: 403,
        });
      }

      //   console.log("req.user", req.user);
      //   req.user = user;

      next();
    });
  } else {
    res.status(401).send({
      response: "Authentication Failed, please logIn",
      status: 403,
    });
  }
};

module.exports.auth = authenticateJWT;
module.exports.default = authenticateJWT;
