'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestQuestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TestQuestions.init({
    testId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TestQuestions',
  });
  return TestQuestions;
};