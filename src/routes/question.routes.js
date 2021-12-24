const { Router } = require("express");
const {
  AuthMiddleware,
  IsAdministratorOrDoctorMiddleware,
} = require("../middlewares");

module.exports = function ({ QuestionController }) {
  const router = Router();

  router.get(
    "/:id",
    AuthMiddleware,
    QuestionController.get.bind(QuestionController)
  );
  router.get(
    "",
    AuthMiddleware,
    QuestionController.getAll.bind(QuestionController)
  );
  router.post(
    "",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuestionController.create.bind(QuestionController)
  );
  router.put(
    "/:id",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuestionController.update.bind(QuestionController)
  );
  router.delete(
    "/:id",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuestionController.delete.bind(QuestionController)
  );

  return router;
};
