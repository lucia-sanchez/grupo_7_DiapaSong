'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.hasMany(models.Product, {
        as: "product",
        foreignKey: "productId",
        onDelete: "cascade",
      });
      Cart.belongsTo(models.Sale, {
        as: "sale",
        foreignKey: "saleId",
        onDelete: "cascade",
      });
      Cart.hasMany(models.StatusCart,{
        as: "cart",
        foreignKey: "saleId",
        onDelete: "cascade",
      })
    }
  }
  Cart.init({
    units: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    productId: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};