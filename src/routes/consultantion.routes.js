const { Router } = require("express");
const { AuthMiddleware, IsAdministratorMiddleware } = require("../middlewares");

module.exports = function ({ ConsultationController }) {
  const router = Router();

  router.get(
    "/:id",
    AuthMiddleware,
    ConsultationController.get.bind(ConsultationController)
  );
  router.get(
    "",
    AuthMiddleware,
    ConsultationController.getAll.bind(ConsultationController)
  );
  router.post(
    "",
    AuthMiddleware,
    ConsultationController.create.bind(ConsultationController)
  );
  router.put(
    "/:id",
    AuthMiddleware,
    ConsultationController.update.bind(ConsultationController)
  );
  router.delete(
    "/:id",
    [AuthMiddleware, IsAdministratorMiddleware],
    ConsultationController.delete.bind(ConsultationController)
  );

  return router;
};
