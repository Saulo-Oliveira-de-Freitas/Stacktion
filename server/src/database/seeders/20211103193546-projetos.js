'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Projetos', [{
       nome: "Projeto App de Entrega",
       inicio:"",
       createdAt: newDate(),
       updatedAt: newDate()
      },
      {
        nome: "",
        inicio:"",
        createdAt: newDate(),
        updatedAt: newDate()
       },
       {
        nome: "",
        inicio:"",
        createdAt: newDate(),
        updatedAt: newDate()
       },
       {
        nome: "",
        inicio:"",
        createdAt: newDate(),
        updatedAt: newDate()
       }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('People', null, {});
  }
};
