'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Condition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Condition.hasMany(models.Product, {
        as: "products",
        foreignKey: "idCondition",
        onDelete: "cascade"
       
     });
    }
  }
  Condition.init({
    condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Condition',
  });
  return Condition;
};