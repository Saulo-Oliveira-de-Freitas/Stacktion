'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cliente.hasMany(models.projetos,{
        through: 'clienteProjeto',
        foreignKey: 'clienteId'})
    }
  };
  cliente.init({
    clienteId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    bio: DataTypes.STRING,
    resetSenha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};