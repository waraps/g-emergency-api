const { Router } = require("express");

module.exports = function ({ QuestionController }) {
  const router = Router();

  router.get("/:id", QuestionController.get.bind(QuestionController));
  router.get("", QuestionController.getAll.bind(QuestionController));
  router.post("", QuestionController.create.bind(QuestionController));
  router.put("/:id", QuestionController.update.bind(QuestionController));
  router.delete("/:id", QuestionController.delete.bind(QuestionController));

  return router;
};
