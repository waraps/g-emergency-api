const { JwtHelper, CommonsHelper } = require("../helpers");
const BaseService = require("./base.service");

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    this._userRepository = UserRepository;
  }

  async createUser(user) {
    user.email = user.email.replace(/\s+/g, "");
    user.phone = user.phone.replace(/\s+/g, "");
    user.dni = user.dni.replace(/\s+/g, "");
    user.isVerified = user.isVerified ? user.isVerified : false;
    const { email, phone } = user;

    if (!CommonsHelper.isValidEmail(email)) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid email format";
      throw error;
    }

    const userExist = await this.getUserByEmail(email);
    if (userExist) {
      const error = new Error();
      error.status = 400;
      error.message = "User already exist";
      throw error;
    }

    if (!CommonsHelper.isValidPhone(phone)) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid number phone format";
      throw error;
    }

    const newUser = await this._userService.create(user);
    const createdUser = newUser.toJSON();
    delete createdUser.password;
    return createdUser;
  }

  async getUserByEmail(email) {
    return await this._userRepository.getUserByEmail(email);
  }

  async getUsers() {
    const entities = await this._repository.getUsers();
    const parseEntities = entities.map((entity) => {
      return entity.toJSON();
    });
    const newEntities = parseEntities.map((entity) => {
      delete entity.password;
      return entity;
    });
    return newEntities;
  }

  async getAllWithRole() {
    const entities = await this._repository.getAllWithRole();
    const parseEntities = entities.map((entity) => {
      return entity.toJSON();
    });
    const newEntities = parseEntities.map((entity) => {
      delete entity.password;
      return entity;
    });
    return newEntities;
  }

  async getUser(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const entity = await this._repository.getUser(id);

    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    const newEntity = entity.toJSON();
    delete newEntity.password;
    console.log(newEntity);
    return newEntity;
  }

  async getWithRole(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const entity = await this._repository.getWithRole(id);

    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    const newEntity = entity.toJSON();
    delete newEntity.password;
    return newEntity;
  }
}

module.exports = UserService;
