"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item);
      User.hasMany(models.Cart);
      User.hasMany(models.Invoice);
    }

    static #hashPassword(password) {
      const hashpassword = bcrypt.hashSync(password, 10);
      return hashpassword;
    }

    static #comparePassword(password, dbPassword) {
      const isPasswordValid = bcrypt.compareSync(password, dbPassword);
      return isPasswordValid;
    }

    static async Register(data) {
      try {
        const encryptPassword = this.#hashPassword(data.password);
        const check = await this.findOne({
          where: {
            username: data.username,
          },
        });
        if (check) {
          return Promise.reject({
            message: "Username already registered !",
          });
        } else {
          await this.create({
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: encryptPassword,
            isadmin: data.isadmin,
            createdBy: data.username,
            updatedBy: data.username,
          });
        }
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async Login(data) {
      try {
        const login = await this.findOne({
          where: {
            username: data.username,
          },
        });
        const resultObj = {
          success: false,
          message: "",
        };
        if (!login) {
          resultObj.message = "User not found !";
        } else {
          const dbPassword = login.dataValues.password;
          const isPasswordValid = this.#comparePassword(
            data.password,
            dbPassword
          );
          if (!isPasswordValid) {
            resultObj.message = "Wrong Password !";
          } else {
            resultObj.success = true;
            resultObj.data = login.dataValues;
          }
        }
        return Promise.resolve(resultObj);
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }

    static async ForgotPassword(data) {
      try {
        const encryptPassword = this.#hashPassword(data.password);
        const time = Date.now();
        const check = await this.findOne({
          where: { username: data.username },
        });
        if (check) {
          await this.update(
            {
              password: encryptPassword,
              updatedAt: time,
              updatedBy: check.dataValues.username,
            },
            { where: { username: check.dataValues.username } }
          );
        } else {
          return Promise.reject({ message: "User not found !" });
        }
      } catch (error) {
        return Promise.reject({ message: error });
      }
    }
  }

  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      isadmin: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      updatedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
