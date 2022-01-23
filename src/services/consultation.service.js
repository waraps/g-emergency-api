const BaseService = require("./base.service");

class ConsultationService extends BaseService {
  constructor({ ConsultationRepository }) {
    super(ConsultationRepository);
    this._consultationRepository = ConsultationRepository;
  }

  async getWithPayment(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const entity = await this._consultationRepository.getWithPayment(id);

    if (!entity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    return entity;
  }
}

module.exports = ConsultationService;
