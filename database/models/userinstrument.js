'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserInstrument.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId",
        onDelete: "cascade",
      });
      UserInstrument.belongsTo(models.Instrument, {
        as: "instrument",
        foreignKey: "instrumentId",
        onDelete: "cascade",
      });
    }
  }
  UserInstrument.init({
    userId: DataTypes.INTEGER,
    instrumentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserInstrument',
  });
  return UserInstrument;
};