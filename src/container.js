const { createContainer, asClass, asFunction, asValue } = require("awilix");

// config
const config = require("./config");
const app = require(".");

// routes
const Routes = require("./routes");
const {
  AuthRoutes,
  RolRoutes,
  UserRoutes,
  QuestionRoutes,
  AnswerRoutes,
  QuizRoutes,
  ConsultationRoutes,
  PaymentRoutes,
} = require("./routes/index.routes");

// controllers
const {
  AuthController,
  RolController,
  UserController,
  QuestionController,
  AnswerController,
  QuizController,
  ConsultationController,
  PaymentController,
} = require("./controllers");

// services
const {
  AuthService,
  RolService,
  UserService,
  QuestionService,
  AnswerService,
  QuizService,
  ConsultationService,
  PaymentService,
} = require("./services");

// repositories
const {
  RolRepository,
  UserRepository,
  QuestionRepository,
  AnswerRepository,
  QuizRepository,
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
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    RolRoutes: asFunction(RolRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    QuestionRoutes: asFunction(QuestionRoutes).singleton(),
    AnswerRoutes: asFunction(AnswerRoutes).singleton(),
    QuizRoutes: asFunction(QuizRoutes).singleton(),
    ConsultationRoutes: asFunction(ConsultationRoutes).singleton(),
    PaymentRoutes: asFunction(PaymentRoutes).singleton(),
  })
  .register({
    AuthController: asClass(AuthController).singleton(),
    RolController: asClass(RolController).singleton(),
    UserController: asClass(UserController).singleton(),
    QuestionController: asClass(QuestionController).singleton(),
    AnswerController: asClass(AnswerController).singleton(),
    QuizController: asClass(QuizController).singleton(),
    ConsultationController: asClass(ConsultationController).singleton(),
    PaymentController: asClass(PaymentController).singleton(),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    RolService: asClass(RolService).singleton(),
    UserService: asClass(UserService).singleton(),
    QuestionService: asClass(QuestionService).singleton(),
    AnswerService: asClass(AnswerService).singleton(),
    QuizService: asClass(QuizService).singleton(),
    ConsultationService: asClass(ConsultationService).singleton(),
    PaymentService: asClass(PaymentService).singleton(),
  })
  .register({
    RolRepository: asClass(RolRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
    QuestionRepository: asClass(QuestionRepository).singleton(),
    AnswerRepository: asClass(AnswerRepository).singleton(),
    QuizRepository: asClass(QuizRepository).singleton(),
    ConsultationRepository: asClass(ConsultationRepository).singleton(),
    PaymentRepository: asClass(PaymentRepository).singleton(),
  });

module.exports = container;
