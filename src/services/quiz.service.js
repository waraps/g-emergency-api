const BaseService = require("./base.service");

class QuizService extends BaseService {
  constructor({ QuizRepository, QuestionRepository }) {
    super(QuizRepository);
    this._quizRepository = QuizRepository;
    this._questionRepository = QuestionRepository;
  }

  async createWithQuestions(quiz) {
    if (Object.keys(quiz).length === 0 && quiz.constructor === Object) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity must be sent";
      throw error;
    }

    const { questions } = quiz;

    const selectedQuestions = await Promise.all(
      questions.map(async (question) => {
        return await this._questionRepository.get(question);
      })
    );

    const totalScore = selectedQuestions
      .map((q) => {
        return q.score;
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    if (Number(parseFloat(totalScore).toFixed(0)) === 100) {
      const createdEntity = await this._quizRepository.createWithQuestions(
        quiz
      );
      return createdEntity;
    } else {
      const error = new Error();
      error.status = 400;
      error.message = "Quiz should have a total score equal to 100 pts";
      throw error;
    }
  }

  async getQuiz(id) {
    const entity = await this._quizRepository.getQuiz(id);
    return entity;
  }
}

module.exports = QuizService;
