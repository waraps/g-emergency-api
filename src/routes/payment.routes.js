const { Router } = require("express");

module.exports = function ({ PaymentController }) {
  const router = Router();

  router.get("/:id", PaymentController.get.bind(PaymentController));
  router.get("", PaymentController.getAll.bind(PaymentController));
  router.post("", PaymentController.create.bind(PaymentController));
  router.put("/:id", PaymentController.update.bind(PaymentController));
  router.delete("/:id", PaymentController.delete.bind(PaymentController));

  return router;
};
