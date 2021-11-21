const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);
router.get("/taxidriver/:productId", shopController.deletetaxidriver);
router.get("/edittaxidriver/:productId", shopController.edittaxidriver);
router.post("/edittaxidriver", shopController.postedittaxidriver);

router.get("/transition", shopController.gettransition);
router.get("/addtransition", shopController.addtransition);
router.post("/addtransition", shopController.postAddtransition);
module.exports = router;
