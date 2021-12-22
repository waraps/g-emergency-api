const { Router } = require("express");

module.exports = function ({ ConsultationController }) {
  const router = Router();

  router.get("/:id", ConsultationController.get.bind(ConsultationController));
  router.get("", ConsultationController.getAll.bind(ConsultationController));
  router.post("", ConsultationController.create.bind(ConsultationController));
  router.put(
    "/:id",
    ConsultationController.update.bind(ConsultationController)
  );
  router.delete(
    "/:id",
    ConsultationController.delete.bind(ConsultationController)
  );

  return router;
};
