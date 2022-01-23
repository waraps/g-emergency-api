const { SMSHelper, MailerHelper } = require("../helpers");

const BaseService = require("./base.service");

class PaymentService extends BaseService {
  constructor({ PaymentRepository, ConsultationRepository, UserRepository }) {
    super(PaymentRepository);
    this._paymentRepository = PaymentRepository;
    this._consultationRepository = ConsultationRepository;
    this._userRepository = UserRepository;
  }

  async createPayment(entity) {
    if (Object.keys(entity).length === 0 && entity.constructor === Object) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    const createdEntity = await this._paymentRepository.create(entity);
    const consultation = await this._consultationRepository.getWithPayment(
      createdEntity.consultationId
    );
    const user = await this._userRepository.getUser(consultation.patientId);

    const mailInfo = {
      fullname: `${user.firstName} ${user.lastName}`,
      dni: user.dni,
      phone: user.phone,
      email: user.email,
      address: user.address,
      bank: createdEntity.bank,
      receiptId: createdEntity.receiptId,
      receipt: createdEntity.receipt,
      consultation: consultation.id,
      description: consultation.description,
    };

    await SMSHelper.sendSMS(mailInfo);
    await MailerHelper.sendMail(mailInfo);

    return mailInfo;
  }
}

module.exports = PaymentService;
