class QuestionController {
  constructor({ QuestionService }) {
    this._questionService = QuestionService;
  }

  async get(req, res) {
    const { id } = req.params;
    const question = await this._questionService.get(id);
    return res.send(question);
  }

  async getWithAnswers(req, res) {
    const { id } = req.params;
    const question = await this._questionService.getWithAnswers(id);
    return res.send(question);
  }

  async getAll(req, res) {
    const questions = await this._questionService.getAll();
    return res.send(questions);
  }

  async getAllWithAnswers(req, res) {
    const questions = await this._questionService.getAllWithAnswers();
    return res.send(questions);
  }

  async create(req, res) {
    const { body } = req;
    const question = await this._questionService.create(body);
    return res.status(201).send(question);
  }

  async createWithAnswers(req, res) {
    const { body } = req;
    const question = await this._questionService.createWithAnswers(body);
    return res.status(201).send(question);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const question = await this._questionService.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const question = await this._questionService.delete(id);
    res.status(204).send();
  }
}

module.exports = QuestionController;
