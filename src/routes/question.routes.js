const { Router } = require("express");
const {
  AuthMiddleware,
  IsAdministratorOrDoctorMiddleware,
} = require("../middlewares");

module.exports = function ({ QuestionController }) {
  const router = Router();

  router.get(
    "",
    AuthMiddleware,
    QuestionController.getAll.bind(QuestionController)
  );
  router.get(
    "/with_answers",
    AuthMiddleware,
    QuestionController.getAllWithAnswers.bind(QuestionController)
  );
  router.post(
    "",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuestionController.createWithAnswers.bind(QuestionController)
  );
  router.get(
    "/:id",
    AuthMiddleware,
    QuestionController.get.bind(QuestionController)
  );
  router.get(
    "/with_answers/:id",
    AuthMiddleware,
    QuestionController.getWithAnswers.bind(QuestionController)
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
