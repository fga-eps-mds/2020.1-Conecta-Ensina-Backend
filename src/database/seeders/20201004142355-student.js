'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('students', [{
      id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
      grade: 4,
      institution: 'catolica',
      cep: '73854647',
      number: 304,
      description: 'aluno normal',
      birthdate: new Date(),
      special: true,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};
