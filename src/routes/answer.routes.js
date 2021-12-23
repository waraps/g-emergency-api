const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function ({ AnswerController }) {
  const router = Router();

  router.get(
    "",
    AuthMiddleware,
    AnswerController.getAll.bind(AnswerController)
  );
  router.post(
    "",
    AuthMiddleware,
    AnswerController.create.bind(AnswerController)
  );
  router.get(
    "/:id",
    AuthMiddleware,
    AnswerController.get.bind(AnswerController)
  );
  router.put(
    "/:id",
    AuthMiddleware,
    AnswerController.update.bind(AnswerController)
  );
  router.delete(
    "/:id",
    AuthMiddleware,
    AnswerController.delete.bind(AnswerController)
  );

  return router;
};
