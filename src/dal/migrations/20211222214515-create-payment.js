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
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please a valid url receipt",
          },
          isUrl: true,
        },
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT,
        validate: {
          notNull: {
            msg: "Please a valid amount",
          },
        },
      },
      receiptId: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notNull: {
            msg: "Please a valid receipt id",
          },
        },
      },
      bank: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please a valid bank name",
          },
        },
      },
      consultationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Consultations",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notNull: {
            msg: "Please a valid consultation id",
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
    await queryInterface.dropTable("Payments");
  },
};
