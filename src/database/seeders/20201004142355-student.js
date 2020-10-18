'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', [{
      grade: 4,
      institution: 'catolica',
      cpf: '75604854124',
      cep: '73854647',
      number: 304,
      details: 'none',
      description: 'aluno normal',
      adulthood: true,
      special: 'aluno normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
