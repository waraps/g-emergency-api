const BaseService = require("./base.service");

class QuestionService extends BaseService {
  constructor({ QuestionRepository }) {
    super(QuestionRepository);
    this._questionRepository = QuestionRepository;
  }

  async createWithAnswers(question) {
    if (Object.keys(question).length === 0 && question.constructor === Object) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    const createdEntity = await this._repository.createWithAnswers(question);
    return createdEntity;
  }

  async getAllWithAnswers() {
    const entities = await this._repository.getAllWithAnswers();
    return entities;
  }

  async getWithAnswers(id) {
    const entity = await this._repository.getWithAnswers(id);
    return entity;
  }
}

module.exports = QuestionService;
