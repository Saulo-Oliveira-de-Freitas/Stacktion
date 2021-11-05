
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('devskills', [{
        devId: 1,
        skillId: 1,
        skillLevel: "Junior",
        createdAt: new Date(),
          updatedAt: new Date()
      },
      { devId:2 ,
        skillId: 2,
        skillLevel: "Senior",
        createdAt: new Date(),
          updatedAt: new Date()
      },
    
      {
        devId: 3 ,
        skillId:9 ,
        skillLevel:"Senior",
        createdAt: new Date(),
          updatedAt: new Date()
      },
      
      {
        devId: 4,
        skillId:6 ,
        skillLevel:"Senior",
        createdAt: new Date(),
          updatedAt: new Date()
      },
      
      { 
        devId: 5,
        skillId: 8,
        skillLevel:'Pleno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        devId: 6,
        skillId: 3,
        skillLevel:"Junior",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      { devId: 7,
        skillId: 4,
        skillLevel:"pleno",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('devskills', null, {});
     
  }
};
