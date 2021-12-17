"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please enter a valid name",
          },
        },
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please enter a valid lastname",
          },
        },
      },
      cedula: {
        allowNull: false,
        trim: true,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please enter a valid cedula",
          },
        },
      },
      email: {
        allowNull: false,
        trim: true,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
          notNull: {
            msg: "Please enter a valid email",
          },
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please enter a valid password",
          },
        },
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          notNull: {
            msg: "Please enter a valid number phone",
          },
        },
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please enter a valid address",
          },
        },
      },
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notNull: {
            msg: "Please enter a valid roleId",
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
    await queryInterface.dropTable("Users");
  },
};
