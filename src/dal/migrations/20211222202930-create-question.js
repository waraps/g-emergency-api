"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please enter a valid question",
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
    await queryInterface.dropTable("Questions");
  },
};
