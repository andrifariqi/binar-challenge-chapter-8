const express = require("express");
const pageRouter = express.Router();

const PageController = require("../controllers/PageController");

pageRouter.route("/").get(PageController.GetHome);

pageRouter.route("/logout").get(PageController.Logout);

module.exports = pageRouter;
