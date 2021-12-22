const { createContainer, asClass, asFunction, asValue } = require("awilix");

// config
const config = require("./config");
const app = require(".");

// routes
const Routes = require("./routes");
const {
  RolRoutes,
  UserRoutes,
  QuestionRoutes,
  AnswerRoutes,
  ConsultationRoutes,
  PaymentRoutes,
} = require("./routes/index.routes");

// controllers
const {
  RolController,
  UserController,
  QuestionController,
  AnswerController,
  ConsultationController,
  PaymentController,
} = require("./controllers");

// services
const {
  RolService,
  UserService,
  QuestionService,
  AnswerService,
  ConsultationService,
  PaymentService,
} = require("./services");

// repositories
const {
  RolRepository,
  UserRepository,
  QuestionRepository,
  AnswerRepository,
  ConsultationRepository,
  PaymentRepository,
} = require("./repositories");

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
    QuestionRoutes: asFunction(QuestionRoutes).singleton(),
    AnswerRoutes: asFunction(AnswerRoutes).singleton(),
    ConsultationRoutes: asFunction(ConsultationRoutes).singleton(),
    PaymentRoutes: asFunction(PaymentRoutes).singleton(),
  })
  .register({
    RolController: asClass(RolController).singleton(),
    UserController: asClass(UserController).singleton(),
    QuestionController: asClass(QuestionController).singleton(),
    AnswerController: asClass(AnswerController).singleton(),
    ConsultationController: asClass(ConsultationController).singleton(),
    PaymentController: asClass(PaymentController).singleton(),
  })
  .register({
    RolService: asClass(RolService).singleton(),
    UserService: asClass(UserService).singleton(),
    QuestionService: asClass(QuestionService).singleton(),
    AnswerService: asClass(AnswerService).singleton(),
    ConsultationService: asClass(ConsultationService).singleton(),
    PaymentService: asClass(PaymentService).singleton(),
  })
  .register({
    RolRepository: asClass(RolRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
    QuestionRepository: asClass(QuestionRepository).singleton(),
    AnswerRepository: asClass(AnswerRepository).singleton(),
    ConsultationRepository: asClass(ConsultationRepository).singleton(),
    PaymentRepository: asClass(PaymentRepository).singleton(),
  });

module.exports = container;
