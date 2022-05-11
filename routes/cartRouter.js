const express = require("express");
const cartRouter = express.Router();

const CartController = require("../controllers/CartController");

cartRouter.route("/cart").get(CartController.GetCart);

cartRouter.route("/cart/add/:id").post(CartController.PostAddCart);

cartRouter
  .route("/cart/delete/:id")
  .post(CartController.DeleteCart)
  .delete(CartController.DeleteCart);

module.exports = cartRouter;
