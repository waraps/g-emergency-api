class AnswerController {
  constructor({ AnswerService }) {
    this._answerService = AnswerService;
  }

  async get(req, res) {
    const { id } = req.params;
    const answer = await this._answerService.get(id);
    return res.send(answer);
  }

  async getAll(req, res) {
    const answers = await this._answerService.getAll();
    return res.send(answers);
  }

  async create(req, res) {
    const { body } = req;
    const answer = await this._answerService.create(body);
    return res.status(201).send(answer);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const answer = await this._answerService.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const answer = await this._answerService.delete(id);
    res.status(204).send();
  }
}

module.exports = AnswerController;
