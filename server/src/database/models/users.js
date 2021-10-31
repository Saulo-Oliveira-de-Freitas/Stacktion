'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    
    userId: DataTypes.STRING,
    perfil: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    bio: DataTypes.STRING,
    valor: DataTypes.NUMBER,
    reset_senha: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};