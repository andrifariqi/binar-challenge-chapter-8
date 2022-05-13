class PageController {
  static async Get404Page(req, res) {
    try {
      res.status(200).render("404", {
        title: "404 Not Found Page",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetHome(req, res) {
    try {
      const { Item } = require("../models");
      const item = await Item.ShowAllItem();
      const session = req.session.user;
      res.status(200).render("index", {
        title: "Home",
        username: session.username,
        isAdmin: session.isadmin,
        item,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static Logout(req, res) {
    req.session.destroy(null);
    res.status(200).redirect("/login");
  }
}

module.exports = PageController;
