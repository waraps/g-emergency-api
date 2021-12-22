const BaseService = require("./base.service");

class QuestionService extends BaseService {
  constructor({ QuestionRepository }) {
    super(QuestionRepository);
    this._questionRepository = QuestionRepository;
  }
}

module.exports = QuestionService;
