const { Router } = require("express");

module.exports = function ({ AnswerController }) {
  const router = Router();

  router.get("", AnswerController.getAll.bind(AnswerController));
  router.post("", AnswerController.create.bind(AnswerController));
  router.get("/:id", AnswerController.get.bind(AnswerController));
  router.put("/:id", AnswerController.update.bind(AnswerController));
  router.delete("/:id", AnswerController.delete.bind(AnswerController));

  return router;
};
