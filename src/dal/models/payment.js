"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Consultation, {
        foreignKey: "id",
        target_key: "consultationId",
      });
    }
  }
  Payment.init(
    {
      receipt: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      receiptId: DataTypes.STRING,
      bank: DataTypes.STRING,
      consultationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
