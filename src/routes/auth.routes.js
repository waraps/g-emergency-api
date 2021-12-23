const { Router } = require("express");

module.exports = function ({ AuthController }) {
  const router = Router();

  router.post("/signup", AuthController.signUp.bind(AuthController));
  router.post("/signin", AuthController.signIn.bind(AuthController));

  return router;
};
