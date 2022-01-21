const { MailerHelper } = require("../helpers");

const BaseService = require("./base.service");

class PaymentService extends BaseService {
  constructor({ PaymentRepository }) {
    super(PaymentRepository);
    this._paymentRepository = PaymentRepository;
  }

  async createPayment(entity) {
    if (Object.keys(entity).length === 0 && entity.constructor === Object) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    const createdEntity = await this._paymentRepository.create(entity);
    const mailResponse = await MailerHelper.sendMail();
    console.log(mailResponse);

    return createdEntity;
  }
}

module.exports = PaymentService;
