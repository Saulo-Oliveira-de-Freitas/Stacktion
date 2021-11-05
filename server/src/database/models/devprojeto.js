'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class devprojeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  devprojeto.init({
    devId: DataTypes.INTEGER,
    projetoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'devprojeto',
  });
  return devprojeto;
};