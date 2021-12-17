const { createContainer, asClass, asFunction, asValue } = require("awilix");

// config
const config = require("./config");
const app = require(".");

// routes
const Routes = require("./routes");
const { RolRoutes, UserRoutes } = require("./routes/index.routes");

// controllers
const { RolController, UserController } = require("./controllers");

// services
const { RolService, UserService } = require("./services");

// repositories
const { RolRepository, UserRepository } = require("./repositories");

// db
const db = require("./dal/models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    RolRoutes: asFunction(RolRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  .register({
    RolController: asClass(RolController).singleton(),
    UserController: asClass(UserController).singleton(),
  })
  .register({
    RolService: asClass(RolService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    RolRepository: asClass(RolRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
