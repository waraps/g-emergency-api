const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "User");
    this._db = db;
  }

  getUserByEmail(email) {
    return this._db["User"].findOne({ where: { email } });
  }
}

module.exports = UserRepository;
