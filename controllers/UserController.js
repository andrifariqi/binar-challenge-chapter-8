const { User } = require("../models");

let message = "";

class UserController {
  static async GetRegister(req, res) {
    try {
      res.status(200).render("register", {
        title: "Register",
        message: message,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async PostRegister(req, res) {
    try {
      const data = req.body;
      await User.Register(data);
      res.status(200).redirect("/login");
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetLogin(req, res) {
    try {
      res.status(200).render("login", {
        title: "Login",
        message: message,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async PostLogin(req, res) {
    try {
      const data = req.body;
      const login = await User.Login(data);
      if (!login.success) {
        message = login.message;
        res.status(400).redirect("/login");
      } else {
        message = "";
        const user = {
          userid: login.data.id,
          username: login.data.username,
          useremail: login.data.email,
          userphone: login.data.phone,
          isadmin: login.data.isadmin,
          islogin: true,
        };
        req.session.user = user;
        res.status(200).redirect("/");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async GetForgotPassword(req, res) {
    try {
      res.status(200).render("forgot-password", {
        title: "Forgot Password",
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async UpdateForgotPassword(req, res) {
    try {
      const data = req.body;
      await User.ForgotPassword(data);
      res.status(200).redirect("/login");
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = UserController;
