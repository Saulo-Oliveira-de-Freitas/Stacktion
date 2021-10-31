'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('skills', [{
       skillname: 'HTML/CSS',
       category: 'Desenvolvimento Web'
     },
    {
      skillname:'Javascript',
      category: 'Desenvolvimento Web'
    },
    {
      skillname:'React',
      category: 'Desenvolvimento WEB'
    },
    {
      skillname:'Node.js',
      category: 'Desenvolvimento Web'
    },
    {
      skillname:'C',
      category: 'Programação'
    },
    {
      skillname:'MYSQL',
      category: 'Banco de Dados'
    },
    {
      skillname:'MongoDB',
      category: 'Banco de Dados'
    },{
      skillname:'PHP',
      category: 'Programação'
    },{
      skillname:'SASS',
      category: 'Desenvolvimento Web'
    },{
      skillname:'UX/UI',
      category: 'Design'
    },{
      skillname:'PostgreSQL',
      category: 'Banco de Dados'
    },{
      skillname:'Angular',
      category: 'Desenvolvimento Web'
    },{
      skillname:'Python',
      category: 'Programação'
    },{
      skillname:'React Native',
      category: 'Desenvolvimento Mobile'
    },{
      skillname:'Kotlin',
      category: 'Desenvolvimento Mobile'
    },{
      skillname:'Swift',
      category: 'Desenvolvimento Mobile'
    },{
      skillname:'Java',
      category: 'Programação'
    },{
      skillname:'Express',
      category: 'Desenvolvimento Web'
    },{
      skillname:'Graphql',
      category: 'Banco de Dados'
    },{
      skillname:'Adobe illustrator',
      category: 'Design'
    },{
      skillname:'Pandas',
      category: 'Data Science'
    },
    {
      skillname:'Photoshop',
      category: 'Design'
    },
    {
      skillname:'Tensorflow',
      category: 'Machine Learning'
    },{
      skillname:'typescript',
      category: 'Desenvolvimento Web'
    },
    {
      skillname:'Vue.js',
      category: 'Desenvolvimento Web'
    },
    {
      skillname:'oracle',
      category: 'Banco de Dados'
    },
    {
      skillname:'matlab',
      category: 'Data Science'
    },
    {
      skillname:'Laravel',
      category: 'Desenvolvimento Web'
    },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('skills', null, {});
     
  }
};
