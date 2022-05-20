module.exports = (app) => {
  const players = require("../controllers/player.controller.js");

  var router = require("express").Router();

  const swaggerUi = require("swagger-ui-express");
  const swaggerDocument = require("../../swagger.json");

  // Swagger Endpoints
  router.use("/api-docs", swaggerUi.serve);
  router.get("/api-docs", swaggerUi.setup(swaggerDocument));

  // Player Endpoints
  router.post("/players", players.create);
  router.get("/players", players.findAll);
  router.get("/players/:id", players.findById);
  router.put("/players/:id", players.update);
  router.post("/players/exp/:id", players.getExperience);
  router.delete("/players/:id", players.delete);

  // API prefix
  app.use("/api", router);
};
