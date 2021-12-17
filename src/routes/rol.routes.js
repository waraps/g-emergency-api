const { Router } = require("express");

module.exports = function ({ RolController }) {
  const router = Router();

  router.get("/:id", RolController.get.bind(RolController));
  router.get("", RolController.getAll.bind(RolController));
  router.post("", RolController.create.bind(RolController));
  router.put("/:id", RolController.update.bind(RolController));
  router.delete("/:id", RolController.delete.bind(RolController));

  return router;
};
