
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('clienteprojetos', [{
        clienteId:1 ,
        projetoId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clienteId:2,
        projetoId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clienteId:3,
        projetoId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clienteId:4,
        projetoId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('clienteprojetos', null, {});
    
  }
};
