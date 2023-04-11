'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sale.belongsTo(models.User,{
        as: "user",
        foreignKey: "userId",
        onDelete: "cascade",
      })
      Sale.belongsTo(models.PaymentMethod,{
        as: "paymentMethod",
        foreignKey: "paymentMethodId",
        onDelete: "cascade",
      })
      Sale.hasMany(models.Cart, {
        as: "cart",
        foreignKey: "saleId",
        onDelete: "cascade",
      });
      Sale.hasMany(models.StatusCart,{
        as: "statuscart",
        foreignKey: "saleId",
        onDelete: "cascade",
      })

    }
  }
  Sale.init({
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    paymentMethodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};