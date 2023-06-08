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
     /*  User.hasMany(models.UserGenre, {
        as: "genre",
        foreignKey: "userId",
        onDelete: "cascade",
      }); */
      User.belongsToMany(models.Genre, {
        as : 'genres',
        through : 'usergenres',
        foreignKey : 'userId',
        otherKey : 'genreId'
      })

/*       User.hasMany(models.UserInstrument, {
        as: "instrument",
        foreignKey: "userId",
        onDelete: "cascade",
      }); */

      User.belongsToMany(models.Instrument, {
        as : 'instruments',
        through : 'userinstruments',
        foreignKey : 'userId',
        otherKey : 'instrumentId'
      })

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
    socialId :DataTypes.STRING,
    socialProvider :DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    identifyId: DataTypes.INTEGER,
    birthdate: DataTypes.DATE,
    phone: DataTypes.INTEGER,
    news: DataTypes.BOOLEAN,
    /* terms: DataTypes.INTEGER, */
    rolId: {type:DataTypes.INTEGER, defaultValue: 2}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};