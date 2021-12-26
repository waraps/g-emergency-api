const BaseRepository = require("./base.repository");

class RolRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Role");
  }

  getAllWithUsers() {
    return this._db["Role"].findAll({ include: ["Users"] });
  }

  getWithUser(id) {
    return this._db[this.entity].findOne({ where: { id }, include: ["Users"] });
  }
}

module.exports = RolRepository;
