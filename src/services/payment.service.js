const BaseService = require("./base.service");

class PaymentService extends BaseService {
  constructor({ PaymentRepository }) {
    super(PaymentRepository);
    this._paymentRepository = PaymentRepository;
  }
}

module.exports = PaymentService;
