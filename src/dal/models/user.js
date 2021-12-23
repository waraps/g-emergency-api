"use strict";
const { Model } = require("sequelize");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: "id",
        target_key: "roleId",
      });

      User.hasMany(models.Consultation, {
        foreignKey: "patientId",
      });

      User.hasMany(models.Consultation, {
        foreignKey: "doctorId",
      });
    }

    validPassword = (password) => {
      return compareSync(password, this.password);
    };
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dni: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
      roleId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (User) => {
          const salt = genSaltSync(10);
          User.password = hashSync(User.password, salt);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
