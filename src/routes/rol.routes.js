const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function ({ RolController }) {
  const router = Router();

  router.get("/:id", AuthMiddleware, RolController.get.bind(RolController));
  router.get("", AuthMiddleware, RolController.getAll.bind(RolController));
  router.post("", AuthMiddleware, RolController.create.bind(RolController));
  router.put("/:id", AuthMiddleware, RolController.update.bind(RolController));
  router.delete(
    "/:id",
    AuthMiddleware,
    RolController.delete.bind(RolController)
  );

  return router;
};
