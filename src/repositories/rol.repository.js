const BaseRepository = require("./base.repository");

class RolRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Role");
  }
}

module.exports = RolRepository;
