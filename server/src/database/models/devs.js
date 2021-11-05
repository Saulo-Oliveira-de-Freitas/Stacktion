'use strict';
module.exports = (sequelize, DataTypes) => {
  const devs = sequelize.define('devs', {
    devId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    bio: DataTypes.STRING,
    valor: DataTypes.NUMBER,
    resetSenha: DataTypes.STRING,
    
  }, {});
  devs.associate = function(models) {
    // associations can be defined here
    
    devs.belongsToMany(models.projetos, {through: 'devprojetos'})
  };
  return devs;
};