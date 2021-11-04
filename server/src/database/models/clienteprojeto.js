'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clienteProjeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  clienteProjeto.init({
    clienteId: DataTypes.NUMBER,
    projetosId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'clienteProjeto',
  });
  return clienteProjeto;
};