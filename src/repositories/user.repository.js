const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "User");
    this._db = db;
  }

  getUsers() {
    return this._db["User"].findAll();
  }

  getUser(id) {
    return this._db["User"].findOne({ where: { id } });
  }

  getUserByEmail(email) {
    return this._db["User"].findOne({ where: { email } });
  }

  getAllWithRole() {
    return this._db["User"].findAll({ include: ["Role"] });
  }

  getWithRole(id) {
    return this._db["User"].findOne({ where: { id }, include: ["Role"] });
  }
}

module.exports = UserRepository;
