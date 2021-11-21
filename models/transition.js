const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("transition", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  stratlocation: Sequelize.STRING,
  endlocation: Sequelize.STRING,
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isdone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  satisfynumber: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  tripdurationtime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Product;
