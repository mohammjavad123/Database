const Product = require("../models/product");
const Cart = require("../models/cart");
const transition = require("../models/transition");
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findByPk(prodId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};
exports.deletetaxidriver = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Cart.findByPk(prodId)
    .then((result) => {
      return result.destroy();
      console.log(result);
    })
    .then((result) => {
      res.redirect("/");
    })

    .catch((err) => console.log(err));
};
exports.edittaxidriver = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  // if (!editMode) {
  //   return res.redirect("/");
  // }
  Cart.findByPk(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/d");
      }
      res.render("shop/edit-taxidriver", {
        pageTitle: "Edit Product",
        path: "/shop/edit-taxidriver",
        editing: true,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};
exports.postedittaxidriver = (req, res, next) => {
  const prodId = req.body.productId;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const updatedImageUrl = req.body.imageUrl;
  const email = req.body.email;
  const city = req.body.city;
  const phonenumber = req.body.phonenumber;
  const plaknumber = req.body.plaknumber;

  Cart.findByPk(prodId)
    .then((product) => {
      product.firstname = firstname;
      product.lastname = lastname;
      product.city = city;
      product.imageUrl = updatedImageUrl;
      product.email = email;
      product.phonenumber = phonenumber;
      product.plaknumber = plaknumber;

      return product.save();
    })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Cart.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.gettransition = (req, res, next) => {
  transition
    .findAll()
    .then((products) => {
      console.log(products);
      res.render("shop/cart", {
        products: products,
        pageTitle: "All Products",
        path: "/cart",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addtransition = (req, res, next) => {
  transition
    .findAll()
    .then((products) => {
      res.render("admin/add-transition", {
        product: products,
        pageTitle: "Shop",
        path: "admin/add-transition",
        editing: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // res.render("admin/add-transition", {
  //   // products: products,
  //   pageTitle: "All Products",
  //   path: "/addtransition",
  //   editing: true,
  // });
};
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
exports.postAddtransition = (req, res, next) => {
  const stratlocation = req.body.stratlocation;
  const endlocation = req.body.endlocation;
  const city = req.body.city;
  const isdone = req.body.isdone;
  const price = req.body.price;
  const satisfynumber = req.body.satisfynumber;
  const tripdurationtime = req.body.tripdurationtime;
  const taxidriverId = req.body.taxidriverId;
  const customerId = req.body.customerId;

  transition
    .create({
      stratlocation: stratlocation,
      lastnaendlocationme: endlocation,
      isdone: isdone,
      price: price,
      city: city,
      satisfynumber: satisfynumber,
      tripdurationtime: tripdurationtime,
      taxidriverId: taxidriverId,
      customerId: customerId,
    })
    .then((result) => {
      // console.log(result);
      console.log("Created transition");
      res.redirect("/transition");
    })
    .catch((err) => {
      console.log(err);
    });
};
