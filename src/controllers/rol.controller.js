class RolController {
  constructor({ RolService }) {
    this._rolService = RolService;
  }

  async getAll(req, res) {
    const roles = await this._rolService.getAll();
    return res.send(roles);
  }

  async getAllWithUsers(req, res) {
    const roles = await this._rolService.getAllWithUsers();
    return res.send(roles);
  }

  async get(req, res) {
    const { id } = req.params;
    const rol = await this._rolService.get(id);
    return res.send(rol);
  }

  async getWithUser(req, res) {
    const { id } = req.params;
    const rol = await this._rolService.getWithUser(id);
    return res.send(rol);
  }

  async create(req, res) {
    const { body } = req;
    const rol = await this._rolService.create(body);
    return res.status(201).send(rol);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const rol = await this._rolService.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const rol = await this._rolService.delete(id);
    res.status(204).send();
  }
}

module.exports = RolController;
