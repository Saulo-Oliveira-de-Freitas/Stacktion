'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [{
      user: 'Saulo Freitas',
      tipo: 'admin',
      nome: 'Saulo Freitas',
      email: 'saulofreitas01@gmail.com',
      senha: 'admin123',
      telefone: "+55 61 9 9271 4845",
      bio: 'Dev fullstack JR',
      valor: 999 ,
      resetSenha: null,
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      user:"Pedro Novaes " ,
      tipo:"user" ,
      nome:"PedroDev@gmail.com" ,
      email: "PedroDev@gmail.com",
      senha: "pedro123",
      telefone:"+55 11 96438 9745" ,
      bio: "Desenvolvedor Fulstack JR - MERN stack " ,
      valor: 70,
      resetSenha: null,
      createdAt: new Date(),
      updatedAt: new Date()  
    }
    ,
    {
      user: "Alberto Neves"  ,
      tipo: "user",
      nome: "Alberto Neves" ,
      email:"AlbertoDB@outlook.com" ,
      senha: "alberto123",
      telefone: "+55 21 93271 5852",
      bio:"DBA expert com com mais de 20 anos de experiencia" ,
      valor: 532 ,
      resetSenha: null,
      createdAt: new Date(),
      updatedAt: new Date()  
    }
    ,
    {
      user:"Carlos Lacerda" ,
      tipo:"user" ,
      nome:"Carlos Lacerda" ,
      email: "carloslacerda@mail.com" ,
      senha: "carlos123",
      telefone: "+55 94 98928 4243" ,
      bio: "Desenvolvedor fullstack com 5 anos de experiência no mercado" ,
      valor: 120 ,
      resetSenha: null,
      createdAt: new Date(),
      updatedAt: new Date()  
    } ,
    {
      user: "Isa Silva",
      tipo:"user" ,
      nome:"Isa Silva" ,
      email: "isasilva@gmail.com",
      senha:"isa123"  ,
      telefone:"+55 30 99345 3245"  ,
      bio:"desenvolvedora back-end (Node.js) "  ,
      valor: 200,
      resetSenha: null,
      createdAt: new Date(),
      updatedAt: new Date()  
    }
  ],
   {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
