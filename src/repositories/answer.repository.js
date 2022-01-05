const BaseRepository = require("./base.repository");

class AnswerRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Answer");
  }

  getAllWithQuestion() {
    return this._db["Answer"].findAll({include: ["Question"]});
  }

  getWithQuestion(id) {
    return this._db["Answer"].findOne({
      where: { id },
      include: ["Question"],
    });
  }
}

module.exports = AnswerRepository;
