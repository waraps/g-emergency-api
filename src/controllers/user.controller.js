class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
  }

  async get(req, res) {
    const { id } = req.params;
    const user = await this._userService.get(id);
    return res.send(user);
  }

  async getAll(req, res) {
    const users = await this._userService.getAll();
    return res.send(users);
  }

  async getUser(req, res) {
    const { id } = req.params;
    const user = await this._userService.getUser(id);
    return res.send(user);
  }

  async getUsers(req, res) {
    const users = await this._userService.getUsers();
    return res.send(users);
  }

  async getAllWithRole(req, res) {
    const users = await this._userService.getAllWithRole();
    return res.send(users);
  }

  async getWithRole(req, res) {
    const { id } = req.params;
    const user = await this._userService.getWithRole(id);
    return res.send(user);
  }

  async createUser(req, res) {
    const { body } = req;
    const user = await this._userService.createUser(body);
    return res.status(201).send(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const user = await this._userService.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const user = await this._userService.delete(id);
    res.status(204).send();
  }
}

module.exports = UserController;
