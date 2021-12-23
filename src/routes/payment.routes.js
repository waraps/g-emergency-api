const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

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
    AuthMiddleware,
    PaymentController.update.bind(PaymentController)
  );
  router.delete(
    "/:id",
    AuthMiddleware,
    PaymentController.delete.bind(PaymentController)
  );

  return router;
};
