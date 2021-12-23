const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("", AuthMiddleware, UserController.getAll.bind(UserController));
  router.post("", AuthMiddleware, UserController.create.bind(UserController));
  router.get("/:id", AuthMiddleware, UserController.get.bind(UserController));
  router.put(
    "/:id",
    AuthMiddleware,
    UserController.update.bind(UserController)
  );
  router.delete(
    "/:id",
    AuthMiddleware,
    UserController.delete.bind(UserController)
  );

  return router;
};
