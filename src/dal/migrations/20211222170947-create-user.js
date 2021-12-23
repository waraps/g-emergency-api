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
            msg: "Please enter your First Name",
          },
        },
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: "Please enter a valid Last Name",
          },
        },
      },
      dni: {
        allowNull: false,
        type: Sequelize.STRING,
        trim: true,
        validate: {
          notNull: {
            msg: "Please enter a valid dni",
          },
        },
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
        trim: true,
        validate: {
          notNull: {
            msg: "Please enter a valid phone number",
          },
          is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
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
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        trim: true,
        validate: {
          notNull: {
            msg: "Please enter a valid email",
          },
          isEmail: {
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
      isVerified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        validate: {
          notNull: {
            msg: "Please enter a valid password",
          },
        },
      },
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notNull: {
            msg: "Please a valid role id",
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
