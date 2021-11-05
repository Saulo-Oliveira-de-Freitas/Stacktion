

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('clientes', [{
      clienteId:1 ,
      nome: "Abilío Povell",
      email: "AAbiliopov@outlook.com",
      senha: "abilio123",
      telefone:"+55 64 95486 6457" ,
      bio:"tech recruiter em bunca de talentos" ,
      createdAt: new Date(),
      updatedAt: new Date()
      },

      {clienteId:2 ,
        nome:"lalah Hathaway" ,
        email:"lalahtech@gmail.com" ,
        senha:"lalah123" ,
        telefone:"+1 555 888 777" ,
        bio: "busco devs capazes e interessados em trabalhar no exterior",
        createdAt: new Date(),
        updatedAt: new Date()},
      
        {clienteId: 3,
        nome: "marco silva",
        email: "marcosilva@gmail.com",
        senha: "marco123",
        telefone: "+54 95136 1654",
        bio: "quero sitema para minha mercearia",
        createdAt: new Date(),
        updatedAt: new Date()},
      
        {clienteId: 4,
        nome:"Enzo Faria Lima" ,
        email:"enzofarialimers@outlook.com" ,
        senha:"enzo123" ,
        telefone:"+55 11 96466 4484" ,
        bio:"Estou buscando alguém motivado e capacitado para desenvolver meu app inovador" ,
        createdAt: new Date(),
        updatedAt: new Date()}], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('clientes', null, {});
     
  }
};
