const express = require("express");
const itemRouter = express.Router();

const ItemController = require("../controllers/ItemController");

itemRouter.route("/item").get(ItemController.GetAllItem);

itemRouter
  .route("/item/add")
  .get(ItemController.GetAddItem)
  .post(ItemController.PostAddItem);

itemRouter
  .route("/item/get")
  .get(ItemController.GetSearchItem)
  .post(ItemController.PostSearchItem);

itemRouter
  .route("/item/update/:id")
  .get(ItemController.GetUpdateItem)
  .post(ItemController.PostUpdateItem);

itemRouter
  .route("/item/delete/:id")
  .post(ItemController.DeleteItem)
  .delete(ItemController.DeleteItem);

// ==API== //
itemRouter.route("/item/get/:brand").get(ItemController.GetItemByBrand);

itemRouter.route("/item/get/:itemname").get(ItemController.GetItemByItemName);

itemRouter.route("/item/get/:id").get(ItemController.GetItemById);
// ==API== //

module.exports = itemRouter;
