class PaymentController {
  constructor({ PaymentService }) {
    this._paymentService = PaymentService;
  }

  async get(req, res) {
    const { id } = req.params;
    const payment = await this._paymentService.get(id);
    return res.send(payment);
  }

  async getAll(req, res) {
    const payments = await this._paymentService.getAll();
    return res.send(payments);
  }

  async create(req, res) {
    const { body } = req;
    const payment = await this._paymentService.create(body);
    return res.status(201).send(payment);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const payment = await this._paymentService.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const payment = await this._paymentService.delete(id);
    res.status(204).send();
  }
}

module.exports = PaymentController;
