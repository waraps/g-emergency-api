"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("QuizQuestions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quizId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Quizzes",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notNull: {
            msg: "Please enter a valid test id",
          },
        },
      },
      questionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Questions",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notNull: {
            msg: "Please enter a valid question id",
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("QuizQuestions");
  },
};
