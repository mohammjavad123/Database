const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("taxidriver", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  plaknumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
