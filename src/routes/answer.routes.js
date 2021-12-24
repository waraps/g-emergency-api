const { Router } = require("express");
const {
  AuthMiddleware,
  IsAdministratorOrDoctorMiddleware,
} = require("../middlewares");

module.exports = function ({ AnswerController }) {
  const router = Router();

  router.get(
    "",
    AuthMiddleware,
    AnswerController.getAll.bind(AnswerController)
  );
  router.post(
    "",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    AnswerController.create.bind(AnswerController)
  );
  router.get(
    "/:id",
    AuthMiddleware,
    AnswerController.get.bind(AnswerController)
  );
  router.put(
    "/:id",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    AnswerController.update.bind(AnswerController)
  );
  router.delete(
    "/:id",
    [AuthMiddleware, IsAdministratorOrDoctorMiddleware],
    AnswerController.delete.bind(AnswerController)
  );

  return router;
};
