"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Test.belongsToMany(models.Question, {
        through: "TestQuestions",
        foreignKey: "testId",
      });
    }
  }
  Test.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Test",
    }
  );
  return Test;
};
