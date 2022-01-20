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
      "Answers",
      [
        {
          answer: "respuesta 1.1",
          isCorrect: true,
          questionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "respuesta 1.2",
          isCorrect: false,
          questionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "respuesta 2.1",
          isCorrect: false,
          questionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "respuesta 2.2",
          isCorrect: true,
          questionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "respuesta 3.1",
          isCorrect: true,
          questionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "respuesta 3.2",
          isCorrect: false,
          questionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "respuesta 4.1",
          isCorrect: false,
          questionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answer: "respuesta 4.2",
          isCorrect: true,
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
    return queryInterface.bulkDelete("Answers", null, {});
  },
};
