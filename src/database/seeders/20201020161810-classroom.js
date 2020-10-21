'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('classrooms', [
      {
        id: 'f00c1ee9-078b-4b61-8e3f-a23d68da4312',
        teacher: 'dfd29066-cd25-485c-8722-b429291d0ea3',
        student: '3bd7c190-ce64-4827-8c0c-58cfef45ad9f',
        grade: 13,
        subject: 1,
        dtclass: new Date(),
        duration: 1,
        cep: '73854647',
        number: 304,
        details: 1,
        status: 1,
        timer: '02:00:00',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('classrooms', null, {});
  }
};
