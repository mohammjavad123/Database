const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);
router.post("/add-taxidriver", adminController.postAddtaxidriver);
router.get("/add-taxidriver", adminController.getAddtaxidriver);

router.get("/edit-product/:productId", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct);
router.post("/delete-customer/:productId", adminController.deletecustomer);

router.post("/delete-product/:productId", adminController.postDeleteProduct);

module.exports = router;
