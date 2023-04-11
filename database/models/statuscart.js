'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StatusCart.belongsTo(models.Status,{
        as: "status",
        foreignKey: "statusId",
        onDelete: "cascade",
      })
      StatusCart.belongsTo(models.Cart,{
        as: "cart",
        foreignKey: "cartId",
        onDelete: "cascade",
      })
      StatusCart.belongsTo(models.Sale,{
        as: "sale",
        foreignKey: "saleId",
        onDelete: "cascade",
      })
      
    }
  }
  StatusCart.init({
    statusId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StatusCart',
  });
  return StatusCart;
};