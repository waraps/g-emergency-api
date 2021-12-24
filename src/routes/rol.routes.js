const { Router } = require("express");
const { AuthMiddleware, IsAdministratorMiddleware } = require("../middlewares");

module.exports = function ({ RolController }) {
  const router = Router();

  router.get("/:id", AuthMiddleware, RolController.get.bind(RolController));
  router.get("", AuthMiddleware, RolController.getAll.bind(RolController));
  router.post(
    "",
    [AuthMiddleware, IsAdministratorMiddleware],
    RolController.create.bind(RolController)
  );
  router.put(
    "/:id",
    [AuthMiddleware, IsAdministratorMiddleware],
    RolController.update.bind(RolController)
  );
  router.delete(
    "/:id",
    [AuthMiddleware, IsAdministratorMiddleware],
    RolController.delete.bind(RolController)
  );

  return router;
};
