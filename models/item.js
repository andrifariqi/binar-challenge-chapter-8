"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Cart);
    }

    static async AddItem(data, session) {
      try {
        const check = await this.findOne({
          where: { [Op.or]: [{ sku: data.sku }, { itemname: data.itemname }] },
        });
        if (check) {
          return Promise.reject({
            message: `Item with this SKU : ${check.dataValues.sku} and ${check.dataValues.itemname} is already registered !`,
          });
        } else {
          await this.create({
            sku: data.sku,
            itemname: data.itemname,
            itemdescription: data.itemdescription,
            price: data.price,
            brand: data.brand,
            stock: data.stock,
            UserId: session.userid,
            createdBy: session.username,
            updatedBy: session.username,
          });
        }
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async ShowAllItem() {
      try {
        const item = await this.findAll({
          order: [["id", "ASC"]],
          where: { [Op.and]: [{ deletedAt: null }, { deletedBy: null }] },
        });
        return item;
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async SearchItem(data) {
      try {
        const item = await this.findAll({
          where: {
            [Op.or]: [
              { itemname: data.search },
              { brand: data.search },
              { sku: parseInt(data.search) },
            ],
          },
        });
        return item;
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async GetUpdateItem(param) {
      try {
        const item = await this.findOne({ where: { id: param.id } });
        return item;
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async UpdateItem(data, param, session) {
      try {
        const time = Date.now();
        await this.update(
          {
            itemdescription: data.itemdescription,
            price: data.price,
            brand: data.brand,
            stock: data.stock,
            updatedAt: time,
            updatedBy: session.username,
          },
          { where: { id: param.id } }
        );
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async DeleteItem(param, session) {
      try {
        const time = Date.now();
        await this.update(
          {
            deletedAt: time,
            deletedBy: session.username,
          },
          { where: { id: param.id } }
        );
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async ShowItemById(param) {
      try {
        await this.findOne({
          where: { id: param.id },
        });
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async ShowItemByBrand(param) {
      try {
        await this.findAll({
          where: { brand: param.brand },
          order: [["id", "ASC"]],
        });
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async ShowItemByItemName(param) {
      try {
        await this.findAll({
          where: { itemname: param.itemname },
          order: [["id", "ASC"]],
        });
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }
  }

  Item.init(
    {
      sku: DataTypes.INTEGER,
      itemname: DataTypes.STRING,
      itemdescription: DataTypes.STRING,
      price: DataTypes.INTEGER,
      brand: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      CartId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      updatedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );

  return Item;
};
