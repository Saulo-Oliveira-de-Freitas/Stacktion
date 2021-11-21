'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('user_skills', [
    {
      userId: 'sauloFreitas',
      skillId: 'HTML/CSS/JS',
      nivel: 'Junior',
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    
    {
      userId: 'Pedro Novaes ',
      skillId: 'React',
      nivel: 'Junior',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    {
      userId: 'Alberto Neves',
      skillId: 'Java',
      nivel: 'Senior',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    {
      userId: "Carlos Lacerda",
      skillId: 'Python',
      nivel: 'Senior',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    {
      userId: 'Isa Silva',
      skillId: 'C#',
      nivel: 'Pleno',
      createdAt: new Date(),
      updatedAt: new Date()   
    },

    
  ],
   {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_skills', null, {});
    
  }
};
