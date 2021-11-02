'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projetos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  projetos.init({
    nome: DataTypes.STRING,
    inicio: DataTypes.DATEONLY,
    prazo: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'projetos',
  });
  return projetos;
};