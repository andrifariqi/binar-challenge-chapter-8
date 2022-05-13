const { Invoice } = require("../models");

class InvoiceController {
  static async GenerateInvoice(req, res) {
    try {
      const session = req.session.user;
      await Invoice.GenerateInvoice(session);
      res.status(200).redirect("/cart");
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = InvoiceController;
