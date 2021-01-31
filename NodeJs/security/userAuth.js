const { Sequelize, DataTypes, Model } = require("sequelize");
let path = require("path");

let jwt = require("jsonwebtoken");

// JWT Secret key creation
const jwtSettings = {
  jwtSecret: "sbisecret007700tercesibs",
};

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

// @ts-ignore
const users = require(path.join(__dirname, "././models/users"))(
  sequelize,
  Sequelize.DataTypes
);
// @ts-ignore
const depts = require(path.join(__dirname, "./../day10/models/department"))(
  sequelize,
  Sequelize.DataTypes
);

class UserAuth {
  async createUser(req, resp) {
    let newUser = {
      userId: req.body.userId,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
    };

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
  }

  ///--------------------------------------xx-------------------------------------------
  async authUser(req, resp) {
    let userInfo = {
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

    const token = jwt.sign({ userInfo }, jwtSettings.jwtSecret, {
      expiresIn: 360000,
    });
    req.session.loggedin = true;
    req.session.name = userInfo.userName;
    console.log(`The current session is for user ${req.session.name}`);
    return resp.status(200).send({
      response: `Login Successful for ${userInfo.userName}`,
      authenticated: true,
      token: token,
      status: 200,
    });
  }
  //--------------------------------------------xx------------------------------------------
  async getDepts(req, resp) {
    // please do not send the departments response if the
    // session name is not present in the request
    if (req.session.name === undefined)
      return resp
        .status(401)
        .send({ response: `Session Is expired please login in again` });

    // 1. receive the token from the header
    // headers: {'AUTHORIZATION': 'Bearer <TOKEN>'}

    console.log(`Received data ${req.headers.authorization}`);
    if (req.headers.authorization !== undefined) {
      let receivedToken = req.headers.authorization.split(" ")[1];

      await jwt.verify(
        receivedToken,
        jwtSettings.jwtSecret,
        async (error, decoded) => {
          if (error)
            return resp
              .status(401)
              .send({ response: `Authentication failed ${error}` });

          await sequelize.sync({ force: false });
          const find = await depts.findAll();
          // connect to db using sequelize
          req.decoded = decoded;
          // the request is verified successfully
          return resp.status(200).send({ response: find });
        }
      );
    } else {
      return resp.status(401).send({
        response: `Authentication failed because AUTHORIZATION Header is missing`,
      });
    }
  }
  //---------------------------------------------xx-----------------------------------
  async logout(req, resp) {
    req.session.destroy();
    return resp.status(200).send({ response: "Successful logout" });
  }
}

module.exports = UserAuth;
