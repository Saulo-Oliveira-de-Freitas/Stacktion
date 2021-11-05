'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class devskills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  devskills.init({
    devId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER,
    skillLevel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'devskills',
  });
  return devskills;
};