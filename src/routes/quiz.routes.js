const { Router } = require("express");
const {
  AuthMiddleware,
  IsAdministratorOrDoctorMiddleware,
} = require("../middlewares");

module.exports = function ({ QuizController }) {
  const router = Router();

  router.get("", AuthMiddleware, QuizController.getAll.bind(QuizController));
  router.post(
    "",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuizController.create.bind(QuizController)
  );
  router.post(
    "/with_questions",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuizController.createWithQuestions.bind(QuizController)
  );
  router.get("/:id", AuthMiddleware, QuizController.get.bind(QuizController));
  router.get(
    "/raw/:id",
    AuthMiddleware,
    QuizController.getCompleteQuiz.bind(QuizController)
  );
  router.get(
    "/complete/:id",
    AuthMiddleware,
    QuizController.getQuiz.bind(QuizController)
  );
  router.put(
    "/:id",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuizController.update.bind(QuizController)
  );
  router.delete(
    "/:id",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    QuizController.delete.bind(QuizController)
  );

  return router;
};
