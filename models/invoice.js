"use strict";
const { Model } = require("sequelize");

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
