class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await { message: `user number: ${id}` };
  }

  async getAll() {
    return await { message: "list of user" };
  }
}

module.exports = BaseRepository;
