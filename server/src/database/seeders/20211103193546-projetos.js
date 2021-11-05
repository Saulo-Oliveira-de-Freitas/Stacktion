
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('projetos', [
      {
       nome: "Projeto App de Entrega",
       inicio:new Date(),
       createdAt: new Date(),
       updatedAt: new Date()
      },

      {
        nome: "ultra app mindset uber coach",
        inicio:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nome: "mecearia do marco",
        inicio:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nome: "pagina tech recruiter",
        inicio:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       }
       
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('projetos', null, {});
  }
};
