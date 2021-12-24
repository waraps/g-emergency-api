module.exports = {
  NotFoundMiddleware: require("./not-found.middleware"),
  ErrorMiddleware: require("./error.middleware"),
  AuthMiddleware: require("./auth.middleware"),
  IsAdministratorMiddleware: require("./isAdministrator.middleware"),
  IsAdministratorOrDoctorMiddleware: require("./isAdministratorOrDoctor.middleware"),
};
