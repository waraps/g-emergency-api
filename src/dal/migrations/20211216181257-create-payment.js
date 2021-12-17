"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      receipt: {
        allowNull: false,
        trim: true,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isUrl: true,
        },
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      reference: {
        allowNull: false,
        trime: true,
        type: Sequelize.STRING,
      },
      bank: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      consultationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Payments");
  },
};
