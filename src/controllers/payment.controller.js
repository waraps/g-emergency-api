const path = require("path");

class PaymentController {
  constructor({ PaymentService }) {
    this._paymentService = PaymentService;
  }

  async get(req, res) {
    const { id } = req.params;
    const payment = await this._paymentService.get(id);
    const responsePayment = {
      id: payment.id,
      receipt: path.join(__dirname, "../../", payment.receipt),
      amount: payment.amount,
      receiptId: payment.receiptId,
      bank: payment.bank,
      consultationId: payment.consultationId,
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
    };
    return res.send(responsePayment);
  }

  async getAll(req, res) {
    const payments = await this._paymentService.getAll();
    return res.send(payments);
  }

  async create(req, res) {
    const { amount, receiptId, bank, consultationId } = req.body;
    const newPayment = {
      receipt: req.file.path,
      amount,
      receiptId,
      bank,
      consultationId,
    };
    const payment = await this._paymentService.create(newPayment);
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
