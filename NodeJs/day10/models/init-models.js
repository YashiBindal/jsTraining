var DataTypes = require("sequelize").DataTypes;
var _employee = require("./employee");

function initModels(sequelize) {
  var employee = _employee(sequelize, DataTypes);

  var department = _department(sequelize, DataTypes);
  employee.belongsTo(department, { foreignKey: "DeptNo" });
  department.hasMany(employee, { foreignKey: "DeptNo" });

  return {
    employee,
    department,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
