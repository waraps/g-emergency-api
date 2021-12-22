"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Answers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      answer: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please a valid answer",
          },
        },
      },
      score: {
        allowNull: false,
        type: Sequelize.FLOAT,
        validate: {
          notNull: {
            msg: "Please a valid score",
          },
          min: 1,
          max: 100,
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
            msg: "Please a valid question id",
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
    await queryInterface.dropTable("Answers");
  },
};
