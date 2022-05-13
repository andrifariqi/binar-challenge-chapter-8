"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Item);
      Cart.hasMany(models.Item);
    }

    static async PostAddCart(param, session) {
      try {
        const { Item } = require("../models");
        const time = Date.now();
        const check = await Item.findOne({
          where: {
            id: param.id,
          },
        });
        if (check) {
          if (check.dataValues.stock === 0) {
            return Promise.reject({ message: "Out of stock !" });
          } else {
            const check2 = await this.findOne({
              where: {
                [Op.and]: [
                  { ItemId: check.dataValues.id },
                  { UserId: session.userid },
                ],
              },
            });
            if (check2 === null) {
              await this.create({
                ItemId: check.dataValues.id,
                UserId: session.userid,
                quantity: 1,
                createdBy: session.username,
                updatedBy: session.username,
              });
            } else {
              await this.update(
                {
                  quantity: check2.dataValues.quantity + 1,
                  updatedAt: time,
                  updatedBy: session.username,
                },
                {
                  where: {
                    [Op.and]: [
                      { ItemId: check.dataValues.id },
                      { UserId: session.userid },
                    ],
                  },
                }
              );
            }
            await Item.update(
              {
                stock: check.dataValues.stock - 1,
                updatedAt: time,
                updatedBy: session.username,
              },
              { where: { id: param.id } }
            );
          }
        } else {
          return Promise.reject({ message: "Item not found !" });
        }
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async GetCart(session) {
      try {
        const { Item } = require("../models");
        const cart = await this.findAll({
          include: {
            model: Item,
            as: "Item",
            required: true,
          },
          order: [["ItemId", "ASC"]],
          where: { UserId: session.userid },
        });
        return cart;
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async GetTotalPrice(session) {
      try {
        const totalPrice =
          await sequelize.query(`SELECT SUM("Item"."price" * "Cart"."quantity") AS "t_price"
      FROM "Carts" AS "Cart" 
      INNER JOIN "Items" AS "Item" ON "Cart"."ItemId" = "Item"."id"
      WHERE "Cart"."UserId" = ${session.userid}`);
        return totalPrice[0];
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async DeleteCart(param, session) {
      try {
        const { Item } = require("../models");
        const time = Date.now();
        const check = await this.findOne({ where: { id: param.id } });
        if (check) {
          const check2 = await Item.findOne({
            where: { id: check.dataValues.ItemId },
          });
          if (check2) {
            const check3 = await Item.update(
              {
                stock: check2.dataValues.stock + check.dataValues.quantity,
                updatedAt: time,
                updatedBy: session.username,
              },
              { where: { id: check.dataValues.ItemId } }
            );
            if (check3) {
              await this.destroy({ where: { id: param.id } });
            }
          }
        } else {
          return Promise.reject({ message: "Item not found !" });
        }
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }
  }

  Cart.init(
    {
      ItemId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      updatedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );

  return Cart;
};
