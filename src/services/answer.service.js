const BaseService = require("./base.service");

class AnswerService extends BaseService {
  constructor({ AnswerRepository }) {
    super(AnswerRepository);
    this._answerRepository = AnswerRepository;
  }
}

module.exports = AnswerService;
