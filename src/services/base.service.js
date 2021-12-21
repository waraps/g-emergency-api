class BaseService {
  constructor(repository) {
    this._repository = repository;
  }

  async getAll() {
    const entities = await this._repository.getAll();
    return entities;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const entity = await this._repository.get(id);

    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    return entity;
  }

  async create(entity) {
    if (Object.keys(entity).length === 0 && entity.constructor === Object) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    const createdEntity = await this._repository.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    if (Object.keys(entity).length === 0 && entity.constructor === Object) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    const currentEntity = await this._repository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    const updatedEntity = await this._repository.update(id, entity);

    return updatedEntity;
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const deletedEntity = await this._repository.delete(id);

    if (!deletedEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    return deletedEntity;
  }
}

module.exports = BaseService;
