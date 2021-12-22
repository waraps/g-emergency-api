const BaseService = require("./base.service");

class ConsultationService extends BaseService {
  constructor({ ConsultationRepository }) {
    super(ConsultationRepository);
    this._consultationRepository = ConsultationRepository;
  }
}

module.exports = ConsultationService;
