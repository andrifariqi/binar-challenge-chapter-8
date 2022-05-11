const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const itemRouter = require("./itemRouter");
const cartRouter = require("./cartRouter");
const invoiceRouter = require("./invoiceRouter");
const pageRouter = require("./pageRouter");

const authorization = require("../middleware/authorization");

const PageController = require("../controllers/PageController");

router.use(userRouter);

router.use(authorization);

router.use(pageRouter);

router.use(itemRouter);

router.use(cartRouter);

router.use(invoiceRouter);

router.route("*").get(PageController.Get404Page);

module.exports = router;
