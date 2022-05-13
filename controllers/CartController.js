const { Cart } = require("../models");

class CartController {
  static async PostAddCart(req, res) {
    try {
      const param = req.params;
      const session = req.session.user;
      await Cart.PostAddCart(param, session);
      res.status(200).redirect("/cart");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetCart(req, res) {
    try {
      const session = req.session.user;
      const cart = await Cart.GetCart(session);
      const price = await Cart.GetTotalPrice(session);
      res.status(200).render("cart", {
        title: "Cart",
        username: session.username,
        isAdmin: session.isadmin,
        cart,
        price,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async DeleteCart(req, res) {
    try {
      const param = req.params;
      const session = req.session.user;
      await Cart.DeleteCart(param, session);
      res.status(200).redirect("/cart");
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = CartController;
