const { Router } = require("express");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:id", UserController.get.bind(UserController));
  router.get("", UserController.getAll.bind(UserController));

  return router;
};
