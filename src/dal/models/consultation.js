"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Consultation.belongsTo(models.User);
      Consultation.hasOne(models.Payment, {
        foreignKey: "consultationId",
        as: "payment",
        onDelete: "CASCADE",
      });
    }
  }
  Consultation.init(
    {
      description: DataTypes.STRING,
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Consultation",
    }
  );
  return Consultation;
};
