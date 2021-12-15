const BaseService = require("./base.service");

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    this._userRepository = UserRepository;
  }
}

module.exports = UserService;
