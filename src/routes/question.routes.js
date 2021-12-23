const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

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
    AuthMiddleware,
    QuestionController.create.bind(QuestionController)
  );
  router.put(
    "/:id",
    AuthMiddleware,
    QuestionController.update.bind(QuestionController)
  );
  router.delete(
    "/:id",
    AuthMiddleware,
    QuestionController.delete.bind(QuestionController)
  );

  return router;
};
