'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('skills', [
    {
      skill: 'HTML/CSS/JS',
      categoria: 'Web Front-end',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'React',
      categoria: 'Web Front-end',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Node.js',
      categoria: 'Web Front-end',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'MYSQL',
      categoria: 'Banco de Dados',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Java',
      categoria: 'Programação',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'C++',
      categoria: 'Programação',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'C#',
      categoria: 'Programação',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'Python',
      categoria: 'Programação',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'React Native',
      categoria: 'Desenvolvimento Mobile',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

    {
      skill: 'TensorFlow',
      categoria: 'Machine Learning',
      createdAt: new Date(),
      updatedAt: new Date()    
    },

  ],
   {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('skills', null, {});
    
  }
};
