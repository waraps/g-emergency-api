const { Router } = require("express");
const { AuthMiddleware, IsAdministratorMiddleware } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("", AuthMiddleware, UserController.getUsers.bind(UserController));
  router.get(
    "/with_roles",
    AuthMiddleware,
    UserController.getAllWithRole.bind(UserController)
  );
  router.post(
    "",
    [AuthMiddleware, IsAdministratorMiddleware],
    UserController.createUser.bind(UserController)
  );
  router.get(
    "/:id",
    AuthMiddleware,
    UserController.getUser.bind(UserController)
  );
  router.get(
    "/with_role/:id",
    AuthMiddleware,
    UserController.getWithRole.bind(UserController)
  );
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
