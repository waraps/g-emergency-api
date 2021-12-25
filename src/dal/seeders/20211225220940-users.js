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
      "Users",
      [
        {
          firstName: "Galenos",
          lastName: "Clinica Veterinaria",
          dni: "0000000",
          phone: "02815554422",
          address: "Lecheria, Anzoategui, Venezuela",
          email: "admin@galenos.com",
          password: "123456",
          isVerified: true,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Doctor",
          lastName: "Galenos",
          dni: "1000000",
          phone: "02815554422",
          address: "Lecheria, Anzoategui, Venezuela",
          email: "doctor@galenos.com",
          password: "123456",
          isVerified: true,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Paciente",
          lastName: "Galenos",
          dni: "2000000",
          phone: "04245554422",
          address: "Lecheria, Anzoategui, Venezuela",
          email: "patient@galenos.com",
          password: "123456",
          isVerified: true,
          roleId: 3,
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
