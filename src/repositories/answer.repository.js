const BaseRepository = require("./base.repository");

class AnswerRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Answer");
  }
}

module.exports = AnswerRepository;
