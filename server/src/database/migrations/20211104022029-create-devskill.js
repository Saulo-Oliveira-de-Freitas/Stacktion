'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('devskills', {
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
      skillId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {model: "skills", key: "id"}

      },
      skillLevel:{
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('devskills');
  }
};