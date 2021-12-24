const { Router } = require("express");
const { AuthMiddleware, IsAdministratorMiddleware } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("", AuthMiddleware, UserController.getAll.bind(UserController));
  router.post(
    "",
    [AuthMiddleware, IsAdministratorMiddleware],
    UserController.create.bind(UserController)
  );
  router.get("/:id", AuthMiddleware, UserController.get.bind(UserController));
  router.put(
    "/:id",
    [AuthMiddleware, IsAdministratorMiddleware],
    UserController.update.bind(UserController)
  );
  router.delete(
    "/:id",
    [AuthMiddleware, IsAdministratorMiddleware],
    UserController.delete.bind(UserController)
  );

  return router;
};
