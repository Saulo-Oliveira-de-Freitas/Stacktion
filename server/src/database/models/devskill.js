'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class devskill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  devskill.init({
    devId: DataTypes.NUMBER,
    skillId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'devskill',
  });
  return devskill;
};