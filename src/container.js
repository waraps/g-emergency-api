const { createContainer, asClass, asFunction, asValue } = require("awilix");

// config
const config = require("./config");
const app = require(".");

// routes
const Routes = require("./routes");
const { UserRoutes } = require("./routes/index.routes");

// controllers
const { UserController } = require("./controllers");

// services
const { UserService } = require("./services");

// repositories
const { UserRepository } = require("./repositories");

// models

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    config: asValue(config),
    router: asFunction(Routes).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  .register({
    UserController: asClass(UserController).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
