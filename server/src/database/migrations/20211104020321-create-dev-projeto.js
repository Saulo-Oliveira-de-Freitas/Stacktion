'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('devProjetos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      devId: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        references: {model: "devs", key: "id"}
      },
      projetoId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: "projetos", key: "id"}

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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('devProjetos');
  }
};