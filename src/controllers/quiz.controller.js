class QuizController {
  constructor({ QuizService }) {
    this._quizService = QuizService;
  }

  async get(req, res) {
    const { id } = req.params;
    const quiz = await this._quizService.get(id);
    return res.send(quiz);
  }

  async getCompleteQuiz(req, res) {
    const { id } = req.params;
    const quiz = await this._quizService.getQuiz(id);
    return res.send(quiz);
  }

  async getQuiz(req, res) {
    const { id } = req.params;
    const quiz = await this._quizService.getQuiz(id);
    const { Questions } = quiz;
    const formattedQuestions = Questions.map((question) => {
      return {
        id: question.id,
        question: question.question,
        score: question.score,
        createdAt: question.createdAt,
        updatedAt: question.updatedAt,
        answers: question.Answers.map((answer) => {
          return {
            id: answer.id,
            answer: answer.answer,
            questionId: answer.questionId,
            createdAt: answer.createdAt,
            updatedAt: answer.updatedAt,
          };
        }),
      };
    });
    const formattedQuiz = {
      id: quiz.id,
      title: quiz.title,
      createdAt: quiz.createdAt,
      updatedAt: quiz.updatedAt,
      questions: formattedQuestions,
    };
    return res.send(formattedQuiz);
  }

  async getAll(req, res) {
    const quizzes = await this._quizService.getAll();
    return res.send(quizzes);
  }

  async create(req, res) {
    const { body } = req;
    const quiz = await this._quizService.create(body);
    return res.status(201).send(quiz);
  }

  async createWithQuestions(req, res) {
    const { body } = req;
    const quiz = await this._quizService.createWithQuestions(body);
    return res.status(201).send(quiz);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const quiz = await this._quizService.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const quiz = await this._quizService.delete(id);
    res.status(204).send();
  }
}

module.exports = QuizController;
