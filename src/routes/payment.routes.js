const { Router } = require("express");
const { AuthMiddleware, IsAdministratorMiddleware } = require("../middlewares");

module.exports = function ({ PaymentController }) {
  const router = Router();

  router.get(
    "/:id",
    AuthMiddleware,
    PaymentController.get.bind(PaymentController)
  );
  router.get(
    "",
    AuthMiddleware,
    PaymentController.getAll.bind(PaymentController)
  );
  router.post(
    "",
    AuthMiddleware,
    PaymentController.create.bind(PaymentController)
  );
  router.put(
    "/:id",
    [AuthMiddleware, IsAdministratorMiddleware],
    PaymentController.update.bind(PaymentController)
  );
  router.delete(
    "/:id",
    [AuthMiddleware, IsAdministratorMiddleware],
    PaymentController.delete.bind(PaymentController)
  );

  return router;
};
