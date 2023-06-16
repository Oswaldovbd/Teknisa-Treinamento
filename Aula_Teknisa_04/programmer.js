const database = require("./db");
const sequelize = require("sequelize");

const Programmer = database.define("Programmer", {
  id: {
    type: sequelize.DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  javascript: {
    type: sequelize.DataTypes.BOOLEAN,
    allowNull: false,
  },
  java: {
    type: sequelize.DataTypes.BOOLEAN,
    allowNull: false,
  },
  python: {
    type: sequelize.DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Programmer;
