'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teachers', [{
      institution: 'Universidade Catolica',
      cpf: 12345678994,
      cep: 73854647,
      number: 304,
      details: 'none',
      description: 'O melhor professor da Conecta',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      graduation: 'Ensino Superior Incompleto',
      graduationArea: 'Engenharia de Software',
      degree: 'Ensino Superior Incompleto',
      bank: 'Banco do Brasil',
      agency: '1778-7',
      account: '50043-5',
      status: '0',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
