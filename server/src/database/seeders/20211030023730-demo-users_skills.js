'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('users_skills', [{
        users_id: 1,
        skills_id: 1,
        skill_level: "Junior"
      },
      {users_id:2 ,
        skills_id: 2,
        skill_level: "Senior"
      },
    
      {users_id: 3 ,
        skills_id:9 ,
        skill_level:"Senior"},
      
      {users_id: 4,
        skills_id:6 ,
        skill_level:"Senior"},
      
      {users_id: 5,
        skills_id: 8,
        skill_level:'Pleno'},
      
      {users_id: 6,
        skills_id:3 ,
        skill_level:"Junior"},
      
      {users_id: 7,
        skills_id: 4,
        skill_level:"pleno"},
      
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('users_skills', null, {});
     
  }
};
