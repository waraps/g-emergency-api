const BaseService = require("./base.service");

class AnswerService extends BaseService {
  constructor({ AnswerRepository }) {
    super(AnswerRepository);
    this._answerRepository = AnswerRepository;
  }

  async getAllWithQuestion() {
    const entities = await this._answerRepository.getAllWithQuestion();
    return entities;
  }

  async getWithQuestion(id) {
    const entity = await this._answerRepository.getWithQuestion(id);
    return entity;
  }
}

module.exports = AnswerService;
