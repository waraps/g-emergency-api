const BaseService = require("./base.service");

class RolService extends BaseService {
  constructor({ RolRepository }) {
    super(RolRepository);
    this._rolRepository = RolRepository;
  }
}

module.exports = RolService;
