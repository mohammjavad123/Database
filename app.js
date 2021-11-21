const path = require("path");
const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

let taxidriver = require("./models/cart");
let customer = require("./models/product");
let transition = require("./models/transition");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
taxidriver.belongsToMany(customer, { through: "transition" });
customer.belongsToMany(taxidriver, { through: "transition" });
sequelize
  // { force: true }
  .sync()
  .then((result) => {
    console.log("hi");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
