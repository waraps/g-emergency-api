"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer.belongsTo(models.Question, {
        foreignKey: "id",
        target_key: "questionId",
      });
    }
  }
  Answer.init(
    {
      answer: DataTypes.STRING,
      isCorrect: DataTypes.BOOLEAN,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
