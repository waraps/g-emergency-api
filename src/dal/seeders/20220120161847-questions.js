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
      "Questions",
      [
        {
          question: "Pregunta 1",
          score: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Pregunta 2",
          score: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Pregunta 3",
          score: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Pregunta 4",
          score: 25,
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
    return queryInterface.bulkDelete("Questions", null, {});
  },
};
