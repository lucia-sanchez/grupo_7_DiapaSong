'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol, {
        as: "rol",
        foreignKey: "rolId",
        onDelete: "cascade",
      });
      User.hasMany(models.UserGenre, {
        as: "genre",
        foreignKey: "userId",
        onDelete: "cascade",
      });

      User.hasMany(models.UserInstrument, {
        as: "instrument",
        foreignKey: "userId",
        onDelete: "cascade",
      });
      User.hasMany(models.PaymentMethodUser, {
        as: "paymentMethod",
        foreignKey: "paymentMethodId",
        onDelete: "cascade",
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    identifyId: DataTypes.INTEGER,
    birthdate: DataTypes.DATE,
    phone: DataTypes.INTEGER,
    news: DataTypes.INTEGER,
    terms: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};