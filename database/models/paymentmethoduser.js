'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethodUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentMethodUser.belongsTo(models.User, {
        as: "user",
        foreignKey: "unserId",
        onDelete: "cascade",
      });
      PaymentMethodUser.belongsTo(models.PaymentMethod, {
        as: "paymentMethod",
        foreignKey: "paymentMethodId",
        onDelete: "cascade",
      });
    }
  }
  PaymentMethodUser.init({
    unserId: DataTypes.INTEGER,
    paymentMethodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PaymentMethodUser',
  });
  return PaymentMethodUser;
};