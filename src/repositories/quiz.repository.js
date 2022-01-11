const BaseRepository = require("./base.repository");

class QuizRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Quiz");
  }

  async createWithQuestions(entity) {
    const { title, questions } = entity;

    const quiz = await this._db["Quiz"].create({ title });

    const mappedQuestions = questions.map((question) => {
      return {
        quizId: quiz.id,
        questionId: question,
      };
    });

    const quizQuestions = await this._db["QuizQuestions"].bulkCreate(
      mappedQuestions
    );
    return { id: quiz.id, title: quiz.title, questions: quizQuestions };
  }

  async getQuiz(id) {
    return this._db["Quiz"].findOne({
      where: { id },
      include: [
        {
          model: this._db["Question"],
          include: [
            {
              model: this._db["Answer"],
            },
          ],
        },
      ],
    });
  }
}

module.exports = QuizRepository;
