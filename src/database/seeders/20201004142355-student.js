'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('students', [
      {
        id: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        cpf: '12345678910',
        birthdate: new Date(),
        institution: 'Católica',
        grade: 8,
        cep: '73854647',
        number: 304,
        status: 1,
        special: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '12c06dd6-187a-4a50-927f-5d08b367ee89',
        cpf: '10987654321',
        birthdate: new Date(),
        institution: 'Universidade de Brasília',
        grade: 14,
        cep: '72865431',
        number: 12,
        details: 'Apartamento 1212',
        description: 'Descrição de aluno',
        special: false,
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};
