'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Instrument.hasMany(models.UserInstrument, {
        as: "userInstrument",
        foreignKey: "instrumentId",
        onDelete: "cascade",
      });
    }
  }
  Instrument.init({
    instrument: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instrument',
  });
  return Instrument;
};