const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

const jwt = require("jsonwebtoken");

const sequelize = new Sequelize("Company", "root", "y@Shi144", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
});

const users = require(path.join(__dirname, "../models/users"))(
  sequelize,
  DataTypes
);

// JWT Secret key creation
const jwtSecret = "sbisecret007700tercesibs";

const createUser = async (req, resp) => {
  const newUser = {
    // userId: req.body.userId,

    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
  };

  console.log("req", req.body);

  // connect to sb using sequelize
  await sequelize.sync({ force: false });

  // check if the user already exists
  const find = await users.findOne({ where: { userName: newUser.userName } });
  if (find !== null)
    // conflict
    return resp.status(409).send({
      response: `${newUser.userName} is already present`,
      status: 409,
    });

  // create a user
  const created = await users.create(newUser);
  return resp.status(200).send({ response: created, status: 200 });
};

const verifyUser = async (req, resp) => {
  const userInfo = {
    userName: req.body.userName,
    password: req.body.password,
  };

  // connect to sb using sequelize
  await sequelize.sync({ force: false });

  // find the user
  const find = await users.findOne({
    where: { userName: userInfo.userName },
  });
  if (find === null)
    // not found
    return resp.status(409).send({
      response: `Sorry! ${userInfo.userName} is not found`,
      status: 409,
    });
  // check for password
  if (find.password.trim() !== userInfo.password.trim())
    // unauthorized
    return resp.status(401).send({
      response: `Sorry!! Password for ${userInfo.userName} is incorrect`,
      status: 401,
    });

  const token = jwt.sign({ userInfo }, jwtSecret, {
    expiresIn: 360000,
  });
  return resp.status(200).send({
    response: `Login Successful for ${userInfo.userName}`,
    authenticated: true,
    token: token,
    status: 200,
  });
};

const userAuth = {
  createUser,
  verifyUser,
};
module.exports.userAuth = userAuth;
module.exports.jwtSecret = jwtSecret;
module.exports.default = userAuth;
