var DataTypes = require("sequelize").DataTypes;
var _department = require("./department");
var _employee = require("./employee");
var _users = require("./users");

function initModels(sequelize) {
  var department = _department(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  employee.belongsTo(department, { foreignKey: "DeptNo" });
  department.hasMany(employee, { foreignKey: "DeptNo" });

  return {
    department,
    employee,
    users,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
