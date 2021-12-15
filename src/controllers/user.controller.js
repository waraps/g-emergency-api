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
    const user = await this._userService.getAll();
    return res.send(user);
  }
}

module.exports = UserController;
