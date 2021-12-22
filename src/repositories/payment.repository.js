const BaseRepository = require("./base.repository");

class PaymentRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Payment");
  }
}

module.exports = PaymentRepository;
