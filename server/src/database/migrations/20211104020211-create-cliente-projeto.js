'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clienteprojetos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: "clientes", key: "id"}
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
    await queryInterface.dropTable('clienteprojetos');
  }
};