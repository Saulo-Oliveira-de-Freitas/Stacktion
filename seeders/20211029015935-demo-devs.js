



module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('devs', [
        {
          devId: 1,
          nome: "Saulo Freitas",
          email:"saulofreitas01@gmail.com",
          senha:"admin123",
          telefone:"+55 54 99271 4845",
          bio: "Dev fullstack",
          valor: 999,
          createdAt: new Date(),
          updatedAt: new Date()
        
        }
        ,
        {
            
        devId: 2,  
        nome: "Carlos Lacerda" ,
        email: "carloslacerda@mail.com",
        senha: "carlos123",
        telefone: "+55 94 98928 4243" ,
        bio: "Desenvolvedor fullstack com 5 anos de experiência no mercado",
        valor: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        devId: 3,
        nome: "Lídia Campos" ,
        email: "lidia@lidiaUI.com" ,
        senha: "lidia123" ,
        telefone: "+55 11 97243 5178" ,
        bio: "Pesquisadora da aréa de UX/UI pela USP e freelancer nas horas vagas" ,
        valor: 170 ,
        createdAt: new Date(),
        updatedAt: new Date()
         
      },{
        devId: 4,
        nome: "Alberto Neves" ,
        email: "AlbertoDB@outlook.com" ,
        senha: "alberto123",
        telefone: "+55 21 93271 5852",
        bio: "DBA expert com com mais de 20 anos de experiencia",
        valor: 250,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },{
        devId: 5,
        nome: "Douglas veiga" ,
        email: "Douglasv@gmail.com",
        senha: "douglas123",
        telefone:" +55 44 91424 7658" ,
        bio: "Desenvolvedor PHP especializado em Laravel",
        valor:  120,
        createdAt: new Date(),
          updatedAt: new Date()
      },{
        devId: 6,
        nome:"Pedro Novaes " ,
        email: "PedroDev@gmail.com" ,
        senha: "pedro123",
        telefone:"+55 11 96438 9745" ,
        bio: "Desenvolvedor Fulstack JR - MERN stack " ,
        valor: 70,
        createdAt: new Date(),
        updatedAt: new Date()
        
        
      },{
        devId: 7,
        nome: "Isa Silva" ,
        email:"isasilva@gmail.com" ,
        senha:"isa123" ,
        telefone:"+55 30 99345 3245" ,
        bio:"desenvolvedora back-end (Node.js) " ,
        valor: 130,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        devId: 8,
        nome: "Maico Jerso" ,
        email: "mj@gmail.com",
        senha: "maico123",
        telefone:" +55 44 91424 7658" ,
        bio: "Desenvolvedor C#",
        valor:  120,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        devId: 9,
        nome: "Wilso Wallace" ,
        email: "will@gmail.com",
        senha: "willlas123",
        telefone:" +55 44 91424 7658" ,
        bio: "Desenvolvedor Java",
        valor:  120,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        devId: 10,
        nome: "Roberta Furacão" ,
        email: "roberval@gmail.com",
        senha: "rob123",
        telefone:" +55 44 91424 7658" ,
        bio: "Desenvolvedor C# especializado em Limpeza do C#",
        valor:  120,
        createdAt: new Date(),
          updatedAt: new Date()
      }
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('devs', null, {});
    
  }
};
