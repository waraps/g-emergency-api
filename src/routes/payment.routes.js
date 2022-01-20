const { Router } = require("express");
const {
  AuthMiddleware,
  IsAdministratorMiddleware,
  UploadImageMiddleware,
} = require("../middlewares");

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
    [AuthMiddleware, UploadImageMiddleware],
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
