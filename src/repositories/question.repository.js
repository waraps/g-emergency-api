const BaseRepository = require("./base.repository");

class QuestionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Question");
  }

  async createWithAnswers(entity) {
    const { answers, question, score } = entity;

    let newQuestion = await this._db["Question"].create({ question, score });
    newQuestion = newQuestion.toJSON();

    const savedAnswers = await Promise.all(
      answers.map(async (answer) => {
        let newAnswer = await this._db["Answer"].create({
          answer: answer.answer,
          isCorrect: answer.isCorrect,
          questionId: newQuestion.id,
        });
        newAnswer = newAnswer.toJSON();
        return newAnswer;
      })
    );

    return { question: newQuestion, answers: savedAnswers };
  }

  getAllWithAnswers() {
    return this._db["Question"].findAll({ include: ["Answers"] });
  }

  getWithAnswers(id) {
    return this._db["Question"].findOne({
      where: { id },
      include: ["Answers"],
    });
  }
}

module.exports = QuestionRepository;
