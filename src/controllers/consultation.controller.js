class ConsultationController {
  constructor({ ConsultationService }) {
    this._consultationService = ConsultationService;
  }

  async get(req, res) {
    const { id } = req.params;
    const consultation = await this._consultationService.getWithPayment(id);
    return res.send(consultation);
  }

  async getAll(req, res) {
    const consultations = await this._consultationService.getAll();
    return res.send(consultations);
  }

  async create(req, res) {
    const { body } = req;
    const consultation = await this._consultationService.create(body);
    return res.status(201).send(consultation);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const consultation = await this._consultationService.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const consultation = await this._consultationService.delete(id);
    res.status(204).send();
  }
}

module.exports = ConsultationController;
