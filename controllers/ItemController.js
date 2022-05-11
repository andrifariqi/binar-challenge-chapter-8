const { Item } = require("../models");

let itemSearch = [];

class ItemController {
  static async GetAddItem(req, res) {
    try {
      const session = req.session.user;
      res.status(200).render("item-add", {
        title: "Add Item",
        username: session.username,
        isAdmin: session.isadmin,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async PostAddItem(req, res) {
    try {
      const data = req.body;
      const session = req.session.user;
      await Item.AddItem(data, session);
      res.status(200).redirect("/item");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetAllItem(req, res) {
    try {
      const session = req.session.user;
      const item = await Item.ShowAllItem();
      res.status(200).render("item", {
        title: "Item",
        username: session.username,
        isAdmin: session.isadmin,
        item,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetSearchItem(req, res) {
    try {
      const session = req.session.user;
      res.status(200).render("item-search", {
        title: "Search Item",
        username: session.username,
        isAdmin: session.isadmin,
        item: itemSearch,
      });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  static async PostSearchItem(req, res) {
    try {
      const data = req.body;
      const item = await Item.SearchItem(data);
      itemSearch = item;
      res.status(200).redirect("/item/get");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetUpdateItem(req, res) {
    try {
      const param = req.params;
      const session = req.session.user;
      const item = await Item.GetUpdateItem(param);
      res.status(200).render("item-update", {
        title: "Update Item",
        username: session.username,
        isAdmin: session.isadmin,
        item,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async PostUpdateItem(req, res) {
    try {
      const data = req.body;
      const param = req.params;
      const session = req.session;
      await Item.UpdateItem(data, param, session);
      res.status(200).redirect("/item");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async DeleteItem(req, res) {
    try {
      const param = req.params;
      const session = req.session.user;
      await Item.DeleteItem(param, session);
      res.status(200).redirect("/item");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetItemById(req, res) {
    try {
      const param = req.params;
      const item = await Item.ShowItemById(param);
      res.status(200).render("item", {
        title: "Item",
        item,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetItemByBrand(req, res) {
    try {
      const param = req.params;
      const item = await Item.ShowItemByBrand(param);
      res.status(200).render("item", {
        title: "Item",
        item,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetItemByItemName(req, res) {
    try {
      const param = req.params;
      const item = await Item.ShowItemByItemName(param);
      res.status(200).render("item", {
        title: "Item",
        item,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ItemController;
