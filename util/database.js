const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "mohamm.javad78", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
