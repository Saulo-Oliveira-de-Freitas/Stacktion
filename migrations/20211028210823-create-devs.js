'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('devs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      devId: {
      
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        unique:true,
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      telefone:{
        type:Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      valor:{
        type: Sequelize.FLOAT
      },
      resetSenha: {
        type: Sequelize.STRING
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('devs');
  }
};