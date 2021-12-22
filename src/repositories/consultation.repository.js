const BaseRepository = require("./base.repository");

class ConsultationRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Consultation");
  }
}

module.exports = ConsultationRepository;
