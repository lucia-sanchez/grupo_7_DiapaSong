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
      Cart.belongsTo(models.Product, {
        as: "products",
        foreignKey: "idProduct",
        onDelete: "cascade"
      });
      Cart.belongsTo(models.Sale, {
        as: "sales",
        foreignKey: "saleId",
        onDelete: "cascade"
      });
      Cart.hasMany(models.StatusCart,{
        as: "cart",
        foreignKey: "saleId",
       
      })
    }
  }
  Cart.init({
    units: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    idProduct: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};