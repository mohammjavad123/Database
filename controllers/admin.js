const Product = require("../models/product");
const Card = require("../models/cart");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-customer", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};
exports.getAddtaxidriver = (req, res, next) => {
  res.render("admin/add-taxi-driver", {
    pageTitle: "Add Product",
    path: "/admin/add-taxidriver",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const imageUrl = req.body.imageUrl;
  const phonenumber = req.body.phonenumber;
  const currentlocation = req.body.currentlocation;

  const email = req.body.email;

  Product.create({
    firstname: firstname,
    lastname: lastname,
    imageUrl: imageUrl,
    phonenumber: phonenumber,
    currentlocation: currentlocation,
    email: email,
  })
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
      res.redirect("/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postAddtaxidriver = (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const imageUrl = req.body.imageUrl;
  const phonenumber = req.body.phonenumber;
  const city = req.body.city;
  const email = req.body.email;
  const plaknumber = req.body.plaknumber;

  Card.create({
    firstname: firstname,
    lastname: lastname,
    imageUrl: imageUrl,
    phonenumber: phonenumber,
    city: city,
    email: email,
    plaknumber: plaknumber,
  })
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const updatedImageUrl = req.body.imageUrl;
  const email = req.body.email;
  const currentlocation = req.body.currentlocation;
  const phonenumber = req.body.phonenumber;

  Product.findByPk(prodId)
    .then((product) => {
      product.firstname = firstname;
      product.lastname = lastname;
      product.currentlocation = currentlocation;
      product.imageUrl = updatedImageUrl;
      product.email = email;
      product.phonenumber = phonenumber;
      product.currentlocation = currentlocation;

      return product.save();
    })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log("DESTROYED PRODUCT");
      res.redirect("/products");
    })
    .catch((err) => console.log(err));
};
exports.deletecustomer = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log("DESTROYED PRODUCT");
      res.redirect("/products");
    })
    .catch((err) => console.log(err));
};
