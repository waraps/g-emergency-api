const BaseService = require("./base.service");

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    this._userRepository = UserRepository;
  }

  async getUserByEmail(email) {
    return await this._userRepository.getUserByEmail(email);
  }
}

module.exports = UserService;
