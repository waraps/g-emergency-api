const BaseService = require("./base.service");

class RolService extends BaseService {
  constructor({ RolRepository }) {
    super(RolRepository);
    this._rolRepository = RolRepository;
  }

  async getAllWithUsers() {
    const entities = await this._repository.getAllWithUsers();
    const entitiesMapped = entities.map((entity) => {
      return {
        ...entity.toJSON(),
        Users: entity.Users.map((user) => {
          const newUser = user.toJSON();
          delete newUser.password;
          return newUser;
        }),
      };
    });
    return entitiesMapped;
  }

  async getWithUser(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const entity = await this._repository.getWithUser(id);

    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    const newEntity = entity.toJSON();

    newEntity.Users = newEntity.Users.map((user) => {
      delete user.password;
      return user;
    });

    return newEntity;
  }
}

module.exports = RolService;
