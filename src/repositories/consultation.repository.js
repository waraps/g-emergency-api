const BaseRepository = require("./base.repository");

class ConsultationRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Consultation");
  }

  getWithPayment(id) {
    return this._db[this.entity].findOne({
      where: { id },
      include: ["Payment"],
    });
  }
}

module.exports = ConsultationRepository;
