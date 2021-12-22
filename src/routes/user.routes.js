const { Router } = require("express");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("", UserController.getAll.bind(UserController));
  router.post("", UserController.create.bind(UserController));
  router.get("/:id", UserController.get.bind(UserController));
  router.put("/:id", UserController.update.bind(UserController));
  router.delete("/:id", UserController.delete.bind(UserController));

  return router;
};
