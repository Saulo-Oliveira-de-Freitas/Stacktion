
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('devprojetos', [
        
    {
        devId: 1,
        projetoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
        devId: 2,
        projetoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
      devId: 3,
      projetoId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      devId: 4,
      projetoId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      devId: 5,
      projetoId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      devId: 6,
      projetoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }

   
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('devprojetos', null, {});
     
  }
};
