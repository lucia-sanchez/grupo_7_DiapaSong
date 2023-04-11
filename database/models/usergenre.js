'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserGenre.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId",
        onDelete: "cascade",
      });
      UserGenre.belongsTo(models.Genre, {
        as: "genre",
        foreignKey: "genreId",
        onDelete: "cascade",
      });
    }
  }
  UserGenre.init({
    userId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserGenre',
  });
  return UserGenre;
};