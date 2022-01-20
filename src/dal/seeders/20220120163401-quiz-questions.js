"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "QuizQuestions",
      [
        {
          quizId: 1,
          questionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 1,
          questionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 1,
          questionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quizId: 1,
          questionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("QuizQuestions", null, {});
  },
};
