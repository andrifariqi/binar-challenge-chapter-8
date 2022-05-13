"use strict";
const { Model } = require("sequelize");
const easyinvoice = require("easyinvoice");
const fs = require("fs");

module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.belongsTo(models.User);
    }

    static async GenerateInvoice(session) {
      try {
        const { Item } = require("../models");
        const { Cart } = require("../models");
        const carte = await Cart.findAll({
          include: {
            model: Item,
            as: "Item",
            required: true,
          },
          order: [["ItemId", "ASC"]],
          where: { UserId: session.userid },
        });
        if (carte) {
          const time = Date.now();
          const randomNumber = Math.ceil(Math.random() * 9999) + 1;
          const invoice = `INV-${time}-${randomNumber}`;
          const check = await this.create({
            invoicenumber: invoice,
            invoicedate: time,
            UserId: session.userid,
            createdBy: session.username,
            updatedBy: session.username,
          });
          if (check) {
            let data = {};
            let product = [];
            for (let i = 0; i < carte.length; i++) {
              let obj = {
                quantity: carte[i].quantity,
                description: carte[i].Item.itemname,
                "tax-rate": 11,
                price: carte[i].Item.price,
              };
              data = {
                images: {
                  logo: "",
                  background: "",
                },
                sender: {
                  company: "Andri Al Fariqi",
                  address: "",
                  zip: "",
                  city: "",
                  country: "",
                },
                client: {
                  company: session.username,
                  address: "",
                  zip: "",
                  city: "",
                  country: "",
                },
                information: {
                  number: invoice,
                  date: time,
                  "due-date": "",
                },
                products: product,
                "bottom-notice": `* Pembayaran dapat dilakukan melalui "Transfer / Cek / Giro".`,
                settings: {
                  locale: "id-ID",
                  currency: "IDR",
                  "tax-notation": "Tax",
                  "margin-top": 25,
                  "margin-right": 25,
                  "margin-left": 25,
                  "margin-bottom": 25,
                  height: "30cm",
                  width: "21cm",
                  format: "A4",
                  orientation: "landscape",
                },
                translate: {
                  invoice: "INVOICE",
                },
              };
              product.push(obj);
            }
            if (data !== null) {
              const pdf = await easyinvoice.createInvoice(
                data,
                async function (result) {
                  await fs.writeFileSync(
                    `./pdf/${invoice}.pdf`,
                    result.pdf,
                    "base64"
                  );
                }
              );
              if (pdf) {
                await Cart.destroy({ where: { UserId: session.userid } });
              }
            }
          }
        }
        return carte;
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }
  }

  Invoice.init(
    {
      invoicenumber: DataTypes.STRING,
      invoicedate: DataTypes.DATEONLY,
      UserId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      updatedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Invoice",
    }
  );

  return Invoice;
};
