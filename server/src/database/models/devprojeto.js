'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class devProjeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  devProjeto.init({
    devId: DataTypes.NUMBER,
    projetosId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'devProjeto',
  });
  return devProjeto;
};