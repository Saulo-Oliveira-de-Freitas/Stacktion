'use strict';
const {
  Model
} = require('sequelize');
const devs = require('./devs');
module.exports = (sequelize, DataTypes) => {
  class projetos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      projetos.belongsToMany(models.devs, {through: 'devProjeto',foreignKey: 'projetoId'});
      projetos.belongsToMany(models.cliente, {through: 'clienteProjeto',foreignKey: 'projetoId'});
    }
  };
  projetos.init({
    nome: DataTypes.STRING,
    inicio: DataTypes.DATEONLY,
    prazo: DataTypes.STRING,
    valor: DataTypes.NUMBER 
  }, 
  {
    sequelize,
    modelName: 'projetos',
  });
  return projetos;
};