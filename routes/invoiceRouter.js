const express = require("express");
const invoiceRouter = express.Router();

const InvoiceController = require("../controllers/InvoiceController");

invoiceRouter
  .route("/invoice/generate")
  .post(InvoiceController.GenerateInvoice);

module.exports = invoiceRouter;
